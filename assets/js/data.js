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
 * - `level` follows the portfolio strategy (§34): 1 = utility (no "Behind the
 *   product"), 2 = product (problem, goal, decisions), 3 = portfolio product
 *   (adds hypothesis, design process and learnings).
 * - Portfolio copy uses honest framing (§35): hypotheses and limitations,
 *   never invented research or metrics.
 */
window.APPSZONE_DATA = {
  apps: [
    {
      name: "Receipt Keeper",
      slug: "receipt-keeper",
      shortDescription: "A simple way to organize receipts and purchase information.",
      category: "Productivity",
      platform: "Android",
      version: "1.0.0",
      apkUrl: "#", // replace with the real APK URL
      apkSize: "18 MB",
      minAndroid: "Android 8.0 or later",
      icon: { glyph: "receipt", color: "#E2733A" },
      tint: "#F4EBE1",
      screen: "receipt-keeper",
      releaseDate: "2026-09-18",
      updatedDate: "2026-09-18",
      developer: "AppsZone",
      privacyUrl: "#",
      featured: true,
      level: 3,

      headline: "Keep your receipts organized.",
      longDescription:
        "Receipt Keeper helps you save purchase information, keep track of important dates and quickly find the details you need.",
      screenshots: [
        { screen: "receipt-keeper", caption: "Receipts and deadlines at a glance" },
        { screen: "rk-capture", caption: "Scan a paper receipt" },
        { screen: "rk-review", caption: "Check the details it found" },
        { screen: "rk-detail", caption: "Return windows and warranties" },
      ],
      features: [
        { glyph: "receipt", title: "Save receipts", text: "Keep important purchase information in one place." },
        { glyph: "calendar", title: "Track important dates", text: "Keep expiry and return information easy to find." },
        { glyph: "search", title: "Find things quickly", text: "Search and access saved information without digging through files." },
        { glyph: "focus", title: "Keep it simple", text: "A focused interface without unnecessary features." },
      ],
      howItWorks: [
        { title: "Add your receipt.", text: "Take a photo of a paper receipt or pick one from your gallery.", screen: "rk-capture" },
        { title: "Review the extracted information.", text: "Store, date and total are filled in for you to check.", screen: "rk-review" },
        { title: "Save and access it whenever you need it.", text: "Return windows and warranties stay visible until they matter.", screen: "rk-detail" },
      ],
      problem:
        "Paper receipts fade, get lost in bags and pile up in drawers. When something needs to go back, the receipt, the return deadline and the warranty are rarely in the same place.",
      goal: "Make it effortless to capture a receipt at the moment of purchase, and surface the dates that matter before they pass.",
      designApproach:
        "Capture first, organize later. The app asks for as little as possible up front and fills in the rest from the receipt itself.",
      designDecisions: [
        {
          title: "Prioritize important information",
          text: "The interface surfaces the information users need most often while keeping secondary details available without overwhelming the screen.",
        },
        {
          title: "Progressive disclosure",
          text: "Less frequently used information is revealed only when needed.",
        },
        {
          title: "Mobile-first interaction",
          text: "Primary actions are placed within comfortable reach for one-handed use.",
        },
      ],
      hypothesis:
        "If adding a receipt takes a few seconds, people will capture it at the point of purchase instead of meaning to do it later.",
      process: ["Problem", "Research", "User flow", "Wireframes", "UI design", "Prototype", "Build", "Launch", "Learn"],
      learnings:
        "Auto-filled fields need to look editable. When extracted values looked final, small mistakes were easy to miss, so every field now shows where its value came from.",
      limitation:
        "Text recognition works best on printed receipts. Handwritten or heavily faded receipts still need a few details typed in.",
      faq: [
        { q: "Do I need an account?", a: "No. Receipt Keeper works without an account or sign-up." },
        { q: "Can I add receipts I already photographed?", a: "Yes. You can pick an existing photo from your gallery instead of using the camera." },
      ],
    },

    {
      name: "Fair Share",
      slug: "fair-share",
      shortDescription: "Split shared bills and see who owes what at a glance.",
      category: "Finance",
      platform: "Android",
      version: "1.2.0",
      apkUrl: "#",
      apkSize: "14 MB",
      minAndroid: "Android 8.0 or later",
      icon: { glyph: "split", color: "#23855A" },
      tint: "#E5EEE6",
      screen: "fair-share",
      releaseDate: "2026-07-22",
      updatedDate: "2026-09-04",
      developer: "AppsZone",
      privacyUrl: "#",
      featured: true,
      level: 2,

      headline: "Split costs without the awkward maths.",
      longDescription:
        "Fair Share keeps a running tally of shared expenses for trips, flats and dinners, then works out the fewest payments needed to settle up.",
      screenshots: [
        { screen: "fair-share", caption: "Where you stand, first" },
        { screen: "fs-add", caption: "Add an expense in seconds" },
        { screen: "fs-settle", caption: "Settle up in a few payments" },
      ],
      features: [
        { glyph: "users", title: "Groups for anything", text: "Trips, flatmates, dinners — keep each one separate." },
        { glyph: "sliders", title: "Flexible splits", text: "Split equally, by shares or by exact amounts." },
        { glyph: "route", title: "Fewest payments", text: "Settle-up suggests the smallest number of transfers." },
        { glyph: "userCheck", title: "Only you need the app", text: "Friends don't have to install anything or sign up." },
      ],
      howItWorks: [
        { title: "Create a group.", text: "Name it and add the people sharing costs.", screen: "fair-share" },
        { title: "Add expenses as they happen.", text: "Enter the amount, who paid and who it's for.", screen: "fs-add" },
        { title: "Settle up.", text: "See the fewest payments that make everyone even.", screen: "fs-settle" },
      ],
      problem:
        "Shared costs are easy to lose track of. After a trip, working out who owes whom turns into spreadsheets, screenshots and guesswork.",
      goal: "Keep a fair running balance with as little input as possible, and make settling up feel neutral rather than awkward.",
      designApproach:
        "Show balances, not ledgers. The first thing you see is where you stand; the full history is there when you want it.",
      designDecisions: [
        { title: "Balance first", text: "Each group opens on a single number — what you owe or are owed — before any list of expenses." },
        { title: "Neutral language", text: "Plain phrasing like “you lent” and “you owe” keeps money conversations matter-of-fact." },
        { title: "Sensible defaults", text: "New expenses split equally between everyone, which covers most cases without extra taps." },
      ],
      faq: [{ q: "Do my friends need to install Fair Share?", a: "No. Only the person keeping track needs the app." }],
    },

    {
      name: "Quiet Timer",
      slug: "quiet-timer",
      shortDescription: "A calm focus timer with no accounts and nothing to configure.",
      category: "Productivity",
      platform: "Android",
      version: "1.0.1",
      apkUrl: "#",
      apkSize: "6 MB",
      minAndroid: "Android 8.0 or later",
      icon: { glyph: "timer", color: "#26232F" },
      tint: "#ECEAF2",
      screen: "quiet-timer",
      releaseDate: "2026-09-02",
      updatedDate: "2026-09-12",
      developer: "AppsZone",
      privacyUrl: "#",
      featured: false,
      level: 1,

      headline: "Focus without fiddling.",
      longDescription:
        "Quiet Timer starts a focus session in one tap. Pick a length, press start and put your phone face down.",
      screenshots: [
        { screen: "quiet-timer", caption: "A calm countdown" },
        { screen: "qt-setup", caption: "Pick a length and a sound" },
        { screen: "qt-week", caption: "See your week" },
      ],
      features: [
        { glyph: "play", title: "One-tap start", text: "Your last session length is ready to go." },
        { glyph: "sound", title: "Gentle sounds", text: "Optional rain or café sounds, or silence." },
        { glyph: "chart", title: "Weekly overview", text: "A simple view of the time you've focused." },
        { glyph: "userCheck", title: "No accounts", text: "Open it and start. Nothing to sign up for." },
      ],
      howItWorks: [
        { title: "Pick a length.", text: "Choose a preset or keep your last one.", screen: "qt-setup" },
        { title: "Start the session.", text: "The timer runs quietly in the background.", screen: "quiet-timer" },
        { title: "Take a break.", text: "A soft chime tells you when to stop.", screen: "qt-week" },
      ],
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

    {
      name: "Little Habits",
      slug: "little-habits",
      shortDescription: "Track small daily habits with a single tap.",
      category: "Lifestyle",
      platform: "Android",
      version: "1.3.0",
      apkUrl: "#",
      apkSize: "9 MB",
      minAndroid: "Android 8.0 or later",
      icon: { glyph: "check", color: "#D9546A" },
      tint: "#F6E6E8",
      releaseDate: "2026-04-03",
      updatedDate: "2026-07-15",
      developer: "AppsZone",
      privacyUrl: "#",
      featured: false,
      level: 1,

      headline: "Small habits, one tap a day.",
      longDescription:
        "Little Habits keeps your daily habits on one screen. Tap to check in, watch streaks grow and get a gentle reminder when you need one.",
      screenshots: [
        { screen: "lh-today", caption: "Today on one screen" },
        { screen: "lh-detail", caption: "Streaks and history" },
        { screen: "lh-add", caption: "Add a habit in seconds" },
      ],
      features: [
        { glyph: "tick", title: "One-tap check-ins", text: "Mark a habit done straight from the list." },
        { glyph: "flame", title: "Streaks", text: "See how many days in a row you've kept going." },
        { glyph: "bell", title: "Gentle reminders", text: "Optional nudges at a time you choose." },
        { glyph: "calendar", title: "Calendar view", text: "Look back over the last few weeks at a glance." },
      ],
      howItWorks: [
        { title: "Add a habit.", text: "Give it a name, a schedule and an optional reminder.", screen: "lh-add" },
        { title: "Check in each day.", text: "One tap from the Today screen.", screen: "lh-today" },
        { title: "Watch it add up.", text: "Streaks and a calendar show your progress.", screen: "lh-detail" },
      ],
    },

    {
      name: "Quick Convert",
      slug: "quick-convert",
      shortDescription: "Unit and currency conversions that work offline.",
      category: "Utilities",
      platform: "Android",
      version: "1.0.4",
      apkUrl: "#",
      apkSize: "7 MB",
      minAndroid: "Android 8.0 or later",
      icon: { glyph: "convert", color: "#3A63D8" },
      tint: "#E6EBF7",
      releaseDate: "2026-02-11",
      updatedDate: "2026-06-02",
      developer: "AppsZone",
      privacyUrl: "#",
      featured: false,
      level: 1,

      headline: "Conversions in a couple of taps.",
      longDescription:
        "Quick Convert handles everyday units and currencies with a big, clear keypad. Currency rates are saved on your phone so it keeps working offline.",
      screenshots: [
        { screen: "qc-convert", caption: "Type and see the answer" },
        { screen: "qc-currency", caption: "Currency rates, offline" },
        { screen: "qc-units", caption: "Every everyday unit" },
      ],
      features: [
        { glyph: "offline", title: "Works offline", text: "Saved rates mean no connection is needed." },
        { glyph: "swap", title: "Instant swap", text: "Flip the direction of a conversion in one tap." },
        { glyph: "star", title: "Favourites", text: "Pin the conversions you use most." },
        { glyph: "history", title: "Recent history", text: "Your last conversions are one tap away." },
      ],
      howItWorks: [
        { title: "Pick a category.", text: "Length, weight, temperature, currency and more.", screen: "qc-convert" },
        { title: "Choose units.", text: "Search or scroll to the unit you need.", screen: "qc-units" },
        { title: "Type a number.", text: "The result updates as you type.", screen: "qc-currency" },
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
