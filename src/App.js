import React, { useState } from 'react';
import axios from 'axios';

import searchIcon from './assets/icons-search.png';
import weatherIcon from './assets/2682849_cloud_cloudy_day_forecast_sun_icon.png';
import feelsIcon from './assets/thermometer.png';
import airIcon from './assets/blur.png';
import humidityIcon from './assets/humidity.png';
import windIcon from './assets/wind.png';

function App() {

  // const url ='https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=dc3e1bfc785b02ec2d95cb7236385598';

  return (
    <div className="app">
      <div className="container">
        <div className="search-bar">
          <input type="text" placeholder="Enter location" />
          <div className="search-icon">
            {/* <img src={searchIcon} alt=""/> */}
          </div>
        </div>
        <div className="weather-info">
          <div className="icon">
            <img src={weatherIcon} alt=""/>
          </div>
          <div className="temp">
            <p>88</p><p id='degree'>ºF</p>
          </div>
          <div className="location">
            <p>Dallas</p>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="weather-details">
          <div className="feels">Feels Like
            <p>94ºF</p>
          </div>
          <div className="air-quality">Air Quality
            <p>28</p><p id='aq-status'>Good</p>
          </div>
          <div className="humidity">Humidity
            <p>59%</p>
          </div>
          <div className="wind">Wind Speed
            <p>9 mph</p>
          </div>
        </div>
        <div className="details-icons">
          <img src={feelsIcon} alt=""/>
          <img src={airIcon} alt=""/>
          <img src={humidityIcon} alt=""/>
          <img src={windIcon} alt=""/>
        </div>
      </div>
    </div>
  );
}

export default App;
