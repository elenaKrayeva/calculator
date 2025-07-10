import {
  binaryCommands,
  functionCommands,
  changeSign,
} from '../core/commands.js';
import { isNumber } from './Helpers.js';

export function handleInput(input, state) {
  const { display } = state;

  if (isNumber(input)) {
    handleNumber(input, state);
    return;
  }

  if (input in binaryCommands) {
    handleOperator(input, state);
    return;
  }

  if (input === '=') {
    handleEqual(state);
    return;
  }

  if (input in functionCommands) {
    const result = functionCommands[input](display.value);
    display.value = formatResult(result);
    state.resetNext = true;
    return;
  }

  const memoryHandlers = {
    'mc': () => {
      state.memory = null;
    },
    'mr': () => {
      if (state.memory !== null) {
        display.value = formatResult(state.memory);
        state.resetNext = true;
      }
    },
    'm+': () => {
      const current = parseFloat(display.value.replace(',', '.'));
      const mem = state.memory !== null ? state.memory : 0;
      state.memory = mem + current;
      state.resetNext = true;
    },
    'm-': () => {
      const current = parseFloat(display.value.replace(',', '.'));
      const mem = state.memory !== null ? state.memory : 0;
      state.memory = mem - current;
      state.resetNext = true;
    },
  };

  if (input in memoryHandlers) {
    memoryHandlers[input]();
    return;
  }

  if (input === 'AC') {
    clear(state);
    return;
  }

  if (input === '⁺/₋') {
    display.value = changeSign(display.value);
    return;
  }

  if (input === '%') {
    handlePercent(state);
    return;
  }
}

function handleNumber(input, state) {
  const { display } = state;

  if (display.value === '0' || state.resetNext) {
    display.value = input === ',' ? '0,' : input;
    state.resetNext = false;
  } else if (!(input === ',' && display.value.includes(','))) {
    display.value += input;
  }
}

function handleOperator(input, state) {
  const { operand1, command, display } = state;

  if (operand1 !== null && command && !state.resetNext) {
    const operand2 = display.value;
    const result = command(operand1, operand2);
    state.operand1 = result;
    display.value = formatResult(result);
  } else {
    state.operand1 = display.value;
  }

  state.command = binaryCommands[input];
  state.resetNext = true;
}

function handleEqual(state) {
  const { operand1, command, display } = state;

  if (command && operand1 !== null) {
    const operand2 = display.value;
    const result = command(operand1, operand2);
    display.value = formatResult(result);
    state.operand1 = null;
    state.command = null;
    state.resetNext = true;
  }
}

function clear(state) {
  state.display.value = '0';
  state.operand1 = null;
  state.command = null;
  state.resetNext = false;
}

function formatResult(value) {
  if (value === 'Error' || isNaN(value)) return 'Error';

  const num = parseFloat(value);
  const fixed = num.toFixed(15);
  const cleaned = fixed
    .replace(/(\.\d*?[1-9])0+$/, '$1')
    .replace(/(\.\d{7})\d+$/, '$1')
    .replace(/\.?0+$/, '');

  return cleaned.replace('.', ',');
}

function handlePercent(state) {
  const { operand1, command, display } = state;
  const current = display.value;

  if (operand1 !== null && command) {
    const percentValue = (
      (parseFloat(operand1.replace(',', '.')) *
        parseFloat(current.replace(',', '.'))) /
      100
    ).toString();

    const result = command(operand1, percentValue);
    display.value = formatResult(result);
    state.operand1 = null;
    state.command = null;
    state.resetNext = true;
  } else {
    const result = (parseFloat(current.replace(',', '.')) / 100).toString();
    display.value = formatResult(result);
    state.resetNext = true;
  }
}
