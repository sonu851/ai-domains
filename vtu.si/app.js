/**
 * VTU AI (vtu.si)
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

            showToast(`Thank you ${name}! Deployment brief for ${company} (${plan}) on vtu.si received. Our lead architect will contact you within 2 hours.`);
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
    
        // VTU Computer Vision Canvas Simulation
        const canvas = document.getElementById("vtu-vision-canvas");
        if (canvas) {
            const ctx = canvas.getContext("2d");
            let showBoxes = true;
            let showExtraCrack = false;
            let fpsMode = 120;
            
            let frame = 0;
            function renderVision() {
                ctx.fillStyle = "#07100D";
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                // Grid lines
                ctx.strokeStyle = "rgba(0, 255, 157, 0.1)";
                ctx.lineWidth = 1;
                for (let x = 0; x < canvas.width; x += 40) {
                    ctx.beginPath();
                    ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height);
                    ctx.stroke();
                }
                for (let y = 0; y < canvas.height; y += 40) {
                    ctx.beginPath();
                    ctx.moveTo(0, y); ctx.lineTo(canvas.width, y);
                    ctx.stroke();
                }

                // Optical crosshairs in center
                const cx = canvas.width / 2;
                const cy = canvas.height / 2;
                ctx.strokeStyle = "rgba(0, 255, 157, 0.4)";
                ctx.strokeRect(cx - 20, cy - 20, 40, 40);

                if (showBoxes) {
                    // Object 1: Robotic Arm Assembly
                    const bx1 = 120 + Math.sin(frame * 0.02) * 20;
                    const by1 = 80;
                    ctx.strokeStyle = "#00FF9D";
                    ctx.lineWidth = 2;
                    ctx.strokeRect(bx1, by1, 190, 160);
                    ctx.fillStyle = "rgba(0, 255, 157, 0.15)";
                    ctx.fillRect(bx1, by1, 190, 24);
                    ctx.fillStyle = "#00FF9D";
                    ctx.font = "12px monospace";
                    ctx.fillText("ROBOTIC_ARM_6AXIS [99.8%]", bx1 + 6, by1 + 16);

                    // Object 2: Conveyor Gearbox
                    const bx2 = 380;
                    const by2 = 140 + Math.cos(frame * 0.02) * 10;
                    ctx.strokeStyle = "#05DFD7";
                    ctx.strokeRect(bx2, by2, 160, 120);
                    ctx.fillStyle = "rgba(5, 223, 215, 0.15)";
                    ctx.fillRect(bx2, by2, 160, 24);
                    ctx.fillStyle = "#05DFD7";
                    ctx.fillText("BEARING_HOUSING [98.9%]", bx2 + 6, by2 + 16);

                    // Defect 1: Micro Surface Defect
                    ctx.strokeStyle = "#EF4444";
                    ctx.lineWidth = 2;
                    ctx.strokeRect(bx2 + 40, by2 + 45, 55, 40);
                    ctx.fillStyle = "#EF4444";
                    ctx.fillText("DEFECT: 8um CRACK", bx2 + 35, by2 + 38);

                    if (showExtraCrack) {
                        ctx.strokeStyle = "#EF4444";
                        ctx.strokeRect(bx1 + 50, by1 + 70, 60, 40);
                        ctx.fillText("DEFECT: SOLDER_BRIDGE", bx1 + 45, by1 + 65);
                    }
                }

                frame++;
                requestAnimationFrame(renderVision);
            }
            renderVision();

            document.getElementById("vtu-toggle-detection")?.addEventListener("click", () => {
                showBoxes = !showBoxes;
                showToast(showBoxes ? "Bounding boxes ENABLED" : "Bounding boxes HIDDEN");
            });

            document.getElementById("vtu-toggle-defect-scan")?.addEventListener("click", () => {
                showExtraCrack = !showExtraCrack;
                const defectEl = document.getElementById("vtu-defects-found");
                if (defectEl) defectEl.textContent = showExtraCrack ? "DEFECTS DETECTED: 2" : "DEFECTS DETECTED: 1";
                showToast(showExtraCrack ? "Flagged secondary solder anomaly on Assembly A-12" : "Resolved anomaly filter");
            });

            document.getElementById("vtu-toggle-fps")?.addEventListener("click", () => {
                fpsMode = fpsMode === 120 ? 240 : 120;
                const fpsEl = document.getElementById("vtu-fps-counter");
                const latEl = document.getElementById("vtu-latency");
                if (fpsEl) fpsEl.textContent = fpsMode + " FPS";
                if (latEl) latEl.textContent = (fpsMode === 240 ? "0.19ms" : "0.38ms") + " Edge Tensor";
                showToast("Sensor frequency locked to " + fpsMode + " FPS");
            });
        }
        
});
