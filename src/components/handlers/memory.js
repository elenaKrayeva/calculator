import { formatResult } from './format.js';
import { createSnapshot } from './snapshot.js';

export const memoryHandlers = {
  mc: (state) => {
    state.history.push(createSnapshot(state));
    state.memory = null;
  },
  mr: (state) => {
    if (state.memory !== null) {
      state.history.push(createSnapshot(state));
      state.display.value = formatResult(state.memory);
      state.resetNext = true;
    }
  },
  'm+': (state) => {
    state.history.push(createSnapshot(state));
    const cur = parseFloat(state.display.value.replace(',', '.'));
    state.memory = (state.memory ?? 0) + cur;
    state.resetNext = true;
  },
  'm-': (state) => {
    state.history.push(createSnapshot(state));
    const cur = parseFloat(state.display.value.replace(',', '.'));
    state.memory = (state.memory ?? 0) - cur;
    state.resetNext = true;
  },
};
