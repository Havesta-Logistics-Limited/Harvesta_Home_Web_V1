import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modalOpen: false,
  },

  reducers: {
    openModal: (state) => {
      state.modalOpen = true;
    },

    closeModal: (state) => {
        state.modalOpen = false;
    },
  },
});


export const {openModal, closeModal} = modalSlice.actions

export default modalSlice.reducer;