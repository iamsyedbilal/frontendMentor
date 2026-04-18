const countriesDiv = document.getElementById("countries");
const regionSelect = document.getElementById("region");
const searchInput = document.querySelector(".input");

let allCountries = [];

async function getCountries() {
  try {
    const response = await fetch("./data.json");
    const countries = await response.json();
    console.log(countries);
    allCountries = countries;
    renderCountry(countries);
  } catch (error) {
    console.error(error);
  }
}

function renderCountry(countries) {
  if (!countries.length) {
    const emptyDiv = document.createElement("div");
    emptyDiv.classList.add("country-not-found");
    emptyDiv.textContent = "Country not found.";
    countriesDiv.appendChild(emptyDiv);
    return;
  }

  countries.forEach((country) => {
    const countryDiv = document.createElement("div");
    countryDiv.classList.add("country");
    countryDiv.innerHTML = `
        <img src="${country.flags.svg}" alt="" class="country__flag" />
        <div class="country__info">
          <h2 class="country__name">${country.name}</h2>
          <p>
            <strong>Population:</strong> ${country.population.toLocaleString()}
          </p>
           <p><strong>Region:</strong> ${country.region}</p>
            <p><strong>Capital:</strong> ${country.capital}</p>
        </div>
      </div>
      `;

    countryDiv.addEventListener("click", () => {
      window.location.href = `country.html?code=${country.alpha3Code}`;
    });

    countriesDiv.appendChild(countryDiv);
  });
}

// Add debounce function to limit the number of times the search function is called
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const handleSearch = (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filteredCountries = allCountries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm),
  );
  countriesDiv.innerHTML = "";
  renderCountry(filteredCountries);
};

searchInput.addEventListener("input", debounce(handleSearch, 300));

regionSelect.addEventListener("change", (e) => {
  const selectedRegion = e.target.value;
  const filteredCountries = selectedRegion
    ? allCountries.filter((country) => country.region === selectedRegion)
    : allCountries;
  countriesDiv.innerHTML = "";
  renderCountry(filteredCountries);
});

getCountries();
