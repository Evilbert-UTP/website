/* THE UNTITLED PROJECT — site behaviour. You shouldn't need to edit this file;
   all text, projects and links live in content.js. */
(function () {
  "use strict";
  var S = window.SITE || {};
  function hasVideo(p) { return p && (p.vimeo || p.bunny || p.video); }
  /* Bunny Stream: bunny = "LIBRARY_ID/VIDEO_ID" */
  function bunnyParts(p) { var b = String(p.bunny || "").split("/"); return b.length === 2 ? { lib: b[0], id: b[1] } : null; }
  function bunnyCdn(p) { return "https://" + String(p.bunnyCdn || S.bunnyCdn || "").replace(/^https?:\/\//, "").replace(/\/$/, ""); }
  var P = (window.PROJECTS || []).filter(hasVideo);
  var CATS = window.CATEGORIES || [];
  var $ = function (id) { return document.getElementById(id); };
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var saveData = navigator.connection && navigator.connection.saveData;
  var FALLBACK = ["#ef7d1e", "#fdf0dd", "#f5b06e", "#e6dfd3"];

  function el(tag, attrs, html) {
    var n = document.createElement(tag);
    for (var k in attrs || {}) n.setAttribute(k, attrs[k]);
    if (html != null) n.innerHTML = html;
    return n;
  }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function pad(n) { return (n < 10 ? "0" : "") + n; }

  /* ---------- text content ---------- */
  if ($("roles")) $("roles").textContent = (S.roles || []).join("  /  ");
  $("headline").textContent = (S.headline || []).join(" ");
  if (S.person) { var place = ("heroPlace" in S) ? S.heroPlace : S.location; $("personLine").textContent = S.person.toUpperCase() + (place ? " / " + String(place).toUpperCase() : ""); }
  (S.bio || []).forEach(function (t) { $("bio").appendChild(el("p", {}, esc(t))); });
  if (!(S.stats || []).length) { $("stats").hidden = true; $("bio").classList.add("bio-wide"); }
  (S.stats || []).forEach(function (s) { $("stats").appendChild(el("li", {}, "<strong>" + esc(s.value) + "</strong><span>" + esc(s.label) + "</span>")); });
  (S.capabilities || []).forEach(function (c) { $("caps").appendChild(el("li", {}, esc(c))); });
  (S.software || []).forEach(function (c) { $("software").appendChild(el("li", {}, esc(c))); });
  if (!(S.software || []).length) $("softwareWrap").hidden = true;
  var email = $("email");
  email.textContent = S.email || ""; email.href = "mailto:" + (S.email || "");
  var meta = [];
  if (S.phone) meta.push('<a href="tel:' + esc(S.phone.replace(/[^\d+]/g, "")) + '">' + esc(S.phone) + "</a>");
  if (S.location) meta.push("<span>" + esc(S.location) + "</span>");
  (S.socials || []).forEach(function (s) { meta.push('<a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.label) + " ↗</a>"); });
  $("contactMeta").innerHTML = meta.join("");
  $("copy").textContent = "© " + new Date().getFullYear() + " " + (S.name || "") + (S.person ? " — " + S.person : "");

  /* ---------- hero word cycle ---------- */
  var words = S.cycle || [], wi = 0, cyc = $("cycle");
  $("cycleText").textContent = words.join(", ");
  function setWord(w) {
    cyc.style.fontSize = "";
    cyc.textContent = w;
    /* shrink a single long word that would otherwise run off the edge (e.g. on phones) */
    var avail = cyc.parentNode.clientWidth;
    if (cyc.scrollWidth > avail) cyc.style.fontSize = (avail / cyc.scrollWidth) + "em";
  }
  if (words.length) setWord(words[0]);
  window.addEventListener("resize", function () { if (words.length) setWord(words[wi]); });
  if (words.length > 1 && !reduced) {
    setInterval(function () {
      cyc.classList.add("out");
      setTimeout(function () {
        wi = (wi + 1) % words.length;
        setWord(words[wi]);
        cyc.classList.remove("out"); cyc.classList.add("in-start");
        void cyc.offsetWidth;
        cyc.classList.remove("in-start");
      }, 450);
    }, 2200);
  }

  /* ---------- hero background loop ---------- */
  function vimeoBg(id) {
    var f = el("iframe", {
      src: "https://player.vimeo.com/video/" + id + "?background=1&autoplay=1&loop=1&muted=1&dnt=1&quality=540p",
      allow: "autoplay; fullscreen", title: "", tabindex: "-1", loading: "lazy"
    });
    return f;
  }
  function mp4Bg(src) {
    var v = el("video", { src: src, muted: "", autoplay: "", loop: "", playsinline: "", preload: "auto" });
    v.muted = true;
    return v;
  }
  if (!reduced && !saveData && (S.reelLoop || S.reelVimeo)) {
    var hv = $("heroVideo"), node = S.reelLoop ? mp4Bg(S.reelLoop) : vimeoBg(S.reelVimeo);
    node.addEventListener(S.reelLoop ? "playing" : "load", function () { setTimeout(function () { hv.classList.add("on"); }, 600); });
    hv.appendChild(node);
    hv.parentNode.classList.add("has-video");
  }

  /* ---------- client marquee ---------- */
  var clients = (S.clients && S.clients.length) ? S.clients.slice() : [];
  if (!clients.length) P.forEach(function (p) { if (p.client && clients.indexOf(p.client) < 0) clients.push(p.client); });
  var row = clients.map(function (c) { return "<span>" + esc(c) + '</span><span class="sep">●</span>'; }).join("");
  $("marquee").innerHTML = row + row; // duplicated for a seamless loop
  $("marquee").setAttribute("aria-label", "Clients include " + clients.join(", "));

  /* ---------- cards (shared by Work and AI grids) ---------- */
  function makeCard(p, i, isAI) {
    var li = el("li", { "class": "card reveal", "data-tags": (p.tags || []).join("|") });
    var color = FALLBACK[i % FALLBACK.length];
    p._ai = !!isAI;
    li.innerHTML =
      '<button class="card-btn" type="button" aria-label="Play ' + esc(p.title) + (p.client ? " for " + esc(p.client) : "") + (isAI ? " (AI-generated)" : "") + '">' +
        '<div class="card-media">' +
          '<div class="card-fallback" style="background:' + color + '">' + esc(p.title) + "</div>" +
          '<img alt="" loading="lazy" decoding="async">' +
          '<div class="card-preview"></div>' +
          '<span class="card-num">' + pad(i + 1) + "</span>" +
          (isAI ? '<span class="ai-badge">AI-generated</span>' : "") +
          '<span class="card-play" aria-hidden="true"></span>' +
        "</div>" +
        '<div class="card-meta"><div><h3 class="card-title">' + esc(p.title) + "</h3>" +
          (isAI && p.tools && p.tools.length ? '<span class="card-tools">' + esc(p.tools.join(" · ")) + "</span>" : "") +
        '</div><span class="card-client">' + esc(p.client || "") + "</span></div>" +
      "</button>";
    li._p = p;

    var btn = li.querySelector(".card-btn");
    btn.addEventListener("click", function () { openLightbox(p, btn); });

    if (canHover && !reduced) {
      var timer, prev = li.querySelector(".card-preview");
      btn.addEventListener("mouseenter", function () {
        timer = setTimeout(function () {
          if (prev.firstChild) return;
          var bp = bunnyParts(p), n = null, ev = "load", delay = 500;
          if (p.loop) { n = mp4Bg(p.loop); ev = "playing"; delay = 0; }
          else if (bp && (p.bunnyCdn || S.bunnyCdn)) { /* Bunny's animated preview — light and silent */
            n = el("img", { src: bunnyCdn(p) + "/" + bp.id + "/preview.webp", alt: "" });
            n.style.cssText = "position:absolute;inset:0;width:100%;height:100%;object-fit:cover"; delay = 0;
          }
          else if (p.vimeo) n = vimeoBg(p.vimeo);
          if (!n) return;
          n.addEventListener(ev, function () { setTimeout(function () { prev.classList.add("on"); }, delay); });
          prev.appendChild(n);
        }, 280);
      });
      btn.addEventListener("mouseleave", function () {
        clearTimeout(timer);
        prev.classList.remove("on");
        setTimeout(function () { if (!prev.classList.contains("on")) prev.innerHTML = ""; }, 400);
      });
    }
    return li;
  }

  /* ---------- work grid ---------- */
  var grid = $("grid"), cards = [];
  /* the demo reel is always the first card, and only shows under "All" (it has no category tag) */
  var reelCard = S.reelVimeo ? [{
    title: S.reelTitle || "Demo Reel", client: S.person || S.name, vimeo: S.reelVimeo, loop: S.reelLoop || "",
    tags: [], blurb: (S.roles || []).join(" · ")
  }] : [];
  reelCard.concat(P).forEach(function (p, i) { var li = makeCard(p, i, false); grid.appendChild(li); cards.push(li); });

  /* ---------- AI section ---------- */
  var AI = window.AI || {};
  var AIP = (window.AI_PROJECTS || []).filter(hasVideo);
  $("aiIntro").textContent = AI.intro || "";
  (AI.tools || []).forEach(function (t) { $("aiTools").appendChild(el("li", {}, esc(t))); });
  (AI.approach || []).forEach(function (a) { $("aiApproach").appendChild(el("li", {}, "<h3>" + esc(a.title) + "</h3><p>" + esc(a.text) + "</p>")); });
  $("aiNote").textContent = AI.note || "";
  var aiGrid = $("aiGrid"), aiCards = [];
  AIP.forEach(function (p, i) { var li = makeCard(p, i, true); aiGrid.appendChild(li); aiCards.push(li); });
  if (!AIP.length) { aiGrid.hidden = true; $("aiEmpty").hidden = false; $("aiEmptyText").textContent = AI.emptyText || ""; }

  /* thumbnails: custom `thumb`, else fetched from Vimeo when the card nears the viewport */
  function loadThumb(li) {
    if (li._thumbed) return; li._thumbed = true;
    var p = li._p, img = li.querySelector("img");
    img.addEventListener("load", function () { img.classList.add("loaded"); });
    var bp = bunnyParts(p);
    if (p.thumb) { /* a bare Bunny filename like "thumbnail_79ec2282.jpg" is resolved against the video's folder */
      img.src = (bp && p.thumb.indexOf("/") < 0 && (p.bunnyCdn || S.bunnyCdn)) ? bunnyCdn(p) + "/" + bp.id + "/" + p.thumb : p.thumb;
      return;
    }
    if (bp && (p.bunnyCdn || S.bunnyCdn)) { img.src = bunnyCdn(p) + "/" + bp.id + "/thumbnail.jpg"; return; }
    if (!p.vimeo) return;
    fetch("https://vimeo.com/api/oembed.json?width=1280&url=" + encodeURIComponent("https://vimeo.com/" + p.vimeo))
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) { if (d && d.thumbnail_url) img.src = d.thumbnail_url.replace(/_\d+x\d+/, "_1280x720"); })
      .catch(function () { /* keep the graphic fallback */ });
  }

  /* layout rhythm: 8+4 / 4+4+4 / 4+8 / 6+6 */
  var ROWS = [[8, 4], [4, 4, 4], [4, 8], [6, 6]];
  function layout(list) {
    list = list || cards;
    var vis = list.filter(function (c) { return !c.hidden; }), i = 0, r = 0;
    while (i < vis.length) {
      var row = ROWS[r % ROWS.length], items = vis.slice(i, i + row.length);
      var spans = items.length === row.length ? row : items.map(function () { return 12 / items.length; });
      items.forEach(function (c, k) {
        c.classList.remove("big", "wide", "full");
        c.classList.add(spans[k] === 12 ? "full" : spans[k] === 8 ? "big" : spans[k] === 6 ? "wide" : "std");
      });
      i += row.length; r++;
    }
  }

  /* filters */
  var filters = $("filters"), active = "All";
  ["All"].concat(CATS).forEach(function (cat) {
    var count = cat === "All" ? P.length + reelCard.length : P.filter(function (p) { return (p.tags || []).indexOf(cat) > -1; }).length;
    if (!count) return;
    var b = el("button", { type: "button", "aria-pressed": cat === "All" ? "true" : "false" }, esc(cat) + "<sup>" + count + "</sup>");
    b.addEventListener("click", function () {
      active = cat;
      [].forEach.call(filters.children, function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
      cards.forEach(function (c) {
        c.hidden = !(cat === "All" || c.getAttribute("data-tags").split("|").indexOf(cat) > -1);
        if (!c.hidden) { c.classList.add("in"); loadThumb(c); }
      });
      layout();
    });
    filters.appendChild(b);
  });
  layout();
  layout(aiCards);

  /* ---------- reveal + lazy thumbs ---------- */
  var reveals = [].slice.call(document.querySelectorAll(".reveal"));
  if ("IntersectionObserver" in window && !reduced) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          if (e.target._p) loadThumb(e.target);
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (r) { io.observe(r); });
    var pre = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { loadThumb(e.target); pre.unobserve(e.target); } });
    }, { rootMargin: "600px 0px" });
    cards.concat(aiCards).forEach(function (c) { pre.observe(c); });
  } else {
    reveals.forEach(function (r) { r.classList.add("in"); });
    cards.concat(aiCards).forEach(loadThumb);
  }

  /* ---------- menu colour: dark text over light/orange sections, light text over dark ones ---------- */
  var nav = document.querySelector(".nav"), LIGHT = ["clients", "work", "about", "contact"];
  function navTone() {
    var y = nav.offsetHeight / 2, light = false;
    LIGHT.forEach(function (id) { var r = $(id).getBoundingClientRect(); if (r.top <= y && r.bottom >= y) light = true; });
    nav.classList.toggle("on-light", light);
  }
  var navTick = false;
  window.addEventListener("scroll", function () { if (!navTick) { navTick = true; requestAnimationFrame(function () { navTone(); navTick = false; }); } }, { passive: true });
  window.addEventListener("resize", navTone);
  navTone();

  /* ---------- mobile menu ---------- */
  var menuBtn = $("menuToggle");
  function setMenu(open) {
    nav.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    menuBtn.textContent = open ? "Close" : "Menu";
    document.body.style.overflow = open ? "hidden" : "";
  }
  menuBtn.addEventListener("click", function () { setMenu(!nav.classList.contains("open")); });
  [].forEach.call(document.querySelectorAll("#siteNav a"), function (a) { a.addEventListener("click", function () { if (nav.classList.contains("open")) setMenu(false); }); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && nav.classList.contains("open")) setMenu(false); });

  /* ---------- Home / back-to-top links ---------- */
  [].forEach.call(document.querySelectorAll('a[href="#top"]'), function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
      if (history.replaceState) history.replaceState(null, "", location.pathname + location.search);
    });
  });

  /* ---------- "Clients" link: centre the scrolling client band on screen ---------- */
  [].forEach.call(document.querySelectorAll('a[href="#clients"]'), function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      $("clients").scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" });
      if (history.replaceState) history.replaceState(null, "", "#clients");
    });
  });

  /* ---------- lightbox ---------- */
  var lb = $("lightbox"), lbPlayer = $("lbPlayer"), lastFocus = null;
  function openLightbox(p, from) {
    lastFocus = from || document.activeElement;
    $("lbTitle").textContent = p.title || "";
    $("lbClient").textContent = p.client || "";
    $("lbBlurb").textContent = (p.blurb || "") + (p._ai && p.tools && p.tools.length ? "  Made with " + p.tools.join(", ") + "." : "");
    $("lbAi").hidden = !p._ai;
    lbPlayer.innerHTML = "";
    if (p.vimeo) {
      lbPlayer.appendChild(el("iframe", {
        src: "https://player.vimeo.com/video/" + p.vimeo + "?autoplay=1&title=0&byline=0&portrait=0&dnt=1&color=d7ff1f",
        allow: "autoplay; fullscreen; picture-in-picture", allowfullscreen: "", title: p.title || "Video"
      }));
    } else if (bunnyParts(p)) {
      var b = bunnyParts(p);
      lbPlayer.appendChild(el("iframe", {
        src: "https://player.mediadelivery.net/embed/" + b.lib + "/" + b.id + "?autoplay=true&preload=true&responsive=true",
        allow: "accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen", allowfullscreen: "", title: p.title || "Video"
      }));
    } else if (p.video) {
      lbPlayer.appendChild(el("video", { src: p.video, controls: "", autoplay: "", playsinline: "" }));
    }
    lb.hidden = false;
    document.body.style.overflow = "hidden";
    $("lbClose").focus();
  }
  function closeLightbox() {
    lb.hidden = true; lbPlayer.innerHTML = "";
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }
  $("lbClose").addEventListener("click", closeLightbox);
  lb.addEventListener("click", function (e) { if (e.target === lb) closeLightbox(); });
  document.addEventListener("keydown", function (e) {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "Tab") { e.preventDefault(); $("lbClose").focus(); }
  });
  $("playReel").addEventListener("click", function (e) {
    openLightbox({ title: S.reelTitle || "Demo Reel", client: S.person || S.name, vimeo: S.reelVimeo, blurb: (S.roles || []).join(" · ") }, e.currentTarget);
  });
})();
