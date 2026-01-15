document.addEventListener("DOMContentLoaded", function () {
  const shareBtn = document.querySelector(".share-btn");
  const shareTooltip = document.querySelector(".share-tooltip");

  shareBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    shareTooltip.classList.toggle("active");
    shareBtn.classList.toggle("active");
  });

  document.addEventListener("click", function () {
    shareTooltip.classList.remove("active");
    shareBtn.classList.remove("active");
  });
});
