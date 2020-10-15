import React, { useState } from "react";
import "./styles.css";
import Button from "./components/Button";
import { useDispatch } from 'react-redux';
import { selectCity } from "./state";
import WeatherDetail from "./components/WeatherDetail";

export default function App() {
  const dispatch = useDispatch();
  const [city, setCity] = useState("")
  const [forecast, setForecast] = useState(false)

  const handleSearch = () => {
    dispatch(selectCity(city))
  };

  const handleForcast = () => {
    setForecast(!forecast);
  }

  return (
    <div className="App">
      <h2>Weather App</h2>
      <form onSubmit={e => e.preventDefault()}>
        <span>Enter City : </span>
        <input type="text" onChange={(e) => setCity(e.target.value)} value={city} />
        <Button type="button" onClick={handleSearch}>Search</Button>
        <Button type="button" onClick={handleForcast}>5 Day Weather</Button>
      </form>
      <WeatherDetail showForecast={forecast} />
    </div>
  );
}
