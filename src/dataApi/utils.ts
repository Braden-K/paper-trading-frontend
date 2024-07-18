import { StockData } from "../types/types";

export const mapResponseToStockDataObject = (jsonRes: {
  [key: string]: number;
}): StockData | null => {
  if (jsonRes["c"] === 0) {
    return null;
  }

  const stockData: StockData = {
    currentPrice: jsonRes["c"] || null,
    change: jsonRes["d"] || null,
    percentChange: jsonRes["dp"] || null,
    dayHigh: jsonRes["h"] || null,
    dayLow: jsonRes["l"] || null,
    dayOpen: jsonRes["o"] || null,
    prevClose: jsonRes["pc"] || null,
  };

  return stockData;
};
