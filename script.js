const MAX_NUMBER = 10;
const MIN_NUMBER = 0;
const STEP_AMOUNT = 1;

const number = document.querySelector('[data-key="number"]');
const subtract = document.querySelector('[data-key="subtract"]');
const add = document.querySelector('[data-key="add"]');
const reset = document.querySelector('[data-key="reset"]');

const subtractHandler = () => {
  const newValue = parseInt(number.value) - STEP_AMOUNT;
  number.value = newValue;
};

const addHandler = () => {
  const newValue = parseInt(number.value) + STEP_AMOUNT;
  number.value = newValue;
};

const resetHandler = () => {
  if (number.value === 10) {
    number.value = 0;
  }
};

subtract.addEventListener("click", subtractHandler);
add.addEventListener("click", addHandler);
reset.addEventListener("click", resetHandler);
