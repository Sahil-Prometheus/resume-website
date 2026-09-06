/* Count-up animation for the hero stats. Numbers start at zero
   and ease up to their final value with a gentle deceleration.
   Reduced-motion visitors simply see the final numbers. */

const counters = document.querySelectorAll<HTMLElement>('[data-count]');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  counters.forEach((el) => {
    const target = Number(el.dataset.count ?? '0');
    const delay = Number(el.dataset.delay ?? '0') * 1000;
    const duration = 1600;
    const start = performance.now() + delay;

    el.textContent = '0';

    const tick = (now: number) => {
      const t = Math.min(Math.max((now - start) / duration, 0), 1);
      const eased = 1 - Math.pow(2, -10 * t); // easeOutExpo — fast start, soft landing
      el.textContent = String(Math.round(eased * target));
      if (t < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  });
}
