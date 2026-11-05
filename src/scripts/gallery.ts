// Gallery filmstrip (native horizontal scroll) + full screen photo viewer.
// Works with touch swipe, trackpad, arrow buttons and the keyboard.

type Item = { src: string; alt: string; title: string; caption: string; tag: string };

const track = document.getElementById("gallery-track");
const dataEl = document.getElementById("gallery-data");
const dlg = document.getElementById("lightbox") as HTMLDialogElement | null;

if (track && dataEl && dlg) {
  const items: Item[] = JSON.parse(dataEl.textContent || "[]");
  const img = document.getElementById("lb-img") as HTMLImageElement;
  const count = document.getElementById("lb-count")!;
  const title = document.getElementById("lb-title")!;
  const caption = document.getElementById("lb-caption")!;
  const fsBtn = document.getElementById("lb-fs") as HTMLButtonElement;
  const progress = document.getElementById("gallery-progress");
  let index = 0;
  let opener: HTMLElement | null = null;

  /* ---- filmstrip ---- */
  const step = () => track.clientWidth * 0.85;
  document.querySelectorAll<HTMLButtonElement>("[data-gal]").forEach((b) =>
    b.addEventListener("click", () => track.scrollBy({ left: Number(b.dataset.gal) * step(), behavior: "smooth" })),
  );
  const updateProgress = () => {
    const max = track.scrollWidth - track.clientWidth;
    const visible = track.clientWidth / track.scrollWidth;
    const p = max > 0 ? track.scrollLeft / max : 1;
    if (progress) progress.style.transform = `scaleX(${Math.max(visible, visible + (1 - visible) * p)})`;
  };
  track.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
  updateProgress();

  /* ---- viewer ---- */
  const show = (i: number) => {
    index = (i + items.length) % items.length;
    const it = items[index];
    img.classList.remove("is-ready");
    img.onload = () => img.classList.add("is-ready");
    img.src = it.src;
    img.alt = it.alt;
    count.textContent = `${String(index + 1).padStart(2, "0")} / ${String(items.length).padStart(2, "0")}  //  ${it.tag}`;
    title.textContent = it.title;
    caption.textContent = it.caption;
    // Warm up the neighbours so swiping feels instant.
    [index + 1, index - 1].forEach((n) => {
      const pre = new Image();
      pre.src = items[(n + items.length) % items.length].src;
    });
  };

  const open = (i: number, from: HTMLElement) => {
    opener = from;
    show(i);
    dlg.showModal();
    document.documentElement.classList.add("lb-open");
  };
  const close = () => {
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    dlg.close();
  };
  dlg.addEventListener("close", () => {
    document.documentElement.classList.remove("lb-open");
    opener?.focus();
  });

  document.querySelectorAll<HTMLButtonElement>("[data-lb]").forEach((b) =>
    b.addEventListener("click", () => open(Number(b.dataset.lb), b)),
  );
  dlg.querySelectorAll<HTMLButtonElement>("[data-lb-step]").forEach((b) =>
    b.addEventListener("click", () => show(index + Number(b.dataset.lbStep))),
  );
  document.getElementById("lb-close")?.addEventListener("click", close);

  // Click on the dark area (not the photo or the bar) closes.
  dlg.addEventListener("click", (e) => {
    if ((e.target as HTMLElement).classList.contains("lb-stage") || e.target === dlg) close();
  });

  dlg.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") show(index + 1);
    if (e.key === "ArrowLeft") show(index - 1);
  });

  // Swipe left/right on touch screens.
  let x0: number | null = null;
  dlg.addEventListener("pointerdown", (e) => (x0 = e.pointerType === "mouse" ? null : e.clientX));
  dlg.addEventListener("pointerup", (e) => {
    if (x0 == null) return;
    const dx = e.clientX - x0;
    if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1));
    x0 = null;
  });

  // True full screen where the browser allows it (iPhones keep the edge-to-edge viewer).
  if (!document.fullscreenEnabled) fsBtn.hidden = true;
  fsBtn.addEventListener("click", () => {
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    else dlg.requestFullscreen().catch(() => {});
  });
  document.addEventListener("fullscreenchange", () =>
    fsBtn.setAttribute("aria-label", document.fullscreenElement ? "Exit full screen" : "Full screen"),
  );
}
