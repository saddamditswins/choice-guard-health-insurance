import "react-animated-slider/build/horizontal.css";
import "typeface-montserrat";
import "./App.css";
import CustomInput from "./features/custom-input/CustomInput";
import CustomRadio from "./features/custom-radio/CustomRadio";
import DoctorField from "./features/doctor-field/DoctorField";
import PrescriptionField from "./features/prescription/PrescriptionField";
import ProgressBar from "./features/progress-bar/Progressbar";
import page from "./assets/Page.png";
import { Field, Formik, useFormikContext } from "formik";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useAppDispatch, useAppSelector } from "./Redux/store";
import { advancedSchema } from "../src/features/validations/Validation"; 
import  StepOne  from "../src/components/Steps/Step1";
import  StepTwo  from "../src/components/Steps/Step2";
import  StepThree  from "../src/components/Steps/Step3";
import  StepFour  from "../src/components/Steps/Step4";
import  StepFive  from "../src/components/Steps/Step5";
import  StepSix  from "../src/components/Steps/Step6";
import  StepSeven  from "../src/components/Steps/Step7";

import {
  handleSubmitNext,
  handleSubmitPrev,
  setField,
  setField2,
  setStepOneState,
  setStepThreeState,
  setStepFourState,
  setStepTwoState,
  setStepFiveState,
  setStepSixState,
  setStepSevenState,
  setField3,
} from "./Redux/itemsSlice";
import {
  Paper,
  Popover,
  Button,
  Image,
  Box,
  Radio,
  MultiSelect,
  Text,
  Center,
  Modal,
  Divider,
  TextInput,
} from "@mantine/core";

function validate2(data, required) {
  const errors = {};
  required.forEach((prop) => {
    if (!data[prop]) {
      errors[prop] = "required";
    }
  });
  return errors;
}

const App = () => {
  const { step, stepOne, stepTwo, stepThree, stepFour, stepSix, stepSeven, isActive } =
    useAppSelector((state) => state.item);
  const dispatch = useAppDispatch();

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
    console.log(values);
  };

  const nextStep = (values) => {
    debugger
    // if(Object.values(values)){
      // if(Object.keys(value).length === 0){
      // validateStep(values);
      // } else {
      // if(validateStep(values)){
        if(Object.values(values).length === 0){
        dispatch(handleSubmitNext());
      } else {
        validateStep(values);
      }
      
    // validateStep(values);
    // console.log("data", values);
    // console.log("we hit this line because there are some errors in the form");
  };

  const prevStep = () => {
    dispatch(handleSubmitPrev());
  };

  const validateStep = (values) => {
    let errors = {};
    switch (step) {
        case 1:
        errors = validate2(values, ['Zipcode'])
        dispatch(setStepOneState({
          values, errors
        }))
        if (!StepOne.Zipcode) {
          return false;
        }
        dispatch(handleSubmitNext());
        break;
        
        case 2:
        errors = validate2(values, [
          "CompositionEvent",
          "Vision",
          "Hearing",
          "PartB",
          "GroceryCard",
        ]);
        console.log(errors);
        dispatch(
          setStepTwoState({
            ...values,
            errors,
          })
        );
        if (
          (!StepTwo.CompositionEvent,
            !StepTwo.Vision,
            !StepTwo.Hearing,
            !StepTwo.PartB,
            !StepTwo.GroceryCard)
        ) {
          return false;
        }
        break;
      
        case 3:
        errors = validate2(values, [
          "Over",
          "Utilities",
          "Transportation",
          "Emergency",
          "world",
        ]);
        dispatch(
          setStepThreeState({
            ...values,
            errors,
          })
        );
        if (
          (!StepThree.Over,
            !StepThree.Utilities,
            !StepThree.Transportation,
            !StepThree.Emergency)
        ) {
          return false;
        }
        break;
      
        case 4:
        errors = validate2(values, ["Medicare", "Medicaid", "Tricare"]);
        console.log(errors);
        dispatch(
          setStepFourState({
            ...values,
            errors,
          })
        );
        if ((!StepFour.Medicare, !StepFour.Medicaid, !StepFour.Tricare)) {
          return false;
        }
        break;
      
        case 5:  errors = validate2(values, ["doctor", "medications"]);
      console.log(errors);
      dispatch(
        setStepSixState({
          ...values,
          errors,
        })
      );
      if ((!StepSix.doctor, !StepSix.medications)) {
        return false;
      }
      break;
      
        case 6:
        errors = validate2(values, ["doctor", "medications"]);
        console.log(errors);
        dispatch(
          setStepSixState({
            ...values,
            errors,
          })
        );
        if ((!StepSix.doctor, !StepSix.medications)) {
          return false;
        }
        break;
      
        case 7:
        if ((!StepSeven.preferable, !StepSeven.network, !StepSeven.important)) {
          return false;
        }
        break;
    
      // case 8:
      //   if (values.firstName && values.lastName && values.email) {
      //     return true;
      //   } else {
      //     return false;
      //   }

      default:
        break;
    }
    return true;
  };

  const validate = (value) => {
    let error;
    if (!value) {
      error = "Required";
    }
    return error;
  };

  return (
    <>
      <Formik
        initialValues={{ Zipcode: "" }}
        validationSchema={advancedSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values }) => (
          <>
            <Center style={{ overflow: "hidden", marginTop: 50 }}>
              <div className="paper-container">
                <Paper
                  shadow={"xl"}
                  style={{
                    overflow: "hidden",
                    width: "900px",
                    height: "100%",
                    padding: 30,
                    marginTop: 20,
                  }}
                >
                  <ProgressBar currentStep={step} />
                  <TransitionGroup>
                    <CSSTransition
                      key={step}
                      classNames={{
                        enter: "slider-enter",
                        enterActive: "slider-enter-active",
                        exit: "slider-exit",
                        exitActive: "slider-exit-active",
                      }}
                      timeout={500}
                    >
                      <div className="step-container">
                        {step === 1 && <StepOne validate={validate} />}
                        {step === 2 && <StepTwo validate={validate} />}
                        {step === 3 && <StepThree validate={validate} />}
                        {step === 4 && <StepFour validate={validate} />}
                        {step === 5 && <StepFive validate={validate} />}
                        {step === 6 && <StepSix validate={validate} />}
                        {step === 7 && <StepSeven validate={validate} />}
                      </div>
                    </CSSTransition>
                  </TransitionGroup>
                  <div className="button-container">
                    {/* Previous button */}
                    {step !== 1 && (
                      <button type="button" onClick={prevStep}>
                        Previous
                      </button>
                    )}
                    {/* Next button */}

                    {step !== 7 && (
                      <button
                        // style={{
                        //   backgroundColor: !validateStep(values) ? 'darkgray' : 'green'
                        // }}
                        type="button"
                        // disabled={!validateStep(values)}
                        onClick={() => {
                          nextStep(values);
                        }}
                      >
                        Next
                      </button>
                    )}
                    {/* Submit button */}
                    {step === 7 && (
                      <button
                        onClick={() => {
                          console.log(
                            stepOne,
                            stepFour,
                            stepSix,
                            stepSeven,
                            stepThree,
                            stepTwo
                          );
                        }}
                        type="submit"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit"}
                      </button>
                    )}
                  </div>
                </Paper>
              </div>
            </Center>
          </>
        )}
      </Formik>
    </>
  );
};
export default App;