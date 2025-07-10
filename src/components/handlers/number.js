export function handleNumber(input, state) {
  const { display, resetNext } = state;

  if (display.value === '0' || resetNext) {
    display.value = input === ',' ? '0,' : input;
    state.resetNext = false;
  } else if (!(input === ',' && display.value.includes(','))) {
    display.value += input;
  }
}
