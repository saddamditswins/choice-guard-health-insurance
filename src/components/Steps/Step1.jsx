import React from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import { setFieldsValues } from "../../Redux/itemsSlice";
import CustomInput from "../../features/custom-input/CustomInput";
import { Text } from "@mantine/core";
import "../../../src/assets/scss/common.scss";

const StepOne = ({ validate }) => {
    const { fieldValues } = useAppSelector((state) => state.item); 
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
          defaultValue={fieldValues.Zipcode}
          
          onBlur={(e) => {
            dispatch(setFieldsValues({Zipcode: e.target.value }))
          }}
        />
        {/* {setFieldsValues?.errors?.Zipcode && (
          <p className="error-validation">
            {setFieldsValues?.errors?.Zipcode}
          </p>
        )} */}
      </>
    );
  };

  export default StepOne;