import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Account } from "../types/types";

interface AccountState {
  accounts: Account[];
  chosenAccount: Account | null;
}

const initialState: AccountState = {
  // user: null,
  // TODO: implement user auth
  accounts: [
    {
      dateCreated: "7/6/24",
      accountName: "account 1",
      holdings: [],
    },
  ],
  chosenAccount: null,
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    loadAccounts: (state, action: PayloadAction<Account[]>) => {
      state.accounts = action.payload;
    },
    pushAccount: (state, action: PayloadAction<Account>) => {
      state.accounts.push(action.payload);
    },
    setChosenAccount: (state, action: PayloadAction<Account>) => {
      state.chosenAccount = action.payload;
    },
  },
});

export const { loadAccounts, pushAccount, setChosenAccount } =
  accountSlice.actions;
export default accountSlice.reducer;
