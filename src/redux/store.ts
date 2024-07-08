import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import accountReducer from "./accountSlice";
import holdingsReducer from "./holdingsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    accounts: accountReducer,
    holdings: holdingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
