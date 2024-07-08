import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types/types";

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  // user: null,
  // TODO: implement user auth
  user: {
    userId: "1",
    username: "Braden",
    accounts: ["1"],
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { loadUser } = userSlice.actions;
export default userSlice.reducer;
