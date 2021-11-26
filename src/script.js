//Weather fetching API section

let searchBar = document.querySelector("#search-bar");
let searchForm = document.querySelector("#search-form");
let cityNameBig = document.querySelector("#city-name");
let temperatureLarge = document.querySelector("#temperature-large");
let apiKey = "db1b10ac9e4426f5551404a36632fa47";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=`;
let units = "metric";

searchForm.addEventListener("submit", submitHandler);

function submitHandler(event) {
  event.preventDefault();
  let searchTerm = searchBar.value;
  axios
    .get(apiUrl + searchTerm + "&appid=" + apiKey + "&units=" + units)
    .then(handleApiCall);
  function handleApiCall(query) {
    let queryResult = query;
    let weatherDescriptionElement = document.querySelector(
      "#weather-description"
    );
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    temperatureLarge.innerHTML = Math.round(query.data.main.temp);
    weatherDescriptionElement.innerHTML = query.data.weather[0].main;
    cityNameBig.innerHTML = query.data.name;
    windElement.innerHTML = query.data.wind.speed;
    humidityElement.innerHTML = query.data.main.humidity;
    console.log(query);
  }
}

//Date section

//Day of the week
let d = new Date();
let dayNumber = d.getDay();
let daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let today = daysOfTheWeek[dayNumber];
let todayElement = document.querySelector("#day");
todayElement.innerHTML = today;

//time
let hour = d.getHours();
let minutes = d.getMinutes();
if (minutes < 10) {
  minutes = "0" + minutes;
}
let time = `${hour}:${minutes}`;
let timeElement = document.querySelector("#time");
timeElement.innerHTML = time;
