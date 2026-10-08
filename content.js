/* =====================================================================
   THE UNTITLED PROJECT — SITE CONTENT
   ---------------------------------------------------------------------
   This is the only file you need to edit to update the website.

   ADD A PROJECT:   copy one { ... } block in PROJECTS, paste it at the
                    top of the list, and change the values.
   REMOVE ONE:      delete its { ... } block (including the comma after it).
   REORDER:         the grid shows projects in the order listed here.

   vimeo:   the number at the end of the Vimeo link
            (https://vimeo.com/601184648  ->  "601184648")
   bunny:   OR, for Bunny Stream, the two parts after /play/ in the link
            (player.mediadelivery.net/play/774281/203c...  ->  "774281/203c...")
   tags:    any of the CATEGORIES below — they become the filter buttons
   loop:    OPTIONAL path to a short silent .mp4 in the /media folder,
            used for the hover preview instead of Vimeo (keep under 25 MB)
   thumb:   OPTIONAL path or URL to a custom thumbnail image.
            If left out, the thumbnail is pulled from Vimeo/Bunny automatically.
            Bunny: when you set a custom thumbnail, Bunny gives it a NEW
            file name (e.g. thumbnail_79ec2282.jpg). Put that name here.
            Find it in Bunny → video → Thumbnail, or ask Claude to look it up.

   Rules that keep it working: text goes inside "quotes", every block
   ends with a comma, and don't delete the [ ] or { } brackets.
   ===================================================================== */

window.SITE = {
  name: "The Untitled Project",
  person: "Bert Moss",
  roles: ["Video Editor", "Motion Graphics Artist", "Director"],
  headline: ["Short form.", "High impact."],
  // Big orange words that cycle in the middle of the home page
  cycle: ["Video editing", "Motion graphics", "AI generation", "VFX", "Directing", "Production management"],
  // Bunny Stream video host (from a Bunny thumbnail URL). Used for thumbnails and hover previews.
  bunnyCdn: "vz-151c3d5c-1a7.b-cdn.net",
  reelVimeo: "601184648",
  reelTitle: "Demo Reel 2026",
  reelLoop: "",                      // optional: "media/reel-loop.mp4"
  email: "bert@theuntitledproject.com",
  phone: "917-674-9492",             // set to "" to hide
  location: "Brooklyn, NY",
  heroPlace: "",                       // optional: shown after your name in the big hero outline text, e.g. "NYC"
  bio: [
    "Twenty-plus years cutting and animating for NYC's biggest agencies — turning an AD's 11pm scribble into a spot that actually ships. After Effects lifer, edit-bay generalist, and now fluent in generative AI.",
    "Video editor, motion graphics artist, and occasional director based in Brooklyn, with two decades inside NYC's advertising engine — agency floors at JWT, DDB, Wieden+Kennedy, and Anomaly, plus a standing freelance post house of his own. Has cut, animated, or finished work for Apple, Google, Meta, Marvel, Netflix, IBM, Citibank, Goldman Sachs, and Wayfair, across broadcast, social, video billboards, motion comics, and conference graphics. Built post-production process for an entire agency's account roster at RevHealth, and now brings generative AI into broadcast-quality production. Equally comfortable running the department and being the one editor a CD trusts with the launch cut."
  ],
  stats: [],                            // optional big numbers in About, e.g. { value: "20+", label: "Years in NYC advertising" }
  capabilities: [
    "Video Editing", "Motion Graphics", "Animation", "Directing",
    "Post-Production Management", "Generative AI"
  ],
  software: ["After Effects", "Premiere Pro", "Photoshop", "Illustrator", "ComfyUI", "Claude"],
  // Scrolling client band (same list as the resume). Leave empty [] to build it from PROJECTS.
  clients: ["Apple", "Google", "Meta", "Marvel", "Netflix", "IBM", "Citibank", "Goldman Sachs",
            "Wayfair", "McDonald's", "Ford", "Bloomberg", "Red Bull", "DC Comics", "Walmart", "Skyrizi"],
  socials: [
    // { label: "Vimeo", url: "https://vimeo.com/yourname" },
    // { label: "Instagram", url: "https://instagram.com/yourname" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/bert-moss" },
  ]
};

/* ---------------------------------------------------------------------
   AI LAB SECTION
   --------------------------------------------------------------------- */
window.AI = {
  intro: "Comfortable building custom generation workflows in ComfyUI, with hands-on production experience across image and video AI generation tools. Built and maintained an automated, proprietary AI production pipeline from the ground up and successfully implemented production across test spots.",
  tools: ["Claude", "ComfyUI", "Adobe Firefly", "LTX", "Minimax H3", "WAN Animate", "Flux", "Qwen"],
  approach: [
    { title: "Workflow, not hype", text: "A proprietary, automated production pipeline built from the ground up, so shots come back fast, consistent and art-directable." },
    { title: "Every shot logged", text: "A per-shot record of what's AI and what's human, so legal and the client always know what they're approving." },
    { title: "Straight into the edit", text: "Generations land in the project, ready to cut, comp and finish alongside live action and motion graphics." }
  ],
  emptyText: "New AI pieces are on the way. Ask to see recent work.",
  note: "Pieces marked AI-generated were made with generative AI tools, then edited, composited and finished by hand."
};

/* AI PROJECTS — same fields as PROJECTS, plus:
     tools:  what it was made with, shown on the card, e.g. ["ComfyUI", "Kling"]
   Every AI project is automatically labelled "AI-generated" on the site.
   Before posting a piece, check the model's licence allows public display
   (some require an AI label, some are limited to certain countries).
   While this list is empty the section shows the intro and a "get in touch" box.
*/
window.AI_PROJECTS = [
  {
    title: "Your Thing",
    client: "Pfizer (spec)",
    bunny: "774281/203c39aa-8c29-4e5c-9f46-c2fafa2c46f2",   // Bunny: "library/video ID" from the play link
    thumb: "thumbnail_79ec2282.jpg",                         // custom Bunny thumbnail (new name each time you change it)
    tools: [],                                               // e.g. ["ComfyUI", "LTX"]
    blurb: "Spec spot made with generative AI. Not commissioned or endorsed by Pfizer."
  },
  {
    title: "Mr Bowlingball Head",
    client: "Personal",
    bunny: "774281/23e62152-c158-4dee-b08a-bca5c5439240",
    thumb: "thumbnail_4c4430f1.jpg",
    tools: [],
    blurb: "A whimsical AI exploration to get to grips with on-screen lip sync!"
  },
  // {
  //   title: "Project name",
  //   client: "Client or 'Personal project'",
  //   vimeo: "123456789",
  //   tools: ["ComfyUI", "Kling"],
  //   blurb: "One or two lines about the piece and your role."
  // },
];

window.CATEGORIES = ["Social", "OOH & Screens", "Broadcast", "Animation", "Corporate"];

window.PROJECTS = [
  {
    title: "Instagram Drops",
    client: "Instagram",
    vimeo: "600485546",
    tags: ["Social"],
    blurb: "Promotional spot for Instagram."
  },
  {
    title: "Bulleit Bourbon",
    client: "Bulleit",
    vimeo: "566295925",
    tags: ["Social"],
    blurb: "Social media campaign for Bulleit Bourbon, deployed on Instagram, Hulu, Facebook and Twitter."
  },
  {
    title: "Mrs. America",
    client: "FX",
    vimeo: "600485987",
    tags: ["Broadcast"],
    blurb: "One of many trailers produced for the FX series."
  },
  {
    title: "Apple Arcade",
    client: "Apple",
    vimeo: "390565761",
    tags: ["OOH & Screens"],
    blurb: "In-store display promoting Apple Arcade. Produced in After Effects to play across six screens."
  },
  {
    title: "Dyadic IPO",
    client: "Dyadic",
    vimeo: "720434823",
    tags: ["OOH & Screens"],
    blurb: "Times Square billboard for the Dyadic IPO. Design, art direction and animation."
  },
  {
    title: "YouTube Music Billboards",
    client: "YouTube Music",
    vimeo: "352569891",
    tags: ["OOH & Screens"],
    blurb: "Design and deployment of a YouTube Music Times Square billboard campaign promoting featured artists."
  },
  {
    title: "Google Maps",
    client: "Google",
    vimeo: "352286614",
    tags: ["Social"],
    blurb: "Social campaign for new Google Maps features: 60 video variations deployed across social apps and Hulu."
  },
  {
    title: "Buchanan's",
    client: "Buchanan's",
    vimeo: "352286625",
    tags: ["Social", "Broadcast"],
    blurb: "Social media and TV promo for Buchanan's Scotch whisky."
  },
  {
    title: "IBM Watson IT",
    client: "IBM",
    vimeo: "249448470",
    tags: ["Animation"],
    blurb: "Animated promo video for IBM Watson IT services."
  },
  {
    title: "Lizard Week",
    client: "PetSmart",
    vimeo: "472224136",
    tags: ["Social"],
    blurb: "Social media promo for PetSmart."
  },
  {
    title: "Amgen",
    client: "Amgen",
    vimeo: "478062959",
    tags: ["Corporate"],
    blurb: "Internal video for Amgen."
  },
  {
    title: "Brisk",
    client: "Brisk",
    vimeo: "465215764",
    tags: ["Social"],
    blurb: "Quirky social media and YouTube spots for Brisk."
  },
  {
    title: "Mr. Men at Heathrow",
    client: "Heathrow Airport",
    vimeo: "218984564",
    tags: ["Animation"],
    blurb: "Animated informational video for Heathrow Airport."
  },
  {
    title: "Budweiser",
    client: "Budweiser",
    vimeo: "138783500",
    tags: ["Social"],
    blurb: "Social media promo spot for Budweiser."
  },
  {
    title: "Moto G",
    client: "Motorola",
    vimeo: "128281147",
    tags: ["Broadcast"],
    blurb: "On-air :30 commercial for Motorola."
  },
  {
    title: "Amex DCLM",
    client: "American Express",
    vimeo: "58554239",
    tags: ["Animation"],
    blurb: "Infographic animation for Amex services."
  },
  {
    title: "Redken",
    client: "Redken",
    vimeo: "71426804",
    tags: ["Social"],
    blurb: "Promotional video for Redken products."
  },
  {
    title: "IBM Watson Health",
    client: "IBM",
    vimeo: "128281466",
    tags: ["Animation"],
    blurb: "Infographic promoting IBM Watson Health services."
  },
  {
    title: "F.E.A.R. 2",
    client: "DC Comics",
    vimeo: "352569831",
    tags: ["Social"],
    blurb: "Online promo spot for the video game F.E.A.R. 2, through DC Comics."
  }

  /* NOT YET ON VIMEO — this one is a file uploaded to Wix. Upload it to
     Vimeo, put the number in "vimeo", move the block up into the list
     above (add a comma after the block before it), and it will appear.
  {
    title: "Strike Anywhere",
    client: "Square × Area15",
    vimeo: "",
    tags: ["Social"],
    blurb: "Promotional video for Square payments and Area15, in collaboration with The Gig Media."
  }
  */
];
