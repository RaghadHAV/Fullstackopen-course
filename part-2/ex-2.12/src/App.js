import React, { useState, useEffect } from "react";
import FilterName from "./components/FilterName";
import axios from "axios";
import ShowInfo from "./components/ShowInfo";
const App = () => {
  const [countrieAndWeather, setcountries] = useState({
    countries: [],
    //weather: [],
  });
  const [Filter, setFilter] = useState([]);

  // useEffect(() => {
  //   axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
  //     const recieved = response.data;
  //     const recievedCountries = recieved.map((country, idx) => {
  //       country.id = idx;
  //       // console.log(country);
  //       return country;
  //     });
  //     setcountries(recievedCountries);
  //     console.log(recievedCountries);
  //   });
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      const recievedCountries = await axios(
        `https://restcountries.eu/rest/v2/all`
      );
      // const recievedWeather = await axios(
      //   `http://api.weatherstack.com/current?query=New%20York&access_key=3ab133f49a754f4af70d044265e4a7ea`
      // );
      //console.log("here we go");
      //console.log(recievedCountries);
      setcountries({
        countries: recievedCountries.data,
        //weather: recievedWeather.data,
      });
    };
    fetchData();
    
  }, []);

  const handleFilter = (event) => {
    const targetName = event.target.value.toUpperCase();
    console.log(targetName);
    const matchedCountries = countrieAndWeather.countries.filter(
      (country) => country.name.toUpperCase().indexOf(targetName) !== -1
    );
    setFilter(matchedCountries);
    //console.log(event.target.value);
    console.log(matchedCountries);
  };
  const IfControl = ({ Filter }) => {
    if (Filter.length > 10) return <p>Too many, choose another filter </p>;
    else return "";
  };
  return (
    <div>
      <h2>Countries</h2>
      <FilterName handleFilter={handleFilter} />
      <IfControl Filter={Filter} />
      <ul>
        {Filter.map((country, idx) => {
          console.log("len" + Filter.length);
          // <IfControl Filter={Filter} />;
          if (Filter.length <= 10 && Filter.length !== 1) {
            return <ShowInfo country={country} />;
          } else if (Filter.length === 1) {
            return <ShowInfo country={country} />;
          }
        })}
      </ul>
    </div>
  );
};

export default App;
