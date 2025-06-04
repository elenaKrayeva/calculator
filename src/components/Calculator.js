import { createWindowButtons } from './WindowButtons.js';
import { createDisplay } from './Display.js';
import { createButtons } from './Buttons.js';

export function createCalculator() {
  const container = document.createElement('div');
  container.className = 'calculator';

  createWindowButtons(container);
  const display = createDisplay(container);
  createButtons(container, display);

  return container;
}
