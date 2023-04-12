import React from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import { setStepTwoState } from "../../Redux/itemsSlice";
import CustomInput from "../../features/custom-input/CustomInput";
import CustomSelect from "../../features/custom-select/CustomSelect";
import { Text, Divider } from "@mantine/core";
import "../../../src/assets/scss/common.scss";

const StepTwo = ({ validate }) => {
      const options = [
            { value: "select", label: "Select on a scale of 1-5 ▼" },
            { value: "option1", label: "1 - Not Needed" },
            { value: "option2", label: "2 - Useful But Not Needed" },
            { value: "option3", label: "3 - Less Important" },
            { value: "option4", label: "4 - Important" },
            { value: "option5", label: "5 - Very Important" },
      ];
    
      const { stepTwo } = useAppSelector((state) => state.item);
      const dispatch = useAppDispatch();
      return (
        <>
          <h1 className="quatilty-benefits">
            Benefits You May Qualify For
          </h1>
          <p className="each-benefits">
            Select how important each benefit is to you on a scale of 1-5. This
            helps us tailor the options to you.
          </p>
          <Divider my="xl" className="divider-xl" />
          <Text className="text-box">
            <span>
              Comprehensive Dental: Coverage for crowns, dentures, partials,
              bridges, etc. <span className="color-red">*</span>
            </span>
          </Text>
          <CustomSelect
            onClick={(v) => {
              console.log(v.target.value);
              dispatch(setStepTwoState({ CompositionEvent: v.target.value }));
            }}
            defaultValue={stepTwo.CompositionEvent}
            name="CompositionEvent"
            validate={validate}
            className="custom-select"
           
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </CustomSelect>
          {stepTwo?.errors?.CompositionEvent && (
            <p
              className="validation-error"
            >
              {stepTwo?.errors?.CompositionEvent}
            </p>
          )}
          <Text
            className="text-box"
          >
            <span>
              Vision: Coverage for glasses and exams
              <span className="color-red">*</span>
            </span>
          </Text>
          <CustomSelect
            name="Vision"
            placeholder="Please select a job"
            validate={validate} 
            className="custom-select"
            onClick={(v) => {
              console.log(v.target.value);
              dispatch(setStepTwoState({ Vision: v.target.value }));
            }}
            defaultValue={stepTwo.Vision}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </CustomSelect>
          {stepTwo?.errors?.Vision && (
            <p
              className="validation-error"
            >
              {stepTwo?.errors?.Vision}
            </p>
          )}
          <Text
            className="text-box"
          >
            <span>
              Hearing: Coverage for hearing aids and exams
              <span className="color-red">*</span>
            </span>
          </Text>
          <CustomSelect
            name="Hearing"
            placeholder="Please select a job"
            validate={validate}
            className="custom-select"
            onClick={(v) => {
              dispatch(setStepTwoState({ Hearing: v.target.value }));
            }}
            defaultValue={stepTwo.Hearing}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </CustomSelect>
          {stepTwo?.errors?.Hearing && (
            <p
              className="validation-error"
            >
              {stepTwo?.errors?.Hearing}
            </p>
          )}
          <Text
            className="text-box"
          >
            <span>
              Part B Giveback: Up to $170 monthly rebate on your part b premiums
              <span className="color-red">*</span>
            </span>
          </Text>
          <CustomSelect
            name="PartB"
            placeholder="Please select a job"
            validate={validate}
            className="custom-select"
            onClick={(v) => {
              dispatch(setStepTwoState({ PartB: v.target.value }));
            }}
            defaultValue={stepTwo.PartB}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </CustomSelect>
          {stepTwo?.errors?.PartB && (
            <p
              className="validation-error"
            >
              {stepTwo?.errors?.PartB}
            </p>
          )}
          <Text
            className="text-box"
          >
            <span>
              Grocery Card: Spending allowances for healthy foods
              <span className="color-red">*</span>
            </span>
          </Text>
          <CustomSelect
            name="GroceryCard"
            placeholder="Please select a job"
            validate={validate}
            className="custom-select"
            onClick={(v) => {
              dispatch(setStepTwoState({ GroceryCard: v.target.value }));
            }}
            defaultValue={stepTwo.GroceryCard}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </CustomSelect>
          {stepTwo?.errors?.GroceryCard && (
            <p
              className="validation-error"
            >
              {stepTwo?.errors?.GroceryCard}
            </p>
          )}
        </>
      );
  };

  export default StepTwo;
  