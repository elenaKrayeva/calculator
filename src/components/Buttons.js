import { handleInput } from './Handlers.js';

export function createButtons(container, display) {
  const buttons = [
    ['AC', '⁺/₋', '%', '÷'],
    ['7', '8', '9', 'х'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', ',', '='],
  ];

  let operand1 = null;
  let operator = null;
  let resetNext = false;

  const state = { operand1, operator, resetNext, display };

  buttons.forEach((row) => {
    row.forEach((text) => {
      const btn = document.createElement('button');
      btn.textContent = text;
      applyButtonClass(btn, text);
      btn.addEventListener('click', () => handleInput(text, state));
      container.appendChild(btn);
    });
  });
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
