/* =====================================================================
   STRIKE NETWORK STORE — js/main.js
   Shared UI rendered on every page: navbar, footer, package cards,
   FAQ accordion, IP copy button.
   ⚙️ You usually DON'T need to edit this file — edit js/config.js.
   ===================================================================== */

/* ---------- tiny helpers ---------- */
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* EDIT HERE (format): how prices are displayed, e.g. ₹1,299 */
function money(n) {
  return SITE.currency + Number(n).toLocaleString("en-IN");
}

function currentPage() {
  const p = location.pathname.split("/").pop();
  return p === "" ? "index.html" : p;
}

function catById(id) {
  return CATEGORIES.find((c) => c.id === id) || { name: id, icon: "🛒" };
}

/* ---------- navbar ---------- */
function navLinksHTML(block = false) {
  return SITE.navLinks
    .map(
      (l) =>
        `<a href="${l.href}" class="nav-link ${block ? "block" : ""} ${
          currentPage() === l.href ? "active" : ""
        }">${l.label}</a>`
    )
    .join("");
}

function renderNavbar() {
  const host = $("#site-navbar");
  if (!host) return;
  host.innerHTML = `
  <header class="site-header sticky top-0 z-50 border-b border-borderc">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
      <a href="index.html" class="flex items-center gap-3 shrink-0">
        <img src="${SITE.logo}" alt="${SITE.name} logo" class="w-10 h-10 rounded-xl object-cover border border-borderc" />
        <span class="font-display text-lg sm:text-xl font-bold uppercase tracking-wider">${SITE.name}</span>
      </a>

      <div class="hidden md:flex items-center gap-1">
        ${navLinksHTML()}
        <button data-copy-ip class="ip-chip ml-3" title="Copy server IP">
          <span data-ip-text class="font-semibold"></span><span class="ip-feedback">⧉</span>
        </button>
        <a href="${SITE.discordLink}" target="_blank" rel="noopener" class="btn btn-primary btn-sm ml-2">Discord</a>
      </div>

      <button id="menu-btn" class="md:hidden p-2 rounded-lg border border-borderc text-tsecondary hover:text-tprimary hover:border-primary transition" aria-label="Toggle menu" aria-expanded="false">
        <svg id="menu-icon-open" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16"/></svg>
        <svg id="menu-icon-close" class="w-6 h-6 hidden" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" d="M6 6l12 12M18 6L6 18"/></svg>
      </button>
    </nav>

    <div id="mobile-menu" class="hidden md:hidden border-t border-borderc bg-navbar px-4 pb-5 pt-3 space-y-1">
      ${navLinksHTML(true)}
      <div class="flex items-center gap-3 pt-3">
        <button data-copy-ip class="ip-chip flex-1 justify-center">
          <span data-ip-text class="font-semibold"></span><span class="ip-feedback">⧉</span>
        </button>
        <a href="${SITE.discordLink}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">Discord</a>
      </div>
    </div>
  </header>`;

  const btn = $("#menu-btn");
  const menu = $("#mobile-menu");
  btn.addEventListener("click", () => {
    const open = !menu.classList.toggle("hidden");
    btn.setAttribute("aria-expanded", String(open));
    $("#menu-icon-open").classList.toggle("hidden", open);
    $("#menu-icon-close").classList.toggle("hidden", !open);
  });
}

/* ---------- footer ---------- */
function renderFooter() {
  const host = $("#site-footer");
  if (!host) return;
  const year = new Date().getFullYear();
  host.innerHTML = `
  <footer class="border-t border-borderc band">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
      <div class="space-y-4">
        <div class="flex items-center gap-3">
          <img src="${SITE.logo}" alt="" class="w-10 h-10 rounded-xl object-cover border border-borderc" />
          <span class="font-display text-lg font-bold uppercase tracking-wider">${SITE.name}</span>
        </div>
        <p class="text-sm text-tsecondary leading-relaxed">${FOOTER.about}</p>
      </div>

      <div>
        <h4 class="footer-title">Quick Links</h4>
        <ul class="space-y-2">
          ${FOOTER.quickLinks.map((l) => `<li><a class="footer-link" href="${l.href}">${l.label}</a></li>`).join("")}
        </ul>
      </div>

      <div>
        <h4 class="footer-title">Categories</h4>
        <ul class="space-y-2">
          ${CATEGORIES.map((c) => `<li><a class="footer-link" href="store.html?cat=${c.id}">${c.icon} ${c.name}</a></li>`).join("")}
        </ul>
      </div>

      <div class="space-y-4">
        <h4 class="footer-title">Connect</h4>
        <ul class="space-y-2">
          ${FOOTER.socials.map((s) => `<li><a class="footer-link" href="${s.href}" target="_blank" rel="noopener">${s.label} ↗</a></li>`).join("")}
        </ul>
        <button data-copy-ip class="ip-chip w-full justify-center" title="Copy server IP">
          <span data-ip-text class="font-semibold"></span><span class="ip-feedback">⧉</span>
        </button>
      </div>
    </div>

    <div class="border-t border-borderc">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row gap-2 items-center justify-between text-xs text-tsecondary">
        <span>${FOOTER.copyright.replace("{year}", year)}</span>
        <span>${FOOTER.disclaimer}</span>
      </div>
    </div>
  </footer>`;
}

/* ---------- package card (used on home + store) ---------- */
function packageCard(p) {
  const cat = catById(p.category);
  const perks = (p.perks || [])
    .map(
      (k) =>
        `<li class="flex items-start gap-2 text-sm text-tsecondary"><span class="text-primary mt-0.5">✔</span><span>${k}</span></li>`
    )
    .join("");
  return `
  <div class="card ${p.featured ? "card-featured" : ""} flex flex-col p-6">
    ${p.featured ? '<span class="badge-featured">★ FEATURED</span>' : ""}
    <div class="flex items-center justify-between mb-4">
      <span class="text-3xl">${cat.icon}</span>
      <span class="text-xs uppercase tracking-wider text-tsecondary border border-borderc rounded-full px-3 py-1">${cat.name}</span>
    </div>
    <h3 class="font-display text-2xl font-bold uppercase">${p.name}</h3>
    <p class="text-sm text-tsecondary mt-1">${p.description}</p>
    ${perks ? `<ul class="mt-4 space-y-2">${perks}</ul>` : ""}
    <div class="mt-auto pt-6 flex items-center justify-between gap-3">
      <span class="font-display text-2xl font-bold text-primary">${money(p.price)}</span>
      <a href="${p.buyUrl || SITE.discordLink}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">Buy Now</a>
    </div>
  </div>`;
}

/* ---------- FAQ accordion ---------- */
function accordion(items) {
  return `<div class="space-y-3">${items
    .map(
      (f) => `
    <div class="acc-item card overflow-hidden">
      <button class="acc-btn w-full flex items-center justify-between gap-4 px-6 py-4 text-left font-display text-lg font-semibold" aria-expanded="false">
        <span>${f.q}</span><span class="acc-icon text-primary text-2xl leading-none">+</span>
      </button>
      <div class="acc-body px-6 text-tsecondary text-sm leading-relaxed"><p class="pb-5">${f.a}</p></div>
    </div>`
    )
    .join("")}</div>`;
}

function bindAccordions(root = document) {
  $$(".acc-btn", root).forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".acc-item");
      const body = item.querySelector(".acc-body");
      const open = item.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
      body.style.maxHeight = open ? body.scrollHeight + "px" : "0";
    });
  });
}

/* ---------- copy server IP ---------- */
function bindCopyIP(root = document) {
  $$("[data-copy-ip]", root).forEach((btn) => {
    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(SITE.serverIP);
      } catch (e) {
        const t = document.createElement("textarea");
        t.value = SITE.serverIP;
        document.body.appendChild(t);
        t.select();
        try { document.execCommand("copy"); } catch (_) {}
        t.remove();
      }
      const fb = btn.querySelector(".ip-feedback");
      if (fb) {
        const old = fb.textContent;
        fb.textContent = "✅";
        setTimeout(() => (fb.textContent = old), 1500);
      }
    });
  });
}

/* ---------- shared init on every page ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderNavbar();
  renderFooter();
  $$("[data-ip-text]").forEach((el) => (el.textContent = SITE.serverIP));
  bindCopyIP();
});
