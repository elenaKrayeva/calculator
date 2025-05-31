export function calculate({ operand1, operand2, operator }) {
  let result;

  switch (operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case 'х':
      result = operand1 * operand2;
      break;
    case '÷':
      result = operand2 === 0 ? 'Error' : operand1 / operand2;
      break;
    case '%':
      result = operand1 % operand2;
      break;
    default:
      result = operand2;
  }

  return result;
}

export function changeSign(value) {
  return value * -1;
}
