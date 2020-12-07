// Init weather object
const weather = new Weather("Nis", "Serbia");

// Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

// weather.changeLocation("Belgrade", "Serbia");

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      console.log(results);
    })
    .catch((err) => console.log(err));
}
