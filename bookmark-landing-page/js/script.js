const tabBtns = document.querySelectorAll(".tabs__btn");
const tabPanels = document.querySelectorAll(".tabs__panel");

// Handle tab switching
tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-tab");
    tabBtns.forEach((btn) => {
      btn.classList.remove("tabs__btn--active");
    });
    btn.classList.add("tabs__btn--active");
    tabPanels.forEach((panel) => {
      panel.classList.remove("tabs__panel--active");
    });
    document
      .getElementById(`tab-${target}`)
      .classList.add("tabs__panel--active");
  });
});

// Handle FAQ accordion
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const questionBtn = item.querySelector(".faq-question");

  questionBtn.addEventListener("click", () => {
    faqItems.forEach((el) => {
      if (el !== item) el.classList.remove("active");
    });

    item.classList.toggle("active");
  });
});

// Form validation
const newsletterForm = document.querySelector(".newsletter-form");
const emailInput = newsletterForm.querySelector(".newsletter-input");
const errorIcon = newsletterForm.querySelector(".error-icon");
const errorMsg = newsletterForm.querySelector(".error");
const inputGroup = newsletterForm.querySelector(".input-group");

newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailValue) || !emailValue) {
    errorIcon.style.display = "block";
    errorMsg.style.display = "block";
    inputGroup.classList.add("error-state");
  } else {
    errorIcon.style.display = "none";
    errorMsg.style.display = "none";
    inputGroup.classList.remove("error-state");
    newsletterForm.reset();
  }
});

// Navbar

// Mobile Nav Toggle
const hamburger = document.querySelector(".nav__hamburger");
const mobileMenu = document.querySelector(".nav__mobile-menu");
const header = document.querySelector(".header");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
  header.classList.toggle("menu-open");
  document.body.style.overflow = mobileMenu.classList.contains("open")
    ? "hidden"
    : "";
});

// Close menu on link click
document.querySelectorAll(".nav__mobile-links a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    header.classList.remove("menu-open");
    document.body.style.overflow = "";
  });
});
