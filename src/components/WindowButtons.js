import { openThemeMenu } from './ThemeMenu.js';

export function createWindowButtons(container) {
  const topBar = document.createElement('div');
  topBar.className = 'top-bar';

  const windowButtons = document.createElement('div');
  windowButtons.className = 'window-buttons';

  ['red', 'yellow', 'green'].forEach((color) => {
    const circle = document.createElement('div');
    circle.className = color;
    windowButtons.appendChild(circle);
  });

  topBar.appendChild(windowButtons);

  const themeButton = document.createElement('button');
  themeButton.textContent = '🎨';
  themeButton.className = 'theme-button';
  themeButton.addEventListener('click', () => openThemeMenu(container));

  topBar.appendChild(themeButton);
  container.appendChild(topBar);
}
