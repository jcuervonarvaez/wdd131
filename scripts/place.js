const today = new Date();

const copyRightElement = document.getElementById("copyright");
const lastChangeElement = document.getElementById("lastChangeFile");

copyRightElement.textContent = `© ${today.getFullYear()} - 🚀 Julian A. Cuervo 🌐`;
lastChangeElement.textContent = `Last Modification: ${document.lastModified}`;

const weatherInfoListElement = document.getElementById("weather-info-list");
const temperature = 11;
const conditions = "Clear";
const windSpeed = 6;
const windChill = getWindChill(temperature, windSpeed);

createWeatherInfoElement(temperature, conditions, windSpeed, windChill);

function createWeatherInfoElement(
  temperature,
  conditions,
  windSpeed,
  windChill
) {
  const temperatureElement = document.createElement("li");
  temperatureElement.innerHTML = `<span>Temperature:</span> ${temperature}°C`;
  const conditionsElement = document.createElement("li");
  conditionsElement.innerHTML = `<span>Conditions:</span> ${conditions}`;
  const windSpeedElement = document.createElement("li");
  windSpeedElement.innerHTML = `<span>Wind Speed:</span> ${windSpeed} km/h`;
  const windChillElement = document.createElement("li");
  windChillElement.innerHTML = `<span>Wind Chill:</span> ${windChill}°C`;
  weatherInfoListElement.appendChild(temperatureElement);
  weatherInfoListElement.appendChild(conditionsElement);
  weatherInfoListElement.appendChild(windSpeedElement);
  weatherInfoListElement.appendChild(windChillElement);
}

// Just for Celsius
function calculateWindChill(temperature, windSpeed) {
  // AI Give me this formula
  let result = (
    13.12 + 0.6215 * temperature - 11.37 * windSpeed ** 0.16 + 0.3965 * temperature * windSpeed ** 0.16
  );
  return Math.round(result * 10) / 10;
}

function getWindChill(temperature, windSpeed) {
  if (temperature > 10 && windSpeed > 4.8) {
    return calculateWindChill(temperature, windSpeed);
  }
  return "N/A";
}
