import { calculate, changeSign } from '../core/calculate.js';
import { themes } from '../themes/theme.js';

export function createCalculator() {
  const container = document.createElement('div');
  container.className = 'calculator';

  createWindowButtons(container);
  const display = createDisplay(container);

  let operand1 = null;
  let operator = null;
  let resetNext = false;

  const buttons = [
    ['AC', '⁺/₋', '%', '÷'],
    ['7', '8', '9', 'х'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', ',', '='],
  ];

  buttons.forEach((row) => {
    row.forEach((text) => {
      const btn = document.createElement('button');
      btn.textContent = text;
      applyButtonClass(btn, text);
      btn.addEventListener('click', () => handleInput(text));
      container.appendChild(btn);
    });
  });

  function handleInput(input) {
    if (isNumber(input)) {
      handleNumber(input);
    } else if (isOperator(input)) {
      handleOperator(input);
    } else if (input === '=') {
      handleEqual();
    } else if (input === 'AC') {
      clear();
    } else if (input === '⁺/₋') {
      display.value = changeSign(parseFloat(display.value));
    } else if (input === '%') {
      handlePercent();
    }
  }

  function handleNumber(input) {
    if (display.value === '0' || resetNext) {
      display.value = input === ',' ? '0.' : input;
      resetNext = false;
    } else if (!(input === ',' && display.value.includes(','))) {
      display.value += input;
    }
  }

  function handleOperator(input) {
    operand1 = parseFloat(display.value);
    operator = input;
    resetNext = true;
  }

  function handleEqual() {
    if (operator && operand1 !== null) {
      const operand2 = parseFloat(display.value);
      display.value = calculate({ operand1, operand2, operator });
      operand1 = null;
      operator = null;
      resetNext = true;
    }
  }

  function handlePercent() {
    const currentValue = parseFloat(display.value);
    let result;

    if (operand1 !== null && operator) {
      result = (operand1 * currentValue) / 100;
    } else {
      result = currentValue / 100;
    }

    display.value = result;
  }

  function clear() {
    display.value = '0';
    operand1 = null;
    operator = null;
    resetNext = false;
  }

  function isNumber(input) {
    return !isNaN(input) || input === ',';
  }

  function isOperator(input) {
    return ['+', '-', 'х', '÷'].includes(input);
  }

  return container;
}

function createWindowButtons(container) {
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

function createDisplay(container) {
  const display = document.createElement('input');
  display.className = 'display';
  display.disabled = true;
  display.value = '0';
  container.appendChild(display);
  return display;
}

function applyButtonClass(btn, text) {
  if (['AC', '⁺/₋', '%'].includes(text)) {
    btn.classList.add('function');
  } else if (['÷', 'х', '-', '+', '='].includes(text)) {
    btn.classList.add('operator');
  }
  if (text === '0') {
    btn.classList.add('zero');
  }
}

function openThemeMenu(container) {
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

function applyTheme(themeId) {
  document.body.className = '';
  if (themeId) {
    document.body.classList.add(themeId);
  }
}
