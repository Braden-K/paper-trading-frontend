import { useState } from "react";
import { useDispatch } from "react-redux";
import { setModalStatus } from "../redux/modalSlice";
import { fetchPriceInfo } from "../dataApi/query";
import { mapResponseToStockDataObject } from "../dataApi/utils";
import { StockData } from "../types/types";
import { loadViewedStock } from "../redux/viewedStockSlice";

export const SearchBar = () => {
  const [symbol, setSymbol] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  console.log(symbol);

  const onInputChange = () => {
    const inputField = document.getElementById("quoteSearch");
    if (inputField) {
      setSymbol((inputField as HTMLInputElement).value.toUpperCase());
    } else {
      setSymbol("");
    }
  };

  const onClickSearch = async () => {
    setIsLoading(true);
    const stockApiRes = await fetchPriceInfo(symbol);
    const stockData: StockData = mapResponseToStockDataObject(stockApiRes);
    if (!stockData) {
      alert("Invalid or unavailable ticker");
    } else {
      dispatch(loadViewedStock(stockData));
      dispatch(
        setModalStatus({
          modalStatus: {
            showSearchOptionModal: true,
            searchOptionModalSymbol: symbol,
          },
        })
      );
    }
    setIsLoading(false);
  };

  return (
    <div className="w-3/12 flex flex-row space-x-1">
      <input
        type="text"
        id="quoteSearch"
        className="w-full p-2 pl-4 text-white bg-gray-900 border border-gray-600 rounded-full  focus:outline-4 focus:outline-none"
        placeholder="Search stock quote..."
        onChange={onInputChange}
      />
      <button onClick={onClickSearch}>
        {!isLoading ? (
          <div className="text-white border border-gray-600 rounded-md pl-2 pr-2">
            Search
          </div>
        ) : (
          <div className="text-white">Loading...</div>
        )}
      </button>
    </div>
  );
};
