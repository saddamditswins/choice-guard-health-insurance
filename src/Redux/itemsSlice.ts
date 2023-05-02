import { createSlice } from "@reduxjs/toolkit";

interface fieldValues {
    Zipcode: string,
    CompositionEvent: string,
    Vision: string,
    Hearing: string,
    PartB: string,
    GroceryCard: string,
    
    Over: string,
    Utilities: string,
    Transportation: string,
    Emergency: string,
    USA: string,
    USA1: string,
    world: string,

    Medicare: string,
    Medicaid: string,
    Tricare: string,
    chronic: string,
    
    MedicareValue: string,
    Supplement: string,
    Employer: string,
    Prescription: string,
    Other: string,
    NewField: string,
    None: string,

    doctor: string,
    distance: string,
    doctorname: string,
    address: string,
    medications: string,
    medicinename: string,
    dosage: string,
    quantity: string,
    frequency: string,

    preferable: string,
    network: string,
    important: string,
    errors: any
}
interface stepOne {
  Zipcode: string;
}
interface stepTwo {
  CompositionEvent: string;
  Vision: string;
  Hearing: string;
  PartB: string;
  GroceryCard: string;
}
interface stepThree {
  Over: string;
  Utilities: string;
  Transportation: string;
  RoundTripTransportation: string;
  Emergency: string;
  USA: string;
  travelOutSideUSA: string;
}
interface stepFour {
  Medicare: string;
  Medicaid: string;
  Tricare: string;
  chronic: string;
}
interface stepFive {
  Medicare: string;
  Supplement: string;
  Employer: string;
  Prescription: string;
  Other: string;
  NewField: string;
  None: string;
  Doctor: string;
  // OptionsValue: string[];
}
interface stepSix {
  regularDoctor: string;
  doctorAddress: string;
  distance: string;
  doctorname: string;
  selectedLocation: string;
  prescriptionsMedications: string;
  prescriptionName: string;
  dosage: string;
  quantity: string;
  frequency: string;
  medications: string;
  medicinename: string;  
}
interface stepSeven {
  preferable: string;
  network: string;
}

interface IItemState {
  stepOne: stepOne,
  stepTwo: stepTwo,
  stepThree: stepThree,
  stepFour: stepFour,
  stepFive: stepFive,
  stepSix: stepSix,
  stepSeven: stepSeven,
}

const initialState: IItemState = {
  stepOne: { Zipcode: '' },
  stepTwo: { CompositionEvent: '', Vision: '', Hearing: '', PartB: '', GroceryCard: '' },
  stepThree: { Over: '', Utilities: '', Transportation: '', RoundTripTransportation: '', Emergency: '', USA: '', travelOutSideUSA: '' },
  stepFour: { Medicare: '', Medicaid: '', Tricare: '', chronic: '' },
  stepFive: { Medicare: '', Supplement: '', Employer: '', Prescription: '', Other: '', NewField: '', None: '', Doctor: '' },
  // stepFive: { OptionsValue: [] },
  stepSix: { regularDoctor: '', doctorAddress: '', distance: '', doctorname: '', selectedLocation: '', prescriptionsMedications: '', prescriptionName: '', dosage: '', quantity: '', frequency: '', medications: '', medicinename: '' },
  stepSeven: { preferable: '', network: '' },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setStepOne: (state, action) => {
      state.stepOne = action.payload;
    },
    setStepTwo: (state, action) => {
      state.stepTwo = action.payload;
    },
    setStepThree: (state, action) => {
      state.stepThree = action.payload;
    },
    setStepFour: (state, action) => {
      state.stepFour = action.payload;
    },
    setStepFive: (state, action) => {
      state.stepFive = action.payload;
    },
    setStepSix: (state, action) => {
      state.stepSix = action.payload;
    },
    setStepSeven: (state, action) => {
      state.stepSeven = action.payload;
    },
  },
});

const itemsReducer = formSlice.reducer;
export const {
  setStepOne,
  setStepTwo,
  setStepThree,
  setStepFour,
  setStepFive,
  setStepSix,
  setStepSeven
} = formSlice.actions;
export const selectDisease = (state) => state;

export default itemsReducer;
