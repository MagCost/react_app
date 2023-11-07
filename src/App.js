import "./index.css";
import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine(props) {
  let [city, setCity] = useState("");
  let [submitted, setSubmitted] = useState(false);
  let [temperature, setTemperature] = useState(null);
  let [loading, setLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=57821c3b75b60c68ecd1a8d0dd1aa8d3&units=metric`;

    axios.get(url).then((response) => {
      setTemperature(response.data.main.temp);
      setSubmitted(true);
      setLoading(false);
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <h1>Search Engine</h1>
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      {loading && <p>Loading...</p>}
      {submitted && city && (
        <h2>
          It's {Math.round(temperature)}°C in {city}
        </h2>
      )}
      <a href="My GitHub repository" target="_blank">
        https://github.com/MagCost/react_app
      </a>
      ;
    </div>
  );
}
