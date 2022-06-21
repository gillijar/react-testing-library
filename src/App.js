import "./App.css";
import InputForm from "./components/Input Form/InputForm";
import StockData from "./components/Stock Data/StockData";
import Survey from "./components/Survey/Survey";

function App() {
  return (
    <div className="App">
      <InputForm />
      <StockData />
      <Survey />
    </div>
  );
}

export default App;
