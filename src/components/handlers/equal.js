import { formatResult } from './format.js';

export function handleEqual(state) {
  const { operand1, command, display } = state;

  if (command && operand1 !== null) {
    const result = command(operand1, display.value);
    display.value = formatResult(result);
    state.operand1 = null;
    state.command = null;
    state.commandKey = null;
    state.resetNext = true;
  }
}
