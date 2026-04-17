const email = document.getElementById("email");
const btn = document.getElementById("btn");
const error = document.querySelector(".error");

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regex.test(email)) {
    error.style.visibility = "hidden";
    error.style.opacity = "0";
  } else {
    error.textContent = "Error, please check your email";
    error.style.color = "var(--red)";
    error.style.visibility = "visible";
    error.style.opacity = "1";
    email.style.border = "1px solid var(--red)";
  }
}

btn.addEventListener("click", function () {
  validateEmail(email.value);
});
