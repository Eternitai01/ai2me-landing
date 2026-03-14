# AI2me Cinematic Landing Page

A premium, cinematic landing page for **productivity.ai2me.com** — Your AI C-Level Executive Team.

## Features

✨ **Midnight Luxe Aesthetic** (Dark Editorial Design)
- Obsidian backgrounds with champagne accents
- Dark marble imagery from Unsplash
- Premium typography (Inter, Playfair Display)

🎬 **Cinematic Animations**
- GSAP-powered scroll animations
- Smooth hero stagger sequences
- Magnetic button effects
- Noise overlay texture

📱 **Responsive Design**
- Mobile-first approach
- Tailwind CSS utilities
- Optimized for all screen sizes

📧 **Email Capture**
- Newsletter signup form with validation
- Dual CTAs (Email signup + Calendar booking + Pricing)
- Mailchimp-ready integration
- Success/error state handling

📊 **Analytics & SEO**
- Google Analytics 4 tracking configured
- OpenGraph metadata (og:title, og:image, etc.)
- Twitter Card support
- Schema.org structured data
- Canonical URL for SEO
- Mobile-friendly meta tags

🔗 **CTA Integration**
- Direct booking link to Cal.com (https://cal.com/ai2me/30min)
- Pricing page link
- Email subscription with API backend
- Multiple CTA placements throughout

## Tech Stack

- **React 19** — UI framework
- **Vite 5** — Build tool
- **Tailwind CSS 3.4.17** — Styling
- **GSAP 3** — Animations
- **Lucide React** — Icons
- **Playfair Display, Inter, JetBrains Mono** — Fonts

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm 8+

### Installation

```bash
npm install --legacy-peer-deps
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

## Project Structure

```
src/
├── App.jsx          # Main component with all 7 sections
├── index.css        # Tailwind directives + custom styles
└── main.jsx         # React entry point

├── index.html       # HTML template
├── vite.config.js   # Vite configuration
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Components

### 1. **Navbar** — Floating Pill Navigation
- Morphs on scroll (transparent → semi-transparent bg)
- Links: Features, How It Works, Pricing
- CTA: Book Demo button

### 2. **Hero Section** — Opening Shot
- Full-bleed background image (Unsplash)
- Dark gradient overlay
- Staggered text animations
- Dual CTA buttons

### 3. **Features** — 3 Value Propositions
Interactive cards for:
- 24/7 AI Executives
- Instant Team Alignment
- Enterprise-Grade Decisions

### 4. **Philosophy** — Manifesto Section
- Parallax texture background
- Contrasting statements
- Serif italic accent text

### 5. **Protocol** — How It Works (Stacking)
- 3 interactive protocol steps
- Scroll-triggered stacking animation
- Detailed descriptions per step

### 6. **CTA Section** — Final Call to Action
- Large headline
- Subtext
- Primary booking button

### 7. **Footer** — System Status & Links
- Branding
- Navigation columns
- "System Operational" status indicator
- Social links

## Color Palette (Midnight Luxe)

```
Primary:    #0D0D12 (Obsidian)
Accent:     #C9A84C (Champagne)
Background: #FAF8F5 (Ivory)
Text Dark:  #2A2A35 (Slate)
```

## Typography

- **Headings:** Inter (tight tracking)
- **Drama/Serif:** Playfair Display (Italic)
- **Monospace/Data:** JetBrains Mono

## Animation Details

- **Entrance Ease:** power3.out
- **Morphing Ease:** power2.inOut
- **Stagger:** 0.08s (text), 0.15s (cards)
- **Scroll Trigger:** Smooth, pin-based stacking

## Booking Integration

All CTAs link to: `https://cal.com/ai2me/30min`

This is a 30-minute booking meeting scheduler powered by Cal.com.

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install --legacy-peer-deps
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## Performance Notes

- No external tracking or analytics loaded
- Minimal third-party dependencies
- GSAP ScrollTrigger optimized for 60fps
- Images lazy-loaded from Unsplash CDN
- Noise overlay via inline SVG (no image file)

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

© 2026 AI2me. All rights reserved.

---

**Built with ❤️ as a premium, 1:1 pixel-perfect cinematic experience.**
