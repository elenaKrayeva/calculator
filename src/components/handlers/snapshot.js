export function createSnapshot(state) {
  return {
    operand1: state.operand1,
    commandKey: state.commandKey ?? null,
    resetNext: state.resetNext,
    displayValue: state.display.value,
    memory: state.memory,
  };
}
