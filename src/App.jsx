import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);

  const handleChange = async (event) => {
    setCity(event.target.value);
    getCity();
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
  }, []);
  return (
    <>
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
      </div>
      <div className="capitais-container">
        <h2>Capitais</h2>
      </div>
      <div className="minmax-container">
        <h6>Min</h6>
        <h6>Max</h6>
      </div>
    </>
  );
}

{
  /* <ul>
  <h1>Cidade: {city}</h1>
  <p>Velocidade do vento: {weather.wind_speed}</p>
  <p>Grau do vento: {weather.wind_degrees}</p>
  <p>Temperatura: {weather.temp}</p>
  <p>Humidade: {weather.humidity}</p>
  <p>Por do sol: {weather.sunset}</p>
  <p>Temperatura mínima: {weather.min_temp}</p>
  <p>Núvens: {weather.cloud_pct}</p>
  <p>Nascer do sol: {weather.sunrise}</p>
  <p>Temperatura máxima: {weather.max_temp}</p>
</ul>; */
}

export default App;
