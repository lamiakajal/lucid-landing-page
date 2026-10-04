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

## Live Demo

- **Live Site (Vercel):** [lucid-landing-page.vercel.app](https://lucid-landing-page.vercel.app) _(Replace with your deployed URL)_
- **GitHub Repository:** [github.com/lamiakajal/lucid-landing-page](https://github.com/lamiakajal/lucid-landing-page)

---

## Technologies Used

- **Framework:** Next.js (App Router)
- **Library:** React
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **Deployment Platform:** Vercel

---

## Key Features

1. **Hardware-Accelerated Floating Form:** A sleek floating dark contact card rendered over an interactive Google satellite map using GPU-accelerated CSS `translate3d` keyframe animations. It automatically pauses on user interaction for effortless form entry.
2. **Center-Outward Expand Hover & Touch Effects:** Custom interactive animations across CTA buttons, navigation, and subscription cards with dual mouse-hover and mobile touch support.
3. **Modular Component Architecture:** Well-structured sections (Navbar, Hero, Features, DeviceShowcase, Customization, Testimonials, CallToAction, Pricing, Contact, and Footer) integrated into a single high-conversion landing page.
4. **Pixel-Perfect Responsive Design:** Fluid grid layouts adapting seamlessly across mobile, tablet, laptop, and ultra-wide desktop viewports.

---

## Next.js & React Concepts & Questions

### 1. What is the Next.js App Router, and how does it organize pages?

Next.js App Router (introduced in version 13) uses a file-system based routing mechanism located inside the `src/app` directory. Instead of creating individual routes using custom files, folders define URL segments, and special files like `page.js` render the unique UI for each route, while `layout.js` handles persistent shared wrappers (such as headers or theme backgrounds).

### 2. What is the difference between Server Components and Client Components in Next.js?

- **Server Components (Default):** Rendered exclusively on the server without sending JavaScript bundles to the browser. They allow direct backend data fetching and enhance performance and SEO.
- **Client Components:** Opted in by placing the `"use client"` directive at the very top of the file. They are required whenever browser APIs, interactive event listeners (`onClick`, `onMouseEnter`), or React state hooks (`useState`, `useEffect`) are used.

### 3. Why did we need the `"use client"` directive in components like `Contact.jsx` and `Pricing.jsx`?

Components like `Pricing.jsx` and `Contact.jsx` rely on active user interactions:

- Handling controlled form state (`useState` for name, email, subject, and message)
- Managing dynamic hover and touch feedback (`useState` for tracking active pricing cards and title underline transitions)
- Listening to browser events (`onSubmit`, `onTouchStart`, `onMouseEnter`, `onMouseLeave`)

Because Server Components cannot execute browser event listeners or maintain client-side hook state, `"use client"` must be declared.

### 4. How does CSS hardware acceleration (`translate3d`) make floating animations smoother?

Traditional animations that change properties like `top`, `bottom`, `margin`, or dynamic `box-shadow` trigger expensive layout recalculations (reflow) and repainting on the CPU, which often causes stuttering or frame drops. By using `transform: translate3d(0, -16px, 0)` along with `will-change: transform`, the browser offloads rendering calculations directly to the GPU, yielding a smooth 60fps/120fps floating experience.

### 5. What are the benefits of using Tailwind CSS arbitrary variants and utility classes in Next.js?

Tailwind CSS compiles utilities into minimal production CSS by scanning class names during build time. Its utility-first model eliminates unused styles, while canonical scale classes (e.g., `min-h-35` instead of `min-h-[140px]`) standardize sizing and maintain clean, warning-free code throughout development.

---

---

## Getting Started Locally

### 1. Clone the repository

```bash
git clone [https://github.com/lamiakajal/lucid-landing-page.git](https://github.com/lamiakajal/lucid-landing-page.git)
cd lucid-landing-page
```
