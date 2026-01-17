document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form__container");
  const emailInput = document.querySelector("#email");
  const errorMessage = document.querySelector(".error");
  const formCard = document.querySelector(".sign-up-form");
  const successCard = document.querySelector(".success-message");
  const userEmail = document.querySelector(".user-email");
  const dismissBtn = document.querySelector(".dismiss-btn");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailValue)) {
      errorMessage.style.display = "block";
      emailInput.classList.add("error-input");
      return;
    }
    userEmail.textContent = emailValue;
    formCard.classList.add("hidden");
    successCard.classList.remove("hidden");
    errorMessage.style.display = "none";
    emailInput.classList.remove("error-input");
    form.reset();
  });
  dismissBtn.addEventListener("click", function () {
    successCard.classList.add("hidden");
    formCard.classList.remove("hidden");
  });
});
