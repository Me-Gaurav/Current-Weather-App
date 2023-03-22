import React from "react";
import "./Weather.css";
import { MdLocationPin } from "react-icons/md";
import { ImArrowLeft2 } from "react-icons/im";
import { BsDropletHalf, BsThermometerSun } from "react-icons/bs";

const Weather = (props) => {
  const { city, setCity, setShow, weather, icon, currentLocation } = props;

  //toggling the setShow value to false
  const handleBackClick = () => {
    setShow(false);
    setCity("");
  };

  return (
    <div className="container-weather">
      <header>
        <ImArrowLeft2 id="back-button" onClick={handleBackClick} />
        <span id="heading">Weather App</span>
      </header>
      <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
      <p id="temp">{(weather.main.temp - 270).toFixed(0)}&#176; C</p>
      <p id="weather">{weather.weather[0].main}</p>
      <p id="location">
        <MdLocationPin className="location-icon" />
        {city.length > 0 ? city : currentLocation}
      </p>
      <footer>
        <div id="weather-details-container">
          <div id="row1">
            <BsThermometerSun id="feels-like-icon" />
          </div>
          <div id="row2">
            <span id="feels-like-temp">
              {(weather.main.feels_like - 270).toFixed(0)}&#176;C
            </span>
            <span id="feels-like-text">Feels like</span>
          </div>
          <div id="row3">
            <BsDropletHalf id="humidity-icon" />
          </div>
          <div id="row4">
            <span id="humidity-temp">{weather.main.humidity}%</span>
            <span id="humidity-text">Humidity</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Weather;
