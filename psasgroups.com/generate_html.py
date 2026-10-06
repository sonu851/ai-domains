import os
import sys

TARGET_DIR = r"C:\Users\sonus\.gemini\antigravity-ide\scratch\ai-domains\psasgroups.com"
sys.path.insert(0, TARGET_DIR)

from config import SUBSIDIARIES

def build_html():
    subs_cards_html = ""
    for sub in SUBSIDIARIES:
        tags_html = "".join([f'<span class="sub-tag">{t}</span>' for t in sub["tags"]])
        subs_cards_html += f'''
        <div class="subsidiary-card" data-category="{sub['category']}" data-id="{sub['id']}">
            <div class="card-glow" style="background: radial-gradient(circle, {sub['color']}22 0%, transparent 70%);"></div>
            <div class="card-top-row">
                <span class="category-badge-sm">{sub['category']}</span>
                <span class="kpi-pill" style="border-color: {sub['color']}55; color: {sub['color']};">{sub['kpi']}</span>
            </div>
            
            <div class="brand-header-row">
                <div class="brand-name-box">
                    <h3 class="subsidiary-name">{sub['name']}</h3>
                    <a href="https://{sub['domain']}" target="_blank" rel="noopener noreferrer" class="domain-direct-link">
                        <span>{sub['domain']}</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>
                </div>
                <div class="live-status-pill">
                    <span class="live-dot"></span> LIVE
                </div>
            </div>

            <p class="subsidiary-desc">{sub['desc']}</p>

            <div class="tags-row">
                {tags_html}
            </div>

            <div class="card-actions-row">
                <a href="https://{sub['domain']}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
                    <span>Visit {sub['name']}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                <button class="btn btn-secondary btn-sm inspect-sub-btn" data-sub-id="{sub['id']}">
                    <span>Company Specs</span>
                </button>
            </div>
        </div>
        '''

    categories = [
        "All Subsidiaries (10)",
        "Voice & Conversational Agents",
        "Vision & Spatial Robotics",
        "Cybersecurity & Defense",
        "Commerce & Procurement",
        "Enterprise Knowledge & RAG",
        "Cloud Collaboration & SaaS",
        "Swarm Automation & Workflows",
        "Industrial Digital Twins",
        "Infrastructure & Supercompute",
        "Federated Learning & Consortium"
    ]
    filter_buttons_html = "".join([f'<button class="filter-btn {"active" if i == 0 else ""}" data-filter="{c}">{c}</button>' for i, c in enumerate(categories)])

    return f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PSAS GROUPS GLOBAL | The Frontier AI Conglomerate (psasgroups.com)</title>
    <meta name="description" content="PSAS Groups is the global artificial intelligence conglomerate engineering autonomous intelligence, sovereign supercompute, and 10 mission-critical enterprise ventures across Europe and the globe.">
    <meta name="keywords" content="PSAS Groups, PSAS Groups Global, AI conglomerate, enterprise AI holding, sovereign supercompute, yapa.si, vtu.si, psasecurity.si, buypsa.si, lkq.si, psao.si, psas.si, psasgroup.si">
    
    <!-- OpenGraph & Twitter -->
    <meta property="og:title" content="PSAS GROUPS GLOBAL | The Frontier AI Conglomerate">
    <meta property="og:description" content="Global parent holding company uniting 10 specialized artificial intelligence enterprises across voice, vision, defense, procurement, RAG, and industrial digital twins.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://psasgroups.com">
    <meta name="twitter:card" content="summary_large_image">
    
    <!-- Inline SVG Favicon -->
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='8' fill='%23050811'/><circle cx='16' cy='16' r='8' fill='%236366F1'/><circle cx='8' cy='8' r='3' fill='%2300F0FF'/><circle cx='24' cy='8' r='3' fill='%23D946EF'/><circle cx='8' cy='24' r='3' fill='%2300FF9D'/><circle cx='24' cy='24' r='3' fill='%23F59E0B'/></svg>">
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&family=Syne:wght@600;700;800&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Ambient Space Background Glows -->
    <div class="ambient-glow glow-top"></div>
    <div class="ambient-glow glow-left"></div>
    <div class="ambient-glow glow-right"></div>

    <!-- Global Navigation Header -->
    <header class="global-header">
        <div class="nav-container">
            <a href="#hero" class="brand-link">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" rx="10" fill="url(#global-grad)" />
                    <circle cx="20" cy="20" r="5" fill="#FFFFFF"/>
                    <circle cx="12" cy="12" r="3" fill="#00F0FF"/>
                    <circle cx="28" cy="12" r="3" fill="#D946EF"/>
                    <circle cx="12" cy="28" r="3" fill="#00FF9D"/>
                    <circle cx="28" cy="28" r="3" fill="#F59E0B"/>
                    <path d="M14 14L18 18M26 14L22 18M14 26L18 22M26 26L22 22" stroke="#FFFFFF" stroke-width="1.5" stroke-opacity="0.7"/>
                    <defs>
                        <linearGradient id="global-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#6366F1"/>
                            <stop offset="0.5" stop-color="#38BDF8"/>
                            <stop offset="1" stop-color="#D946EF"/>
                        </linearGradient>
                    </defs>
                </svg>
                <div class="brand-text-block">
                    <span class="brand-title">PSAS GROUPS</span>
                    <span class="brand-tld">GLOBAL HOLDING • psasgroups.com</span>
                </div>
            </a>

            <nav class="desktop-nav">
                <a href="#ecosystem">Venture Ecosystem</a>
                <a href="#synergies">Conglomerate Architecture</a>
                <a href="#supercompute">Global Supercompute</a>
                <a href="#governance">Governance & Safety</a>
                <a href="#contact">Investor Relations</a>
            </nav>

            <div class="header-actions">
                <a href="#ecosystem" class="btn btn-ghost">All 10 Companies</a>
                <button class="btn btn-primary open-lead-btn" data-interest="Institutional Conglomerate Inquiry">Institutional Access</button>
            </div>
        </div>
    </header>

    <main>
        <!-- Hero Section -->
        <section class="hero-section" id="hero">
            <div class="hero-content">
                <div class="conglomerate-pill">
                    <span class="pill-dot"></span>
                    <span>GLOBAL ARTIFICIAL INTELLIGENCE CONGLOMERATE</span>
                    <span class="pill-highlight">● 10 SPECIALIZED VENTURES</span>
                </div>
                
                <h1 class="hero-headline">
                    Powering the Autonomous Global Economy.<br>
                    <span class="gradient-text">One Unified Frontier AI Holding.</span>
                </h1>
                
                <p class="hero-subtext">
                    PSAS Groups is the parent innovation holding company engineering autonomous intelligence, sovereign supercomputing clusters, and mission-critical enterprise ventures across robotics, cyber defense, procurement, knowledge search, and industrial digital twins.
                </p>

                <div class="hero-btn-row">
                    <a href="#ecosystem" class="btn btn-primary btn-lg">
                        <span>Explore 10 AI Subsidiaries</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </a>
                    <button class="btn btn-secondary btn-lg open-lead-btn" data-interest="Global Partnership">
                        <span>Sovereign & Enterprise Inquiries</span>
                    </button>
                </div>

                <!-- Conglomerate Metrics Bar -->
                <div class="global-metrics-deck">
                    <div class="metric-card">
                        <span class="metric-num">10</span>
                        <span class="metric-label">Frontier AI Ventures</span>
                        <span class="metric-detail">100% Live & Operational</span>
                    </div>
                    <div class="metric-card">
                        <span class="metric-num">12.8</span>
                        <span class="metric-unit">PFLOPS</span>
                        <span class="metric-label">Dedicated Supercompute</span>
                        <span class="metric-detail">100% Geothermal & Hydro</span>
                    </div>
                    <div class="metric-card">
                        <span class="metric-num">$2.4B+</span>
                        <span class="metric-label">Enterprise Portfolio Value</span>
                        <span class="metric-detail">Institutional Capital Reserve</span>
                    </div>
                    <div class="metric-card">
                        <span class="metric-num">45+</span>
                        <span class="metric-label">Sovereign Markets</span>
                        <span class="metric-detail">EU AI Act & SOC-2 Certified</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Venture Ecosystem Showcase Section -->
        <section class="ecosystem-section" id="ecosystem">
            <div class="section-container">
                <div class="section-header">
                    <span class="section-tag">GLOBAL PORTFOLIO</span>
                    <h2 class="section-title">The 10 Subsidiaries of PSAS Groups</h2>
                    <p class="section-desc">Every company within the PSAS Groups portfolio solves a distinct, mission-critical frontier AI discipline with deterministic precision and dedicated sovereign hosting.</p>
                </div>

                <!-- Filter Row -->
                <div class="filter-shelf">
                    {filter_buttons_html}
                </div>

                <!-- 10 Subsidiaries Grid -->
                <div class="subsidiaries-grid" id="subsidiaries-grid">
                    {subs_cards_html}
                </div>
            </div>
        </section>

        <!-- Conglomerate Interlocking Architecture -->
        <section class="synergies-section" id="synergies">
            <div class="section-container">
                <div class="section-header">
                    <span class="section-tag">CONGLOMERATE SYNERGIES</span>
                    <h2 class="section-title">How Our 10 Companies Interlock</h2>
                    <p class="section-desc">By sharing unified compute backbones, federated intelligence loops, and institutional governance, each subsidiary achieves 10x greater efficiency than standalone startups.</p>
                </div>

                <div class="synergies-pipeline-grid">
                    <div class="synergy-stage">
                        <div class="stage-badge">TIER 1 • INFRASTRUCTURE</div>
                        <h3>Sovereign Compute & Federation</h3>
                        <p><strong>PSAS Group AI (psasgroup.si)</strong> provides 12.8 PFLOPS of green supercompute, while <strong>PSAS Groups Network (psasgroups.si)</strong> coordinates zero-knowledge federated learning gradients across institutional clusters.</p>
                    </div>
                    <div class="synergy-stage">
                        <div class="stage-badge">TIER 2 • REASONING ENGINES</div>
                        <h3>Domain Neural Engines</h3>
                        <p>Specialized perceptual models: <strong>YAPA AI</strong> (Voice & Conversational), <strong>VTU AI</strong> (120 FPS Computer Vision), <strong>LKQ AI</strong> (Deep RAG & Grounded Retrieval), and <strong>PSAS AI</strong> (Physics-Informed Digital Twins).</p>
                    </div>
                    <div class="synergy-stage">
                        <div class="stage-badge">TIER 3 • ENTERPRISE EXECUTION</div>
                        <h3>Autonomous Execution Swarms</h3>
                        <p>Mission-critical operations: <strong>PSAO AI</strong> (DAG Swarm Orchestration), <strong>BUYPSA AI</strong> (Autonomous Sourcing), <strong>PSA Security AI</strong> (Zero-Day Cyber Defense), and <strong>LKQ Online</strong> (Team Knowledge OS).</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Global Supercomputing Nodes -->
        <section class="supercompute-section" id="supercompute">
            <div class="section-container">
                <div class="supercompute-box">
                    <div class="sc-header">
                        <span class="section-tag">GLOBAL DATACENTER GRID</span>
                        <h2>12.8 PFLOPS Sovereign Zero-Carbon Compute</h2>
                        <p>Our distributed datacenters deliver low-latency inference and training infrastructure across Europe and North America.</p>
                    </div>

                    <div class="datacenter-nodes-grid">
                        <div class="node-card active-node">
                            <div class="node-region">LJUBLJANA (SI-01)</div>
                            <div class="node-power">4.2 PFLOPS • Geothermal Powered</div>
                            <div class="node-ping">Latency: 1.8ms • Load: 84%</div>
                        </div>
                        <div class="node-card">
                            <div class="node-region">ZURICH (CH-01)</div>
                            <div class="node-power">3.8 PFLOPS • Tier IV Hydro-Electric</div>
                            <div class="node-ping">Latency: 4.2ms • Load: 79%</div>
                        </div>
                        <div class="node-card">
                            <div class="node-region">REYKJAVIK (IS-01)</div>
                            <div class="node-power">4.8 PFLOPS • 100% Volcanic Clean Energy</div>
                            <div class="node-ping">Latency: 9.1ms • Load: 91%</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Institutional Governance & Compliance -->
        <section class="governance-section" id="governance">
            <div class="section-container">
                <div class="governance-card">
                    <span class="section-tag">INSTITUTIONAL GOVERNANCE</span>
                    <h2>Trust, Alignment, and Sovereign Security</h2>
                    <p>Every subsidiary within PSAS Groups operates under immutable safety boundaries and international compliance audits.</p>
                    
                    <div class="compliance-badges-grid">
                        <div class="badge-item">
                            <strong>EU AI Act Ready</strong>
                            <span>Strict Article 6 high-risk conformity & transparency lineage.</span>
                        </div>
                        <div class="badge-item">
                            <strong>SOC-2 Type II Certified</strong>
                            <span>Audited controls across all cloud workloads and data boundaries.</span>
                        </div>
                        <div class="badge-item">
                            <strong>ISO/IEC 27001</strong>
                            <span>International gold standard in information security governance.</span>
                        </div>
                        <div class="badge-item">
                            <strong>Zero Data Exfiltration</strong>
                            <span>Guaranteed zero-data-retention and private VPC sovereign enclaves.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Institutional Lead Inquiries Section -->
        <section class="contact-section" id="contact">
            <div class="section-container">
                <div class="inquiry-banner">
                    <h2>Partner with PSAS Groups Global</h2>
                    <p>Connect with our executive board, explore enterprise licensing across all 10 companies, or discuss sovereign AI partnerships.</p>
                    <button class="btn btn-primary btn-lg open-lead-btn" data-interest="Executive Conglomerate Partnership">
                        <span>Schedule Executive Briefing</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </button>
                </div>
            </div>
        </section>
    </main>

    <!-- Global Footer -->
    <footer class="global-footer">
        <div class="footer-container">
            <div class="footer-col brand-col">
                <div class="footer-brand">
                    <span class="footer-brand-title">PSAS GROUPS GLOBAL</span>
                </div>
                <p class="footer-brand-desc">The frontier artificial intelligence conglomerate uniting 10 specialized enterprise companies across Europe and global sovereign markets.</p>
                <div class="footer-domain-note">Parent Holding: <strong>psasgroups.com</strong></div>
                <div class="footer-status">
                    <span class="live-dot"></span> All 10 Subsidiary Clusters Operational (99.999% SLA)
                </div>
            </div>

            <div class="footer-col">
                <h4>Conversational & Vision</h4>
                <ul>
                    <li><a href="https://yapa.si" target="_blank" rel="noopener">YAPA AI (yapa.si)</a></li>
                    <li><a href="https://vtu.si" target="_blank" rel="noopener">VTU AI (vtu.si)</a></li>
                    <li><a href="https://psasecurity.si" target="_blank" rel="noopener">PSA Security AI (psasecurity.si)</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h4>Knowledge & Sourcing</h4>
                <ul>
                    <li><a href="https://buypsa.si" target="_blank" rel="noopener">BuyPSA AI (buypsa.si)</a></li>
                    <li><a href="https://lkq.si" target="_blank" rel="noopener">LKQ AI (lkq.si)</a></li>
                    <li><a href="https://lkqonline.si" target="_blank" rel="noopener">LKQ Online AI (lkqonline.si)</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h4>Industrial & Infrastructure</h4>
                <ul>
                    <li><a href="https://psao.si" target="_blank" rel="noopener">PSAO AI (psao.si)</a></li>
                    <li><a href="https://psas.si" target="_blank" rel="noopener">PSAS AI (psas.si)</a></li>
                    <li><a href="https://psasgroup.si" target="_blank" rel="noopener">PSAS Group AI (psasgroup.si)</a></li>
                    <li><a href="https://psasgroups.si" target="_blank" rel="noopener">PSAS Groups Network (psasgroups.si)</a></li>
                </ul>
            </div>
        </div>

        <div class="footer-bottom">
            <div class="footer-bottom-container">
                <p>&copy; 2026 PSAS Groups Global (psasgroups.com). All rights reserved. Global Artificial Intelligence Holding Company.</p>
                <div class="legal-pills">
                    <span>European Union AI Act Ready</span>
                    <span>•</span>
                    <span>ISO 27001 Certified</span>
                    <span>•</span>
                    <span>Sovereign Cloud Grid</span>
                </div>
            </div>
        </div>
    </footer>

    <!-- Subsidiary Details Modal -->
    <div class="modal-backdrop" id="sub-modal">
        <div class="modal-card">
            <button class="modal-close-btn" id="close-sub-modal">&times;</button>
            <div class="modal-header">
                <span class="category-badge-sm" id="modal-category">SUBSIDIARY OVERVIEW</span>
                <h3 id="modal-sub-name">Company Name</h3>
                <p id="modal-tagline">Tagline</p>
            </div>
            
            <div class="modal-body-content">
                <div class="modal-kpi-banner">
                    <span class="m-kpi-label">KEY ARCHITECTURAL BENCHMARK:</span>
                    <span class="m-kpi-value" id="modal-kpi">Metric</span>
                </div>
                <p id="modal-full-desc">Description</p>
                
                <div class="modal-domain-cta">
                    <a href="#" id="modal-domain-btn" target="_blank" rel="noopener" class="btn btn-primary btn-block">
                        <span>Launch Dedicated Website</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- Institutional Lead Modal -->
    <div class="modal-backdrop" id="lead-modal">
        <div class="modal-card">
            <button class="modal-close-btn" id="close-lead-modal">&times;</button>
            <div class="modal-header">
                <h3>Institutional Conglomerate Inquiries</h3>
                <p>Request an executive consultation or sovereign AI infrastructure allocation.</p>
            </div>
            
            <form id="lead-form" class="modal-form">
                <input type="hidden" id="lead-interest-input" value="Conglomerate Inquiry">
                <div class="form-group">
                    <label>Executive Full Name *</label>
                    <input type="text" id="lead-name" required placeholder="e.g. Dr. Janez Novak">
                </div>
                <div class="form-group">
                    <label>Institutional Work Email *</label>
                    <input type="email" id="lead-email" required placeholder="name@institution.com">
                </div>
                <div class="form-group">
                    <label>Organization / Sovereign Entity *</label>
                    <input type="text" id="lead-org" required placeholder="e.g. Sovereign Wealth Fund / Enterprise">
                </div>
                <div class="form-group">
                    <label>Subsidiaries of Interest</label>
                    <input type="text" id="lead-subs" placeholder="e.g. All 10 companies, VTU AI, or PSA Security">
                </div>
                <button type="submit" class="btn btn-primary btn-block">Submit Institutional Brief</button>
            </form>
        </div>
    </div>

    <!-- Toast Alert -->
    <div class="toast-container" id="toast-container">
        <div class="toast-message" id="toast-message">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366F1" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            <span id="toast-text">Success</span>
        </div>
    </div>

    <script src="app.js"></script>
</body>
</html>
'''

# Write HTML
html_content = build_html()
with open(os.path.join(TARGET_DIR, "index.html"), "w", encoding="utf-8") as f:
    f.write(html_content)
print(f"Generated index.html ({len(html_content)} bytes)")
