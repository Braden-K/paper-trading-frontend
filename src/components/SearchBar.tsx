import { useState } from "react";
import { useDispatch } from "react-redux";
import { setModalStatus } from "../redux/modalSlice";
import { fetchPriceInfo } from "../dataApi/query";

export const SearchBar = () => {
  const [symbol, setSymbol] = useState<string>("");
  const dispatch = useDispatch();
  console.log(symbol);

  const onInputChange = () => {
    const inputField = document.getElementById("quoteSearch");
    if (inputField) {
      setSymbol((inputField as HTMLInputElement).value);
    } else {
      setSymbol("");
    }
  };

  const onClickSearch = async () => {
    const stockData = await fetchPriceInfo(symbol);
    console.log(stockData);

    // TODO: api call for stock FIRST
    dispatch(
      setModalStatus({
        modalStatus: {
          showSearchOptionModal: true,
          searchOptionModalSymbol: "AAPL",
        },
      })
    );
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
        <div className="text-white border border-gray-600 rounded-md pl-2 pr-2">
          Search
        </div>
      </button>
    </div>
  );
};
