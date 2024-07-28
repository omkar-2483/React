//  format of api fetch
// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "Add_your_api_key";

let getWeatherInfo = async (city) => {
  try {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonRes = await response.json();
    // console.log(jsonRes);
    let result = {
      city: city,
      temp: jsonRes.main.temp,
      maxTemp: jsonRes.main.temp_max,
      minTemp: jsonRes.main.temp_min,
      humidity: jsonRes.main.humidity,
      feelsLike: jsonRes.main.feels_like,
      weather: jsonRes.weather[0].description,
    };
    // console.log(result);
    return result;
  } catch (err) {
    throw err;
  }
};

export default getWeatherInfo;
