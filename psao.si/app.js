/**
 * PSAO AI (psao.si)
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

            showToast(`Thank you ${name}! Deployment brief for ${company} (${plan}) on psao.si received. Our lead architect will contact you within 2 hours.`);
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
    
        // PSAO Swarm Dispatch Execution
        const dispatchBtn = document.getElementById("swarm-dispatch-btn");
        const resetBtn = document.getElementById("swarm-reset-btn");
        const outputLog = document.getElementById("swarm-output-log");

        const statusRoot = document.getElementById("status-root");
        const statusRes = document.getElementById("status-researcher");
        const statusCoder = document.getElementById("status-coder");
        const statusAudit = document.getElementById("status-auditor");

        const nodeRes = document.getElementById("node-researcher");
        const nodeCoder = document.getElementById("node-coder");
        const nodeAudit = document.getElementById("node-auditor");

        dispatchBtn?.addEventListener("click", () => {
            outputLog.textContent = "[00:00.040] Orchestrator decomposing objective into 3 DAG sub-tasks...";
            statusRoot.textContent = "RUNNING";
            
            setTimeout(() => {
                outputLog.textContent += "\n[00:00.120] Dispatched Researcher, Synthesizer & Compliance Auditor in parallel.";
                statusRes.textContent = "RUNNING";
                statusCoder.textContent = "RUNNING";
                statusAudit.textContent = "RUNNING";
                nodeRes.classList.add("active-node");
                nodeCoder.classList.add("active-node");
                nodeAudit.classList.add("active-node");
            }, 300);

            setTimeout(() => {
                statusRes.textContent = "COMPLETED";
                statusCoder.textContent = "COMPLETED";
                statusAudit.textContent = "COMPLETED";
                statusRoot.textContent = "CONVERGED";
                outputLog.textContent += "\n[00:00.418] All sub-tasks completed and verified. Deterministic state preserved. (Total latency: 418ms).";
                showToast("Multi-Agent Swarm execution converged in 418ms!");
            }, 850);
        });

        resetBtn?.addEventListener("click", () => {
            statusRoot.textContent = "READY";
            statusRes.textContent = "QUEUED";
            statusCoder.textContent = "QUEUED";
            statusAudit.textContent = "QUEUED";
            nodeRes.classList.remove("active-node");
            nodeCoder.classList.remove("active-node");
            nodeAudit.classList.remove("active-node");
            outputLog.textContent = 'Click "Dispatch Swarm Task" to watch autonomous agents decompose, execute in parallel, and converge.';
        });
        
});
