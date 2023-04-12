import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import { setStepThreeState } from "../../Redux/itemsSlice";
import CustomInput from "../../features/custom-input/CustomInput";
import { Field, Formik, useFormikContext } from "formik";
import CustomSelect from "../../features/custom-select/CustomSelect";
import { Text, Radio, Popover, Button } from "@mantine/core";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../../../src/assets/scss/common.scss";

    const StepThree = ({ validate }) => {
        const options = [
          { value: "select", label: "Select on a scale of 1-5 ▼" },
          { value: "option1", label: "1 - Not Needed" },
          { value: "option2", label: "2 - Useful But Not Needed" },
          { value: "option3", label: "3 - Less Important" },
          { value: "option4", label: "4 - Important" },
          { value: "option5", label: "5 - Very Important" },
        ];
        const [showTravelOptions, setShowTravelOptions] = useState(false);
        const { stepThree } = useAppSelector((state) => state.item);
        const dispatch = useAppDispatch();
        return (
          <>
            <Text
              className="text-box"
            >
              <span>
                Over-the-Counter: Allowance for things like aspirins, Tylenols, and
                even toothpaste!
                <span className="color-red">*</span>{" "}
              </span>
            </Text>
            <CustomSelect
              name="Over"
              className="custom-select"
              placeholder="Please select a job"
              validate={validate}
              onClick={(v) => {
                dispatch(setStepThreeState({ Over: v.target.value }));
              }}
              defaultValue={stepThree.Over}
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}{" "}
            </CustomSelect>
            {stepThree.errors?.Over && (
              <p
                className="validation-error"
              >
                {stepThree.errors?.Over}
              </p>
            )}
            <Text
              className="text-box"
            >
              <span>
                {" "}
                Utilities Flex Card: Allowance for utility bills
                <span className="color-red">*</span>{" "}
              </span>
            </Text>
            <CustomSelect
              name="Utilities"
              placeholder="Please select a job"
              validate={validate}
              className="custom-select"
              onClick={(v) => {
                dispatch(setStepThreeState({ Utilities: v.target.value }));
              }}
              defaultValue={stepThree.Utilities}
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}{" "}
            </CustomSelect>
            {stepThree.errors?.Utilities && (
              <p
                className="validation-error"
              >
                {stepThree.errors?.Utilities}
              </p>
            )}
            <Text
              className="text-box"
            >
              <span>
                {" "}
                Transportation: Coverage for rides to and from plan-approved location
                <span className="color-red">*</span>{" "}
              </span>
            </Text>
            <CustomSelect
              className="custom-select"
              name="Transportation"
              placeholder="Please select a job"
              validate={validate}
              onClick={(v) => {
                dispatch(setStepThreeState({ Transportation: v.target.value }));
              }}
              defaultValue={stepThree.Transportation}
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}{" "}
            </CustomSelect>
            {stepThree.errors?.Transportation && (
              <p
                className="validation-error"
              >
                {stepThree.errors?.Transportation}
              </p>
            )}
            <Text
              className="text-box"
            >
              <span>
                {" "}
                Emergency Response System: Devise that may detect falls and call for
                help
                <span className="color-red">*</span>{" "}
              </span>
            </Text>
            <CustomSelect
              className="custom-select"
              name="Emergency"
              placeholder="Please select a job"
              validate={validate}
              onClick={(v) => {
                dispatch(setStepThreeState({ Emergency: v.target.value }));
              }}
              defaultValue={stepThree.Emergency}
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}{" "}
            </CustomSelect>
            {stepThree.errors?.Emergency && (
              <p
                className="validation-error"
              >
                {stepThree.errors?.Emergency}
              </p>
            )}
            <Text
              className="text-box"
            >
              Do you travel outside the USA?
            </Text>
            <Field validate={validate}>
              {({ field, form }) => (
                <>
                  <div
                    className="div-wrapper"
                  >
                      <div className="div-wrapper">
                      <div className="align-radio"> 
                        <Radio
                          style={{ borderColor: "1px soild black" }}
                          className="radio-button"
                          name="travel"
                          value="yes"
                          defaultValue={stepThree.USA}
                          onClick={(v) => {
                            form.setFieldValue("travel", "yes");
                            setShowTravelOptions(true);
                            console.log(v.target.value);
                            dispatch(setStepThreeState({ USA: v.target.value }));
                          }}
                        />
                        <Text
                          className="radio-text"
                        >
                          Yes
                        </Text>
                      </div>
      
                      <div className="align-radio"> 
                      
                        <Radio
                          className="radio-button"
                          name="travel"
                          value="no"
                          onChange={(v) => {
                            form.setFieldValue("travel", "no");
                            console.log(v.target.value);
                            dispatch(setStepThreeState({ USA: v.target.value }));
                            setShowTravelOptions(false);
                          }}
                        />
                        <Text className="radio-text">
                          No
                        </Text>
                      </div>
                    </div>
      
                  </div>
      
                  <TransitionGroup>
                    {showTravelOptions && (
                      <CSSTransition classNames="popover" timeout={300}>
                        <Popover
                          position="top"
                          target={
                            <Button
                              variant="outline"
                              color="gray"
                              className="btn-style"
                            >
                              Select travel options
                            </Button>
                          }
                        >
                          <div className="align-paragraph">
                            <Text
                              className="text-box"
                            >
                              World Wide Coverage: Coverage for health emergencies
                              around the world
                              <span className="color-red">*</span>{" "}
                            </Text>
                            <CustomSelect
                              className="custom-select"
                              name="worldwide"
                              placeholder="Please select a job"
                              validate={validate}
                              onClick={(v) => {
                                dispatch(
                                  setStepThreeState({ world: v.target.value })
                                );
                              }}
                              defaultValue={stepThree.world}
                            >
                              {options.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </CustomSelect>
                          </div>
                        </Popover>
                      </CSSTransition>
                    )}
                  </TransitionGroup>
                </>
              )}
            </Field>
          </>
        );
    };

    export default StepThree;
    