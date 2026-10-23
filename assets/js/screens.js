/*
 * AppsZone — icons and placeholder product screens.
 *
 * The mock screens stand in for real screenshots (spec: "Visual proof").
 * Once real images exist, add them with `shot()` (images live in assets/img/):
 * they render inside the same .device wrapper, so the layouts keep working.
 */
(function () {
  const GLYPHS = {
    // Product glyphs
    compress: '<rect x="3.5" y="3.5" width="17" height="17" rx="4"/><path d="M9 3.5V7a2 2 0 0 1-2 2H3.5M15 20.5V17a2 2 0 0 1 2-2h3.5"/>',
    minimize: '<path d="M4.5 14.5h5v5M19.5 9.5h-5v-5M14.5 9.5l6-6M3.5 20.5l6-6"/>',
    shield: '<path d="M12 3.5 5 6.3v5.2c0 4.3 2.9 7.9 7 9 4.1-1.1 7-4.7 7-9V6.3z"/><path d="m9.2 12.1 2 2 3.8-4"/>',
    ticket: '<path d="M3.5 9V6.5a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1V9a2.5 2.5 0 0 0 0 5v2.5a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1V14a2.5 2.5 0 0 0 0-5z"/><path d="M14.5 5.5v2M14.5 10.5v2.5M14.5 16v1.5"/>',
    leaf: '<path d="M19.5 4.5C11 4.5 5.5 9 5.5 15.5c0 1.5.4 2.8 1.2 3.8C13.6 19 19.5 14 19.5 4.5z"/><path d="M4 20.5c3-4.4 6.4-7.7 10.5-10"/>',
    // Interface glyphs
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    external: '<path d="M7.5 16.5 16.5 7.5M9 7.5h7.5V15"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/>',
    upload: '<path d="M12 15.5V4.5M7.5 9 12 4.5 16.5 9M5 15v3.5a1.5 1.5 0 0 0 1.5 1.5h11a1.5 1.5 0 0 0 1.5-1.5V15"/>',
    lock: '<rect x="5.5" y="10.5" width="13" height="10" rx="2"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"/>',
    chevronLeft: '<path d="m14.5 6-6 6 6 6"/>',
    // Feature + detail page glyphs
    focus: '<circle cx="12" cy="12" r="3"/><path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2"/>',
    play: '<path d="M8 5.5v13l10.5-6.5z"/>',
    sound: '<path d="M4 10v4M8 7v10M12 4v16M16 8v8M20 11v2"/>',
    layers: '<path d="m12 4 8.5 4.5L12 13 3.5 8.5z"/><path d="m3.5 12.5 8.5 4.5 8.5-4.5M3.5 16.5 12 21l8.5-4.5"/>',
    eye: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',
    copy: '<rect x="8.5" y="8.5" width="11.5" height="11.5" rx="2.5"/><path d="M15.5 8.5V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7.5a2 2 0 0 0 2 2h2.5"/>',
    fileType: '<path d="M14 3.5H7.5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V8z"/><path d="M14 3.5V8h4.5M9 13h6M12 13v5"/>',
    bell: '<path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 2h-15z"/><path d="M10 20.5h4"/>',
    offline: '<path d="M3.5 3.5l17 17M8.5 16.2a5 5 0 0 1 7 0M5.2 12.6a10 10 0 0 1 4-2.4M14.8 10.2a10 10 0 0 1 4 2.4M2 9a15 15 0 0 1 4-2.6M10.5 5.1A15 15 0 0 1 22 9"/>',
    download: '<path d="M12 4.5v11M7.5 11 12 15.5 16.5 11M5 19.5h14"/>',
    info: '<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5.5M12 7.8v.2"/>',
    close: '<path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/>',
    share: '<path d="M12 15V4M8 7.5 12 3.5l4 4M6 11v7.5a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5V11"/>',
    more: '<circle cx="5.5" cy="12" r="1" fill="currentColor"/><circle cx="12" cy="12" r="1" fill="currentColor"/><circle cx="18.5" cy="12" r="1" fill="currentColor"/>',
    chevronRight: '<path d="m9.5 6 6 6-6 6"/>',
    tick: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6 7 7M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4"/>',
    palette: '<path d="M12 3.5a8.5 8.5 0 1 0 0 17c1.2 0 1.8-.9 1.5-1.9l-.4-1.2a1.6 1.6 0 0 1 1.5-2.1h2.1a3.8 3.8 0 0 0 3.8-3.8C20.5 7 16.7 3.5 12 3.5z"/><circle cx="7.8" cy="11" r=".9" fill="currentColor"/><circle cx="10.5" cy="7.3" r=".9" fill="currentColor"/><circle cx="15" cy="7.8" r=".9" fill="currentColor"/>',
    pointer: '<path d="m5 4 5.5 15 2.2-6.3L19 10.5z"/>',
    refresh: '<path d="M19.5 12a7.5 7.5 0 0 1-13.1 5M4.5 12a7.5 7.5 0 0 1 13.1-5"/><path d="M17.8 3.5V7h-3.5M6.2 20.5V17h3.5"/>',
    type: '<path d="M5 7V5h14v2M12 5v14M9 19h6"/>',
    target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r=".6" fill="currentColor"/>',
  };

  function glyph(name, extra = "") {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${GLYPHS[name] || ""}</svg>`;
  }

  function appIcon(icon, cls = "") {
    return `<span class="app-icon ${cls}" style="--icon:${icon.color}" aria-hidden="true">${glyph(icon.glyph)}</span>`;
  }

  const statusBar = `
    <div class="sb">
      <span class="sb-time">9:41</span>
      <span class="sb-cam"></span>
      <svg class="sb-icons" viewBox="0 0 46 12" fill="currentColor" aria-hidden="true">
        <path d="M1 9h2v2H1zM5 7h2v4H5zM9 5h2v6H9zM13 3h2v8h-2z"/>
        <path d="M22 4.6a9 9 0 0 1 11 0l-1.5 1.6a6.8 6.8 0 0 0-8 0zM24.6 7.4a5 5 0 0 1 5.8 0L27.5 10.4z"/>
        <rect x="36.5" y="2.5" width="8.5" height="7" rx="1.8" opacity=".35"/>
        <rect x="36.5" y="2.5" width="6" height="7" rx="1.8"/>
      </svg>
    </div>`;

  const gesture = '<span class="gesture"></span>';

  // A real screenshot in the phone frame. The image carries its own status bar, so only the
  // camera is drawn on top (and the gesture bar, unless the image already has one).
  const shot = (file, label, { withGesture = false } = {}) => ({
    type: "phone",
    label,
    html: `
      <div class="phone-screen shot-screen">
        <img src="assets/img/${file}" alt="" decoding="async">
        <span class="sb-cam"></span>
        ${withGesture ? gesture : ""}
      </div>`,
  });

  const SCREENS = {
    /* MK Player: screenshots of the app's light theme, from its UI screen reference */
    "mk-player": shot("mk-player-folders.webp", "MK Player Folders tab: every folder with a video, a pinned Movies folder and a Continue watching pill"),
    "mk-videos": shot("mk-player-videos.webp", "MK Player Videos tab as a grid, with 4K and NEW flags and watch progress"),
    "mk-music": shot("mk-player-music.webp", "MK Player Music tab with songs, favourites and the mini player"),
    "mk-play": shot("mk-player-player.webp", "MK Player video player with speed, subtitles and repeat on, an audio delay and a sleep timer"),
    "mk-hidden": shot("mk-player-hidden.webp", "MK Player Hidden videos, locked behind a PIN or fingerprint"),

    echolife: shot("echolife-home.webp", "Echolife app home screen with eco-friendly product categories and suggestions", { withGesture: true }),
    "event-ease": shot("event-ease-home.webp", "Event Ease app home screen with featured events, categories and trending shows", { withGesture: true }),

    "html-to-figma": {
      type: "browser",
      url: "htmltofigma.in",
      label: "HTML to Figma website turning a pasted HTML card into editable Figma layers",
      html: `
        <div class="browser-page hf">
          <div class="hf-nav">
            <span class="hf-logo">
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="2.5" width="12" height="12" rx="3" opacity=".28"/><rect x="6" y="6" width="12" height="12" rx="3" opacity=".58"/><rect x="9.5" y="9.5" width="12" height="12" rx="3"/></svg>
              <span>HTML <em>to</em> Figma</span>
            </span>
            <span class="hf-links"><span>Product</span><span>How it works</span><span>Help</span></span>
            <span class="hf-btn">Get started</span>
          </div>
          <div class="hf-body">
            <div class="hf-copy">
              <span class="hf-eyebrow">HTML importer for Figma</span>
              <span class="hf-title">Turn HTML into editable Figma layers</span>
              <span class="hf-text">Paste HTML or drop a file. Get frames, text, components and styles on your canvas.</span>
              <span class="hf-cta">Get started free ${glyph("arrow")}</span>
              <span class="hf-note">Free during early access</span>
            </div>
            <div class="hf-stage">
              <div class="hf-code">
                <span class="hf-code-bar"><i></i><i></i><i></i>card.html</span>
                <span class="hf-line"><span class="hf-t">&lt;style&gt;</span></span>
                <span class="hf-line in">.card { <span class="hf-k">radius</span>: <span class="hf-v">16px</span> }</span>
                <span class="hf-line"><span class="hf-t">&lt;/style&gt;</span></span>
                <span class="hf-line"><span class="hf-t">&lt;div</span> <span class="hf-k">class</span>=<span class="hf-v">"card"</span><span class="hf-t">&gt;</span></span>
                <span class="hf-line in"><span class="hf-t">&lt;img</span> <span class="hf-k">src</span>=<span class="hf-v">"ananya.jpg"</span><span class="hf-t">&gt;</span></span>
                <span class="hf-line in"><span class="hf-t">&lt;h3&gt;</span>Ananya Rao<span class="hf-t">&lt;/h3&gt;</span></span>
                <span class="hf-line in"><span class="hf-t">&lt;p&gt;</span>Product designer<span class="hf-t">&lt;/p&gt;</span></span>
                <span class="hf-line"><span class="hf-t">&lt;/div&gt;</span></span>
              </div>
              <div class="hf-canvas">
                <span class="hf-canvas-bar">Your canvas</span>
                <div class="hf-frame">
                  <span class="hf-tag">card</span>
                  <span class="hf-avatar"></span>
                  <b>Ananya Rao</b>
                  <small>Product designer</small>
                  <span class="hf-chips"><i>UX</i><i>UI</i><i>Systems</i></span>
                  <i class="hf-h tl"></i><i class="hf-h tr"></i><i class="hf-h bl"></i><i class="hf-h br"></i>
                </div>
              </div>
            </div>
          </div>
        </div>`,
    },

    "docs-to-design": {
      type: "browser",
      url: "docstodesign.in",
      label: "Docs to Design website importing a PDF into Figma as editable layers",
      html: `
        <div class="browser-page dd">
          <div class="dd-nav">
            <span class="dd-logo">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.5 2.5h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3z" opacity=".28"/><path d="M10.5 6h5.25v3.75a2 2 0 0 0 2 2h3.75v6.75a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3z"/><path d="M16.75 6l4.75 4.75h-2.75a2 2 0 0 1-2-2z" opacity=".58"/></svg>
              <span>Docs to <em>Design</em></span>
            </span>
            <span class="dd-links"><span>How it works</span><span>Features</span><span>Pricing</span></span>
            <span class="dd-btn">Get started</span>
          </div>
          <div class="dd-body">
            <div class="dd-copy">
              <span class="dd-pill">Early access · Figma plugin</span>
              <span class="dd-title">Turn any Docs into <em>editable Figma layers.</em></span>
              <span class="dd-text">Bring a PDF, PowerPoint or Word file into Figma and keep designing.</span>
              <span class="dd-cta">Get started free ${glyph("arrow")}</span>
              <span class="dd-note">${glyph("lock")}Your documents never leave your computer</span>
            </div>
            <div class="dd-stage">
              <div class="dd-doc">
                <span class="dd-doc-tag">PDF</span>
                <i class="w60"></i><i class="w40"></i>
                <span class="dd-doc-img"></span>
                <i></i><i class="w80"></i><i class="w50"></i>
              </div>
              <div class="dd-plugin">
                <span class="dd-plugin-bar"><b>Docs to Design</b><span class="dd-tabs"><i class="on">Import</i><i>Export</i></span></span>
                <span class="dd-file"><span class="dd-file-ico">PDF</span><span class="dd-file-meta"><b>brand-guidelines.pdf</b><small>3 pages · 2.4 MB</small></span></span>
                <span class="dd-seg"><i class="on">Editable</i><i>Outlines</i><i>Image</i></span>
                <span class="dd-import">Import 3 pages</span>
              </div>
              <span class="dd-result">${glyph("tick")}24 text layers</span>
            </div>
          </div>
        </div>`,
    },

    "free-compressor": {
      type: "browser",
      url: "freecompressor.online",
      label: "FreeCompressor website compressing images in the browser",
      html: `
        <div class="browser-page fc">
          <div class="fc-nav">
            <span class="fc-logo">
              <i><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M9 12l4 4-4 4M23 12l-4 4 4 4"/><path class="bar" d="M16 10v12"/></svg></i>
              <span>Free<em>Compressor</em></span>
            </span>
            <span class="fc-links"><span>Tools</span><span>Blog</span><span>Roadmap</span></span>
            <span class="fc-btn">Compress Now</span>
          </div>
          <div class="fc-body">
            <div class="fc-copy">
              <span class="fc-pill">✦ 100% free · no sign-up · no limits</span>
              <span class="fc-title">Compress Files Instantly — <em>Fast, Free &amp; Private</em></span>
              <span class="fc-text">Compress images in your browser. Your files never leave your device.</span>
              <span class="fc-quality"><span class="fc-q-label"><span>Quality</span><b>80%</b></span><span class="fc-slider"><i></i></span></span>
            </div>
            <div class="fc-tool">
              <div class="fc-drop"><i>${glyph("upload")}</i><b>Drag &amp; drop images here</b><small>PNG · JPG · WebP · GIF · AVIF · HEIC</small></div>
              <div class="fc-file"><span class="fc-thumb"></span><span class="fc-meta"><b>IMG_2041.jpg</b><small>4.2 MB → 812 KB</small></span><span class="fc-badge">−81%</span></div>
              <div class="fc-file"><span class="fc-thumb t2"></span><span class="fc-meta"><b>banner.png</b><span class="fc-progress"><i></i></span></span><span class="fc-pct">62%</span></div>
            </div>
          </div>
        </div>`,
    },
  };

  /* ---------- Screen kit: shared blocks for the secondary mock screens ---------- */
  const PHOTOS = [
    "radial-gradient(circle at 70% 28%, #FFE7A8 0 10%, transparent 11%), linear-gradient(165deg, transparent 55%, #4F8F62 56%), linear-gradient(180deg, #A9DAEA, #DDF1F6)",
    "linear-gradient(180deg, #F7B267 0%, #F4845F 48%, #6D3B47 49%, #3B2C35 100%)",
    "linear-gradient(160deg, #2E3A59 0 40%, #4B5D8A 40% 55%, #1F2740 55%)",
    "radial-gradient(circle at 50% 38%, #F2C9A5 0 18%, transparent 19%), radial-gradient(ellipse at 50% 100%, #5A6FB8 0 42%, transparent 43%), linear-gradient(#E8E3DA, #D9D2C5)",
    "linear-gradient(135deg, #9BE3BC, #1D8A55)",
    "linear-gradient(180deg, #CFE8F3 0 52%, #E9D8B4 52%)",
    "radial-gradient(circle at 32% 42%, #F6C6A6 0 20%, transparent 21%), linear-gradient(135deg, #FCEADF, #F2B460)",
    "linear-gradient(180deg, #1F2A44, #3E5C76 60%, #748CAB)",
    "repeating-linear-gradient(90deg, #EDEAE4 0 10%, #E2DDD4 10% 20%)",
  ];

  const K = {
    screen: (theme, body) => `<div class="phone-screen k ${theme}">${statusBar}<div class="k-body">${body}</div>${gesture}</div>`,
    appbar: ({ title, sub = "", back = true, end = "" }) =>
      `<div class="k-appbar">${back ? K.icon("chevronLeft") : ""}<span class="k-titles"><b>${title}</b>${sub ? `<small>${sub}</small>` : ""}</span>${end}</div>`,
    header: ({ kicker, title, end = "" }) =>
      `<div class="k-header"><span><small>${kicker}</small><b>${title}</b></span>${end}</div>`,
    icon: (g) => `<span class="k-iconbtn">${glyph(g)}</span>`,
    link: (text) => `<span class="k-link">${text}</span>`,
    card: ({ label, value, meta = "", tone = "brand", bar = null }) =>
      `<div class="k-card k-card--${tone}"><small>${label}</small><b>${value}</b>${bar === null ? "" : `<span class="k-bar"><i style="width:${bar}%"></i></span>`}${meta ? `<span class="k-card-meta">${meta}</span>` : ""}</div>`,
    section: (title, action = "") => `<div class="k-section"><span>${title}</span>${action ? `<em>${action}</em>` : ""}</div>`,
    list: (rows, grouped = false) => `<div class="k-list${grouped ? " k-list--grouped" : ""}">${rows.map(K.row).join("")}</div>`,
    row: (r) => {
      let lead = "";
      if (r.photo != null) lead = `<span class="k-lead k-lead--photo" style="background:${PHOTOS[r.photo]}"></span>`;
      else if (r.paper) lead = '<span class="k-lead k-lead--paper"><i></i><i></i><i></i></span>';
      else if (r.g) lead = `<span class="k-lead">${glyph(r.g)}</span>`;
      else if (r.lead) lead = `<span class="k-lead${r.c ? " k-lead--round" : ""}"${r.c ? ` style="--c:${r.c}"` : ""}>${r.lead}</span>`;
      let end = "";
      if (r.value || r.note) end += `<span class="k-row-end">${r.value ? `<b>${r.value}</b>` : ""}${r.note ? `<small>${r.note}</small>` : ""}</span>`;
      if (r.badge) end += `<span class="k-badge">${r.badge}</span>`;
      if (r.check != null) end += `<span class="k-check${r.check ? " is-on" : ""}">${r.check ? glyph("tick") : ""}</span>`;
      if (r.toggle != null) end += `<span class="k-switch${r.toggle ? " is-on" : ""}"></span>`;
      if (r.selected) end += `<span class="k-selected">${glyph("tick")}</span>`;
      if (r.chevron) end += `<span class="k-chev">${glyph("chevronRight")}</span>`;
      return `<div class="k-row">${lead}<span class="k-row-main"><b>${r.title}</b>${r.sub ? `<small>${r.sub}</small>` : ""}</span>${end}</div>`;
    },
    field: ({ label, value, tag = "", g = "" }) =>
      `<div class="k-field"><small>${label}</small><span class="k-input">${g ? glyph(g) : ""}<span>${value}</span>${tag ? `<em>${tag}</em>` : ""}</span></div>`,
    chips: (items, on = 0) => `<div class="k-chips">${items.map((c, i) => `<span class="k-chip${i === on ? " is-on" : ""}">${c}</span>`).join("")}</div>`,
    button: (label, g = "", tone = "") => `<span class="k-button${tone ? ` k-button--${tone}` : ""}">${g ? glyph(g) : ""}${label}</span>`,
    stats: (items) => `<div class="k-stats" style="--n:${items.length}">${items.map((s) => `<span class="k-stat"><small>${s.label}</small><b>${s.value}</b></span>`).join("")}</div>`,
  };

  Object.assign(SCREENS, {
    /* Image Compressor */
    "ic-pick": {
      type: "phone",
      label: "Image Compressor selecting three photos from the camera roll",
      html:
        K.screen(
          "t-ic",
          K.appbar({ title: "Select photos", sub: "Camera roll", back: false, end: K.link("Select all") }) +
            K.chips(["Recent", "Camera", "Screenshots", "Downloads"]) +
            `<div class="k-photos">${[0, 1, 2, 3, 4, 5, 6, 7, 8]
              .map((p) => {
                const sel = { 0: 1, 1: 2, 3: 3 }[p];
                return `<span class="k-photo${sel ? " is-sel" : ""}" style="background:${PHOTOS[p]}">${sel ? `<i>${sel}</i>` : ""}</span>`;
              })
              .join("")}</div>` +
            '<div class="k-bottombar"><span><b>3 selected</b><small>12.4 MB total</small></span><span class="k-pill">Next</span></div>'
        ),
    },
    "ic-settings": {
      type: "phone",
      label: "Image Compressor previewing quality settings before compressing",
      html: K.screen(
        "t-ic",
        K.appbar({ title: "Compression", sub: "3 photos" }) +
          `<div class="k-preview" style="background:${PHOTOS[1]}"><span class="k-preview-split"></span><small>Original · 4.2 MB</small><small>80% · 812 KB</small></div>` +
          '<div class="k-slider"><span><small>Quality</small><b>80%</b></span><span class="k-track"><i style="width:80%"></i></span></div>' +
          K.section("Format") +
          K.chips(["JPG", "WebP", "PNG"]) +
          K.field({ label: "Longest side", value: "2048 px" }) +
          K.button("Compress 3 photos")
      ),
    },
    "ic-result": {
      type: "phone",
      label: "Image Compressor showing space saved after compressing three photos",
      html: K.screen(
        "t-ic",
        K.appbar({ title: "Done", sub: "3 photos compressed", back: false, end: K.icon("close") }) +
          K.card({ label: "Space saved", value: "9.8 MB", meta: "12.4 MB → 2.6 MB", bar: 79 }) +
          K.section("Photos") +
          K.list([
            { photo: 0, title: "IMG_2041.jpg", sub: "4.2 MB → 812 KB", badge: "−81%" },
            { photo: 1, title: "IMG_2044.jpg", sub: "5.1 MB → 1.1 MB", badge: "−78%" },
            { photo: 3, title: "IMG_2050.jpg", sub: "3.1 MB → 690 KB", badge: "−78%" },
          ]) +
          `<div class="k-actions">${K.button("Share", "share", "dark")}${K.button("Save", "download")}</div>`
      ),
    },
  });

  /* KeepSure: screenshots of the app's light theme, from its UI screen reference */
  Object.assign(SCREENS, {
    keepsure: shot("keepsure-home.webp", "KeepSure home with a vault summary, quick actions and recent device bills"),
    "ks-pick": shot("keepsure-pick.webp", "KeepSure add-document sheet: scan with the camera, upload files or add a reminder"),
    "ks-review": shot("keepsure-review.webp", "KeepSure showing the details AI read from a TV invoice, ready to review"),
    "ks-detail": shot("keepsure-detail.webp", "KeepSure document detail for a phone invoice with an active warranty"),
    "ks-search": shot("keepsure-search.webp", "KeepSure search results for Samsung: a watch, a phone and its extended warranty"),
    "ks-reminders": shot("keepsure-reminders.webp", "KeepSure reminders grouped into overdue, this week and this month"),
    "ks-notify": shot("keepsure-notify.webp", "Lock screen with a KeepSure reminder that a TV warranty ends in 6 days"),
    wireframe: {
      type: "phone",
      label: "Early wireframe of the KeepSure home screen",
      html: `
        <div class="phone-screen wf">
          ${statusBar}
          <div class="wf-head"><span><i class="w40"></i><i class="w70 tall"></i></span><i class="circ"></i><i class="circ"></i></div>
          <div class="wf-hero"><i class="w40"></i><div class="wf-stats">${'<span><i class="tall"></i><i class="w70"></i></span>'.repeat(3)}</div><div class="wf-strip"></div></div>
          <div class="wf-actions">${'<span><i class="sq"></i><i class="w"></i></span>'.repeat(4)}</div>
          <div class="wf-label"><i class="w50"></i><i class="w20"></i></div>
          ${'<div class="wf-row"><i class="sq"></i><span><i class="w70"></i><span class="wf-meta"><i class="w40"></i><i class="pill"></i></span></span></div>'.repeat(3)}
          <div class="wf-nav"><i></i><i></i><i></i></div>
          ${gesture}
        </div>`,
    },
  });

  function device(key, cls = "") {
    const s = SCREENS[key];
    if (!s) return "";
    if (s.type === "phone") {
      return `<div class="device device--phone ${cls}" role="img" aria-label="${s.label}"><div class="phone">${s.html}</div></div>`;
    }
    return `
      <div class="device device--browser ${cls}" role="img" aria-label="${s.label}">
        <div class="browser">
          <div class="browser-bar">
            <span class="browser-dots"><i></i><i></i><i></i></span>
            <span class="browser-url">${glyph("lock")}${s.url}</span>
          </div>
          ${s.html}
        </div>
      </div>`;
  }

  // Real screenshots of the websites: a page section in browser chrome, or a
  // Figma plugin window on its own.
  function webShot({ src, alt = "" }, url, cls = "") {
    return `
      <div class="device device--browser ${cls}">
        <div class="browser browser--shot">
          <div class="browser-bar">
            <span class="browser-dots"><i></i><i></i><i></i></span>
            <span class="browser-url">${glyph("lock")}${url}</span>
          </div>
          <img src="${src}" alt="${alt}" loading="lazy" decoding="async">
        </div>
      </div>`;
  }

  function pluginShot({ src, alt = "" }, cls = "") {
    return `<div class="plugin-shot ${cls}"><img src="${src}" alt="${alt}" loading="lazy" decoding="async"></div>`;
  }

  window.AppsZoneUI = { glyph, appIcon, device, webShot, pluginShot, screens: SCREENS };
})();
