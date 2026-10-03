/**
 * PSAS GROUP AI (psasgroup.si)
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

            showToast(`Thank you ${name}! Deployment brief for ${company} (${plan}) on psasgroup.si received. Our lead architect will contact you within 2 hours.`);
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
    
        // PSAS Group Compute Dashboard
        const dcCards = document.querySelectorAll(".datacenter-card");
        dcCards.forEach(c => {
            c.addEventListener("click", () => {
                dcCards.forEach(card => card.classList.remove("active"));
                c.classList.add("active");
                const dc = c.getAttribute("data-dc");
                showToast(`Switched telemetry focus to region: ${dc.toUpperCase()} Supercomputing Node.`);
            });
        });

        document.getElementById("infra-rebalance-btn")?.addEventListener("click", () => {
            showToast("Global 12.8 PFLOPS compute cluster load rebalanced dynamically.");
        });

        document.getElementById("infra-audit-green")?.addEventListener("click", () => {
            showToast("Verified: 100% renewable geothermal & hydro power certificate verified.");
        });
        
});
