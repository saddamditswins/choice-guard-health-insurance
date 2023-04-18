import React from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import { setFieldsValues } from "../../Redux/itemsSlice";
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
      const { fieldValues } = useAppSelector((state) => state.item);
      const dispatch = useAppDispatch();
      // console.log(setFieldsValues);
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
            // onChange={(v) => {
            //   console.log(v.target.value);
            //   dispatch(setStepTwoState({ ...stepTwo,CompositionEvent: v.target.value }));
            // }}
            onClick={(e) => {
              dispatch(setFieldsValues({ CompositionEvent: e.target.value }));
              console.log(e.target.value);
            }}
            defaultValue={fieldValues.CompositionEvent}
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
          {/* {setFieldsValues?.errors?.CompositionEvent && (
            <p className="validation-error">
              {setFieldsValues?.errors?.CompositionEvent}
            </p>
          )} */}
          <Text className="text-box">
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
            // onChange={(v) => {
            //   console.log(v.target.value);
            //   dispatch(setStepTwoState({ ...stepTwo,Vision: v.target.value }));
            // }}
            onClick={(e) => {
              dispatch(setFieldsValues({ Vision: e.target.value }));
              console.log(e.target.value);
            }}
            defaultValue={fieldValues.Vision}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </CustomSelect>
          {/* {setFieldsValues?.errors?.Vision && (
            <p className="validation-error">
              {setFieldsValues?.errors?.Vision}
            </p>
          )} */}
          <Text className="text-box">
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
            // onChange={(v) => {
            //   dispatch(setStepTwoState({ ...stepTwo,Hearing: v.target.value }));
            // }}
            onClick={(e) => {
              dispatch(setFieldsValues({  Hearing: e.target.value }));
              console.log(e.target.value);
            }}
            defaultValue={fieldValues.Hearing}
            >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </CustomSelect>
          {/* {setFieldsValues?.errors?.Hearing && (
            <p className="validation-error">
              {setFieldsValues?.errors?.Hearing}
            </p>
          )} */}
          <Text className="text-box">
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
            // onChange={(v) => {
            //   dispatch(setStepTwoState({ ...stepTwo,PartB: v.target.value }));
            // }}
            onClick={(e) => {
              dispatch(setFieldsValues({ PartB: e.target.value }));
              console.log(e.target.value);
            }}
            defaultValue={fieldValues.PartB}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </CustomSelect>
          {/* {setFieldsValues?.errors?.PartB && (
            <p className="validation-error">
              {setFieldsValues?.errors?.PartB}
            </p>
          )} */}
          <Text className="text-box">
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
            // onChange={(v) => {
            //   dispatch(setStepTwoState({ ...stepTwo,GroceryCard: v.target.value }));
            // }}
            onClick={(e) => {
              dispatch(setFieldsValues({ GroceryCard: e.target.value }));
              console.log(e.target.value);
            }}
            defaultValue={fieldValues.GroceryCard}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </CustomSelect>
          {/* {setFieldsValues?.errors?.GroceryCard && (
            <p className="validation-error">
              {setFieldsValues?.errors?.GroceryCard}
            </p>
          )} */}
        </>
      );
  };

  export default StepTwo;
  