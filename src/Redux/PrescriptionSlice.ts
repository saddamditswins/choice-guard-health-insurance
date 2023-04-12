import { createSlice } from "@reduxjs/toolkit";

interface IPrescriptiontate {
  Prescription: String[];
}

const initialState: IPrescriptiontate = {
  Prescription: [],
};

const PrescriptionSlice = createSlice({
  name: "Prescription",
  initialState,
  reducers: {
    PrescriptionItem: (state, action) => {
      state.Prescription = [...state.Prescription, action.payload];
    },
    RemovePrescriptionItem: (state, action) => {
      state.Prescription.splice(action.payload, 1);
    },
    // add a new action to select an item
  },
});

const PrescriptionReducer = PrescriptionSlice.reducer;
export const { PrescriptionItem, RemovePrescriptionItem } =
  PrescriptionSlice.actions;
export default PrescriptionReducer;
