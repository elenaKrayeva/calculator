export function handleClear(state) {
  state.history = [];
  state.display.value = '0';
  state.operand1 = null;
  state.command = null;
  state.commandKey = null;
  state.resetNext = false;
}
