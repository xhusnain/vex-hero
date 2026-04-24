<div align="center">

# VEX — Software House Landing Page

### A premium, production-ready landing page template for software studios, digital agencies, and product-engineering firms.

Built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS** — featuring a fullscreen hero video, an animated character-by-character headline, a floating liquid-glass navigation bar, scroll-triggered reveal animations, and ten battle-tested sections ready for production.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

</div>

---

## Why VEX

VEX is a drop-in landing page for software houses, digital agencies, and dev studios who want to skip the design phase and ship a premium-feeling marketing site in a single afternoon. Every section is written for **conversion**, every component is built for **performance**, and the whole thing is designed to feel like a high-end product company — not a template.

- **Zero generic AI aesthetic.** Hand-crafted liquid-glass UI, kinetic typography, and a dark cinematic hero.
- **Production-grade DX.** TypeScript end-to-end, strict ESLint, fast HMR, sub-second builds.
- **SEO-ready out of the box.** Semantic HTML, accessible anchors, smooth-scroll nav, and clean meta structure.
- **No dependency bloat.** No framer-motion, no icon libraries, no CSS-in-JS runtime — just React, Tailwind, and the Web Platform.

---

## Key Features

### Conversion-focused layout
- Fullscreen cinematic hero with autoplay background video
- Kinetic character-by-character animated headline
- Liquid-glass floating navigation that stays accessible on scroll
- Social-proof stats strip with animated reveals
- Featured case-study gallery with gradient thumbnails
- Four-step process section to establish credibility
- Client testimonials block with real-world copy
- Final call-to-action panel with primary + secondary conversion paths
- SEO-friendly footer with full internal linking

### Engineering quality
- React 19 + TypeScript (strict mode)
- Vite 8 with Hot Module Replacement
- Tailwind CSS 3 utility-first styling
- IntersectionObserver-powered `RevealOnScroll` — no scroll libraries
- Reusable `AnimatedHeading` and `FadeIn` primitives
- Zero runtime dependencies beyond React

### Performance & accessibility
- Sub-70 kB gzip JS bundle
- Sub-4 kB gzip CSS bundle
- Smooth-scroll anchor navigation
- Semantic HTML5 landmarks (`<nav>`, `<section>`, `<footer>`, `<figure>`)
- Mobile-first responsive breakpoints from 375 px up to 4K

---

## Tech Stack

| Layer             | Technology                                                       |
| ----------------- | ---------------------------------------------------------------- |
| **Framework**     | React 19, TypeScript 5                                           |
| **Build**         | Vite 8                                                           |
| **Styling**       | Tailwind CSS 3, PostCSS, Autoprefixer                            |
| **Typography**    | Helvetica Neue system stack (zero web-font payload)              |
| **Animation**     | Native CSS transitions + IntersectionObserver                    |
| **Linting**       | ESLint 10 + typescript-eslint                                    |
| **Package Mgr**   | npm                                                              |

---

## Project Structure

```
vex-hero/
├── public/                       Static assets served as-is
├── src/
│   ├── components/
│   │   ├── AnimatedHeading.tsx   Character-by-character headline animation
│   │   ├── FadeIn.tsx            Delay-aware opacity fade primitive
│   │   ├── RevealOnScroll.tsx    IntersectionObserver reveal wrapper
│   │   ├── Navbar.tsx            Fixed liquid-glass navigation
│   │   ├── Hero.tsx              Fullscreen video hero + CTAs
│   │   ├── Services.tsx          Six-card service grid
│   │   ├── TechStack.tsx         Grouped technology pills
│   │   ├── Process.tsx           Four-step engagement process
│   │   ├── Stats.tsx             Four-metric social-proof strip
│   │   ├── Work.tsx              Featured case studies
│   │   ├── Testimonials.tsx      Client quotes
│   │   ├── CTA.tsx               Final conversion panel
│   │   └── Footer.tsx            SEO-friendly multi-column footer
│   ├── App.tsx                   Page composition
│   ├── main.tsx                  React entry point
│   └── index.css                 Tailwind directives + liquid-glass utility
├── index.html                    HTML shell and meta tags
├── tailwind.config.js            Tailwind content paths
├── postcss.config.js             PostCSS plugin chain
├── tsconfig.json                 TypeScript project references
└── vite.config.ts                Vite configuration
```

---

## Getting Started

### Prerequisites

- **Node.js** `20` or later
- **npm** `10` or later (or pnpm / yarn / bun)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-org/vex-hero.git
cd vex-hero

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

| Command           | Description                                         |
| ----------------- | --------------------------------------------------- |
| `npm run dev`     | Start the Vite dev server with HMR                  |
| `npm run build`   | Type-check and create a production build in `dist/` |
| `npm run preview` | Serve the production build locally                  |
| `npm run lint`    | Run ESLint across the project                       |

---

## Customization

### Updating copy

All copy lives co-located with the component that renders it — no central JSON, no translation scaffolding to work around. To change the hero headline, open `src/components/Hero.tsx` and edit the `text` prop passed to `AnimatedHeading`.

### Swapping the background video

Replace the `<source src="…">` URL in `src/components/Hero.tsx`. Recommended: H.264 MP4, 1920×1080, under 8 MB for fast first paint.

### Changing brand colors

Tailwind's default palette ships unmodified. To introduce brand colors, extend `tailwind.config.js`:

```js
export default {
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f5f3ff',
          500: '#7c3aed',
          900: '#4c1d95',
        },
      },
    },
  },
}
```

### Tuning animations

- **Headline timing** — adjust `delay` and `charDelay` on `AnimatedHeading`.
- **Section reveals** — edit the `delay`, `duration`, and `distance` props on `RevealOnScroll` inside each section.

---

## SEO Checklist

Before deploying to production:

- [ ] Update `<title>` and `<meta name="description">` in `index.html`
- [ ] Add Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`)
- [ ] Add Twitter card tags (`twitter:card`, `twitter:title`, `twitter:image`)
- [ ] Add a canonical link tag pointing to your production domain
- [ ] Drop a `sitemap.xml` and `robots.txt` into `public/`
- [ ] Replace `favicon.svg` with your brand mark
- [ ] Add JSON-LD structured data for `Organization` and `WebSite`
- [ ] Set up redirects from `www` → apex (or vice versa) at your CDN
- [ ] Verify the site in Google Search Console and Bing Webmaster Tools

---

## Deployment

The production build is a static bundle in `dist/` — deploy it anywhere that serves static files.

### Vercel

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

### Cloudflare Pages

Connect the repository, set the build command to `npm run build`, and the publish directory to `dist`.

### Docker

```dockerfile
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
```

---

## Browser Support

| Browser            | Version |
| ------------------ | ------- |
| Chrome / Edge      | Last 2  |
| Firefox            | Last 2  |
| Safari (desktop)   | 15+     |
| Safari (iOS)       | 15+     |
| Samsung Internet   | 20+     |

The `backdrop-filter` used by the liquid-glass effect has [93%+ global support](https://caniuse.com/css-backdrop-filter). On unsupported browsers the glass surfaces gracefully degrade to a semi-transparent dark panel.

---

## Roadmap

- [ ] Next.js App Router port with built-in metadata and sitemap generation
- [ ] Dark/light theme toggle with `prefers-color-scheme` defaults
- [ ] Optional blog/MDX integration
- [ ] i18n scaffolding
- [ ] Contact form with serverless submission handler
- [ ] Storybook coverage for every component

---

## Contributing

Contributions, issues, and feature requests are welcome. Please open an issue first to discuss any material change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a pull request

---

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

## Acknowledgments

- [Vite](https://vitejs.dev) — blazing-fast frontend tooling
- [React](https://react.dev) — the library for web and native user interfaces
- [Tailwind CSS](https://tailwindcss.com) — utility-first CSS that scales
- [TypeScript](https://www.typescriptlang.org) — JavaScript with types for application-scale development

---

<div align="center">

**Built for software houses that ship.**

Made with care. Engineered for conversion.

</div>
