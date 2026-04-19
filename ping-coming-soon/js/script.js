const email = document.getElementById("email");
const form = document.querySelector(".form");
const errorMsg = document.getElementById("email-error");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!email.validity.valid) {
    email.classList.add("error");
    errorMsg.textContent = "Please provide a valid email address";
  } else {
    email.classList.remove("error");
    errorMsg.textContent = "";
  }
});
