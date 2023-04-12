import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import { setStepSixState, setField3, setField2 } from "../../Redux/itemsSlice";
import { Text, Divider, Modal, Box, Button, Popover, Image,  } from "@mantine/core";
import { Field } from "formik";
import PrescriptionField from "../../features/prescription/PrescriptionField";
import DoctorField from "../../features/doctor-field/DoctorField";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import CustomRadio from "../../features/custom-radio/CustomRadio";
import page from "../../assets/Page.png";

const StepSix = ({ validate }) => {
    const { stepSix } = useAppSelector((state) => state.item);
    const dispatch = useAppDispatch();
    const [secondModal, setSecondModal] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [showTravelOptions, setShowTravelOptions] = useState(false);
    const [showTravelOptions1, setShowTravelOptions1] = useState(false);
  
    const [showModal, setShowModal] = useState(false);
    const [showModal1, setShowModal1] = useState(false);
  
    const data = ["Stephanie Sireix", " Min A Kim ", "Dr Smit", "Dr Talha"];
  
    const styles = {
      closeButton: {
        marginTop: "10px",
        outline: "none",
        padding: "10px 20px",
        backgroundColor: "#4caf50",
        fontWeight: "bold",
        boxShadow: "none",
        color: "#fff",
        position: "absolute",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
      },
    };
  
    const handleButtonClick = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };
    const handleButtonClick1 = () => {
      setShowModal1(true);
    };
  
    const handleCloseModal1 = () => {
      setShowModal1(false);
    };
  
    const handleOpenDrawer = () => {
      setIsDrawerOpen(true);
    };
  
    const handleCloseDrawer = () => {
      setIsDrawerOpen(false);
    };
  
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
          Doctors and Medications
        </Text>
        <p>
          Let's get you the benefits you need with a plan that covers your doctors
          and medications too.
        </p>
        <Divider my="sm" />
        <Field validate={validate}>
          {({ field, form }) => (
            <>
              <Text
                style={{
                  fontWeight: 600,
                  color: "#495057",
                  fontFamily: "Montserrat, sans-serif",
                  marginBottom: "8px",
                  fontSize: "16px",
                }}
              >
                <span>
                  {" "}
                  Do you have any doctors you see regulary?{" "}
                  <span style={{ color: "red" }}>*</span>{" "}
                </span>
              </Text>{" "}
              <div
                style={{ display: "flex", flexDirection: "column", gap: "4px" }}
              >
                <CustomRadio
                  {...field}
                  id="travel1"
                  name="doctor"
                  label="Yes"
                  value="yes"
                  required
                  onChange={() => {
                    form.setFieldValue("doctor", "yes");
                    setShowTravelOptions(true);
                  }}
                  defaultValue={StepSix.doctor}
                  onClick={(v) => {
                    dispatch(setField3(true));
                    setStepSixState({ doctor: v.target.value });
                    console.log("yes");
                  }}
                />
                <CustomRadio
                  {...field}
                  id="travel2"
                  name="doctor"
                  label="No"
                  value="no"
                  required
                  onChange={() => {
                    form.setFieldValue("doctor", "no");
                    setShowTravelOptions(false);
                  }}
                  defaultValue={StepSix.doctor}
                  onClick={(v) => {
                    dispatch(setStepSixState({ doctor: v.target.value }));
                    console.log(v.target.value);
                  }}
                />
                {stepSix.errors?.doctor && (
                  <p
                    style={{
                      color: "red",
                      fontStyle: "italic",
                    }}
                  >
                    {stepSix.errors?.doctor}
                  </p>
                )}
                <TransitionGroup>
                  {showTravelOptions && (
                    <CSSTransition classNames="popover1" timeout={300}>
                      <Popover position="top">
                        <Text
                          style={{
                            marginTop: "20px",
                            color: "#333",
                            fontFamily: "Montserrat",
                          }}
                        >
                          To save time, you can import your doctors and
                          prescriptions from Medicare.gov. (optional)
                        </Text>
                        <Button
                          style={{
                            borderRadius: "3px",
                            fontWeight: "bold",
                            fontSize: "19px",
                            padding: "10px 20px",
                            height: "auto",
                            outline: "none",
                            boxShadow: "none",
                            marginTop: 5,
                            marginBottom: 15,
                            backgroundColor: "#3bac46",
                          }}
                          onClick={handleOpenDrawer}
                        >
                          Import From Medicare.gov
                        </Button>
  
                        <Text
                          style={{
                            marginTop: "20px",
                            color: "#333",
                            fontFamily: "Montserrat",
                            fontWeight: "600",
                          }}
                        >
                          -Or-
                        </Text>
                        <Text
                          style={{
                            marginTop: "20px",
                            color: "#333",
                            fontFamily: "Montserrat",
                          }}
                        >
                          Instead, you can manually search the names of your
                          doctor(s) to check if they are in-network: (optional)
                        </Text>
                        <Button
                          style={{
                            outline: "none",
                            backgroundColor: "#3bac46",
                            fontWeight: "bold",
                            boxShadow: "none",
                            marginBottom: "20px",
                            color: "#fff",
                            marginTop: "10px",
                          }}
                          onClick={handleButtonClick}
                        >
                          Enter doctors manually
                        </Button>
                        <Modal
                          centered
                          opened={showModal}
                          onClose={handleCloseModal}
                          size="xl"
                        >
                          <div
                            style={{
                              display: "flex",
                              gap: "14px",
                              flexDirection: "column",
                              height: "100%",
                            }}
                          >
                            <div style={{ marginBottom: "4rem" }}>
                              <DoctorField
                                label="Doctor's name"
                                placeholder="Drug Name"
                                data={data}
                              />
                            </div>
                            <Button
                              onClick={handleCloseModal}
                              style={styles.closeButton}
                            >
                              Done
                            </Button>
                          </div>
                        </Modal>
                      </Popover>
                    </CSSTransition>
                  )}
                </TransitionGroup>
              </div>
            </>
          )}
        </Field>
  
        <Field validate={validate}>
          {({ field, form }) => (
            <>
              <Text
                style={{
                  fontWeight: 600,
                  color: "#495057",
                  fontFamily: "Montserrat, sans-serif",
                  marginBottom: "8px",
                  fontSize: "16px",
                }}
              >
                <span>
                  Would you like us to check on your prescription medications?
                  Each plan covers medications at different costs
                  <span style={{ color: "red" }}>*</span>{" "}
                </span>
              </Text>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "2px" }}
              >
                <CustomRadio
                  {...field}
                  id="travel1"
                  name="medications"
                  label="Yes"
                  value="yes"
                  required
                  onChange={() => {
                    form.setFieldValue("medications", "yes");
                    setShowTravelOptions1(true);
                  }}
                  defaultValue={StepSix.medications}
                  onClick={(v) => {
                    {
                      dispatch(setField2(true));
                      setStepSixState({ medications: v.target.value });
                      console.log("yes");
                    }
                  }}
                />
  
                <CustomRadio
                  {...field}
                  id="travel2"
                  name="medications"
                  label="No"
                  value="no"
                  required
                  onChange={() => {
                    form.setFieldValue("medications", "no");
                    setShowTravelOptions1(false);
                  }}
                  defaultValue={StepSix.medications}
                  onClick={(v) => {
                    dispatch(setStepSixState({ medications: v.target.value }));
                    console.log(v.target.value);
                  }}
                />
                {stepSix.errors?.medications && (
                  <p
                    style={{
                      color: "red",
                      fontStyle: "italic",
                    }}
                  >
                    {stepSix.errors?.medications}
                  </p>
                )}
                <TransitionGroup>
                  {showTravelOptions1 && (
                    <CSSTransition classNames="popover1" timeout={300}>
                      <Popover position="top">
                        <Text
                          style={{
                            marginTop: "20px",
                            color: "#333",
                            fontFamily: "Montserrat, sans-serif",
                          }}
                        >
                          To save time, you can import your doctors and
                          prescriptions from Medicare.gov. (optional)
                        </Text>
                        <Button
                          style={{
                            borderRadius: "3px",
                            fontWeight: "bold",
                            fontSize: "19px",
                            padding: "10px 20px",
                            height: "auto",
                            outline: "none",
                            backgroundColor: "#3bac46",
                            boxShadow: "none",
                            marginTop: 5,
                            marginBottom: 15,
                          }}
                          onClick={handleOpenDrawer}
                        >
                          Import From Medicare.gov
                        </Button>
                        <Text
                          style={{
                            marginTop: "20px",
                            color: "#333",
                            fontFamily: "Montserrat",
                            fontWeight: "600",
                          }}
                        >
                          -Or-
                        </Text>
                        <Text
                          style={{
                            marginTop: "20px",
                            color: "#333",
                            fontFamily: "Montserrat",
                          }}
                        >
                          Instead, you can manually search the names of your
                          prescriptions to check if they are covered: (optional)
                        </Text>{" "}
                        <Button
                          style={{
                            outline: "none",
                            backgroundColor: "#3bac46",
                            fontWeight: "bold",
                            boxShadow: "none",
                            marginBottom: "20px",
                            color: "#fff",
                            marginTop: "10px",
                          }}
                          onClick={handleButtonClick1}
                        >
                          Enter prescriptions manually
                        </Button>
                        <Modal
                          centered
                          opened={showModal1}
                          onClose={handleCloseModal1}
                          size="xl"
                        >
                          <div
                            style={{
                              display: "flex",
                              gap: "14px",
                              flexDirection: "column",
                              height: "100%",
                            }}
                          >
                            <div style={{ marginBottom: "4rem" }}>
                              <PrescriptionField
                                label="Prescription's name"
                                placeholder="Prescription's name"
                                data={data}
                              />
                              <Button
                                onClick={handleCloseModal1}
                                style={styles.closeButton}
                              >
                                Done
                              </Button>
                            </div>
                          </div>
                        </Modal>
                      </Popover>
                    </CSSTransition>
                  )}
                </TransitionGroup>
              </div>
            </>
          )}
        </Field>
  
        {/**/}
        <Modal
          size="xl"
          centered
          w="100%"
          anchor="right"
          open={isDrawerOpen}
          sx={{
            display: "flex",
            flexDirection: "column",
            color: " #969799",
            fontSize: 19,
            fontFamily: "Montserrat",
            color: "black",
            border: "2px solid #333",
            borderRadius: "10px",
            padding: "20px",
          }}
          opened={isDrawerOpen}
          onClose={handleCloseDrawer}
          title=""
        >
          <h4
            sx={{ marginBottom: "16px", textAlign: "center", fontSize: "24px" }}
          >
            Are you sure you want to continue to log into Medicare.gov?
          </h4>
          <p sx={{ marginBottom: "16px", fontSize: "16px" }}>
            You are about to log in to Medicare.gov.
          </p>
          <p sx={{ marginBottom: "16px", fontSize: "16px" }}>
            With your authorization, we will access your data and import the
            history of your drug prescriptions.
          </p>
          <p sx={{ marginBottom: "16px", fontSize: "16px" }}>
            You will be able to edit imported drugs in our system.
          </p>
          <Box sx={{ marginBottom: "16px", shadow: 10 }}>
            <Image
              src={page}
              alt=""
              sx={{ width: "100%", height: "auto", margin: "5px" }}
            />
          </Box>
          <p sx={{ marginBottom: "16px", fontSize: "16px" }}>
            After pressing Continue, you will leave this website.
          </p>
          <p sx={{ marginBottom: "46px", fontSize: "16px" }}>
            Please review our Privacy Policy and Terms of Service.
          </p>
          <p
            sx={{
              fontSize: 12,
              color: " #969799",
              marginBottom: "35px",
              fontStyle: "italic",
            }}
          >
            This product uses the Blue Button 2.0 APIs but is not endorsed or
            certified by the Centers for Medicare & Medicaid Services or the U.S.
            Department of Health and Human Services.
          </p>
  
          <Button
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.medicare.gov/account/login/?client_id=bb2api&redirect_uri=https%3A%2F%2Fapi.bluebutton.cms.gov%2Fmymedicare%2Fsls-callback&relay=10973492321578559514262006"
            styles={(theme) => ({
              root: {
                textDecoration: "none",
                boxShadow: "inset 0px 0px 0px 1px #3bac46",
                padding: "12px 24px",
                backgroundColor: "#3bac46",
                border: 0,
                borderColor: "#3bac46",
                "&:not([data-disabled])": theme.fn.hover({
                  backgroundColor: theme.fn.darken("#3bac46", 0.05),
                  color: "white",
                }),
              },
            })}
          >
            Continue
          </Button>
        </Modal>
      </div>
    );
  };

  export default StepSix;
  