import React, { useEffect,useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import CustomInput from "../../features/custom-input/CustomInput";
import { Button, Text } from "@mantine/core";
import "../../../src/assets/scss/common.scss";
import {  message, Steps, Layout, Form, Row } from 'antd';


const StepOne = ({ validate, values, errors }) => {
  
    return (
      <>
       <div style={{alignItems:"center", padding:"20px" }}>
          <Row>
          <Form.Item label="Zip Code" name="zipcode"
            rules = {[{ required: true, message: 'Please enter Zipcode!' },
                    { min: 5, message: 'Enter a valid zipcode.' }]}>
            <CustomInput
              className="input-border"
              name="zipcode"
              type="number"
              placeholder="Enter your Zipcode" />
          </Form.Item>
          </Row>
        </div>    
      </>
    );
  };

  export default StepOne;

