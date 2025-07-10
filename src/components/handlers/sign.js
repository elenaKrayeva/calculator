import { changeSign } from '../../core/commands.js';
import { createSnapshot } from './snapshot.js';

export function handleSignChange(state) {
  state.history.push(createSnapshot(state));
  state.display.value = changeSign(state.display.value);
}
