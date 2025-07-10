import { binaryCommands } from '../../core/commands.js';
import { formatResult } from './format.js';
import { createSnapshot } from './snapshot.js';

export function handleOperator(input, state) {
  const { display, history, operand1, command, resetNext } = state;

  let newValue;
  if (operand1 !== null && command && !resetNext) {
    newValue = command(operand1, display.value);
    state.operand1 = newValue;
    display.value = formatResult(newValue);
  } else {
    state.operand1 = display.value;
  }
  state.command = binaryCommands[input];
  state.commandKey = input;
  state.resetNext = true;

  history.push(createSnapshot(state));
}
