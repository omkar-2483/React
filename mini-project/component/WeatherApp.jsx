import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import './WeatherApp.css'

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Mumbai",
    feelsLike: 42.05,
    humidity: 66,
    maxTemp: 35.05,
    minTemp: 35.05,
    temp: 35.05,
    weather: "haze",
  });

  let updateInfo=(result)=>{
    setWeatherInfo(result);
  }

  return (
    <div className="WeatherApp">
      <h1>Weather App</h1>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  );
}
