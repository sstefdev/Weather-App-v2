class Weather {
  constructor(city, country) {
    this.apiKey = "ed1a6aa4034e45dc963234034200712";
    this.city = city;
    this.country = country;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}&q=${this.country}`
    );

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
