import React,{ useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import { Text, Button, Divider } from "@mantine/core";
import { Field } from "formik";
import CustomRadio from "../../features/custom-radio/CustomRadio";
import "../../../src/assets/scss/common.scss";
import { Row, Form, Input, Checkbox, Select, Radio } from 'antd';

const StepFour = ({ validate }) => {
        const [ medicare, setMedicare ] = useState(false);
        const [ medicaid, setMedicaid ] = useState(false);
        const [ tricare, setTricare ] = useState(false);
        const [ chronic, setChronic ] = useState(false);
    
        const onChangeMedicare = (e) => {
            setMedicare(e.target.value)
        }
    
        const onChangeMedicaid = (e) => {
            setMedicaid(e.target.value)
        }
    
        const onChangeTricare = (e) => {
            setTricare(e.target.value)
        }
    
        const onChangeChronic = (e) => {
            setChronic(e.target.value)
        }

        return (
          <>
              <Text className="grey-text">
                    Eligibility Check
                </Text>
                <p>
                  Some plans and benefits require certain qualifications. Let’s see
                  what you qualify for!
                </p>
              <Divider my="sm" />
                    {/* Part-1 */}
              <Text className="text-two">
                  <span>{" "} Do you have (or have you applied for) Medicare Parts A and B?
                      <span className="color-red">*</span>{" "}
                  </span>
              </Text>
              <Form.Item label="" name="Medicare"
              rules={[{ required: true, message: "Please select an option!" }]}>
                <Radio.Group name="Medicare" onChange={(e) => onChangeMedicare(e)} value={medicare}>
                  <Radio value="Yes"> Yes </Radio>
                  <Radio value="No"> No </Radio>
                </Radio.Group>
              </Form.Item>

              {/* Part-2 */}
              <Text className="text-two">
                  <span>{" "} Do you have Medicaid (aka Medi-Cal in CA)?
                      <span className="color-red">*</span>{" "}
                  </span>
              </Text>
              <Form.Item label="" name="Medicaid"
              rules={[{ required: true, message: "Please select an option!" }]}>
                <Radio.Group name="Medicaid" onChange={(e) => onChangeMedicaid(e)} value={medicaid}>
                  <Radio value="Yes"> Yes </Radio>
                  <Radio value="No"> No </Radio>
                </Radio.Group>
              </Form.Item>

              {/* Part-3 */}
              <Text className="text-two">
                  <span>{" "} Do you have VA or Tricare benefits?
                      <span className="color-red">*</span>{" "}
                  </span>
              </Text>
              <Form.Item label="" name="Tricare"
              rules={[{ required: true, message: "Please select an option!" }]}>
                <Radio.Group name="Tricare" onChange={(e) => onChangeTricare(e)} value={tricare}>
                  <Radio value="None"> None </Radio>
                  <Radio value="VA"> VA </Radio>
                  <Radio value="Tricare"> Tricare </Radio>
                </Radio.Group>
              </Form.Item>

              {/* Part-4 */}
              <Text className="text-two">
                  <span>{" "} Do you have any chronic health conditions?
                      <span className="color-red">*</span>{" "}
                  </span>
              </Text>
              <Form.Item label="" name="chronic"
              rules={[{ required: true, message: "Please select an option!" }]}>
                <Radio.Group name="chronic" onChange={(e) => onChangeChronic(e)} value={chronic}>
                  <Radio value="Yes"> Yes </Radio>
                  <Radio value="No"> No </Radio>
                  <Radio value="preferNottoAnswer"> Prefer Not to Answer </Radio>
                </Radio.Group>
              </Form.Item>      
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
  