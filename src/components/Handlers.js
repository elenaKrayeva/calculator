import { calculate, changeSign } from '../core/calculate.js';
import { isNumber, isOperator } from './Helpers.js';

export function handleInput(input, state) {
  const { display } = state;

  if (isNumber(input)) {
    handleNumber(input, state);
  } else if (isOperator(input)) {
    handleOperator(input, state);
  } else if (input === '=') {
    handleEqual(state);
  } else if (input === 'AC') {
    clear(state);
  } else if (input === '⁺/₋') {
    display.value = changeSign(parseFloat(display.value));
  } else if (input === '%') {
    handlePercent(state);
  }
}

function handleNumber(input, state) {
  const { display } = state;

  if (display.value === '0' || state.resetNext) {
    display.value = input === ',' ? '0.' : input;
    state.resetNext = false;
  } else if (!(input === ',' && display.value.includes(','))) {
    display.value += input;
  }
}

function handleOperator(input, state) {
  state.operand1 = parseFloat(state.display.value);
  state.operator = input;
  state.resetNext = true;
}

function handleEqual(state) {
  const { operand1, operator, display } = state;

  if (operator && operand1 !== null) {
    const operand2 = parseFloat(display.value);
    const result = calculate({ operand1, operand2, operator });
    display.value = formatResult(result);
    state.operand1 = null;
    state.operator = null;
    state.resetNext = true;
  }
}

function handlePercent(state) {
  const currentValue = parseFloat(state.display.value);
  let result;

  if (state.operand1 !== null && state.operator) {
    result = (state.operand1 * currentValue) / 100;
  } else {
    result = currentValue / 100;
  }

  state.display.value = formatResult(result);
}

function clear(state) {
  state.display.value = '0';
  state.operand1 = null;
  state.operator = null;
  state.resetNext = false;
}

function formatResult(value) {
  if (isNaN(value) || value === 'Error') return value;
  if (value === 0) return '0';

  const rounded = parseFloat(value.toFixed(7));
  return rounded.toString().replace(/\.?0+$/, '');
}
