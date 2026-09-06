/* Drives the fixed scroll-progress line. Position-driven (not
   time-driven), so it stays in step with Lenis' inertial scroll
   and costs nothing when idle. */

const fill = document.querySelector<HTMLElement>('[data-scroll-fill]');

if (fill) {
  let scheduled = false;

  const update = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
    fill.style.transform = `scaleY(${Math.min(Math.max(progress, 0), 1)})`;
    scheduled = false;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (!scheduled) {
        scheduled = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true },
  );

  update();
}
