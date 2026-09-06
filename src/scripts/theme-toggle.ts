/* Theme toggle — flips between washi (light) and sumi (dark) and
   remembers the choice. The button shows the CURRENT sky: 日 sun
   in light mode, 月 moon in dark mode; on click one sets and the
   other rises. */

const button = document.querySelector<HTMLButtonElement>('[data-theme-toggle]');
const root = document.documentElement;

const syncState = () => {
  if (button) {
    button.dataset.state = root.dataset.theme === 'dark' ? 'dark' : 'light';
  }
};

syncState();

button?.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.classList.add('theme-transition');
  root.dataset.theme = next;
  localStorage.setItem('theme', next);
  syncState();
  window.setTimeout(() => root.classList.remove('theme-transition'), 500);
});
