const billInput = document.getElementById("billInput");
const tipButtons = document.querySelectorAll(".tip-grid button");
const customTipInput = document.querySelector(".tip-grid input");
const peopleInput = document.getElementById("peopleInput");
const tipOutput = document.querySelector(".amount-price-sum");
const totalOutput = document.querySelector(".total-price-sum");
const resetBtn = document.querySelector(".reset-btn");
const peopleField = document.querySelector(".people-field");

let tipPercentage = 0;

function calculate() {
  const bill = billInput.value ? parseFloat(billInput.value) : 0;
  const people = peopleInput.value ? parseInt(peopleInput.value) : 0;

  if (people === 0) {
    peopleField.classList.add("error");
    tipOutput.textContent = "$0.00";
    totalOutput.textContent = "$0.00";
    return;
  } else {
    peopleField.classList.remove("error");
  }

  const tipAmount = bill * tipPercentage;
  const tipPerPerson = tipAmount / people;
  const totalPerPerson = (bill + tipAmount) / people;

  tipOutput.textContent = `$${tipPerPerson.toFixed(2)}`;
  totalOutput.textContent = `$${totalPerPerson.toFixed(2)}`;
}

tipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tipButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    tipPercentage = parseFloat(button.textContent) / 100;
    customTipInput.value = "";
    customTipInput.classList.remove("active");
    calculate();
  });
});

customTipInput.addEventListener("input", () => {
  tipButtons.forEach((btn) => btn.classList.remove("active"));
  if (customTipInput.value) {
    customTipInput.classList.add("active");
    tipPercentage = parseFloat(customTipInput.value) / 100;
  } else {
    customTipInput.classList.remove("active");
    tipPercentage = 0;
  }
  calculate();
});

function toggleActiveClass(input) {
  if (input.value) {
    input.classList.add("active");
  } else {
    input.classList.remove("active");
  }
}

billInput.addEventListener("input", () => {
  toggleActiveClass(billInput);
  calculate();
});
billInput.addEventListener("focus", () => {
  billInput.classList.add("active");
});
billInput.addEventListener("blur", () => {
  toggleActiveClass(billInput);
});

peopleInput.addEventListener("input", () => {
  toggleActiveClass(peopleInput);
  calculate();
});
peopleInput.addEventListener("focus", () => {
  peopleInput.classList.add("active");
});
peopleInput.addEventListener("blur", () => {
  toggleActiveClass(peopleInput);
});

resetBtn.addEventListener("click", () => {
  billInput.value = "";
  peopleInput.value = "";
  customTipInput.value = "";
  tipPercentage = 0;
  tipOutput.textContent = "$0.00";
  totalOutput.textContent = "$0.00";
  customTipInput.classList.remove("active");
  tipButtons.forEach((btn) => btn.classList.remove("active"));
  peopleField.classList.remove("error");
});
