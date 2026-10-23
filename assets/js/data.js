/*
 * AppsZone — sample content.
 *
 * Everything in this file is placeholder data shaped after the content model
 * in the V1 spec (§30). Replace entries with real products as they ship.
 *
 * - `screen` is the mock UI used on the homepage; `screenshots[]` feeds the
 *   detail page gallery. Each screenshot is `{ screen }` (a mock from
 *   screens.js) until real images exist — then use `{ src, alt }` instead.
 * - `tint` is the soft background behind a product's visuals.
 * - Apps that are still in design set `figmaUrl` instead of APK details: they
 *   have no detail page yet, so every link to them opens the Figma file.
 * - `level` follows the portfolio strategy (§34): 1 = utility (no "Behind the
 *   product"), 2 = product (problem, goal, decisions), 3 = portfolio product
 *   (adds hypothesis, design process and learnings).
 * - Portfolio copy uses honest framing (§35): hypotheses and limitations,
 *   never invented research or metrics.
 * - Websites share the detail page (app.html?slug=…). Their case study adds
 *   `story`, a UX `timeline` and measured `proof`, all taken from each
 *   product's files, commits, notes and test reports. Timeline phases have
 *   `start`/`end` as days (YYYY-MM-DD) or, before the first files, months
 *   (YYYY-MM); `planned` marks work that hasn't happened yet. `duration` is
 *   the owner's own figure for the whole project.
 */
window.APPSZONE_DATA = {
  apps: [
    {
      name: "KeepSure",
      slug: "keepsure",
      shortDescription: "A private vault for invoices, warranties and policies, with reminders before anything lapses.",
      category: "Productivity",
      platform: "Android",
      version: "3.0",
      apkUrl: "#", // replace with the real APK URL
      apkSize: "11 MB",
      minAndroid: "Android 8.0 or later",
      icon: { glyph: "shield", color: "#2563EB" },
      tint: "#E5EDFB",
      screen: "keepsure",
      updatedDate: "2026-10-13",
      developer: "AppsZone",
      privacyUrl: "#",
      featured: true,
      level: 3,

      headline: "Keep it. Track it. Claim it.",
      longDescription:
        "KeepSure reads each document you scan or upload and fills in the details, from product and seller to warranty expiry and return window. Files stay encrypted on your phone and back up to your own Google Drive, and every important date becomes a reminder.",
      screenshots: [
        { screen: "keepsure", caption: "Your vault at a glance" },
        { screen: "ks-review", caption: "Details filled in for you" },
        { screen: "ks-detail", caption: "Warranty status and every date" },
        { screen: "ks-reminders", caption: "Reminders before anything lapses" },
      ],
      features: [
        { glyph: "focus", title: "No typing", text: "Scan or upload a file. KeepSure reads it and fills in the details for you to check." },
        { glyph: "bell", title: "Reminders in time", text: "Expiry dates and return windows become reminders, 30, 7 and 1 day before by default." },
        { glyph: "lock", title: "Private by default", text: "Files are encrypted on your phone and back up to your own Google Drive." },
        { glyph: "search", title: "Find anything", text: "Search titles, sellers, products, document numbers and the text on the page." },
      ],
      howItWorks: [
        { title: "Scan or upload a document.", text: "Use the camera, pick a photo or PDF, or share a file into KeepSure.", screen: "ks-pick" },
        { title: "Review what it read.", text: "Every field and line item can be edited. Low-confidence lines are marked “Check this”.", screen: "ks-review" },
        { title: "Get reminded in time.", text: "A notification arrives before a warranty, policy or return window runs out.", screen: "ks-notify" },
      ],
      problem:
        "Invoices, warranty cards, insurance policies and vehicle papers end up scattered across email, WhatsApp, paper folders and photo galleries. When a product fails or a policy is due, the right document is hard to find, and the deadline has often already passed.",
      goal: "Read each document automatically, keep it private, and turn every expiry date and return window into a reminder.",
      designApproach:
        "No typing. The app reads the document and fills in the details; the person only reviews and confirms.",
      designDecisions: [
        {
          title: "Review, don't type",
          text: "Extraction fills every field, including each line item on a bill. Anything can be edited before saving, and low-confidence lines are marked “Check this”.",
        },
        {
          title: "Backup you can see",
          text: "A document that exists only on the phone is flagged on Home and in Settings, so data loss is never silent.",
        },
        {
          title: "Consent in two steps",
          text: "Sending text to cloud AI and sending page images are separate opt-ins, and either can be withdrawn in Settings.",
        },
      ],
      hypothesis:
        "If saving a document takes a scan and a quick check, people will keep invoices and policies in one place instead of across their inbox, chats and drawers.",
      process: ["Problem", "Research", "User flow", "Wireframes", "UI design", "Prototype", "Build", "Test"],
      learnings:
        "Extraction needs a fallback. When cloud AI is offline, signed out or out of quota, the on-device analyser still fills the form and says so, so adding a document always completes.",
      limitation:
        "On-device reading covers Latin and Devanagari scripts; bills in other Indian scripts need the optional page-image upload. Cloud AI also runs on a free quota that a wider release will outgrow.",
      faq: [
        {
          q: "Do I need an account?",
          a: "No. “Skip for Now” keeps everything on this device with on-device analysis. Sign in with Google to back up to your own Drive and use cloud AI.",
        },
        {
          q: "Where are my files stored?",
          a: "Encrypted on your phone, and backed up to a KeepSure folder in your own Google Drive. KeepSure can only see the files it puts there.",
        },
      ],
    },

    {
      name: "MK Player",
      slug: "mk-player",
      shortDescription: "Play every video and song on your phone, sorted into folders and kept on the device.",
      category: "Video Players",
      platform: "Android",
      version: "1.1.0",
      apkUrl: "#",
      apkSize: "14 MB", // placeholder until the real APK size is known
      minAndroid: "Android 8.0 or later",
      icon: { glyph: "play", color: "#2857DA" },
      tint: "#DFEEF2",
      screen: "mk-player",
      updatedDate: "2026-10-13",
      developer: "AppsZone",
      privacyUrl: "#",
      featured: true,
      level: 2,

      headline: "Every video on your phone, one tap away.",
      longDescription:
        "MK Player finds every video and song on your phone and sorts them into folders. The player keeps speed, subtitles and sound one tap away, and nothing you watch leaves the device.",
      screenshots: [
        { screen: "mk-player", caption: "Every folder, newest frame as its cover" },
        { screen: "mk-videos", caption: "The whole library in one grid" },
        { screen: "mk-play", caption: "Controls one tap away" },
        { screen: "mk-music", caption: "Music from the same library" },
      ],
      features: [
        { glyph: "sun", title: "Swipe to adjust", text: "Drag the left edge for brightness, the right for volume, sideways to seek." },
        { glyph: "sound", title: "Music too", text: "Songs, albums and artists from the same device, with an equalizer." },
        { glyph: "lock", title: "Hidden videos", text: "Keep private videos behind a PIN or your fingerprint." },
        { glyph: "offline", title: "Stays on your phone", text: "Your library is never uploaded, and deleted videos wait 30 days." },
      ],
      howItWorks: [
        { title: "Open it. Everything's there.", text: "Every folder that holds a video, with a count of what's new since your last visit.", screen: "mk-player" },
        { title: "Play with simple gestures.", text: "Swipe for brightness, volume or seeking, and double-tap to skip 10 seconds.", screen: "mk-play" },
        { title: "Keep private videos private.", text: "Hide a video or a whole folder, then unlock it with a PIN or fingerprint.", screen: "mk-hidden" },
      ],
      problem:
        "Videos on a phone end up scattered across camera, download and chat folders, and the built-in player offers little control over speed, subtitles or sound.",
      goal: "One library for every video and song on the phone, with a player that keeps the controls people actually use one tap away.",
      designApproach:
        "Each tab is a title, two buttons and the content. Everything beyond that sits one tap away in a sheet, so the screen stays about the video.",
      designDecisions: [
        { title: "One colour for time", text: "Cyan only ever means playback time, and blue only ever means a setting is on." },
        { title: "Nothing hidden by accident", text: "Settings that differ from normal show as badges above the scrubber, so a forgotten audio delay is never a mystery." },
        { title: "Reversible by default", text: "Deleted videos wait 30 days in Recently deleted, and the dialog says how much space they still use." },
      ],
      faq: [{ q: "Does MK Player upload my videos?", a: "No. Your library stays on your phone and nothing is uploaded." }],
    },

    {
      name: "Echolife",
      slug: "echolife",
      shortDescription: "Shop eco-friendly everyday products, from bamboo toothbrushes to compostable phone cases.",
      category: "Shopping",
      platform: "Android",
      figmaUrl: "https://www.figma.com/design/JSJa3atUnb3rDXYumFQch9/Ecolife-Shopping?node-id=0-1&t=wpOBKGTVmQ5Wmxm4-1",
      icon: { glyph: "leaf", color: "#007143" },
      tint: "#E8F2DC",
      screen: "echolife",
      developer: "AppsZone",
    },

    {
      name: "Event Ease",
      slug: "event-ease",
      shortDescription: "Find concerts, workshops and shows in your city, and book tickets in a few taps.",
      category: "Entertainment",
      platform: "Android",
      figmaUrl: "https://www.figma.com/design/bqP9Vh8lfa5ZVpgyCcEeht/Event-Ease?node-id=0-1&t=P0DgzHKFS5AEbHib-1",
      icon: { glyph: "ticket", color: "#E8590C" },
      tint: "#FCEADF",
      screen: "event-ease",
      developer: "AppsZone",
    },

    {
      name: "Image Compressor",
      slug: "image-compressor",
      shortDescription: "Shrink photos before sharing without losing what matters.",
      category: "Utilities",
      platform: "Android",
      version: "2.1.0",
      apkUrl: "#",
      apkSize: "11 MB",
      minAndroid: "Android 8.0 or later",
      icon: { glyph: "compress", color: "#1E7F8C" },
      tint: "#E3EEF0",
      releaseDate: "2026-05-14",
      updatedDate: "2026-08-30",
      developer: "AppsZone",
      privacyUrl: "#",
      featured: false,
      level: 2,
      websiteSlug: "free-compressor",

      headline: "Smaller photos, same moments.",
      longDescription:
        "Image Compressor reduces the file size of photos on your phone so they're quicker to share and take up less space, with a preview before anything is saved.",
      screenshots: [
        { screen: "ic-pick", caption: "Pick one photo or many" },
        { screen: "ic-settings", caption: "Preview quality before saving" },
        { screen: "ic-result", caption: "See exactly what you saved" },
      ],
      features: [
        { glyph: "layers", title: "Batch compression", text: "Compress a whole selection in one go." },
        { glyph: "eye", title: "Quality preview", text: "Compare before and after before you save." },
        { glyph: "copy", title: "Originals stay put", text: "Compressed copies are saved alongside your originals." },
        { glyph: "fileType", title: "Choose a format", text: "Save as JPG, WebP or PNG." },
      ],
      howItWorks: [
        { title: "Select photos.", text: "Pick from your camera roll or any album.", screen: "ic-pick" },
        { title: "Choose quality.", text: "Drag the slider and compare the preview.", screen: "ic-settings" },
        { title: "Save or share.", text: "Keep the smaller copies or send them straight away.", screen: "ic-result" },
      ],
      problem:
        "Phone photos are large. Sharing them over slow connections, attaching them to forms or keeping them on a full phone all hit file-size limits.",
      goal: "Make photos smaller in a way that feels safe — nothing is overwritten, and you can see the result before you commit.",
      designApproach:
        "Preview before commit. Every setting change shows its effect on a real photo, so quality is a visual choice rather than a number.",
      designDecisions: [
        { title: "Non-destructive by default", text: "Compressed images are saved as copies, so trying the app never risks the originals." },
        { title: "Show the trade-off", text: "File size and a side-by-side preview update together as you change quality." },
        { title: "One screen per step", text: "Select, adjust and save are separate screens, which keeps each decision small." },
      ],
      faq: [
        { q: "Is there a version for my computer?", a: "Yes. FreeCompressor does the same thing in your browser, with nothing to install." },
      ],
    },

  ],

  // Live sites. Cards open the detail page (app.html?slug=…) with a second link
  // straight to `url`. Screenshots are real captures of each site or plugin:
  // `frame` is "browser" or "plugin". `timeline` and `proof` come from each
  // product's own repository history and test reports.
  websites: [
    {
      name: "HTML to Figma",
      slug: "html-to-figma",
      shortDescription: "Paste HTML and get editable Figma layers: frames, text, components and styles.",
      category: "Design",
      platform: "Web · Figma plugin",
      url: "https://htmltofigma.in/",
      domain: "htmltofigma.in",
      icon: { glyph: "layers", color: "#C9390F" },
      tint: "#F3E9E2",
      screen: "html-to-figma",
      featured: true,
      status: "Early access",
      pricing: "Free during early access: 30 imports a month, renewed on the 1st, with no card needed.",
      launchDate: "2026-10-01",
      updatedDate: "2026-10-06",
      developer: "AppsZone",
      level: 3,

      hero: { src: "assets/img/html-to-figma-hero.webp", alt: "The htmltofigma.in home page: Turn HTML into editable Figma layers" },
      headline: "Real layers, not a picture of a page.",
      longDescription:
        "HTML to Figma renders your HTML in a real browser frame inside the plugin, measures every element, then rebuilds it as Figma frames, text, vectors and images. Repeated patterns become components and repeated colours and type become local styles, so what lands on the canvas is a design you can keep working on.",
      screenshots: [
        { src: "assets/img/html-to-figma-demo.webp", frame: "browser", caption: "Paste HTML, import, and edit the layers", alt: "HTML code, the HTML to Figma plugin window and the resulting editable card on a Figma canvas" },
        { src: "assets/img/html-to-figma-features.webp", frame: "browser", caption: "Layers built the way a designer would build them", alt: "Six features: real layers, components, local styles, click states, import again and privacy" },
        { src: "assets/img/html-to-figma-modes.webp", frame: "browser", caption: "Three ways to build: Exact, Editable or Auto Layout", alt: "The three conversion modes, with Editable marked as the default" },
        { src: "assets/img/html-to-figma-counting.webp", frame: "browser", caption: "An import only counts when it succeeds", alt: "Fair counting: failed and cancelled imports use no imports" },
      ],
      features: [
        { glyph: "layers", title: "Editable layers", text: "Real frames, text, vectors and images you can select and change, not a screenshot of the page." },
        { glyph: "copy", title: "Components and instances", text: "A pattern that repeats becomes one component, and each instance keeps its own content." },
        { glyph: "palette", title: "Local styles", text: "Colours and text settings used more than once become styles, linked to the layers that use them." },
        { glyph: "pointer", title: "Click states, linked", text: "The plugin clicks buttons and tabs, and each resulting screen becomes a frame joined by a prototype link." },
        { glyph: "refresh", title: "Import again, in place", text: "Changed the HTML? The new frames replace the old ones in the same spot on the canvas." },
        { glyph: "lock", title: "Your HTML stays with you", text: "Conversion runs inside the plugin on your computer. Your HTML is never sent to a server." },
      ],
      howItWorks: [
        { title: "Paste HTML or drop a file.", text: "A whole page or a fragment, from an AI assistant, your own codebase or an email template.", src: "assets/img/html-to-figma-step-paste.webp" },
        { title: "Pick how the layers are built.", text: "Exact, Editable or Auto Layout, with components, styles and click states as options.", src: "assets/img/html-to-figma-step-plugin.webp" },
        { title: "Edit real layers in Figma.", text: "The frame lands selected on your canvas, with a report of what was built.", src: "assets/img/html-to-figma-step-canvas.webp" },
      ],

      story: [
        "HTML now arrives from everywhere: Claude, ChatGPT, v0, Lovable, Cursor or a team's own codebase. Getting it into Figma still meant redrawing it by hand or pasting a flat screenshot, which makes the design file the slowest step in the loop.",
        "It began in June as a prototype that rendered pages and showed their layers, and an August experiment with Figma's clipboard format proved the only real route was a plugin. From there, the work was to turn a working converter into a product people could install and trust: a website, Google sign-in, a fair monthly import quota and a Figma Community listing.",
      ],
      problem:
        "Figma's clipboard is a closed binary format, so markup can't simply be pasted onto the canvas. Screenshot-style imports give you a picture, not layers, and rebuilding a page by hand throws away work that already exists in code.",
      goal: "Turn any HTML into the layers a designer would have built by hand: editable text, real frames, components and styles, with nothing uploaded.",
      designApproach:
        "Let the browser do the measuring. The HTML renders in a real Chromium frame, every element is read with its computed styles and position, and the plugin rebuilds what the browser actually drew.",
      hypothesis:
        "If importing HTML gives designers real, structured layers instead of a picture, they will start from code more often and stop redrawing screens by hand.",
      designDecisions: [
        { title: "Measure, don't parse", text: "The plugin never hand-parses CSS. A real browser lays the page out, so Flexbox, Grid and media queries resolve exactly as they do on the web." },
        { title: "Fidelity before structure", text: "A row becomes Auto Layout only if a simulation puts every child back within 1.5 px. Otherwise it stays fixed, because a tidy layer tree that looks wrong is worse than none." },
        { title: "Count only what lands", text: "An import is counted once the layers exist on the canvas. Failed, cancelled or abandoned imports are given back automatically." },
        { title: "Sign in with a typed code", text: "Connecting the plugin uses a short code you type, not a link, so nobody can send you a link that ties your plugin to their account." },
        { title: "Fail gently", text: "Cancelling leaves the canvas untouched. A layer Figma rejects is skipped and named in the report, and blocked images become labelled placeholders." },
        { title: "No Paste button, on purpose", text: "Figma blocks clipboard access inside plugin windows, so the field asks for ⌘V instead of offering a button that could never work." },
      ],
      duration: "3 months",
      // UX timeline: phases dated from the project's own files and commits.
      timeline: [
        { phase: "Discover", start: "2026-06-23", end: "2026-06-26", title: "A prototype to learn from", text: "A small web app that fetched a page by its address, rendered it and showed the result as a layer tree. Building it surfaced the real question: how do layers get into Figma at all?", outputs: ["URL fetcher", "Renderer", "Layer tree editor"] },
        { phase: "Research", start: "2026-08-12", end: "2026-08-12", title: "Testing the clipboard route", text: "An encoder for Figma's own clipboard format, generated from its schema and covered by tests, to paste layers straight onto the canvas. The finding: the clipboard is a closed binary format, and only the Plugin API creates real, editable layers. The project pivoted to a plugin.", outputs: ["Clipboard encoder", "Schema study", "Pivot to a plugin"] },
        { phase: "Define", start: "2026-09-30", end: "2026-09-30", title: "One clear scope", text: "A product spec covering import types, what counts as an import, plans and the end-to-end journey. The first release was cut to HTML only, with 30 free imports a month and no features added for feature count.", outputs: ["Product spec", "Import rules", "User journey"] },
        { phase: "Design", start: "2026-09-30", end: "2026-10-02", title: "The plugin and its website", text: "The website and accounts first, then the plugin window redesigned from fresh mockups, and a landing page where scrolling plays an import step by step.", outputs: ["Plugin UI", "Landing page", "Listing assets"] },
        { phase: "Develop", start: "2026-09-30", end: "2026-10-03", title: "From tool to product", text: "Google sign-in, plugin connection by typed code, fair import counting, an admin panel, legal pages and security hardening.", outputs: ["Accounts", "Import counting", "Admin panel"] },
        { phase: "Test", start: "2026-10-01", end: "2026-10-03", title: "Measure, fix, measure again", text: "An audit of the existing engine, then 53 test pages measured before and after the fixes, 163 real-world pages, and a security review of the plugin.", outputs: ["Initial audit", "Before and after report", "Security audit"] },
        { phase: "Launch", start: "2026-10-03", end: "2026-10-06", title: "Public on Figma Community", text: "First published on 3 October, then approved and listed under Import & export on 6 October.", outputs: ["Community listing", "htmltofigma.in"] },
        { phase: "Next", planned: true, when: "Planned", title: "Paid plans and more ways in", text: "Starter and Pro packs once payments are in place, and the import types already in the spec: website addresses and JSON payloads.", outputs: ["Paid packs", "URL import", "JSON import"] },
      ],
      proof: [
        { value: "163/163", label: "real-world pages imported, at a median of 1.6 s each" },
        { value: "95.6%", label: "of elements within 1 px of the browser, up from 90.6%" },
        { value: "99.7%", label: "of visible text kept, up from 98.5%" },
        { value: "2.7 s", label: "median import time, down from 4.2 s" },
      ],
      proofNote: "Measured on 53 test pages (64 runs at several widths) and 163 real-world pages. No page got worse after the fixes.",
      learnings:
        "Click states made imports slower, to a 4.7 s median. Two changes won the time back: a click that changes nothing finishes after 100 ms, and a jump within the page is undone instead of reloading it. Click states still ships switched off by default.",
      limitation:
        "CSS Grid is flattened to fixed positions, fonts missing from Figma are swapped for the closest match, and images blocked by CORS become placeholders. Pages built by JavaScript need their rendered HTML copied from the browser.",
      faq: [
        { q: "Is my HTML uploaded to a server?", a: "No. Conversion runs inside the plugin on your computer. The plugin only contacts htmltofigma.in to sign you in and check your imports." },
        { q: "What counts as an import?", a: "An import counts once the layers are on your canvas. If it fails or you cancel, it isn't counted." },
        { q: "What about pages built with JavaScript?", a: "Copy the rendered HTML from your browser's developer tools and paste that into the plugin." },
      ],
    },
    {
      name: "Docs to Design",
      slug: "docs-to-design",
      shortDescription: "Bring PDF, PowerPoint and Word files into Figma as editable text, vectors and images.",
      category: "Design",
      platform: "Web · Figma plugin",
      url: "https://docstodesign.in/",
      domain: "docstodesign.in",
      icon: { glyph: "fileType", color: "#6553F5" },
      tint: "#ECEAFD",
      screen: "docs-to-design",
      featured: true,
      status: "Early access",
      pricing: "Free during early access. Without an account, import the first 3 pages of any document; a free account gives 5 documents a month, up to 20 pages each. Export is free and unlimited.",
      launchDate: "2026-10-14",
      updatedDate: "2026-10-22",
      developer: "AppsZone",
      level: 3,

      hero: { src: "assets/img/docs-to-design-hero.webp", alt: "The docstodesign.in home page: Turn any Docs into editable Figma layers" },
      headline: "Keep designing, without rebuilding the document.",
      longDescription:
        "Docs to Design reads a PDF, PowerPoint deck or Word file inside the Figma plugin and places each page as a frame of editable layers. Text stays text on its original baselines, fonts are matched before anything is placed, and a report names anything that didn't convert. When the design is done, the frames export back to PDF, PowerPoint or Word.",
      screenshots: [
        { src: "assets/img/docs-to-design-file.webp", frame: "plugin", caption: "Choose a file and its pages", alt: "Plugin with brand-guidelines.pdf chosen and its pages selected" },
        { src: "assets/img/docs-to-design-options.webp", frame: "plugin", caption: "Fine-tune layout and accuracy", alt: "Plugin import options for text, auto layout, components and accuracy" },
        { src: "assets/img/docs-to-design-fonts.webp", frame: "plugin", caption: "Check every font match first", alt: "Plugin font review matching Helvetica to Arimo" },
        { src: "assets/img/docs-to-design-done.webp", frame: "plugin", caption: "A report of what came in", alt: "Plugin import summary with text, vector and image counts" },
        { src: "assets/img/docs-to-design-export.webp", frame: "plugin", caption: "Export frames back out", alt: "Plugin export tab for PDF, PowerPoint and Word" },
      ],
      features: [
        { glyph: "layers", title: "Editable layers", text: "Text, vectors and images arrive as layers you can change. Text sits on its original baselines." },
        { glyph: "type", title: "Font matching", text: "Each font is matched to one Figma can use, preferring metric-compatible substitutes like Arimo for Arial." },
        { glyph: "copy", title: "Auto layout and components", text: "Optionally, stacks become auto layout frames and repeated elements become components." },
        { glyph: "palette", title: "Native effects", text: "Shadows, masks and gradients become their Figma equivalents where they match." },
        { glyph: "info", title: "An import report", text: "Each page lists its text, font and image counts, and names anything that didn't convert." },
        { glyph: "share", title: "Export back out", text: "Frames export to PDF with links and bookmarks, or to PowerPoint or Word." },
      ],
      howItWorks: [
        { title: "Choose a document and its pages.", text: "Run the plugin in any Figma file, sign in once with Google, and pick a PDF, deck or Word file.", src: "assets/img/docs-to-design-file.webp" },
        { title: "Pick a mode and check the fonts.", text: "Editable, Vector outlines or Image. See how each font will be matched before anything is placed.", src: "assets/img/docs-to-design-fonts.webp" },
        { title: "Edit it in Figma.", text: "Every page lands as a frame. Export the frames back to PDF, PowerPoint or Word when you're done.", src: "assets/img/docs-to-design-done.webp" },
      ],

      story: [
        "Docs to Design grew out of HTML to Figma. Once HTML could become editable layers, the next gap was obvious: the documents teams already have, from brand guidelines to pitch decks and reports, usually arrive as PDFs.",
        "Research began in June. By September there were test PDFs and an engine prototype, and on 5 October it became a product plan, reusing what had already worked: Figma Community distribution, Google sign-in, monthly limits and the same account pages. When Word and PowerPoint joined the launch plan two days later, a PDF-only name no longer fit. Paperlayer and Docs to Figma came first; Docs to Design stuck.",
      ],
      problem:
        "Figma Design can't open a PDF, and the tools that can tend to hand back a picture of each page, lettering turned into outlines, or a free tier that stops after three pages. So designers rebuild brand guidelines, decks and reports by hand before they can change a word.",
      goal: "Bring whole documents into Figma as layers people can edit, show how faithful the result is, and never lose anything silently.",
      designApproach:
        "Exactness first. Every choice that could change how a page looks, from the import mode to each font substitute, is shown before anything is placed, and anything that couldn't convert is named in the report.",
      hypothesis:
        "If a document lands in Figma as editable layers that match the original line for line, designers will start from the file they already have instead of rebuilding it.",
      designDecisions: [
        { title: "Editable by default", text: "Three modes cover three jobs: Editable keeps live text, Outlines matches the page exactly but can't be edited, and Image places one picture per page. Most people open a document to change it, so Editable comes first." },
        { title: "Review fonts before import", text: "Unmatched fonts are reviewed one by one, and substitutes are chosen to keep line widths, so lines break where the original breaks them." },
        { title: "Nothing silently lost", text: "The report names what was skipped, and each frame carries a hidden, locked render of the original page to check alignment against." },
        { title: "Processed on your computer", text: "Documents are converted inside the plugin and never uploaded. The website only sees your sign-in and import count." },
        { title: "A free tier for whole documents", text: "Free tiers elsewhere often stop at three pages. Here, a free account imports 5 documents a month at up to 20 pages each." },
        { title: "Beta, said out loud", text: "PowerPoint and Word import are labelled Beta. For an exact copy of a Word file, the plugin suggests saving it as PDF and importing that." },
      ],
      duration: "Almost 5 months",
      // UX timeline: dated from the project's own files, commits and plan. The
      // early phases are month-level: they predate the first files.
      timeline: [
        { phase: "Discover", start: "2026-06", end: "2026-07", title: "The problem behind the product", text: "Brand guidelines, pitch decks and reports reach designers as PDFs, and Figma Design can't open them. The people affected: UI and product designers, deck and brand designers, and consultants who need to edit a document they didn't make.", outputs: ["Problem statement", "Audience"] },
        { phase: "Research", start: "2026-07", end: "2026-09", title: "How existing tools fall short", text: "Hands-on time with the options: free tiers that stop after three pages, lettering that arrives as outlines, a plugin that places one image per page, and tools that upload your files. Fidelity, editability and privacy became the bar to clear.", outputs: ["Competitor teardown", "Success criteria"] },
        { phase: "Prototype", start: "2026-09-18", end: "2026-09-24", title: "How PDFs really differ", text: "Test PDFs from Chromium, LaTeX, ReportLab, form tools and deliberate edge cases, and a first engine reading their geometry. By 24 September there was a working plugin build, tested against files with missing font maps and page masks.", outputs: ["Test fixtures", "Engine prototype", "First plugin build"] },
        { phase: "Analyse", start: "2026-10-03", end: "2026-10-05", title: "Learning from what exists", text: "A study of how HTML to Figma handles accounts, quotas and import counting, a generated corpus covering CJK, Indic, emoji, gradients and invoices, and the competitor findings written up, from pdf.to.design to FigJam's own PDF import.", outputs: ["Research notes", "Test corpus", "Competitor review"] },
        { phase: "Define", start: "2026-10-05", end: "2026-10-07", title: "A plan with a launch date", text: "A product and technical plan: its own plugin and site, Editable as the default, a free tier and an eleven-week schedule to launch. Two days later Word and PowerPoint moved into the launch, backed by research into how Word lays out fonts, images, shapes and text boxes.", outputs: ["Product and technical plan", "Formats research", "Launch schedule"] },
        { phase: "Develop", start: "2026-10-06", end: "2026-10-13", title: "Stabilise the engine", text: "Unnamed fonts imported as real text, font matches reviewed before import and remembered, auto layout kept exact, and frames exporting back to PDF with links and bookmarks.", outputs: ["Font check", "PDF export"] },
        { phase: "Design", start: "2026-10-14", end: "2026-10-16", title: "A name, a brief and a new interface", text: "Design briefs set the audience, creative direction and design system for the website. The plugin interface was redesigned, sign-in and import limits were added, and the product became Docs to Design.", outputs: ["Landing page brief", "Plugin redesign", "docstodesign.in"] },
        { phase: "Develop", start: "2026-10-17", end: "2026-10-21", title: "PowerPoint and Word", text: "PowerPoint import and export merged on the busiest day of the project, 133 commits, followed by Word export and import. Both ship labelled Beta.", outputs: ["PowerPoint, beta", "Word, beta"] },
        { phase: "Test", start: "2026-10-20", end: "2026-10-22", title: "Reviews before release", text: "A staged review of Word import, a security review and an accessibility review of the redesigned plugin, on top of the corpus gates every change must pass.", outputs: ["Security review", "Accessibility review", "Corpus gates"] },
        { phase: "Publish", start: "2026-10-22", end: "2026-10-22", title: "Ready for Figma Community", text: "Figma assigned the plugin its ID, the listing was written and the website's formats section rebuilt.", outputs: ["Plugin ID", "Community listing"] },
        { phase: "Launch", planned: true, start: "2026-10-23", end: "2026-12-18", title: "Beta, then launch", text: "Beta for all three formats, then launch on 18 December 2026, the date set in the plan, with a buffer week built in.", outputs: ["Beta", "Public launch"] },
      ],
      proof: [
        { value: "356", label: "pages in the test corpus, from 121 files and 10+ PDF producers" },
        { value: "0.002%", label: "median pixel difference from the reference render in Outlines mode" },
        { value: "102/104", label: "files bring in every character as editable text" },
        { value: "621", label: "plugin commits from the first plan to a Community-ready build" },
      ],
      proofNote: "Every change runs against the corpus: under 1% pixel difference, at least 98% of text recovered, and no crash within 4 minutes.",
      learnings:
        "PDF parsing internals are fragile. One library upgrade changed eight behaviours that only the test corpus caught, so the corpus became the gate every change has to pass.",
      limitation:
        "There's no OCR yet, so scanned pages come in as images. Right-to-left and vertical text import in visual order, glows and knockout groups become images, and PowerPoint and Word pages can lay out a little differently from the originals.",
      faq: [
        { q: "Are my documents uploaded?", a: "No. Documents are converted inside the plugin on your computer and never uploaded." },
        { q: "How much can I import for free?", a: "Without an account, the first 3 pages of any document. With a free account, 5 documents a month, up to 20 pages each. Export is free and unlimited." },
        { q: "Can it read scanned PDFs?", a: "Not yet. Scanned pages come in as images; OCR is planned." },
      ],
    },
    {
      name: "FreeCompressor",
      slug: "free-compressor",
      shortDescription: "Compress images in your browser. No uploads, no sign-up, no limits.",
      category: "Tools",
      platform: "Web",
      url: "https://freecompressor.online/",
      domain: "freecompressor.online",
      icon: { glyph: "minimize", color: "#2563EB" },
      tint: "#E7EEFB",
      screen: "free-compressor",
      featured: true,
      status: "Live",
      pricing: "Free, with no account, no daily cap, no file-size limit and no watermark.",
      launchDate: "2026-07-02",
      updatedDate: "2026-07-04",
      developer: "AppsZone",
      level: 3,

      hero: { src: "assets/img/freecompressor-hero.webp", alt: "The freecompressor.online home page with its drop zone" },
      headline: "Smaller images. Your files never leave your device.",
      longDescription:
        "FreeCompressor re-encodes images right in your browser, so nothing is uploaded and there's nothing to sign up for. Pick a preset or a target size, watch a live before-and-after, and download one image or a whole batch.",
      screenshots: [
        { src: "assets/img/freecompressor-tool.webp", frame: "browser", caption: "A live before-and-after, with the saving up front", alt: "A PNG compressed from 266.7 KB to 112.1 KB, a 58% saving, with a before-and-after divider" },
        { src: "assets/img/freecompressor-features.webp", frame: "browser", caption: "Compression without the compromises", alt: "Six benefits: browser based, fast, private, unlimited, batch and high quality" },
        { src: "assets/img/freecompressor-compare.webp", frame: "browser", caption: "How it compares with upload-based tools", alt: "Comparison table against TinyPNG, CompressJPEG and CloudConvert" },
        { src: "assets/img/freecompressor-suite.webp", frame: "browser", caption: "A full suite, with only what's ready marked Live", alt: "The tool suite: Image Compressor marked Live, the other compressors and converters marked Soon" },
      ],
      features: [
        { glyph: "lock", title: "Nothing uploaded", text: "Images are compressed on your device with the canvas API and WebAssembly, and it works offline once loaded." },
        { glyph: "target", title: "Target size", text: "Pick 20 KB up to 1 MB and it finds the best quality that fits, or says when a target can't be reached." },
        { glyph: "layers", title: "Batch", text: "Compress one image or a thousand, then download them all at once." },
        { glyph: "fileType", title: "Every common format", text: "Reads PNG, JPG, WebP, GIF, AVIF and HEIC. Saves as PNG, JPG, WebP or AVIF." },
        { glyph: "focus", title: "Resize and crop", text: "Preset widths, a custom size and a crop editor with aspect presets." },
        { glyph: "eye", title: "Before and after", text: "Drag a divider to compare, over a checkerboard that shows transparency is kept." },
      ],
      howItWorks: [
        { title: "Drop your images.", text: "Drag and drop, browse, or paste straight from your clipboard.", src: "assets/img/freecompressor-step-drop.webp" },
        { title: "Pick a preset or a size.", text: "Best, Balanced or Smallest, or a target such as 100 KB, with resize and crop if you need them.", src: "assets/img/freecompressor-step-settings.webp" },
        { title: "See the saving, then download.", text: "Compare before and after, then save one image or the whole batch.", src: "assets/img/freecompressor-step-result.webp" },
      ],

      story: [
        "FreeCompressor grew out of a single-file image compressor with a strong, restrained visual language. Modern browsers can encode PNG, WebP and even AVIF on their own, so there was no good reason for a free compressor to upload anyone's screenshots, contracts or family photos.",
        "The plan is a full suite for images, PDFs, documents, video and audio. The image compressor shipped first because it runs entirely in the browser. The formats that need a server stay marked Soon until they can keep the same promise.",
      ],
      problem:
        "Most free online compressors are upload services with a free teaser. Your files go to someone else's server, and the free tiers of popular tools cap you at 5 to 10 MB per file and 20 images at a time.",
      goal: "A compressor where privacy is the architecture, not a policy: no uploads, no accounts, no caps, and every job ends by showing how much smaller the file got.",
      designApproach:
        "Local first and honest. If a job can run in the browser, it must. Numbers are set in monospace so the tool reads like a precise instrument, and savings carry a − or + sign so colour is never the only signal.",
      hypothesis:
        "If compressing in the browser is as quick and easy as an upload tool, people will choose the private option without having to think about it.",
      designDecisions: [
        { title: "Encode in the browser", text: "Images are re-encoded on canvas, with a PNG optimiser, a WebAssembly AVIF encoder and a HEIC decoder that loads only when needed. Formats that need a server wait, marked Soon." },
        { title: "A pool of workers", text: "Up to five Web Workers compress in the background, so the page stays responsive through a batch. Every file can be cancelled or retried." },
        { title: "Search for the target", text: "Target sizes run a binary search on quality and stop within ±5%. Auto keeps a lossless PNG when it fits, and otherwise picks the best lossy format." },
        { title: "Mono for numbers", text: "Sizes and savings are set in monospace and always carry a sign, so the result reads clearly without relying on colour." },
        { title: "Pages that bring people in", text: "A small static-site generator builds the tool pages, 41 guides, structured data and the sitemap, and each tool links to related guides." },
        { title: "Promise what's live", text: "Only the image compressor is marked Live. Every other tool in the suite says Soon, with a preview of what's coming." },
      ],
      duration: "1.5 months",
      // UX timeline: dated from the project's own files and commits. The early
      // phases are month-level: they predate the first files.
      timeline: [
        { phase: "Origin", start: "2026-05", end: "2026-05", title: "A single-file compressor", text: "The starting point was a single-file image compressor with a strong, restrained visual language, proof that the browser could do the work on its own.", outputs: ["Visual language", "Working compressor"] },
        { phase: "Research", start: "2026-06", end: "2026-06", title: "What free compressors get wrong", text: "A look at TinyPNG, CompressJPEG and CloudConvert: every one uploads your files, and their free tiers cap file size and batch size. That set the principles: local first, free means free, fast is a feature.", outputs: ["Comparison table", "Principles"] },
        { phase: "Develop", start: "2026-07-01", end: "2026-07-02", title: "Version one, live", text: "Compression in the browser for images, a separate engine for the formats that need a server, and the image-only site published to GitHub Pages.", outputs: ["Image compressor", "freecompressor.online"] },
        { phase: "Design", start: "2026-07-03", end: "2026-07-03", title: "A design system and a redesign", text: "A new design system with dark mode, monospace for numbers, and new tools in the flow: resize and crop, target sizes and batch.", outputs: ["Design system", "Dark mode", "Target size mode"] },
        { phase: "Develop", start: "2026-07-03", end: "2026-07-03", title: "A compressor that stays responsive", text: "A pool of Web Workers, a reliable target-size search and a crop editor.", outputs: ["Worker pipeline", "Crop editor"] },
        { phase: "Test", start: "2026-07-03", end: "2026-07-04", title: "Break it before users do", text: "Headless browser tests under the production security policy, batches of 50 images, a 72 MB photo and an adversarial review that found 8 defects. A Lighthouse pass took SEO, accessibility and best practices to 100 and caught a homepage bug in production.", outputs: ["Browser tests", "Defect review", "Lighthouse 100"] },
        { phase: "Grow", start: "2026-07-04", end: "2026-07-04", title: "Guides that bring people in", text: "41 guides grouped by topic and linked from each tool, plus a 12-month plan for earning links from other sites.", outputs: ["41 guides", "Link strategy"] },
        { phase: "Next", planned: true, when: "Roadmap", title: "The rest of the suite", text: "The PDF compressor is in development. Video, audio, ZIP and document compressors and the converters follow, each going live only when it can keep the no-upload promise.", outputs: ["PDF compressor", "Video and audio", "Converters"] },
      ],
      proof: [
        { value: "100", label: "Lighthouse SEO, Accessibility and Best Practices, on four page types" },
        { value: "±5%", label: "every target size from 20 to 200 KB landed within tolerance, in every format" },
        { value: "72 MB", label: "a 24-megapixel image compressed entirely in the browser" },
        { value: "50", label: "images in one batch, with the longest frame gap around 33 ms" },
      ],
      proofNote: "Tested in headless Chromium under the production security policy, with zero console errors. An adversarial review found 8 defects, all fixed before release.",
      learnings:
        "Moving to ES modules quietly broke the homepage compressor in production. Fixes made in the generated pages would have vanished on the next build, so they went into the generator itself.",
      limitation:
        "Only the image compressor is live. The PDF, video, audio, ZIP and document compressors and the converters are still marked Soon, and AVIF encoding is a little slower than the other formats.",
      faq: [
        { q: "Are my images uploaded?", a: "No. Every image is compressed in your browser and never leaves your device." },
        { q: "Is there a limit?", a: "No daily caps, file-size limits or watermarks. Compress one image or a thousand." },
        { q: "Which formats work?", a: "It reads PNG, JPG, WebP, GIF, AVIF and HEIC, and saves as PNG, JPG, WebP or AVIF." },
      ],
    },
  ],
};
