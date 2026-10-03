/*
 * AppsZone — homepage.
 * Fills product visuals from data.js and runs the scroll story: one small
 * engine writes each section's scroll progress to --p, and home.css turns
 * that into motion. Steps (story, principles, process) switch with
 * IntersectionObserver. Shared behaviour lives in site.js.
 */
(function () {
  const { apps, websites } = window.APPSZONE_DATA;
  const { glyph, appIcon, device, screens } = window.AppsZoneUI;
  const { $, $$, appHref, setupHeader, setupReveal } = window.AppsZoneSite;

  const root = document.documentElement;
  const motion = root.classList.contains("motion");
  const bySlug = (list, slug) => list.find((p) => p.slug === slug);
  const rk = bySlug(apps, "receipt-keeper");

  const screenOf = (p) => p.screen || p.screenshots?.[0]?.screen;
  const isBrowser = (key) => screens[key]?.type === "browser";
  // Placeholder URLs ("#") stay in this tab; real ones open a new tab.
  const ext = (url) => (url && url !== "#" ? ' target="_blank" rel="noopener"' : "");

  /* ---------- Placeholders: devices and glyphs ---------- */
  function fillPlaceholders() {
    $$("[data-device]").forEach((el) => { el.innerHTML = device(el.dataset.device); });
    $$("[data-glyph]").forEach((el) => { el.innerHTML = glyph(el.dataset.glyph); });
    const meta = $("[data-rk-meta]");
    if (meta) meta.textContent = `Free · Android · ${rk.apkSize}`;
  }

  /* ---------- 02 · Collection: composition offsets per card ---------- */
  function renderCollection() {
    const grid = $("[data-collection]");
    if (!grid) return;
    const items = [
      { p: bySlug(websites, "html-to-figma"), web: true, dx: "18%", dy: "-14%", r: "-5deg", ds: 0 },
      { p: bySlug(apps, "fair-share"), web: false, dx: "0%", dy: "8%", r: "3deg", ds: 0.06 },
      { p: bySlug(websites, "free-compressor"), web: true, dx: "-18%", dy: "22%", r: "-2deg", ds: 0 },
    ];
    grid.innerHTML = items
      .map(({ p, web, dx, dy, r, ds }) => {
        const key = screenOf(p);
        const href = web ? p.url : appHref(p);
        return `
          <article class="col-card" style="--dx:${dx};--dy:${dy};--r:${r};--ds:${ds}">
            <div class="col-visual${isBrowser(key) ? " is-browser" : ""}" style="--tint:${p.tint}">${device(key)}</div>
            <div class="col-info">
              <span class="col-kind">${web ? "Website" : "Android app"}</span>
              <h3><a class="stretched" href="${href}"${web ? ext(p.url) : ""}>${p.name}</a></h3>
              <p>${p.shortDescription}</p>
              <span class="link-arrow" aria-hidden="true">${web ? "Visit" : "Explore"} ${glyph(web ? "external" : "arrow")}</span>
            </div>
          </article>`;
      })
      .join("");
  }

  /* ---------- 05 · Rail with All / Apps / Websites ---------- */
  function setupRail() {
    const rail = $("[data-rail]");
    if (!rail) return { setFilter: () => {} };
    const prev = $("[data-rail-prev]");
    const next = $("[data-rail-next]");
    const status = $("[data-rail-status]");

    // Interleave apps and websites so the rail alternates phone and browser visuals.
    const appItems = apps.filter((a) => a.slug !== rk.slug);
    const items = [];
    for (let i = 0; i < Math.max(appItems.length, websites.length); i++) {
      if (appItems[i]) items.push({ ...appItems[i], type: "apps" });
      if (websites[i]) items.push({ ...websites[i], type: "websites" });
    }

    rail.innerHTML = items
      .map((p) => {
        const key = screenOf(p);
        const web = p.type === "websites";
        return `
          <article class="rc-card" data-type="${p.type}">
            <div class="rc-visual${isBrowser(key) ? " is-browser" : ""}" style="--tint:${p.tint}">${device(key)}</div>
            <div class="rc-info">
              <h3><a class="stretched" href="${web ? p.url : appHref(p)}"${web ? ext(p.url) : ""}>${p.name}</a></h3>
              <span class="rc-meta">${web ? "Web" : "Android"} · ${p.category}</span>
              <p>${p.shortDescription}</p>
              <span class="link-arrow" aria-hidden="true">${web ? "Visit" : "Explore"} ${glyph(web ? "external" : "arrow")}</span>
            </div>
          </article>`;
      })
      .join("");

    const updateArrows = () => {
      if (!prev || !next) return;
      prev.disabled = rail.scrollLeft < 8;
      next.disabled = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 8;
    };
    const step = () => ($(".rc-card:not([hidden])", rail)?.offsetWidth || 320) + 16;
    prev?.addEventListener("click", () => rail.scrollBy({ left: -step(), behavior: "smooth" }));
    next?.addEventListener("click", () => rail.scrollBy({ left: step(), behavior: "smooth" }));
    rail.addEventListener("scroll", () => requestAnimationFrame(updateArrows), { passive: true });

    const LABEL = { all: "products", apps: "apps", websites: "websites" };
    const setFilter = (filter) => {
      $$("[data-seg] button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.filter === filter)));
      let shown = 0;
      $$(".rc-card", rail).forEach((card) => {
        const match = filter === "all" || card.dataset.type === filter;
        card.hidden = !match;
        if (match) shown++;
      });
      rail.scrollTo({ left: 0, behavior: "instant" });
      if (status) status.textContent = `Showing ${shown} ${LABEL[filter]}.`;
      updateArrows();
    };

    $$("[data-seg] button").forEach((b) => b.addEventListener("click", () => setFilter(b.dataset.filter)));
    $$("[data-filter-link]").forEach((a) => a.addEventListener("click", () => setFilter(a.dataset.filterLink)));
    updateArrows();
    return { setFilter };
  }

  /* ---------- 07 · Principle visuals ---------- */
  const VISUALS = {
    understand() {
      const node = (x, y, w, label, i, cls = "") =>
        `<g class="node ${cls}" style="--i:${i}"><rect x="${x}" y="${y}" width="${w}" height="40" rx="20"/><text x="${x + w / 2}" y="${y + 20}">${label}</text></g>`;
      const edge = (d, i, cls = "") => `<path class="edge ${cls}" pathLength="1" d="${d}" style="--i:${i}"/>`;
      return `
        <div class="vz vz-understand">
          <svg class="vz-flow" viewBox="0 0 480 440" role="img" aria-label="Problem map: paper receipts fade or get lost, so return windows are missed. Insight: capture the receipt at the till.">
            ${edge("M240 50V84", 1)}
            ${edge("M240 124v20H110v20", 2)}${edge("M240 124v20h130v20", 2)}
            ${edge("M110 204v36", 3)}${edge("M370 204v36", 3)}
            ${edge("M110 280v18h130v18", 4)}${edge("M370 280v18H240v18", 4)}
            ${edge("M240 356v36", 5, "idea")}
            ${node(165, 10, 150, "Buy something", 0)}
            ${node(140, 84, 200, "Get a paper receipt", 1)}
            ${node(20, 164, 180, "Kept in a wallet", 2)}${node(280, 164, 180, "Put in a drawer", 2)}
            ${node(20, 240, 180, "The ink fades", 3)}${node(280, 240, 180, "Can't find it", 3)}
            ${node(115, 316, 250, "Return window missed", 4, "warn")}
            ${node(95, 392, 290, "Insight: capture it at the till", 5, "idea")}
          </svg>
        </div>`;
    },
    simplify() {
      let i = 0;
      const n = (count, tag = "i", inner = "") =>
        Array.from({ length: count }, () => `<${tag} class="n" style="--i:${i++}">${inner}</${tag}>`).join("");
      return `
        <div class="vz vz-simplify" role="img" aria-label="A cluttered screen full of fields and buttons dissolves into one clear card: Northside Tech, $129.00, return by October 12.">
          <div class="vm">
            <div class="vm-bar">${n(7)}</div>
            <div class="vm-tabs">${n(5)}</div>
            <div class="vm-fields">${n(6, "span", "<b></b><i></i>")}</div>
            <div class="vm-banner n" style="--i:${i++}"></div>
            <div class="vm-actions">${n(3)}</div>
          </div>
          <div class="vc">
            <span class="vc-kicker">Return by Oct 12</span>
            <b>Northside Tech</b>
            <span class="vc-amount">$129.00</span>
            <span class="vc-bar"><i></i></span>
            <span class="vc-note">13 days left</span>
          </div>
        </div>`;
    },
    build() {
      return `
        <div class="vz vz-build" role="img" aria-label="The same screen as a wireframe, then a clickable prototype, then the finished Receipt Keeper app.">
          <div class="vb-phone">
            <div class="vb-layer">${device("wireframe")}</div>
            <div class="vb-layer"><span class="vb-hot" style="left:78%;top:88%"></span><span class="vb-hot" style="left:50%;top:54%"></span></div>
            <div class="vb-layer vb-product">${device("receipt-keeper")}</div>
          </div>
          <ol class="vb-steps"><li>Design</li><li>Prototype</li><li>Product</li></ol>
        </div>`;
    },
  };

  function renderVisuals() {
    $$("[data-visual]").forEach((el) => { el.innerHTML = VISUALS[el.dataset.visual](); });
  }

  /* ---------- Steps: one active step drives the sticky visual ---------- */
  function stepper(container, stepSel, screenSel, dotSel) {
    if (!container) return;
    const steps = $$(stepSel, container);
    const shots = $$(screenSel, container);
    const dots = dotSel ? $$(dotSel, container) : [];
    const set = (i) => {
      steps.forEach((s, k) => s.classList.toggle("is-active", k === i));
      shots.forEach((s, k) => s.classList.toggle("is-active", k === i));
      dots.forEach((d, k) => d.classList.toggle("is-active", k === i));
    };
    set(0);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && set(Number(e.target.dataset.step))),
      { rootMargin: "-45% 0px -45% 0px" }
    );
    steps.forEach((s) => io.observe(s));
  }

  // Inline visuals (mobile) animate when they come into view.
  function observeInline(sel) {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("is-active", e.isIntersecting)),
      { threshold: 0.35 }
    );
    $$(sel).forEach((el) => io.observe(el));
  }

  /* ---------- 06 · Apps vs websites: the active side tints the section ---------- */
  function setupSplit() {
    const split = $("[data-split]");
    if (!split) return;
    const panels = $$("[data-panel]", split);
    const set = (v) => { split.dataset.active = v; };
    panels.forEach((p) => {
      p.addEventListener("pointerenter", (e) => e.pointerType === "mouse" && set(p.dataset.panel));
      p.addEventListener("focusin", () => set(p.dataset.panel));
    });
    split.addEventListener("pointerleave", (e) => e.pointerType === "mouse" && set(""));

    // Touch and narrow screens: follow whichever panel is in the middle of the screen.
    const touchLike = window.matchMedia("(hover: none), (max-width: 899px)");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => touchLike.matches && e.isIntersecting && set(e.target.dataset.panel)),
      { rootMargin: "-40% 0px -40% 0px" }
    );
    panels.forEach((p) => io.observe(p));
  }

  /* ---------- 10 · Word-by-word reveal ---------- */
  function splitWords() {
    const h = $("[data-words]");
    if (!h) return;
    let i = 0;
    $$(":scope > span", h).forEach((line) => {
      line.innerHTML = line.textContent
        .trim()
        .split(/\s+/)
        .map((w) => `<span class="w" style="--i:${i++}">${w}</span>`)
        .join(" ");
    });
    h.style.setProperty("--n", i);
  }

  /* ---------- Scroll engine ---------- */
  function setupScroll() {
    const tracked = $$("[data-progress]").map((el) => ({
      el,
      type: el.dataset.progress,
      start: parseFloat(el.dataset.start ?? "1"),
      end: parseFloat(el.dataset.end ?? "0"),
      p: -1,
    }));
    const hero = $(".hero");
    const heroSticky = $(".hero-sticky");
    const ft = $(".ft");
    const caseSec = $("[data-case]");
    const caseTrack = $("[data-case-track]");
    const stages = $$(".proc-stage");
    const chapter = $("[data-story-chapter]");
    const pill = $("[data-story-pill]");
    const desktop = window.matchMedia("(min-width: 900px)");
    let vh = window.innerHeight;
    let queued = false;

    if (pill) pill.innerHTML = `${appIcon(rk.icon)}<span class="sp-name">${rk.name}</span><span class="sp-cta">Explore ${glyph("arrow")}</span>`;

    const progress = (t, r) => {
      if (t.type === "pin") return -r.top / Math.max(1, r.height - vh);
      if (t.type === "view") return (t.start * vh - r.top) / Math.max(1, (t.start - t.end) * vh);
      return (vh * 0.55 - r.top) / Math.max(1, r.height); // "line"
    };

    const HOOKS = new Map([
      [hero, (p) => hero.classList.toggle("is-past", p > 0.25)],
      [ft, (p) => ft.classList.toggle("is-cta", p > 0.8)],
    ]);

    function frame() {
      queued = false;
      for (const t of tracked) {
        const r = t.el.getBoundingClientRect();
        if (r.bottom < -vh * 0.5 || r.top > vh * 1.5) continue; // off screen: leave as is
        const p = Math.min(1, Math.max(0, progress(t, r)));
        if (Math.abs(p - t.p) < 0.0005) continue;
        t.p = p;
        t.el.style.setProperty("--p", p.toFixed(4));
        HOOKS.get(t.el)?.(p);
      }

      // Process: every stage above the reading line is lit.
      stages.forEach((s) => s.classList.toggle("is-on", s.getBoundingClientRect().top + 38 < vh * 0.55));

      // Mobile story pill: while the Receipt Keeper chapter fills the screen.
      if (chapter && pill) {
        const r = chapter.getBoundingClientRect();
        const show = !desktop.matches && r.top < vh * 0.4 && r.bottom > vh * 0.95;
        if (show !== pill.classList.contains("is-visible")) {
          pill.classList.toggle("is-visible", show);
          pill.setAttribute("aria-hidden", String(!show));
          pill.tabIndex = show ? 0 : -1;
        }
      }
    }

    const queue = () => {
      if (!queued) {
        queued = true;
        requestAnimationFrame(frame);
      }
    };

    function measure() {
      vh = window.innerHeight;

      // Hero: start the product stage just below the copy, so nothing overlaps.
      if (motion && hero && heroSticky) {
        const copy = $(".hero-copy");
        const ctas = $(".hero-ctas");
        const stage = $(".hero-stage");
        const center = $(".hs-c");
        const s0 = parseFloat(getComputedStyle(hero).getPropertyValue("--s0")) || 0.84;
        const stickyH = heroSticky.offsetHeight;
        const copyBottom = copy.offsetTop + ctas.offsetTop + ctas.offsetHeight;
        const phoneTop = stickyH - s0 * (stage.offsetHeight - center.offsetTop);
        const drop = Math.min(copyBottom + 36 - phoneTop, stickyH * 0.86 - phoneTop);
        hero.style.setProperty("--drop", `${Math.max(0, drop)}px`);
      }

      // Case study: pinned height equals the sideways distance to travel.
      if (caseSec && caseTrack) {
        if (motion && desktop.matches) {
          const last = caseTrack.lastElementChild;
          const padR = parseFloat(getComputedStyle(caseTrack).paddingRight) || 0;
          const dist = Math.max(0, last.offsetLeft + last.offsetWidth + padR - caseTrack.clientWidth);
          caseSec.style.setProperty("--dist", dist);
          caseSec.style.height = `${$(".case-sticky").offsetHeight + dist}px`;
        } else {
          caseSec.style.removeProperty("height");
          caseSec.style.setProperty("--dist", 0);
        }
      }

      tracked.forEach((t) => { t.p = -1; });
      queue();
    }

    let resizeTimer = 0;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(measure, 120);
    });
    window.addEventListener("scroll", queue, { passive: true });
    document.fonts?.ready.then(measure);
    measure();
  }

  /* ---------- Hash aliases (links from other pages) ---------- */
  function handleHash(rail) {
    const ALIAS = { "#apps": ["more", "apps"], "#websites": ["more", "websites"], "#about": ["person"], "#how": ["thinking"] };
    const go = () => {
      const alias = ALIAS[location.hash];
      if (!alias) return;
      if (alias[1]) rail.setFilter(alias[1]);
      document.getElementById(alias[0])?.scrollIntoView();
    };
    window.addEventListener("hashchange", go);
    go();
  }

  fillPlaceholders();
  renderCollection();
  renderVisuals();
  splitWords();
  const rail = setupRail();
  stepper($("[data-story]"), ".story-step", ".story-screen", ".story-dots li");
  stepper($("[data-think]"), ".think-step", ".think-visual");
  observeInline(".think-inline");
  setupSplit();
  setupHeader();
  setupReveal();
  setupScroll();
  handleHash(rail);
})();
