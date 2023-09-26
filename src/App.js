import React, { useState } from 'react';
import axios from 'axios';

function App() {

  // const url ='https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=dc3e1bfc785b02ec2d95cb7236385598';

  return (
    <div className="app">
      <div className="container">
        <div className="search-bar">
          <input type="text" placeholder="Enter location" />
          <div className="search-icon">
          </div>
        </div>
        <div className="weather-info">
          <div className="temp">
            <p>88ºF</p>
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
          <div className="visibility">Visibility
            <p>18 mi</p>
          </div>
          <div className="humidity">Humidity
            <p>59%</p>
          </div>
          <div className="wind">Wind Speed
            <p>9 mph</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
