/* =====================================================================
   STRIKE NETWORK STORE — js/home.js
   Fills the homepage sections with content from js/config.js.
   ⚙️ You usually DON'T need to edit this file — edit js/config.js.
   ===================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  /* ---------- hero ---------- */
  $("#hero-badge").textContent = HERO.badge;
  $("#hero-heading").innerHTML = HERO.heading;
  $("#hero-subtext").textContent = HERO.subtext;
  const b1 = $("#hero-btn-primary");
  b1.textContent = HERO.primaryButton.label;
  b1.href = HERO.primaryButton.href;
  const b2 = $("#hero-btn-secondary");
  b2.textContent = HERO.secondaryButton.label;
  b2.href = HERO.secondaryButton.href;

  /* ---------- featured packages ---------- */
  $("#featured-grid").innerHTML = PACKAGES.filter((p) => p.featured)
    .slice(0, 6)
    .map(packageCard)
    .join("");

  /* ---------- store categories ---------- */
  $("#category-grid").innerHTML = CATEGORIES.map(
    (c) => `
    <a href="store.html?cat=${c.id}" class="card p-6 flex flex-col items-start gap-3 group">
      <span class="text-3xl">${c.icon}</span>
      <h3 class="font-display text-xl font-bold uppercase">${c.name}</h3>
      <p class="text-sm text-tsecondary">${c.tagline}</p>
      <span class="mt-auto text-primary text-sm font-semibold transition-transform group-hover:translate-x-1">Browse →</span>
    </a>`
  ).join("");

  /* ---------- why buy from us ---------- */
  $("#why-grid").innerHTML = WHY_US.map(
    (w) => `
    <div class="card p-6 space-y-3">
      <span class="inline-flex w-12 h-12 items-center justify-center rounded-xl text-2xl" style="background:var(--primary-soft)">${w.icon}</span>
      <h3 class="font-display text-xl font-bold uppercase">${w.title}</h3>
      <p class="text-sm text-tsecondary leading-relaxed">${w.text}</p>
    </div>`
  ).join("");

  /* ---------- FAQ preview (first 3) ---------- */
  $("#faq-preview").innerHTML = accordion(FAQS.slice(0, 3));
  bindAccordions($("#faq-preview"));

  /* ---------- CTA ---------- */
  $("#cta-heading").textContent = CTA.heading;
  $("#cta-text").textContent = CTA.text;
  const c1 = $("#cta-primary");
  c1.textContent = CTA.primaryButton.label;
  c1.href = CTA.primaryButton.href;
  const c2 = $("#cta-secondary");
  c2.textContent = CTA.secondaryButton.label;
  c2.href = CTA.secondaryButton.href;
});
