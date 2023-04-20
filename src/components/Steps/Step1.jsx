import React from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import { setFieldsValues } from "../../Redux/itemsSlice";
import CustomInput from "../../features/custom-input/CustomInput";
import { Select, Text } from "@mantine/core";

const StepOne = ({ validate }) => {
  const { fieldValues } = useAppSelector((state) => state.item);
  const dispatch = useAppDispatch();
  return (
    <>
      <Text className="text-box">
        <span>
          Zip Code <span className="color-red">*</span>
        </span>
      </Text>
      <CustomInput
        name="Zipcode"
        type="number"
        placeholder="Enter your Zipcode"
        validate={validate}
        defaultValue={fieldValues.Zipcode}
        onBlur={(e) => {
          dispatch(setFieldsValues({ Zipcode: e.target.value }));
        }}
      />
      {/* {setFieldsValues?.errors?.Zipcode && (
          <p className="error-validation">
            {setFieldsValues?.errors?.Zipcode}
          </p>
        )} */}
      <Select
        mt="md"
        withinPortal
        data={["React", "Angular", "Svelte", "Vue"]}
        placeholder="Pick one"
        label="Your favorite library/framework"
        required
      />
    </>
  );
};

export default StepOne;
