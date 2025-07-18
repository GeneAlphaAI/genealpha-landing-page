
# GeneAlpha Landing Page

A React 19 + Vite 7 based landing page for **GeneAlpha.ai** built with Tailwind CSS 4 and Radix UI components.

---

## Tech Stack

- **React 19**
- **Vite 7** — Fast build tool & dev server
- **Tailwind CSS 4** — Utility-first CSS framework
- **Framer Motion** — Animation library for React
- **GSAP** — Advanced web animations
- **Radix UI Navigation Menu** — Accessible UI primitives
- **React Markdown** — Render Markdown content
- **React Router 7** — Client-side routing

## 📁 Project Structure

```
public/
└── assets/ # Static images & assets

src/
├── components/
│ ├── animations/ # Animation components
│ ├── buttons/ # Button components
│ ├── ecosystem/ # Ecosystem section
│ ├── footer/ # Footer section
│ ├── ga-token/ # GA Token components
│ ├── github/ # GitHub section
│ ├── hero/ # Hero section
│ ├── hive/ # Hive features
│ ├── model/ # Model section
│ └── navigation/ # Navigation & header
├── pages/ # Page components & route views
├── styles/ # Global styles & Tailwind utilities
├── utilities/ # Helper functions & utilities
└── App.jsx # Main app wrapper

```

## Scripts

Install dependecies with:

```
yarn install
```

Below are the available commands to run:

| Command | Description |
|--------|-------------|
| `yarn dev` | Start the local development server |
| `yarn build` | Build production assets |
| `yarn preview` | Preview the production build |
| `yarn lint` | Run ESLint checks |


## Vite Configuration Highlights

- **Tailwind Plugin** integrated with Vite
- **Custom Dev Server Port:** `5179`
- **Allowed Host:** `genealpha.ai` (for Docker/reverse proxy setups)

```js
// vite.config.js
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    strictPort: true,
    port: 5179,
    allowedHosts: ["genealpha.ai"],
  },
});
````


## 📌 Notes

* Place static assets like images inside `/public/assets`
