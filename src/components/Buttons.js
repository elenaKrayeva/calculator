import { handleInput } from './Handlers.js';

export function createButtons(container, display) {
  const buttons = [
    ['(', ')', 'mc', 'm+', 'm-', 'mr', 'AC', '⁺/₋', '%', '÷'],
    ['2ⁿᵈ', 'x²', 'x³', 'xʸ', 'eˣ', '10ˣ', '7', '8', '9', 'х'],
    ['1/x', '²√x', '³√x', 'ʸ√x', 'ln', 'log₁₀', '4', '5', '6', '-'],
    ['x!', 'sin', 'cos', 'tan', 'e', 'EE', '1', '2', '3', '+'],
    ['Rad', 'sinh', 'cosh', 'tanh', 'π', 'Rand', '0', ',', '='],
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
  if (
    [
      '(',
      ')',
      'mc',
      'm+',
      'm-',
      'mr',
      'AC',
      '⁺/₋',
      '%',
      '2ⁿᵈ',
      'x²',
      'x³',
      'xʸ',
      'eˣ',
      '10ˣ',
      '1/x',
      '²√x',
      '³√x',
      'ʸ√x',
      'ln',
      'log₁₀',
      'x!',
      'sin',
      'cos',
      'tan',
      'e',
      'EE',
      'Rad',
      'sinh',
      'cosh',
      'tanh',
      'π',
      'Rand',
    ].includes(text)
  ) {
    btn.classList.add('function');
  } else if (['÷', 'х', '-', '+', '='].includes(text)) {
    btn.classList.add('operator');
  }
  if (text === '0') {
    btn.classList.add('zero');
  }
  if (text === 'Rad') {
    btn.classList.add('rad');
  }
}
