import React, { useState, useEffect } from "react";
import CustomSelect from "../../features/custom-select/CustomSelect";
import { Text, Divider } from "@mantine/core";
import { Row, Form, Input, Checkbox, Select, Radio } from 'antd';
import "../../../src/assets/scss/common.scss";

const StepThree = ({ validate, errors }) => {
    const { Option } = Select;
      const options = [
            { value: "select", label: "Select on a scale of 1-5 ▼" },
            { value: "option1", label: "1 - Not Needed" },
            { value: "option2", label: "2 - Useful But Not Needed" },
            { value: "option3", label: "3 - Less Important" },
            { value: "option4", label: "4 - Important" },
            { value: "option5", label: "5 - Very Important" },
      ];

      const [ overCounter, setOverCounter ] = useState(options[0]?.value);
      const [ visible, setVisible ] = useState(false);

      const onChangeCounter = (e) => {
        setOverCounter(e.target.value);
      }

      const [ utilities, setUtilities ] = useState(options[0]?.value);
      const [ utilityVisible, setUtilityVisible ] = useState(false);

      const onChangeUtilities = (e) => {
        setUtilities(e.target.value);
      }

      const [ transport, setTransport ] = useState(options[0]?.value);
      const [ transportVisible, setTransportVisible ] = useState(false);

      const onChangeTransport = (e) => {
        setTransport(e.target.value);
      }
      const [ roundTrip, setRoundTrip ] = useState('');

      const onChangeRoundTrip = (e) => {
        setRoundTrip(e.target.value);
      }

      const [ emergencyResponse, setEmergencyResponse ] = useState(options[0]?.value);
      const [ emergencyVisible, setemErgencyVisible ] = useState(false);

      const onChangeEmergencyResponse = (e) => {
        setEmergencyResponse(e.target.value);
      }

      const [ travelOutside, setTravelOutside ] = useState(false);

      const [ outsideUSA, setOutsideUSA ] = useState(options[0]?.value);
      const [ outsideVisible, setOutsideVisible ] = useState(false);

      const onChangeoutsideUSA = (e) => {
        setOutsideUSA(e.target.value);
      }

      const onChangeRadioTravel = (e) => {
        setTravelOutside(e.target.value);
      }
 
      return (
        <>
        {/* Ist Dropdown*/}
          <Text className="text-box">
            <span>
              Over-the-Counter: Allowance for things like aspirins, Tylenols, 
              and even toothpaste! <span className="color-red">*</span>
            </span>
          </Text>
        <Form.Item name="Over"
          rules={[{ required: true, message: 'Please select One Value' }]}>
          <CustomSelect
            name="Over"
            className="custom-select"
            onChange={(e)=>{onChangeCounter(e)}}
            style={{ marginLeft: "30px", width: "135%"}}>
            {options.map((option) => (
               <option key={option.value} value={option.value}>
               {option.label}
            </option>
            ))}
          </CustomSelect>
        </Form.Item>

        {/* 2nd Dropdown */}
        <Text className="text-box">
            <span> Utilities Flex Card: Allowance for utility bills 
            <span className="color-red">*</span>
            </span>
        </Text>
        <Form.Item name="Utilities"
          rules={[{ required: true, message: 'Please select One Value' }]}>
          <CustomSelect
            name="Utilities"
            className="custom-select"
            onChange={(e)=>{onChangeUtilities(e)}}
            style={{ marginLeft: "30px", width: "135%"}}>
            {options.map((option) => (
               <option key={option.value} value={option.value}>
               {option.label}
            </option>
            ))}
          </CustomSelect>
        </Form.Item>
        
        {/* 3rd Dropdown */}
        <Text className="text-box">
            <span> Transportation: Coverage for rides to and from plan-approved location
            <span className="color-red">*</span>
            </span>
        </Text>
        <Form.Item name="Transportation"
          rules={[{ required: true, message: 'Please select One Value' }]}>
          <CustomSelect
            name="Transportation"
            className="custom-select"
            onChange={(e)=>{onChangeTransport(e)}}
            style={{ marginLeft: "30px", width: "135%"}}>
            {options.map((option) => (
               <option key={option.value} value={option.value}>
               {option.label}
            </option>
            ))}
          </CustomSelect>
        </Form.Item>

        {/* Radio button List */}
        <Text className="text-box">
            <span>How many round-trip transportation services do you expect to use per year?
            <span className="color-red">*</span>{" "}
            </span>
        </Text>
        <Form.Item label="" name="RoundTripTransportation"
         rules={[{ required: true, message: "Please select an option!" }]}>
         <Radio.Group value={roundTrip} name="RoundTripTransportation" onChange={onChangeRoundTrip}>
            <Radio value="1-6"> 1-6 </Radio>
            <Radio value="7-12"> 7-12 </Radio>
            <Radio value="12+"> 12+ </Radio>
         </Radio.Group>
        </Form.Item>

        {/* 4th Dropdown */}
        <Text className="text-box">
          <span>  Emergency Response System: Devise that may detect falls and call for help
          <span className="color-red">*</span></span>
        </Text>
        <Form.Item name="Emergency"
          rules={[{ required: true, message: 'Please select One Value' }]}>
          <CustomSelect
            name="Emergency"
            className="custom-select"
            onChange={(e)=>{onChangeEmergencyResponse(e)}}
            style={{ marginLeft: "30px", width: "135%"}}>
            {options.map((option) => (
               <option key={option.value} value={option.value}>
               {option.label}
            </option>
            ))}
          </CustomSelect>
        </Form.Item>

        {/* 5th Radio */}
        <Text className="text-box">
            Do you travel outside the USA?
        </Text>
        <Form.Item label="" name="USA"
         rules={[{ required: true, message: "Please select an option!" }]}>

         <Radio.Group name="USA" onChange={onChangeRadioTravel} value={travelOutside}>
            <Radio value="Yes"> Yes </Radio>
            <Radio value="No"> No </Radio>
         </Radio.Group>
        </Form.Item>

        {travelOutside === "Yes" && <Form.Item label="" name="travelOutSideUSA"
         rules={[{ required: true, message: "Please select an option!" }]}>
            <CustomSelect
                name="travelOutSideUSA"
                className="custom-select"
                onChange={(e)=>{onChangeoutsideUSA(e)}}
                style={{ marginLeft: "30px", width: "135%"}}>
                {options.map((option) => (
                <option key={option.value} value={option.value}>
                {option.label}
                </option>
                ))}
          </CustomSelect>
         </Form.Item>}
        </>
      )
}
export default StepThree;