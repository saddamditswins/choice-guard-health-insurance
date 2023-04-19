import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import { setFieldsValues, setField3, setField2 } from "../../Redux/itemsSlice";
import {
  Text,
  Divider,
  Modal,
  Box,
  Button,
  Popover,
  Image,
} from "@mantine/core";
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
      <h1 className="quatilty-benefits">Doctors and Medications</h1>
      <p className="each-benefits">
        Let's get you the benefits you need with a plan that covers your doctors
        and medications too.
      </p>

      <Divider my="sm" />
      <Field validate={validate}>
        {({ field, form }) => (
          <>
            <Text className="text-box">
              <span>
                Do you have any doctors you see regulary?
                <span className="color-red">*</span>
              </span>
            </Text>{" "}
            <div>
              <div className="mb-1">
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
                    // dispatch(setField3(true));
                    dispatch(setFieldsValues({ doctor: v.target.value }));
                    // console.log("yes");
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
                    dispatch(setFieldsValues({ doctor: v.target.value }));
                    // console.log(v.target.value);
                  }}
                />
              </div>
              {/* {stepSix.errors?.doctor && (
                  <p
                    style={{
                      color: "red",
                      fontStyle: "italic",
                    }}
                  >
                    {stepSix.errors?.doctor}
                  </p>
                )} */}
              <TransitionGroup>
                {showTravelOptions && (
                  <CSSTransition classNames="popover1" timeout={300}>
                    <Popover position="top">
                      <Text className="mb-1">
                        To save time, you can import your doctors and
                        prescriptions from Medicare.gov. (optional)
                      </Text>
                      <Button
                        className="primary-btn mb-1 sm"
                        onClick={handleOpenDrawer}
                      >
                        Import From Medicare.gov
                      </Button>

                      <Text className="mb-1">-Or-</Text>
                      <Text className="mb-1">
                        Instead, you can manually search the names of your
                        doctor(s) to check if they are in-network: (optional)
                      </Text>
                      <Button
                        className="primary-btn mb-1 sm"
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
                        <div>
                          <div>
                            <DoctorField
                              label="Doctor's name"
                              placeholder="Drug Name"
                              data={data}
                            />
                          </div>
                          <div className="text-center">
                            <Button
                              onClick={handleCloseModal}
                              className="primary-btn"
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

      <Field validate={validate}>
        {({ field, form }) => (
          <>
            <Text className="text-box">
              <span>
                Would you like us to check on your prescription medications?
                Each plan covers medications at different costs
                <span className="color-red">*</span>{" "}
              </span>
            </Text>
            <div>
              <div className="mb-1">
                <CustomRadio
                  {...field}
                  id="travel1"
                  name="medications"
                  label="Yes"
                  value="yes"
                  // required
                  onChange={() => {
                    form.setFieldValue("medications", "yes");
                    setShowTravelOptions1(true);
                  }}
                  defaultValue={StepSix.medications}
                  onClick={(v) => {
                    {
                      // dispatch(setField2(true));
                      dispatch(
                        setFieldsValues({ medications: v.target.value })
                      );
                      // dispatch(setFieldsValues({ Vision: e.target.value }));
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
                  // required
                  onChange={() => {
                    form.setFieldValue("medications", "no");
                    setShowTravelOptions1(false);
                  }}
                  defaultValue={StepSix.medications}
                  onClick={(v) => {
                    dispatch(setFieldsValues({ medications: v.target.value }));
                    console.log(v.target.value);
                  }}
                />
              </div>
              {/* {stepSix?.errors?.medications && (
                  <p
                    style={{
                      color: "red",
                      fontStyle: "italic",
                    }}
                  >
                    {stepSix?.errors?.medications}
                  </p>
                )} */}
              <TransitionGroup>
                {showTravelOptions1 && (
                  <CSSTransition classNames="popover1" timeout={300}>
                    <Popover position="top">
                      <Text className="mb-1">
                        To save time, you can import your doctors and
                        prescriptions from Medicare.gov. (optional)
                      </Text>
                      <Button
                        className="primary-btn mb-1 sm"
                        onClick={handleOpenDrawer}
                      >
                        Import From Medicare.gov
                      </Button>
                      <Text className="mb-1">-Or-</Text>
                      <Text className="mb-1">
                        Instead, you can manually search the names of your
                        prescriptions to check if they are covered: (optional)
                      </Text>{" "}
                      <Button
                        className="primary-btn mb-1 sm"
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
                        <div>
                          <div>
                            <PrescriptionField
                              label="Prescription's name"
                              placeholder="Prescription's name"
                              data={data}
                            />
                            <div className="text-center">
                              <Button
                                onClick={handleCloseModal1}
                                // style={styles.closeButton}
                                className="primary-btn"
                              >
                                Done
                              </Button>
                            </div>
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
        className="prescription-modal"
        opened={isDrawerOpen}
        onClose={handleCloseDrawer}
        title=""
      >
        <div className="mb-1">
          <h3>Are you sure you want to continue to log into Medicare.gov?</h3>
        </div>
        <Text className="mb-1">You are about to log in to Medicare.gov.</Text>
        <Text className="mb-1">
          With your authorization, we will access your data and import the
          history of your drug prescriptions.
        </Text>
        <Text className="mb-1">
          You will be able to edit imported drugs in our system.
        </Text>
        <Box>
          <Image src={page} alt="" />
        </Box>
        <Text className="mb-1">
          After pressing Continue, you will leave this website.
        </Text>
        <Text className="mb-1">
          Please review our Privacy Policy and Terms of Service.
        </Text>
        <Text className="mb-1">
          This product uses the Blue Button 2.0 APIs but is not endorsed or
          certified by the Centers for Medicare & Medicaid Services or the U.S.
          Department of Health and Human Services.
        </Text>

        <Button
          component="a"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.medicare.gov/account/login/?client_id=bb2api&redirect_uri=https%3A%2F%2Fapi.bluebutton.cms.gov%2Fmymedicare%2Fsls-callback&relay=10973492321578559514262006"
          className="primary-btn"
        >
          Continue
        </Button>
      </Modal>
    </div>
  );
};

export default StepSix;
