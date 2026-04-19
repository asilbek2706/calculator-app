const primaryNumberElement = document.querySelector('.primary__number');
const secondaryNumberElement = document.querySelector('.secondary__number');

let currentNumber = '';
let previousNumber = '';
let operator = '';

function appendNumber(number) {
  currentNumber += number;
  updateDisplay(currentNumber);
}

function appendOperator(op) {
  operator = op;
  previousNumber = currentNumber;
  updateSecondaryNumber(previousNumber);
  currentNumber = '';
  updateDisplay(currentNumber);
}

function updateDisplay(num) {
  primaryNumberElement.textContent = num;
}

function clearDisplay() {
  currentNumber = '';
  previousNumber = '';
  updateSecondaryNumber(previousNumber);
  updateDisplay('0');
}

function calculate() {
  let result;

  const num1 = parseFloat(previousNumber);
  const num2 = parseFloat(currentNumber);

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    case '%':
      result = getPercentage(num1, num2);
      break;
    default:
      return;
  }

  currentNumber = result.toString();
  updateDisplay(currentNumber);
  previousNumber = '';
  operator = '';
  updateSecondaryNumber(previousNumber);
}

function getPercentage(num1, num2) {
  return (num1 * num2) / 100;
}
function updateSecondaryNumber(num) {
  secondaryNumberElement.textContent = num;
}

function deleteNumber() {
  currentNumber = currentNumber.slice(0, -1);
  updateDisplay(currentNumber);
}

function toggleSign() {
  if (currentNumber.startsWith('-')) {
    currentNumber = currentNumber.slice(1);
  } else {
    currentNumber = '-' + currentNumber;
  }
  updateDisplay(currentNumber);
}
