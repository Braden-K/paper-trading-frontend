import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ModalStatus } from "../types/types";

interface ModalState {
  modalStatus: ModalStatus;
}

const initialState: ModalState = {
  modalStatus: {
    showSearchOptionModal: false,
    searchOptionModalSymbol: "",
  },
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalStatus: (state, action: PayloadAction<ModalState>) => {
      state.modalStatus = action.payload.modalStatus;
      console.log("status is ", state.modalStatus);
    },
  },
});

export const { setModalStatus } = modalSlice.actions;
export default modalSlice.reducer;
