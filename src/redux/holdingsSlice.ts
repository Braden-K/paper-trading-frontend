import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Holding } from "../types/types";

interface HoldingsState {
  holdings: Holding[];
}

const initialState: HoldingsState = {
  holdings: [],
};

export const holdingsSlice = createSlice({
  name: "holdings",
  initialState,
  reducers: {
    loadHoldings: (state, action: PayloadAction<Holding[]>) => {
      state.holdings = action.payload;
    },
    pushHolding: (state, action: PayloadAction<Holding>) => {
      state.holdings.push(action.payload);
    },
  },
});

export const { loadHoldings, pushHolding } = holdingsSlice.actions;
export default holdingsSlice.reducer;
