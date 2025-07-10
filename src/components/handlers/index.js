import { isNumber } from '../Helpers.js';
import { handleNumber } from './number.js';
import { handleOperator } from './operator.js';
import { handleEqual } from './equal.js';
import { handleFunction } from './function.js';
import { memoryHandlers } from './memory.js';
import { handleClear } from './clear.js';
import { handleSignChange } from './sign.js';
import { handlePercent } from './percent.js';
import { handleUndo } from './undo.js';
import { binaryCommands, functionCommands } from '../../core/commands.js';

export function handleInput(input, state) {
  if (input === 'undo') return handleUndo(state);

  if (isNumber(input)) return handleNumber(input, state);

  if (memoryHandlers[input]) return memoryHandlers[input](state);

  if (input === 'AC') return handleClear(state);

  if (input === '⁺/₋') return handleSignChange(state);

  if (input === '%') return handlePercent(state);

  if (input in binaryCommands) return handleOperator(input, state);

  if (input === '=') return handleEqual(state);

  if (input in functionCommands) return handleFunction(input, state);
}
