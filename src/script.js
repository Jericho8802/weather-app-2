let searchBar = document.querySelector("#search-bar");
let searchForm = document.querySelector("#search-form");
let cityNameBig = document.querySelector("#city-name");
let apiKey = "db1b10ac9e4426f5551404a36632fa47";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}`;

searchForm.addEventListener("submit", submitHandler);

function submitHandler(event) {
  event.preventDefault();
  let searchTerm = searchBar.value;
  cityNameBig.innerHTML = searchTerm;
}
