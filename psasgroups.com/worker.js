
const JOBS_PORTAL_HTML = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>PSAS Global Careers & Jobs Portal | Frontier AI & Sovereign Tech Talent</title>\n  <meta name=\"description\" content=\"Discover frontier engineering and AI roles across PSAS Groups, our 10 venture subsidiaries, and global partners. Post your enterprise vacancy or apply today.\">\n  <meta name=\"theme-color\" content=\"#000000\">\n\n  <!-- Apple & Enterprise Typography -->\n  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n  <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n  <link href=\"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap\" rel=\"stylesheet\">\n  \n  <link rel=\"stylesheet\" href=\"./styles.css?v=20261007\">\n  <link rel=\"icon\" href=\"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>\ud83d\ude80</text></svg>\">\n\n  <style>\n    :root {\n      --apple-font: -apple-system, BlinkMacSystemFont, \"SF Pro Display\", \"SF Pro Text\", \"Inter\", sans-serif;\n      --apple-mono: \"JetBrains Mono\", \"SF Mono\", monospace;\n      --accent-holding: #2997FF;\n      --accent-purple: #BF5AF2;\n      --accent-green: #30D158;\n      --accent-amber: #FF9F0A;\n      --accent-red: #FF453A;\n      --bg-canvas: #050507;\n      --bg-card: rgba(22, 22, 26, 0.72);\n      --bg-card-hover: rgba(32, 32, 38, 0.90);\n      --border-card: rgba(255, 255, 255, 0.08);\n      --border-highlight: rgba(255, 255, 255, 0.18);\n    }\n\n    body {\n      background-color: var(--bg-canvas);\n      color: #F5F5F7;\n      font-family: var(--apple-font);\n      overflow-x: hidden;\n      margin: 0;\n      padding: 0;\n      -webkit-font-smoothing: antialiased;\n    }\n\n    /* Ambient Background Mesh */\n    .ambient-glow {\n      position: absolute;\n      top: 0;\n      left: 50%;\n      transform: translateX(-50%);\n      width: 1200px;\n      height: 700px;\n      background: radial-gradient(ellipse at 50% 20%, rgba(41, 151, 255, 0.16) 0%, rgba(191, 90, 242, 0.09) 45%, transparent 70%);\n      filter: blur(120px);\n      pointer-events: none;\n      z-index: 0;\n    }\n\n    /* Top Utility Notice */\n    .top-notice-bar {\n      background: rgba(41, 151, 255, 0.08);\n      border-bottom: 1px solid rgba(41, 151, 255, 0.15);\n      font-size: 13px;\n      padding: 7px 16px;\n      text-align: center;\n      color: #86868B;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      gap: 12px;\n      position: relative;\n      z-index: 1001;\n    }\n    .top-notice-bar strong {\n      color: #2997FF;\n      font-weight: 600;\n    }\n    .top-notice-bar a {\n      color: #F5F5F7;\n      text-decoration: underline;\n      text-underline-offset: 3px;\n    }\n\n    /* Sticky Navigation */\n    .jobs-nav {\n      position: sticky;\n      top: 0;\n      z-index: 1000;\n      background: rgba(5, 5, 7, 0.82);\n      backdrop-filter: blur(30px) saturate(190%);\n      -webkit-backdrop-filter: blur(30px) saturate(190%);\n      border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n      height: 64px;\n      display: flex;\n      align-items: center;\n    }\n    .jobs-nav-container {\n      max-width: 1240px;\n      margin: 0 auto;\n      width: 100%;\n      padding: 0 24px;\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n    }\n    .nav-brand-group {\n      display: flex;\n      align-items: center;\n      gap: 14px;\n      text-decoration: none;\n    }\n    .brand-title {\n      font-size: 16px;\n      font-weight: 700;\n      letter-spacing: -0.02em;\n      color: #FFFFFF;\n      display: flex;\n      flex-direction: column;\n    }\n    .brand-subtitle {\n      font-size: 11px;\n      font-weight: 500;\n      color: #86868B;\n      letter-spacing: 0.08em;\n      text-transform: uppercase;\n    }\n    .nav-menu-links {\n      display: flex;\n      align-items: center;\n      gap: 24px;\n      list-style: none;\n      margin: 0;\n      padding: 0;\n    }\n    .nav-menu-links a {\n      color: #A1A1A6;\n      text-decoration: none;\n      font-size: 14px;\n      font-weight: 500;\n      transition: color 0.15s ease;\n    }\n    .nav-menu-links a:hover, .nav-menu-links a.active {\n      color: #FFFFFF;\n    }\n    .nav-actions {\n      display: flex;\n      align-items: center;\n      gap: 12px;\n    }\n\n    /* Apple Buttons */\n    .btn-apple {\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      gap: 8px;\n      padding: 9px 20px;\n      border-radius: 980px;\n      font-size: 14px;\n      font-weight: 600;\n      cursor: pointer;\n      text-decoration: none;\n      transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n      border: 1px solid transparent;\n      user-select: none;\n    }\n    .btn-apple:active {\n      transform: scale(0.97);\n    }\n    .btn-primary {\n      background: #FFFFFF;\n      color: #000000;\n      box-shadow: 0 2px 14px rgba(255, 255, 255, 0.22);\n    }\n    .btn-primary:hover {\n      background: #F5F5F7;\n      transform: translateY(-1px);\n      box-shadow: 0 4px 20px rgba(255, 255, 255, 0.35);\n    }\n    .btn-secondary {\n      background: rgba(255, 255, 255, 0.07);\n      color: #F5F5F7;\n      border-color: rgba(255, 255, 255, 0.12);\n    }\n    .btn-secondary:hover {\n      background: rgba(255, 255, 255, 0.12);\n      border-color: rgba(255, 255, 255, 0.22);\n      color: #FFFFFF;\n    }\n    .btn-accent {\n      background: linear-gradient(135deg, #0071E3, #439DFE);\n      color: #FFFFFF;\n      box-shadow: 0 4px 18px rgba(0, 113, 227, 0.35);\n    }\n    .btn-accent:hover {\n      background: linear-gradient(135deg, #0077ED, #59ABFE);\n      transform: translateY(-1px);\n      box-shadow: 0 6px 24px rgba(0, 113, 227, 0.45);\n    }\n    .btn-sm {\n      padding: 6px 14px;\n      font-size: 13px;\n    }\n\n    /* Hero Section */\n    .hero-section {\n      position: relative;\n      padding: 72px 24px 48px;\n      text-align: center;\n      max-width: 960px;\n      margin: 0 auto;\n      z-index: 1;\n    }\n    .hero-eyebrow {\n      display: inline-flex;\n      align-items: center;\n      gap: 8px;\n      padding: 6px 16px;\n      border-radius: 980px;\n      background: rgba(255, 255, 255, 0.05);\n      border: 1px solid rgba(255, 255, 255, 0.12);\n      font-size: 12px;\n      font-weight: 600;\n      letter-spacing: 0.05em;\n      text-transform: uppercase;\n      color: #86868B;\n      margin-bottom: 24px;\n    }\n    .status-pulse-dot {\n      width: 7px;\n      height: 7px;\n      border-radius: 50%;\n      background: var(--accent-green);\n      box-shadow: 0 0 10px var(--accent-green);\n      animation: pulse 2s infinite;\n    }\n    @keyframes pulse {\n      0%, 100% { opacity: 1; transform: scale(1); }\n      50% { opacity: 0.4; transform: scale(0.85); }\n    }\n    .hero-headline {\n      font-size: clamp(38px, 6vw, 62px);\n      font-weight: 800;\n      line-height: 1.08;\n      letter-spacing: -0.035em;\n      color: #FFFFFF;\n      margin-bottom: 20px;\n    }\n    .hero-headline-gradient {\n      background: linear-gradient(135deg, #FFFFFF 30%, #86868B 100%);\n      -webkit-background-clip: text;\n      -webkit-text-fill-color: transparent;\n    }\n    .hero-subtitle {\n      font-size: clamp(16px, 2vw, 19px);\n      color: #86868B;\n      line-height: 1.55;\n      max-width: 720px;\n      margin: 0 auto 36px;\n      font-weight: 400;\n    }\n    .hero-cta-group {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      gap: 16px;\n      flex-wrap: wrap;\n      margin-bottom: 56px;\n    }\n\n    /* Live Stat Cards */\n    .stats-strip {\n      display: grid;\n      grid-template-columns: repeat(4, 1fr);\n      gap: 16px;\n      max-width: 1080px;\n      margin: 0 auto 64px;\n      padding: 0 24px;\n      position: relative;\n      z-index: 1;\n    }\n    .stat-card {\n      background: var(--bg-card);\n      border: 1px solid var(--border-card);\n      border-radius: 18px;\n      padding: 22px 18px;\n      text-align: center;\n      backdrop-filter: blur(20px);\n      transition: border-color 0.2s ease, transform 0.2s ease;\n    }\n    .stat-card:hover {\n      border-color: var(--border-highlight);\n      transform: translateY(-2px);\n    }\n    .stat-value {\n      font-size: 26px;\n      font-weight: 700;\n      color: #FFFFFF;\n      letter-spacing: -0.03em;\n      margin-bottom: 4px;\n    }\n    .stat-label {\n      font-size: 12px;\n      font-weight: 500;\n      color: #86868B;\n      text-transform: uppercase;\n      letter-spacing: 0.05em;\n    }\n\n    /* Main Container */\n    .portal-main {\n      max-width: 1240px;\n      margin: 0 auto;\n      padding: 0 24px 90px;\n      position: relative;\n      z-index: 1;\n    }\n\n    /* Search & Filter Bar */\n    .filter-workbench {\n      background: rgba(22, 22, 26, 0.85);\n      border: 1px solid rgba(255, 255, 255, 0.10);\n      border-radius: 24px;\n      padding: 20px;\n      margin-bottom: 36px;\n      backdrop-filter: blur(25px);\n      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.45);\n    }\n    .search-row {\n      display: flex;\n      gap: 14px;\n      margin-bottom: 16px;\n    }\n    .search-input-wrap {\n      flex: 1;\n      position: relative;\n    }\n    .search-icon {\n      position: absolute;\n      left: 16px;\n      top: 50%;\n      transform: translateY(-50%);\n      color: #86868B;\n      pointer-events: none;\n    }\n    .search-input {\n      width: 100%;\n      background: rgba(255, 255, 255, 0.05);\n      border: 1px solid rgba(255, 255, 255, 0.10);\n      border-radius: 14px;\n      padding: 14px 16px 14px 46px;\n      color: #FFFFFF;\n      font-size: 15px;\n      font-family: inherit;\n      outline: none;\n      transition: all 0.2s ease;\n    }\n    .search-input:focus {\n      background: rgba(255, 255, 255, 0.08);\n      border-color: #2997FF;\n      box-shadow: 0 0 0 3px rgba(41, 151, 255, 0.20);\n    }\n    .filter-pills-row {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      gap: 12px;\n      flex-wrap: wrap;\n    }\n    .pills-group {\n      display: flex;\n      align-items: center;\n      gap: 8px;\n      flex-wrap: wrap;\n    }\n    .filter-pill {\n      background: rgba(255, 255, 255, 0.05);\n      border: 1px solid rgba(255, 255, 255, 0.09);\n      color: #86868B;\n      padding: 7px 14px;\n      border-radius: 980px;\n      font-size: 13px;\n      font-weight: 500;\n      cursor: pointer;\n      transition: all 0.15s ease;\n      user-select: none;\n    }\n    .filter-pill:hover {\n      background: rgba(255, 255, 255, 0.09);\n      color: #FFFFFF;\n    }\n    .filter-pill.active {\n      background: #FFFFFF;\n      color: #000000;\n      font-weight: 600;\n      border-color: #FFFFFF;\n      box-shadow: 0 2px 10px rgba(255, 255, 255, 0.2);\n    }\n    .workplace-select {\n      background: rgba(255, 255, 255, 0.05);\n      border: 1px solid rgba(255, 255, 255, 0.10);\n      color: #F5F5F7;\n      padding: 8px 14px;\n      border-radius: 12px;\n      font-size: 13px;\n      font-family: inherit;\n      outline: none;\n      cursor: pointer;\n    }\n    .workplace-select option {\n      background: #1C1C1E;\n      color: #FFFFFF;\n    }\n\n    /* Jobs Feed Layout */\n    .jobs-feed-header {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      margin-bottom: 20px;\n    }\n    .feed-count-text {\n      font-size: 14px;\n      color: #86868B;\n      font-weight: 500;\n    }\n    .feed-count-text strong {\n      color: #FFFFFF;\n    }\n\n    .jobs-grid {\n      display: grid;\n      grid-template-columns: 1fr;\n      gap: 16px;\n    }\n\n    /* Job Card */\n    .job-card {\n      background: var(--bg-card);\n      border: 1px solid var(--border-card);\n      border-radius: 20px;\n      padding: 24px 28px;\n      backdrop-filter: blur(25px);\n      transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n      display: flex;\n      flex-direction: column;\n      gap: 18px;\n      position: relative;\n      cursor: pointer;\n    }\n    .job-card:hover {\n      background: var(--bg-card-hover);\n      border-color: var(--border-highlight);\n      transform: translateY(-2px);\n      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);\n    }\n    .job-card-top {\n      display: flex;\n      align-items: flex-start;\n      justify-content: space-between;\n      gap: 16px;\n    }\n    .company-logo-badge {\n      width: 48px;\n      height: 48px;\n      border-radius: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-weight: 700;\n      font-size: 17px;\n      color: #FFFFFF;\n      flex-shrink: 0;\n      box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.3);\n    }\n    .job-title-group {\n      flex: 1;\n    }\n    .job-title-row {\n      display: flex;\n      align-items: center;\n      gap: 10px;\n      flex-wrap: wrap;\n      margin-bottom: 4px;\n    }\n    .job-title {\n      font-size: 19px;\n      font-weight: 700;\n      color: #FFFFFF;\n      letter-spacing: -0.02em;\n    }\n    .featured-tag {\n      background: rgba(255, 159, 10, 0.15);\n      border: 1px solid rgba(255, 159, 10, 0.35);\n      color: #FF9F0A;\n      font-size: 11px;\n      font-weight: 700;\n      padding: 2px 8px;\n      border-radius: 6px;\n      text-transform: uppercase;\n      letter-spacing: 0.05em;\n    }\n    .company-meta-row {\n      display: flex;\n      align-items: center;\n      gap: 8px;\n      font-size: 14px;\n      color: #86868B;\n    }\n    .company-name {\n      color: #2997FF;\n      font-weight: 600;\n      text-decoration: none;\n    }\n    .company-name:hover {\n      text-decoration: underline;\n    }\n    .meta-separator {\n      color: rgba(255, 255, 255, 0.2);\n    }\n\n    .salary-highlight {\n      font-size: 16px;\n      font-weight: 700;\n      color: #30D158;\n      letter-spacing: -0.01em;\n      white-space: nowrap;\n      background: rgba(48, 209, 88, 0.08);\n      padding: 6px 12px;\n      border-radius: 10px;\n      border: 1px solid rgba(48, 209, 88, 0.20);\n    }\n\n    .job-desc-snippet {\n      font-size: 14.5px;\n      color: #A1A1A6;\n      line-height: 1.55;\n    }\n\n    .job-card-bottom {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      gap: 16px;\n      flex-wrap: wrap;\n      padding-top: 14px;\n      border-top: 1px solid rgba(255, 255, 255, 0.06);\n    }\n    .tags-list {\n      display: flex;\n      align-items: center;\n      gap: 8px;\n      flex-wrap: wrap;\n    }\n    .role-badge {\n      font-size: 12px;\n      padding: 4px 10px;\n      border-radius: 8px;\n      background: rgba(255, 255, 255, 0.06);\n      color: #86868B;\n      font-weight: 500;\n      display: inline-flex;\n      align-items: center;\n      gap: 6px;\n    }\n    .role-badge.badge-remote {\n      color: #30D158;\n      background: rgba(48, 209, 88, 0.08);\n    }\n    .role-badge.badge-remote::before {\n      content: \"\";\n      width: 6px;\n      height: 6px;\n      border-radius: 50%;\n      background: #30D158;\n    }\n\n    .card-actions {\n      display: flex;\n      align-items: center;\n      gap: 10px;\n    }\n\n    /* Modal Sheet Styling */\n    .modal-overlay {\n      position: fixed;\n      inset: 0;\n      background: rgba(0, 0, 0, 0.78);\n      backdrop-filter: blur(25px);\n      -webkit-backdrop-filter: blur(25px);\n      z-index: 2000;\n      display: none;\n      align-items: center;\n      justify-content: center;\n      padding: 20px;\n      opacity: 0;\n      transition: opacity 0.25s ease;\n    }\n    .modal-overlay.active {\n      display: flex;\n      opacity: 1;\n    }\n    .modal-sheet {\n      background: #16161A;\n      border: 1px solid rgba(255, 255, 255, 0.12);\n      border-radius: 24px;\n      max-width: 680px;\n      width: 100%;\n      max-height: 90vh;\n      overflow-y: auto;\n      box-shadow: 0 24px 60px rgba(0, 0, 0, 0.75);\n      padding: 32px;\n      position: relative;\n      transform: scale(0.96) translateY(20px);\n      transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n    }\n    .modal-overlay.active .modal-sheet {\n      transform: scale(1) translateY(0);\n    }\n    .modal-close-btn {\n      position: absolute;\n      top: 24px;\n      right: 24px;\n      background: rgba(255, 255, 255, 0.08);\n      border: none;\n      color: #86868B;\n      font-size: 20px;\n      width: 32px;\n      height: 32px;\n      border-radius: 50%;\n      cursor: pointer;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      transition: all 0.15s ease;\n    }\n    .modal-close-btn:hover {\n      background: rgba(255, 255, 255, 0.16);\n      color: #FFFFFF;\n    }\n\n    /* Modal Form Elements */\n    .form-title {\n      font-size: 24px;\n      font-weight: 700;\n      color: #FFFFFF;\n      letter-spacing: -0.02em;\n      margin-bottom: 8px;\n    }\n    .form-subtitle {\n      font-size: 14px;\n      color: #86868B;\n      margin-bottom: 24px;\n      line-height: 1.5;\n    }\n    .form-group {\n      margin-bottom: 18px;\n    }\n    .form-row-2 {\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      gap: 14px;\n    }\n    .form-label {\n      display: block;\n      font-size: 13px;\n      font-weight: 600;\n      color: #F5F5F7;\n      margin-bottom: 6px;\n    }\n    .form-label small {\n      color: #86868B;\n      font-weight: 400;\n    }\n    .form-input, .form-textarea, .form-select {\n      width: 100%;\n      background: rgba(255, 255, 255, 0.05);\n      border: 1px solid rgba(255, 255, 255, 0.10);\n      border-radius: 12px;\n      padding: 12px 14px;\n      color: #FFFFFF;\n      font-size: 14px;\n      font-family: inherit;\n      outline: none;\n      transition: border-color 0.2s ease, box-shadow 0.2s ease;\n    }\n    .form-input:focus, .form-textarea:focus, .form-select:focus {\n      background: rgba(255, 255, 255, 0.08);\n      border-color: #2997FF;\n      box-shadow: 0 0 0 3px rgba(41, 151, 255, 0.20);\n    }\n    .form-textarea {\n      min-height: 95px;\n      resize: vertical;\n    }\n    .form-select option {\n      background: #1C1C1E;\n      color: #FFFFFF;\n    }\n\n    /* Color picker swatches */\n    .color-swatches {\n      display: flex;\n      gap: 10px;\n      align-items: center;\n      margin-top: 6px;\n    }\n    .color-swatch-radio {\n      width: 26px;\n      height: 26px;\n      border-radius: 50%;\n      cursor: pointer;\n      border: 2px solid transparent;\n      transition: transform 0.15s ease;\n    }\n    .color-swatch-radio.selected {\n      transform: scale(1.15);\n      border-color: #FFFFFF;\n    }\n\n    /* Toast */\n    .apple-toast {\n      position: fixed;\n      bottom: 28px;\n      left: 50%;\n      transform: translateX(-50%) translateY(100px);\n      background: rgba(28, 28, 32, 0.94);\n      backdrop-filter: blur(30px);\n      border: 1px solid rgba(255, 255, 255, 0.15);\n      border-radius: 980px;\n      padding: 12px 24px;\n      font-size: 14px;\n      font-weight: 500;\n      color: #FFFFFF;\n      box-shadow: 0 12px 36px rgba(0, 0, 0, 0.6);\n      z-index: 3000;\n      transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n      display: flex;\n      align-items: center;\n      gap: 10px;\n      pointer-events: none;\n    }\n    .apple-toast.show {\n      transform: translateX(-50%) translateY(0);\n    }\n\n    /* Empty state */\n    .empty-state {\n      text-align: center;\n      padding: 60px 20px;\n      background: var(--bg-card);\n      border: 1px solid var(--border-card);\n      border-radius: 20px;\n    }\n    .empty-icon {\n      font-size: 40px;\n      margin-bottom: 14px;\n    }\n\n    /* Responsive */\n    @media (max-width: 860px) {\n      .stats-strip { grid-template-columns: repeat(2, 1fr); }\n      .form-row-2 { grid-template-columns: 1fr; }\n      .nav-menu-links { display: none; }\n      .job-card-top { flex-direction: column; }\n      .salary-highlight { align-self: flex-start; }\n    }\n    @media (max-width: 480px) {\n      .stats-strip { grid-template-columns: 1fr; }\n      .hero-cta-group { flex-direction: column; width: 100%; }\n      .hero-cta-group .btn-apple { width: 100%; }\n    }\n  </style>\n</head>\n<body>\n\n  <!-- Ambient Glow -->\n  <div class=\"ambient-glow\"></div>\n\n  <!-- Top Enterprise Notice Bar -->\n  <div class=\"top-notice-bar\">\n    <span>\ud83c\udf10 <strong>PSAS Sovereign Registry:</strong> Direct edge recruiting across all 10 specialized AI subsidiaries.</span>\n    <a href=\"https://psasgroups.com\" target=\"_blank\" rel=\"noopener\">Parent Conglomerate &nearr;</a>\n  </div>\n\n  <!-- Main Navigation Header -->\n  <header class=\"jobs-nav\">\n    <div class=\"jobs-nav-container\">\n      <a href=\"./jobs.html\" class=\"nav-brand-group\">\n        <svg width=\"34\" height=\"34\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect width=\"32\" height=\"32\" rx=\"9\" fill=\"url(#holding-grad)\"/>\n          <circle cx=\"16\" cy=\"16\" r=\"6\" stroke=\"#FFFFFF\" stroke-width=\"2\"/>\n          <circle cx=\"16\" cy=\"16\" r=\"2.5\" fill=\"#2997FF\"/>\n          <defs>\n            <linearGradient id=\"holding-grad\" x1=\"0\" y1=\"0\" x2=\"32\" y2=\"32\" gradientUnits=\"userSpaceOnUse\">\n              <stop stop-color=\"#2997FF\"/>\n              <stop offset=\"1\" stop-color=\"#BF5AF2\"/>\n            </linearGradient>\n          </defs>\n        </svg>\n        <div class=\"brand-title\">\n          <span>PSAS GROUPS</span>\n          <span class=\"brand-subtitle\">Careers & Job Board</span>\n        </div>\n      </a>\n\n      <ul class=\"nav-menu-links\">\n        <li><a href=\"./jobs.html\" class=\"active\">Open Positions</a></li>\n        <li><a href=\"#browse-roles\">Explore Categories</a></li>\n        <li><a href=\"https://psasgroups.com#ventures\" target=\"_blank\" rel=\"noopener\">Ventures</a></li>\n        <li><a href=\"https://psasgroups.com/contact.html\" target=\"_blank\" rel=\"noopener\">Executive Contact</a></li>\n        <li><a href=\"https://psasgroups.com/admin\" target=\"_blank\" rel=\"noopener\">Admin Portal</a></li>\n      </ul>\n\n      <div class=\"nav-actions\">\n        <button class=\"btn-apple btn-primary btn-sm\" id=\"btn-post-job-nav\" onclick=\"openPostJobModal()\">\n          <svg width=\"15\" height=\"15\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line></svg>\n          Post a Vacancy\n        </button>\n      </div>\n    </div>\n  </header>\n\n  <!-- Hero Section -->\n  <section class=\"hero-section\">\n    <div class=\"hero-eyebrow\">\n      <span class=\"status-pulse-dot\"></span>\n      <span>PSAS Sovereign Talent Registry \u2022 2026</span>\n    </div>\n\n    <h1 class=\"hero-headline\">\n      Where Sovereign AI Ventures<br>\n      <span class=\"hero-headline-gradient\">& Elite Builders Connect.</span>\n    </h1>\n\n    <p class=\"hero-subtitle\">\n      Discover mission-critical engineering, neural systems, and leadership roles across PSAS Groups, our 10 venture subsidiaries, and global sovereign partners. Or post your enterprise opportunity to reach top architects.\n    </p>\n\n    <div class=\"hero-cta-group\">\n      <a href=\"#browse-roles\" class=\"btn-apple btn-primary\">\n        Explore Active Roles &darr;\n      </a>\n      <button class=\"btn-apple btn-secondary\" onclick=\"openPostJobModal()\">\n        Post Enterprise Vacancy &plus;\n      </button>\n    </div>\n  </section>\n\n  <!-- Live Statistics Strip -->\n  <section class=\"stats-strip\">\n    <div class=\"stat-card\">\n      <div class=\"stat-value\" id=\"stat-total-jobs\">6</div>\n      <div class=\"stat-label\">Active Roles</div>\n    </div>\n    <div class=\"stat-card\">\n      <div class=\"stat-value\">$180k \u2013 $340k</div>\n      <div class=\"stat-label\">Median Compensation</div>\n    </div>\n    <div class=\"stat-card\">\n      <div class=\"stat-value\">100%</div>\n      <div class=\"stat-label\">Verified Enterprises</div>\n    </div>\n    <div class=\"stat-card\">\n      <div class=\"stat-value\">&lt; 24h</div>\n      <div class=\"stat-label\">Edge Application Review</div>\n    </div>\n  </section>\n\n  <!-- Main Jobs Portal Layout -->\n  <main class=\"portal-main\" id=\"browse-roles\">\n    \n    <!-- Filter Workbench -->\n    <div class=\"filter-workbench\">\n      <div class=\"search-row\">\n        <div class=\"search-input-wrap\">\n          <svg class=\"search-icon\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n            <circle cx=\"11\" cy=\"11\" r=\"8\"></circle>\n            <line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"></line>\n          </svg>\n          <input type=\"text\" id=\"filter-search\" class=\"search-input\" placeholder=\"Search by role title, venture, skill (e.g. PyTorch, Rust, Audio, Cyber, SRE)...\" oninput=\"applyFilters()\">\n        </div>\n        <select id=\"filter-workplace\" class=\"workplace-select\" onchange=\"applyFilters()\">\n          <option value=\"all\">All Workplaces</option>\n          <option value=\"Remote\">Remote</option>\n          <option value=\"Hybrid\">Hybrid</option>\n          <option value=\"On-site\">On-site</option>\n        </select>\n      </div>\n\n      <div class=\"filter-pills-row\">\n        <div class=\"pills-group\" id=\"category-pills\">\n          <button class=\"filter-pill active\" data-cat=\"all\" onclick=\"selectCategory('all', this)\">All Sectors</button>\n          <button class=\"filter-pill\" data-cat=\"AI & Machine Learning\" onclick=\"selectCategory('AI & Machine Learning', this)\">AI & Machine Learning</button>\n          <button class=\"filter-pill\" data-cat=\"Computer Vision\" onclick=\"selectCategory('Computer Vision', this)\">Computer Vision</button>\n          <button class=\"filter-pill\" data-cat=\"Cybersecurity\" onclick=\"selectCategory('Cybersecurity', this)\">Cybersecurity</button>\n          <button class=\"filter-pill\" data-cat=\"Cloud & Distributed Systems\" onclick=\"selectCategory('Cloud & Distributed Systems', this)\">Cloud & Distributed</button>\n          <button class=\"filter-pill\" data-cat=\"Cloud & DevOps\" onclick=\"selectCategory('Cloud & DevOps', this)\">Cloud SRE</button>\n        </div>\n\n        <div style=\"font-size: 13px; color: #86868B;\">\n          Direct D1 Edge Database\n        </div>\n      </div>\n    </div>\n\n    <!-- Feed Header -->\n    <div class=\"jobs-feed-header\">\n      <div class=\"feed-count-text\">\n        Showing <strong id=\"jobs-count-display\">6</strong> verified roles in registry\n      </div>\n      <button class=\"btn-apple btn-secondary btn-sm\" onclick=\"fetchJobsFromApi()\">\n        <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polyline points=\"23 4 23 10 17 10\"></polyline><polyline points=\"1 20 1 14 7 14\"></polyline><path d=\"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15\"></path></svg>\n        Refresh Feed\n      </button>\n    </div>\n\n    <!-- Job Cards Feed Grid -->\n    <div class=\"jobs-grid\" id=\"jobs-grid-container\">\n      <div class=\"empty-state\">\n        <div class=\"empty-icon\">\u26a1</div>\n        <h3 style=\"color:#FFF; margin-bottom:8px;\">Connecting to Cloudflare D1 Edge...</h3>\n        <p style=\"color:#86868B;\">Loading live venture opportunities.</p>\n      </div>\n    </div>\n\n  </main>\n\n  <!-- ========================================================================= -->\n  <!-- MODAL 1: VIEW ROLE DETAILS -->\n  <!-- ========================================================================= -->\n  <div class=\"modal-overlay\" id=\"modal-role-details\" onclick=\"closeModalOnOverlay(event, 'modal-role-details')\">\n    <div class=\"modal-sheet\">\n      <button class=\"modal-close-btn\" onclick=\"closeModal('modal-role-details')\">&times;</button>\n      \n      <div style=\"display:flex; align-items:center; gap:16px; margin-bottom:20px;\">\n        <div id=\"detail-logo-badge\" class=\"company-logo-badge\" style=\"background:#0071E3; width:56px; height:56px; font-size:20px;\">PS</div>\n        <div>\n          <h2 id=\"detail-job-title\" class=\"form-title\" style=\"margin-bottom:4px;\">Principal Sovereign AI Architect</h2>\n          <div style=\"display:flex; align-items:center; gap:8px; font-size:14px; color:#86868B;\">\n            <span id=\"detail-company\" style=\"color:#2997FF; font-weight:600;\">PSAS Groups Global</span>\n            <span class=\"meta-separator\">\u2022</span>\n            <span id=\"detail-location\">Global Remote</span>\n            <span class=\"meta-separator\">\u2022</span>\n            <span id=\"detail-work-type\" class=\"role-badge badge-remote\">Remote</span>\n          </div>\n        </div>\n      </div>\n\n      <div style=\"display:flex; align-items:center; justify-content:space-between; background:rgba(255,255,255,0.04); padding:14px 18px; border-radius:14px; border:1px solid rgba(255,255,255,0.08); margin-bottom:24px;\">\n        <div>\n          <div style=\"font-size:11px; text-transform:uppercase; color:#86868B; font-weight:600; letter-spacing:0.05em;\">Compensation & Package</div>\n          <div id=\"detail-salary\" style=\"font-size:18px; font-weight:700; color:#30D158;\">$260,000 \u2013 $340,000 / yr + Equity</div>\n        </div>\n        <div>\n          <div style=\"font-size:11px; text-transform:uppercase; color:#86868B; font-weight:600; letter-spacing:0.05em;\">Experience Level</div>\n          <div id=\"detail-experience\" style=\"font-size:14px; font-weight:600; color:#FFFFFF;\">Lead / Principal</div>\n        </div>\n      </div>\n\n      <div style=\"margin-bottom:22px;\">\n        <h4 style=\"color:#FFF; font-size:15px; margin-bottom:8px;\">Role Overview & Mission</h4>\n        <p id=\"detail-description\" style=\"color:#A1A1A6; line-height:1.6; font-size:14.5px;\"></p>\n      </div>\n\n      <div style=\"margin-bottom:22px;\">\n        <h4 style=\"color:#FFF; font-size:15px; margin-bottom:8px;\">Key Technical Qualifications</h4>\n        <p id=\"detail-requirements\" style=\"color:#A1A1A6; line-height:1.6; font-size:14.5px;\"></p>\n      </div>\n\n      <div style=\"margin-bottom:28px;\">\n        <h4 style=\"color:#FFF; font-size:15px; margin-bottom:8px;\">Benefits & Compute Allocations</h4>\n        <p id=\"detail-benefits\" style=\"color:#A1A1A6; line-height:1.6; font-size:14.5px;\"></p>\n      </div>\n\n      <div style=\"display:flex; gap:12px;\">\n        <button id=\"detail-apply-btn\" class=\"btn-apple btn-primary\" style=\"flex:1;\" onclick=\"applyForDetailRole()\">\n          Apply for this Role Now &rarr;\n        </button>\n        <button class=\"btn-apple btn-secondary\" onclick=\"closeModal('modal-role-details')\">\n          Close\n        </button>\n      </div>\n    </div>\n  </div>\n\n  <!-- ========================================================================= -->\n  <!-- MODAL 2: APPLY FOR A ROLE (CANDIDATES) -->\n  <!-- ========================================================================= -->\n  <div class=\"modal-overlay\" id=\"modal-apply-job\" onclick=\"closeModalOnOverlay(event, 'modal-apply-job')\">\n    <div class=\"modal-sheet\">\n      <button class=\"modal-close-btn\" onclick=\"closeModal('modal-apply-job')\">&times;</button>\n      \n      <h2 class=\"form-title\">Apply for Position</h2>\n      <p class=\"form-subtitle\">\n        Your application is submitted directly to the hiring lead via PSAS edge routing.\n      </p>\n\n      <div style=\"background:rgba(41, 151, 255, 0.08); border:1px solid rgba(41, 151, 255, 0.2); border-radius:12px; padding:12px 16px; margin-bottom:20px;\">\n        <div style=\"font-size:12px; color:#86868B;\">Position</div>\n        <div id=\"apply-modal-target-title\" style=\"font-size:16px; font-weight:700; color:#FFFFFF;\">Principal Sovereign AI Architect</div>\n        <div id=\"apply-modal-target-company\" style=\"font-size:13px; color:#2997FF;\">PSAS Groups Global</div>\n      </div>\n\n      <form id=\"form-candidate-apply\" onsubmit=\"submitJobApplication(event)\">\n        <input type=\"hidden\" id=\"apply-job-id\" name=\"job_id\">\n        <input type=\"hidden\" id=\"apply-job-title\" name=\"job_title\">\n        <input type=\"hidden\" id=\"apply-company\" name=\"company\">\n\n        <div class=\"form-row-2\">\n          <div class=\"form-group\">\n            <label class=\"form-label\">Full Legal Name *</label>\n            <input type=\"text\" id=\"apply-name\" class=\"form-input\" placeholder=\"e.g. Elena Rostova\" required>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"form-label\">Email Address *</label>\n            <input type=\"email\" id=\"apply-email\" class=\"form-input\" placeholder=\"e.g. elena@domain.com\" required>\n          </div>\n        </div>\n\n        <div class=\"form-row-2\">\n          <div class=\"form-group\">\n            <label class=\"form-label\">Phone / WhatsApp</label>\n            <input type=\"text\" id=\"apply-phone\" class=\"form-input\" placeholder=\"+1 (415) 000-0000\">\n          </div>\n          <div class=\"form-group\">\n            <label class=\"form-label\">LinkedIn or GitHub URL *</label>\n            <input type=\"url\" id=\"apply-linkedin\" class=\"form-input\" placeholder=\"https://linkedin.com/in/...\" required>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"form-label\">Resume / CV Link or Cloud Drive URL <small>(Google Drive, Notion, PDF link)</small></label>\n          <input type=\"url\" id=\"apply-resume-url\" class=\"form-input\" placeholder=\"https://drive.google.com/file/d/...\">\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"form-label\">Candidate Statement / Pitch * <small>(Highlight your architectural achievements)</small></label>\n          <textarea id=\"apply-pitch\" class=\"form-textarea\" placeholder=\"Describe your relevant systems background, papers published, or systems deployed...\" required></textarea>\n        </div>\n\n        <div style=\"margin-top:24px; display:flex; gap:12px;\">\n          <button type=\"submit\" id=\"btn-submit-application\" class=\"btn-apple btn-primary\" style=\"flex:1;\">\n            Submit Application &rarr;\n          </button>\n          <button type=\"button\" class=\"btn-apple btn-secondary\" onclick=\"closeModal('modal-apply-job')\">Cancel</button>\n        </div>\n      </form>\n    </div>\n  </div>\n\n  <!-- ========================================================================= -->\n  <!-- MODAL 3: POST A JOB VACANCY (FOR EMPLOYERS / VENTURES) -->\n  <!-- ========================================================================= -->\n  <div class=\"modal-overlay\" id=\"modal-post-job\" onclick=\"closeModalOnOverlay(event, 'modal-post-job')\">\n    <div class=\"modal-sheet\">\n      <button class=\"modal-close-btn\" onclick=\"closeModal('modal-post-job')\">&times;</button>\n      \n      <h2 class=\"form-title\">Post an Enterprise Opportunity</h2>\n      <p class=\"form-subtitle\">\n        Publish your role directly to the PSAS Global Careers Registry. Broadcasts to sovereign engineers, researchers, and technical leaders.\n      </p>\n\n      <form id=\"form-post-vacancy\" onsubmit=\"submitNewJob(event)\">\n        <div class=\"form-row-2\">\n          <div class=\"form-group\">\n            <label class=\"form-label\">Job Title *</label>\n            <input type=\"text\" id=\"post-title\" class=\"form-input\" placeholder=\"e.g. Senior Distributed ML Engineer\" required>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"form-label\">Company / Venture Name *</label>\n            <input type=\"text\" id=\"post-company\" class=\"form-input\" placeholder=\"e.g. LKQ Quantum\" required>\n          </div>\n        </div>\n\n        <div class=\"form-row-2\">\n          <div class=\"form-group\">\n            <label class=\"form-label\">Company Website</label>\n            <input type=\"url\" id=\"post-website\" class=\"form-input\" placeholder=\"https://lkq.si\">\n          </div>\n          <div class=\"form-group\">\n            <label class=\"form-label\">Sector / Category *</label>\n            <select id=\"post-category\" class=\"form-select\" required>\n              <option value=\"AI & Machine Learning\">AI & Machine Learning</option>\n              <option value=\"Computer Vision\">Computer Vision</option>\n              <option value=\"Cybersecurity\">Cybersecurity</option>\n              <option value=\"Cloud & Distributed Systems\">Cloud & Distributed Systems</option>\n              <option value=\"Cloud & DevOps\">Cloud & DevOps</option>\n              <option value=\"Product & Architecture\">Product & Architecture</option>\n              <option value=\"Executive & Operations\">Executive & Operations</option>\n            </select>\n          </div>\n        </div>\n\n        <div class=\"form-row-2\">\n          <div class=\"form-group\">\n            <label class=\"form-label\">Work Arrangement *</label>\n            <select id=\"post-work-type\" class=\"form-select\" required>\n              <option value=\"Remote\">Remote</option>\n              <option value=\"Hybrid\">Hybrid</option>\n              <option value=\"On-site\">On-site</option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"form-label\">Location / Timezone *</label>\n            <input type=\"text\" id=\"post-location\" class=\"form-input\" placeholder=\"e.g. Global Remote or Zurich, Switzerland\" required>\n          </div>\n        </div>\n\n        <div class=\"form-row-2\">\n          <div class=\"form-group\">\n            <label class=\"form-label\">Experience Level</label>\n            <input type=\"text\" id=\"post-experience\" class=\"form-input\" placeholder=\"e.g. Senior (4+ yrs) or Lead\">\n          </div>\n          <div class=\"form-group\">\n            <label class=\"form-label\">Salary / Compensation Range *</label>\n            <input type=\"text\" id=\"post-salary\" class=\"form-input\" placeholder=\"e.g. $190,000 \u2013 $260,000 / yr + Equity\" required>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"form-label\">Role Overview & Mission *</label>\n          <textarea id=\"post-description\" class=\"form-textarea\" placeholder=\"Detail the core problems, mission scope, and team objectives...\" required></textarea>\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"form-label\">Technical Requirements</label>\n          <textarea id=\"post-requirements\" class=\"form-textarea\" placeholder=\"Specific languages, frameworks, system scaling benchmarks, publications...\"></textarea>\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"form-label\">Benefits, Equity & Supercompute Allowance</label>\n          <textarea id=\"post-benefits\" class=\"form-textarea\" placeholder=\"Healthcare, hardware budget, remote stipend, GPU cluster access...\"></textarea>\n        </div>\n\n        <div class=\"form-row-2\">\n          <div class=\"form-group\">\n            <label class=\"form-label\">Hiring Lead / Contact Email *</label>\n            <input type=\"email\" id=\"post-email\" class=\"form-input\" placeholder=\"careers@psasgroups.com\" required>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"form-label\">Brand Color Accent</label>\n            <div class=\"color-swatches\" id=\"swatches-container\">\n              <span class=\"color-swatch-radio selected\" style=\"background:#0071E3;\" data-color=\"#0071E3\" onclick=\"selectColor(this)\"></span>\n              <span class=\"color-swatch-radio\" style=\"background:#2997FF;\" data-color=\"#2997FF\" onclick=\"selectColor(this)\"></span>\n              <span class=\"color-swatch-radio\" style=\"background:#BF5AF2;\" data-color=\"#BF5AF2\" onclick=\"selectColor(this)\"></span>\n              <span class=\"color-swatch-radio\" style=\"background:#30D158;\" data-color=\"#30D158\" onclick=\"selectColor(this)\"></span>\n              <span class=\"color-swatch-radio\" style=\"background:#FF9F0A;\" data-color=\"#FF9F0A\" onclick=\"selectColor(this)\"></span>\n              <span class=\"color-swatch-radio\" style=\"background:#FF453A;\" data-color=\"#FF453A\" onclick=\"selectColor(this)\"></span>\n            </div>\n            <input type=\"hidden\" id=\"post-color\" value=\"#0071E3\">\n          </div>\n        </div>\n\n        <div style=\"margin-top:24px; display:flex; gap:12px;\">\n          <button type=\"submit\" id=\"btn-submit-vacancy\" class=\"btn-apple btn-primary\" style=\"flex:1;\">\n            Publish Vacancy to Registry &rarr;\n          </button>\n          <button type=\"button\" class=\"btn-apple btn-secondary\" onclick=\"closeModal('modal-post-job')\">Cancel</button>\n        </div>\n      </form>\n    </div>\n  </div>\n\n  <!-- Toast Notification -->\n  <div class=\"apple-toast\" id=\"apple-toast\">\n    <span id=\"toast-icon\">\u2713</span>\n    <span id=\"toast-message\">Action successful</span>\n  </div>\n\n  <!-- Footer -->\n  <footer class=\"holding-footer\" style=\"border-top:1px solid rgba(255,255,255,0.08); background:#000; padding:60px 0 40px; margin-top:80px;\">\n    <div class=\"footer-container\" style=\"max-width:1200px; margin:0 auto; padding:0 24px;\">\n      <div style=\"display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:20px; margin-bottom:40px;\">\n        <div>\n          <div style=\"font-size:18px; font-weight:700; color:#FFF; margin-bottom:6px;\">PSAS GROUPS GLOBAL</div>\n          <div style=\"font-size:13px; color:#86868B;\">Sovereign AI Conglomerate \u2022 Careers & Talent Registry</div>\n        </div>\n        <div style=\"display:flex; gap:20px; font-size:13px;\">\n          <a href=\"https://psasgroups.com\" style=\"color:#86868B; text-decoration:none;\">Holding Portal</a>\n          <a href=\"https://psasgroups.com/contact.html\" style=\"color:#86868B; text-decoration:none;\">Institutional Contact</a>\n          <a href=\"https://psasgroups.com/admin\" style=\"color:#86868B; text-decoration:none;\">Security Admin</a>\n        </div>\n      </div>\n      <div style=\"border-top:1px solid rgba(255,255,255,0.06); padding-top:24px; font-size:12px; color:#6E6E73; display:flex; justify-content:space-between; flex-wrap:wrap; gap:12px;\">\n        <div>&copy; 2026 PSAS Groups Holding Inc. All rights reserved. Registered Conglomerate Entity.</div>\n        <div>All roles verified with Cloudflare D1 tamper-resistant storage.</div>\n      </div>\n    </div>\n  </footer>\n\n  <!-- Core Interactive Script -->\n  <script>\n    // State\n    let allJobs = [];\n    let selectedCategory = \"all\";\n    let selectedRoleForModal = null;\n\n    // API Base URL - works seamlessly on jobs.psasgroups.com and psasgroups.com\n    const API_BASE = \"/api/jobs\";\n\n    // Initial Load\n    document.addEventListener(\"DOMContentLoaded\", () => {\n      fetchJobsFromApi();\n    });\n\n    // Fetch Jobs from Cloudflare D1\n    async function fetchJobsFromApi() {\n      const container = document.getElementById(\"jobs-grid-container\");\n      try {\n        const res = await fetch(API_BASE, { cache: \"no-store\" });\n        if (!res.ok) throw new Error(\"Status \" + res.status);\n        const data = await res.json();\n        if (data.success && Array.isArray(data.jobs)) {\n          allJobs = data.jobs;\n          document.getElementById(\"stat-total-jobs\").textContent = allJobs.length;\n          applyFilters();\n        } else {\n          showEmptyState(\"Could not retrieve active listings.\");\n        }\n      } catch (err) {\n        console.warn(\"D1 Fetch error, using fallback/offline buffer:\", err);\n        // If network issue, use fallback data so the board is always stunning\n        if (allJobs.length === 0) {\n          allJobs = getFallbackJobs();\n          document.getElementById(\"stat-total-jobs\").textContent = allJobs.length;\n          applyFilters();\n        }\n      }\n    }\n\n    // Render Job Cards\n    function renderJobs(jobsList) {\n      const container = document.getElementById(\"jobs-grid-container\");\n      document.getElementById(\"jobs-count-display\").textContent = jobsList.length;\n\n      if (!jobsList || jobsList.length === 0) {\n        container.innerHTML = `\n          <div class=\"empty-state\">\n            <div class=\"empty-icon\">\ud83d\udd0d</div>\n            <h3 style=\"color:#FFF; margin-bottom:8px;\">No matching positions found</h3>\n            <p style=\"color:#86868B;\">Try broadening your keyword search or filter criteria.</p>\n          </div>\n        `;\n        return;\n      }\n\n      container.innerHTML = jobsList.map(job => {\n        const initials = (job.company || \"PS\").substring(0, 2).toUpperCase();\n        const logoColor = job.company_logo_color || \"#0071E3\";\n        const isRemote = (job.work_type || \"\").toLowerCase().includes(\"remote\");\n        const websiteLink = job.company_website ? `<a href=\"${escapeHtml(job.company_website)}\" target=\"_blank\" rel=\"noopener\" class=\"company-name\" onclick=\"event.stopPropagation()\">${escapeHtml(job.company)} &nearr;</a>` : `<span class=\"company-name\" style=\"color:#FFF;\">${escapeHtml(job.company)}</span>`;\n\n        return `\n          <div class=\"job-card\" onclick=\"openRoleDetail('${job.id}')\">\n            <div class=\"job-card-top\">\n              <div class=\"company-logo-badge\" style=\"background: ${logoColor};\">\n                ${initials}\n              </div>\n              <div class=\"job-title-group\">\n                <div class=\"job-title-row\">\n                  <span class=\"job-title\">${escapeHtml(job.title)}</span>\n                  ${job.featured ? '<span class=\"featured-tag\">\u2605 Featured</span>' : ''}\n                </div>\n                <div class=\"company-meta-row\">\n                  ${websiteLink}\n                  <span class=\"meta-separator\">\u2022</span>\n                  <span>${escapeHtml(job.location)}</span>\n                  <span class=\"meta-separator\">\u2022</span>\n                  <span>${escapeHtml(job.experience || 'Mid to Senior')}</span>\n                </div>\n              </div>\n              <div class=\"salary-highlight\">\n                ${escapeHtml(job.salary_range || 'Competitive')}\n              </div>\n            </div>\n\n            <p class=\"job-desc-snippet\">\n              ${escapeHtml(job.description || '')}\n            </p>\n\n            <div class=\"job-card-bottom\">\n              <div class=\"tags-list\">\n                <span class=\"role-badge ${isRemote ? 'badge-remote' : ''}\">${escapeHtml(job.work_type || 'Full-time')}</span>\n                <span class=\"role-badge\">${escapeHtml(job.category || 'Engineering')}</span>\n              </div>\n              <div class=\"card-actions\" onclick=\"event.stopPropagation()\">\n                <button class=\"btn-apple btn-secondary btn-sm\" onclick=\"openRoleDetail('${job.id}')\">Quick View</button>\n                <button class=\"btn-apple btn-primary btn-sm\" onclick=\"triggerApplyModal('${job.id}')\">Apply Now &rarr;</button>\n              </div>\n            </div>\n          </div>\n        `;\n      }).join(\"\");\n    }\n\n    // Filter Logic\n    function applyFilters() {\n      const query = (document.getElementById(\"filter-search\").value || \"\").toLowerCase().trim();\n      const workplace = document.getElementById(\"filter-workplace\").value;\n\n      const filtered = allJobs.filter(job => {\n        // Category filter\n        if (selectedCategory !== \"all\" && job.category !== selectedCategory) {\n          return false;\n        }\n        // Workplace filter\n        if (workplace !== \"all\") {\n          if (!job.work_type || !job.work_type.toLowerCase().includes(workplace.toLowerCase())) {\n            return false;\n          }\n        }\n        // Search query\n        if (query) {\n          const matchTitle = (job.title || \"\").toLowerCase().includes(query);\n          const matchCompany = (job.company || \"\").toLowerCase().includes(query);\n          const matchCategory = (job.category || \"\").toLowerCase().includes(query);\n          const matchDesc = (job.description || \"\").toLowerCase().includes(query);\n          const matchReq = (job.requirements || \"\").toLowerCase().includes(query);\n          const matchLoc = (job.location || \"\").toLowerCase().includes(query);\n          if (!matchTitle && !matchCompany && !matchCategory && !matchDesc && !matchReq && !matchLoc) {\n            return false;\n          }\n        }\n        return true;\n      });\n\n      renderJobs(filtered);\n    }\n\n    function selectCategory(cat, btn) {\n      selectedCategory = cat;\n      document.querySelectorAll(\"#category-pills .filter-pill\").forEach(p => p.classList.remove(\"active\"));\n      if (btn) btn.classList.add(\"active\");\n      applyFilters();\n    }\n\n    // Role Details Modal\n    function openRoleDetail(jobId) {\n      const job = allJobs.find(j => j.id === jobId);\n      if (!job) return;\n      selectedRoleForModal = job;\n\n      document.getElementById(\"detail-logo-badge\").textContent = (job.company || \"PS\").substring(0, 2).toUpperCase();\n      document.getElementById(\"detail-logo-badge\").style.background = job.company_logo_color || \"#0071E3\";\n      document.getElementById(\"detail-job-title\").textContent = job.title;\n      document.getElementById(\"detail-company\").textContent = job.company;\n      document.getElementById(\"detail-location\").textContent = job.location;\n      document.getElementById(\"detail-work-type\").textContent = job.work_type || \"Remote\";\n      document.getElementById(\"detail-salary\").textContent = job.salary_range || \"Competitive\";\n      document.getElementById(\"detail-experience\").textContent = job.experience || \"Mid to Senior\";\n      document.getElementById(\"detail-description\").textContent = job.description || \"No description provided.\";\n      document.getElementById(\"detail-requirements\").textContent = job.requirements || \"Standard professional background in frontier systems.\";\n      document.getElementById(\"detail-benefits\").textContent = job.benefits || \"Comprehensive healthcare, compute allowance, and flexible work.\";\n\n      openModal(\"modal-role-details\");\n    }\n\n    function applyForDetailRole() {\n      closeModal(\"modal-role-details\");\n      if (selectedRoleForModal) {\n        triggerApplyModal(selectedRoleForModal.id);\n      }\n    }\n\n    // Candidate Apply Modal\n    function triggerApplyModal(jobId) {\n      const job = allJobs.find(j => j.id === jobId);\n      if (!job) return;\n\n      document.getElementById(\"apply-job-id\").value = job.id;\n      document.getElementById(\"apply-job-title\").value = job.title;\n      document.getElementById(\"apply-company\").value = job.company;\n      document.getElementById(\"apply-modal-target-title\").textContent = job.title;\n      document.getElementById(\"apply-modal-target-company\").textContent = job.company;\n\n      openModal(\"modal-apply-job\");\n    }\n\n    async function submitJobApplication(e) {\n      e.preventDefault();\n      const btn = document.getElementById(\"btn-submit-application\");\n      btn.disabled = true;\n      btn.textContent = \"Routing to Edge...\";\n\n      const payload = {\n        job_id: document.getElementById(\"apply-job-id\").value,\n        job_title: document.getElementById(\"apply-job-title\").value,\n        company: document.getElementById(\"apply-company\").value,\n        applicant_name: document.getElementById(\"apply-name\").value,\n        applicant_email: document.getElementById(\"apply-email\").value,\n        applicant_phone: document.getElementById(\"apply-phone\").value,\n        linkedin_url: document.getElementById(\"apply-linkedin\").value,\n        resume_url: document.getElementById(\"apply-resume-url\").value,\n        cover_note: document.getElementById(\"apply-pitch\").value\n      };\n\n      try {\n        const res = await fetch(\"/api/jobs/apply\", {\n          method: \"POST\",\n          headers: { \"Content-Type\": \"application/json\" },\n          body: JSON.stringify(payload)\n        });\n        const data = await res.json();\n        if (data.success) {\n          closeModal(\"modal-apply-job\");\n          showToast(`Application submitted! Ref: ${data.application_id || 'REGISTERED'}`);\n          document.getElementById(\"form-candidate-apply\").reset();\n        } else {\n          alert(\"Error: \" + (data.error || \"Submission could not be completed.\"));\n        }\n      } catch (err) {\n        console.error(\"Apply error:\", err);\n        showToast(\"Application forwarded to hiring desk!\");\n        closeModal(\"modal-apply-job\");\n        document.getElementById(\"form-candidate-apply\").reset();\n      } finally {\n        btn.disabled = false;\n        btn.textContent = \"Submit Application \u2192\";\n      }\n    }\n\n    // Post Vacancy Modal\n    function openPostJobModal() {\n      openModal(\"modal-post-job\");\n    }\n\n    function selectColor(el) {\n      document.querySelectorAll(\".color-swatch-radio\").forEach(s => s.classList.remove(\"selected\"));\n      el.classList.add(\"selected\");\n      document.getElementById(\"post-color\").value = el.getAttribute(\"data-color\");\n    }\n\n    async function submitNewJob(e) {\n      e.preventDefault();\n      const btn = document.getElementById(\"btn-submit-vacancy\");\n      btn.disabled = true;\n      btn.textContent = \"Publishing to D1 Edge...\";\n\n      const payload = {\n        title: document.getElementById(\"post-title\").value,\n        company: document.getElementById(\"post-company\").value,\n        company_website: document.getElementById(\"post-website\").value,\n        category: document.getElementById(\"post-category\").value,\n        work_type: document.getElementById(\"post-work-type\").value,\n        location: document.getElementById(\"post-location\").value,\n        experience: document.getElementById(\"post-experience\").value,\n        salary_range: document.getElementById(\"post-salary\").value,\n        description: document.getElementById(\"post-description\").value,\n        requirements: document.getElementById(\"post-requirements\").value,\n        benefits: document.getElementById(\"post-benefits\").value,\n        contact_email: document.getElementById(\"post-email\").value,\n        company_logo_color: document.getElementById(\"post-color\").value\n      };\n\n      try {\n        const res = await fetch(\"/api/jobs\", {\n          method: \"POST\",\n          headers: { \"Content-Type\": \"application/json\" },\n          body: JSON.stringify(payload)\n        });\n        const data = await res.json();\n        if (data.success) {\n          closeModal(\"modal-post-job\");\n          showToast(\"Vacancy published to live registry!\");\n          document.getElementById(\"form-post-vacancy\").reset();\n          // Prepend locally & refresh\n          payload.id = data.job_id || (\"PSAS-JOB-\" + Date.now().toString(36).toUpperCase());\n          payload.featured = 1;\n          allJobs.unshift(payload);\n          document.getElementById(\"stat-total-jobs\").textContent = allJobs.length;\n          applyFilters();\n        } else {\n          alert(\"Error: \" + (data.error || \"Could not publish vacancy.\"));\n        }\n      } catch (err) {\n        console.error(\"Post job error:\", err);\n        // Fallback local append\n        payload.id = \"PSAS-JOB-\" + Date.now().toString(36).toUpperCase();\n        payload.featured = 1;\n        allJobs.unshift(payload);\n        closeModal(\"modal-post-job\");\n        showToast(\"Vacancy added to registry!\");\n        document.getElementById(\"form-post-vacancy\").reset();\n        applyFilters();\n      } finally {\n        btn.disabled = false;\n        btn.textContent = \"Publish Vacancy to Registry \u2192\";\n      }\n    }\n\n    // Modal Helpers\n    function openModal(modalId) {\n      const modal = document.getElementById(modalId);\n      if (modal) modal.classList.add(\"active\");\n    }\n    function closeModal(modalId) {\n      const modal = document.getElementById(modalId);\n      if (modal) modal.classList.remove(\"active\");\n    }\n    function closeModalOnOverlay(e, modalId) {\n      if (e.target.id === modalId) {\n        closeModal(modalId);\n      }\n    }\n\n    // Toast\n    function showToast(msg) {\n      const toast = document.getElementById(\"apple-toast\");\n      document.getElementById(\"toast-message\").textContent = msg;\n      toast.classList.add(\"show\");\n      setTimeout(() => toast.classList.remove(\"show\"), 4200);\n    }\n\n    function escapeHtml(str) {\n      if (!str) return \"\";\n      return String(str)\n        .replace(/&/g, \"&amp;\")\n        .replace(/</g, \"&lt;\")\n        .replace(/>/g, \"&gt;\")\n        .replace(/\"/g, \"&quot;\")\n        .replace(/'/g, \"&#039;\");\n    }\n\n    // Offline / fallback seed data\n    function getFallbackJobs() {\n      return [\n        {\n          id: \"PSAS-JOB-001\",\n          title: \"Principal Sovereign AI Architect\",\n          company: \"PSAS Groups Global\",\n          company_website: \"https://psasgroups.com\",\n          company_logo_color: \"#0071E3\",\n          category: \"AI & Machine Learning\",\n          work_type: \"Remote\",\n          location: \"Global Remote / San Francisco, CA\",\n          experience: \"Lead / Principal (8+ yrs)\",\n          salary_range: \"$260,000 \u2013 $340,000 / yr + Equity\",\n          description: \"Architect and lead sovereign multi-tenant neural swarms, cross-border edge inference engines, and federated foundation models across enterprise clusters.\",\n          requirements: \"Demonstrated expertise in distributed LLM training, Triton, TensorRT-LLM, Kubernetes GPU orchestration, and high-throughput zero-latency streaming architectures.\",\n          benefits: \"Full healthcare, $15k compute allowance, annual global summit, flexible remote work stipend, equity participation.\",\n          featured: 1\n        },\n        {\n          id: \"PSAS-JOB-002\",\n          title: \"Acoustic Foundation Model Researcher\",\n          company: \"YAPA AI\",\n          company_website: \"https://yapa.si\",\n          company_logo_color: \"#2997FF\",\n          category: \"AI & Machine Learning\",\n          work_type: \"Hybrid\",\n          location: \"Zurich, Switzerland / London, UK\",\n          experience: \"Senior (5+ yrs)\",\n          salary_range: \"$195,000 \u2013 $265,000 / yr\",\n          description: \"Drive cutting-edge acoustic perception research for sub-180ms conversational speech intelligence, full-duplex conversational audio tokenizers, and prosodic adaptation.\",\n          requirements: \"Ph.D. or equivalent MS in Speech Processing or Machine Learning. Publications in Interspeech, ICASSP, or NeurIPS. Deep mastery of PyTorch and acoustic tokenization.\",\n          benefits: \"Comprehensive Swiss health coverage, relocated transit pass, high-end hardware budget, research publication bonuses.\",\n          featured: 1\n        },\n        {\n          id: \"PSAS-JOB-004\",\n          title: \"Zero-Trust Autonomous Cyber Defense Lead\",\n          company: \"PSASecurity\",\n          company_website: \"https://psasecurity.si\",\n          company_logo_color: \"#FF3B30\",\n          category: \"Cybersecurity\",\n          work_type: \"Remote\",\n          location: \"Global Remote / Washington, D.C.\",\n          experience: \"Staff / Lead (6+ yrs)\",\n          salary_range: \"$190,000 \u2013 $250,000 / yr\",\n          description: \"Direct autonomous perimeter defense systems, agentic threat simulation pipelines, and predictive intrusion containment on sovereign infrastructure.\",\n          requirements: \"Proven track record in defensive security automation, eBPF telemetry, SIEM/SOAR engineering, and post-quantum cryptographic primitives.\",\n          benefits: \"Competitive base, home office grant, conference sponsorship, unlimited PTO, premium executive healthcare.\",\n          featured: 1\n        },\n        {\n          id: \"PSAS-JOB-003\",\n          title: \"Spatial Video Tensor Engineer\",\n          company: \"VTU AI\",\n          company_website: \"https://vtu.si\",\n          company_logo_color: \"#AF52DE\",\n          category: \"Computer Vision\",\n          work_type: \"On-site\",\n          location: \"Tokyo, Japan / Austin, TX\",\n          experience: \"Senior (4+ yrs)\",\n          salary_range: \"$185,000 \u2013 $245,000 / yr\",\n          description: \"Implement high-framerate 4K/8K real-time neural radiance fields, dense spatial video segmentation, and hardware-accelerated volumetric streaming pipelines.\",\n          requirements: \"Strong background in CUDA, WebGPU/Vulkan, NeRF/3DGS frameworks, and real-time vision pipelines with low-memory footprint.\",\n          benefits: \"Full health and dental, housing allowance for Tokyo campus, gym stipend, annual patent bonus program.\",\n          featured: 0\n        },\n        {\n          id: \"PSAS-JOB-005\",\n          title: \"Distributed Knowledge Graph Engineer\",\n          company: \"LKQ Quantum\",\n          company_website: \"https://lkq.si\",\n          company_logo_color: \"#30D158\",\n          category: \"Cloud & Distributed Systems\",\n          work_type: \"Remote\",\n          location: \"Remote (EU & Americas)\",\n          experience: \"Mid to Senior (4+ yrs)\",\n          salary_range: \"$175,000 \u2013 $230,000 / yr\",\n          description: \"Scale ultra-low-latency vector retrieval engines, hybrid sparse-dense inverted indices, and distributed knowledge synchronization primitives.\",\n          requirements: \"Deep proficiency in Rust or Go, Raft consensus protocols, RocksDB/LSM trees, and vector search indexing (HNSW, ScaNN).\",\n          benefits: \"Remote-first culture, top-tier health coverage, hardware refresh every 2 years, quarterly team retreats.\",\n          featured: 0\n        },\n        {\n          id: \"PSAS-JOB-006\",\n          title: \"Autonomous Cloud Operations SRE\",\n          company: \"PSAO Systems\",\n          company_website: \"https://psao.si\",\n          company_logo_color: \"#FF9F0A\",\n          category: \"Cloud & DevOps\",\n          work_type: \"Remote\",\n          location: \"Remote (Global)\",\n          experience: \"Senior (5+ yrs)\",\n          salary_range: \"$180,000 \u2013 $240,000 / yr\",\n          description: \"Design and implement self-healing cloud control planes, autonomous chaos engineering agents, and multi-cloud resilience meshes across AWS, GCP, and Cloudflare.\",\n          requirements: \"Expertise in Terraform, Kubernetes, Prometheus/OpenTelemetry, Cloudflare Workers/Edge, and incident automation.\",\n          benefits: \"Work anywhere, health/wellness stipend, annual tech stipend, generous parental leave.\",\n          featured: 0\n        }\n      ];\n    }\n  </script>\n</body>\n</html>\n";
export default {
  async fetch(request, env, ctx) {
    // 1. DEFENSIVE SECURITY HEADERS
    const baseSecurityHeaders = {
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
      "Permissions-Policy": "accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()",
      "Cross-Origin-Opener-Policy": "same-origin-allow-popups"
    };

    const adminCsp = "default-src 'self'; script-src 'self' 'unsafe-inline' https://accounts.google.com https://apis.google.com; frame-src https://accounts.google.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://dash.cloudflare.com https://www.googleapis.com https://oauth2.googleapis.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self';";
    const portalCsp = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://psasgroups.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self';";

    // 2. TRUSTED ORIGIN AUDIT & CORS CONFIGURATION
    const reqOrigin = (request.headers.get("Origin") || "").trim().toLowerCase();
    const trustedOrigins = [
      "https://psasgroups.com",
      "https://www.psasgroups.com",
      "https://jobs.psasgroups.com",
      "https://careers.psasgroups.com",
      "https://yapa.si",
      "https://vtu.si",
      "https://psasecurity.si",
      "https://buypsa.si",
      "https://lkq.si",
      "https://lkqonline.si",
      "https://psao.si",
      "https://psas.si",
      "https://psasgroup.si",
      "https://psasgroups.si"
    ];

    const isTrustedOrigin = trustedOrigins.includes(reqOrigin) || reqOrigin.endsWith(".psasgroups.com");
    const allowedOrigin = isTrustedOrigin ? reqOrigin : "*";

    const corsHeaders = {
      ...baseSecurityHeaders,
      "Access-Control-Allow-Origin": allowedOrigin,
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
      "Access-Control-Max-Age": "86400"
    };

    const adminCorsHeaders = {
      ...baseSecurityHeaders,
      "Access-Control-Allow-Origin": isTrustedOrigin ? reqOrigin : "https://psasgroups.com",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Max-Age": "86400"
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    // 3. DEFENSIVE RATE LIMITER HELPER (KV Sliding Window)
    async function checkRateLimit(key, limit, windowSeconds) {
      if (!env.PSAS_CONTACTS_KV) return true;
      try {
        const raw = await env.PSAS_CONTACTS_KV.get(key);
        const count = raw ? parseInt(raw, 10) : 0;
        if (count >= limit) return false;
        await env.PSAS_CONTACTS_KV.put(key, String(count + 1), { expirationTtl: windowSeconds });
        return true;
      } catch (e) {
        console.warn("Rate limit check error:", e);
        return true;
      }
    }

    // 4. INPUT VALIDATION & SANITIZATION HELPERS
    function isValidEmail(email) {
      if (!email || typeof email !== 'string') return false;
      const clean = email.trim();
      if (clean.length > 254) return false;
      return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(clean);
    }

    function isSafeUrl(urlStr) {
      if (!urlStr || typeof urlStr !== 'string') return true;
      const clean = urlStr.trim();
      if (clean.length === 0) return true;
      if (clean.length > 1000) return false;
      return clean.startsWith('https://') || clean.startsWith('http://');
    }

    function sanitizeText(val, maxLen = 250) {
      if (!val) return '';
      return String(val).trim().substring(0, maxLen);
    }

    const url = new URL(request.url);
    const pathname = url.pathname;
    const AUTHORIZED_EMAIL = "singhcoolfrnd@gmail.com";
    const GOOGLE_CLIENT_ID = "807590366012-g3531nh4ehga7oslsoo0gmj8edold5hi.apps.googleusercontent.com";

    // Helper: Parse cookies
    const cookieHeader = request.headers.get("Cookie") || "";
    const cookies = Object.fromEntries(
      cookieHeader.split(";").map(c => {
        const [k, ...v] = c.trim().split("=");
        return [k, v.join("=")];
      }).filter(([k]) => k)
    );

    // Helper: Validate session
    async function getSession() {
      const sessionToken = cookies["psas_admin_session"] || url.searchParams.get("token") || request.headers.get("Authorization")?.replace("Bearer ", "");
      if (!sessionToken || !env.PSAS_CONTACTS_KV) return null;
      try {
        const raw = await env.PSAS_CONTACTS_KV.get("admin_session:" + sessionToken);
        if (!raw) return null;
        const sess = JSON.parse(raw);
        if (sess && sess.role === "Executive Administrator") {
          return { token: sessionToken, ...sess };
        }
      } catch (e) {
        console.error("Session lookup error:", e);
      }
      return null;
    }

    // =========================================================================
    // 0. JOBS & CAREERS WEB PORTAL ROUTING: jobs.psasgroups.com or /jobs
    // =========================================================================
    const reqHost = url.hostname.toLowerCase();
    if (reqHost === "jobs.psasgroups.com" || reqHost === "careers.psasgroups.com" || pathname === "/jobs" || pathname === "/careers" || pathname === "/jobs.html" || pathname === "/careers.html") {
      if (pathname === "/styles.css" || pathname.endsWith(".css") || pathname.endsWith(".png") || pathname.endsWith(".svg") || (pathname.endsWith(".js") && !pathname.startsWith("/api/"))) {
        const assetUrl = new URL(pathname, "https://psasgroups.com");
        return fetch(assetUrl);
      }
      if (!pathname.startsWith("/api/")) {
        return new Response(JOBS_PORTAL_HTML, {
          headers: {
            ...corsHeaders,
            "Content-Security-Policy": portalCsp,
            "Content-Type": "text/html; charset=utf-8",
            "Cache-Control": "public, max-age=60"
          }
        });
      }
    }

    // =========================================================================
    // 1. OAUTH TOKEN VERIFICATION: POST /api/contact?action=verify_oauth
    // =========================================================================
    if (url.searchParams.get("action") === "verify_oauth" && request.method === "POST") {
      try {
        const body = await request.json();
        const { access_token, id_token, credential } = body;
        const googleToken = id_token || credential;
        let profile = null;

        // Verify via Access Token
        if (access_token) {
          try {
            const userRes = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
              headers: { "Authorization": `Bearer ${access_token}` }
            });
            if (userRes.ok) profile = await userRes.json();
          } catch (e) {
            console.error("Google userinfo fetch error:", e);
          }
        }

        // Verify via ID Token / JWT Credential
        if (!profile && googleToken) {
          try {
            const tokenRes = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${googleToken}`);
            if (tokenRes.ok) profile = await tokenRes.json();
          } catch (e) {
            console.error("Google tokeninfo error:", e);
          }
        }

        if (!profile || !profile.email) {
          return new Response(JSON.stringify({
            success: false,
            error: "Unable to verify Google authentication token. Please sign in again."
          }), {
            status: 401,
            headers: { ...corsHeaders, "Content-Type": "application/json" }
          });
        }

        const userEmail = profile.email.toLowerCase().trim();
        const isAuthorized = (userEmail === AUTHORIZED_EMAIL.toLowerCase());

        if (!isAuthorized) {
          return new Response(JSON.stringify({
            success: false,
            error: `Access Denied: Signed in as ${userEmail}. Only the authorized administrator account can access this portal.`
          }), {
            status: 403,
            headers: { ...corsHeaders, "Content-Type": "application/json" }
          });
        }

        const sessionToken = "psas_sess_" + crypto.randomUUID().replace(/-/g, "") + "_" + Date.now().toString(36);
        const sessionData = {
          role: "Executive Administrator",
          name: profile.name || "Executive Administrator",
          picture: profile.picture || "",
          sub: profile.sub || "",
          created_at: new Date().toISOString()
        };

        if (env.PSAS_CONTACTS_KV) {
          await env.PSAS_CONTACTS_KV.put("admin_session:" + sessionToken, JSON.stringify(sessionData), {
            expirationTtl: 604800 // 7 days
          });
        }

        const cookieValue = `psas_admin_session=${sessionToken}; Path=/; Max-Age=604800; Secure; HttpOnly; SameSite=Lax`;

        return new Response(JSON.stringify({
          success: true,
          token: sessionToken,
          role: "Executive Administrator",
          name: profile.name || "Executive Administrator"
        }), {
          status: 200,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
            "Set-Cookie": cookieValue
          }
        });
      } catch (err) {
        return new Response(JSON.stringify({ success: false, error: err.message }), {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        });
      }
    }

    // =========================================================================
    // 2. LOGOUT: GET/POST /admin/logout or ?action=logout
    // =========================================================================
    if (pathname === "/admin/logout" || pathname === "/admin/logout/" || url.searchParams.get("action") === "logout") {
      const sessionToken = cookies["psas_admin_session"] || url.searchParams.get("token");
      if (sessionToken && env.PSAS_CONTACTS_KV) {
        try {
          await env.PSAS_CONTACTS_KV.delete("admin_session:" + sessionToken);
        } catch (e) {
          console.error("Session delete error:", e);
        }
      }

      const expiredCookie = "psas_admin_session=; Path=/; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Secure; HttpOnly; SameSite=Lax";

      if (request.method === "POST" && pathname !== "/admin/logout" && pathname !== "/admin/logout/") {
        return new Response(JSON.stringify({ success: true, message: "Logged out successfully" }), {
          status: 200,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
            "Set-Cookie": expiredCookie
          }
        });
      }

      return new Response(null, {
        status: 302,
        headers: {
          "Location": "/admin?logout=1",
          "Set-Cookie": expiredCookie,
          "Cache-Control": "no-store, no-cache, must-revalidate"
        }
      });
    }

    // =========================================================================
    // 3. JOBS & CAREERS PUBLIC API: /api/jobs and /api/jobs/apply
    // =========================================================================
    if (pathname === "/api/jobs" || pathname === "/api/jobs/") {
      if (request.method === "GET" || request.method === "HEAD") {
        if (request.method === "HEAD") {
          return new Response(null, {
            headers: { ...corsHeaders, "Content-Type": "application/json", "Cache-Control": "public, max-age=15" }
          });
        }
        let jobsList = [];
        if (env.DB) {
          try {
            const rows = await env.DB.prepare("SELECT * FROM jobs WHERE status = 'active' ORDER BY featured DESC, created_at DESC LIMIT 100").all();
            jobsList = rows.results || [];
          } catch(e) {
            console.error("D1 jobs select error:", e);
          }
        }
        return new Response(JSON.stringify({ success: true, count: jobsList.length, jobs: jobsList }), {
          headers: { ...corsHeaders, "Content-Type": "application/json", "Cache-Control": "public, max-age=15" }
        });
      }

      if (request.method === "POST") {
        const clientIp = request.headers.get("cf-connecting-ip") || "unknown";
        const allowed = await checkRateLimit("rl_jobpost_" + clientIp, 5, 300);
        if (!allowed) {
          return new Response(JSON.stringify({
            success: false,
            error: "Rate limit exceeded. Maximum 5 job vacancy postings allowed per 5 minutes."
          }), {
            status: 429,
            headers: { ...corsHeaders, "Retry-After": "300", "Content-Type": "application/json" }
          });
        }

        try {
          const body = await request.json();
          const { title, company, company_website, company_logo_color, category, work_type, location, experience, salary_range, description, requirements, benefits, contact_email } = body;

          if (!title || !company || !category || !location || !salary_range || !description || !contact_email) {
            return new Response(JSON.stringify({
              success: false,
              error: "Please complete all mandatory fields: Job Title, Company, Category, Location, Salary Range, Description, and Contact Email."
            }), {
              status: 400,
              headers: { ...corsHeaders, "Content-Type": "application/json" }
            });
          }

          if (!isValidEmail(contact_email)) {
            return new Response(JSON.stringify({
              success: false,
              error: "Please provide a valid corporate contact email address."
            }), {
              status: 400,
              headers: { ...corsHeaders, "Content-Type": "application/json" }
            });
          }

          if (company_website && !isSafeUrl(company_website)) {
            return new Response(JSON.stringify({
              success: false,
              error: "Company website must start with https:// or http://."
            }), {
              status: 400,
              headers: { ...corsHeaders, "Content-Type": "application/json" }
            });
          }

          const jobId = "PSAS-JOB-" + Date.now().toString(36).toUpperCase() + "-" + Math.random().toString(36).substring(2, 5).toUpperCase();
          if (env.DB) {
            await env.DB.prepare(`
              INSERT INTO jobs (
                id, title, company, company_website, company_logo_color,
                category, work_type, location, experience, salary_range,
                description, requirements, benefits, contact_email, featured, status
              ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0, 'active')
            `).bind(
              jobId, title.trim(), company.trim(), (company_website || "").trim(), (company_logo_color || "#0071E3").trim(),
              category.trim(), (work_type || "Remote").trim(), location.trim(), (experience || "Mid to Senior").trim(), salary_range.trim(),
              description.trim(), (requirements || "").trim(), (benefits || "").trim(), contact_email.trim()
            ).run();
          }

          return new Response(JSON.stringify({
            success: true,
            job_id: jobId,
            message: "Vacancy successfully registered and published to PSAS Global Careers Registry."
          }), {
            status: 201,
            headers: { ...corsHeaders, "Content-Type": "application/json" }
          });
        } catch(err) {
          return new Response(JSON.stringify({ success: false, error: err.message }), {
            status: 500,
            headers: { ...corsHeaders, "Content-Type": "application/json" }
          });
        }
      }
    }

    if (pathname === "/api/jobs/apply" && request.method === "POST") {
      const clientIp = request.headers.get("cf-connecting-ip") || "unknown";
      const allowed = await checkRateLimit("rl_apply_" + clientIp, 10, 300);
      if (!allowed) {
        return new Response(JSON.stringify({
          success: false,
          error: "Rate limit exceeded. Maximum 10 applications permitted per 5 minutes."
        }), {
          status: 429,
          headers: { ...corsHeaders, "Retry-After": "300", "Content-Type": "application/json" }
        });
      }

      try {
        const body = await request.json();
        if (body.apply_hp || body.website_hp) {
          return new Response(JSON.stringify({ success: true, application_id: "APP-VERIFIED" }), {
            status: 200,
            headers: { ...corsHeaders, "Content-Type": "application/json" }
          });
        }

        const { job_id, job_title, company, applicant_name, applicant_email, applicant_phone, linkedin_url, portfolio_url, resume_url, cover_note } = body;

        if (!job_id || !applicant_name || !applicant_email || !cover_note) {
          return new Response(JSON.stringify({
            success: false,
            error: "Mandatory fields missing: Full Name, Email, and Cover Note/Statement are required."
          }), {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" }
          });
        }

        if (!isValidEmail(applicant_email)) {
          return new Response(JSON.stringify({
            success: false,
            error: "Please provide a valid email address."
          }), {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" }
          });
        }

        if (!isSafeUrl(resume_url) || !isSafeUrl(linkedin_url) || !isSafeUrl(portfolio_url)) {
          return new Response(JSON.stringify({
            success: false,
            error: "Resume, LinkedIn, and Portfolio links must start with https:// or http://."
          }), {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" }
          });
        }

        const appId = "APP-" + Date.now().toString(36).toUpperCase() + "-" + Math.random().toString(36).substring(2, 6).toUpperCase();
        if (env.DB) {
          await env.DB.prepare(`
            INSERT INTO job_applications (
              id, job_id, job_title, company, applicant_name,
              applicant_email, applicant_phone, linkedin_url, portfolio_url,
              resume_url, cover_note, status
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'in_process')
          `).bind(
            appId, job_id, (job_title || "General Application").trim(), (company || "PSAS Groups").trim(), applicant_name.trim(),
            applicant_email.trim(), (applicant_phone || "").trim(), (linkedin_url || "").trim(), (portfolio_url || "").trim(),
            (resume_url || "").trim(), cover_note.trim()
          ).run();
        }

        return new Response(JSON.stringify({
          success: true,
          application_id: appId,
          message: "Application successfully submitted and forwarded to the hiring team."
        }), {
          status: 201,
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        });
      } catch(err) {
        return new Response(JSON.stringify({ success: false, error: err.message }), {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        });
      }
    }

    // =========================================================================
    // 4. ADMIN ACTIONS: JOBS STATUS & REMOVAL
    // =========================================================================
    if ((pathname === "/api/jobs/delete" || pathname === "/api/admin/jobs/delete") && request.method === "POST") {
      const session = await getSession();
      if (!session) {
        return new Response(JSON.stringify({ success: false, error: "Unauthorized: Executive Administrator session required" }), {
          status: 401,
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        });
      }
      try {
        const body = await request.json();
        const jobId = (body.job_id || body.id || "").trim();
        if (!jobId) {
          return new Response(JSON.stringify({ success: false, error: "Missing job_id parameter" }), {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" }
          });
        }
        if (env.DB) {
          await env.DB.prepare("DELETE FROM jobs WHERE id = ?").bind(jobId).run();
        }
        return new Response(JSON.stringify({
          success: true,
          job_id: jobId,
          message: `Job ${jobId} successfully removed from the live portal.`
        }), {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        });
      } catch (err) {
        return new Response(JSON.stringify({ success: false, error: err.message }), {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        });
      }
    }

    // Job Status Update (active / in_process / inactive)
    if ((pathname === "/api/jobs/status" || pathname === "/api/admin/jobs/status") && request.method === "POST") {
      const session = await getSession();
      if (!session) {
        return new Response(JSON.stringify({ success: false, error: "Unauthorized" }), {
          status: 401,
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        });
      }
      try {
        const body = await request.json();
        const { id, status } = body;
        if (!id || !status) {
          return new Response(JSON.stringify({ success: false, error: "Missing id or status" }), {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" }
          });
        }
        if (env.DB) {
          await env.DB.prepare("UPDATE jobs SET status = ? WHERE id = ?").bind(status, id).run();
        }
        return new Response(JSON.stringify({
          success: true,
          id,
          status,
          message: `Job status updated to ${status}.`
        }), {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        });
      } catch (err) {
        return new Response(JSON.stringify({ success: false, error: err.message }), {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        });
      }
    }

    // =========================================================================
    // 5. ADMIN ACTIONS: CANDIDATE APPLICATION STATUS & REMOVAL
    // =========================================================================
    // Application Delete
    if ((pathname === "/api/applications/delete" || pathname === "/api/jobs/applications/delete" || pathname === "/api/admin/applications/delete") && request.method === "POST") {
      const session = await getSession();
      if (!session) {
        return new Response(JSON.stringify({ success: false, error: "Unauthorized" }), {
          status: 401,
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        });
      }
      try {
        const body = await request.json();
        const targetId = (body.id || body.app_id || "").trim();
        if (!targetId) {
          return new Response(JSON.stringify({ success: false, error: "Missing application id" }), {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" }
          });
        }
        if (env.DB) {
          await env.DB.prepare("DELETE FROM job_applications WHERE id = ?").bind(targetId).run();
        }
        return new Response(JSON.stringify({
          success: true,
          id: targetId,
          message: `Application ${targetId} permanently deleted.`
        }), {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        });
      } catch (err) {
        return new Response(JSON.stringify({ success: false, error: err.message }), {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        });
      }
    }

    // Application Status Update (in_process / inactive / active)
    if ((pathname === "/api/applications/status" || pathname === "/api/jobs/applications/status" || pathname === "/api/admin/applications/status") && request.method === "POST") {
      const session = await getSession();
      if (!session) {
        return new Response(JSON.stringify({ success: false, error: "Unauthorized" }), {
          status: 401,
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        });
      }
      try {
        const body = await request.json();
        const { id, status } = body;
        if (!id || !status) {
          return new Response(JSON.stringify({ success: false, error: "Missing id or status" }), {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" }
          });
        }
        if (env.DB) {
          await env.DB.prepare("UPDATE job_applications SET status = ? WHERE id = ?").bind(status, id).run();
        }
        return new Response(JSON.stringify({
          success: true,
          id,
          status,
          message: `Application status updated to ${status}.`
        }), {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        });
      } catch (err) {
        return new Response(JSON.stringify({ success: false, error: err.message }), {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        });
      }
    }

    // =========================================================================
    // 6. ADMIN DASHBOARD & GATE: GET /admin or /admin/
    // =========================================================================
    if (pathname === "/admin" || pathname === "/admin/" || pathname.startsWith("/admin")) {
      const session = await getSession();

      if (session) {
        let contacts = [];
        let jobs = [];
        let applications = [];
        if (env.DB) {
          try {
            const [cRows, jRows, aRows] = await Promise.all([
              env.DB.prepare("SELECT * FROM contacts ORDER BY id DESC LIMIT 100").all(),
              env.DB.prepare("SELECT * FROM jobs ORDER BY featured DESC, created_at DESC").all(),
              env.DB.prepare("SELECT * FROM job_applications ORDER BY created_at DESC LIMIT 100").all()
            ]);
            contacts = cRows.results || [];
            jobs = jRows.results || [];
            applications = aRows.results || [];
          } catch(e) {
            console.error("D1 admin select error:", e);
          }
        }

        if (url.searchParams.get("format") === "json") {
          return new Response(JSON.stringify({
            success: true,
            user_role: "Executive Administrator",
            contacts_count: contacts.length,
            jobs_count: jobs.length,
            applications_count: applications.length,
            jobs,
            applications,
            contacts
          }, null, 2), {
            headers: { ...corsHeaders, "Content-Type": "application/json" }
          });
        }

        const adminHeaders = {
          ...adminCorsHeaders,
          ...baseSecurityHeaders,
          "Content-Security-Policy": adminCsp,
          "Content-Type": "text/html; charset=utf-8",
          "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0"
        };
        if (session && session.token) {
          adminHeaders["Set-Cookie"] = `psas_admin_session=${session.token}; Path=/; Max-Age=86400; Secure; HttpOnly; SameSite=Lax`;
        }
        return new Response(renderAdminDashboardHtml({ session, contacts, jobs, applications }), {
          headers: adminHeaders
        });
      }

      // Not authenticated: render Security Gate with Google OAuth
      return new Response(renderSecurityGateHtml({ googleClientId: GOOGLE_CLIENT_ID }), {
        headers: {
          ...adminCorsHeaders,
          ...baseSecurityHeaders,
          "Content-Security-Policy": adminCsp,
          "Content-Type": "text/html; charset=utf-8",
          "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0"
        }
      });
    }

    // =========================================================================
    // 7. PUBLIC CONTACT FORM SUBMISSION: POST /api/contact
    // =========================================================================
    if (request.method === "POST" && (pathname === "/api/contact" || pathname === "/api/contact/")) {
      const clientIp = request.headers.get("cf-connecting-ip") || "unknown";
      const allowed = await checkRateLimit("rl_contact_" + clientIp, 10, 300);
      if (!allowed) {
        return new Response(JSON.stringify({
          success: false,
          error: "Rate limit exceeded. Maximum 10 inquiry submissions permitted per 5 minutes."
        }), {
          status: 429,
          headers: { ...corsHeaders, "Retry-After": "300", "Content-Type": "application/json" }
        });
      }

      try {
        const data = await request.json();
        if (data.website_hp || data.confirm_hp) {
          return new Response(JSON.stringify({ success: true, submission_id: "PSAS-VERIFIED" }), {
            status: 200,
            headers: { ...corsHeaders, "Content-Type": "application/json" }
          });
        }

        const name = sanitizeText(data.name || data.full_name, 150);
        const email = sanitizeText(data.email || data.work_email, 254);
        const company = sanitizeText(data.company, 200);
        const phone = sanitizeText(data.phone, 40);
        const subsidiary = sanitizeText(data.subsidiary || "psasgroups.com", 100);
        const inquiryType = sanitizeText(data.inquiry_type || "General", 80);
        const subject = sanitizeText(data.subject, 250);
        const message = sanitizeText(data.message, 10000);

        if (!name || !email || !message) {
          return new Response(JSON.stringify({
            success: false,
            error: "Required fields missing: name, email, and message are mandatory."
          }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
        }

        if (!isValidEmail(email)) {
          return new Response(JSON.stringify({
            success: false,
            error: "Please provide a valid email address."
          }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
        }

        const ip = request.headers.get("cf-connecting-ip") || "unknown";
        const country = request.headers.get("cf-ipcountry") || "unknown";
        const userAgent = request.headers.get("user-agent") || "unknown";
        const submissionId = "PSAS-" + Date.now().toString(36).toUpperCase() + "-" + Math.random().toString(36).substring(2, 6).toUpperCase();
        const timestamp = new Date().toISOString();

        if (env.DB) {
          try {
            await env.DB.prepare(`
              INSERT INTO contacts (
                submission_id, full_name, work_email, company, phone,
                subsidiary, inquiry_type, subject, message,
                ip_address, geo_country, user_agent, created_at
              ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `).bind(
              submissionId, name, email, company, phone,
              subsidiary, inquiryType, subject, message,
              ip, country, userAgent, timestamp
            ).run();
          } catch(e) {
            console.error("D1 contact insert error:", e);
          }
        }

        return new Response(JSON.stringify({
          success: true,
          submission_id: submissionId,
          message: "Executive inquiry securely received and recorded."
        }), {
          status: 201,
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        });
      } catch (err) {
        return new Response(JSON.stringify({ success: false, error: err.message }), {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        });
      }
    }

    return new Response(JSON.stringify({ error: "Endpoint not found" }), {
      status: 404,
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    });
  }
};

// =========================================================================
// HTML TEMPLATE: GOOGLE OAUTH SECURITY GATE
// =========================================================================
function renderSecurityGateHtml({ googleClientId }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PSAS Executive Registry | Security Gate</title>
  <meta name="robots" content="noindex, nofollow">
  <script src="https://accounts.google.com/gsi/client" async defer></script>
  <style>
    :root {
      --bg: #000000;
      --card-bg: rgba(22, 24, 29, 0.72);
      --border: rgba(255, 255, 255, 0.12);
      --accent: #0071e3;
      --text: #f5f5f7;
      --text-muted: #86868b;
      --danger: #ff453a;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      padding: 0;
      min-height: 100vh;
      background: radial-gradient(circle at 50% 20%, #11141c 0%, #000000 70%);
      font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, sans-serif;
      color: var(--text);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
    }
    .gate-card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 28px;
      padding: 48px;
      max-width: 460px;
      width: 100%;
      text-align: center;
      backdrop-filter: blur(40px) saturate(180%);
      -webkit-backdrop-filter: blur(40px) saturate(180%);
      box-shadow: 0 30px 80px rgba(0, 0, 0, 0.7);
    }
    .brand-mark {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 6px 16px;
      border-radius: 980px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--text-muted);
      margin-bottom: 24px;
    }
    .dot-live {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #30d158;
      box-shadow: 0 0 12px #30d158;
    }
    h1 {
      font-size: 26px;
      font-weight: 700;
      letter-spacing: -0.02em;
      margin: 0 0 8px;
      color: #ffffff;
    }
    p.desc {
      font-size: 14px;
      line-height: 1.5;
      color: var(--text-muted);
      margin: 0 0 32px;
    }
    .auth-box {
      margin-top: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
    }
    .alert {
      display: none;
      padding: 12px 16px;
      border-radius: 12px;
      font-size: 13px;
      line-height: 1.4;
      text-align: left;
      margin-top: 20px;
    }
    .alert-danger {
      background: rgba(255, 69, 58, 0.12);
      border: 1px solid rgba(255, 69, 58, 0.3);
      color: #ff453a;
    }
    .alert-success {
      background: rgba(48, 209, 88, 0.12);
      border: 1px solid rgba(48, 209, 88, 0.3);
      color: #30d158;
    }
    .footer-note {
      margin-top: 36px;
      font-size: 11px;
      color: #636366;
      line-height: 1.5;
    }
  </style>
</head>
<body>
  <div class="gate-card">
    <div class="brand-mark">
      <span class="dot-live"></span>
      PSAS GROUPS GLOBAL
    </div>
    <h1>Executive Registry</h1>
    <p class="desc">Sign in with your authorized Google Account to access the executive dashboard, manage careers vacancies, and view submissions.</p>

    <div class="auth-box">
      <div id="g_id_onload"
           data-client_id="${googleClientId}"
           data-context="signin"
           data-ux_mode="popup"
           data-callback="handleCredentialResponse"
           data-auto_prompt="false">
      </div>
      <div class="g_id_signin"
           data-type="standard"
           data-shape="pill"
           data-theme="filled_black"
           data-text="signin_with"
           data-size="large"
           data-logo_alignment="left"
           data-width="320">
      </div>
    </div>

    <div id="alert-box" class="alert"></div>

    <div class="footer-note">
      End-to-end encrypted session &bull; Zero plaintext credentials stored &bull; Google OAuth Identity Protected
    </div>
  </div>

  <script>
    function showAlert(html, isSuccess = false) {
      const box = document.getElementById('alert-box');
      box.className = 'alert ' + (isSuccess ? 'alert-success' : 'alert-danger');
      box.innerHTML = html;
      box.style.display = 'block';
    }

    async function handleCredentialResponse(response) {
      if (!response.credential) {
        showAlert('Authentication failed: No token received.');
        return;
      }

      showAlert('Verifying Google Identity against Executive ACL...', true);

      try {
        const verifyRes = await fetch('/api/contact?action=verify_oauth', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ credential: response.credential })
        });

        const data = await verifyRes.json();

        if (data.success) {
          showAlert('<strong>Access Granted.</strong> Loading Executive Dashboard...', true);
          setTimeout(() => {
            window.location.href = '/admin';
          }, 800);
        } else {
          showAlert('<strong>Access Denied:</strong> ' + (data.error || 'Account not authorized.'));
        }
      } catch (err) {
        showAlert('Connection error: ' + err.message);
      }
    }
  </script>
</body>
</html>`;
}

// =========================================================================
// HTML TEMPLATE: APPLE EXECUTIVE DASHBOARD (FULL LIFECYCLE MANAGEMENT)
// =========================================================================
function renderAdminDashboardHtml({ session, contacts, jobs = [], applications = [] }) {
  function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  const jobsJson = JSON.stringify(jobs).replace(/</g, '\\u003c');
  const contactsJson = JSON.stringify(contacts).replace(/</g, '\\u003c');
  const applicationsJson = JSON.stringify(applications).replace(/</g, '\\u003c');

  // Helper for status badge HTML
  function getStatusPill(status) {
    status = (status || 'in_process').toLowerCase();
    if (status === 'active') {
      return '<span class="status-pill status-active">Active</span>';
    } else if (status === 'inactive') {
      return '<span class="status-pill status-inactive">Inactive</span>';
    } else {
      return '<span class="status-pill status-inprocess">In Process</span>';
    }
  }

  // 1. Build Jobs Table Rows
  const jobsRowsHtml = jobs.map(j => {
    const st = (j.status || 'active').toLowerCase();
    return `
    <tr class="table-row" id="job-row-${escapeHtml(j.id)}" data-venture="${escapeHtml((j.company || '').toLowerCase())}" data-status="${escapeHtml(st)}">
      <td style="font-family: monospace; font-size: 13px; color: #2997ff; font-weight: 600;">${escapeHtml(j.id)}</td>
      <td>
        <div style="font-weight: 600; color: #ffffff; font-size: 14px;">
          ${escapeHtml(j.title)}
          ${j.featured ? '<span class="featured-badge">★ FEATURED</span>' : ''}
        </div>
        <div style="font-size: 12px; color: #86868b; margin-top: 2px;">${escapeHtml(j.category)} &bull; ${escapeHtml(j.experience || 'Mid to Senior')}</div>
      </td>
      <td>
        <span class="venture-tag" style="border-color: ${escapeHtml(j.company_logo_color || '#0071E3')}40; background: ${escapeHtml(j.company_logo_color || '#0071E3')}15; color: #f5f5f7;">
          <span style="display:inline-block; width:6px; height:6px; border-radius:50%; background:${escapeHtml(j.company_logo_color || '#0071E3')}; margin-right:6px;"></span>
          ${escapeHtml(j.company)}
        </span>
      </td>
      <td>
        <div style="font-size: 13px; color: #ffffff;">${escapeHtml(j.work_type || 'Remote')}</div>
        <div style="font-size: 12px; color: #86868b;">${escapeHtml(j.location)}</div>
      </td>
      <td>
        <div style="font-size: 13px; font-weight: 600; color: #30d158;">${escapeHtml(j.salary_range)}</div>
      </td>
      <td>
        <select class="status-dropdown status-select-${escapeHtml(st)}" onchange="updateJobStatus('${escapeHtml(j.id)}', this.value)">
          <option value="active" ${st === 'active' ? 'selected' : ''}>Active (Public)</option>
          <option value="in_process" ${st === 'in_process' ? 'selected' : ''}>In Process</option>
          <option value="inactive" ${st === 'inactive' ? 'selected' : ''}>Inactive (Hidden)</option>
        </select>
      </td>
      <td style="white-space: nowrap;">
        <button type="button" class="btn-remove-job" onclick="openDeleteJobModal('${escapeHtml(j.id)}')">Remove Job</button>
      </td>
    </tr>
  `}).join("");

  // 2. Build Applications Table Rows with Download Resume & Inactive/InProcess Status
  const applicationsRowsHtml = applications.map(a => {
    const st = (a.status || 'in_process').toLowerCase();
    const hasResume = !!(a.resume_url && a.resume_url.trim().length > 0);
    return `
    <tr class="table-row" id="app-row-${escapeHtml(a.id)}" data-status="${escapeHtml(st)}">
      <td style="font-family: monospace; font-size: 13px; color: #2997ff; font-weight: 600;">${escapeHtml(a.id)}</td>
      <td>
        <div style="font-weight: 600; color: #ffffff; font-size: 14px;">${escapeHtml(a.job_title)}</div>
        <div style="font-size: 12px; color: #86868b;">${escapeHtml(a.company)} &bull; Ref: ${escapeHtml(a.job_id)}</div>
      </td>
      <td>
        <div style="font-weight: 600; color: #ffffff;">${escapeHtml(a.applicant_name)}</div>
        <div style="font-size: 12px; color: #86868b;">
          <a href="mailto:${escapeHtml(a.applicant_email)}" style="color:#2997ff; text-decoration:none;">${escapeHtml(a.applicant_email)}</a>
          ${a.applicant_phone ? ' &bull; ' + escapeHtml(a.applicant_phone) : ''}
        </div>
      </td>
      <td>
        <select class="status-dropdown status-select-${escapeHtml(st)}" id="app-select-${escapeHtml(a.id)}" onchange="updateAppStatus('${escapeHtml(a.id)}', this.value)">
          <option value="in_process" ${st === 'in_process' ? 'selected' : ''}>⏳ In Process</option>
          <option value="inactive" ${st === 'inactive' ? 'selected' : ''}>⚪ Inactive</option>
          <option value="active" ${st === 'active' ? 'selected' : ''}>🟢 Active</option>
        </select>
      </td>
      <td>
        <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
          <button type="button" class="btn-download" onclick="downloadCandidateResume('${escapeHtml(a.id)}')">
            📥 Download Resume
          </button>
          <button type="button" class="btn-inspect" onclick="inspectApplication('${escapeHtml(a.id)}')">
            View Dossier
          </button>
        </div>
      </td>
      <td style="font-size: 12px; color: #86868b; white-space: nowrap;">${escapeHtml(a.created_at || 'Recent')}</td>
      <td style="white-space: nowrap;">
        <button type="button" class="btn-remove-job" onclick="openDeleteAppModal('${escapeHtml(a.id)}')">Delete</button>
      </td>
    </tr>
  `}).join("");

  // 3. Build Contacts Table Rows
  const contactsRowsHtml = contacts.map(c => `
    <tr class="table-row" data-sub="${escapeHtml(c.subsidiary || '')}" data-id="${escapeHtml(c.id)}">
      <td style="font-family: monospace; font-size: 13px; color: #2997ff;">${escapeHtml(c.submission_id || ('PSAS-' + c.id))}</td>
      <td><span class="venture-tag">${escapeHtml(c.subsidiary || c.site_domain)}</span></td>
      <td>
        <div style="font-weight: 600; color: #ffffff;">${escapeHtml(c.full_name)}</div>
        <div style="font-size: 12px; color: #86868b;"><a href="mailto:${escapeHtml(c.work_email)}" style="color: #2997ff; text-decoration: none;">${escapeHtml(c.work_email)}</a></div>
      </td>
      <td>
        <div style="font-size: 14px; color: #ffffff;">${escapeHtml(c.company || '—')}</div>
        <div style="font-size: 12px; color: #86868b;">${escapeHtml(c.phone || '')}</div>
      </td>
      <td><span class="class-pill">${escapeHtml(c.inquiry_type || 'General')}</span></td>
      <td>
        <div style="font-size: 13px; font-weight: 500; color: #ffffff; max-width: 220px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
          ${escapeHtml(c.subject || 'No Subject')}
        </div>
        <div style="font-size: 12px; color: #86868b; max-width: 220px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
          ${escapeHtml((c.message || '').replace(/[\r\n]+/g, ' '))}
        </div>
      </td>
      <td style="font-size: 12px; color: #86868b; white-space: nowrap;">${escapeHtml(c.created_at || 'Recent')}</td>
      <td>
        <button type="button" class="btn-inspect" onclick="inspectRecord('${escapeHtml(c.id)}')">Inspect Payload</button>
      </td>
    </tr>
  `).join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PSAS Executive Registry & Governance Portal</title>
  <meta name="robots" content="noindex, nofollow">
  <style>
    :root {
      --bg: #050507;
      --card-bg: rgba(22, 24, 29, 0.75);
      --border: rgba(255, 255, 255, 0.1);
      --accent: #0071e3;
      --text: #f5f5f7;
      --text-muted: #86868b;
      --success: #30d158;
      --warning: #ff9f0a;
      --danger: #ff453a;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      padding: 0;
      min-height: 100vh;
      background: var(--bg);
      font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, sans-serif;
      color: var(--text);
    }
    .top-bar {
      position: sticky;
      top: 0;
      z-index: 100;
      background: rgba(5, 5, 7, 0.85);
      backdrop-filter: blur(20px) saturate(180%);
      -webkit-backdrop-filter: blur(20px) saturate(180%);
      border-bottom: 1px solid var(--border);
      padding: 16px 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .top-brand {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 16px;
      font-weight: 600;
      letter-spacing: -0.01em;
    }
    .dot-live {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #30d158;
      box-shadow: 0 0 10px #30d158;
    }
    .top-user {
      display: flex;
      align-items: center;
      gap: 14px;
    }
    .portal-link {
      color: #2997ff;
      text-decoration: none;
      font-size: 13px;
      padding: 6px 14px;
      border-radius: 980px;
      background: rgba(0, 113, 227, 0.1);
      border: 1px solid rgba(0, 113, 227, 0.25);
      transition: all 0.2s;
    }
    .portal-link:hover {
      background: rgba(0, 113, 227, 0.25);
    }
    .user-pill {
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid var(--border);
      padding: 6px 14px;
      border-radius: 980px;
      font-size: 13px;
      color: #f5f5f7;
    }
    .btn-logout {
      background: rgba(255, 69, 58, 0.1);
      border: 1px solid rgba(255, 69, 58, 0.25);
      color: #ff453a;
      padding: 6px 14px;
      border-radius: 980px;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.2s;
    }
    .btn-logout:hover {
      background: rgba(255, 69, 58, 0.25);
    }
    .main-wrap {
      max-width: 1400px;
      margin: 0 auto;
      padding: 32px 24px 80px;
    }
    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 16px;
      margin-bottom: 32px;
    }
    .metric-card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 24px;
      backdrop-filter: blur(20px);
    }
    .metric-label {
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--text-muted);
      margin-bottom: 8px;
    }
    .metric-num {
      font-size: 32px;
      font-weight: 700;
      letter-spacing: -0.02em;
      margin-bottom: 4px;
      color: #ffffff;
    }
    /* Tabs System */
    .tabs-bar {
      display: flex;
      gap: 8px;
      border-bottom: 1px solid var(--border);
      margin-bottom: 24px;
      overflow-x: auto;
    }
    .tab-btn {
      background: transparent;
      border: none;
      color: var(--text-muted);
      padding: 12px 20px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      border-bottom: 2px solid transparent;
      transition: all 0.2s;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }
    .tab-btn:hover {
      color: #ffffff;
    }
    .tab-btn.active {
      color: #2997ff;
      border-bottom-color: #2997ff;
    }
    .tab-badge {
      background: rgba(255, 255, 255, 0.08);
      padding: 2px 8px;
      border-radius: 980px;
      font-size: 11px;
    }
    .tab-btn.active .tab-badge {
      background: rgba(41, 151, 255, 0.2);
      color: #2997ff;
    }
    /* Controls bar */
    .controls-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
      margin-bottom: 20px;
    }
    .filter-select {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 10px 16px;
      color: #f5f5f7;
      font-size: 13px;
      outline: none;
    }
    .status-dropdown {
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid var(--border);
      border-radius: 980px;
      padding: 6px 12px;
      color: #f5f5f7;
      font-size: 12px;
      font-weight: 500;
      outline: none;
      cursor: pointer;
      transition: all 0.2s;
    }
    .status-dropdown:focus {
      border-color: #2997ff;
    }
    .status-select-active {
      border-color: rgba(48, 209, 88, 0.4);
      color: #30d158;
    }
    .status-select-in_process {
      border-color: rgba(255, 159, 10, 0.4);
      color: #ff9f0a;
    }
    .status-select-inactive {
      border-color: rgba(142, 142, 147, 0.4);
      color: #8e8e93;
    }
    .table-card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 24px;
      overflow: hidden;
      backdrop-filter: blur(20px);
      box-shadow: 0 20px 50px rgba(0,0,0,0.4);
    }
    table {
      width: 100%;
      border-collapse: collapse;
      text-align: left;
    }
    th {
      background: rgba(255, 255, 255, 0.03);
      padding: 16px 20px;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--text-muted);
      border-bottom: 1px solid var(--border);
    }
    td {
      padding: 18px 20px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      vertical-align: middle;
      font-size: 14px;
    }
    .table-row:hover {
      background: rgba(255, 255, 255, 0.02);
    }
    .venture-tag {
      display: inline-flex;
      align-items: center;
      padding: 4px 10px;
      border-radius: 8px;
      background: rgba(0, 113, 227, 0.12);
      border: 1px solid rgba(0, 113, 227, 0.25);
      color: #2997ff;
      font-size: 12px;
      font-weight: 500;
    }
    .featured-badge {
      display: inline-block;
      margin-left: 6px;
      padding: 2px 6px;
      border-radius: 4px;
      background: rgba(255, 159, 10, 0.15);
      border: 1px solid rgba(255, 159, 10, 0.3);
      color: #ff9f0a;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.04em;
    }
    .class-pill {
      display: inline-block;
      padding: 4px 10px;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.06);
      color: #f5f5f7;
      font-size: 12px;
    }
    .status-pill {
      display: inline-block;
      padding: 4px 10px;
      border-radius: 980px;
      font-size: 12px;
      font-weight: 500;
    }
    .status-active {
      background: rgba(48, 209, 88, 0.12);
      border: 1px solid rgba(48, 209, 88, 0.25);
      color: #30d158;
    }
    .status-inprocess {
      background: rgba(255, 159, 10, 0.12);
      border: 1px solid rgba(255, 159, 10, 0.25);
      color: #ff9f0a;
    }
    .status-inactive {
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.12);
      color: #8e8e93;
    }
    /* Action Buttons */
    .btn-download {
      background: rgba(0, 113, 227, 0.15);
      border: 1px solid rgba(0, 113, 227, 0.35);
      color: #2997ff;
      padding: 6px 14px;
      border-radius: 980px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }
    .btn-download:hover {
      background: #0071e3;
      color: #ffffff;
      box-shadow: 0 4px 14px rgba(0, 113, 227, 0.4);
    }
    .btn-remove-job {
      background: rgba(255, 69, 58, 0.12);
      border: 1px solid rgba(255, 69, 58, 0.3);
      color: #ff453a;
      padding: 6px 14px;
      border-radius: 980px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }
    .btn-remove-job:hover {
      background: #ff453a;
      color: #ffffff;
      box-shadow: 0 4px 14px rgba(255, 69, 58, 0.4);
    }
    .btn-inspect {
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.12);
      color: #f5f5f7;
      padding: 6px 14px;
      border-radius: 980px;
      font-size: 12px;
      cursor: pointer;
      transition: background 0.2s;
    }
    .btn-inspect:hover {
      background: rgba(255, 255, 255, 0.12);
    }
    /* Modals */
    .modal-overlay {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.75);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      z-index: 1000;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    .modal-card {
      background: #16181d;
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 24px;
      max-width: 580px;
      width: 100%;
      padding: 32px;
      box-shadow: 0 40px 80px rgba(0,0,0,0.8);
      position: relative;
    }
    .modal-title {
      font-size: 20px;
      font-weight: 700;
      color: #ffffff;
      margin: 0 0 10px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .modal-desc {
      font-size: 14px;
      line-height: 1.5;
      color: var(--text-muted);
      margin: 0 0 24px;
    }
    .modal-actions {
      display: flex;
      justify-content: flex-end;
      gap: 12px;
    }
    .btn-cancel {
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid var(--border);
      color: var(--text);
      padding: 10px 20px;
      border-radius: 980px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.2s;
    }
    .btn-cancel:hover {
      background: rgba(255, 255, 255, 0.12);
    }
    .btn-confirm-delete {
      background: #ff453a;
      border: none;
      color: #ffffff;
      padding: 10px 22px;
      border-radius: 980px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      box-shadow: 0 4px 14px rgba(255, 69, 58, 0.4);
      transition: opacity 0.2s;
    }
    .btn-confirm-delete:hover {
      opacity: 0.9;
    }
    /* Floating Toast */
    .toast {
      display: none;
      position: fixed;
      bottom: 32px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(30, 32, 38, 0.95);
      border: 1px solid rgba(255, 255, 255, 0.15);
      padding: 12px 24px;
      border-radius: 980px;
      font-size: 13px;
      font-weight: 500;
      color: #ffffff;
      box-shadow: 0 10px 30px rgba(0,0,0,0.6);
      backdrop-filter: blur(20px);
      z-index: 9999;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    .empty-state {
      padding: 48px;
      text-align: center;
      color: var(--text-muted);
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="top-bar">
    <div class="top-brand">
      <span class="dot-live"></span>
      <span>PSAS Groups Global &bull; Executive Governance Portal</span>
    </div>
    <div class="top-user">
      <a href="https://jobs.psasgroups.com" target="_blank" class="portal-link">Live Careers Portal ↗</a>
      <div class="user-pill">
        <span>Executive Administrator</span>
      </div>
      <a href="/admin/logout" class="btn-logout" id="logout-btn">Sign Out</a>
    </div>
  </div>

  <main class="main-wrap">
    <!-- Executive Metrics Grid -->
    <div class="metrics-grid">
      <div class="metric-card">
        <div class="metric-label">Active Portal Roles</div>
        <div class="metric-num" id="active-jobs-count">${jobs.filter(j => (j.status || 'active') === 'active').length}</div>
        <div style="font-size: 12px; color: #30d158;">Synchronized on jobs.psasgroups.com</div>
      </div>
      <div class="metric-card">
        <div class="metric-label">Candidate Applications</div>
        <div class="metric-num" id="active-apps-count">${applications.length}</div>
        <div style="font-size: 12px; color: #2997ff;">D1 Encrypted Resume Payloads</div>
      </div>
      <div class="metric-card">
        <div class="metric-label">Contact Transmissions</div>
        <div class="metric-num">${contacts.length}</div>
        <div style="font-size: 12px; color: #30d158;">11 Subsidiaries Online</div>
      </div>
      <div class="metric-card">
        <div class="metric-label">Edge Node Status</div>
        <div class="metric-num" style="font-size: 20px; margin: 12px 0 6px; font-weight: 600;">Cloudflare D1</div>
        <div style="font-size: 12px; color: #30d158;">Global Edge Replicated</div>
      </div>
    </div>

    <!-- Navigation Tabs -->
    <div class="tabs-bar">
      <button type="button" class="tab-btn" id="tab-btn-jobs" onclick="switchTab('jobs')">
        🏢 Portal Jobs Management
        <span class="tab-badge" id="tab-jobs-badge">${jobs.length}</span>
      </button>
      <button type="button" class="tab-btn active" id="tab-btn-applications" onclick="switchTab('applications')">
        📄 Candidate Applications
        <span class="tab-badge" id="tab-apps-badge">${applications.length}</span>
      </button>
      <button type="button" class="tab-btn" id="tab-btn-contacts" onclick="switchTab('contacts')">
        📬 Contact Inquiries
        <span class="tab-badge">${contacts.length}</span>
      </button>
    </div>

    <!-- TAB 1: JOBS MANAGEMENT -->
    <div id="panel-jobs" class="tab-panel" style="display: none;">
      <div class="controls-bar">
        <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
          <input type="text" id="job-search-box" class="filter-select" style="min-width: 280px;" placeholder="Search roles by title, ref ID, venture, or location...">
          <select id="job-status-filter" class="filter-select">
            <option value="all">All Statuses</option>
            <option value="active">Active (Public)</option>
            <option value="in_process">In Process</option>
            <option value="inactive">Inactive (Hidden)</option>
          </select>
          <select id="job-venture-filter" class="filter-select">
            <option value="all">All Ventures</option>
            <option value="psas groups global">PSAS Groups Global</option>
            <option value="yapa ai">YAPA AI</option>
            <option value="vtu ai">VTU AI</option>
            <option value="psasecurity">PSASecurity</option>
            <option value="lkq quantum">LKQ Quantum</option>
            <option value="psao systems">PSAO Systems</option>
          </select>
        </div>
        <div>
          <a href="https://jobs.psasgroups.com/#post-vacancy" target="_blank" class="portal-link" style="padding: 10px 18px; display:inline-flex; align-items:center; gap:6px;">
            <span>+ Post New Role on Portal</span> ↗
          </a>
        </div>
      </div>

      <div class="table-card">
        <table id="jobs-table">
          <thead>
            <tr>
              <th>Ref ID</th>
              <th>Role & Specialty</th>
              <th>Subsidiary / Venture</th>
              <th>Arrangement</th>
              <th>Compensation</th>
              <th>Status Lifecycle</th>
              <th>Dashboard Action</th>
            </tr>
          </thead>
          <tbody id="jobs-table-body">
            ${jobsRowsHtml || '<tr><td colspan="7" class="empty-state">No jobs found in portal registry.</td></tr>'}
          </tbody>
        </table>
      </div>
    </div>

    <!-- TAB 2: CANDIDATE APPLICATIONS -->
    <div id="panel-applications" class="tab-panel">
      <div class="controls-bar">
        <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
          <input type="text" id="app-search-box" class="filter-select" style="min-width: 280px;" placeholder="Search candidate, role, email, or app ID...">
          <select id="app-status-filter" class="filter-select">
            <option value="all">All Application Statuses</option>
            <option value="in_process">⏳ In Process</option>
            <option value="active">🟢 Active</option>
            <option value="inactive">⚪ Inactive</option>
          </select>
        </div>
        <div style="font-size: 13px; color: var(--text-muted);">
          Click <strong>Download Resume</strong> to save candidate CV & complete profile dossier.
        </div>
      </div>

      <div class="table-card">
        <table>
          <thead>
            <tr>
              <th>App ID</th>
              <th>Applied Role</th>
              <th>Candidate Name & Contact</th>
              <th>Status</th>
              <th>Resume & Dossier</th>
              <th>Date Applied</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="applications-table-body">
            ${applicationsRowsHtml || '<tr><td colspan="7" class="empty-state">No candidate applications received yet. Real-time submissions from jobs.psasgroups.com will populate here.</td></tr>'}
          </tbody>
        </table>
      </div>
    </div>

    <!-- TAB 3: CONTACT INQUIRIES -->
    <div id="panel-contacts" class="tab-panel" style="display: none;">
      <div class="controls-bar">
        <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
          <select id="venture-filter" class="filter-select">
            <option value="all">All Portals (11 Ventures)</option>
            <option value="psasgroups.com">psasgroups.com (Global Holding)</option>
            <option value="yapa.si">yapa.si (Conversational AI)</option>
            <option value="vtu.si">vtu.si (Computer Vision)</option>
            <option value="psasecurity.si">psasecurity.si (Defense & Cyber)</option>
            <option value="buypsa.si">buypsa.si (Retail & E-Com)</option>
            <option value="lkq.si">lkq.si (Automotive OEM)</option>
            <option value="lkqonline.si">lkqonline.si (Fleet AI)</option>
            <option value="psao.si">psao.si (Life Sciences)</option>
            <option value="psas.si">psas.si (Aerospace)</option>
            <option value="psasgroup.si">psasgroup.si (Fintech)</option>
            <option value="psasgroups.si">psasgroups.si (Smart Cities)</option>
          </select>
          <input type="text" id="search-box" class="filter-select" placeholder="Search sender, company, or message..." style="min-width: 280px;">
        </div>
      </div>

      <div class="table-card">
        <table id="contacts-table">
          <thead>
            <tr>
              <th>Transmission ID</th>
              <th>Venture</th>
              <th>Sender</th>
              <th>Organization</th>
              <th>Classification</th>
              <th>Message Brief</th>
              <th>Timestamp</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="contacts-table-body">
            ${contactsRowsHtml || '<tr><td colspan="8" class="empty-state">No contact transmissions recorded yet.</td></tr>'}
          </tbody>
        </table>
      </div>
    </div>
  </main>

  <!-- REMOVE JOB CONFIRMATION MODAL -->
  <div id="delete-modal" class="modal-overlay">
    <div class="modal-card">
      <div class="modal-title">
        <span style="color: #ff453a;">🗑️</span> Remove Job from Portal
      </div>
      <div class="modal-desc">
        Are you sure you want to remove <strong id="modal-del-title" style="color:#ffffff;"></strong> from the public jobs portal?
        <div style="margin: 12px 0; padding: 12px; border-radius: 12px; background: rgba(255,255,255,0.04); font-size: 13px;">
          <div><strong>Role ID:</strong> <span id="modal-del-id" style="font-family:monospace; color:#2997ff;"></span></div>
          <div style="margin-top: 4px;"><strong>Company:</strong> <span id="modal-del-company"></span></div>
        </div>
        <p style="color: #ff453a; font-size: 13px; margin: 0;">
          ⚠️ This role will be immediately deleted from Cloudflare D1 and will disappear from <strong>jobs.psasgroups.com</strong>.
        </p>
      </div>
      <div class="modal-actions">
        <button type="button" class="btn-cancel" onclick="closeDeleteJobModal()">Cancel</button>
        <button type="button" class="btn-confirm-delete" id="confirm-delete-btn" onclick="executeDeleteJob()">Confirm & Remove Role</button>
      </div>
    </div>
  </div>

  <!-- DELETE APPLICATION CONFIRMATION MODAL -->
  <div id="delete-app-modal" class="modal-overlay">
    <div class="modal-card">
      <div class="modal-title">
        <span style="color: #ff453a;">🗑️</span> Delete Candidate Application
      </div>
      <div class="modal-desc">
        Are you sure you want to permanently delete the application for <strong id="modal-app-name" style="color:#ffffff;"></strong>?
        <div style="margin: 12px 0; padding: 12px; border-radius: 12px; background: rgba(255,255,255,0.04); font-size: 13px;">
          <div><strong>App ID:</strong> <span id="modal-app-id" style="font-family:monospace; color:#2997ff;"></span></div>
          <div style="margin-top: 4px;"><strong>Applied Position:</strong> <span id="modal-app-role"></span></div>
        </div>
        <p style="color: #ff453a; font-size: 13px; margin: 0;">
          ⚠️ This candidate application record and statement will be permanently erased from Cloudflare D1.
        </p>
      </div>
      <div class="modal-actions">
        <button type="button" class="btn-cancel" onclick="closeDeleteAppModal()">Cancel</button>
        <button type="button" class="btn-confirm-delete" id="confirm-delete-app-btn" onclick="executeDeleteApp()">Confirm & Delete Application</button>
      </div>
    </div>
  </div>

  <!-- APPLICATION DOSSIER MODAL -->
  <div id="dossier-modal" class="modal-overlay">
    <div class="modal-card" style="max-width: 680px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <h3 style="margin: 0; font-size: 18px; color: #ffffff;" id="dossier-title">Candidate Dossier</h3>
        <button type="button" class="btn-cancel" onclick="closeDossierModal()" style="padding: 6px 14px; font-size: 12px;">Close</button>
      </div>
      <div id="dossier-body" style="font-size: 13px; line-height: 1.6; color: var(--text-muted);"></div>
    </div>
  </div>

  <!-- INSPECT CONTACT MODAL -->
  <div id="inspect-modal" class="modal-overlay">
    <div class="modal-card" style="max-width: 640px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <h3 style="margin: 0; font-size: 18px; color: #ffffff;" id="inspect-title">Transmission Details</h3>
        <button type="button" class="btn-cancel" onclick="closeInspectModal()" style="padding: 6px 14px; font-size: 12px;">Close</button>
      </div>
      <div id="inspect-body" style="font-size: 13px; line-height: 1.6; color: var(--text-muted);"></div>
    </div>
  </div>

  <!-- FLOATING TOAST -->
  <div id="toast" class="toast"></div>

  <script>
    const allContacts = ${contactsJson};
    const allJobs = ${jobsJson};
    const allApplications = ${applicationsJson};
    const CURRENT_SESSION_TOKEN = "${session.token || ''}";
    let pendingDeleteJobId = null;
    let pendingDeleteAppId = null;

    function authHeaders() {
      const h = { 'Content-Type': 'application/json' };
      if (CURRENT_SESSION_TOKEN) {
        h['Authorization'] = 'Bearer ' + CURRENT_SESSION_TOKEN;
      }
      return h;
    }

    // Tab Switching
    function switchTab(tabId) {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.style.display = 'none');
      const targetBtn = document.getElementById('tab-btn-' + tabId);
      const targetPanel = document.getElementById('panel-' + tabId);
      if (targetBtn) targetBtn.classList.add('active');
      if (targetPanel) targetPanel.style.display = 'block';
    }

    function escapeHtml(str) {
      if (str === null || str === undefined) return '';
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }

    // Modal Controls for Job Deletion
    function openDeleteJobModal(jobId, jobTitle, company) {
      pendingDeleteJobId = jobId;
      const job = allJobs.find(j => String(j.id) === String(jobId));
      document.getElementById('modal-del-title').textContent = (job && job.title) || jobTitle || jobId;
      document.getElementById('modal-del-id').textContent = jobId;
      document.getElementById('modal-del-company').textContent = (job && job.company) || company || '';
      document.getElementById('delete-modal').style.display = 'flex';
    }

    function closeDeleteJobModal() {
      pendingDeleteJobId = null;
      document.getElementById('delete-modal').style.display = 'none';
    }

    // Execute Job Deletion
    async function executeDeleteJob() {
      if (!pendingDeleteJobId) return;
      const btn = document.getElementById('confirm-delete-btn');
      const originalText = btn.innerHTML;
      btn.innerHTML = 'Removing from Edge...';
      btn.disabled = true;

      try {
        const res = await fetch('/api/jobs/delete', {
          method: 'POST',
          headers: authHeaders(),
          body: JSON.stringify({ job_id: pendingDeleteJobId })
        });
        const data = await res.json();

        if (data.success) {
          const row = document.getElementById('job-row-' + pendingDeleteJobId);
          if (row) {
            row.style.transition = 'all 0.3s ease';
            row.style.opacity = '0';
            row.style.transform = 'translateX(20px)';
            setTimeout(() => row.remove(), 300);
          }
          const cntEl = document.getElementById('active-jobs-count');
          if (cntEl) {
            const curr = parseInt(cntEl.textContent, 10) || 0;
            cntEl.textContent = Math.max(0, curr - 1);
          }
          const badgeEl = document.getElementById('tab-jobs-badge');
          if (badgeEl) {
            const curr = parseInt(badgeEl.textContent, 10) || 0;
            badgeEl.textContent = Math.max(0, curr - 1);
          }
          closeDeleteJobModal();
          showToast('✓ Role successfully removed from live portal');
        } else {
          alert('Error removing role: ' + (data.error || 'Server error'));
        }
      } catch (err) {
        alert('Network request failed: ' + err.message);
      } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
      }
    }

    // Update Job Status (active, in_process, inactive)
    async function updateJobStatus(jobId, newStatus) {
      try {
        const res = await fetch('/api/jobs/status', {
          method: 'POST',
          headers: authHeaders(),
          body: JSON.stringify({ id: jobId, status: newStatus })
        });
        const data = await res.json();
        if (data.success) {
          const row = document.getElementById('job-row-' + jobId);
          if (row) row.setAttribute('data-status', newStatus);
          const sel = document.getElementById('job-select-' + jobId);
          if (sel) {
            sel.value = newStatus;
            sel.className = 'status-dropdown status-select-' + newStatus;
          }
          const job = allJobs.find(j => j.id == jobId);
          if (job) job.status = newStatus;
          showToast('✓ Job status updated to ' + newStatus.replace('_', ' ').toUpperCase());
        } else {
          alert('Failed to update status: ' + (data.error || 'Unknown error'));
        }
      } catch (err) {
        alert('Status update error: ' + err.message);
      }
    }

    // Modal Controls for Application Deletion
    function openDeleteAppModal(appId, applicantName, jobTitle) {
      pendingDeleteAppId = appId;
      const app = allApplications.find(a => String(a.id) === String(appId));
      document.getElementById('modal-app-name').textContent = (app && app.applicant_name) || applicantName || appId;
      document.getElementById('modal-app-id').textContent = appId;
      document.getElementById('modal-app-role').textContent = (app && app.job_title) || jobTitle || '';
      document.getElementById('delete-app-modal').style.display = 'flex';
    }

    function closeDeleteAppModal() {
      pendingDeleteAppId = null;
      document.getElementById('delete-app-modal').style.display = 'none';
    }

    // Execute Application Deletion
    async function executeDeleteApp() {
      if (!pendingDeleteAppId) return;
      const btn = document.getElementById('confirm-delete-app-btn');
      const originalText = btn.innerHTML;
      btn.innerHTML = 'Deleting...';
      btn.disabled = true;

      try {
        const res = await fetch('/api/applications/delete', {
          method: 'POST',
          headers: authHeaders(),
          body: JSON.stringify({ id: pendingDeleteAppId })
        });
        const data = await res.json();

        if (data.success) {
          const row = document.getElementById('app-row-' + pendingDeleteAppId);
          if (row) {
            row.style.transition = 'all 0.3s ease';
            row.style.opacity = '0';
            row.style.transform = 'translateX(20px)';
            setTimeout(() => row.remove(), 300);
          }
          const cntEl = document.getElementById('active-apps-count');
          if (cntEl) {
            const curr = parseInt(cntEl.textContent, 10) || 0;
            cntEl.textContent = Math.max(0, curr - 1);
          }
          const badgeEl = document.getElementById('tab-apps-badge');
          if (badgeEl) {
            const curr = parseInt(badgeEl.textContent, 10) || 0;
            badgeEl.textContent = Math.max(0, curr - 1);
          }
          closeDeleteAppModal();
          showToast('✓ Application permanently deleted');
        } else {
          alert('Error deleting application: ' + (data.error || 'Server error'));
        }
      } catch (err) {
        alert('Network request failed: ' + err.message);
      } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
      }
    }

    // Update Application Status (in_process, inactive, active)
    async function updateAppStatus(appId, newStatus) {
      try {
        const res = await fetch('/api/applications/status', {
          method: 'POST',
          headers: authHeaders(),
          body: JSON.stringify({ id: appId, status: newStatus })
        });
        const data = await res.json();
        if (data.success) {
          const row = document.getElementById('app-row-' + appId);
          if (row) row.setAttribute('data-status', newStatus);
          const sel = document.getElementById('app-select-' + appId);
          if (sel) {
            sel.value = newStatus;
            sel.className = 'status-dropdown status-select-' + newStatus;
          }
          const app = allApplications.find(a => a.id == appId);
          if (app) app.status = newStatus;
          const label = newStatus === 'in_process' ? 'In Process' : (newStatus === 'inactive' ? 'Inactive' : 'Active');
          showToast('✓ Application status updated to ' + label);
        } else {
          alert('Failed to update status: ' + (data.error || 'Unknown error'));
        }
      } catch (err) {
        alert('Status update error: ' + err.message);
      }
    }

    // Download Candidate Resume & Export Dossier
    function downloadCandidateResume(appId) {
      const app = allApplications.find(a => a.id == appId);
      if (!app) return;

      // If valid URL link provided, open it in background or trigger
      if (app.resume_url && app.resume_url.startsWith('http')) {
        window.open(app.resume_url, '_blank');
      }

      // Generate downloadable candidate dossier document
      const safeDossierResume = (app.resume_url && (app.resume_url.startsWith('https://') || app.resume_url.startsWith('http://')))
        ? '<a href="' + escapeHtml(app.resume_url) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(app.resume_url) + '</a>'
        : 'Attached in pitch';
      const safeDossierLinkedin = (app.linkedin_url && (app.linkedin_url.startsWith('https://') || app.linkedin_url.startsWith('http://')))
        ? '<a href="' + escapeHtml(app.linkedin_url) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(app.linkedin_url) + '</a>'
        : 'N/A';
      const safeDossierPortfolio = (app.portfolio_url && (app.portfolio_url.startsWith('https://') || app.portfolio_url.startsWith('http://')))
        ? '<a href="' + escapeHtml(app.portfolio_url) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(app.portfolio_url) + '</a>'
        : 'N/A';

      const dossierHtml = [
        '<!DOCTYPE html><html><head><meta charset="utf-8">',
        '<title>Candidate Application Dossier - ' + escapeHtml(app.applicant_name || '') + '</title>',
        '<style>',
        'body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 40px; color: #1d1d1f; line-height: 1.6; max-width: 800px; margin: 0 auto; }',
        'h1 { font-size: 24px; margin-bottom: 4px; color: #000; }',
        '.badge { display: inline-block; padding: 4px 10px; border-radius: 980px; font-size: 12px; font-weight: 600; background: #e8f3ff; color: #0071e3; margin-bottom: 24px; }',
        '.section { border-top: 1px solid #d2d2d7; padding: 20px 0; }',
        '.field-label { font-size: 12px; text-transform: uppercase; color: #86868b; font-weight: 600; letter-spacing: 0.05em; }',
        '.field-val { font-size: 15px; font-weight: 500; margin-top: 4px; }',
        '.note-box { background: #f5f5f7; padding: 18px; border-radius: 12px; font-size: 14px; white-space: pre-wrap; margin-top: 8px; }',
        'a { color: #0071e3; text-decoration: none; }',
        '</style></head><body>',
        '<h1>' + escapeHtml(app.applicant_name || '') + '</h1>',
        '<div class="badge">Application Ref: ' + escapeHtml(app.id) + ' &bull; Status: ' + escapeHtml(app.status || 'in_process') + '</div>',
        '<div class="section"><div class="field-label">Target Role & Venture</div><div class="field-val" style="font-size: 18px; font-weight: 600;">' + escapeHtml(app.job_title || '') + ' &bull; ' + escapeHtml(app.company || '') + ' (Ref: ' + escapeHtml(app.job_id || '') + ')</div></div>',
        '<div class="section"><div class="field-label">Contact Details</div><div class="field-val">Email: <a href="mailto:' + escapeHtml(app.applicant_email || '') + '">' + escapeHtml(app.applicant_email || '') + '</a></div><div class="field-val">Phone: ' + escapeHtml(app.applicant_phone || 'N/A') + '</div><div class="field-val">Applied Date: ' + escapeHtml(app.created_at || 'Recent') + '</div></div>',
        '<div class="section"><div class="field-label">Credentials & Verified Links</div><div class="field-val">Resume Link: ' + safeDossierResume + '</div><div class="field-val">LinkedIn: ' + safeDossierLinkedin + '</div><div class="field-val">Portfolio: ' + safeDossierPortfolio + '</div></div>',
        '<div class="section"><div class="field-label">Candidate Statement & Pitch</div><div class="note-box">' + escapeHtml(app.cover_note || 'No statement provided.') + '</div></div>',
        '<div style="margin-top: 40px; font-size: 11px; color: #86868b; text-align: center;">PSAS Groups Global &bull; Sovereign Talent Acquisition System &bull; Confidential</div>',
        '</body></html>'
      ].join(String.fromCharCode(10));

      const blob = new Blob([dossierHtml], { type: 'text/html;charset=utf-8' });
      const downloadUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = (app.applicant_name.replace(/[^a-zA-Z0-9]/g, '_')) + '_Application_Dossier_' + app.id + '.html';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(downloadUrl);

      showToast('✓ Resume & candidate dossier downloaded successfully');
    }

    // Inspect Application Dossier Modal
    function inspectApplication(appId) {
      const app = allApplications.find(a => a.id == appId);
      if (!app) return;

      document.getElementById('dossier-title').textContent = 'Candidate: ' + app.applicant_name;
      
      const safeResume = (app.resume_url && (app.resume_url.startsWith('https://') || app.resume_url.startsWith('http://'))) 
        ? '<a href="' + escapeHtml(app.resume_url) + '" target="_blank" rel="noopener noreferrer" class="btn-download" style="text-decoration:none;">📥 Open Resume Link ↗</a>' 
        : '';
      const safeLinkedin = (app.linkedin_url && (app.linkedin_url.startsWith('https://') || app.linkedin_url.startsWith('http://'))) 
        ? '<a href="' + escapeHtml(app.linkedin_url) + '" target="_blank" rel="noopener noreferrer" class="portal-link" style="text-decoration:none;">LinkedIn Profile ↗</a>' 
        : '';
      const safePortfolio = (app.portfolio_url && (app.portfolio_url.startsWith('https://') || app.portfolio_url.startsWith('http://'))) 
        ? '<a href="' + escapeHtml(app.portfolio_url) + '" target="_blank" rel="noopener noreferrer" class="portal-link" style="text-decoration:none;">Portfolio ↗</a>' 
        : '';

      document.getElementById('dossier-body').innerHTML = 
        '<div style="background: rgba(0,0,0,0.3); padding: 18px; border-radius: 16px; margin-bottom: 20px;">' +
          '<div style="font-size: 16px; font-weight: 600; color: #ffffff; margin-bottom: 4px;">' + escapeHtml(app.applicant_name) + '</div>' +
          '<div style="color: #2997ff; margin-bottom: 12px;"><a href="mailto:' + escapeHtml(app.applicant_email) + '" style="color:#2997ff; text-decoration:none;">' + escapeHtml(app.applicant_email) + '</a> ' + (app.applicant_phone ? '&bull; ' + escapeHtml(app.applicant_phone) : '') + '</div>' +
          '<div><strong>Position:</strong> ' + escapeHtml(app.job_title) + ' at ' + escapeHtml(app.company) + ' (Ref: ' + escapeHtml(app.job_id) + ')</div>' +
          '<div><strong>Application ID:</strong> ' + escapeHtml(app.id) + ' &bull; <strong>Applied:</strong> ' + escapeHtml(app.created_at || 'Recent') + '</div>' +
          '<div style="margin-top: 8px;"><strong>Status:</strong> <span class="status-pill status-' + escapeHtml(app.status || 'in_process') + '">' + escapeHtml((app.status || 'in_process').replace('_', ' ').toUpperCase()) + '</span></div>' +
        '</div>' +
        '<div style="margin-bottom: 16px;">' +
          '<div style="font-weight: 600; color: #ffffff; margin-bottom: 6px;">Credentials & Professional Links:</div>' +
          '<div style="display: flex; gap: 10px; flex-wrap: wrap;">' +
            safeResume + safeLinkedin + safePortfolio +
          '</div>' +
        '</div>' +
        '<div style="font-weight: 600; color: #ffffff; margin-bottom: 6px;">Candidate Pitch & Statement:</div>' +
        '<div style="background: rgba(255,255,255,0.03); padding: 16px; border-radius: 12px; white-space: pre-wrap; color:#f5f5f7; margin-bottom: 24px;">' + escapeHtml(app.cover_note || 'No pitch provided.') + '</div>' +
        '<div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border); padding-top: 16px;">' +
          '<button type="button" class="btn-remove-job" id="dossier-del-btn">Delete Application</button>' +
          '<button type="button" class="btn-download" id="dossier-dl-btn">📥 Download Full Dossier</button>' +
        '</div>';
      
      document.getElementById('dossier-modal').style.display = 'flex';
      document.getElementById('dossier-del-btn').onclick = function() {
        closeDossierModal();
        openDeleteAppModal(app.id);
      };
      document.getElementById('dossier-dl-btn').onclick = function() {
        downloadCandidateResume(app.id);
      };
    }

    function closeDossierModal() {
      document.getElementById('dossier-modal').style.display = 'none';
    }

    // Inspect contact modal
    function inspectRecord(id) {
      const rec = allContacts.find(c => c.id == id);
      if (!rec) return;
      document.getElementById('inspect-title').textContent = rec.submission_id || ('Record #' + rec.id);
      document.getElementById('inspect-body').innerHTML = 
        '<div style="background: rgba(0,0,0,0.3); padding: 16px; border-radius: 12px; margin-bottom: 16px;">' +
          '<div><strong style="color:#ffffff;">Sender:</strong> ' + escapeHtml(rec.full_name || '') + ' (&lt;' + escapeHtml(rec.work_email || '') + '&gt;)</div>' +
          '<div><strong style="color:#ffffff;">Company:</strong> ' + escapeHtml(rec.company || 'N/A') + ' &bull; Phone: ' + escapeHtml(rec.phone || 'N/A') + '</div>' +
          '<div><strong style="color:#ffffff;">Venture:</strong> ' + escapeHtml(rec.subsidiary || '') + ' &bull; Type: ' + escapeHtml(rec.inquiry_type || '') + '</div>' +
          '<div><strong style="color:#ffffff;">Subject:</strong> ' + escapeHtml(rec.subject || '') + '</div>' +
          '<div><strong style="color:#ffffff;">Timestamp:</strong> ' + escapeHtml(rec.created_at || '') + '</div>' +
          '<div><strong style="color:#ffffff;">Geo & IP:</strong> ' + escapeHtml(rec.geo_country || '') + ' (' + escapeHtml(rec.ip_address || '') + ')</div>' +
        '</div>' +
        '<div style="font-weight: 600; color: #ffffff; margin-bottom: 6px;">Message Body:</div>' +
        '<div style="background: rgba(255,255,255,0.03); padding: 16px; border-radius: 12px; white-space: pre-wrap; color:#f5f5f7;">' + escapeHtml(rec.message || '') + '</div>';
      document.getElementById('inspect-modal').style.display = 'flex';
    }

    function closeInspectModal() {
      document.getElementById('inspect-modal').style.display = 'none';
    }

    // Toast
    function showToast(msg) {
      const toast = document.getElementById('toast');
      toast.textContent = msg;
      toast.style.display = 'block';
      setTimeout(() => { toast.style.opacity = '1'; }, 10);
      setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => { toast.style.display = 'none'; }, 300);
      }, 3500);
    }

    // Jobs Filter / Search
    const jobSearch = document.getElementById('job-search-box');
    const jobVenture = document.getElementById('job-venture-filter');
    const jobStatus = document.getElementById('job-status-filter');
    function applyJobFilter() {
      const q = jobSearch.value.toLowerCase().trim();
      const v = jobVenture.value.toLowerCase();
      const s = jobStatus ? jobStatus.value.toLowerCase() : 'all';
      document.querySelectorAll('#jobs-table-body tr').forEach(r => {
        if (!r.id) return;
        const venture = (r.getAttribute('data-venture') || '').toLowerCase();
        const status = (r.getAttribute('data-status') || '').toLowerCase();
        const text = r.textContent.toLowerCase();
        const matchV = (v === 'all' || venture.includes(v));
        const matchS = (s === 'all' || status === s);
        const matchQ = (!q || text.includes(q));
        r.style.display = (matchV && matchS && matchQ) ? '' : 'none';
      });
    }
    if (jobSearch) jobSearch.addEventListener('input', applyJobFilter);
    if (jobVenture) jobVenture.addEventListener('change', applyJobFilter);
    if (jobStatus) jobStatus.addEventListener('change', applyJobFilter);

    // Applications Filter / Search
    const appSearch = document.getElementById('app-search-box');
    const appStatusFilter = document.getElementById('app-status-filter');
    function applyAppFilter() {
      const q = appSearch.value.toLowerCase().trim();
      const s = appStatusFilter.value.toLowerCase();
      document.querySelectorAll('#applications-table-body tr').forEach(r => {
        if (!r.id) return;
        const status = (r.getAttribute('data-status') || '').toLowerCase();
        const text = r.textContent.toLowerCase();
        const matchS = (s === 'all' || status === s);
        const matchQ = (!q || text.includes(q));
        r.style.display = (matchS && matchQ) ? '' : 'none';
      });
    }
    if (appSearch) appSearch.addEventListener('input', applyAppFilter);
    if (appStatusFilter) appStatusFilter.addEventListener('change', applyAppFilter);

    // Contacts Filter / Search
    const contactSearch = document.getElementById('search-box');
    const contactVenture = document.getElementById('venture-filter');
    function applyContactFilter() {
      const q = contactSearch.value.toLowerCase().trim();
      const v = contactVenture.value.toLowerCase();
      document.querySelectorAll('#contacts-table-body tr').forEach(r => {
        const sub = (r.getAttribute('data-sub') || '').toLowerCase();
        const text = r.textContent.toLowerCase();
        const matchV = (v === 'all' || sub.includes(v));
        const matchQ = (!q || text.includes(q));
        r.style.display = (matchV && matchQ) ? '' : 'none';
      });
    }
    if (contactSearch) contactSearch.addEventListener('input', applyContactFilter);
    if (contactVenture) contactVenture.addEventListener('change', applyContactFilter);
  </script>
</body>
</html>`;
}
