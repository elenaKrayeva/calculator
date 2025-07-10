import {
  binaryCommands,
  functionCommands,
  changeSign,
  power,
  nthRoot,
  factorial,
} from '../core/commands';

describe('binaryCommands', () => {
  test('adds correctly', () => {
    expect(binaryCommands['+']('2', '3')).toBe('5');
  });

  test('subtracts correctly', () => {
    expect(binaryCommands['-']('5', '3')).toBe('2');
  });

  test('multiplies correctly', () => {
    expect(binaryCommands['х']('4', '2')).toBe('8');
  });

  test('divides correctly', () => {
    expect(binaryCommands['÷']('10', '2')).toBe('5');
  });

  test('division by zero returns error', () => {
    expect(binaryCommands['÷']('10', '0')).toBe('Error');
  });

  test('power xʸ', () => {
    expect(binaryCommands['xʸ']('2', '3')).toBe('8');
  });

  test('nth root ʸ√x', () => {
    expect(parseFloat(binaryCommands['ʸ√x']('27', '3'))).toBeCloseTo(3, 12);
  });
});

describe('functionCommands', () => {
  test('x²', () => {
    expect(functionCommands['x²']('5')).toBe('25');
  });

  test('x³', () => {
    expect(functionCommands['x³']('2')).toBe('8');
  });

  test('1/x with non-zero', () => {
    expect(functionCommands['1/x']('4')).toBe('0.25');
  });

  test('1/x with zero', () => {
    expect(functionCommands['1/x']('0')).toBe('Error');
  });

  test('²√x of 16', () => {
    expect(functionCommands['²√x']('16')).toBe('4');
  });

  test('³√x of 27', () => {
    expect(parseFloat(functionCommands['³√x']('27'))).toBeCloseTo(3, 12);
  });

  test('10ˣ', () => {
    expect(functionCommands['10ˣ']('2')).toBe('100');
  });

  test('x! of 5', () => {
    expect(functionCommands['x!']('5')).toBe('120');
  });

  test('x! of negative', () => {
    expect(functionCommands['x!']('-3')).toBe('Error');
  });

  test('x! of float', () => {
    expect(functionCommands['x!']('3.5')).toBe('Error');
  });
});

describe('changeSign', () => {
  test('positive to negative', () => {
    expect(changeSign('5')).toBe('-5');
  });

  test('negative to positive', () => {
    expect(changeSign('-7')).toBe('7');
  });

  test('zero stays zero', () => {
    expect(changeSign('0')).toBe('0');
  });
});

describe('power()', () => {
  test('2 ^ 0', () => {
    expect(power('2', '0')).toBe('1');
  });

  test('2 ^ -2', () => {
    expect(power('2', '-2')).toBe('0.25');
  });

  test('3 ^ 3', () => {
    expect(power('3', '3')).toBe('27');
  });
});

describe('nthRoot()', () => {
  test('0 ^ (1/3)', () => {
    expect(nthRoot('0', '3')).toBe('0');
  });

  test('even root of negative number returns error', () => {
    expect(nthRoot('-16', '2')).toBe('Error');
  });

  test('cube root of -27', () => {
    expect(parseFloat(nthRoot('-27', '3'))).toBeCloseTo(-3, 12);
  });
});

describe('factorial', () => {
  test('factorial of 0 is 1', () => {
    expect(factorial('0')).toBe('1');
  });

  test('factorial of 1 is 1', () => {
    expect(factorial('1')).toBe('1');
  });

  test('factorial of 5 is 120', () => {
    expect(factorial('5')).toBe('120');
  });

  test('factorial of 10 is 3628800', () => {
    expect(factorial('10')).toBe('3628800');
  });

  test('factorial of negative number returns error', () => {
    expect(factorial('-3')).toBe('Error');
  });

  test('factorial of decimal number returns error', () => {
    expect(factorial('4.5')).toBe('Error');
  });

  test('factorial of string number', () => {
    expect(factorial('6')).toBe('720');
  });
});
