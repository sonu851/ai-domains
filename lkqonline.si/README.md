# LKQ ONLINE AI — Official Website (lkqonline.si)

> **The Cloud Knowledge Operating System**  
> *Category:* Cloud Collaborative Knowledge OS & Team Copilot  
> *Domain:* [lkqonline.si](https://lkqonline.si)

---

## 🌟 Executive Overview
**LKQ ONLINE AI** is a state-of-the-art enterprise artificial intelligence landing page and web application built specifically for the premium domain **`lkqonline.si`**.

- **Core Headline:** "The Operating System for Knowledge Work. Real-Time Collaborative Intelligence in the Cloud."
- **Mission:** LKQ Online connects distributed teams with live shared canvases, automated project synthesis, and continuous enterprise knowledge synchronization across Slack, Drive, and Figma.

---

## 🚀 Key Technical Highlights
- **Architecture:** Zero-dependency, ultra-lightweight Vanilla HTML5, CSS3, and JavaScript.
- **Design System:** High-end agency dark mode with tailored HSL/Hex color tokens, glassmorphic card layers, ambient glow meshes, and fluid responsive typography.
- **Interactive AI Playground:** Includes a custom built-in interactive simulator tailored directly to `lkqonline.si`'s specialized AI capabilities.
- **SEO & Social Optimization:** Pre-configured OpenGraph tags, Twitter cards, meta descriptions, and semantic HTML5 hierarchy.
- **Lead Capture & Conversion:** Integrated enterprise architecture onboarding modal with client-side validation and live toast feedback.
- **Mobile Optimized:** Fluid adaptive breakpoints supporting ultra-wide monitors, laptops, tablets, and smartphones.

---

## 📂 Directory Structure
```
lkqonline.si/
├── index.html        # Complete semantic HTML5 single-page application
├── styles.css        # Vanilla CSS design system with custom brand tokens
├── app.js            # Interactive AI simulator and UI controllers
└── README.md         # Deployment and domain configuration documentation
```

---

## 💻 Local Preview & Testing

### Option 1: Direct Browser Launch
Simply double-click `index.html` in your file explorer to open it in your default web browser (Chrome, Edge, Firefox, Safari).

### Option 2: Local HTTP Server (Python)
Open a terminal in this directory and run:
```bash
python -m http.server 8080
```
Then visit: `http://localhost:8080`

### Option 3: Node.js (npx serve)
```bash
npx serve .
```

---

## 🌐 Production Deployment Guide

This website is completely self-contained with no build steps or bundlers required. It can be deployed in seconds to any modern web hosting service:

### 1. Cloudflare Pages
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Workers & Pages**.
2. Click **Create Application** > **Pages** > **Upload Assets**.
3. Drag and drop the `lkqonline.si` folder.
4. Go to **Custom Domains** and link `lkqonline.si`.

### 2. Vercel
Run via Vercel CLI from this folder:
```bash
npx vercel deploy --prod
```
Or connect your GitHub repository and set the root directory to `lkqonline.si`.

### 3. Netlify
Run via Netlify CLI:
```bash
npx netlify deploy --prod --dir=.
```
Or drag and drop this folder directly into the Netlify Drop UI.

### 4. Traditional Linux VPS / Nginx / Apache
Copy files to `/var/www/lkqonline.si/html/`:
```nginx
server {
    listen 80;
    listen [::]:80;
    server_name lkqonline.si www.lkqonline.si;
    root /var/www/lkqonline.si/html;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```
Issue a free SSL certificate with Certbot:
```bash
sudo certbot --nginx -d lkqonline.si -d www.lkqonline.si
```

---

## ⚙️ DNS Configuration for `.si` Registrar

In your domain registrar dashboard (where `lkqonline.si` is registered):

| Record Type | Host / Name | Target / Destination | TTL |
| :--- | :--- | :--- | :--- |
| **A Record** | `@` (or leave blank) | `YOUR_SERVER_IP` or `76.76.21.21` (Vercel) / `192.0.2.1` (Cloudflare) | Auto / 300 |
| **CNAME** | `www` | `lkqonline.si` or `your-project.pages.dev` | Auto / 300 |

---

© 2026 LKQ ONLINE AI (lkqonline.si). All rights reserved.
