import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setModalStatus } from "../redux/modalSlice";
import { RootState } from "../redux/store";
import { FilledButton } from "./FilledButton";

export const SearchModal = () => {
  const modalStatus = useAppSelector(
    (state: RootState) => state.modal.modalStatus
  );
  const viewedStock = useAppSelector(
    (state: RootState) => state.viewedStock.stockData
  );
  const dispatch = useAppDispatch();
  const [transactionQuantity, setTransactionQuantity] = useState<number>(0);
  console.log(transactionQuantity);

  const onClose = () => {
    dispatch(
      setModalStatus({
        modalStatus: {
          showSearchOptionModal: false,
          searchOptionModalSymbol: "",
        },
      })
    );
  };

  const onResearch = () => {};

  const onInputChange = () => {
    const inputField = document.getElementById("quantity");
    if (inputField) {
      setTransactionQuantity(Number((inputField as HTMLInputElement).value));
    } else {
      setTransactionQuantity(0);
    }
  };

  const onPlaceOrder = () => {};

  return (
    <>
      {modalStatus.showSearchOptionModal ? (
        <div className="fixed inset-0 flex flex-col items-center bg-black bg-opacity-0 z-25 rounded-lg">
          <div className="flex flex-col w-1/3 h-1/3 mt-20 bg-slate-900 rounded-lg pt-2 pb-2 pl-3 pr-3 shadow-lg justify-between items-center">
            <div className="flex items-end space-x-5">
              {viewedStock !== null && viewedStock.currentPrice !== null ? (
                <h2 className="text-gray-400">${viewedStock.currentPrice}</h2>
              ) : (
                <h2 className="text-gray-400">N/A</h2>
              )}
              <h1 className="font-bold text-3xl text-center">
                {modalStatus.searchOptionModalSymbol}
              </h1>
              {viewedStock !== null && viewedStock.percentChange !== null ? (
                viewedStock.percentChange >= 0 ? (
                  <h2 className="text-green-600">
                    +{viewedStock.percentChange}%
                  </h2>
                ) : (
                  <h2 className="text-red-600">{viewedStock.percentChange}%</h2>
                )
              ) : (
                <h2 className="text-gray-400">N/A</h2>
              )}
            </div>
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />{" "}
              <span className="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Buy
              </span>
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white  after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Sell
              </span>
            </label>
            <input
              type="text"
              id="quantity"
              className="w-5/6 p-2 pl-4 text-white bg-gray-900 border border-gray-600 rounded-full  focus:outline-4 focus:outline-none"
              placeholder="Quantity"
              onChange={onInputChange}
            />
            <FilledButton onClick={onPlaceOrder} text="Place Order" />
            <div className="flex">
              <FilledButton onClick={onClose} text="close" />
              <FilledButton onClick={onResearch} text="Research" />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
