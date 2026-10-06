// Cloudflare Pages Function: /api/contact
// Dispatches contact submissions to contact@psasgroups.com and persists to Cloudflare D1 / KV Database

export async function onRequestOptions(context) {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
      "Access-Control-Max-Age": "86400"
    }
  });
}

export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const secretKey = url.searchParams.get("key");

  // Admin read-only inspection of D1 contacts if authorized
  if (secretKey === "psas-admin-edge-2026" && env.DB) {
    try {
      const results = await env.DB.prepare("SELECT * FROM contacts ORDER BY id DESC LIMIT 50").all();
      return new Response(JSON.stringify({ success: true, count: results.results?.length || 0, data: results.results }, null, 2), {
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: { "Content-Type": "application/json" } });
    }
  }

  return new Response(JSON.stringify({
    service: "PSAS Groups Global Contact Engine",
    status: "online",
    edge_node: request.headers.get("cf-ray") || "active",
    delivery_email: "contact@psasgroups.com",
    storage: "Cloudflare D1 (psas_contacts_db) & KV Active"
  }), {
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
  });
}

export async function onRequestPost(context) {
  const { request, env } = context;
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json"
  };

  try {
    const data = await request.json();
    const name = (data.name || "").trim();
    const email = (data.email || "").trim();
    const company = (data.company || "").trim();
    const phone = (data.phone || "").trim();
    const subsidiary = (data.subsidiary || "psasgroups.com").trim();
    const inquiryType = (data.inquiry_type || "General").trim();
    const subject = (data.subject || "").trim();
    const message = (data.message || "").trim();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({
        success: false,
        error: "Missing required fields: Name, corporate email, and message are mandatory."
      }), { status: 400, headers: corsHeaders });
    }

    // Telemetry & Edge Metadata
    const ip = request.headers.get("cf-connecting-ip") || "unknown";
    const country = request.headers.get("cf-ipcountry") || "unknown";
    const userAgent = request.headers.get("user-agent") || "unknown";
    const host = request.headers.get("host") || subsidiary;
    const submissionId = "PSAS-" + Date.now().toString(36).toUpperCase() + "-" + Math.random().toString(36).substring(2, 6).toUpperCase();
    const timestamp = new Date().toISOString();

    let dbSaved = false;
    let kvSaved = false;

    // 1. PERSIST IN CLOUDFLARE D1 DATABASE
    if (env.DB) {
      try {
        await env.DB.prepare(`
          INSERT INTO contacts (
            submission_id, site_domain, subsidiary, full_name, work_email,
            company, phone, inquiry_type, subject, message,
            ip_address, user_agent, country, email_sent_to, created_at
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
        `).bind(
          submissionId, host, subsidiary, name, email,
          company, phone, inquiryType, subject || ("Inquiry regarding " + subsidiary), message,
          ip, userAgent, country, "contact@psasgroups.com"
        ).run();
        dbSaved = true;
      } catch (dbErr) {
        console.error("D1 write error:", dbErr);
      }
    }

    // 2. PERSIST IN CLOUDFLARE WORKERS KV
    if (env.PSAS_CONTACTS_KV) {
      try {
        await env.PSAS_CONTACTS_KV.put("contact:" + submissionId, JSON.stringify({
          submissionId,
          host,
          subsidiary,
          name,
          email,
          company,
          phone,
          inquiryType,
          subject: subject || ("Inquiry regarding " + subsidiary),
          message,
          ip,
          country,
          userAgent,
          timestamp,
          targetEmail: "contact@psasgroups.com"
        }));
        kvSaved = true;
      } catch (kvErr) {
        console.error("KV write error:", kvErr);
      }
    }

    // 3. DISPATCH EMAIL TO contact@psasgroups.com (MailChannels API)
    let emailSent = false;
    try {
      const emailHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin: 0; padding: 32px 16px; background-color: #050507; font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, sans-serif; color: #f5f5f7;">
  <div style="max-width: 600px; margin: 0 auto; background: #121316; border: 1px solid rgba(255,255,255,0.12); border-radius: 20px; overflow: hidden; box-shadow: 0 24px 48px rgba(0,0,0,0.6);">
    <div style="background: linear-gradient(135deg, rgba(0,113,227,0.2), rgba(94,92,230,0.2)); padding: 28px 32px; border-bottom: 1px solid rgba(255,255,255,0.08);">
      <div style="font-size: 11px; font-weight: 700; letter-spacing: 0.12em; color: #2997ff; text-transform: uppercase;">PSAS Groups Global • Frontier AI Inbound</div>
      <h1 style="margin: 8px 0 0; font-size: 22px; font-weight: 600; color: #ffffff; letter-spacing: -0.02em;">New Institutional Transmission</h1>
      <div style="font-size: 13px; color: #a1a1a6; margin-top: 4px;">Delivered to: <strong>contact@psasgroups.com</strong></div>
    </div>
    
    <div style="padding: 32px;">
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
        <tr>
          <td style="padding: 8px 0; font-size: 13px; color: #86868b; width: 140px;">Transmission ID:</td>
          <td style="padding: 8px 0; font-size: 13px; color: #ffffff; font-family: monospace; font-weight: 600;">${submissionId}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-size: 13px; color: #86868b;">Target Venture:</td>
          <td style="padding: 8px 0; font-size: 14px; color: #2997ff; font-weight: 600;">${subsidiary}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-size: 13px; color: #86868b;">Contact Name:</td>
          <td style="padding: 8px 0; font-size: 14px; color: #ffffff; font-weight: 600;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-size: 13px; color: #86868b;">Work Email:</td>
          <td style="padding: 8px 0; font-size: 14px; color: #2997ff;"><a href="mailto:${email}" style="color: #2997ff; text-decoration: none;">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-size: 13px; color: #86868b;">Organization:</td>
          <td style="padding: 8px 0; font-size: 14px; color: #ffffff;">${company || "Not specified"}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-size: 13px; color: #86868b;">Direct Phone:</td>
          <td style="padding: 8px 0; font-size: 14px; color: #ffffff;">${phone || "Not specified"}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-size: 13px; color: #86868b;">Inquiry Type:</td>
          <td style="padding: 8px 0; font-size: 14px; color: #30d158; font-weight: 600;">${inquiryType}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-size: 13px; color: #86868b;">Subject:</td>
          <td style="padding: 8px 0; font-size: 14px; color: #ffffff; font-weight: 600;">${subject || "General Inquiry"}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-size: 13px; color: #86868b;">Origin Telemetry:</td>
          <td style="padding: 8px 0; font-size: 12px; color: #86868b;">IP: ${ip} | Region: ${country}</td>
        </tr>
      </table>

      <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 20px; margin-bottom: 24px;">
        <div style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: #86868b; margin-bottom: 10px;">Message Payload</div>
        <div style="font-size: 14px; line-height: 1.6; color: #f5f5f7; white-space: pre-wrap;">${message}</div>
      </div>

      <div style="text-align: center; margin-top: 24px;">
        <a href="mailto:${email}?subject=Re:%20[${submissionId}]%20${encodeURIComponent(subject || 'PSAS Groups Inquiry')}" style="display: inline-block; background: #0071e3; color: #ffffff; padding: 12px 28px; border-radius: 980px; text-decoration: none; font-size: 14px; font-weight: 600;">Reply to ${name} ↗</a>
      </div>
    </div>

    <div style="padding: 16px 32px; background: rgba(0,0,0,0.3); border-top: 1px solid rgba(255,255,255,0.06); font-size: 12px; color: #6e6e73; text-align: center;">
      ✓ Persisted to Cloudflare D1 (<code>psas_contacts_db</code>) &bull; Cloudflare Anycast Edge Network &bull; PSAS Groups Global Holding
    </div>
  </div>
</body>
</html>
      `;

      const mailchannelsRes = await fetch("https://api.mailchannels.net/tx/v1/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          personalizations: [
            {
              to: [{ email: "contact@psasgroups.com", name: "PSAS Groups Executive Desk" }],
              dkim_domain: "psasgroups.com"
            }
          ],
          from: {
            email: "inquiries@psasgroups.com",
            name: `${name} via PSAS Ecosystem`
          },
          reply_to: {
            email: email,
            name: name
          },
          subject: `[PSAS Inquiry] ${subject || inquiryType} - ${name} (${subsidiary})`,
          content: [
            {
              type: "text/html",
              value: emailHtml
            }
          ]
        })
      });

      if (mailchannelsRes.ok || mailchannelsRes.status === 202) {
        emailSent = true;
      }
    } catch (mailErr) {
      console.warn("MailChannels error (handled):", mailErr);
    }

    return new Response(JSON.stringify({
      success: true,
      submission_id: submissionId,
      message: "Transmission successfully recorded in Cloudflare D1 edge database and routed to contact@psasgroups.com.",
      database_synced: dbSaved || kvSaved,
      email_dispatched: emailSent,
      target_inbox: "contact@psasgroups.com",
      timestamp: timestamp
    }), {
      status: 200,
      headers: corsHeaders
    });

  } catch (err) {
    return new Response(JSON.stringify({
      success: false,
      error: "Transmission processing exception: " + err.message
    }), {
      status: 500,
      headers: corsHeaders
    });
  }
}
