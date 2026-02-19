# 🧑‍💻 Saurav Satpathy — Personal Portfolio

A modern, fully responsive personal portfolio website built with **React** and **Vite**. Features a dark/light theme toggle, smooth scroll reveal animations, flip card project showcase, custom animated cursor, and a clean modular component architecture.

---

## 🌐 Live Preview

> Deploy to Vercel or Netlify to get your live URL and add it here.

---

## ✨ Features

- 🎨 **Dark / Light Mode** — Smooth toggle with CSS variable theming
- 🖱️ **Custom Cursor** — Animated dot + trailing ring cursor
- 🎬 **Flip Card Projects** — Hover to reveal full project details
- 📱 **Fully Responsive** — Works across all screen sizes
- 🎞️ **Scroll Reveal Animations** — IntersectionObserver-based section reveals
- 🧩 **Modular Components** — Each section is its own isolated component
- 🎨 **CSS Modules** — Scoped styles, no class name conflicts
- ⚡ **Vite** — Lightning-fast dev server and optimized builds
- 🔠 **Google Fonts** — Syne · DM Mono · Instrument Serif
- 📊 **Sticky Experience Timeline** — Timeline layout with animated markers

---

## 🏗️ Tech Stack

| Layer      | Tech                          |
|------------|-------------------------------|
| Framework  | React 18                      |
| Build Tool | Vite 5                        |
| Styling    | CSS Modules + CSS Variables   |
| Fonts      | Google Fonts (Syne, DM Mono)  |
| Animations | CSS Keyframes + IntersectionObserver |
| Language   | JavaScript (JSX)              |

---

## 📁 Folder Structure

```
portfolio/
├── index.html                  # HTML entry point
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                # React root
    ├── App.jsx                 # Root component — wires all sections
    ├── index.css               # Global CSS variables, resets, utilities
    │
    ├── data/
    │   └── portfolio.js        # ✏️  ALL your content lives here
    │
    ├── hooks/
    │   ├── useTheme.js         # Dark/light mode state + DOM toggle
    │   ├── useScrollReveal.js  # IntersectionObserver reveal hook
    │   └── useCursor.js        # Custom cursor animation loop
    │
    └── components/
        ├── Cursor.jsx + .module.css
        ├── Navbar.jsx + .module.css
        ├── Hero.jsx + .module.css
        ├── About.jsx + .module.css
        ├── Skills.jsx + .module.css
        ├── Experience.jsx + .module.css
        ├── Projects.jsx + .module.css
        ├── ProjectCard.jsx + .module.css   ← Flip card
        ├── Contact.jsx + .module.css
        └── Footer.jsx + .module.css
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Satapathy-GitWorkshop/my-portfolio.git
cd my-portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```

---

## ✏️ How to Customize

All portfolio content is centralized in a **single file**:

```
src/data/portfolio.js
```

Edit this file to update:
- 🔗 Nav links
- 🏷️ Hero stack pills
- 📊 About facts & info rows
- 🛠️ Skills categories and badges
- 💼 Experience timeline entries
- 🗂️ Project cards (front & back content)
- 📬 Contact links

No need to touch any component files — just update the data and everything re-renders automatically.

---

## 🚢 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Drag and drop the `dist/` folder to netlify.com/drop
```

### GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"homepage": "https://satapathy-gitworkshop.github.io/my-portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Then run:
```bash
npm run deploy
```

---

## 🎨 Theming

Colors are controlled via CSS custom properties in `src/index.css`:

```css
/* Dark mode (default) */
:root {
  --bg: #080810;
  --accent: #6c63ff;
  --accent2: #d4ff7a;
  --text: #eaeaf5;
  --muted: #666680;
}

/* Light mode */
[data-theme='light'] {
  --bg: #ffffff;
  --accent: #4f46e5;
  --accent2: #3730a3;
  --text: #111128;
}
```

Change these variables to retheme the entire site instantly.

---

## 📄 License

MIT © [Saurav Satpathy](https://github.com/Satapathy-GitWorkshop)

---

## 🙏 Credits

- Built with [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- Designed by [Claude](https://claude.ai) (Anthropic)
- Icons via inline SVG
- Fonts via [Google Fonts](https://fonts.google.com/)