import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import { MultiSelect, Text, Divider, Popover, Button } from "@mantine/core";
import { Field } from "formik";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import CustomRadio from "../../features/custom-radio/CustomRadio";
import { Form, Radio } from 'antd';

const StepSeven = ({ validate }) => {
    const [showTravelOptions, setShowTravelOptions] = useState(false);
    const [showTravelOptions1, setShowTravelOptions1] = useState(false);
    const [ visible1, setVisible1 ] = useState(false);
    const [ visible2, setVisible2 ] = useState(false);
    const [ visible3, setVisible3 ] = useState(false);
    const [ visible4, setVisible4 ] = useState(false);

    // new fields antdesign code
    const [network, setNetwork] = useState('');
    const [preferable, setPreferable] = useState('');

    const onChangeNetwork = (e) => {
      setNetwork(e.target.value);
    }

    const onChangePreferable = (e) => {
      setPreferable(e.target.value);
    }

    // end ant design code
    const data = [
      { value: "react", label: "ExampleDoctor1" },
      { value: "ng", label: "ExampleDoctor2" },
      { value: "svelte", label: "ExampleDoctor2" },
      { value: "vue", label: "ExampleDoctor3" },
      { value: "riot", label: "ExampleDoctor4" },
      { value: "next", label: "ExampleDoctor5" },
      { value: "blitz", label: "ExampleDoctor6" },
    ];

    const onChangeRadio1 = (v) => {
      setVisible1(true);
      dispatch(handleSubmitNext({ preferable: v.target.value }));
    }
    return (
      <div>
        <Text
            style={{
              color: "#333",
              fontWeight: 600,
              fontSize: "30px",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Your Preferences Matter
          </Text>
          <p>Let’s fine-tune your plan recommendation!</p>
          <Divider my="sm" />

          {/* First part Start */}
                  <>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                      }}
                    >
                      <Form.Item label="" name="preferable"
                          rules={[{ required: true, message: "Please select an option!" }]}>
                            <Radio.Group name="preferable" onChange={onChangePreferable}  value={preferable}>
                              <Radio value="option 1">  Medicare Advantage: Lower monthly premiums with extra
                                        benefits (allowances, Dental, Vision, Hearing, etc) </Radio>
                              <Radio value="option 2"> Medicare Supplement: Higher monthly premiums with large
                                        doctor flexibility and a predictable medical budget,but no
                                        extra benefits </Radio>
                              <Radio value="option 3"> Im not sure{" "} </Radio>
                            </Radio.Group>
                      </Form.Item>
                      
                    </div>
                  </>

          {/* 2nd part */}
              <Text className="text-box">
                  <span>
                    Which network type would you prefer? <span className="color-red">*</span>
                  </span>
              </Text>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <Form.Item label="" name="network"
                  rules={[{ required: true, message: "Please select an option!" }]}>
                    <Radio.Group name="network" onChange={onChangeNetwork} value={network}>
                      <Radio value="option 4"> 
                                HMO: Often has extra benefits and lower costs, but requires
                                you to stay the in-network of doctors. </Radio>
                      <Radio value="option 5">PPO: May have less benefits and higher costs, but partially
                                covers out-of-network doctors and does not require a
                                referral to see specialists. </Radio>
                      <Radio value="option 6"> No preference{" "} </Radio>
                    </Radio.Group>
              </Form.Item>
              </div>

          {visible1 === true &&(
            <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <Text
              style={{
                marginTop: "10px",
                fontWeight: 600,
                color: "#495057",
                fontFamily: "Montserrat, sans-serif",
                marginBottom: "8px",
                fontSize: "16px",
              }}
            > Which network type would you prefer? </Text>
            <div style={{ display: "flex", alignItems: "center" }}>
                        <CustomRadio
                          // {...field}
                          id="travel1"
                          name="step7.Plan1"
                          value="yes"
                          required
                          // defaultValue={stepSeven.preferable}
                          // onClick={(v) => {
                            // dispatch(
                            //   handleSubmitNext({ preferable: v.target.value })
                            // );
                          // }}
                        // onChange={(e) => onChangeVision(e)}
                          onChange={onChangeRadio1}
                        />
                        <Text
                          style={{
                            fontSize: "16px",
                            fontFamily: "Montserrat",
                            marginLeft: "5px",
                            flex: 1,
                          }}
                        >
                         HMO: Often has extra benefits and lower costs, but requires you to stay the in-network of doctors.
                        </Text>
                      </div>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <CustomRadio
                          // {...field}
                          id="travel2"
                          name="step7.Plan1"
                          label=""
                          value="no"
                          // defaultValue={stepSeven.preferable}
                          onClick={(v) => {
                            dispatch(
                              handleSubmitNext({ preferable: v.target.value })
                            );
                          }}
                          required
                        />
                        <Text
                          style={{
                            fontSize: "16px",
                            fontFamily: "Montserrat",
                            marginLeft: "5px",
                            flex: 1,
                          }}
                        >
                          PPO: May have less benefits and higher costs, but partially covers out-of-network doctors and does not require a referral to see specialists.
                        </Text>
                      </div>

                      <div style={{ display: "flex", alignItems: "center" }}>
                        <CustomRadio
                          // {...field}
                          id="travel2"
                          name="step7.Plan1"
                          label=""
                          value="no"
                          // defaultValue={stepSeven.preferable}
                          onClick={(v) => {
                            dispatch(
                              handleSubmitNext({ preferable: v.target.value })
                            );
                          }}
                          required
                        />
                        <Text
                          style={{
                            fontSize: "16px",
                            fontFamily: "Montserrat",
                            marginLeft: "5px",
                            flex: 1,
                          }}
                        >
                          No Preferences
                        </Text>
                      </div>
            </div>
          )}


          {visible2 &&(
            <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <Text
              style={{
                marginTop: "10px",
                fontWeight: 600,
                color: "#495057",
                fontFamily: "Montserrat, sans-serif",
                marginBottom: "8px",
                fontSize: "16px",
              }}
            > This plan type does not include extra benefits such as allowances, dental, vision, hearing. Are you sure this is the plan type you want? </Text>
            <div style={{ display: "flex", alignItems: "center" }}>
                        <CustomRadio
                          // {...field}
                          id="travel1"
                          name="step7.Plan1"
                          value="yes"
                          required
                          // defaultValue={stepSeven.preferable}
                          // onClick={(v) => {
                            // dispatch(
                            //   handleSubmitNext({ preferable: v.target.value })
                            // );
                          // }}
                        // onChange={(e) => onChangeVision(e)}
                          onClick={onChangeRadio1}
                        />
                        <Text
                          style={{
                            fontSize: "16px",
                            fontFamily: "Montserrat",
                            marginLeft: "5px",
                            flex: 1,
                          }}
                        >
                          Yes, I'm sure
                        </Text>
                      </div>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <CustomRadio
                          // {...field}
                          id="travel2"
                          name="step7.Plan1"
                          label=""
                          value="no"
                          // defaultValue={stepSeven.preferable}
                          onClick={(v) => {
                            dispatch(
                              handleSubmitNext({ preferable: v.target.value })
                            );
                          }}
                          required
                        />
                        <Text
                          style={{
                            fontSize: "16px",
                            fontFamily: "Montserrat",
                            marginLeft: "5px",
                            flex: 1,
                          }}
                        >
                          I'm open to seeing all options, including Medicare Advantage plans
                        </Text>
                      </div>
            </div>
          )}
      </div>
  );
};

export default StepSeven;
