# ⚡ Strike Network Store — Editing Guide

A modern, dark gaming Minecraft server store built with **HTML + Tailwind CSS (CDN) + Vanilla JavaScript**.
The whole site is **data-driven**, so almost every edit happens in ONE file.

## 📁 Project structure

```
strike-store/
├── index.html        → Home page
├── store.html        → Store (category tabs + package grid)
├── faq.html          → FAQ accordion
├── terms.html        → Terms of Service (edit text inside the file)
├── privacy.html      → Privacy Policy (edit text inside the file)
├── 404.html          → Not-found page
├── assets/
│   └── logo.png      → Site logo (replace this file to change logo)
├── css/
│   └── style.css     → 🎨 ALL COLORS (:root CSS variables)
└── js/
    ├── config.js     → ✏️ ALL CONTENT (the main editing file)
    ├── tw-config.js  → Tailwind theme mapping (rarely touched)
    ├── main.js       → Navbar / footer / cards / accordion (rarely touched)
    ├── home.js       → Homepage rendering (rarely touched)
    └── store.js      → Store tabs + grid rendering (rarely touched)
```

## ✏️ Common edits (tell the AI exactly this)

| You say                        | What changes                          |
| ------------------------------ | ------------------------------------- |
| "Change hero heading"          | `HERO.heading` in `js/config.js`      |
| "Change server IP"             | `SITE.serverIP` in `js/config.js`     |
| "Change Discord link"          | `SITE.discordLink` in `js/config.js`  |
| "Change primary color"         | `--primary` in `css/style.css`        |
| "Change colors"                | `:root` block in `css/style.css`      |
| "Add a new rank package"       | add one object to `PACKAGES`          |
| "Edit package price"           | `price:` of that package              |
| "Add new category"             | add to `CATEGORIES` (+ packages)      |
| "Change FAQ"                   | `FAQS` array in `js/config.js`        |
| "Change footer links/socials"  | `FOOTER` object in `js/config.js`     |

## ➕ Adding a package (example)

Open `js/config.js` and add one object inside `PACKAGES`:

```js
{ name: "TITAN", price: 1999, category: "ranks", featured: true,
  description: "Beyond immortal.",
  perks: ["Everything in Immortal", "Custom particle aura"] },
```

Save — the card appears on the store automatically (and on the home page too, because `featured: true`).

## 💳 Connecting real payments

Each package accepts an optional `buyUrl`. Point it at your Tebex / Crafting Store / payment link:

```js
{ name: "VIP", price: 149, category: "ranks", buyUrl: "https://your-payment-link" , ... }
```

Without a `buyUrl`, the Buy Now button opens your Discord link.

## ▶️ Run locally

```bash
cd strike-store
python3 -m http.server 3000 --bind 0.0.0.0
# then open http://localhost:3000
```

Any static host works too (GitHub Pages, Netlify, Vercel) — just upload the folder.
