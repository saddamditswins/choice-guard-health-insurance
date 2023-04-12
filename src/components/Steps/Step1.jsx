import React from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import { setStepOneState } from "../../Redux/itemsSlice";
import CustomInput from "../../features/custom-input/CustomInput";
import { Text } from "@mantine/core";
import "../../../src/assets/scss/common.scss";

const StepOne = ({ validate }) => {
    const { stepOne } = useAppSelector((state) => state.item);
    const dispatch = useAppDispatch();
    return (
      <>
        <Text className="textBox">
          <span>
            Zip Code <span className="color-red">*</span>
          </span>
        </Text>
        <CustomInput
          className="input-height"
          name="Zipcode"
          type="number"
          placeholder="Enter your Zipcode"
          validate={validate}
          defaultValue={stepOne.Zipcode}
          onClick={(e) => {
            dispatch(setStepOneState({ Zipcode: e.target.value }));
          }}
        />
        {stepOne?.errors?.Zipcode && (
          <p className="error-validation">
            {stepOne?.errors?.Zipcode}
          </p>
        )}
      </>
    );
  };

  export default StepOne;