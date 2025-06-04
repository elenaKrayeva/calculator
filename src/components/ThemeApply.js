export function applyTheme(themeId) {
  document.body.className = '';
  if (themeId) {
    document.body.classList.add(themeId);
  }
}
