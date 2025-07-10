function parse(x) {
  return parseFloat(x.toString().replace(',', '.'));
}

function add(a, b) {
  return (parse(a) + parse(b)).toString();
}
function subtract(a, b) {
  return (parse(a) - parse(b)).toString();
}
function multiply(a, b) {
  return (parse(a) * parse(b)).toString();
}
function divide(a, b) {
  if (parse(b) === 0) return 'Error';
  return (parse(a) / parse(b)).toString();
}

function abs(x) {
  return x < 0 ? -x : x;
}

function sqrt(x) {
  const num = parseFloat(x);
  if (num < 0) return 'Error';

  let guess = num / 2 || 1;
  let prev;
  let i = 0;

  do {
    prev = guess;
    guess = (guess + num / guess) / 2;
    i++;
    if (i > 50) break;
  } while (abs(prev - guess) > 0.0000001);

  return guess.toString();
}

export const binaryCommands = {
  '+': add,
  '-': subtract,
  'х': multiply,
  '÷': divide,
  'xʸ': power,
  'ʸ√x': nthRoot,
};

export const functionCommands = {
  'x²': (x) => multiply(x, x),
  'x³': (x) => multiply(x, multiply(x, x)),
  '1/x': (x) => divide('1', x),
  '²√x': (x) => sqrt(x),
  '³√x': (x) => nthRoot(x, '3'),
  'xʸ': (x, y) => power(x, y),
  'ʸ√x': (x, y) => nthRoot(x, y),
  '10ˣ': (x) => power('10', x),
  'x!': (x) => factorial(x),
};

export function changeSign(value) {
  return (parseFloat(value) * -1).toString();
}

export function power(base, exp) {
  const e = parse(exp);

  if (e === 0) return '1';
  if (e < 0) return divide('1', power(base, (-e).toString()));

  let result = '1';
  for (let i = 0; i < e; i++) {
    result = multiply(result, base);
  }
  return result;
}

export function nthRoot(x, n) {
  const num = parse(x);
  const root = parse(n);

  if (num === 0) return '0';
  if (root === 0) return 'Error';
  if (num < 0 && root % 2 === 0) return 'Error';

  let guess = num / root || 1;
  let prev;
  let i = 0;

  do {
    prev = guess;
    guess = divide(
      add(
        multiply(prev, (root - 1).toString()),
        divide(x, power(prev.toString(), (root - 1).toString())),
      ),
      root.toString(),
    );
    i++;
    if (i > 50) break;
  } while (abs(parse(prev) - parse(guess)) > 0.0000001);

  return guess.toString();
}

export function factorial(x) {
  const num = parse(x);
  if (num < 0 || !Number.isInteger(num)) return 'Error';

  let result = '1';
  for (let i = 2; i <= num; i++) {
    result = multiply(result, i.toString());
  }
  return result;
}
