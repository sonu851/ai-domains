/**
 * YAPA AI (yapa.si)
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

            showToast(`Thank you ${name}! Deployment brief for ${company} (${plan}) on yapa.si received. Our lead architect will contact you within 2 hours.`);
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
    
        // YAPA Voice Waveform Animation
        const canvas = document.getElementById("yapa-waveform-canvas");
        if (canvas) {
            const ctx = canvas.getContext("2d");
            let phase = 0;
            let activeAnimation = true;
            
            function resizeCanvas() {
                canvas.width = canvas.parentElement.clientWidth;
                canvas.height = 90;
            }
            resizeCanvas();
            window.addEventListener("resize", resizeCanvas);

            function drawWaveform() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                const centerY = canvas.height / 2;
                ctx.lineWidth = 2.5;
                ctx.strokeStyle = "#00F0FF";
                ctx.shadowBlur = 12;
                ctx.shadowColor = "#00F0FF";

                ctx.beginPath();
                for (let x = 0; x < canvas.width; x++) {
                    const amp = Math.sin(x * 0.015 + phase) * 20 * Math.sin(x * 0.005);
                    const y = centerY + Math.sin(x * 0.05 + phase * 2) * (15 + amp * 0.5);
                    if (x === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.stroke();

                // Second harmonic
                ctx.beginPath();
                ctx.strokeStyle = "rgba(112, 0, 255, 0.4)";
                ctx.lineWidth = 1.5;
                for (let x = 0; x < canvas.width; x++) {
                    const y = centerY + Math.cos(x * 0.04 - phase * 1.5) * 12;
                    if (x === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.stroke();

                phase += 0.05;
                if (activeAnimation) requestAnimationFrame(drawWaveform);
            }
            drawWaveform();
        }

        // Prompt Simulators
        const prompts = {
            p1: {
                user: '"Hey YAPA, can you verify our European logistics order #4928 and reroute shipping to Ljubljana if customs are delayed?"',
                agent: '"Checking ERP customs manifest for #4928... Detected a 14-hour transit delay at Trieste port. I have autonomously initiated the reroute protocol through Ljubljana hub with zero tariff penalty. Confirmation sent to your procurement Slack channel."',
                tool: '● Tool Executed: ERP.RerouteTransit'
            },
            p2: {
                user: '"YAPA, our CEO is stranded in Frankfurt due to flight cancellation. Book the fastest first-class connection to Zurich before 17:00."',
                agent: '"Priority request recognized. Scanning Lufthansa and Swiss Air GDS inventory... Reserved Seat 2A on Swiss LX-1073 departing FRA at 15:40. Calendar hold created and boarding pass dispatched to CEO mobile wallet."',
                tool: '● Tool Executed: Sabre.DirectGDSBooking'
            },
            p3: {
                user: '"A merchant flagged a fraudulent €12,500 wire transfer from our Munich treasury account. Halt transaction immediately."',
                agent: '"EMERGENCY PROTOCOL ACTIVATED: Dispatched SWIFT MT192 stop-payment recall on transfer #TX-90184. Freezing associated API token and dispatching 2FA challenge to CFO."',
                tool: '● Tool Executed: SWIFT.MT192Recall'
            }
        };

        function simulateYapa(key) {
            const p = prompts[key];
            const userEl = document.getElementById("yapa-user-speech");
            const agentEl = document.getElementById("yapa-agent-reply");
            const latencyEl = document.getElementById("yapa-latency");
            
            if (userEl && agentEl) {
                userEl.textContent = p.user;
                agentEl.textContent = "Analyzing acoustic pitch and dispatching neural tool calling...";
                
                const randomLat = Math.floor(Math.random() * 35) + 135;
                setTimeout(() => {
                    agentEl.textContent = p.agent;
                    if (latencyEl) latencyEl.textContent = randomLat + "ms";
                    showToast("YAPA processed request in " + randomLat + "ms with zero human intervention.");
                }, 350);
            }
        }

        document.getElementById("yapa-trigger-prompt-1")?.addEventListener("click", () => simulateYapa("p1"));
        document.getElementById("yapa-trigger-prompt-2")?.addEventListener("click", () => simulateYapa("p2"));
        document.getElementById("yapa-trigger-prompt-3")?.addEventListener("click", () => simulateYapa("p3"));
        
        document.getElementById("yapa-tone-select")?.addEventListener("change", (e) => {
            const personaEl = document.getElementById("yapa-active-persona");
            if (personaEl) personaEl.textContent = e.target.options[e.target.selectedIndex].text.split(" ")[0];
            showToast("Adapted acoustic tone model to: " + e.target.value);
        });
        
});
