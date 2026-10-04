# 🌐 Lucid — High-Performance SaaS Landing Page

> A modern, responsive SaaS landing page crafted with **Next.js App Router** and **Tailwind CSS**, featuring hardware-accelerated micro-interactions and mobile-first responsive architecture.

<div align="left">

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4+-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Deployed on Vercel](https://img.shields.io/badge/Vercel-Production-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com/)

</div>

---

## 📌 Overview

**Lucid** is an enterprise-grade, conversion-focused landing page designed for modern digital products and SaaS platforms. Built with performance and user experience as core priorities, it showcases:

- **Signature Visual Identity:** Sophisticated dark mode base (`#15171e`) paired with high-contrast electric blue accents (`#008ed6`).
- **GPU-Accelerated Smoothness:** 60fps/120fps floating components powered by CSS `translate3d` and browser hardware offloading.
- **Cross-Platform Micro-Interactions:** Custom center-outward expand animations optimized for both desktop cursor hovers and mobile touch triggers.
- **Modular App Router Architecture:** Fully decoupled, reusable React components ensuring scalable code maintenance and rapid page delivery.

---

## 🔗 Live Demo

- **Live Site (Vercel):** [lucid-lamiakajal.vercel.app](https://lucid-lamiakajal.vercel.app)
- **GitHub Repository:** [github.com/lamiakajal/lucid-landing-page](https://https://github.com/lamiakajal/lucid-landing-page)

---

## 🛠️ Technologies Used

- **Framework:** Next.js (App Router)
- **Library:** React
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **Deployment Platform:** Vercel

---

## ✨ Key Features

1. **Hardware-Accelerated Floating Form:** A sleek floating dark contact card rendered over an interactive Google satellite map using GPU-accelerated CSS `translate3d` keyframe animations. It automatically pauses on user interaction for effortless form entry.
2. **Center-Outward Expand Hover & Touch Effects:** Custom interactive animations across CTA buttons, navigation, and subscription cards with dual mouse-hover and mobile touch support.
3. **Modular Component Architecture:** Well-structured sections (Navbar, Hero, Features, DeviceShowcase, Customization, Testimonials, CallToAction, Pricing, Contact, and Footer) integrated into a single high-conversion landing page.
4. **Pixel-Perfect Responsive Design:** Fluid grid layouts adapting seamlessly across mobile, tablet, laptop, and ultra-wide desktop viewports.

---

## 📂 Project Architecture

```text
lucid-landing-page/
├── public/                 # Static visual assets & illustrations
├── src/
│   ├── app/
│   │   ├── favicon.ico     # Browser favicon
│   │   ├── globals.css     # Global styles & Tailwind layers
│   │   ├── layout.js       # Root application layout
│   │   └── page.js         # Landing page assembly
│   └── components/
│       ├── Navbar.jsx          # Sticky navigation bar
│       ├── Hero.jsx            # Impactful hero showcase
│       ├── Features.jsx        # Product capability grid
│       ├── DeviceShowcase.jsx  # Multi-platform preview section
│       ├── Customization.jsx   # Feature breakdown showcase
│       ├── Testimonials.jsx    # Verified customer social proof
│       ├── CallToAction.jsx    # High-converting lead-in CTA
│       ├── Pricing.jsx         # Tiered subscription plans
│       ├── Contact.jsx         # Levitating form & embedded satellite map
│       └── Footer.jsx          # Social connections & branding footer
├── package.json
└── README.md
```
