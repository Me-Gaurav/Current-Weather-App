import React from "react";
import "./City.css";

const City = (props) => {
  const { city, setCity } = props;

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <header>Weather App</header>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleCityChange}
        />
      </form>
      <p>or</p>
      <button>Get Device Location</button>
    </div>
  );
};

export default City;
