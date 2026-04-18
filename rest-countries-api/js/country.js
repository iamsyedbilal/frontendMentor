const container = document.getElementById("country-details");

const params = new URLSearchParams(window.location.search);
const countryCode = params.get("code");

async function loadCountry() {
  const res = await fetch("./data.json");
  const countries = await res.json();

  const country = countries.find((c) => c.alpha3Code === countryCode);

  container.innerHTML = `
    <div class="details__flag">
      <img src="${country.flags.svg}" alt="Flag of ${country.name}" class="details__flag-img"/>
    </div>

    <div class="details__info">
      <h1 class="details__title">${country.name}</h1>

      <div class="details__grid">
        <div>
          <p><strong>Native Name:</strong> ${country.nativeName}</p>
          <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
          <p><strong>Region:</strong> ${country.region}</p>
          <p><strong>Sub Region:</strong> ${country.subregion}</p>
          <p><strong>Capital:</strong> ${country.capital}</p>
        </div>

        <div>
          <p><strong>Top Level Domain:</strong> ${country.topLevelDomain}</p>
          <p><strong>Currencies:</strong> ${country.currencies?.[0]?.name}</p>
          <p><strong>Languages:</strong> ${country.languages?.map((l) => l.name).join(", ")}</p>
        </div>
      </div>

      <div class="borders">
        <strong>Border Countries:</strong>
        ${
          country.borders
            ? country.borders
                .map(
                  (b) =>
                    `<a href="country.html?code=${b}" class="border-btn">${b}</a>`,
                )
                .join("")
            : "None"
        }
      </div>
    </div>
  `;
}

loadCountry();

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("border-btn")) {
    const code = e.target.dataset.code;
    window.location.href = `country.html?code=${code}`;
  }
});
