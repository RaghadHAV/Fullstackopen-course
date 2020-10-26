import React, { useState, useEffect } from "react";
import axios from "axios";


const Buttun = ({ country }) => {
  const [showResults, setShowResults] = useState(false);
  const [weather, setWeather]=useState({
    temperature:"",
    wind_speed:"",
    wind_dir:"",
    weather_icons:"",
  })
  const ShowFunction = (e) => {
    e.preventDefault();
    setShowResults(true);
    console.log(showResults);
    
    //const ENV_KEY='3ab133f49a754f4af70d044265e4a7ea';
     const ENV_KEY=process.env.REACT_APP_APIKEY
    //console.log(process.env.REACT_APP_APIKEY);
    const requestWeather=`http://api.weatherstack.com/current?query=${country.capital}&access_key=${ENV_KEY}`
    axios.get(requestWeather).then((response) => {
      const requestWeatherData = response.data;
      const weathObj={
        temperature: requestWeatherData.current.temperature,
        wind_speed: requestWeatherData.current.wind_speed,
        wind_dir: requestWeatherData.current.wind_dir,
        weather_icons:requestWeatherData.current.weather_icons,
      };
      setWeather(weathObj);
    
    });

  };
  return (
    <div>
      <button type="tex" onClick={ShowFunction}>
        Show
      </button>
      {showResults ? (
        <ul>
          <li>
            <p>Country Name: {country.name}</p>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <p>Flag:</p>
            <img src={country.flag} width="200" height="250" />
            <p> The Temprture is: {weather.temperature}</p>
            <img src={weather.weather_icons} width="200" height="250" />
            <p> The Winde Speed is: {weather.wind_speed}</p>
            <p> The Wind Dir is: {weather.wind_dir}</p>
          </li>
      
        </ul>
      ) : null}
    </div>
  );
};
const ShowInfo = ({ country }) => {
  return (
    <div>
      <li key={country.id}> {country.name}</li>
      <Buttun country={country} />
    </div>
  );
};
export default ShowInfo;
