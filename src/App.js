import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Search Icon
import { FiSearch } from "react-icons/fi";

// Weather condition Icons
import { clear } from "./assets/sun.png";
import { cloud } from "./assets/cloud.png";
import { rain } from "./assets/rain.png";

// Detail Icons
import feelsIcon from './assets/thermometer.png';
import humidityIcon from './assets/humidity.png';
import windIcon from './assets/wind.png';

export default function App() {
  const [ data, setData ] = useState([])
  const [ location, setLocation ] = useState('')
  const [ icon, setIcon ] = useState('clear')

// API info
  const API_KEY = 'dc3e1bfc785b02ec2d95cb7236385598';
  const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${API_KEY}`;

// Keypress event
  const searchLocation = async (e) => {
    if(e.key === 'Enter') {
        axios.get(url).then((response) => {
        setData(response.data)
      })
      setLocation('')
    }
  }

//onClick event 
  const searchIcon = async (e) => {
    if(e.onClick === undefined) {
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
          <input 
            type="text" 
            value={location} 
            onChange={event => setLocation(event.target.value)} 
            onKeyDown={searchLocation} placeholder="Enter location"
          />
          <div className="search-icon">
            <button 
              value={location}
              onChange={event => searchIcon(event.target.value)} 
              onClick={searchIcon}><FiSearch />
              </button>
          </div>
        </div>
        <div className="weather-info">
          <div className="icon">
            <img src={icon} alt="weatherIcon" />
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
          <div className="high-low">
            <div className='high'>
            {data.main ? <p>H:{data.main.temp_max.toFixed()}º</p> : null}
            </div>
            <div className='low'>
            {data.main ? <p>L:{data.main.temp_min.toFixed()}º</p> : null}
            </div>
          </div>
        </div>

      {data.name != undefined &&
        <div className="weather-details">
          <div className="feels"><img className="details-icons" src={feelsIcon} alt=""/>Feels Like
            {data.main ? <p>{data.main.feels_like.toFixed()}ºF</p> : null}
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
