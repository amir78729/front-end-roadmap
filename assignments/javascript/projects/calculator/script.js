const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

function resetCalculator() {
  calculator.displayValue = '0';
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
}

function updateDisplay() {
  const display = document.querySelector('.calculator-screen');
  display.value = calculator.displayValue;
}
function inputDigit(digit) {
  const { displayValue, waitingForSecondOperand } = calculator;

  if (waitingForSecondOperand === true) {
    // complete this section...
  } else {
    // complete this section...
  }
}

function inputDecimal(dot) {
  if (calculator.waitingForSecondOperand === true) {
  	// complete this section...
  }
  if (!calculator.displayValue.includes(dot)) {
    // complete this section...
  }
}

function handleOperator(nextOperator) {
  const { firstOperand, displayValue, operator } = calculator
  const inputValue = parseFloat(displayValue);

  if (operator && calculator.waitingForSecondOperand)  {
    // complete this section...
  }

  if (firstOperand == null && !isNaN(inputValue)) {
    // complete this section...
  } else if (operator) {
    // complete this section...
  }
  // complete this section...
}

function calculate(firstOperand, secondOperand, operator) {
  if (operator === '+') {
    return firstOperand + secondOperand;
  } else if (operator === '-') {
    // complete this section...
  } else if (operator === '*') {
    // complete this section...
  } else if (operator === '/') {
    // complete this section...
  }
  // complete this section...
}

updateDisplay();

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', event => {
  const { target } = event;
  const { value } = target;
  if (!target.matches('button')) {
    return;
  }

  switch (value) {
    case '+':
    case '-':
    case '*':
    case '/':
    case '=':
      // complete this section...
      break;
    case '.':
      // complete this section...
      break;
    case 'all-clear':
      resetCalculator();
      break;
    default:
      // complete this section...
  }
  updateDisplay();
});