/*
 * AppsZone — helpers shared by every page: formatting, links, the app card,
 * header behaviour, carousel dots and entry motion.
 */
(function () {
  const { glyph, appIcon } = window.AppsZoneUI;

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const appHref = (app) => `app.html?slug=${app.slug}`;
  const siteHref = (site) => `websites/${site.slug}/`;
  const plural = (n, word) => `${n} ${word}${n === 1 ? "" : "s"}`;

  const formatDate = (iso, opts = { year: "numeric" }) =>
    new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", { month: "short", day: "numeric", ...opts });
  const shortDate = (iso) => formatDate(iso, {});
  const monthYear = (iso) => new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", { month: "long", year: "numeric" });

  const meta = (items) => `<span class="meta">${items.map((i) => `<span>${i}</span>`).join("")}</span>`;

  const TYPE_GLYPH = {
    App: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><rect x="6.5" y="3" width="11" height="18" rx="2.5"/><path d="M10.5 18h3"/></svg>',
    Website: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.4 2.4 3.5 5.3 3.5 8.5s-1.1 6.1-3.5 8.5c-2.4-2.4-3.5-5.3-3.5-8.5S9.6 5.9 12 3.5z"/></svg>',
  };

  function appCard(a, i = 0) {
    return `
      <article class="app-card" data-category="${a.category}" style="--i:${i}">
        ${appIcon(a.icon, "app-icon--lg")}
        <h3><a class="stretched" href="${appHref(a)}">${a.name}</a></h3>
        <p>${a.shortDescription}</p>
        <div class="app-foot">
          ${meta(["Android", a.category])}
          <span class="link-arrow" aria-hidden="true">View app ${glyph("arrow")}</span>
        </div>
      </article>`;
  }

  /* ---------- Header: scroll state + mobile menu ---------- */
  function setupHeader() {
    const header = $("[data-header]");
    const toggle = $("[data-menu-toggle]");
    const menu = $("[data-menu]");
    if (!header) return;

    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    if (!toggle || !menu) return;

    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      menu.hidden = !open;
      header.classList.toggle("is-open", open);
    };

    toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
    menu.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !menu.hidden) { setOpen(false); toggle.focus(); }
    });
    document.addEventListener("click", (e) => {
      if (!menu.hidden && !header.contains(e.target)) setOpen(false);
    });
    window.matchMedia("(min-width: 900px)").addEventListener("change", (e) => { if (e.matches) setOpen(false); });
  }

  /* ---------- Carousel dots for mobile swipe rows ---------- */
  function setupCarouselDots(track, dotsEl, labels) {
    if (!track || !dotsEl) return;
    dotsEl.innerHTML = labels
      .map((name, i) => `<button type="button" aria-label="Show ${name}" ${i === 0 ? 'aria-current="true"' : ""}></button>`)
      .join("");
    const dots = $$("button", dotsEl);
    const cards = Array.from(track.children);

    dots.forEach((dot, i) =>
      dot.addEventListener("click", () => {
        const pad = parseFloat(getComputedStyle(track).paddingLeft) || 0;
        track.scrollTo({ left: cards[i].offsetLeft - pad, behavior: "smooth" });
      })
    );

    let raf = 0;
    track.addEventListener(
      "scroll",
      () => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          const center = track.scrollLeft + track.clientWidth / 2;
          let active = 0;
          let best = Infinity;
          cards.forEach((card, i) => {
            const d = Math.abs(card.offsetLeft + card.offsetWidth / 2 - center);
            if (d < best) { best = d; active = i; }
          });
          dots.forEach((dot, i) => dot.toggleAttribute("aria-current", i === active));
          dots[active].setAttribute("aria-current", "true");
        });
      },
      { passive: true }
    );
  }

  /* ---------- Entry motion ---------- */
  function setupReveal() {
    const targets = $$(".reveal, .stagger");
    if (!("IntersectionObserver" in window)) {
      targets.forEach((t) => t.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    targets.forEach((t) => io.observe(t));
  }

  window.AppsZoneSite = {
    $, $$, appHref, siteHref, plural, formatDate, shortDate, monthYear, meta, TYPE_GLYPH,
    appCard, setupHeader, setupCarouselDots, setupReveal,
  };
})();
