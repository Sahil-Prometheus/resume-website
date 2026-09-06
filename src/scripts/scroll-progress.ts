/* Drives the fixed section rail. The active tick is the last
   section whose top has passed the middle of the viewport. Only
   that section's name is revealed beside the rail. */

const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-pi-link]'));
const sections = links
  .map((link) => document.getElementById(link.dataset.piLink ?? ''))
  .filter((section): section is HTMLElement => section instanceof HTMLElement);

if (links.length > 0 && sections.length > 0) {
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
      const activeId = sections[index].id;
      links.forEach((link) => {
        const isActive = link.dataset.piLink === activeId;
        link.classList.toggle('active', isActive);
        if (isActive) {
          link.setAttribute('aria-current', 'location');
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
  window.addEventListener('resize', update, { passive: true });

  update();
}
