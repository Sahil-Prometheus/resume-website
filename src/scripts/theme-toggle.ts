/* Theme toggle — flips between washi (light) and sumi (dark) and
   remembers the choice. The button shows the CURRENT sky: 日 sun
   in light mode, 月 moon in dark mode; on click one sets and the
   other rises. */

const button = document.querySelector<HTMLButtonElement>('[data-theme-toggle]');
const root = document.documentElement;

const syncState = () => {
  const theme = root.dataset.theme === 'dark' ? 'dark' : 'light';
  if (button) {
    button.dataset.state = theme;
  }
  const scheme = document.querySelector<HTMLMetaElement>('meta[name="color-scheme"]');
  if (scheme) {
    scheme.content = theme;
  }
  document.querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]').forEach((meta) => {
    meta.content = theme === 'dark' ? '#161513' : '#faf8f3';
  });
};

syncState();

button?.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.classList.add('theme-transition');
  root.dataset.theme = next;
  localStorage.setItem('color-theme', next);
  syncState();
  window.setTimeout(() => root.classList.remove('theme-transition'), 500);
});
