import { createSlice } from "@reduxjs/toolkit";

  interface IDoctorName {
    doctorAddress: string;
    distance: string;
    doctorname: string;
  }

  const initialState: IDoctorName = {
        doctorAddress: '',
        distance: '',
        doctorname: '',
  };

  const doctorNameSlice = createSlice({
    name: "doctorFields",
    initialState,
    reducers: {
    setDoctorAddress(state, action) {
        // const { field, value } = action.payload;
        // state[field] = value;
        state.doctorAddress = action.payload
    },
    setDistance: (state, action) => {
      state.distance = action.payload;
    },
    setDoctorName: (state, action) => {
      state.doctorname = action.payload;
    },
    },
    });
    
    const doctorReducer = doctorNameSlice.reducer
    export const { setDoctorAddress, setDistance, setDoctorName } = doctorNameSlice.actions;
    
    export default doctorReducer;
    