import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  // async function getCity() {
  //   const data = await fetch("https://api.api-ninjas.com/v1/weather?city=");
  //   const response = await data.json();
  //   setCity(response);
  // }

  // console.log(city)

  // useEffect(() => {
  //   getCity();
  // }, []);

  async function getCity() {
    const url = "https://api.api-ninjas.com/v1/weather?city=" + city;
    await fetch(url, {
      method: "GET",
      withCredentials: true,
      headers: {
        "X-Api-Key": "G1Hh3U7Hp46xIlUdbE78Rg==27i2f2SJnuQqQfHH",
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then(function (data) {
        setWeather(data);
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getCity();
  });
  return (
    <div className="App">
      <div className="title-container">
        <h1>Previsão do tempo</h1>
      </div>

      <div className="searchbar-container">
        <input
          id="icon"
          type="text"
          placeholder="Insira aqui o nome da cidade"
          onChange={handleChange}
        ></input>
      </div>
      <hr className="separation-line" />
      <ul>
        <li>Velocidade do vento: {weather.wind_speed}</li>
        <li>Grau do vento: {weather.wind_degrees}</li>
        <li>Temperatura: {weather.temp}</li>
        <li>Humidade: {weather.humidity}</li>
        <li>Por do sol: {weather.sunset}</li>
        <li>Temperatura mínima: {weather.min_temp}</li>
        <li>Núvens: {weather.cloud_pct}</li>
        <li>Nascer do sol: {weather.sunrise}</li>
        <li>Temperatura máxima: {weather.max_temp}</li>
      </ul>
    </div>
  );
}

export default App;
