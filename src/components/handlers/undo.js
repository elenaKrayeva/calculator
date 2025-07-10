import { binaryCommands } from '../../core/commands.js';

export function handleUndo(state) {
  const prev = state.history.pop();
  if (!prev) return;

  state.operand1 = prev.operand1;
  state.commandKey = prev.commandKey;
  state.command = prev.commandKey ? binaryCommands[prev.commandKey] : null;
  state.resetNext = prev.resetNext;
  state.memory = prev.memory;
  state.display.value = prev.displayValue;
}
