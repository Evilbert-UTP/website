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
   tags:    any of the CATEGORIES below — they become the filter buttons
   loop:    OPTIONAL path to a short silent .mp4 in the /media folder,
            used for the hover preview instead of Vimeo (keep under 25 MB)
   thumb:   OPTIONAL path or URL to a custom thumbnail image.
            If left out, the thumbnail is pulled from Vimeo automatically.

   Rules that keep it working: text goes inside "quotes", every block
   ends with a comma, and don't delete the [ ] or { } brackets.
   ===================================================================== */

window.SITE = {
  name: "The Untitled Project",
  person: "Bert Moss",
  roles: ["Motion Graphics", "Animation", "Design", "Video Editing"],
  headline: ["Short form.", "High impact."],
  // Hero reads "MADE TO ____." — these words cycle in the blank
  cycle: ["MOVE", "LOOP", "SELL", "POP", "PLAY"],
  reelVimeo: "601184648",
  reelTitle: "Demo Reel 2026",
  reelLoop: "",                      // optional: "media/reel-loop.mp4"
  email: "bert@theuntitledproject.com",
  phone: "917-674-9492",             // set to "" to hide
  location: "New York City",
  bio: [
    "Bert has spent 22 years as a video editor, motion graphic animator and director for the NYC advertising industry.",
    "He specializes in short form, high impact creative content for social media, OOH digital billboards and big screen conference presentations. His work includes music videos, large scale social media campaigns, original 2D animation concepts, and on-air TV spots in roles as lead animator, director, producer and studio manager."
  ],
  stats: [
    { value: "22", label: "Years in NYC advertising" },
    { value: "60", label: "Variations in one Google Maps campaign" },
    { value: "6", label: "Synced screens for Apple Arcade" }
  ],
  capabilities: [
    "Editorial", "Motion graphics", "2D animation", "Art direction",
    "Social campaigns & versioning", "OOH & Times Square billboards",
    "Multi-screen retail displays", "Broadcast spots & trailers"
  ],
  socials: [
    // { label: "Vimeo", url: "https://vimeo.com/yourname" },
    // { label: "Instagram", url: "https://instagram.com/yourname" },
    // { label: "LinkedIn", url: "https://linkedin.com/in/yourname" },
  ]
};

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
