# Sandy Yoga Prakasa Holley — Full-Stack Developer Portfolio

<div align="center">

[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.4-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-0.180-black?style=flat-square&logo=three.js&logoColor=white)](https://threejs.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.4-0055FF?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)

<p align="center">
  <b>Personal developer portfolio, interactive project archive, and architectural showcase for Sandy Yoga Prakasa Holley.</b><br />
  Designed with an engineering-first aesthetic inspired by the <a href="https://nestjs.com/">NestJS</a> design system: dark mode palette, signature crimson highlights (<samp>#E0234E</samp>), modular case studies, and real-time 3D visual computing.
</p>

[**View Live Demo**](http://127.0.0.1:5173/) · [**GitHub Profile**](https://github.com/Sandy-YP-Holley) · [**LinkedIn**](https://linkedin.com/in/sandyypholley) · [**Contact**](mailto:holleysandyyogaprakasa@gmail.com)

</div>

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Design Philosophy & Aesthetic](#-design-philosophy--aesthetic)
- [Key Architectural Features](#-key-architectural-features)
- [Featured Projects & Case Studies](#-featured-projects--case-studies)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Responsive Design Strategy](#-responsive-design-strategy)
- [Verification & Quality Assurance](#-verification--quality-assurance)
- [Author & Contact](#-author--contact)

---

## 🔭 Overview

This repository houses the personal portfolio and digital archive of **Sandy Yoga Prakasa Holley**, a Full-Stack Software Developer based in Kota Bekasi, Indonesia. The application is designed to truthfully document real engineering decisions, architectural trade-offs, test suites, and computer vision research across modern web ecosystems (MERN, PERN, TALL, and Python).

Rather than relying on generic resume templates or inflated claims, every project is represented with verified repository links, authentic production screenshots, automated testing statistics, and honest disclosure of backend availability.

---

## 🎨 Design Philosophy & Aesthetic

The portfolio adheres to high visual standards inspired by the modern **NestJS ecosystem** and developer tooling:

- **Curated Palette**: Deep obsidian surfaces (`#07080B`, `#0C0E14`), subtle border translucency (`border-white/10`), and signature crimson red accents (`#E0234E`) with emerald and amber indicators.
- **Modern Typography**: Clear sans-serif hierarchy powered by **Plus Jakarta Sans** paired with **JetBrains Mono** for code snippets, metrics, and metadata.
- **Interactive Three.js Canvas**: A real-time 3D cybernetic assembly (nested icosahedron, orbital rings, and glowing vertex nodes) positioned directly behind the hero headline that rotates and drifts dynamically with cursor coordinates on desktop and touch drag on mobile.
- **Expandable Case Studies**: Project cards remain clean and scannable on first view, smoothly expanding with Framer Motion animations to reveal comprehensive case studies, full-width screenshot carousels, role tabs, and engineering notes.
- **No Vibecoding or Fluff**: Clear, mature software engineering copy without marketing clichés, skill percentage bars, or placeholder graphics.

---

## ⚡ Key Architectural Features

### 1. Interactive 3D Cursor & Touch Canvas
- Built with **Three.js** and WebGL.
- Features continuous dual-axis rotation combined with lerped mouse and touch tracking (`passive: true`).
- Adaptive camera projection (`z = 7` on desktop, `z = 8.5` on mobile) ensuring the 3D element frames the hero headline across all viewports without clipping.

### 2. NestJS-Style Architecture Terminal
- Code showcase component with interactive tabs for:
  - **Connection Pooling**: Serverless MongoDB client caching on Atlas M0 free tier.
  - **Anti-BOLA Guard**: Cryptographic JWT claim verification against resource ownership in Next.js middleware.
  - **172 Tests Matrix**: Real automated test suite verification summary from Chronicle & Quill.
  - **YOLO Benchmark**: Quantitative object detection metric comparison between YOLOv8 and YOLO11.
- Features one-click clipboard copy and horizontal scrollable tab strips on mobile viewports.

### 3. Screenshot Carousel & Touch-Enabled Lightbox
- Reusable image viewer with keyboard navigation (`ArrowLeft`, `ArrowRight`), touch swipe detection, and thumbnail strip.
- Fullscreen **Lightbox Modal** with backdrop blur, image aspect preservation, and touch swipe gestures.

### 4. Interactive YOLOv8 vs. YOLO11 Benchmark
- Interactive dataset toggle comparing **963 Images (Expanded)** against **200 Images (Baseline)**.
- Live visual progress bars depicting Precision, Recall, and mAP50 metrics.

### 5. Dynamic Scrollspy Navigation
- Floating pill navbar with backdrop blur (`backdrop-blur-xl`).
- Dynamic `offsetTop` sorting to reliably highlight the current active section as the user scrolls.
- Responsive mobile menu drawer with touch backdrop dismiss.

### 6. Production-Grade Contact Suite
- One-click email clipboard copy with visual feedback.
- Direct **Gmail Web Client** compose link with pre-filled subject line.
- Native `mailto:` fallback.

---

## 📂 Featured Projects & Case Studies

### 1. Chronicle & Quill — Full-Stack Bookstore & Admin CMS
- **Stack**: Next.js 14 (App Router), React 18/19, TypeScript, MongoDB Atlas, Jose JWT, Vitest, Playwright.
- **Status**: Live Production (Vercel)
- **Highlights**:
  - 172 automated tests (Vitest business logic, full-stack TSX regression, Playwright E2E).
  - 4 distinct role-based access control tiers (`MEMBER`, `CURATOR`, `ARCHIVIST`, `HIGH_COUNCIL`).
  - 13 high-resolution production screenshots across storefront and administrative management.
- **Repository**: [https://github.com/Sandy-YP-Holley/chronicle-and-quill](https://github.com/Sandy-YP-Holley/chronicle-and-quill)

### 2. SuperNotes — Modular Productivity Workspace
- **Stack**: PostgreSQL, Express.js, React, Node.js (PERN Stack).
- **Status**: Frontend Demo (Backend temporarily offline — explicitly disclosed)
- **Highlights**:
  - Relational database schema with user authentication and note categorisation.
  - Interactive calendar-driven task scheduling and Markdown editing.
  - 5 comprehensive screenshots of workspace, note creation, and calendar views.
- **Repository**: [https://github.com/Sandy-YP-Holley/SuperNotes](https://github.com/Sandy-YP-Holley/SuperNotes)

### 3. Sandy's Movies — Cinema Discovery & Review Platform
- **Stack**: Tailwind CSS, Alpine.js, Laravel, Livewire (TALL Stack), MySQL, TMDB API.
- **Status**: Frontend Demo (Database host offline — explicitly disclosed)
- **Highlights**:
  - Reactive server-side rendering with Livewire and Alpine.js.
  - Community review pipeline, watchlist management, and TMDB REST integration.
  - 3 screenshots showcasing search, movie discovery, and review interfaces.
- **Repository**: [https://github.com/Sandy-YP-Holley/Sandys-Movies](https://github.com/Sandy-YP-Holley/Sandys-Movies)

### 4. Baggage Detection — YOLOv8 vs. YOLO11 Research
- **Stack**: Python, Flask, PyTorch, Ultralytics YOLOv8/11, OpenCV.
- **Status**: Research Model & Web Inference Interface
- **Highlights**:
  - Comparative benchmark across 963 curated training images.
  - YOLOv8 achieved **99.5% precision** with ~3.6ms edge latency; YOLO11 achieved **99.4% mAP50**.
  - 3 screenshots documenting Flask inference portal and training confusion matrices.
- **Repository**: [https://github.com/Sandy-YP-Holley/backpack-detection](https://github.com/Sandy-YP-Holley/backpack-detection)

---

## 🛠️ Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Frontend Core** | React 19, TypeScript 5.7, Vite 6 |
| **Styling & Theme** | Tailwind CSS 3.4, PostCSS, Custom NestJS Crimson Design System |
| **Graphics & 3D** | Three.js (WebGL), Custom Wireframe Geometry, Particle Shaders |
| **Motion & Animation** | Framer Motion 12 (Viewport Scroll Triggers, Expandable AnimatePresence) |
| **Icons** | Lucide React |
| **Typography** | Plus Jakarta Sans, JetBrains Mono (Google Fonts) |
| **Linting & Type-Safety** | Strict TypeScript (`tsc -b`), ESLint |

---

## 📁 Project Structure

```text
portofolio/
├── public/
│   ├── images/
│   │   ├── backpackdetection/    # Research portal & benchmark charts (3 images)
│   │   ├── chronicleandquill/    # Storefront & Admin CMS screenshots (13 images)
│   │   ├── sandysmovies/         # Cinema platform screenshots (3 images)
│   │   └── supernotes/           # PERN workspace screenshots (5 images)
│   └── favicon / metadata assets
├── src/
│   ├── components/
│   │   ├── about/                # AboutSection (modular 4-card background)
│   │   ├── common/               # Footer & layout wrappers
│   │   ├── contact/              # ContactSection (Gmail + copy email + social links)
│   │   ├── experience/           # ExperienceSection (chronology & responsibilities)
│   │   ├── hero/                 # Hero, Hero3DBackground (Three.js assembly)
│   │   ├── navigation/           # Navbar (floating pill, scrollspy, mobile drawer)
│   │   ├── projects/             # ProjectsSection, ProjectCard, ScreenshotCarousel,
│   │   │                         # LightboxModal, ResearchBenchmark
│   │   ├── showcase/             # ArchitectureTerminal (code showcase & snippets)
│   │   ├── skills/               # TechnicalToolbox (architectural skill categories)
│   │   └── ui/                   # Badges, CopyButton, Icons, SectionHeader
│   ├── data/
│   │   ├── experience.ts         # Career chronology & education records
│   │   ├── projects.ts           # Case studies, metrics, screenshots, and QA data
│   │   └── skills.ts             # Technical skills grouped by architectural tier
│   ├── styles/
│   │   └── index.css             # Tailwind base, utilities, and scrollbar styles
│   ├── types/
│   │   └── index.ts              # Strict TypeScript interfaces
│   ├── App.tsx                   # Main layout container
│   └── main.tsx                  # Application entry point
├── index.html                    # SEO metadata, Open Graph, fonts
├── package.json                  # Dependencies & scripts
├── tailwind.config.js            # Custom color palette & font configuration
├── tsconfig.json                 # TypeScript compiler configuration
└── vite.config.ts                # Vite configuration with chunk splitting
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18.x or 20.x+)
- [npm](https://www.npmjs.com/) (version 9.x or 10.x+)

### Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/Sandy-YP-Holley/portofolio.git
cd portofolio
npm install
```

### Local Development
Start the local Vite development server:

```bash
npm run dev
```

The application will be accessible at `http://127.0.0.1:5173/` (or `http://localhost:5173/`).

### Production Build
Compile TypeScript and generate the optimized production bundle:

```bash
npm run build
```

Production artifacts are bundled into the `dist/` directory with code splitting across Three.js and Framer Motion vendors.

### Preview Production Build
Locally preview the generated production bundle:

```bash
npm run preview
```

---

## 📱 Responsive Design Strategy

The portfolio utilizes a **desktop-first preservation / mobile-optimized** responsive architecture:

1. **Desktop Fidelity**: All desktop layouts (`sm:`, `md:`, `lg:`, `xl:`) remain pixel-exact to ensure the intended editorial design is preserved.
2. **Mobile Viewports (<640px)**:
   - **Hero Section**: 3-metric strip gracefully scales numbers (`text-lg sm:text-2xl`) and labels (`text-[10px] sm:text-xs`) to prevent wrapping or awkward clipping on narrow viewports (down to 320px).
   - **3D Canvas**: Camera projection automatically steps back (`z = 8.5`) on mobile screens to preserve breathing room around headline typography.
   - **Navigation**: Full-screen backdrop dismiss overlay added to the mobile drawer.
   - **Architecture Terminal**: Terminal header adapts into a clean two-row mobile layout with a touch-scrollable tab strip (`overflow-x-auto scrollbar-none`).
   - **Screenshot Carousels**: Aspect ratio adjusts to `aspect-[4/3]` on mobile for enhanced legibility of web application screenshots, with native touch swipe gestures.
   - **Contact Banner**: Email pill gracefully truncates with copy fallback, and social links stack cleanly.
   - **Viewport Bounds**: Global `overflow-x-hidden` guarantees zero horizontal drift or jitter on iOS and Android devices.

---

## 🛡️ Verification & Quality Assurance

| Verification Check | Status | Details |
| :--- | :---: | :--- |
| **Strict TypeScript Compilation** | `PASS` | `0` errors with `tsc -b` |
| **Vite Production Bundle** | `PASS` | Compiled cleanly in ~3.8s with vendor code splitting |
| **Automated Test Matrix** | `PASS` | 172/172 tests passing across Chronicle & Quill CI |
| **Accessibility (WCAG 2.1)** | `PASS` | Semantic markup, aria attributes, high-contrast button styles |
| **Cross-Device Testing** | `PASS` | Tested across mobile (320px–480px), tablet (768px), and desktop (1024px+) |

---

## 📬 Author & Contact

**Sandy Yoga Prakasa Holley**  
Full-Stack Software Developer  
Kota Bekasi, West Java, Indonesia (UTC+7 / WIB)

- **Email**: [holleysandyyogaprakasa@gmail.com](mailto:holleysandyyogaprakasa@gmail.com)
- **Direct Gmail**: [Compose Draft](https://mail.google.com/mail/?view=cm&fs=1&to=holleysandyyogaprakasa@gmail.com&su=Engineering%20Inquiry%20-%20Sandy%20Holley)
- **GitHub**: [@Sandy-YP-Holley](https://github.com/Sandy-YP-Holley)
- **LinkedIn**: [linkedin.com/in/sandyypholley](https://linkedin.com/in/sandyypholley)

---

<div align="center">
  <sub>Built with React, TypeScript, Three.js, and Tailwind CSS. © 2026 Sandy Yoga Prakasa Holley.</sub>
</div>
