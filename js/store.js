/* =====================================================================
   STRIKE NETWORK STORE — js/store.js
   Store page: top category tabs + data-driven package grid.
   Packages come from the PACKAGES array in js/config.js — add one
   object there and its card appears automatically.
   ⚙️ You usually DON'T need to edit this file — edit js/config.js.
   ===================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  $("#store-heading").textContent = STORE.heading;
  $("#store-sub").textContent = STORE.sub;
  $("#store-note").innerHTML = STORE.note;

  const tabsHost = $("#store-tabs");
  const grid = $("#store-grid");

  /* read ?cat= from the URL so category links land on the right tab */
  let active = new URLSearchParams(location.search).get("cat") || "all";
  if (active !== "all" && !CATEGORIES.some((c) => c.id === active)) active = "all";

  const countFor = (id) =>
    id === "all" ? PACKAGES.length : PACKAGES.filter((p) => p.category === id).length;

  function renderTabs() {
    const tabs = [{ id: "all", name: "All", icon: "🛒" }, ...CATEGORIES];
    tabsHost.innerHTML = tabs
      .map(
        (c) => `
      <button data-cat="${c.id}" class="tab ${active === c.id ? "active" : ""}">
        <span>${c.icon}</span> ${c.name}
        <span class="text-xs opacity-70">(${countFor(c.id)})</span>
      </button>`
      )
      .join("");
  }

  function renderGrid() {
    const list =
      active === "all" ? PACKAGES : PACKAGES.filter((p) => p.category === active);
    grid.innerHTML = list.length
      ? list.map(packageCard).join("")
      : `<p class="text-tsecondary col-span-full text-center py-16">No packages in this category yet — check back soon!</p>`;
  }

  tabsHost.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-cat]");
    if (!btn) return;
    active = btn.dataset.cat;
    history.replaceState(null, "", active === "all" ? "store.html" : `store.html?cat=${active}`);
    renderTabs();
    renderGrid();
  });

  renderTabs();
  renderGrid();
});
