// ==========================================================================
// PSAS GROUPS (psasgroups.si) - Apple Design System Engine
// Fluid Micro-Interactions | WWDC Spring Behaviors | Direct Manipulation
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Code Snippets Data
  const codeSnippets = {
    curl: "curl -X POST \"https://api.psasgroups.si/v1/federated/round/participate\" \\\n  -H \"Authorization: Bearer fl_live_node9981...\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n    \"cluster_id\": \"eu-health-federation-04\",\n    \"epoch\": 42,\n    \"encrypted_gradient_uri\": \"ipfs://bafybeihd...\",\n    \"differential_privacy_epsilon\": 0.08\n  }'",
    python: "import psasgroups as fl\n\n# Initialize local sovereign hospital node\nnode = fl.FederatedNode(\n    node_id=\"hospital-ljubljana-oncology\",\n    private_data_dir=\"/secure/medical_images\",\n    privacy_budget_epsilon=0.1\n)\n\n# Train locally on private patient records without data leaving hospital\nlocal_gradients = node.train_epoch(batch_size=32)\nencrypted_payload = node.encrypt_homomorphic(local_gradients)\n\n# Submit only encrypted mathematical weights to global aggregator\nfl.submit_round_update(round_id=84, payload=encrypted_payload)\nprint(\"Round update submitted. Zero patient records transmitted.\")",
    ts: "import { PSASFederatedNode } from '@psasgroups/fl-sdk';\n\nconst node = new PSASFederatedNode({\n  nodeId: 'banking-consortium-node-12',\n  differentialPrivacy: true\n});\n\nawait node.participateInFederatedRound();"
  };

  let currentLang = 'curl';
  const codeDisplay = document.getElementById('code-display');
  const codeTabBtns = document.querySelectorAll('.code-tab-btn');
  const copyBtn = document.getElementById('copy-code-btn');

  // Code Tab Switcher
  codeTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      codeTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentLang = btn.getAttribute('data-lang');
      if (codeDisplay && codeSnippets[currentLang]) {
        codeDisplay.innerHTML = '<code>' + escapeHtml(codeSnippets[currentLang]) + '</code>';
      }
    });
  });

  // Copy Code Button
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const textToCopy = codeSnippets[currentLang] || '';
      navigator.clipboard.writeText(textToCopy).then(() => {
        copyBtn.innerHTML = '<span>Copied! ✓</span>';
        showToast('Code snippet copied to clipboard.');
        setTimeout(() => {
          copyBtn.innerHTML = '<span>Copy Snippet</span>';
        }, 2000);
      }).catch(() => {
        showToast('Failed to copy to clipboard.');
      });
    });
  }

  // 2. Interactive Pro App Simulator Scenarios
  const simActionBtns = document.querySelectorAll('.sim-action-btn');
  const promptDisplay = document.getElementById('sim-prompt-display');
  const replyDisplay = document.getElementById('sim-reply-display');
  const toolDisplay = document.getElementById('sim-tool-display');
  const latVal = document.getElementById('sim-lat-val');

  simActionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      simActionBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const prompt = btn.getAttribute('data-prompt');
      const reply = btn.getAttribute('data-reply');
      const tool = btn.getAttribute('data-tool');
      const lat = btn.getAttribute('data-lat');

      if (promptDisplay) promptDisplay.textContent = prompt;
      if (replyDisplay) {
        replyDisplay.style.opacity = '0.5';
        replyDisplay.textContent = 'Processing neural tensor inference...';
      }

      setTimeout(() => {
        if (replyDisplay) {
          replyDisplay.style.opacity = '1';
          replyDisplay.textContent = reply;
        }
        if (toolDisplay) toolDisplay.textContent = tool;
        if (latVal) latVal.textContent = lat;
        showToast('Inference completed in ' + lat + '.');
      }, 260);
    });
  });

  // 3. iOS-Style Pricing Toggle Switcher
  const pricingToggle = document.getElementById('pricing-toggle');
  const pricingOptions = document.querySelectorAll('.pricing-switch-option');
  const pricingCards = document.querySelectorAll('.pricing-card');

  if (pricingToggle) {
    pricingOptions.forEach(opt => {
      opt.addEventListener('click', () => {
        pricingOptions.forEach(o => o.classList.remove('active'));
        opt.classList.add('active');
        const billing = opt.getAttribute('data-billing');

        pricingCards.forEach(card => {
          const priceVal = card.querySelector('[data-price-val]');
          const periodVal = card.querySelector('.price-period');
          const monthly = card.getAttribute('data-monthly');
          const annual = card.getAttribute('data-annual');

          if (billing === 'monthly') {
            if (priceVal) priceVal.textContent = monthly;
            if (periodVal) periodVal.textContent = '/ month billed monthly';
          } else {
            if (priceVal) priceVal.textContent = annual;
            if (periodVal) periodVal.textContent = '/ month billed annually';
          }
        });
      });
    });
  }

  // 4. Apple FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        // Close all others for strict Apple cleanliness
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isOpen) {
          item.classList.add('active');
        }
      });
    }
  });

  // 5. Apple Modal Sheet & Scrim
  const modal = document.getElementById('access-modal');
  const modalClose = document.getElementById('modal-close');
  const openModalBtns = document.querySelectorAll('.open-modal-btn');
  const modalForm = document.getElementById('modal-form');

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (modal) modal.classList.add('open');
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', () => {
      if (modal) modal.classList.remove('open');
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
      modal.classList.remove('open');
    }
  });

  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      modal.classList.remove('open');
      modalForm.reset();
      showToast('Enterprise Access Request Dispatched. A sovereign engineer will respond in under 15 minutes.');
    });
  }

  // 6. Smooth Toast Messenger
  function showToast(msg) {
    let toast = document.getElementById('apple-toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3400);
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
});
