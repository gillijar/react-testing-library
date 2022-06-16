import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import StockData from "../components/Stock Data/StockData";
import { fetchStockData } from "../components/Stock Data/fetchStockData";

// setup for all tests
const setup = () => render(<StockData />);

// API key for fetchStockData parameters to successfully resolve the promise
const apiKey = process.env.REACT_APP_STOCK_API_KEY;

// // test to see if fetchStockData function returns the correct symbol
describe("input returns correct ticker", () => {
  //   AAPL (Apple) data
  test("returns AAPL data", async () => {
    const data = await fetchStockData("AAPL", apiKey);
    expect(data.ticker).toBe("AAPL");
    expect(data.name).toBe("Apple Inc");
  });

  //   TSLA (Tesla) data
  test("returns TSLA data", async () => {
    const data = await fetchStockData("TSLA", apiKey);
    expect(data.ticker).toBe("TSLA");
    expect(data.name).toBe("Tesla Inc");
  });

  // MSFT (Microsoft) data
  test("returns MSFT data", async () => {
    const data = await fetchStockData("MSFT", apiKey);
    expect(data.ticker).toBe("MSFT");
    expect(data.name).toBe("Microsoft Corporation");
  });
});

test("input and button are in document and initial value is empty", () => {
  setup();

  const searchInput = screen.getByTestId("stock-input");
  expect(searchInput.value).toBe("");
  expect(searchInput).toBeInTheDocument();

  const submitButton = screen.getByRole("button", { name: /search/i });
  expect(submitButton).toBeInTheDocument();
});

test("correct data is displayed upon retrieving the stock", async () => {
  setup();

  // search for AAPL(Apple) in search bar
  const searchInput = screen.getByTestId("stock-input");
  userEvent.type(searchInput, "AAPL");
  expect(searchInput.value).toBe("AAPL");

  const searchButton = screen.getByRole("button", { name: /search/i });
  userEvent.click(searchButton);

  // find elements
  const tickerEl = await screen.findByText("AAPL");
  expect(tickerEl).toBeInTheDocument();
  expect(tickerEl).toHaveTextContent("AAPL");

  const nameEl = await screen.findByText("Apple Inc");
  expect(nameEl).toBeInTheDocument();
  expect(nameEl).toHaveTextContent("Apple Inc");

  const priceEl = await screen.findByTestId("stock-price");
  expect(priceEl).toBeInTheDocument();

  const difference = await screen.findByTestId("stock-dif");
  expect(difference).toBeInTheDocument();
});
