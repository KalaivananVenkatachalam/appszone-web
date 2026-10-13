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

  // Live sites: cards link straight to `url` and open in a new tab.
  websites: [
    {
      name: "HTML to Figma",
      slug: "html-to-figma",
      shortDescription: "Paste HTML and get editable Figma layers: frames, text, components and styles.",
      category: "Design",
      url: "https://htmltofigma.in/",
      domain: "htmltofigma.in",
      icon: { glyph: "layers", color: "#C9390F" },
      tint: "#F3E9E2",
      screen: "html-to-figma",
      featured: true,
    },
    {
      name: "FreeCompressor",
      slug: "free-compressor",
      shortDescription: "Compress images in your browser. No uploads, no sign-up, no limits.",
      category: "Tools",
      url: "https://freecompressor.online/",
      domain: "freecompressor.online",
      icon: { glyph: "minimize", color: "#2563EB" },
      tint: "#E7EEFB",
      screen: "free-compressor",
      featured: true,
    },
  ],
};
