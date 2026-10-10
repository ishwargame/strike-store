/* =====================================================================
   STRIKE NETWORK STORE — js/tw-config.js
   Maps the CSS variables (css/style.css) to Tailwind utility classes,
   so classes like bg-main, bg-card, text-tsecondary, border-borderc,
   bg-primary work everywhere. You usually don't need to edit this.
   ===================================================================== */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        main: "var(--bg-main)",
        card: "var(--bg-card)",
        navbar: "var(--bg-navbar)",
        primary: "var(--primary)",
        "primary-hover": "var(--primary-hover)",
        tprimary: "var(--text-primary)",
        tsecondary: "var(--text-secondary)",
        borderc: "var(--border-color)",
      },
      fontFamily: {
        display: ["Rajdhani", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
};
