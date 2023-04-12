import { createSlice } from "@reduxjs/toolkit";

interface stepOne {
  Zipcode: string;
  errors: any;
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
  Emergency: string;
  USA: string;
  USA1: string;
  world: string;
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
  None: string;
  NewField: string;
}

interface stepSix {
  doctor: string;
  distance: string;
  doctorname: string;
  address: string;
  medications: string;
  medicinename: string;
  dosage: string;
  quantity: string;
  frequency: string;
}

interface stepSeven {
  preferable: string;
  network: string;
  important: string;
}

interface IItemState {
  field: boolean;
  field2: boolean;
  field3: boolean;
  isActive: number;
  stepOne: stepOne;
  stepTwo: stepTwo;
  stepThree: stepThree;
  stepFour: stepFour;
  stepFive: stepFive;
  stepSix: stepSix;
  stepSeven: stepSeven;
  step: number;
}

const initialState: IItemState = {
  field: false,
  field2: false,
  field3: false,
  step: 1,
  isActive: 1,
  stepOne: {
    Zipcode: "",
    errors: {},
  },
  stepTwo: {
    CompositionEvent: "",
    Vision: "",
    Hearing: "",
    PartB: "",
    GroceryCard: "",
  },
  stepThree: {
    Over: "",
    Utilities: "",
    Transportation: "",
    Emergency: "",
    USA: "",
    USA1: "",
    world: "",
  },
  stepFour: {
    Medicare: "",
    Medicaid: "",
    Tricare: "",
    chronic: "",
  },
  stepFive: {
    Medicare: "",
    Supplement: "",
    Employer: "",
    Prescription: "",
    Other: "",
    NewField: "",
    None: "",
  },
  stepSix: {
    doctor: "",
    distance: "",
    doctorname: "",
    address: "",
    medications: "",
    medicinename: "",
    dosage: "",
    quantity: "",
    frequency: "",
  },
  stepSeven: {
    preferable: "",
    network: "",
    important: "",
  },
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.stepOne = action.payload;
    },
    setField: (state, action) => {
      state.field = action.payload;
    },
    setField2: (state, action) => {
      state.field2 = action.payload;
    },
    setField3: (state, action) => {
      state.field3 = action.payload;
    },
    setStepOneState: (state, action) => {
      state.stepOne = action.payload;
      state.isActive = state.step;
    },
    setStepTwoState: (state, action) => {
      state.stepTwo = action.payload;
      state.isActive = state.step;
    },
    setStepThreeState: (state, action) => {
      state.stepThree = action.payload;
      state.isActive = state.step;
    },
    setStepFourState: (state, action) => {
      state.stepFour = action.payload;
      state.isActive = state.step;
    },
    setStepFiveState: (state, action) => {
      state.stepFive = action.payload;
      state.isActive = state.step;
    },
    setStepSixState: (state, action) => {
      state.stepSix = action.payload;
      state.isActive = state.step;
    },
    setStepSevenState: (state, action) => {
      state.stepSeven = action.payload;
      state.isActive = state.step;
    },
    handleSubmitNext: (state, action) => {
      debugger
      state.step = state.step + 1;
    },
    handleSubmitPrev: (state, action) => {
      state.step = state.step - 1;
    },
    // add a new action to select an item
  },
});

const itemsReducer = itemsSlice.reducer;
export const {
  setField,
  setStepOneState,
  handleSubmitNext,
  handleSubmitPrev,
  setStepTwoState,
  setStepFourState,
  setStepFiveState,
  setStepThreeState,
  setStepSixState,
  setStepSevenState,
  addItem,
  setField2,
  setField3,
} = itemsSlice.actions;
export default itemsReducer;
