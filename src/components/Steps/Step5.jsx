import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import { MultiSelect, Text, TextInput } from "@mantine/core";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import CustomInput from "../../features/custom-input/CustomInput";
import CustomRadio from "../../features/custom-radio/CustomRadio";
import CustomSelect from "../../features/custom-select/CustomSelect";
import { Form, Input, Select, Typography } from 'antd';

const StepFive = ({ validate, chronic, planType, setPlanType }) => {
    const { stepFive, field } = useAppSelector((state) => state.item);

    const { Option } = Select;
    const options = [
        { value: "medicare", label: "Medicare" },
        { value: "supplement", label: "Supplement" },
        { value: "employer", label: "Employer" },
        { value: "prescription", label: "Prescription" },
        { value: "other", label: "Other" },
        { value: "newField", label: "NewField" },
        { value: "none", label: "None" },
        { value: "doctor", label: "Doctor" },
  ];
    
    const [ medicare, setMedicare ] = useState(false);
    const [ supplement, setSupplement ] = useState(false);
    const [ employer, setEmployer ] = useState(false);
    const [ prescription, setPrescription ] = useState(false);
    const [ other, setOther ] = useState(false);
    const [ newField, setNewField ] = useState(false);
    const [ none, setNone ] = useState(false);
    const [ doctor, setDoctor ] = useState(false);
    
    const onChangePlanType = (e) => {
        if(e.includes("None")){
            setPlanType([]);
        } else {
            const newSelection = e.filter(
                (item) => !planType.includes(item)
            )
            const removedItems = planType.filter(
                (item) => !e.includes(item)
            )
            setPlanType([...planType , ...newSelection]);
            removedItems.forEach((item) => 
                setPlanType((prevState) => 
                  prevState.filter((prevItem) => prevItem !== item)
              )
            );
        }
        
    }
  

    return (
      <>
        <Text
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "600",
            background: "transparent",
            fontSize: "16px",
          }}
        >
          <span>
            Please type the name of your plan(s):{" "}
            <span style={{ color: "red" }}>*</span>{" "}
          </span>
        </Text>
        <Form.Item name="planType"
          rules={[{ required: true, message: 'Please select Atleast One Value' }]}>
         <MultiSelect
              name="planType"
              style={{ marginBottom: "20px" }}
              data={[
                {
                  value: "Diabities",
                  label: "Diabities",
                },
                { 
                  value: "Cardiovascular Disease", 
                  label: "Cardiovascular Disease"
                },
                {
                  value: "Congestive Heart Failure",
                  label: "Congestive Heart Failure",
                },
                {
                  value: "Cancer",
                  label: "Cancer",
                },
                { 
                  value: "Autoimmune disorder",
                 label: "Autoimmune disorder" 
                },
                { 
                  value: "ESRD",
                  label: "ESRD" 
                },
                { 
                  value: "Dementia",
                 label: "Dementia" 
                },
                { 
                  value: "Other",
                 label: "Other" 
                },
                { 
                  value: "Cardiovascular Disease",
                 label: "Cardiovascular Disease" 
                },
              ]}
              placeholder="Select from the following list"
              onChange={(e) => onChangePlanType(e)}
            />
          {planType.map((item) => {
              if(item === "None"){
                  return null;
              }
              return (
                  <div key={item} className="mb-1">
                      <Text className="text-box">
                          <span>Please select an option for {item}:</span>
                      </Text>
                      <TextInput
                      name={`Option for ${item}`}
                      type="text"
                      validate={validate}
                      placeholder={`Enter option for ${item}`}
                      // onBlur={(v) => {
                      //   dispatch(handleSubmitNext({ Zipcode: v.target.value }));
                      // }}
                      />
                  </div>
              )
          })
          }
      </Form.Item>
      </>
    );  
  };

  export default StepFive;
  