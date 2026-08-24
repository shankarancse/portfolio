# R. Shankaran — Developer Portfolio

A modern, dark-themed, responsive personal developer portfolio built with **React + Vite**
(plain CSS, no UI framework lock-in). Neon green primary accent, purple secondary glow,
terminal-style hero — matching the reference design.

## Quick start

```bash
npm install
npm run dev       # local dev server, usually http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

Requires Node.js 18+.

## ⚡ The one file you actually need to edit

**`src/data/personalInfo.js`** is the single source of truth for every personal detail on
the site — name, email, GitHub, LinkedIn, resume link, location, education. It's used by the
Navbar, Hero, GitHub section, Contact section, and Footer. Change a value once here and it
updates everywhere automatically — you never need to hunt through components.

```js
const personalInfo = {
  name: "R. Shankaran",
  email: "your-email@gmail.com",
  github: { username: "yourusername", url: "https://github.com/yourusername" },
  linkedin: { username: "yourusername", url: "https://www.linkedin.com/in/yourusername" },
  resume: "/resume.pdf",
  location: "Tamil Nadu, India",
  education: { ... },
};
```

To add your resume: drop a PDF into `public/` named `resume.pdf` (or update the `resume`
path above to match your filename).

## Other data files (`src/data/`)

| File | Controls |
|---|---|
| `personalInfo.js` | Contact details, education, resume link (see above) |
| `projects.js` | Featured Projects section — add/edit/remove project cards |
| `skills.js` | Skills section — categories and chips |
| `certifications.js` | Certifications section — leave `date` / `credentialId` / `credentialUrl` empty until you actually have them; the UI shows an honest placeholder instead of inventing data |

## Project structure

```
src/
├── components/       # One component per section (Navbar, Hero, About, Skills,
│                      # Projects, Certifications, Education, LearningJourney,
│                      # GithubSection, Contact, Footer) + matching .css files
├── components/icons/  # Hand-rolled GitHub/LinkedIn marks (lucide-react's current
│                      # release doesn't ship brand icons)
├── data/              # personalInfo.js, projects.js, skills.js, certifications.js
├── hooks/              # useTheme (dark/light toggle), useReveal (scroll animations)
├── App.jsx
├── main.jsx
└── index.css           # design tokens (colors, radius, fonts) + shared utility classes
```

## Notes on honesty / placeholders

Per the brief, nothing on this site invents information:
- Certifications show "In progress" / "Not yet available" until you fill in real dates and
  credential IDs.
- Project GitHub buttons show "GitHub soon" until you add a real repo URL in `projects.js`.
- The GitHub contribution graph is clearly labeled as sample/illustrative data — wire up the
  GitHub API yourself if you want it live (never expose an API key in frontend code — proxy
  it through a small backend/serverless function if you do this).
- The contact form validates input but does **not** pretend to send anything — there's no
  backend wired up. It tells the user plainly and points them to your direct email. Connect
  Formspree, EmailJS, or your own API route in `src/components/Contact.jsx` when you're ready.

## Features implemented

- Sticky glassmorphism navbar with social icons (desktop) and hamburger menu (mobile)
- Dark/light theme toggle (persisted to localStorage, respects system preference)
- Smooth scrolling, scroll-reveal animations, `prefers-reduced-motion` respected throughout
- Fully responsive (mobile / tablet / laptop / desktop), no horizontal scroll
- Semantic HTML, visible focus states, alt/aria labels, keyboard-navigable
- SEO: page title, meta description, Open Graph tags, favicon

## Deploying

This is a static site after `npm run build` (output in `dist/`). Deploy `dist/` to Vercel,
Netlify, GitHub Pages, or any static host. For Vercel/Netlify, just point them at this repo —
build command `npm run build`, output directory `dist`.
