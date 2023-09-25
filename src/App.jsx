import React, { useState } from 'react';
import axios from 'axios';

function App() {

  // const url ='https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=dc3e1bfc785b02ec2d95cb7236385598';

  return (
    <div className="app">
      <div className="container">
        <div className="search-bar">
          <div className="temp">
            <h1>88ºF</h1>
          </div>
          <div className="location">
            <p>Dallas</p>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
          <div className="details">
            <div className="feels">
              <p>94ºF</p>
            </div>
            <div className="visibility">
              <p>18 mi</p>
            </div>
            <div className="humidity">
              <p>59%</p>
            </div>
            <div className="wind">
              <p>9 mph</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
