import os

TARGET_DIR = r"C:\Users\sonus\.gemini\antigravity-ide\scratch\ai-domains\psasgroups.com"
os.makedirs(TARGET_DIR, exist_ok=True)

SUBSIDIARIES = [
    {
        "id": "yapa",
        "domain": "yapa.si",
        "name": "YAPA AI",
        "category": "Voice & Conversational Agents",
        "tagline": "Autonomous Voice & Conversational Intelligence",
        "desc": "Next-generation sub-180ms conversational voice agents fusing neural acoustic encoding, dynamic emotional cadence, and autonomous enterprise tool calling.",
        "kpi": "<180ms Latency",
        "color": "#00F0FF",
        "tags": ["Voice Synthesis", "Autonomous Calling", "45+ Dialects"]
    },
    {
        "id": "vtu",
        "domain": "vtu.si",
        "name": "VTU AI",
        "category": "Vision & Spatial Robotics",
        "tagline": "Vision Tensor Unit & Neural Video Analytics",
        "desc": "Ultra-low-latency 120 FPS 4K edge computer vision powering 5-micron manufacturing defect detection, robotic path planning, and real-time spatial geometry reconstruction.",
        "kpi": "120 FPS 4K Vision",
        "color": "#00FF9D",
        "tags": ["Edge Inference", "5-Micron Precision", "Robotics NeRF"]
    },
    {
        "id": "psasecurity",
        "domain": "psasecurity.si",
        "name": "PSA SECURITY AI",
        "category": "Cybersecurity & Defense",
        "tagline": "Predictive Security & Autonomous Threat Defense",
        "desc": "Autonomous cyber defense platform operating in kernel-level eBPF memory spaces to intercept zero-day intrusions and isolate attack kill-chains within 42 milliseconds.",
        "kpi": "42ms Containment",
        "color": "#FF0055",
        "tags": ["Zero-Day Intercept", "eBPF Kernel Probes", "Quantum Safe"]
    },
    {
        "id": "buypsa",
        "domain": "buypsa.si",
        "name": "BUYPSA AI",
        "category": "Commerce & Procurement",
        "tagline": "Autonomous B2B Sourcing Marketplace",
        "desc": "Autonomous enterprise procurement network deploying multi-agent game-theory negotiation agents across 180,000+ verified global suppliers to cut spend by 28%.",
        "kpi": "28.4% Spend Cut",
        "color": "#F59E0B",
        "tags": ["Auto-Negotiation", "ERP Integration", "180K+ Suppliers"]
    },
    {
        "id": "lkq",
        "domain": "lkq.si",
        "name": "LKQ AI",
        "category": "Enterprise Knowledge & RAG",
        "tagline": "Latent Knowledge Query & Neural Retrieval",
        "desc": "High-dimensional enterprise Deep RAG engine unifies petabytes of legal contracts, patents, and engineering schematics into sub-second grounded answers with page-level citations.",
        "kpi": "99.8% Grounded Truth",
        "color": "#6366F1",
        "tags": ["Zero Hallucination", "Multi-Vector RAG", "Air-Gapped Vault"]
    },
    {
        "id": "lkqonline",
        "domain": "lkqonline.si",
        "name": "LKQ ONLINE AI",
        "category": "Cloud Collaboration & SaaS",
        "tagline": "Cloud Collaborative Knowledge Operating System",
        "desc": "Real-time collaborative AI workspace connecting distributed engineering, legal, and product teams with live synchronized canvases and automated meeting-to-code pipelines.",
        "kpi": "14 hrs Saved/Wk",
        "color": "#0EA5E9",
        "tags": ["Live Team Sync", "Slack & Drive Native", "CMEK Encryption"]
    },
    {
        "id": "psao",
        "domain": "psao.si",
        "name": "PSAO AI",
        "category": "Swarm Automation & Workflows",
        "tagline": "Multi-Agent Swarm Orchestration Engine",
        "desc": "Deterministic orchestration engine governing coordinated teams of specialized autonomous AI agents with DAG task decomposition, self-healing retries, and human-in-the-loop gates.",
        "kpi": "10,000+ Concurrency",
        "color": "#14B8A6",
        "tags": ["Deterministic DAG", "OpenTelemetry Traces", "Human Checkpoints"]
    },
    {
        "id": "psas",
        "domain": "psas.si",
        "name": "PSAS AI",
        "category": "Industrial Digital Twins",
        "tagline": "Industrial Digital Twins & Predictive Telemetry",
        "desc": "Physics-Informed Neural Networks (PINN) correlated with 100 kHz industrial IoT sensor feeds to forecast mechanical failures and bearing fatigue 72 hours before shutdown.",
        "kpi": "72h Pre-Failure Notice",
        "color": "#FF6B4A",
        "tags": ["PINN Physics Deep Learning", "100 kHz Telemetry", "SCADA & Modbus"]
    },
    {
        "id": "psasgroup",
        "domain": "psasgroup.si",
        "name": "PSAS GROUP AI",
        "category": "Infrastructure & Supercompute",
        "tagline": "Frontier AI Holding & Compute Infrastructure",
        "desc": "Frontier supercomputing facilities operating 12.8 PFLOPS of dedicated GPU superclusters powered by 100% renewable geothermal energy, funding high-conviction vertical AI labs.",
        "kpi": "12.8 PFLOPS Green Compute",
        "color": "#3B82F6",
        "tags": ["Geothermal Datacenters", "Venture Studio", "Sovereign AI Clouds"]
    },
    {
        "id": "psasgroups_si",
        "domain": "psasgroups.si",
        "name": "PSAS GROUPS NETWORK",
        "category": "Federated Learning & Consortium",
        "tagline": "Federated Learning & Collaborative Ecosystem",
        "desc": "Zero-knowledge decentralized machine learning network enabling hospitals, banking syndicates, and research institutions to train state-of-the-art models collaboratively under differential privacy.",
        "kpi": "ε = 0.05 Privacy Budget",
        "color": "#D946EF",
        "tags": ["Zero-Knowledge SMPC", "Decentralized Nodes", "GDPR Guaranteed"]
    }
]

print(f"Loaded {len(SUBSIDIARIES)} subsidiaries for psasgroups.com")
