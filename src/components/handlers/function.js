import { functionCommands } from '../../core/commands.js';
import { formatResult } from './format.js';
import { createSnapshot } from './snapshot.js';

export function handleFunction(input, state) {
  const { display, history } = state;

  history.push(createSnapshot(state));
  const result = functionCommands[input](display.value);

  display.value = formatResult(result);
  state.resetNext = true;
}
