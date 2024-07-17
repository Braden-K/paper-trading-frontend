import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import accountReducer from "./accountSlice";
import holdingsReducer from "./holdingsSlice";
import modalReducer from "./modalSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    accounts: accountReducer,
    holdings: holdingsReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
