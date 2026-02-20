document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".navbar .mobile-menu-toggle");
  const mobileMenu = document.querySelector(".navbar .mobile-menu-items");

  hamburger.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
});

//Change navbar background color on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});
