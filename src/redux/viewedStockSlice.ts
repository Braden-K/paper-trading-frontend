import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { StockData } from "../types/types";

interface ViewedStockState {
  stockData: StockData;
}

const initialState: ViewedStockState = {
  stockData: null,
};

export const viewedStockSlice = createSlice({
  name: "viewedStock",
  initialState,
  reducers: {
    loadViewedStock: (state, action: PayloadAction<StockData>) => {
      state.stockData = action.payload;
    },
  },
});

export const { loadViewedStock } = viewedStockSlice.actions;
export default viewedStockSlice.reducer;
