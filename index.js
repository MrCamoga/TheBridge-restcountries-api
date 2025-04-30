const cardTemplate = function (imgUrl, countryName) {
	return `<div class="card">
              <img id="flag-image" src="${imgUrl}" alt="flag" />
              <h1 class="center">${countryName}</h1>
            </div>`;
};

const countriesNode = document.getElementById("countries");

fetch("https://restcountries.com/v3.1/independent?fields=flags,name")
	.then(function (response) {
		return response.json();
	})
	.then(function (countries) {
		countries.forEach((country) => (countriesNode.innerHTML += cardTemplate(country.flags.svg, country.name.common)));
	});
