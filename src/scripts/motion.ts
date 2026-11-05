// Light motion layer. Everything here is decorative: content is fully visible without JS,
// nothing waits on an animation, and it all switches off for "reduce motion" users.

const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
const saveData = !!conn?.saveData;

/* ---------- Hero video: loads after the page, fades in over the photo ---------- */
function heroVideo() {
  const v = document.getElementById("hero-video") as HTMLVideoElement | null;
  if (!v || reduce || saveData) return;
  const toggle = document.getElementById("hero-video-toggle") as HTMLButtonElement | null;
  let userPaused = false;

  const start = () => {
    const portrait = window.matchMedia("(orientation: portrait)").matches;
    const px = window.innerWidth * Math.min(window.devicePixelRatio || 1, 2);
    v.src = portrait ? v.dataset.portrait! : px > 1600 ? v.dataset.lg! : v.dataset.md!;
    v.addEventListener(
      "playing",
      () => {
        v.classList.remove("opacity-0");
        toggle?.classList.replace("hidden", "flex");
      },
      { once: true },
    );
    v.play().catch(() => {});
  };

  // Wait until the page has finished loading so the video never competes with the photo or text.
  const kick = () => ("requestIdleCallback" in window ? requestIdleCallback(start, { timeout: 2000 }) : setTimeout(start, 600));
  if (document.readyState === "complete") kick();
  else window.addEventListener("load", kick, { once: true });

  // Pause when scrolled away to save battery.
  new IntersectionObserver(([e]) => {
    if (!v.src || userPaused) return;
    e.isIntersecting ? v.play().catch(() => {}) : v.pause();
  }).observe(v);

  toggle?.addEventListener("click", () => {
    userPaused = !v.paused;
    userPaused ? v.pause() : v.play().catch(() => {});
    toggle.setAttribute("aria-label", userPaused ? "Play background video" : "Pause background video");
    toggle.querySelector('[data-icon="pause"]')?.classList.toggle("hidden", userPaused);
    toggle.querySelector('[data-icon="play"]')?.classList.toggle("hidden", !userPaused);
  });
}

/* ---------- Count-up numbers ("3", "200K+", "$30,000") ---------- */
function countUp(el: HTMLElement) {
  const final = el.textContent ?? "";
  const m = final.match(/^(\D*)([\d,]+(?:\.\d+)?)(.*)$/);
  if (!m) return;
  const [, pre, num, post] = m;
  const target = parseFloat(num.replace(/,/g, ""));
  const decimals = num.includes(".") ? num.split(".")[1].length : 0;
  const commas = num.includes(",");
  const fmt = (n: number) => {
    const s = n.toFixed(decimals);
    return commas ? Number(s).toLocaleString("en-US", { minimumFractionDigits: decimals }) : s;
  };
  const dur = 1100;
  const t0 = performance.now();
  const tick = (t: number) => {
    const p = Math.min(1, (t - t0) / dur);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = pre + fmt(target * eased) + post;
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = final;
  };
  requestAnimationFrame(tick);
}

/* ---------- Scroll reveals, counters, progress bar ---------- */
function reveals() {
  document.querySelectorAll<HTMLElement>("[data-reveal-stagger]").forEach((g) =>
    Array.from(g.children).forEach((c, i) => {
      (c as HTMLElement).dataset.reveal = "";
      (c as HTMLElement).style.setProperty("--reveal-delay", `${Math.min(i, 6) * 70}ms`);
    }),
  );
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target as HTMLElement;
        el.classList.add("is-in");
        el.querySelectorAll<HTMLElement>("[data-count]").forEach(countUp);
        if (el.hasAttribute("data-count")) countUp(el);
        io.unobserve(el);
      }),
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
  );
  // Anything already on screen at load shows right away (no flash); only its numbers count up.
  document.querySelectorAll<HTMLElement>("[data-reveal], [data-fill]").forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) {
      el.classList.add("is-in");
      el.querySelectorAll<HTMLElement>("[data-count]").forEach(countUp);
    } else io.observe(el);
  });
}

/* ---------- Chevron rows: measure one chevron so the loop is seamless ---------- */
function chevrons() {
  document.querySelectorAll<HTMLElement>(".chev-track").forEach((t) => {
    const n = (t.textContent ?? "").length || 1;
    t.style.setProperty("--chev", `${t.scrollWidth / n}px`);
  });
}

heroVideo();
if (!reduce) {
  reveals();
  document.documentElement.classList.add("motion");
  chevrons();
}
