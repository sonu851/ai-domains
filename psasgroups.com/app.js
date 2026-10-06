/**
 * PSAS GROUPS GLOBAL (psasgroups.com)
 * High-Performance Client Logic
 */

document.addEventListener("DOMContentLoaded", () => {
    // 10 Subsidiaries Data Registry
    const subsidiaries = {
        yapa: {
            name: "YAPA AI",
            domain: "yapa.si",
            url: "https://yapa.si",
            category: "Voice & Conversational Agents",
            tagline: "Autonomous Voice & Conversational Intelligence",
            kpi: "<180ms Latency SLA",
            desc: "YAPA AI transforms customer experience with real-time speech perception, acoustic tone adaptation, and autonomous tool calling. Operates on proprietary zero-buffer neural acoustic encoders across 45+ languages."
        },
        vtu: {
            name: "VTU AI",
            domain: "vtu.si",
            url: "https://vtu.si",
            category: "Vision & Spatial Robotics",
            tagline: "Vision Tensor Unit & Neural Video Analytics",
            kpi: "120 FPS 4K Edge Inference",
            desc: "VTU AI powers aerospace inspection, high-speed assembly lines, and autonomous robotics with sub-millimeter 5-micron defect detection and real-time 3D spatial occupancy geometry."
        },
        psasecurity: {
            name: "PSA SECURITY AI",
            domain: "psasecurity.si",
            url: "https://psasecurity.si",
            category: "Cybersecurity & Defense",
            tagline: "Predictive Security & Autonomous Threat Defense",
            kpi: "42ms Autonomous Quarantine",
            desc: "Military-grade autonomous defense agent operating via kernel eBPF probes. Detects zero-day memory injections, halts lateral living-off-the-land malware, and enforces post-quantum cryptographic posture."
        },
        buypsa: {
            name: "BUYPSA AI",
            domain: "buypsa.si",
            url: "https://buypsa.si",
            category: "Commerce & Procurement",
            tagline: "Autonomous B2B Sourcing Marketplace",
            kpi: "28.4% Average Spend Savings",
            desc: "Deploy autonomous multi-agent game-theory negotiation agents across 180,000+ verified European and global suppliers. Auto-generates RFQs, audits supplier risk, and syncs directly with SAP & NetSuite."
        },
        lkq: {
            name: "LKQ AI",
            domain: "lkq.si",
            url: "https://lkq.si",
            category: "Enterprise Knowledge & RAG",
            tagline: "Latent Knowledge Query & Neural Retrieval",
            kpi: "99.8% Grounded Truth (0.01% Hallucination)",
            desc: "Turn terabytes of technical engineering blueprints, patent filings, and confidential legal documentation into sub-second conversational answers with mathematical source citations and paragraph hash verification."
        },
        lkqonline: {
            name: "LKQ ONLINE AI",
            domain: "lkqonline.si",
            url: "https://lkqonline.si",
            category: "Cloud Collaboration & SaaS",
            tagline: "Cloud Collaborative Knowledge Operating System",
            kpi: "14 Hours Saved / Employee / Week",
            desc: "The cloud operating system for distributed knowledge work. Automatically synthesizes living canvases, synchronizes project contexts from Slack, Jira, and Drive, with customer-managed encryption keys (CMEK)."
        },
        psao: {
            name: "PSAO AI",
            domain: "psao.si",
            url: "https://psao.si",
            category: "Swarm Automation & Workflows",
            tagline: "Multi-Agent Swarm Orchestration Engine",
            kpi: "10,000+ Concurrent Agent Swarms",
            desc: "Deterministic DAG orchestration engine. Analyzes complex enterprise goals, dispatches specialized micro-agents in parallel, enforces human approval gates, and provides standardized OpenTelemetry traces."
        },
        psas: {
            name: "PSAS AI",
            domain: "psas.si",
            url: "https://psas.si",
            category: "Industrial Digital Twins",
            tagline: "Industrial Digital Twins & Predictive Telemetry",
            kpi: "72-Hour Pre-Failure Warning",
            desc: "High-frequency telemetry analysis for heavy industry, energy grids, and manufacturing. Combines 100 kHz vibration sensors with Physics-Informed Neural Networks (PINN) to prevent catastrophic mechanical downtime."
        },
        psasgroup: {
            name: "PSAS GROUP AI",
            domain: "psasgroup.si",
            url: "https://psasgroup.si",
            category: "Infrastructure & Supercompute",
            tagline: "Frontier AI Holding & Compute Infrastructure",
            kpi: "12.8 PFLOPS Sovereign Green Supercompute",
            desc: "The foundational compute and research infrastructure pillar of PSAS Groups. Operates 100% renewable geothermal and hydro GPU clusters across Europe, incubating next-epoch foundational AI models."
        },
        psasgroups_si: {
            name: "PSAS GROUPS NETWORK",
            domain: "psasgroups.si",
            url: "https://psasgroups.si",
            category: "Federated Learning & Consortium",
            tagline: "Federated Learning & Collaborative Ecosystem",
            kpi: "ε = 0.05 Differential Privacy Guarantee",
            desc: "Zero-knowledge decentralized training consortium. Enables healthcare hospital networks, banking unions, and defense laboratories to train state-of-the-art models collaboratively without raw data ever leaving local servers."
        }
    };

    // Category Filter Buttons
    const filterBtns = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".subsidiary-card");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const filter = btn.getAttribute("data-filter");

            cards.forEach(card => {
                if (filter.startsWith("All") || card.getAttribute("data-category") === filter) {
                    card.style.display = "flex";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    // Subsidiary Inspection Modal
    const subModal = document.getElementById("sub-modal");
    const closeSubModal = document.getElementById("close-sub-modal");
    const inspectBtns = document.querySelectorAll(".inspect-sub-btn");

    const modalCategory = document.getElementById("modal-category");
    const modalName = document.getElementById("modal-sub-name");
    const modalTagline = document.getElementById("modal-tagline");
    const modalKpi = document.getElementById("modal-kpi");
    const modalDesc = document.getElementById("modal-full-desc");
    const modalDomainBtn = document.getElementById("modal-domain-btn");

    inspectBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const subId = btn.getAttribute("data-sub-id");
            const data = subsidiaries[subId];
            if (!data) return;

            modalCategory.textContent = data.category.toUpperCase();
            modalName.textContent = data.name;
            modalTagline.textContent = data.tagline;
            modalKpi.textContent = data.kpi;
            modalDesc.textContent = data.desc;
            modalDomainBtn.href = data.url;
            modalDomainBtn.innerHTML = `<span>Visit ${data.name} (${data.domain})</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;

            if (subModal) subModal.classList.add("open");
        });
    });

    if (closeSubModal && subModal) {
        closeSubModal.addEventListener("click", () => subModal.classList.remove("open"));
        subModal.addEventListener("click", (e) => {
            if (e.target === subModal) subModal.classList.remove("open");
        });
    }

    // Lead Inquiries Modal
    const leadModal = document.getElementById("lead-modal");
    const closeLeadModal = document.getElementById("close-lead-modal");
    const openLeadBtns = document.querySelectorAll(".open-lead-btn");
    const leadForm = document.getElementById("lead-form");
    const leadInterestInput = document.getElementById("lead-interest-input");

    openLeadBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const interest = btn.getAttribute("data-interest") || "General Conglomerate Inquiry";
            if (leadInterestInput) leadInterestInput.value = interest;
            if (leadModal) leadModal.classList.add("open");
        });
    });

    if (closeLeadModal && leadModal) {
        closeLeadModal.addEventListener("click", () => leadModal.classList.remove("open"));
        leadModal.addEventListener("click", (e) => {
            if (e.target === leadModal) leadModal.classList.remove("open");
        });
    }

    if (leadForm) {
        leadForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("lead-name").value;
            const org = document.getElementById("lead-org").value;
            leadModal.classList.remove("open");
            leadForm.reset();
            showToast(`Thank you, ${name}. Your executive inquiry on behalf of ${org} has been submitted to the PSAS Groups Global board.`);
        });
    }

    // Datacenter Click Toggle
    const dcNodes = document.querySelectorAll(".node-card");
    dcNodes.forEach(node => {
        node.addEventListener("click", () => {
            dcNodes.forEach(n => n.classList.remove("active-node"));
            node.classList.add("active-node");
            const reg = node.querySelector(".node-region").textContent;
            showToast(`Active compute telemetry synchronized to node: ${reg}`);
        });
    });

    // Toast Function
    window.showToast = function(msg) {
        const toast = document.getElementById("toast-message");
        const toastText = document.getElementById("toast-text");
        if (toast && toastText) {
            toastText.textContent = msg;
            toast.classList.add("show");
            setTimeout(() => {
                toast.classList.remove("show");
            }, 5000);
        }
    };
});
