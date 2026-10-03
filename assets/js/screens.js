/*
 * AppsZone — icons and placeholder product screens.
 *
 * The mock screens stand in for real screenshots (spec: "Visual proof").
 * Once real images exist, swap `AppsZoneUI.device()` for an <img> inside the
 * same .device wrapper and the surrounding layouts keep working.
 */
(function () {
  const GLYPHS = {
    // Product glyphs
    receipt: '<path d="M6 3h12v18l-2-1.4-2 1.4-2-1.4-2 1.4-2-1.4L6 21z"/><path d="M9.5 8h5M9.5 11.5h5M9.5 15h3"/>',
    split: '<path d="M12 3.5a8.5 8.5 0 1 0 8.5 8.5H12z"/><path d="M15 3.9A8.5 8.5 0 0 1 20.1 9H15z"/>',
    timer: '<circle cx="12" cy="13" r="7.5"/><path d="M12 9.5V13l2.4 1.6M9.5 2.8h5"/>',
    compress: '<rect x="3.5" y="3.5" width="17" height="17" rx="4"/><path d="M9 3.5V7a2 2 0 0 1-2 2H3.5M15 20.5V17a2 2 0 0 1 2-2h3.5"/>',
    check: '<circle cx="12" cy="12" r="8.5"/><path d="m8.4 12.3 2.4 2.4 4.9-5.1"/>',
    convert: '<path d="M4.5 8.5h14l-3.2-3.2M19.5 15.5h-14l3.2 3.2"/>',
    minimize: '<path d="M4.5 14.5h5v5M19.5 9.5h-5v-5M14.5 9.5l6-6M3.5 20.5l6-6"/>',
    // Interface glyphs
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    external: '<path d="M7.5 16.5 16.5 7.5M9 7.5h7.5V15"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    upload: '<path d="M12 15.5V4.5M7.5 9 12 4.5 16.5 9M5 15v3.5a1.5 1.5 0 0 0 1.5 1.5h11a1.5 1.5 0 0 0 1.5-1.5V15"/>',
    lock: '<rect x="5.5" y="10.5" width="13" height="10" rx="2"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"/>',
    chevronLeft: '<path d="m14.5 6-6 6 6 6"/>',
    home: '<path d="M4.5 10.5 12 4l7.5 6.5V19a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1z"/><path d="M10 20v-5h4v5"/>',
    cart: '<path d="M3.5 4.5h2.2l2.1 10.2a1.5 1.5 0 0 0 1.5 1.2h7.9a1.5 1.5 0 0 0 1.5-1.1l1.6-6.3H6.6"/><circle cx="10" cy="19.5" r="1"/><circle cx="17" cy="19.5" r="1"/>',
    fuel: '<path d="M5.5 20.5V5.5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v15M4 20.5h12M5.5 11h9M14.5 8.5l3 2.5v6.5a1.5 1.5 0 0 0 3 0V9l-3-3"/>',
    cup: '<path d="M5 9.5h11v5a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5zM16 11h1.5a2.5 2.5 0 0 1 0 5H16M8.5 3.5v2.5M12 3.5v2.5"/>',
    reset: '<path d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3M4.5 4.5v4h4"/>',
    pause: '<path d="M9 6v12M15 6v12"/>',
    skip: '<path d="M6 6.5v11l8-5.5zM17.5 6v12"/>',
    // Feature + detail page glyphs
    calendar: '<rect x="4" y="5.5" width="16" height="14.5" rx="2.5"/><path d="M4 10h16M8.5 3.5v4M15.5 3.5v4"/>',
    focus: '<circle cx="12" cy="12" r="3"/><path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2"/>',
    users: '<circle cx="9" cy="8.5" r="3.5"/><path d="M3 19.5c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5M15.5 5.2a3.5 3.5 0 0 1 0 6.6M17.5 14.3c2.1.6 3.5 2.6 3.5 5.2"/>',
    sliders: '<path d="M4 7h10M18 7h2M4 12h4M12 12h8M4 17h12M20 17h0"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="17" r="2"/>',
    route: '<circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="6" r="2.5"/><path d="M8.5 18H15a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h6.5"/>',
    userCheck: '<circle cx="10" cy="8.5" r="3.5"/><path d="M3.5 19.5c0-3.3 2.9-5.5 6.5-5.5 1.3 0 2.5.3 3.5.8M15.5 17.5l2 2 4-4.5"/>',
    play: '<path d="M8 5.5v13l10.5-6.5z"/>',
    sound: '<path d="M4 10v4M8 7v10M12 4v16M16 8v8M20 11v2"/>',
    chart: '<path d="M4 20h16M7 16v-5M12 16V7M17 16v-8"/>',
    layers: '<path d="m12 4 8.5 4.5L12 13 3.5 8.5z"/><path d="m3.5 12.5 8.5 4.5 8.5-4.5M3.5 16.5 12 21l8.5-4.5"/>',
    eye: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',
    copy: '<rect x="8.5" y="8.5" width="11.5" height="11.5" rx="2.5"/><path d="M15.5 8.5V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7.5a2 2 0 0 0 2 2h2.5"/>',
    fileType: '<path d="M14 3.5H7.5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V8z"/><path d="M14 3.5V8h4.5M9 13h6M12 13v5"/>',
    flame: '<path d="M12 21c-3.6 0-6.5-2.6-6.5-6.2 0-3.4 2.5-5.3 3.7-8.3.9 1.7 2 2.6 3 2.9.3-2.3 1.6-4.5 3.3-5.9-.2 3.2 3 5.8 3 10.4 0 4-2.9 7.1-6.5 7.1z"/>',
    bell: '<path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 2h-15z"/><path d="M10 20.5h4"/>',
    offline: '<path d="M3.5 3.5l17 17M8.5 16.2a5 5 0 0 1 7 0M5.2 12.6a10 10 0 0 1 4-2.4M14.8 10.2a10 10 0 0 1 4 2.4M2 9a15 15 0 0 1 4-2.6M10.5 5.1A15 15 0 0 1 22 9"/>',
    star: '<path d="m12 3.8 2.5 5.2 5.7.8-4.1 4 1 5.6L12 16.7l-5.1 2.7 1-5.6-4.1-4 5.7-.8z"/>',
    history: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
    download: '<path d="M12 4.5v11M7.5 11 12 15.5 16.5 11M5 19.5h14"/>',
    info: '<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5.5M12 7.8v.2"/>',
    close: '<path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/>',
    flash: '<path d="M13 3 5.5 13.5H12L11 21l7.5-10.5H12z"/>',
    share: '<path d="M12 15V4M8 7.5 12 3.5l4 4M6 11v7.5a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5V11"/>',
    swap: '<path d="M8 4v16M4 8l4-4 4 4M16 20V4M12 16l4 4 4-4"/>',
    more: '<circle cx="5.5" cy="12" r="1" fill="currentColor"/><circle cx="12" cy="12" r="1" fill="currentColor"/><circle cx="18.5" cy="12" r="1" fill="currentColor"/>',
    chevronRight: '<path d="m9.5 6 6 6-6 6"/>',
    tick: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
    book: '<path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5zM20 5.5A1.5 1.5 0 0 0 18.5 4H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5z"/>',
    drop: '<path d="M12 3.5s6 6.3 6 10.5a6 6 0 0 1-12 0c0-4.2 6-10.5 6-10.5z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6 7 7M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4"/>',
    moon: '<path d="M19.5 14.5A8 8 0 0 1 9.5 4.5a8 8 0 1 0 10 10z"/>',
    pen: '<path d="M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16z"/>',
    backspace: '<path d="M9 5.5h10a1.5 1.5 0 0 1 1.5 1.5v10a1.5 1.5 0 0 1-1.5 1.5H9L3.5 12z"/><path d="m11.5 9.5 5 5M16.5 9.5l-5 5"/>',
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

  const SCREENS = {
    "receipt-keeper": {
      type: "phone",
      label: "Receipt Keeper app showing this month's receipts and upcoming return dates",
      html: `
        <div class="phone-screen rk">
          ${statusBar}
          <div class="rk-head">
            <div><span class="rk-kicker">September</span><span class="rk-title">Receipts</span></div>
            <span class="rk-iconbtn">${glyph("search")}</span>
          </div>
          <div class="rk-summary">
            <span class="rk-sum-label">Spent this month</span>
            <span class="rk-sum-value">$482.60</span>
            <span class="rk-sum-meta">12 receipts <i></i> 2 returns due</span>
          </div>
          <div class="rk-section"><span>Return window closing</span><span class="rk-see">See all</span></div>
          <div class="rk-list">
            <div class="rk-item"><span class="rk-thumb" style="--c:#E2733A">N</span><span class="rk-info"><b>Northside Tech</b><small>Headphones · Oct 12</small></span><span class="rk-amt"><b>$129.00</b><em>13 days</em></span></div>
            <div class="rk-item"><span class="rk-thumb" style="--c:#6B8F71">O</span><span class="rk-info"><b>Oak &amp; Co. Home</b><small>Desk lamp · Oct 20</small></span><span class="rk-amt"><b>$39.99</b><em class="soft">21 days</em></span></div>
            <div class="rk-item"><span class="rk-thumb" style="--c:#5A6FB8">G</span><span class="rk-info"><b>Green Basket</b><small>Groceries · Sep 26</small></span><span class="rk-amt"><b>$64.20</b><small>Saved</small></span></div>
            <div class="rk-item"><span class="rk-thumb" style="--c:#B0784A">P</span><span class="rk-info"><b>Paper Mill</b><small>Notebooks · Sep 24</small></span><span class="rk-amt"><b>$18.50</b><small>Saved</small></span></div>
          </div>
          <span class="rk-fab">${glyph("plus")}Add receipt</span>
          ${gesture}
        </div>`,
    },

    "quiet-timer": {
      type: "phone",
      label: "Quiet Timer app counting down a focus session",
      html: `
        <div class="phone-screen qt">
          ${statusBar}
          <div class="qt-top"><span class="qt-label">Deep work</span><span class="qt-sub">Session 2 of 4</span></div>
          <div class="qt-ring">
            <svg viewBox="0 0 200 200" aria-hidden="true">
              <circle class="qt-track" cx="100" cy="100" r="86"/>
              <circle class="qt-prog" cx="100" cy="100" r="86" pathLength="100" stroke-dasharray="75 100"/>
            </svg>
            <span class="qt-time"><b>18:42</b><small>of 25:00</small></span>
          </div>
          <div class="qt-controls">
            <span class="qt-btn">${glyph("reset")}</span>
            <span class="qt-btn qt-btn--main">${glyph("pause")}</span>
            <span class="qt-btn">${glyph("skip")}</span>
          </div>
          <div class="qt-today">
            <span>Today</span>
            <span class="qt-dots"><i class="on"></i><i class="on"></i><i class="half"></i><i></i></span>
            <span>1h 12m</span>
          </div>
          ${gesture}
        </div>`,
    },

    "fair-share": {
      type: "phone",
      label: "Fair Share app showing a shared trip balance and expenses",
      html: `
        <div class="phone-screen fs">
          ${statusBar}
          <div class="fs-head">
            <span class="fs-back">${glyph("chevronLeft")}</span>
            <span class="fs-titles"><b>Lake trip</b><small>3 people · 8 expenses</small></span>
            <span class="fs-avatars"><i style="--c:#E2733A">M</i><i style="--c:#3A63D8">J</i><i style="--c:#23855A">A</i></span>
          </div>
          <div class="fs-card">
            <span class="fs-card-label">You're owed</span>
            <span class="fs-card-value">$86.40</span>
            <span class="fs-bar"><i></i></span>
            <span class="fs-card-row"><span>Maya owes $52.10</span><span>Jon owes $34.30</span></span>
          </div>
          <div class="fs-section">Expenses</div>
          <div class="fs-list">
            <div class="fs-item"><span class="fs-ico">${glyph("home")}</span><span class="fs-info"><b>Cabin rental</b><small>Paid by Maya</small></span><span class="fs-amt"><b>$420.00</b><small class="neg">you owe $140.00</small></span></div>
            <div class="fs-item"><span class="fs-ico">${glyph("cart")}</span><span class="fs-info"><b>Groceries</b><small>Paid by you</small></span><span class="fs-amt"><b>$64.20</b><small class="pos">you lent $42.80</small></span></div>
            <div class="fs-item"><span class="fs-ico">${glyph("fuel")}</span><span class="fs-info"><b>Fuel</b><small>Paid by Jon</small></span><span class="fs-amt"><b>$48.00</b><small class="neg">you owe $16.00</small></span></div>
            <div class="fs-item"><span class="fs-ico">${glyph("cup")}</span><span class="fs-info"><b>Breakfast</b><small>Paid by you</small></span><span class="fs-amt"><b>$36.00</b><small class="pos">you lent $24.00</small></span></div>
          </div>
          <span class="fs-cta">Settle up</span>
          ${gesture}
        </div>`,
    },

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

  const bars = (heights, today) =>
    `<div class="k-bars">${heights.map((h, i) => `<span${i === today ? ' class="is-on"' : ""}><i style="height:${h}%"></i><small>${"WTFSSMT"[i]}</small></span>`).join("")}</div>`;

  Object.assign(SCREENS, {
    /* Receipt Keeper */
    "rk-capture": {
      type: "phone",
      label: "Receipt Keeper scanning a paper receipt with the camera",
      html: `
        <div class="phone-screen cam">
          ${statusBar}
          <div class="cam-top"><span class="cam-btn">${glyph("close")}</span><b>Scan receipt</b><span class="cam-btn">${glyph("flash")}</span></div>
          <div class="cam-view">
            <div class="cam-paper">
              <b>NORTHSIDE TECH</b>
              <small>12 Harbour St · 28/09/26</small>
              <i></i><i class="s"></i>
              <span class="cam-line"><span>Wireless headphones</span><span>129.00</span></span>
              <span class="cam-line"><span>Qty 1</span><span></span></span>
              <i></i>
              <span class="cam-line cam-total"><span>TOTAL</span><span>$129.00</span></span>
              <small>Returns accepted within 14 days</small>
              <span class="cam-barcode"></span>
            </div>
            <span class="cam-frame"><i></i><i></i><i></i><i></i></span>
            <span class="cam-hint">${glyph("tick")}Receipt detected</span>
          </div>
          <div class="cam-bottom"><span class="cam-thumb"></span><span class="cam-shutter"><i></i></span><span class="cam-auto">Auto</span></div>
          ${gesture}
        </div>`,
    },
    "rk-review": {
      type: "phone",
      label: "Receipt Keeper showing the details read from a receipt, ready to save",
      html: K.screen(
        "t-rk",
        K.appbar({ title: "Review details", sub: "Scanned just now", end: K.link("Retake") }) +
          K.list([{ paper: true, title: "Northside Tech", sub: "Receipt · 1 item", badge: "5 fields found" }]) +
          K.field({ label: "Store", value: "Northside Tech", tag: "Auto" }) +
          K.field({ label: "Purchase date", value: "Sep 28, 2026", tag: "Auto" }) +
          K.field({ label: "Total", value: "$129.00", tag: "Auto" }) +
          `<div class="k-fields-row">${K.field({ label: "Return window", value: "14 days", tag: "Auto" })}${K.field({ label: "Warranty", value: "1 year" })}</div>` +
          K.button("Save receipt", "tick")
      ),
    },
    "rk-detail": {
      type: "phone",
      label: "Receipt Keeper showing a saved receipt with its return deadline",
      html: K.screen(
        "t-rk",
        K.appbar({ title: "Northside Tech", sub: "Electronics", end: K.icon("more") }) +
          K.card({ label: "Total paid", value: "$129.00", meta: "Sep 28, 2026 · Card ending 4021" }) +
          K.card({ label: "Return by Oct 12", value: "13 days left", tone: "soft", bar: 93 }) +
          K.section("Coverage") +
          K.list(
            [
              { g: "calendar", title: "Return window", sub: "14 days · ends Oct 12" },
              { g: "receipt", title: "Warranty", sub: "Until Sep 28, 2027" },
              { g: "eye", title: "Receipt photo", sub: "1 image", chevron: true },
            ],
            true
          ) +
          K.button("Remind me before Oct 12", "bell", "dark")
      ),
    },

    /* Fair Share */
    "fs-add": {
      type: "phone",
      label: "Fair Share adding a grocery expense split between three people",
      html: K.screen(
        "t-fs",
        K.appbar({ title: "Add expense", sub: "Lake trip" }) +
          '<div class="k-amount"><small>Amount</small><b>$64.20</b></div>' +
          K.field({ label: "What for", value: "Groceries", g: "cart" }) +
          K.field({ label: "Paid by", value: "You" }) +
          K.section("Split between", "Equally") +
          K.list(
            [
              { lead: "M", c: "#E2733A", title: "Maya", value: "$21.40", check: true },
              { lead: "J", c: "#3A63D8", title: "Jon", value: "$21.40", check: true },
              { lead: "A", c: "#23855A", title: "You", value: "$21.40", check: true },
            ],
            true
          ) +
          K.button("Add expense")
      ),
    },
    "fs-settle": {
      type: "phone",
      label: "Fair Share suggesting two payments to settle a trip",
      html: K.screen(
        "t-fs",
        K.appbar({ title: "Settle up", sub: "Lake trip" }) +
          K.card({ label: "Fewest payments", value: "2 transfers", meta: "Everyone is even after these" }) +
          K.section("Suggested") +
          K.list([
            { lead: "M", c: "#E2733A", title: "Maya pays you", sub: "Cabin, fuel and more", value: "$52.10" },
            { lead: "J", c: "#3A63D8", title: "Jon pays you", sub: "Groceries, breakfast", value: "$34.30" },
          ]) +
          K.section("Settled") +
          K.list([{ lead: "J", c: "#3A63D8", title: "Jon paid Maya", sub: "$12.00 · Sep 21", badge: "Done" }], true) +
          K.button("Share summary", "share", "dark")
      ),
    },

    /* Quiet Timer */
    "qt-setup": {
      type: "phone",
      label: "Quiet Timer choosing a session length and background sound",
      html: K.screen(
        "t-qt",
        K.header({ kicker: "Tuesday", title: "New session", end: K.icon("history") }) +
          '<div class="k-big"><b>25<small>min</small></b><span>Deep work</span></div>' +
          K.chips(["15 min", "25 min", "50 min", "90 min"], 1) +
          K.section("Sound") +
          K.list(
            [
              { g: "sound", title: "Rain", sub: "Soft and steady", selected: true },
              { g: "sound", title: "Café", sub: "Low chatter" },
              { g: "close", title: "Silence", sub: "Nothing at all" },
            ],
            true
          ) +
          K.button("Start focus", "play")
      ),
    },
    "qt-week": {
      type: "phone",
      label: "Quiet Timer showing focus time over the last seven days",
      html: K.screen(
        "t-qt",
        K.header({ kicker: "Last 7 days", title: "6h 40m", end: K.icon("chart") }) +
          bars([55, 80, 35, 20, 45, 90, 60], 6) +
          K.stats([
            { label: "Sessions", value: "16" },
            { label: "Daily avg", value: "57m" },
            { label: "Streak", value: "5 days" },
          ]) +
          K.section("Recent") +
          K.list(
            [
              { g: "timer", title: "Deep work", sub: "Today · 9:10", value: "25m" },
              { g: "timer", title: "Reading", sub: "Mon · 21:30", value: "50m" },
              { g: "timer", title: "Writing", sub: "Sun · 10:05", value: "25m" },
            ],
            true
          )
      ),
    },

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

    /* Little Habits */
    "lh-today": {
      type: "phone",
      label: "Little Habits showing today's habits with three of five done",
      html: K.screen(
        "t-lh",
        K.header({ kicker: "Tuesday, Sep 29", title: "Today", end: K.icon("plus") }) +
          K.card({ label: "Progress", value: "3 of 5", meta: "Two to go", bar: 60 }) +
          K.section("Habits", "Edit") +
          K.list([
            { g: "book", title: "Read 10 pages", sub: "12-day streak", check: true },
            { g: "drop", title: "Drink water", sub: "6 of 8 glasses", check: false },
            { g: "sun", title: "Morning stretch", sub: "8-day streak", check: true },
            { g: "pen", title: "Journal", sub: "4-day streak", check: true },
            { g: "moon", title: "Phone away by 11", sub: "Tonight", check: false },
          ])
      ),
    },
    "lh-detail": {
      type: "phone",
      label: "Little Habits showing a reading habit's streak calendar",
      html: K.screen(
        "t-lh",
        K.appbar({ title: "Read 10 pages", sub: "Every day", end: K.icon("more") }) +
          K.stats([
            { label: "Current streak", value: "12 days" },
            { label: "Best streak", value: "21 days" },
          ]) +
          K.section("Last 5 weeks") +
          // 35 days: a missed day, the 21-day best streak, a gap, then the current 12-day streak.
          `<div class="k-cal">${("0" + "1".repeat(21) + "0" + "1".repeat(12))
            .split("")
            .map((d, i) => `<i class="${d === "1" ? "on" : ""}${i === 34 ? " today" : ""}"></i>`)
            .join("")}</div>` +
          K.section("Reminder") +
          K.list([{ g: "bell", title: "8:30 PM", sub: "Every day", toggle: true }], true) +
          K.button("Done for today", "tick", "soft")
      ),
    },
    "lh-add": {
      type: "phone",
      label: "Little Habits creating a new habit with a reminder",
      html: K.screen(
        "t-lh",
        K.appbar({ title: "New habit" }) +
          K.field({ label: "Name", value: "Walk after lunch" }) +
          K.section("Repeat") +
          K.chips(["Daily", "Weekdays", "Weekends", "Custom"], 1) +
          K.field({ label: "Reminder", value: "1:15 PM", g: "bell" }) +
          K.section("Color") +
          `<div class="k-swatches">${["#D9546A", "#E2733A", "#23855A", "#1E7F8C", "#3A63D8", "#6C5CE7"]
            .map((c, i) => `<i style="--c:${c}"${i === 2 ? ' class="is-on"' : ""}></i>`)
            .join("")}</div>` +
          K.button("Create habit")
      ),
    },

    /* Quick Convert */
    "qc-convert": {
      type: "phone",
      label: "Quick Convert converting 12.5 kilometres to miles",
      html: K.screen(
        "t-qc",
        K.header({ kicker: "Length", title: "Convert", end: K.icon("star") }) +
          K.chips(["Length", "Weight", "Temp", "Currency", "Area"]) +
          `<div class="k-convert">
            <span class="k-conv is-active"><small>Kilometres</small><span><b>12.5</b><em>km</em></span></span>
            <span class="k-swap">${glyph("swap")}</span>
            <span class="k-conv"><small>Miles</small><span><b>7.767</b><em>mi</em></span></span>
          </div>` +
          `<div class="k-keypad">${["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", glyph("backspace")].map((k) => `<span>${k}</span>`).join("")}</div>`
      ),
    },
    "qc-currency": {
      type: "phone",
      label: "Quick Convert showing saved currency rates available offline",
      html: K.screen(
        "t-qc",
        K.header({ kicker: "Offline rates · Sep 28", title: "Currency", end: K.icon("offline") }) +
          K.card({ label: "100 US Dollar", value: "€92.40", meta: "1 USD = 0.924 EUR" }) +
          K.section("Saved pairs", "Edit") +
          K.list(
            [
              { lead: "€", title: "Euro", sub: "EUR", value: "92.40" },
              { lead: "£", title: "British Pound", sub: "GBP", value: "78.10" },
              { lead: "¥", title: "Japanese Yen", sub: "JPY", value: "14,320" },
              { lead: "₹", title: "Indian Rupee", sub: "INR", value: "8,390" },
            ],
            true
          )
      ),
    },
    "qc-units": {
      type: "phone",
      label: "Quick Convert choosing a unit to convert to",
      html: K.screen(
        "t-qc",
        K.appbar({ title: "Convert to", sub: "Length" }) +
          `<div class="k-search">${glyph("search")}Search units</div>` +
          K.section("Metric") +
          K.list(
            [
              { title: "Millimetres", sub: "mm" },
              { title: "Centimetres", sub: "cm" },
              { title: "Metres", sub: "m" },
              { title: "Kilometres", sub: "km" },
            ],
            true
          ) +
          K.section("Imperial") +
          K.list(
            [
              { title: "Feet", sub: "ft" },
              { title: "Miles", sub: "mi", selected: true },
            ],
            true
          )
      ),
    },
  });

  /* Receipt Keeper: search, reminder and wireframe screens for the homepage story */
  Object.assign(SCREENS, {
    "rk-search": {
      type: "phone",
      label: "Receipt Keeper search results for a store name",
      html: K.screen(
        "t-rk",
        K.header({ kicker: "Search", title: "Find a receipt", end: K.icon("sliders") }) +
          `<div class="k-search k-search--active">${glyph("search")}<span>north</span><i class="k-caret"></i></div>` +
          K.chips(["All", "Electronics", "Home", "Groceries"]) +
          K.section("2 results") +
          K.list([
            { lead: "N", c: "#E2733A", title: "<mark>North</mark>side Tech", sub: "Headphones · Sep 28", value: "$129.00", note: "13 days left" },
            { lead: "N", c: "#E2733A", title: "<mark>North</mark>side Tech", sub: "USB-C cable · Aug 14", value: "$19.00", note: "Saved" },
          ]) +
          K.section("Recent searches") +
          K.list(
            [
              { g: "history", title: "warranty" },
              { g: "history", title: "desk lamp" },
              { g: "history", title: "groceries september" },
            ],
            true
          )
      ),
    },
    "rk-reminder": {
      type: "phone",
      label: "Lock screen with a Receipt Keeper reminder that a return window closes in three days",
      html: `
        <div class="phone-screen lock">
          ${statusBar}
          <div class="lock-time"><small>Friday, October 9</small><b>9:41</b></div>
          <div class="lock-notes">
            <div class="lock-note">
              <span class="lock-app">${glyph("receipt")}</span>
              <span class="lock-body">
                <span class="lock-row"><b>Receipt Keeper</b><small>now</small></span>
                <strong>Return window closes in 3 days</strong>
                <span>Northside Tech · Headphones · $129.00</span>
              </span>
            </div>
            <div class="lock-note lock-note--stack"></div>
          </div>
          <div class="lock-bottom"><span>${glyph("flash")}</span><span>${glyph("eye")}</span></div>
          ${gesture}
        </div>`,
    },
    wireframe: {
      type: "phone",
      label: "Early wireframe of the Receipt Keeper list",
      html: `
        <div class="phone-screen wf">
          ${statusBar}
          <div class="wf-head"><span><i class="w40"></i><i class="w70 tall"></i></span><i class="circ"></i></div>
          <div class="wf-card"><i class="w40"></i><i class="w60 tall"></i><i class="w50"></i></div>
          <div class="wf-label"><i class="w50"></i><i class="w20"></i></div>
          ${'<div class="wf-row"><i class="sq"></i><span><i class="w70"></i><i class="w40"></i></span><span class="end"><i class="w100"></i><i class="w60"></i></span></div>'.repeat(4)}
          <div class="wf-fab"></div>
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

  window.AppsZoneUI = { glyph, appIcon, device, screens: SCREENS };
})();
