export function isNumber(input) {
  return !isNaN(input) || input === ',';
}

export function isOperator(input) {
  return ['+', '-', 'х', '÷'].includes(input);
}
