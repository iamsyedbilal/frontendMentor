document.addEventListener("DOMContentLoaded", function () {
  const shareBtn = document.querySelector(".share-btn");
  const shareTooltip = document.querySelector(".share-tooltip");
  const avatar = document.querySelector(".avatar");

  if (!shareBtn || !shareTooltip || !avatar) return;

  function openTooltip() {
    shareTooltip.classList.add("active");
    shareBtn.classList.add("active");
    avatar.classList.add("share-active");

    shareBtn.setAttribute("aria-expanded", "true");
    shareTooltip.setAttribute("aria-hidden", "false");
  }

  function closeTooltip() {
    shareTooltip.classList.remove("active");
    shareBtn.classList.remove("active");
    avatar.classList.remove("share-active");

    shareBtn.setAttribute("aria-expanded", "false");
    shareTooltip.setAttribute("aria-hidden", "true");
  }

  function toggleTooltip(e) {
    e.stopPropagation();
    const isOpen = shareBtn.getAttribute("aria-expanded") === "true";
    isOpen ? closeTooltip() : openTooltip();
  }

  shareBtn.addEventListener("click", toggleTooltip);

  shareBtn.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleTooltip(e);
    }

    if (e.key === "Escape") {
      closeTooltip();
      shareBtn.focus();
    }
  });

  document.addEventListener("click", closeTooltip);

  shareTooltip.addEventListener("click", function (e) {
    e.stopPropagation();
  });
});
