/**
 * PSAS AI (psas.si)
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

            showToast(`Thank you ${name}! Deployment brief for ${company} (${plan}) on psas.si received. Our lead architect will contact you within 2 hours.`);
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
    
        // PSAS Digital Twin Simulation
        const vibVal = document.getElementById("twin-vib-val");
        const vibBar = document.getElementById("twin-vib-bar");
        const tempVal = document.getElementById("twin-temp-val");
        const tempBar = document.getElementById("twin-temp-bar");
        const predText = document.getElementById("twin-pred-text");

        document.getElementById("twin-simulate-bearing-wear")?.addEventListener("click", () => {
            if (vibVal && vibBar && predText) {
                vibVal.textContent = "4.82 mm/s";
                vibVal.style.color = "#EF4444";
                vibBar.style.width = "88%";
                vibBar.style.background = "#EF4444";
                predText.innerHTML = `<span style="color: #EF4444; font-weight: bold;">CRITICAL ANOMALY DETECTED:</span> Inner raceway bearing fatigue identified. MTBF failure predicted in <strong>68.4 hours</strong>. Auto-generated replacement ticket in SAP PM.`;
                showToast("Forewarning: Anomaly flagged 68 hours before catastrophic mechanical lockup.");
            }
        });

        document.getElementById("twin-simulate-thermal-spike")?.addEventListener("click", () => {
            if (tempVal && tempBar) {
                tempVal.textContent = "98.4 °C";
                tempVal.style.color = "#EF4444";
                tempBar.style.width = "92%";
                tempBar.style.background = "#EF4444";
                showToast("Thermal gradient alert: Lube oil pressure compensation dispatched.");
            }
        });

        document.getElementById("twin-reset")?.addEventListener("click", () => {
            if (vibVal && vibBar && tempVal && tempBar && predText) {
                vibVal.textContent = "1.42 mm/s";
                vibVal.style.color = "#FF6B4A";
                vibBar.style.width = "28%";
                vibBar.style.background = "#FF6B4A";
                tempVal.textContent = "74.2 °C";
                tempVal.style.color = "#FF6B4A";
                tempBar.style.width = "44%";
                tempBar.style.background = "#FF6B4A";
                predText.innerHTML = `All parameters operating within healthy baseline tolerances. Projected Remaining Useful Life (RUL): <strong>14,800 Operating Hours</strong>. Probability of anomaly in next 72 hours: <strong>0.04%</strong>.`;
                showToast("Telemetry restored to normal baseline.");
            }
        });
        
});
