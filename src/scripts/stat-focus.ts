/* Hero numbers ease from mist into focus. Uses requestAnimationFrame
   so the motion still plays when the OS “Reduce motion” setting
   turns off CSS animations. Soft blur only — no sliding. */

const DURATION_MS = 4200;
const STAGGER_MS = 380;
const START_DELAY_MS = 400;
const START_BLUR = 22;
const START_OPACITY = 0.12;

const figures = document.querySelectorAll<HTMLElement>('[data-stat-focus]');

function easeOut(t: number): number {
  return 1 - (1 - t) ** 3;
}

function paint(el: HTMLElement, progress: number): void {
  const eased = easeOut(progress);
  const blur = START_BLUR * (1 - eased);
  const opacity = START_OPACITY + (1 - START_OPACITY) * eased;
  el.style.filter = `blur(${blur.toFixed(2)}px)`;
  el.style.opacity = opacity.toFixed(3);
}

figures.forEach((el, i) => {
  el.getAnimations().forEach((animation) => animation.cancel());
  el.style.animation = 'none';
  paint(el, 0);

  const startAt = performance.now() + START_DELAY_MS + i * STAGGER_MS;

  const tick = (now: number) => {
    const progress = Math.min(Math.max((now - startAt) / DURATION_MS, 0), 1);
    paint(el, progress);
    if (progress < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
});
