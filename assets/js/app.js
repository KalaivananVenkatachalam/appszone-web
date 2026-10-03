/*
 * AppsZone — app detail page (app.html?slug=…).
 * Renders one app from data.js following spec §14–21: identity and download,
 * screenshots, what it does, features, how it works, product information and
 * install guidance, then the portfolio layer, FAQ and related apps.
 */
(function () {
  const { apps, websites } = window.APPSZONE_DATA;
  const { glyph, appIcon, device } = window.AppsZoneUI;
  const { $, $$, formatDate, monthYear, meta, appCard, setupHeader, setupCarouselDots, setupReveal } = window.AppsZoneSite;

  const main = $("[data-app-page]");
  const slug = new URLSearchParams(location.search).get("slug");
  const app = apps.find((a) => a.slug === slug);

  setupHeader();

  if (!app) {
    renderNotFound();
    setupReveal();
    return;
  }

  const website = app.websiteSlug ? websites.find((w) => w.slug === app.websiteSlug) : null;
  const pad = (n) => String(n).padStart(2, "0");
  const COUNT = ["zero", "one", "two", "three", "four", "five", "six"];

  // Real screenshots ({ src }) render as images; otherwise use the mock screen.
  const shot = (s) => (s.src ? `<img src="${s.src}" alt="${s.alt || ""}" loading="lazy">` : device(s.screen));

  const dlButton = (cls = "") => `
    <button type="button" class="btn btn-primary dl ${cls}" data-download data-state="idle">
      <span class="dl-icon">${glyph("download")}</span>
      <span class="dl-label">Download APK</span>
      <span class="dl-size">${app.apkSize}</span>
    </button>`;

  /* ---------- Sections ---------- */
  function hero() {
    const secondary = website
      ? `<a class="btn btn-secondary btn-lg" href="${website.url}" target="_blank" rel="noopener">Try the web version ${glyph("external")}</a>`
      : `<a class="btn btn-secondary btn-lg" href="how-to-install/">How to install</a>`;
    const [a, b] = app.screenshots;

    return `
      <section class="app-hero">
        <div class="container">
          <nav class="crumbs" aria-label="Breadcrumb">
            <a href="index.html">Home</a><span aria-hidden="true">/</span>
            <a href="index.html#apps">Apps</a><span aria-hidden="true">/</span>
            <span aria-current="page">${app.name}</span>
          </nav>
          <div class="app-hero-grid">
            <div class="app-id">
              <div class="rise" style="--i:0">${appIcon(app.icon, "app-icon--hero")}</div>
              <h1 class="app-title rise" style="--i:1">${app.name}</h1>
              <p class="app-sub rise" style="--i:2">${app.shortDescription}</p>
              <div class="rise" style="--i:3">${meta(["Android", app.category, "Free"])}</div>
              <div class="app-ctas rise" style="--i:4" data-hero-cta>${dlButton("btn-lg")}${secondary}</div>
              <p class="dl-note" data-dl-note hidden>${glyph("tick")}<span>Open the downloaded file to install it. <a class="text-link" href="how-to-install/">How to install</a></span></p>
              <dl class="app-facts rise" style="--i:5">
                <div><dt>Version</dt><dd>${app.version}</dd></div>
                <div><dt>Size</dt><dd>${app.apkSize}</dd></div>
                <div><dt>Updated</dt><dd>${formatDate(app.updatedDate)}</dd></div>
              </dl>
            </div>
            <div class="app-visual" aria-hidden="true">
              <div class="v-a rise" style="--i:2">${shot(a)}</div>
              ${b ? `<div class="v-b rise" style="--i:4">${shot(b)}</div>` : ""}
            </div>
          </div>
        </div>
      </section>`;
  }

  function gallery() {
    return `
      <section class="section section--gallery" aria-labelledby="shots-title">
        <div class="container">
          <h2 class="eyebrow" id="shots-title">Screenshots</h2>
          <div class="gallery stagger" style="--n:${app.screenshots.length}" data-gallery>
            ${app.screenshots
              .map((s, i) => `<figure class="shot" style="--i:${i}"><div class="shot-frame">${shot(s)}</div><figcaption>${s.caption}</figcaption></figure>`)
              .join("")}
          </div>
          <div class="carousel-dots" data-gallery-dots role="group" aria-label="Screenshots"></div>
        </div>
      </section>`;
  }

  function whatItDoes() {
    const cols = app.features.length <= 4 ? app.features.length : 3;
    return `
      <section class="section" aria-labelledby="what-title">
        <div class="container">
          <div class="what reveal">
            <div>
              <p class="eyebrow">What it does</p>
              <h2 class="h2" id="what-title">${app.headline}</h2>
            </div>
            <p class="what-text">${app.longDescription}</p>
          </div>
          <h3 class="eyebrow features-label reveal">Key features</h3>
          <div class="features stagger" style="--cols:${cols}">
            ${app.features
              .map((f, i) => `<div class="feature" style="--i:${i}"><span class="feature-icon">${glyph(f.glyph)}</span><h4>${f.title}</h4><p>${f.text}</p></div>`)
              .join("")}
          </div>
        </div>
      </section>`;
  }

  function howItWorks() {
    const steps = app.howItWorks;
    return `
      <section class="section" aria-labelledby="hiw-title">
        <div class="container">
          <div class="section-head reveal">
            <div>
              <p class="eyebrow">How it works</p>
              <h2 class="h2" id="hiw-title">${app.name} in ${COUNT[steps.length] || steps.length} steps.</h2>
            </div>
          </div>
          <ol class="hiw stagger">
            ${steps
              .map(
                (s, i) => `
                <li class="hiw-step" style="--i:${i}">
                  <div class="hiw-visual" aria-hidden="true">${device(s.screen)}</div>
                  <div class="hiw-body"><span class="hiw-num">${pad(i + 1)}</span><h3>${s.title}</h3><p>${s.text}</p></div>
                </li>`
              )
              .join("")}
          </ol>
        </div>
      </section>`;
  }

  function productInfo() {
    const rows = [
      ["Platform", app.platform],
      ["Version", app.version],
      ["Size", app.apkSize],
      ["Category", app.category],
      ["License", "Free"],
      ["Requires", app.minAndroid],
      ["Updated", app.updatedDate && monthYear(app.updatedDate)],
      ["Developer", app.developer],
      ["Privacy", app.privacyUrl && `<a class="text-link" href="${app.privacyUrl}">Privacy policy</a>`],
    ].filter(([, v]) => v); // only show values we actually have

    return `
      <section class="section" aria-labelledby="info-title">
        <div class="container info-grid">
          <div class="reveal">
            <p class="eyebrow">Details</p>
            <h2 class="h2" id="info-title">Product information</h2>
            <dl class="info-table">${rows.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}</dl>
          </div>
          <aside class="trust reveal" aria-labelledby="trust-title">
            <span class="trust-icon">${glyph("info")}</span>
            <h3 id="trust-title">Before you install</h3>
            <p>Download the APK only from sources you trust. Android may ask you to allow installation from the browser or file manager used to download the file.</p>
            <ol class="trust-steps">
              <li>Download the APK from this page</li>
              <li>Open the downloaded file</li>
              <li>Allow the install if asked, then tap Install</li>
            </ol>
            <a class="link-arrow" href="how-to-install/">Read the installation guide ${glyph("arrow")}</a>
          </aside>
        </div>
      </section>`;
  }

  // Portfolio layer — only for level 2+ products (§34), placed below the
  // core product experience so a normal visitor never has to read it.
  function behindTheProduct() {
    if (!app.level || app.level < 2) return "";
    const deep = app.level >= 3;
    const last = (app.process || []).length - 1;

    return `
      <section class="behind" id="behind" aria-labelledby="behind-title">
        <div class="container">
          <div class="section-head reveal">
            <div>
              <p class="eyebrow">Design notes</p>
              <h2 class="h2" id="behind-title">Behind the product</h2>
              <p class="section-desc">${deep ? "Why it exists, how it was designed and what I learned from shipping it." : "Why it exists and the decisions that shaped it."}</p>
            </div>
          </div>

          <div class="behind-trio stagger">
            ${[["Problem", app.problem], ["Goal", app.goal], ["Design approach", app.designApproach]]
              .filter(([, v]) => v)
              .map(([k, v], i) => `<div class="behind-item" style="--i:${i}"><h3>${k}</h3><p>${v}</p></div>`)
              .join("")}
          </div>

          ${deep && app.hypothesis ? `<figure class="hypothesis reveal"><figcaption>Design hypothesis</figcaption><blockquote>${app.hypothesis}</blockquote></figure>` : ""}

          ${
            app.designDecisions?.length
              ? `<h3 class="behind-sub reveal">Key decisions</h3>
                 <div class="decisions stagger" style="--cols:${Math.min(app.designDecisions.length, 3)}">
                   ${app.designDecisions
                     .map((d, i) => `<div class="decision" style="--i:${i}"><span class="decision-num">${pad(i + 1)}</span><h4>${d.title}</h4><p>${d.text}</p></div>`)
                     .join("")}
                 </div>`
              : ""
          }

          ${
            deep && app.process
              ? `<h3 class="behind-sub reveal">Design process</h3>
                 <ol class="dprocess reveal">
                   ${app.process
                     .map((p, i) => `<li${i === last ? ' class="is-current"' : ""}><span class="dp-dot"></span><small>${pad(i + 1)}</small><b>${p}</b>${i === last ? "<em>Ongoing</em>" : ""}</li>`)
                     .join("")}
                 </ol>`
              : ""
          }

          ${
            deep && (app.learnings || app.limitation)
              ? `<div class="learn-grid stagger">
                   ${app.learnings ? `<div class="learn" style="--i:0"><h3>What I learned</h3><p>${app.learnings}</p></div>` : ""}
                   ${app.limitation ? `<div class="learn" style="--i:1"><h3>Current limitation</h3><p>${app.limitation}</p></div>` : ""}
                 </div>`
              : ""
          }
        </div>
      </section>`;
  }

  function faq() {
    const items = [
      { q: `Is ${app.name} free?`, a: `Yes. ${app.name} is free to download and use.` },
      ...(app.faq || []),
      {
        q: "Why an APK instead of an app store?",
        a: "AppsZone products are distributed directly from this site. An APK is the standard Android app file, and it installs on any Android device that allows installs from your browser or file manager.",
      },
      { q: "How do I update the app?", a: "Download the latest version from this page and install it over the existing app." },
    ];
    return `
      <section class="section" aria-labelledby="faq-title">
        <div class="container faq-grid">
          <div class="reveal">
            <p class="eyebrow">FAQ</p>
            <h2 class="h2" id="faq-title">Questions</h2>
            <p class="section-desc">Need help installing? Read the <a class="text-link" href="how-to-install/">installation guide</a>.</p>
          </div>
          <div class="faq-list reveal">
            ${items.map((f) => `<details class="faq-item"><summary>${f.q}<span class="faq-icon" aria-hidden="true"></span></summary><p>${f.a}</p></details>`).join("")}
          </div>
        </div>
      </section>`;
  }

  function related() {
    const others = apps.filter((a) => a.slug !== app.slug);
    const picks = [...others.filter((a) => a.category === app.category), ...others.filter((a) => a.category !== app.category)].slice(0, 3);
    return `
      <section class="section" aria-labelledby="related-title">
        <div class="container">
          <div class="section-head reveal">
            <div>
              <p class="eyebrow">Related</p>
              <h2 class="h2" id="related-title">More from AppsZone</h2>
            </div>
            <a class="link-arrow" href="index.html#apps">View all apps ${glyph("arrow")}</a>
          </div>
          <div class="app-grid stagger">${picks.map(appCard).join("")}</div>
        </div>
      </section>`;
  }

  function renderNotFound() {
    document.title = "App not found — AppsZone";
    main.innerHTML = `
      <section class="section">
        <div class="container empty reveal">
          <p class="eyebrow">Not found</p>
          <h1 class="h2">We couldn't find that app.</h1>
          <p class="section-desc">It may have moved, or the link might be incomplete.</p>
          <a class="btn btn-primary btn-lg" href="index.html#apps">Browse all apps ${glyph("arrow")}</a>
        </div>
      </section>`;
  }

  /* ---------- Download: idle → downloading → done (spec §29) ---------- */
  function setupDownload() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const status = $("[data-dl-status]");
    const note = $("[data-dl-note]");
    let state = "idle";

    const LABEL = { idle: "Download APK", downloading: "Downloading…", done: "Downloaded" };

    const set = (next, progress = 0) => {
      state = next;
      $$("[data-download]").forEach((btn) => {
        btn.dataset.state = next;
        btn.style.setProperty("--p", progress);
        btn.setAttribute("aria-busy", String(next === "downloading"));
        btn.querySelector(".dl-label").textContent = LABEL[next];
        btn.querySelector(".dl-icon").innerHTML = glyph(next === "done" ? "tick" : "download");
      });
      if (note) note.hidden = next !== "done";
      if (status && next !== "idle") status.textContent = next === "done" ? `${app.name} download complete.` : `Downloading ${app.name}.`;
    };

    const start = () => {
      if (state === "downloading") return;
      // Placeholder URLs ("#") only demonstrate the interaction.
      if (app.apkUrl && app.apkUrl !== "#") {
        const a = document.createElement("a");
        a.href = app.apkUrl;
        a.download = "";
        document.body.append(a);
        a.click();
        a.remove();
      }
      if (reduceMotion) return set("done", 1);

      let p = 0;
      set("downloading", 0);
      const step = () => {
        p = Math.min(1, p + 0.06 + Math.random() * 0.1);
        set("downloading", p);
        if (p < 1) setTimeout(step, 110);
        else setTimeout(() => set("done", 1), 250);
      };
      setTimeout(step, 150);
    };

    $$("[data-download]").forEach((btn) => btn.addEventListener("click", start));
  }

  /* ---------- Sticky mobile download bar (spec §21) ---------- */
  function setupSticky() {
    const bar = $("[data-sticky]");
    const heroCta = $("[data-hero-cta]");
    if (!bar || !heroCta) return;

    bar.innerHTML = `
      ${appIcon(app.icon)}
      <span class="sticky-name"><b>${app.name}</b><small>${app.apkSize} · Android</small></span>
      ${dlButton()}`;
    document.body.classList.add("page-app");

    // Show the bar once the hero download button has scrolled out of view.
    new IntersectionObserver(([entry]) => {
      bar.classList.toggle("is-visible", !entry.isIntersecting && entry.boundingClientRect.top < 0);
    }).observe(heroCta);
  }

  /* ---------- Render ---------- */
  document.title = `${app.name} — Free Android app | AppsZone`;
  $('meta[name="description"]')?.setAttribute("content", app.shortDescription);

  main.style.setProperty("--brand", app.icon.color);
  main.style.setProperty("--tint", app.tint);
  main.innerHTML =
    hero() + gallery() + whatItDoes() + howItWorks() + productInfo() + behindTheProduct() + faq() + related() +
    '<p class="sr-only" aria-live="polite" data-dl-status></p>';

  setupSticky();
  setupDownload();
  setupCarouselDots($("[data-gallery]"), $("[data-gallery-dots]"), app.screenshots.map((s) => s.caption));
  setupReveal();

  // Content renders after load, so honour deep links (e.g. #behind) once it exists.
  if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView();
})();
