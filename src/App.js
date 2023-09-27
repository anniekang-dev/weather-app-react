import React, { useState } from 'react';
import axios from 'axios';

// import searchIcon from './assets/icons-search.png';
import weatherIcon from './assets/2682849_cloud_cloudy_day_forecast_sun_icon.png';
import feelsIcon from './assets/thermometer.png';
import airIcon from './assets/blur.png';
import humidityIcon from './assets/humidity.png';
import windIcon from './assets/wind.png';

export default function App() {
  const [ data, setData ] = useState([])
  const [ location, setLocation ] = useState('')

  const API_KEY = 'dc3e1bfc785b02ec2d95cb7236385598';
  const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${API_KEY}`;

  const searchLocation = async (e) => {
    if(e.key === 'Enter') {
        axios.get(url).then((response) => {
        setData(response.data)
      })
      setLocation('')
      }
    }

  return (
    <div className="app">
      <div className="container">
        <div className="search-bar">
          <input type="text" value={location} onChange={event => setLocation(event.target.value)} onKeyDown={searchLocation}placeholder="Enter location" />
          <div className="search-icon">
            {/* <img src={searchIcon} alt=""/> */}
          </div>
        </div>
        <div className="weather-info">
          <div className="icon">
            <img src={weatherIcon} alt=""/>
          </div>
          <div className="temp">
            {data.main ? <p>{data.main.temp.toFixed()}</p> : null}<p id='degree'>ºF</p>
          </div>
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

      {data.name != undefined &&
        <div className="weather-details">
          <div className="feels"><img className="details-icons" src={feelsIcon} alt=""/>Feels Like
            {data.main ? <p>{data.main.feels_like.toFixed()}ºF</p> : null}
          </div>
          <div className="visibility"><img className="details-icons" src={airIcon} alt=""/>Visibility
            <p>{data.visibility} mi</p>
          </div>
          <div className="humidity"><img className="details-icons" src={humidityIcon} alt=""/>Humidity
            {data.main ? <p>{data.main.humidity}%</p> : null}
          </div>
          <div className="wind"><img className="details-icons" src={windIcon} alt=""/>Wind Speed
            {data.wind ? <p>{data.wind.speed.toFixed()} mph</p> : null}
          </div>
        </div>
      }
      </div>
    </div>
  );
}
