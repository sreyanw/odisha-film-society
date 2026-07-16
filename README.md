# Odisha Film Society &bull; First International Short Film Festival

Welcome to the official repository for **odishafilmsociety.in**, the digital home of the **Odisha Film Society (OFS)** and the **First International Short Film Festival**. 

This portal is designed to provide a premium, cinematic experience for filmmakers, critics, and film lovers. It features interactive countdowns to events, registration details, award category previews, and contact channels.

---

## 📅 Key Festival Milestones
- **Submissions & Nominations**: Launching Soon
- **Festival Events & Screenings**: Starting **21st July 2026**
- **Grand Finale & Awards Ceremony**: **21st October 2026** at **Rabindra Mandap, Bhubaneswar, Odisha**

---

## 🎨 Design System & Aesthetics
To project a high-end, premium atmosphere, the site operates under a strict design system:
- **Theme**: Absolute Dark.
- **Palette**: Charcoal backgrounds (`#050505`, `#0f0f0f`), rich golden text accents (`#d4af37`), and clean light accents.
- **Typography**: 
  - **Cinzel**: Used for high-impact headings, navigation branding, and banners to capture an editorial, movie poster vibe.
  - **Outfit**: A modern geometric sans-serif for readable body copy, forms, and details.
- **Motion**: Powered by **Framer Motion** for entrance stagger animations, responsive transitions, and active-menu indicator springs.

---

## 🛠️ Technology Stack
- **Framework**: [Next.js](https://nextjs.org/) (App Router, TypeScript)
- **Styling**: Vanilla CSS Modules (no utility bloat, customized layout control)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) (supported by custom inline SVGs for compatibility)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

### Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/sreyanw/odisha-film-society.git
   cd odisha-film-society
   ```
2. Install package dependencies:
   ```bash
   npm install
   ```

### Development
Start the local development server:
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser to view the application.

### Production Build
Build the optimized static files for deployment:
```bash
npm run build
```
The application prerenders all routes (`/`, `/about`, `/contact`, `/submissions`) as static HTML files for instantaneous load times and SEO optimization.

---

## 📂 Code Structure
```text
├── app/
│   ├── about/            # About Us page
│   ├── contact/          # Interactive Contact Us page
│   ├── submissions/      # Submission & Nomination holding page
│   ├── globals.css       # Core design system tokens & variables
│   ├── layout.tsx        # Layout template injecting Google Fonts, Navbar & Footer
│   └── page.tsx          # Homepage containing the countdown timer & highlights
├── components/
│   ├── Navbar/           # Responsive navigation header & drawer
│   └── Footer/           # Horizontal, minimal date & venue footer
├── public/               # Static assets & public files
└── tsconfig.json         # TypeScript configuration
```

---

## 🔒 Code Quality & Compliance
- **Hydration Safety**: Built with custom attributes (`suppressHydrationWarning`) to prevent browser extension and recorder attribute conflicts.
- **Linter & Type Cleanliness**: 100% type safety. ESLint rules are strictly checked with `npm run lint` returning **0 warnings and 0 errors**.
- **SEO & Semantics**: Follows semantic HTML5 standards to optimize search indexing for film submissions.
- **Accessibility (WCAG 2.1 AA)**: All interactive elements are fully keyboard-navigable, using direct event-driven states rather than uncoordinated effects.
