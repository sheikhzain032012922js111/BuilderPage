let display = document.getElementById('display');
function appendValue(value) {
    display.value += value;
}
function clearDisplay() {
    display.value = '';
}
function deleteLast() {
    display.value = display.value.slice(0, -1);
}
function calculate() {
  try {
    let result = eval(display.value);
    if (result === Infinity || result === -Infinity) {
      display.value = 'Error';
    } else {
      display.value = result;
    }
  } catch (error) {
    display.value = 'Error';
  }
}
document.addEventListener('keydown', function(event) {
  if (event.key >= '0' && event.key <= '9') {
    appendValue(event.key);
  } else if (['+', '-', '*', '/', '.'].includes(event.key)) {
    appendValue(event.key);
  } else if (event.key === 'Enter' || event.key === '=') {
    event.preventDefault();
    calculate();
  } else if (event.key === 'Backspace') {
    deleteLast();
  } else if (event.key === 'Escape') {
    clearDisplay();
  }
});