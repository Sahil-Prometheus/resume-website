/* Count-up for the hero stats. Numbers start at zero and ease
   to their final value quickly, then settle. If the landing
   intro is playing, they wait for the curtain to lift. */

declare global {
  interface Window {
    __introExited?: boolean;
    __onIntroExit?: () => void;
  }
}

const counters = document.querySelectorAll<HTMLElement>('[data-count]');

const DURATION_MS = 720;

function easeOutCubic(t: number): number {
  return 1 - (1 - t) ** 3;
}

function animateCounter(el: HTMLElement): void {
  const target = Number(el.dataset.count ?? '0');
  const delay = Number(el.dataset.delay ?? '0') * 1000;
  const startAt = performance.now() + delay;

  el.textContent = '0';

  const tick = (now: number) => {
    const t = Math.min(Math.max((now - startAt) / DURATION_MS, 0), 1);
    el.textContent = String(Math.round(easeOutCubic(t) * target));
    if (t < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
}

function startCountUp(): void {
  counters.forEach((el) => animateCounter(el));
}

let started = false;
const begin = () => {
  if (started) return;
  started = true;
  startCountUp();
};

if (window.__introExited || !document.documentElement.classList.contains('intro-playing')) {
  begin();
} else {
  counters.forEach((el) => {
    el.textContent = '0';
  });
  window.__onIntroExit = begin;
  window.addEventListener('intro:exit', begin, { once: true });
  window.setTimeout(begin, 2000);
}
