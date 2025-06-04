export function createDisplay(container) {
  const display = document.createElement('input');
  display.className = 'display';
  display.disabled = true;
  display.value = '0';
  container.appendChild(display);
  return display;
}
