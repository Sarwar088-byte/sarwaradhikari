# Sarwar Adhikari — Futuristic Developer Portfolio

> **Digital Identity & Personal Technology Brand**  
> Computer Science & Engineering Student &bull; Peer Mentor &bull; Technology Enthusiast  
> Based in Nepal

An award-worthy, high-performance personal developer portfolio website built with modern web technologies, strict architectural integrity, restrained futuristic aesthetics, and production-grade engineering.

---

## ✦ Design System & Aesthetic Foundation

- **Palette**: Deep midnight black (`#07090D`), graphite surfaces (`#0D1118`, `#131923`), electric cyan accent (`#67E3F5`), and restrained violet (`#9582FF`).
- **Typography**: Geist Sans and Geist Mono via Next.js Font Optimization.
- **Micro-Interactions**: Scroll progress tracking, active navigation highlighting, 3D cursor-reactive orbital geometry, and keyboard accessibility.
- **Editorial Sectioning**:
  - `00` Cinematic Identity Preloader (session-cached, reduced-motion friendly)
  - `01` Floating Navigation with Blur Backdrop & Active Section Pill
  - `02` Editorial Hero Split Layout with Interactive SVG/CSS 3D Orbital Object
  - `03` Verified Fact Identity Strip (Academics, Stage, Mentorship, Location)
  - `04` Behind The Code (Personal narrative + Interactive "What Drives Me" disciplines)
  - `05` The Technical Foundation (C++, Python, Data Structures, SQL, Application Software)
  - `06` Selected Work / Project Lab (Extensible empty & active state management)
  - `07` The Journey So Far (Stage-based milestone timeline)
  - `08` Beyond The Code (Linguistic repertoire & creative technology interests)
  - `09` Let's Connect (Live Nepal NPT time, verified networks & dispatch form)
  - `10` Premium Architectural Footer with dynamic copyright & top-return

---

## ✦ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (Static HTML Export optimized for Cloudflare Pages & Vercel)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict typing throughout)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG Brand Glyphs
- **SEO & Metadata**: JSON-LD Person Schema, OpenGraph, dynamic `sitemap.xml`, and `robots.txt`

---

## ✦ Getting Started

### 1. Installation

```bash
# Navigate to the project directory
cd sarwar-portfolio

# Install dependencies
npm install
```

### 2. Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Verification

```bash
# Typecheck
npm run typecheck

# Lint
npm run lint

# Production static export build (generates out/ folder)
npm run build
```

---

## ✦ Deployment Instructions

### Deploy to Cloudflare Pages (Connected to GitHub)

1. **Create the GitHub Repository**:
   - Go to [GitHub New Repository](https://github.com/new?name=sarwar-portfolio)
   - Repository name: `sarwar-portfolio`
   - Leave it empty (do NOT check "Add a README file")
   - Click **Create repository**

2. **Push Code to GitHub**:
   ```bash
   cd "sarwar-portfolio"
   git remote add origin https://github.com/sarwar31111-ui/sarwar-portfolio.git
   git branch -M main
   git push -u origin main
   ```

3. **Configure Cloudflare Pages (`sarwarahikari`)**:
   - In your Cloudflare Dashboard, select **Pages** &bull; **Connect to Git** &bull; select `sarwar-portfolio`.
   - Set the build settings:
     - **Framework preset**: `Next.js (Static HTML Export)`
     - **Build command**: `npm run build`
     - **Build output directory**: `out`
   - Click **Save and Deploy**.
   - Cloudflare will build and serve your site globally on the edge with zero cold starts!

---

## ✦ How to Customize & Populate Content

All personal content is intentionally decoupled from presentation components. You only need to edit files in `src/data/`:

### 1. Updating Personal Details (`src/data/site.ts`)
To add your email, LinkedIn, GitHub, or profile links:

```typescript
// src/data/site.ts
export const siteConfig: SiteConfig = {
  name: "Sarwar Adhikari",
  email: "your.real.email@example.com", // <-- Activates mailto & copy buttons
  github: "https://github.com/sarwar31111-ui", // <-- Activates GitHub links
  linkedin: "https://linkedin.com/in/your-profile", // <-- Activates LinkedIn links
  twitter: "",
  
  education: {
    degree: "B.Tech Computer Science and Engineering",
    year: "Second Year",
    institution: "Your University Name",
  },
};
```

### 2. Adding Projects (`src/data/projects.ts`)
When you are ready to showcase projects, simply add them to the `projects` array in `src/data/projects.ts`. The UI will automatically transition from the incubator state to the editorial project grid:

```typescript
// src/data/projects.ts
export const projects: Project[] = [
  {
    id: "project-slug",
    title: "Project Title",
    description: "Concise summary of what you engineered.",
    category: "C++ Application",
    featured: true,
    status: "completed",
    techStack: [
      { name: "C++" },
      { name: "CMake" },
      { name: "Data Structures" }
    ],
    githubUrl: "https://github.com/...",
    liveUrl: "https://...",
  },
];
```

---

## ✦ License
Created for Sarwar Adhikari. All digital rights reserved.

