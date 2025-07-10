import { openThemeMenu } from './ThemeMenu.js';
import { state } from './Buttons.js';
import { handleInput } from './handlers/index.js';

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

  const buttonBlock = document.createElement('div');
  buttonBlock.className = 'button-block';

  topBar.appendChild(windowButtons);
  topBar.appendChild(buttonBlock);

  const undoButton = document.createElement('button');
  undoButton.textContent = 'undo';
  undoButton.className = 'undo-button';
  undoButton.addEventListener('click', () => {
    handleInput('undo', state);
  });

  const themeButton = document.createElement('button');
  themeButton.textContent = '🎨';
  themeButton.className = 'theme-button';
  themeButton.addEventListener('click', () => openThemeMenu(container));

  buttonBlock.appendChild(undoButton);
  buttonBlock.appendChild(themeButton);
  container.appendChild(topBar);
}
