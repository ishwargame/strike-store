/* =====================================================================
   STRIKE NETWORK STORE  •  ✏️ EDITABLE WEBSITE CONTENT  ✏️
   =====================================================================
   THIS IS THE MAIN EDITING FILE.
   Change any text, link, price or package below and save — the whole
   website updates automatically. You never need to touch the HTML.

   QUICK GUIDE
   • Website name / logo / links ...... SITE
   • Hero heading & subtext ........... HERO
   • Server IP & Discord link ......... SITE.serverIP / SITE.discordLink
   • Store categories ................. CATEGORIES
   • Packages / ranks / crates ........ PACKAGES
   • "Why buy from us" cards .......... WHY_US
   • FAQ questions & answers .......... FAQS
   • Footer links & socials ........... FOOTER
   • Colors ........................... css/style.css (:root)
   ===================================================================== */

/* ------------------------- SITE BASICS ------------------------- */
const SITE = {
  name: "Strike Network",
  tagline: "#1 Minecraft Network",
  logo: "assets/logo.png",                            // EDIT HERE: logo image path

  serverIP: "play.strikenetwork.fun Port 30658",                  // EDIT HERE: your server IP
  discordLink: "https://discord.gg/YNkWs5SCYc",    // EDIT HERE: your Discord invite

  currency: "₹",                                      // EDIT HERE: price symbol (₹, $, ...)

  navLinks: [                                         // EDIT HERE: navbar links
    { label: "Home",  href: "index.html" },
    { label: "Store", href: "store.html" },
    { label: "FAQ",   href: "faq.html" },
  ],
};

/* ------------------------- HERO SECTION ------------------------- */
const HERO = {
  badge: "⚡ #1 Minecraft Network",
  heading: 'Gear Up. Rank Up. <span class="text-primary">Rule the Network.</span>',
  subtext: "Unlock exclusive ranks, crates, coins and more on Strike Network — an epic Minecraft experience with instant delivery and 24/7 uptime.",
  primaryButton:   { label: "Browse Store", href: "store.html" },
  secondaryButton: { label: "Join Discord", href: SITE.discordLink },
};

/* ------------------------- STORE CATEGORIES -------------------------
   id is used by the packages below — keep them matching.            */
const CATEGORIES = [
  { id: "ranks",   name: "Ranks",   icon: "⚔️", tagline: "Exclusive perks & powers" },
  { id: "crates",  name: "Crates",  icon: "📦", tagline: "Spin for rare loot" },
  { id: "coins",   name: "Coins",   icon: "🪙", tagline: "In-game currency packs" },
  { id: "keys",    name: "Keys",    icon: "🔑", tagline: "Unlock any crate" },
  { id: "bundles", name: "Bundles", icon: "🎁", tagline: "Best-value combos" },
];

/* ------------------------- ALL PACKAGES -------------------------
   • category: must match a category id above
   • featured: true → the package also shows on the homepage
   • perks: optional list shown on the card
   • buyUrl: optional — point this at your payment link when ready   */
const PACKAGES = [
  /* ---------- RANKS ---------- */
  { name: "VIP", price: 149, category: "ranks", featured: false,
    description: "The perfect way to start your journey.",
    perks: ["VIP prefix & chat color", "2 extra /sethome slots", "Weekly VIP kit"] },
  { name: "MVP", price: 299, category: "ranks", featured: false,
    description: "More power, more style.",
    perks: ["Everything in VIP", "Particle trail", "4 extra /sethome slots", "/feed & /heal commands"] },
  { name: "ELITE", price: 499, category: "ranks", featured: false,
    description: "Serious gear for serious players.",
    perks: ["Everything in MVP", "Elite kit every 12h", "/ec anywhere", "Priority queue"] },
  { name: "LEGEND", price: 799, category: "ranks", featured: true,
    description: "Our most popular rank — the full experience.",
    perks: ["Everything in Elite", "Nickname colors", "/fly in lobbies", "3 crate keys monthly"] },
  { name: "IMMORTAL", price: 1299, category: "ranks", featured: false,
    description: "The ultimate flex on the network.",
    perks: ["Everything in Legend", "Animated prefix", "Custom join message", "Exclusive chat badge"] },

  /* ---------- CRATES ---------- */
  { name: "Vote Crate", price: 49, category: "crates", featured: false,
    description: "Everyday basics and handy supplies." },
  { name: "Rare Crate", price: 99, category: "crates", featured: false,
    description: "Guaranteed rare drops every spin." },
  { name: "Epic Crate", price: 149, category: "crates", featured: false,
    description: "High-tier loot for growing players." },
  { name: "Legendary Crate", price: 249, category: "crates", featured: true,
    description: "The best drops on the entire network." },

  /* ---------- COINS ---------- */
  { name: "1,000 Coins", price: 99, category: "coins", featured: false,
    description: "Starter pocket money for the shop." },
  { name: "5,500 Coins", price: 449, category: "coins", featured: true,
    description: "Includes a +10% bonus coin top-up." },
  { name: "12,000 Coins", price: 899, category: "coins", featured: false,
    description: "Includes a +15% bonus coin top-up." },
  { name: "26,000 Coins", price: 1599, category: "coins", featured: false,
    description: "+20% bonus — the best coin value." },

  /* ---------- KEYS ---------- */
  { name: "Rare Keys ×3", price: 129, category: "keys", featured: false,
    description: "Three spins of the Rare Crate." },
  { name: "Epic Keys ×3", price: 199, category: "keys", featured: false,
    description: "Three spins of the Epic Crate." },
  { name: "Legendary Keys ×3", price: 299, category: "keys", featured: true,
    description: "Three spins of the Legendary Crate." },

  /* ---------- BUNDLES ---------- */
  { name: "Starter Bundle", price: 199, category: "bundles", featured: true,
    description: "Everything a new player needs to jump ahead.",
    perks: ["VIP rank", "2,000 coins", "3 rare keys"] },
  { name: "Warrior Bundle", price: 599, category: "bundles", featured: false,
    description: "Gear up for the grind.",
    perks: ["MVP rank", "1 legendary crate", "5,500 coins"] },
  { name: "Ultimate Bundle", price: 1499, category: "bundles", featured: true,
    description: "The complete power package.",
    perks: ["LEGEND rank", "12,000 coins", "9 legendary keys"] },
];

/* ------------------------- WHY BUY FROM US ------------------------- */
const WHY_US = [
  { icon: "⚡", title: "Instant Delivery",  text: "Your perks activate automatically within minutes of payment — no waiting around." },
  { icon: "🛡️", title: "Secure Payments", text: "A trusted payment flow. We will never ask for your Minecraft password." },
  { icon: "❤️", title: "Support the Server", text: "Every single purchase keeps the network online, updated and lag-free." },
  { icon: "🎧", title: "24/7 Support",      text: "Friendly staff on Discord around the clock, whenever you need a hand." },
];

/* ------------------------- FAQ ------------------------- */
const FAQS = [
  { q: "How do I receive my purchase?",
    a: "Delivery is automatic. Once your payment is confirmed, your items are applied to your account within 5 minutes. If you are online, relog once to see them." },
  { q: "Which payment methods do you accept?",
    a: "We accept UPI, Paytm, debit/credit cards and more. Click Buy Now on any package and you will be guided through the payment steps." },
  { q: "Is it safe to buy? Will I get banned?",
    a: "Completely safe. Store items are server perks only — nothing that breaks Minecraft rules. We never ask for your password, only your in-game username." },
  { q: "What if I don't receive my items?",
    a: "Open a ticket on our Discord with your payment ID and username. Our team resolves delivery issues within 24 hours." },
  { q: "What is your refund policy?",
    a: "Digital goods are non-refundable once delivered. If a purchase genuinely fails to deliver and we cannot fix it, we will refund it — see the Terms of Service." },
  { q: "Are ranks permanent?",
    a: "Yes! All ranks are permanent unless the package clearly says seasonal. Crates, keys and coins never expire." },
];

/* ------------------------- CTA SECTION ------------------------- */
const CTA = {
  heading: "Ready to Rule the Network?",
  text: "Join thousands of players on Strike Network. Grab a rank, unlock crates and start your legend today.",
  primaryButton:   { label: "Visit Store",  href: "store.html" },
  secondaryButton: { label: "Join Discord", href: SITE.discordLink },
};

/* ------------------------- STORE PAGE ------------------------- */
const STORE = {
  heading: "Server Store",
  sub: "Every purchase is delivered instantly and directly supports the network.",
  note: "🛒 Payments & delivery are handled through our Discord ticket system — click <b>Buy Now</b> on any package to continue.",
};

/* ------------------------- FOOTER ------------------------- */
const FOOTER = {
  about: "Strike Network is the home of epic Minecraft gameplay — survival, lifesteal, minigames and more. Join thousands of players today.",
  quickLinks: [
    { label: "Home",  href: "index.html" },
    { label: "Store", href: "store.html" },
    { label: "FAQ",   href: "faq.html" },
    { label: "Terms of Service", href: "terms.html" },
    { label: "Privacy Policy",   href: "privacy.html" },
  ],
  socials: [                                        // EDIT HERE: your social links
    { label: "Discord",   href: SITE.discordLink },
    { label: "YouTube",   href: "#" },
    { label: "Instagram", href: "#" },
  ],
  copyright: "© {year} Strike Network. All rights reserved.",
  disclaimer: "Not an official Minecraft product. Not approved by or associated with Mojang or Microsoft.",
};
