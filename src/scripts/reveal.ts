/* Watches elements marked [data-reveal] and fades them up into
   view the first time they enter the viewport. Each element is
   revealed once, then left alone — calm, not busy. */

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }
  },
  {
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.05,
  },
);

document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));
