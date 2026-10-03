/**
 * PSA SECURITY AI (psasecurity.si)
 * High-Performance Client Logic
 */

document.addEventListener("DOMContentLoaded", () => {
    // Mobile Drawer Toggle
    const mobileBtn = document.getElementById("mobile-menu-btn");
    const mobileDrawer = document.getElementById("mobile-drawer");
    if (mobileBtn && mobileDrawer) {
        mobileBtn.addEventListener("click", () => {
            mobileDrawer.classList.toggle("open");
        });
        document.querySelectorAll(".mob-link").forEach(link => {
            link.addEventListener("click", () => mobileDrawer.classList.remove("open"));
        });
    }

    // Pricing Billing Toggle (Annual / Monthly)
    const pricingToggle = document.getElementById("pricing-toggle");
    const priceVals = document.querySelectorAll(".price-val");
    const monthlyLbl = document.getElementById("monthly-label");
    const annualLbl = document.getElementById("annual-label");

    if (pricingToggle) {
        pricingToggle.addEventListener("change", (e) => {
            const isAnnual = e.target.checked;
            if (isAnnual) {
                monthlyLbl.classList.remove("active");
                annualLbl.classList.add("active");
            } else {
                monthlyLbl.classList.add("active");
                annualLbl.classList.remove("active");
            }

            priceVals.forEach(el => {
                const monthly = el.getAttribute("data-monthly");
                const annual = el.getAttribute("data-annual");
                el.textContent = isAnnual ? annual : monthly;
            });
        });
    }

    // FAQ Accordion
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        const btn = item.querySelector(".faq-question");
        if (btn) {
            btn.addEventListener("click", () => {
                const wasActive = item.classList.contains("active");
                faqItems.forEach(i => i.classList.remove("active"));
                if (!wasActive) item.classList.add("active");
            });
        }
    });

    // Modal Handling
    const modal = document.getElementById("contact-modal");
    const closeBtn = document.getElementById("close-modal-btn");
    const openBtns = document.querySelectorAll(".open-contact-btn");
    const planInput = document.getElementById("selected-plan-input");
    const modalTitle = document.getElementById("modal-title");

    openBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const plan = btn.getAttribute("data-plan") || "Enterprise Deployment";
            if (planInput) planInput.value = plan;
            if (modalTitle) modalTitle.textContent = "Deploy " + plan;
            if (modal) modal.classList.add("open");
        });
    });

    if (closeBtn && modal) {
        closeBtn.addEventListener("click", () => modal.classList.remove("open"));
        modal.addEventListener("click", (e) => {
            if (e.target === modal) modal.classList.remove("open");
        });
    }

    // Form Submission & Toast
    const form = document.getElementById("onboarding-form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("form-name").value;
            const company = document.getElementById("form-company").value;
            const plan = planInput ? planInput.value : "Enterprise Deployment";

            if (modal) modal.classList.remove("open");
            form.reset();

            showToast(`Thank you ${name}! Deployment brief for ${company} (${plan}) on psasecurity.si received. Our lead architect will contact you within 2 hours.`);
        });
    }

    // Toast Function
    window.showToast = function(msg) {
        const toast = document.getElementById("toast-message");
        const toastText = document.getElementById("toast-text");
        if (toast && toastText) {
            toastText.textContent = msg;
            toast.classList.add("show");
            setTimeout(() => {
                toast.classList.remove("show");
            }, 4500);
        }
    };

    // Domain Specific Interactive Logic
    
        // PSA Security Operations Center Logs
        const logBox = document.getElementById("soc-log-stream");
        let attackCount = 3;

        document.getElementById("soc-inject-attack")?.addEventListener("click", () => {
            attackCount++;
            const now = new Date().toISOString().substring(11, 23);
            const alertLine = document.createElement("div");
            alertLine.className = "log-line alert";
            alertLine.textContent = `[${now}] CRITICAL: Ransomware C2 beacon detected (Cobalt Strike emulation) from external subnet.`;
            logBox.appendChild(alertLine);

            setTimeout(() => {
                const neutLine = document.createElement("div");
                neutLine.className = "log-line neutralized";
                neutLine.textContent = `[${now}] PSA AUTONOMOUS INTERCEPT: Malicious process terminated in 39ms. Memory payload sandboxed.`;
                logBox.appendChild(neutLine);
                logBox.scrollTop = logBox.scrollHeight;
                
                const countEl = document.getElementById("soc-threat-count");
                if (countEl) countEl.textContent = `${attackCount} THREATS INTERCEPTED`;
                showToast("Threat neutralized in 39ms. Incident ticket auto-filed.");
            }, 400);

            logBox.scrollTop = logBox.scrollHeight;
        });

        document.getElementById("soc-quarantine-all")?.addEventListener("click", () => {
            const now = new Date().toISOString().substring(11, 23);
            const lockLine = document.createElement("div");
            lockLine.className = "log-line neutralized";
            lockLine.textContent = `[${now}] PROTOCOL OMEGA: Strict zero-trust air-gap isolation enforced across all 1,492 workloads.`;
            logBox.appendChild(lockLine);
            logBox.scrollTop = logBox.scrollHeight;
            showToast("Zero-Trust perimeter isolation enforced.");
        });

        document.getElementById("soc-generate-forensics")?.addEventListener("click", () => {
            showToast("NIST SP 800-61 Forensic Audit generated and cryptographically signed.");
        });
        
});
