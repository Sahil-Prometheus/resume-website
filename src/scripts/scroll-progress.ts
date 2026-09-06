/* Drives the fixed page counter and section index. The current
   "page" is the last numbered section whose top has passed the
   middle of the screen; its number turns terracotta and so does
   its name in the index. Position-driven (not time-driven), so it
   stays in step with Lenis' inertial scroll and costs nothing
   when idle. */

const currentEl = document.querySelector<HTMLElement>('[data-pi-current]');
const totalEl = document.querySelector<HTMLElement>('[data-pi-total]');
const sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'));
const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-pi-link]'));

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
      const activeId = sections[index].id;
      links.forEach((link) => {
        const isActive = link.dataset.piLink === activeId;
        link.classList.toggle('active', isActive);
        if (isActive) {
          link.setAttribute('aria-current', 'true');
        } else {
          link.removeAttribute('aria-current');
        }
      });
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
