// Init weather object
const weather = new Weather("Nis", "Serbia");

// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

// weather.changeLocation("Belgrade", "Serbia");

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}
