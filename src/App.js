import logo from "./logo.svg";
import "./App.css";
import InputForm from "./components/Input Form/InputForm";
import StockData from "./components/Stock Data/StockData";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <InputForm />
      <StockData />
    </div>
  );
}

export default App;
