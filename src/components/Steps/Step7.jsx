import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import { setFieldsValues } from "../../Redux/itemsSlice";
import {
  MultiSelect,
  Text,
  Divider,
  Radio,
  Popover,
  Button,
} from "@mantine/core";
import { Field } from "formik";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import CustomRadio from "../../features/custom-radio/CustomRadio";

const StepSeven = ({ validate }) => {
  const [showTravelOptions, setShowTravelOptions] = useState(false);
  const [showTravelOptions1, setShowTravelOptions1] = useState(false);
  const { stepSeven, field2, field3 } = useAppSelector((state) => state.item);
  const dispatch = useAppDispatch();
  const data = [
    { value: "react", label: "ExampleDoctor1" },
    { value: "ng", label: "ExampleDoctor2" },
    { value: "svelte", label: "ExampleDoctor2" },
    { value: "vue", label: "ExampleDoctor3" },
    { value: "riot", label: "ExampleDoctor4" },
    { value: "next", label: "ExampleDoctor5" },
    { value: "blitz", label: "ExampleDoctor6" },
  ];

  return (
    <div>
      <div>
        <h1 className="quatilty-benefits"> Your Preferences Matter</h1>
        <p className="each-benefits">
          Let’s fine-tune your plan recommendation!
        </p>

        <Divider my="sm" />
        <Field validate={validate}>
          {({ field }) => (
            <>
              <div className="mb-1">
                <Text className="text-box">
                  Which plan type is more preferable to you?
                </Text>
                <div className="d-flex">
                  <CustomRadio
                    {...field}
                    id="travel1"
                    name="Plan1"
                    value="yes"
                    required
                    // defaultValue={stepSeven.preferable}
                    onClick={(v) => {
                      dispatch(setFieldsValues({ preferable: v.target.value }));
                    }}
                    label="  Medicare Advantage: Lower monthly premiums with extra
                    benefits (allowances, Dental, Vision, Hearing, etc)"
                  />
                </div>
                <div className="d-flex">
                  <CustomRadio
                    {...field}
                    id="travel2"
                    name="Plan1"
                    value="no"
                    // defaultValue={stepSeven.preferable}
                    onClick={(v) => {
                      dispatch(setFieldsValues({ preferable: v.target.value }));
                    }}
                    required
                    label="  Medicare Supplement: Higher monthly premiums with large
                    doctor flexibility and a predictable medical budget,but no
                    extra benefits"
                  />
                </div>

                <div className="d-flex">
                  <CustomRadio
                    {...field}
                    id="travel3"
                    name="Plan1"
                    value="notsure"
                    // defaultValue={stepSeven.preferable}
                    onClick={(v) => {
                      dispatch(setFieldsValues({ preferable: v.target.value }));
                    }}
                    required
                    label="Im not sure "
                  />
                </div>
              </div>
            </>
          )}
        </Field>
        <Field validate={validate}>
          {({ field }) => (
            <>
              <div className="mb-1">
                <Text className="text-box">
                  Which network type would you prefer?
                </Text>
                <div>
                  <CustomRadio
                    {...field}
                    id="travel1"
                    name="Plan2"
                    // defaultValue={stepSeven.network}
                    onClick={(v) => {
                      dispatch(setFieldsValues({ network: v.target.value }));
                    }}
                    value="yes"
                    required
                    label="HMO: Often has extra benefits and lower costs, but requires
                    you to stay the in-network of doctors."
                  />
                </div>

                <div>
                  <CustomRadio
                    {...field}
                    id="travel2"
                    name="Plan2"
                    value="no"
                    // defaultValue={stepSeven.important}
                    onClick={(v) => {
                      dispatch(setFieldsValues({ important: v.target.value }));
                    }}
                    required
                    label="PPO: May have less benefits and higher costs, but partially
                    covers out-of-network doctors and does not require a
                    referral to see specialists."
                  />
                </div>

                <CustomRadio
                  {...field}
                  id="travel3"
                  name="Plan2"
                  label="No preference "
                  // defaultValue={stepSeven.network}
                  onClick={(v) => {
                    dispatch(setFieldsValues({ network: v.target.value }));
                  }}
                  value="notsure"
                  required
                />
              </div>
            </>
          )}
        </Field>
        {!field3 && (
          <>
            <Field validate={validate}>
              {({ field }) => (
                <>
                  <div>
                    <Text className="text-box">
                      <span>
                        For some, extra benefits and savings can be more
                        important than keeping certain doctors. For others, they
                        have a doctor or two that is more important than any
                        increase in benefits. <span className="red">*</span>
                      </span>
                    </Text>

                    <Field validate={validate}>
                      {({ field, form }) => (
                        <>
                          <div className="mb-1">
                            <div>
                              <CustomRadio
                                {...field}
                                className="radio-button"
                                value="yes"
                                onChange={() => {
                                  form.setFieldValue("travel", "yes");
                                  setShowTravelOptions1(false);
                                }}
                                // defaultValue={stepSeven.network}
                                onClick={(v) => {
                                  dispatch(
                                    setFieldsValues({
                                      network: v.target.value,
                                    })
                                  );
                                }}
                                name="travel"
                                label="I am flexible on all of my doctors"
                              />
                            </div>

                            <div>
                              <CustomRadio
                                {...field}
                                className="radio-button"
                                value="no"
                                onChange={() => {
                                  form.setFieldValue("travel", "no");
                                  setShowTravelOptions1(true);
                                }}
                                // defaultValue={stepSeven.network}
                                onClick={(v) => {
                                  dispatch(
                                    setFieldsValues({
                                      network: v.target.value,
                                    })
                                  );
                                }}
                                name="travel"
                                label="I have at least one doctor I must keep"
                              />
                            </div>
                          </div>
                          <TransitionGroup>
                            {showTravelOptions1 && (
                              <CSSTransition classNames="popover" timeout={300}>
                                <Popover
                                  position="top"
                                  target={
                                    <Button variant="outline" color="gray">
                                      Select travel options
                                    </Button>
                                  }
                                >
                                  <div className="mb-1">
                                    <Text className="text-box">
                                      Please select which doctors/providers you
                                      must keep:
                                      <span className="color-red">*</span>
                                    </Text>

                                    <MultiSelect data={data} />
                                  </div>
                                </Popover>
                              </CSSTransition>
                            )}
                          </TransitionGroup>
                        </>
                      )}
                    </Field>
                  </div>
                </>
              )}
            </Field>
          </>
        )}
        {!field2 && (
          <>
            <Field validate={validate}>
              {({ field }) => (
                <>
                  <div>
                    <Text className="text-box">
                      <span>
                        For some, extra benefits and savings can be more
                        important than keeping certain prescription. Often
                        times, prescription can be subsitituted for other brands
                        or drugs that treat the same condition
                        <span className="red">*</span>
                      </span>
                    </Text>

                    <Field validate={validate}>
                      {({ field, form }) => (
                        <>
                          <div className="mb-1">
                            <div>
                              <CustomRadio
                                {...field}
                                className="radio-button"
                                value="yes"
                                onChange={() => {
                                  form.setFieldValue("travel", "yes");
                                  setShowTravelOptions(false);
                                }}
                                // defaultValue={stepSeven.network}
                                onClick={(v) => {
                                  dispatch(
                                    setFieldsValues({
                                      network: v.target.value,
                                    })
                                  );
                                }}
                                name="travel"
                                label=" I am ok substituting any drug my doctor
                                authorizes"
                              />
                            </div>

                            <div>
                              <CustomRadio
                                {...field}
                                className="radio-button"
                                value="no"
                                onChange={() => {
                                  form.setFieldValue("travel", "no");
                                  setShowTravelOptions(true);
                                }}
                                // defaultValue={stepSeven.network}
                                onClick={(v) => {
                                  dispatch(
                                    setFieldsValues({
                                      network: v.target.value,
                                    })
                                  );
                                }}
                                name="travel"
                                label="  I have at least one prescription that can't be
                                substituted"
                              />
                            </div>
                          </div>
                          <TransitionGroup>
                            {showTravelOptions && (
                              <CSSTransition classNames="popover" timeout={300}>
                                <Popover
                                  position="top"
                                  target={
                                    <Button variant="outline" color="gray">
                                      Select travel options
                                    </Button>
                                  }
                                >
                                  <div>
                                    <Text className="text-box">
                                      Please select which prescriptions you must
                                      keep:
                                      <span className="red">*</span>
                                    </Text>

                                    <MultiSelect data={data} />
                                  </div>
                                </Popover>
                              </CSSTransition>
                            )}
                          </TransitionGroup>
                        </>
                      )}
                    </Field>
                  </div>
                </>
              )}
            </Field>
          </>
        )}
      </div>
    </div>
  );
};

export default StepSeven;
