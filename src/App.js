import React, { useState } from "react";
import axios from "axios";
import "./App.css";

import Weather from "./Components/Weather";

const App = (props) => {
  const [city, setCity] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [weather, setWeather] = useState("");
  const [show, setShow] = useState(false);
  const [icon, setIcon] = useState("");

  //Reading the input city value
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  //fetching city weather details while submitting the form and set to the state
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=781bcd7599b51fab0d822feeb88d5ef1`
      )
      .then((res) => {
        setWeather(res.data);
        setIcon(res.data.weather[0].icon);
        setShow(true);
      })
      .catch((err) => {
        alert("Invalid City Name", err.message);
      });
  };

  //Fetching current location weather details
  const getCurrentLocation = async () => {
    const { data } = await axios.get("https://ipapi.co/json");
    const { data: weatherData } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${data?.city}&appid=781bcd7599b51fab0d822feeb88d5ef1`
    );
    setCurrentLocation(data.city);
    setWeather(weatherData);
    setShow(true);
    setIcon(weatherData.weather[0].icon);
  };

  return (
    <div>
      {show ? (
        <Weather
          city={city}
          setCity={setCity}
          currentLocation={currentLocation}
          weather={weather}
          setShow={setShow}
          icon={icon}
        />
      ) : (
        <div className="container">
          <header id="city">Weather App</header>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter city name"
              value={city}
              onChange={handleCityChange}
            />
          </form>
          <p id="or">or</p>
          <button onClick={getCurrentLocation}>Get Device Location</button>
        </div>
      )}
    </div>
  );
};

export default App;
