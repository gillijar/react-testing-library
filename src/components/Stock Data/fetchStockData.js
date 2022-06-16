import axios from "axios";

export const fetchStockData = async (ticker, apiKey) => {
  try {
    const data = await axios.get(
      `https://api.stockdata.org/v1/data/quote?symbols=${ticker}&api_token=${apiKey}`
    );

    return data.data.data[0];
  } catch (err) {
    console.log(err);
  }
};
