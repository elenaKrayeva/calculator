import { formatResult } from './format.js';
import { createSnapshot } from './snapshot.js';

export function handlePercent(state) {
  state.history.push(createSnapshot(state));
  const { operand1, command, display } = state;
  const cur = parseFloat(display.value.replace(',', '.'));

  if (operand1 !== null && command) {
    const perc = (
      (parseFloat(operand1.replace(',', '.')) * cur) /
      100
    ).toString();
    const result = command(operand1, perc);
    display.value = formatResult(result);
    state.operand1 = null;
    state.command = null;
    state.commandKey = null;
    state.resetNext = true;
  } else {
    display.value = formatResult((cur / 100).toString());
    state.resetNext = true;
  }
}
