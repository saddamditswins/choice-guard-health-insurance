import React from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import { setFieldsValues, setField } from "../../Redux/itemsSlice";
import { Text, Button, Divider } from "@mantine/core";
import { Field } from "formik";
import CustomRadio from "../../features/custom-radio/CustomRadio";
import "../../../src/assets/scss/common.scss";

const StepFour = ({ validate }) => {
        const dispatch = useAppDispatch();
        // const { stepFour } = useAppSelector((state) => state.item);
        return (
          <>
            <Field validate={validate}>
              {({ field }) => (
                <>
                  <Text className="grey-text">
                    Eligibility Check
                  </Text>
                  <p>
                    Some plans and benefits require certain qualifications. Let’s see
                    what you qualify for!
                  </p>
                  <Divider my="sm" />
      
                  <Text className="text-two">
                    <span>
                      {" "}
                      Do you have (or have you applied for) Medicare Parts A and B?
                      <span className="color-red">*</span>{" "}
                    </span>
                  </Text>
                  <div className="div-wrapper-two">
                    <CustomRadio
                      {...field}
                      id="travel1"
                      name="Medicare"
                      label="Yes"
                      value="yes"
                      required
                      // defaultValue={stepFour.Medicare}
                      onClick={(v) => {
                        dispatch(setFieldsValues({ Medicare: v.target.value }));
                        console.log(v.target.value);
                      }}
                    />
      
                    <CustomRadio
                      {...field}
                      id="travel2"
                      name="Medicare"
                      label="No"
                      value="no"
                      required
                      // defaultValue={stepFour.Medicare}
                      onClick={(v) => {
                        dispatch(setFieldsValues({ Medicare: v.target.value }));
                        console.log(v.target.value);
                      }}
                    />
                  </div>
                  {/* {stepFour.errors?.Medicare && (
                    <p className="error-validation">

                    
                      {stepFour.errors?.Medicare}
                    </p>
                  )} */}
                </>
              )}
            </Field>
      
            <Field validate={validate}>
              {({ field }) => (
                <>
                  <Text className="text-box">
                    {" "}
                    <span>
                      {" "}
                      Do you have Medicaid (aka Medi-Cal in CA)?
                      <span className="color-red">*</span>{" "}
                    </span>{" "}
                  </Text>
                  <div className="div-wrapper">
                    <CustomRadio
                      {...field}
                      id="travel1"
                      name="Medicaid"
                      label="Yes"
                      value="yes"
                      required
                      // defaultValue={stepFour.Medicaid}
                      onClick={(v) => {
                        dispatch(setFieldsValues({ Medicaid: v.target.value }));
                        console.log(v.target.value);
                      }}
                    />
                    <CustomRadio
                      {...field}
                      id="travel2"
                      name="Medicaid"
                      label="No"
                      value="no"
                      required
                      // defaultValue={stepFour.Medicaid}
                      // onClick={(v) => {
                      //   dispatch(setFieldsValues({ Medicaid: v.target.value }));
                      //   console.log(v.target.value);
                      // }}
                      onChange={(v) => {
                        dispatch(setFieldsValues({ Medicaid: v.target.value }));
                        // console.log(v.target.value);
                      }}
                    />
                  </div>
                  {/* {stepFour.errors?.Medicaid && (
                    <p className="error-validation">
                      {stepFour.errors?.Medicaid}
                    </p>
                  )} */}
                </>
              )}
            </Field>
      
            <Field validate={validate}>
              {({ field }) => (
                <>
                  <div className="div-wrapper">
                    {" "}
                    <Text className="text-two">
                      <span>
                        {" "}
                        Do you have VA or Tricare benefits?
                        <span className="color-red">*</span>{" "}
                      </span>
                    </Text>
                    <CustomRadio
                      {...field}
                      id="travel1"
                      name="Tricare"
                      label="None"
                      value="yes"
                      required
                      // defaultValue={stepFour.Tricare}
                      onClick={(v) => {
                        dispatch(setFieldsValues({ Tricare: v.target.value }));
                        console.log(v.target.value);
                      }}
                    />
                    <CustomRadio
                      {...field}
                      id="travel2"
                      name="Tricare"
                      label="VA"
                      value="no"
                      required
                      // defaultValue={stepFour.Tricare}
                      onClick={(v) => {
                        dispatch(setFieldsValues({ Tricare: v.target.value }));
                        console.log(v.target.value);
                      }}
                    />
                    <CustomRadio
                      {...field}
                      id="travel3"
                      name="Tricare"
                      label="Tricare"
                      value="Tricare"
                      required
                      // defaultValue={stepFour.Medicaid}
                      onClick={(v) => {
                        dispatch(setFieldsValues({ Medicaid: v.target.value }));
                        console.log(v.target.value);
                      }}
                    />
                  </div>
                  {/* {stepFour.errors?.Tricare && (
                    <p className="error-validation">
                      {stepFour.errors?.Tricare}
                    </p>
                  )} */}
                </>
              )}
            </Field>
            <Field validate={validate}>
              {({ field }) => (
                <>
                  <div className="div-wrapper">
                    <Text className="text-two">
                      Do you have any chronic health conditions?
                    </Text>
                    <CustomRadio
                      {...field}
                      id="travel1"
                      name="chronic"
                      label="Yes"
                      value="yes"
                      required
                      onClick={(v) => {
                      {
                        // dispatch(setField(true));
                        dispatch(setFieldsValues({ chronic: v.target.value }));
                        console.log("yes");
                      }
                      // dispatch(setFieldsValues({ Vision: e.target.value }));
                      }}
                      // defaultValue={stepFour.chronic}
                    />
      
                    <CustomRadio
                      {...field}
                      id="travel2"
                      name="chronic"
                      label="No"
                      value="no"
                      onClick={(v) => {
                        dispatch(setFieldsValues({ chronic: v.target.value }));
                        console.log(v.target.value);
                      }}
                      required
                    />
                    <CustomRadio
                      {...field}
                      id="travel3"
                      name="chronic"
                      label=" Prefer Not to Answer"
                      value=" Prefer Not to Answer"
                      required
                      onClick={(v) => {
                        dispatch(setFieldsValues({ chronic: v.target.value }));
                        // console.log(v.target.value);
                      }}
                    />
                  </div>
                </>
              )}
            </Field>
      
            <Text className="paragraph-align-two">
              Chronic Special Needs plans may offer additional benefits for those with
              chronic conditions. These plans require a chronic condition for <br />
              enrollment. This question is not required and is only used to determine
              eligibility in a Chronic Special Needs plan/benefits.
            </Text>
          </>
        );
      };

  export default StepFour;
  