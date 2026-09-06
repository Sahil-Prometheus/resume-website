/* Drives the fixed page counter. The current "page" is the last
   numbered section whose top has passed the middle of the screen.
   Position-driven (not time-driven), so it stays in step with
   Lenis' inertial scroll and costs nothing when idle. */

const currentEl = document.querySelector<HTMLElement>('[data-pi-current]');
const totalEl = document.querySelector<HTMLElement>('[data-pi-total]');
const sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'));

if (currentEl && totalEl && sections.length > 0) {
  totalEl.textContent = String(sections.length).padStart(2, '0');

  let scheduled = false;
  let lastIndex = -1;

  const update = () => {
    scheduled = false;
    const mid = window.innerHeight / 2;
    let index = 0;
    sections.forEach((section, i) => {
      if (section.getBoundingClientRect().top <= mid) index = i;
    });
    if (index !== lastIndex) {
      lastIndex = index;
      currentEl.textContent = String(index + 1).padStart(2, '0');
    }
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
