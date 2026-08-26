# thecodecraX Portfolio & Community Website

> Production-ready portfolio and community platform for **thecodecraX** — expanding access to AI and Web3 education, events, and builder ecosystems across India.

---

## ⚡ Features

- **Content-Driven Architecture:** Zero hardcoded content in React components. All data is managed through type-safe TypeScript files in `src/data/`.
- **Dynamic Event System:** Automated listing, filtering by category, detail pages generated via `[slug]`, Lu.ma / external registration buttons, and published/featured toggles.
- **Visual Archive & Lightbox:** Masonry-style gallery with animated fullscreen modal, keyboard navigation (Escape, Left/Right arrows), and event linking.
- **India Ecosystem Presence:** Dynamic interactive city highlights across emerging regional tech hubs and metros.
- **Modern Tech Stack:** Built with Next.js 16 (App Router), TypeScript, Tailwind CSS, and Framer Motion.
- **Brand Palette:** Tailored deep purple and electric violet visual identity inspired by thecodecraX branding.
- **SEO & Social Share Ready:** Centralized OpenGraph, Twitter Cards, dynamic metadata generation, and sitemap/robots configuration.

---

## 📂 Project Structure

```text
thecodecrax/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/              # About page
│   │   ├── community/          # Community hub & pathways
│   │   ├── contact/            # Contact & collaboration
│   │   ├── events/             # Events directory & [slug] details
│   │   ├── gallery/            # Visual archive & lightbox
│   │   ├── join/               # Join CTA page
│   │   ├── globals.css         # Tailwind & theme styles
│   │   ├── layout.tsx          # Root layout with Navbar & Footer
│   │   └── page.tsx            # Homepage
│   ├── components/
│   │   ├── events/             # EventCard component
│   │   ├── layout/             # Navbar, Footer
│   │   ├── sections/           # Hero, About, Stats, Initiatives, Presence, JoinCTA
│   │   └── ui/                 # Button, Badge, Container, SectionHeader, ImageWithFallback
│   ├── data/                   # CENTRAL CONTENT MANAGEMENT (Edit content here!)
│   │   ├── events.ts           # All events and workshops
│   │   ├── gallery.ts          # Gallery images and captions
│   │   ├── initiatives.ts      # What We Do section
│   │   ├── locations.ts        # City presence data
│   │   ├── navigation.ts       # Navbar and footer links
│   │   ├── partners.ts         # Collaborators and partners
│   │   ├── seo.ts              # SEO metadata & OpenGraph config
│   │   ├── site.ts             # Core site config, Hero copy, About copy
│   │   ├── social.ts           # Social media profiles
│   │   ├── stats.ts            # Community impact statistics
│   │   └── team.ts             # Team members
│   ├── lib/                    # Helper utilities
│   └── types/                  # TypeScript interface definitions
├── public/
│   └── images/                 # Images for events, gallery, team, logo
├── CONTENT_GUIDE.md            # Comprehensive content editing manual
└── README.md
```

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 18.17+ or 20+
- npm or pnpm or yarn

### 2. Installation
```bash
git clone https://github.com/saymanlal/thecodecrax.git
cd thecodecrax
npm install
```

### 3. Running Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Building for Production
```bash
npm run build
npm run start
```

---

## 🌐 Deployment on Vercel

1. Push your repository to GitHub: `https://github.com/saymanlal/thecodecrax.git`
2. Go to [Vercel](https://vercel.com) and import the repository.
3. Keep default settings (Framework: Next.js).
4. Set domain / project name to `thecodecrax` to get `https://thecodecrax.vercel.app`.
5. Click **Deploy**.

---

## 📝 How to Update Content

Refer to [`CONTENT_GUIDE.md`](./CONTENT_GUIDE.md) for step-by-step instructions on updating events, social links, photos, text, and team information.

---

## 📄 License

MIT License. Built for thecodecraX community.
