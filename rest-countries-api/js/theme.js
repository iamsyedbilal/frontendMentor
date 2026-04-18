const toggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

// load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeIcon.setAttribute("name", "moon");
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");

  if (isDark) {
    localStorage.setItem("theme", "dark");
    themeIcon.setAttribute("name", "moon");
    toggleBtn.setAttribute("aria-pressed", isDark);
  } else {
    localStorage.setItem("theme", "light");
    themeIcon.setAttribute("name", "moon-outline");
    toggleBtn.setAttribute("aria-pressed", isDark);
  }
});
