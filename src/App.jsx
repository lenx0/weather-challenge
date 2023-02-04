import "./App.css";

function App() {
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
        ></input>
      </div>
      <hr className="separation-line" />
    </div>
  );
}

export default App;
