import { themes } from '../themes/theme.js';
import { applyTheme } from './ThemeApply.js';

export function openThemeMenu(container) {
  let existingMenu = document.querySelector('.theme-menu');
  if (existingMenu) {
    existingMenu.remove();
    return;
  }

  const menu = document.createElement('div');
  menu.className = 'theme-menu';

  themes.forEach((theme) => {
    const option = document.createElement('div');
    option.className = 'theme-option';

    const caption = document.createElement('div');
    caption.textContent = theme.name;

    const preview = document.createElement('img');
    preview.src = theme.preview;
    preview.alt = `${theme.name} preview`;
    preview.className = 'theme-preview';

    option.appendChild(caption);
    option.appendChild(preview);

    option.addEventListener('click', () => {
      applyTheme(theme.id);
      menu.remove();
    });

    menu.appendChild(option);
  });

  container.appendChild(menu);
}
