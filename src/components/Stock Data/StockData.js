import { useState, useRef } from "react";
import { fetchStockData } from "./fetchStockData";

export default function StockData() {
  const searchInputRef = useRef();
  const [stock, setStock] = useState();

  const submitFormHandler = async (e) => {
    e.preventDefault();

    const apiKey = process.env.REACT_APP_STOCK_API_KEY;
    const searchInput = searchInputRef.current.value;

    const data = await fetchStockData(searchInput, apiKey);
    setStock(data);
  };

  return (
    <div>
      <form onSubmit={submitFormHandler}>
        <input
          aria-label="Search stock data. Ex AAPL, TSLA, MSFT, etc."
          placeholder="Enter stock"
          data-testid="stock-input"
          type="text"
          ref={searchInputRef}
        />
        <button type="submit">Search</button>
      </form>
      {stock && (
        <section>
          <div>
            <p>{stock.name}</p>
            <p>
              <strong>
                <abbr title={stock.name}>{stock.ticker}</abbr>
              </strong>
            </p>
          </div>
          <div>
            <p data-testid="stock-price">{stock.price}</p>
            <p data-testid="stock-dif">
              {(stock.price - stock.day_open).toFixed(2)}
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
