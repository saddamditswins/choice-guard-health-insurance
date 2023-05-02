import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import CustomInput from "../../features/custom-input/CustomInput";
import CustomSelect from "../../features/custom-select/CustomSelect";
import { Text, Divider } from "@mantine/core";
import { Select, Form, Checkbox } from "antd";
import "../../../src/assets/scss/common.scss";

const StepTwo = ({ validate, errors }) => {
      const options = [
            { value: "select", label: "Select on a scale of 1-5 ▼" },
            { value: "option1", label: "1 - Not Needed" },
            { value: "option2", label: "2 - Useful But Not Needed" },
            { value: "option3", label: "3 - Less Important" },
            { value: "option4", label: "4 - Important" },
            { value: "option5", label: "5 - Very Important" },
      ];
      const checkBoxValue = [
        {value: "option1", label:"Preventative Dental, such as cleanings and exams"},
        {value: "option2", label:"Diagnostic Services: used to diagnose dental diseases"},
        {value: "option3", label:"Restorative Services: such as cavity fillings"},
        {value: "option4", label:"Endodontics: such as root canals"},
        {value: "option5", label:"Periodontics: such as deep cleanings (scaling and root planning)"},
        {value: "option6", label:"Extractions: for teeth removal"},
        {value: "option7", label:"Complete Dentures"},
        {value: "option8", label:"Partial Dentures or Bridges"},
        {value: "option9", label:"Crowns and/or Oral Surgeries"},
        {value: "option10", label:"Other Comprehensive Services"},
      ];
      const checkBoxVision = [
        {value: "option1", label:"Routine Eye Exams"},
        {value: "option2", label:"Glasses"},
        {value: "option3", label:"Contacts"},
      ];
      const checkBoxHearing = [
        {value: "option1", label:"Routine Hearing Exam"},
        {value: "option2", label:"New Hearing Aid(s)"},
        {value: "option3", label:"Hearing Aid Fitting or Evaluation"},
      ];
      const { fieldValues } = useAppSelector((state) => state.item);
      const [val, setVal] = useState(options[0]?.value);
      const [visible, setVisible] = useState(false);

      const [visionVal, setVisionVal] = useState(options[0]?.value);
      const [visionVisible,setVisionVisible] = useState(false);
      
      const [hearingVal, setHearingVal] = useState(options[0]?.value);
      const [hearing, setHearing] = useState(false);

      const [ partB,setPartB ] = useState("");
      const [ grocery,setGrocery ] = useState("");
      const [dentalCoverage, setDentalCoverage] = useState(false);
      const dispatch = useAppDispatch();

      const onChangeCompositionEvent = (e) => {
        debugger
        setVal(e.target.value);
      }

      useEffect(()=> {
        if(val === "select" || val  === "option1") {
          setVisible(false);
        } else {
          setVisible(true);
        }
      },[val]);

      const onChangeVision = (e) => {
        setVisionVal(e.target.value);
      }

      useEffect(()=> {
        if(visionVal === "select" || visionVal  === "option1") {
          setVisionVisible(false);
        } else {
          setVisionVisible(true);
        }
      },[visionVal]);

      const onChangeHearing = (e) => {
        setHearingVal(e.target.value);
      }

      useEffect(()=> {
        if(hearingVal === "select" || hearingVal  === "option1") {
          setHearing(false);
        } else {
          setHearing(true);
        }
      },[hearingVal]);

      const onChangePartB = (e) => {
        setPartB(e.target.value);
      }

      const onChangeGroceryCard = (e) => {
        setGrocery(e.target.vallue);
      }

      return (
        <>
        {/* First Dropdown Composition Event */}
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
          <Form.Item name="CompositionEvent"
            rules={[{ required: true, message: 'Please select Composition Event' }]}>
          <CustomSelect
            name="CompositionEvent"
            className="custom-select"
            onChange={(e)=>{onChangeCompositionEvent(e)}}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </CustomSelect>
          </Form.Item>
         
          {visible && 
            <>
            <Text className="text-box mb-1">
                Which dental services do you expect to receive? (Select all that apply)<span className="color-red">*</span>
            </Text>
            {checkBoxValue.map((option) => {
              return (
                <div>
                <Checkbox
                size="sm"
                className="mb-1"
                label={option.label}>
                  {option.label}
                </Checkbox>
              </div>
              )
            })}
            </>
            }

          {/* Second Dropdown Vision */}
          <Text className="text-box">
            <span>
              Vision: Coverage for glasses and exams
              <span className="color-red">*</span>
            </span>
          </Text>
          <Form.Item name="Vision"
          rules={[{ required: true, message: 'Please select vision' }]}>
          <CustomSelect
            name="Vision"
            onChange={(e)=>{onChangeVision(e)}}
            className="custom-select"
            style={{ marginLeft: "30px", width: "135%"}}
          >
            {options.map((option) => (
              <option key={option.value}  value={option.value}>
                {option.label}
              </option>
            ))}
          </CustomSelect>
          </Form.Item>
          {visionVisible && 
            <>
            <Text className="text-box">
              <span>
                Which vision services do you expect to receive? (Select all that apply)<span className="color-red">*</span>
              </span>
            </Text>
            
            {checkBoxVision.map((option) => {
              return (
                <div>
                <Checkbox
                size="sm"
                className="mb-1"
                label={option.label}>
                  {option.label}
                </Checkbox>
              </div>
              )
            })}           
            </>
          }

          <Text className="text-box">
            <span>
              Hearing: Coverage for hearing aids and exams
              <span className="color-red">*</span>
            </span>
          </Text>
          <Form.Item name="Hearing"
          rules={[{ required: true, message: 'Please select Hearing' }]}>
            <CustomSelect
            name="Hearing"
            className="custom-select"
            onChange={(e) => onChangeHearing(e)}
            style={{ marginLeft: "30px", width: "135%"}}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </CustomSelect>
          </Form.Item>

          {hearing && 
            <>
            <Text className="text-box">
              <span>
              Which hearing services do you expect to receive? (Select all that apply)<span className="color-red">*</span>
              </span>
            </Text>
          {checkBoxHearing.map((option) => {
              return (
                <div>
                <Checkbox
                size="sm"
                className="mb-1"
                label={option.label}>
                  {option.label}
                </Checkbox>
              </div>
              )
            })}
            </>}

          <Text className="text-box">
            <span>
              Part B Giveback: Up to $170 monthly rebate on your part b premiums
              <span className="color-red">*</span>
            </span>
          </Text>
          <Form.Item name="PartB"
          rules={[{ required: true, message: 'Please select PartB' }]}>
          <CustomSelect
            name="PartB"
            className="custom-select"
            onChange={(e) => onChangePartB(e)}
            style={{ marginLeft: "30px", width: "135%"}}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </CustomSelect>
          </Form.Item>

          

          <Text className="text-box">
            <span>
              Grocery Card: Spending allowances for healthy foods
              <span className="color-red">*</span>
            </span>
          </Text>
          <Form.Item name="GroceryCard"
          rules={[{ required: true, message: 'Please select Grocery Card' }]}>
          <CustomSelect
            name="GroceryCard"
            className="custom-select"
            onChange={(e) => onChangeGroceryCard(e)}
            style={{ marginLeft: "30px", width: "135%"}}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </CustomSelect>
          </Form.Item>
        </>
      );
  };

  export default StepTwo;
  