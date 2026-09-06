/* Theme toggle — flips between washi (light) and sumi (dark),
   remembers the choice, and labels the button with the mode
   you'll switch TO. */

const button = document.querySelector<HTMLButtonElement>('[data-theme-toggle]');
const label = button?.querySelector<HTMLSpanElement>('[data-theme-label]');
const root = document.documentElement;

const syncLabel = () => {
  if (label) {
    label.textContent = root.dataset.theme === 'dark' ? 'Light' : 'Dark';
  }
};

syncLabel();

button?.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.classList.add('theme-transition');
  root.dataset.theme = next;
  localStorage.setItem('theme', next);
  syncLabel();
  window.setTimeout(() => root.classList.remove('theme-transition'), 500);
});
