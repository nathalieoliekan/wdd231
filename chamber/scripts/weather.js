const apiKey = "0bc6d536ba40e339faae38ca05c4907b";
const city = "Phoenix";
const units = "imperial";

const currentWeatherContainer = document.getElementById("current-weather");
const forecastContainer = document.getElementById("forecast");

async function getWeather() {
  try {
    // Fetch current weather
    const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    const currentResponse = await fetch(currentUrl);
    const currentData = await currentResponse.json();

    const temp = Math.round(currentData.main.temp);
    const description = currentData.weather[0].description;

    currentWeatherContainer.innerHTML = `
      <p><strong>Temperature:</strong> ${temp}°</p>
      <p><strong>Condition:</strong> ${description}</p>
    `;

    // Fetch forecast
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`;
    const forecastResponse = await fetch(forecastUrl);
    const forecastData = await forecastResponse.json();

    // Get 3 future days at noon
    const forecastList = forecastData.list.filter(item => item.dt_txt.includes("12:00:00"));
    const threeDayForecast = forecastList.slice(1, 4);

    forecastContainer.innerHTML = "<h3>3-Day Forecast</h3>";

    threeDayForecast.forEach(day => {
      const date = new Date(day.dt_txt);
      const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
      const dayTemp = Math.round(day.main.temp);
      const dayDesc = day.weather[0].description;

      forecastContainer.innerHTML += `
        <p><strong>${dayName}:</strong> ${dayTemp}°, ${dayDesc}</p>
      `;
    });

  } catch (error) {
    currentWeatherContainer.innerHTML = "<p>Error loading weather data.</p>";
    console.error("Weather API error:", error);
  }
}

getWeather();
