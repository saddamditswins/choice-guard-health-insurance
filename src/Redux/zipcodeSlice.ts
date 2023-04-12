import { createSlice } from "@reduxjs/toolkit";

const zipCodeSlice = createSlice({
  name: "zipCode",
  initialState: "",
  reducers: {
    setZipCode: (state, action) => {
      return action.payload;
    },
  },
});

const zipCodeReducer = zipCodeSlice.reducer;

export const { setZipCode } = zipCodeSlice.actions;

export default zipCodeReducer;
