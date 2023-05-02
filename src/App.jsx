import "react-animated-slider/build/horizontal.css";
import "typeface-montserrat";
import "./App.css";
import CustomInput from "./features/custom-input/CustomInput";
import CustomRadio from "./features/custom-radio/CustomRadio";
import DoctorField from "./features/doctor-field/DoctorField";
import PrescriptionField from "./features/prescription/PrescriptionField";
import ProgressBar from "./features/progress-bar/Progressbar";
import page from "./assets/Page.png";
import { Field, Formik, useFormik } from "formik";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useAppDispatch, useAppSelector } from "./Redux/store";
import { advancedSchema } from "../src/features/validations/Validation"; 
import  StepOne  from "../src/components/Steps/Step1";
import  StepTwo  from "../src/components/Steps/Step2";
import  StepThree  from "../src/components/Steps/Step3";
import  StepFour  from "../src/components/Steps/Step4";
import  StepFive  from "../src/components/Steps/Step5";
import  StepSix  from "../src/components/Steps/Step6";
import  StepSeven  from "../src/components/Steps/Step7";
import * as yup from 'yup';
import {
  setStepFive,
  setStepFour,
  setStepOne,
  setStepSeven,
  setStepSix,
  setStepThree,
  setStepTwo
} from "./Redux/itemsSlice";
import {
  Paper,
  Popover,
  Button,
  Image,
  Box,
  Radio,
  MultiSelect,
  Text,
  Center,
  Group,
  Modal,
  Divider,
  TextInput,
  NumberInput
} from "@mantine/core";
import { useState } from "react";
import {  message, Steps, Progress, Layout, Form } from 'antd';


const App = () => {
  const [form] = Form.useForm();
  const [current, setCurrent] = useState(0);
  const [ planType, setPlanType ] = useState([]);
  const [formData, setFormData] = useState({ zipcode : "" });
  const [formData2, setFormData2] = useState({ CompositionEvent : "", Vision : "", Hearing: "", PartB: "", GroceryCard: "" });
  const [formData3, setFormData3] = useState({ Over : "", Utilities : "", Transportation: "", RoundTripTransportation: "", Emergency: "",  USA:"" , travelOutSideUSA: "" });
  const [formData4, setFormData4] = useState({ Medicare: "", Medicaid: "", Tricare: "", chronic: "" });
  const [formData5, setFormData5] = useState({ Medicare: "", Supplement: "", Employer: "", Prescription: "", Other: "", NewField: "", None: "", Doctor: "" });           
  const [formData6, setFormData6] = useState({ regularDoctor: "", doctorAddress: "", distance: "", doctorname: "", selectedLocation: "",
                                               prescriptionsMedications: "", prescriptionName: "", dosage: "", quantity: "", frequency: "", 
                                               medications: "", medicinename: "",    });
  const [formData7, setFormData7] = useState({ preferable: "", network: "" });



  const dispatch = useAppDispatch();

  const [allFields, setAllFields] = useState({
    form1 : formData,
    form2 : formData2,
    form3 : formData3,
    form4 : formData4,
    form5 : formData5,
    form6 : formData6,
    form7 : formData7 
  });

  const next = async () => {
    if(await form.validateFields() && current < totalSteps - 1){
      setCurrent(current + 1);  
    }
    const values = form.getFieldsValue(true);
    console.log(values);
    if(current === 0){
      dispatch(setStepOne({ zipcode: values.zipcode }));
    } else if(current === 1){
      dispatch(setStepTwo({ CompositionEvent: values.CompositionEvent, Vision: values.Vision,
        Hearing: values.Hearing, PartB: values.PartB, GroceryCard: values.GroceryCard }));
    } else if(current === 2){
      dispatch(setStepThree({ 
        Over: values.Over, Utilities: values.Utilities, Transportation: values.Transportation, 
        RoundTripTransportation: values.RoundTripTransportation, Emergency: values.Emergency,
        USA: values.USA, travelOutSideUSA: values.travelOutSideUSA
       }));
    } else if(current === 3){
      dispatch(setStepFour({
        Medicare: values.Medicare, Medicaid: values.Medicaid,
        Tricare: values.Tricare, chronic: values.chronic 
      }));
    } else if(current === 4){
      dispatch(setStepFive({ planType: planType }));
    } else if(current === 5){
      dispatch(setStepSix({
        regularDoctor: values.regularDoctor, prescriptionsMedications: values.prescriptionsMedications,
        doctorAddress: values.doctorAddress, distance: values.distance,
        doctorname: values.doctorname, selectedLocation: values.selectedLocation, 
        prescriptionName: values.prescriptionName, dosage: values.dosage, quantity: values.quantity, frequency: values.frequency, 
        medications: values.medications, medicinename: values.medicinename
       }));
    } else if(current === 6) {
      dispatch(setStepSeven({
        preferable: values.preferable, network: values.network
       }));
    }
  };

  const prev = () => {
    if(current > 0){
      setCurrent(current - 1);
    }
  };

  const doneStepper = async () => {
    const values = form.getFieldsValue(true);
    if(await form.validateFields()){
      console.log(form.getFieldValue());
    }
    dispatch(setStepSeven({
      preferable: values.preferable, network: values.network
     }))
  }

  const steps = [
    {
      title: '',
      content: <StepOne />,
    },
    {
      title: '',  
      content: <StepTwo />,
    },
    {
      title: '',  
      content: <StepThree />,
    },
    {
      title: '',  
      content: <StepFour />,
    },
    {
      title: '',  
      content: <StepFive  planType={planType} setPlanType={setPlanType} />,
    },
    {
      title: '',  
      content: <StepSix />,
    },
    {
      title: '',  
      content: <StepSeven />,
    }
  ];

  const totalSteps = steps.length;
  const progressPercent = ((current + 1) / totalSteps) * 100;

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  return (
    <>
    <Form
        name="basic"
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      > 
     <Progress percent={progressPercent} showInfo={false} strokeColor="#52c41a" />        
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current > 0 && (
            <Button type="button" style={{ margin: '0 8px', width:"90px", borderRadius:"7px"  }} onClick={() => prev()}>
              Previous
            </Button>
          )}
          {current < steps.length - 1 && (
            <Button type="button" onClick={(e) => next(e)}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="button" onClick={() => doneStepper()}>
              Done
            </Button>
          )}
    </div>
    </Form>
    </>
  );
};
export default App;

