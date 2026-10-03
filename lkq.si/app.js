/**
 * LKQ AI (lkq.si)
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

            showToast(`Thank you ${name}! Deployment brief for ${company} (${plan}) on lkq.si received. Our lead architect will contact you within 2 hours.`);
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
    
        // LKQ Deep RAG Search Engine
        const queryBtn = document.getElementById("rag-run-query");
        const queryInput = document.getElementById("rag-query-input");
        const cite1 = document.getElementById("cite-1");
        const cite2 = document.getElementById("cite-2");
        const excerptBox = document.getElementById("rag-excerpt");

        cite1?.addEventListener("click", () => {
            cite1.classList.add("active");
            cite2.classList.remove("active");
            excerptBox.textContent = `"...Notwithstanding anything in Section 14.1 to the contrary, aggregate indemnification obligations arising out of Section 12 (Confidentiality) shall in no event exceed Twenty-Five Million United States Dollars ($25,000,000) or thirty-six (36) months of aggregate platform fees..."`;
        });

        cite2?.addEventListener("click", () => {
            cite2.classList.add("active");
            cite1.classList.remove("active");
            excerptBox.textContent = `"...Schedule D, Paragraph 1: Governing law shall be the laws of the Republic of Slovenia and EU regulatory frameworks without regard to conflicts of law principles..."`;
        });

        queryBtn?.addEventListener("click", () => {
            const val = queryInput.value.trim();
            if (!val) return;
            showToast("Vectorized query across 2.8M documents in 18ms. Zero speculation verified.");
        });
        
});
