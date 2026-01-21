document.addEventListener("DOMContentLoaded", function () {
  const dailyBtn = document.querySelector(".daily");
  const weeklyBtn = document.querySelector(".weekly");
  const monthlyBtn = document.querySelector(".monthly");

  const cards = document.querySelectorAll(".card-wrap");

  let data = [];

  fetch("./data.json")
    .then((res) => res.json())
    .then((json) => (data = json))
    .catch((err) => console.log(`Something went wrong: ${err}`));

  // console.log(data);

  function updateUI(timeframe) {
    cards.forEach((card, index) => {
      const hourEle = card.querySelector(".hours");
      const weeklyEle = card.querySelector(".last-week");

      const current = data[index].timeframes[timeframe].current;
      const previous = data[index].timeframes[timeframe].previous;

      hourEle.textContent = `${current}hrs`;

      let label = "";

      if (timeframe === "daily") label = "yesterday";
      if (timeframe === "weekly") label = "last week";
      if (timeframe === "monthly") label = "last month";

      weeklyEle.textContent = `${label} - ${previous}hrs`;
    });
  }

  function setActive(btn) {
    [dailyBtn, weeklyBtn, monthlyBtn].forEach((btn) =>
      btn.classList.remove("active"),
    );
    btn.classList.add("active");
  }

  dailyBtn.addEventListener("click", () => {
    setActive(dailyBtn);
    updateUI("daily");
  });

  weeklyBtn.addEventListener("click", () => {
    setActive(weeklyBtn);
    updateUI("weekly");
  });

  monthlyBtn.addEventListener("click", () => {
    setActive(monthlyBtn);
    updateUI("monthly");
  });
});
