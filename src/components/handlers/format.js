export function formatResult(value) {
  if (value === 'Error' || isNaN(value)) return 'Error';
  const num = parseFloat(value);
  const fixed = num.toFixed(15);
  const cleaned = fixed
    .replace(/(\.\d*?[1-9])0+$/, '$1')
    .replace(/(\.\d{7})\d+$/, '$1')
    .replace(/\.?0+$/, '');
  return cleaned.replace('.', ',');
}
