class UI {
  constructor() {
    this.location = document.querySelector("#w-location");
    this.desc = document.querySelector("#w-desc");
    this.string = document.querySelector("#w-string");
    this.icon = document.querySelector("#w-icon");
    this.humidity = document.querySelector("#w-humidity");
    this.feelsLike = document.querySelector("#w-feelslike");
    this.wind = document.querySelector("#w-wind");
  }

  paint(weather) {
    this.location.textContent =
      weather.location.name + ", " + weather.location.country;
    this.desc.textContent = weather.current.condition.text;
    this.string.textContent = weather.current.temp_c + "℃";
    this.icon.setAttribute("src", weather.current.condition.icon);
    this.humidity.textContent = "Humidity: " + weather.current.humidity;
    this.feelsLike.textContent =
      "Feels Like: " + weather.current.feelslike_c + "℃";
    this.wind.textContent = "Wind: " + weather.current.wind_kph + "/kph";
  }
}
