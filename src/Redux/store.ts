import doctorReducer from "./DoctorSlice";
import PrescriptionReducer from "./PrescriptionSlice";
import itemsReducer from "./itemsSlice";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    item: itemsReducer,
    Prescription: PrescriptionReducer,
    Doctor: doctorReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
