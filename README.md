# Personal Portfolio – Pradeep Yenkuwale

Source code for my personal developer portfolio. Built with **Next.js**, deployed on **GitHub Pages**.

The portfolio surfaces my professional experience, technical depth, and the projects I've shipped — both at companies and as solo end-to-end builds. Focus areas: **distributed systems, event-driven architecture, mobile + backend integration, and real-time platforms.**

🌐 **Live site:** https://pradeep-yenkuwale.github.io/my-portfolio/

---

## Featured solo build — Zyntra

A privacy-first social platform built end-to-end as a solo engineer: 5 microservices (auth / user / messaging / matchmaking / notification) in NestJS + MongoDB + RabbitMQ + Redis, and a Flutter client with cache-first local-SQLite (Drift) persistence over Socket.IO. Includes a tier-based capability system, device-bound JWT sessions with refresh rotation, certificate pinning, a Trust & Safety subsystem with automated enforcement, and end-to-end account deletion across app + web. Production topology behind nginx on EC2 with HTTPS via certbot.

---

## Tech stack

- **Languages:** TypeScript, JavaScript, Dart, Python
- **Backend:** Node.js, NestJS, REST APIs, Microservices
- **Mobile:** Flutter, Dart, Drift (SQLite), Socket.IO
- **Data:** MongoDB, MySQL, PostgreSQL, Redis, SQLite
- **Messaging:** Kafka, RabbitMQ, WebSocket / Socket.IO
- **Infra:** AWS, Firebase, Nginx, Docker, GitHub Actions

---

## Repo structure

```text
.
├── app/components/     # Reusable UI components (Next.js app router)
├── public/             # Static assets, project images, skill SVGs
├── utils/data/         # Personal info, projects, experience, skills (edit here)
├── next.config.js      # GitHub Pages export config
├── package.json
└── README.md
```

Content lives entirely in `utils/data/*.js` — edit those files to update the portfolio.

---

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run export     # static export for GitHub Pages
npm run deploy     # push to gh-pages branch
```
