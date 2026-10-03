/**
 * LKQ ONLINE AI (lkqonline.si)
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

            showToast(`Thank you ${name}! Deployment brief for ${company} (${plan}) on lkqonline.si received. Our lead architect will contact you within 2 hours.`);
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
    
        // LKQ Online Workspace Tabs
        const tabs = document.querySelectorAll(".workspace-tabs-bar .tab-btn");
        const docCanvas = document.getElementById("canvas-content");

        const tabData = {
            eng: {
                title: "Architecture RFC: Distributed Multi-Tenant Vector Partitioning",
                status: "Approved by Security Council",
                summary: "The engineering team has aligned on sharding tenant vector indices across NVMe storage tiers with AES-256-GCM encryption keys. Estimated latency reduction: 34%."
            },
            legal: {
                title: "EU AI Act Compliance & Model Transparency Dossier",
                status: "Ready for Statutory Audit",
                summary: "Documentation of training data lineage, risk classification thresholds, and human-oversight checkpoints validated for Article 6 compliance."
            },
            prod: {
                title: "Q3 2026 Sovereign Cloud & Edge Deployment Roadmap",
                status: "In Progress (Sprint 14)",
                summary: "Delivery of on-premise Kubernetes Helm charts and sub-millisecond edge inference runtimes for industrial partners."
            }
        };

        tabs.forEach(btn => {
            btn.addEventListener("click", () => {
                tabs.forEach(t => t.classList.remove("active"));
                btn.classList.add("active");
                const tKey = btn.getAttribute("data-tab");
                const d = tabData[tKey];
                if (d && docCanvas) {
                    docCanvas.innerHTML = `
                        <h3>${d.title}</h3>
                        <p><strong>Current Status:</strong> ${d.status}</p>
                        <p><strong>AI Copilot Summary:</strong> ${d.summary}</p>
                        <div class="copilot-action-box">
                            <span class="copilot-badge">✨ LKQ Online Copilot:</span>
                            <p id="copilot-stream-text">"Synchronized across workspace channels and referenced in project knowledge base."</p>
                        </div>
                    `;
                }
            });
        });

        document.getElementById("copilot-sync-action")?.addEventListener("click", () => {
            showToast("Real-time collaborative state synced across 3 team members.");
        });

        document.getElementById("copilot-summarize-thread")?.addEventListener("click", () => {
            showToast("Meeting executive brief generated and posted to #general.");
        });

        document.getElementById("copilot-export-notion")?.addEventListener("click", () => {
            showToast("Document exported to Enterprise Notion Workspace.");
        });
        
});
