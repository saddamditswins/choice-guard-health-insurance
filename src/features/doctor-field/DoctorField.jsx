import React, { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import {
  Radio,
  TextInput,
  Group,
  Text,
  Autocomplete,
  Divider,
} from "@mantine/core";
import StepOne from "../../components/Steps/Step1";
import { setDoctorAddress, setDistance, setDoctorName } from "../../Redux/DoctorSlice";
import { Form, Input, Typography } from 'antd';
import CustomInput from "../custom-input/CustomInput";

const DoctorField = ({ label, placeholder, data, onAddProvider }) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");
  const [showModalContent, setShowModalContent] = useState(true);
  const [isPrescriptionAdded, setIsPrescriptionAdded] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [listViewData, setListViewData] = useState([]);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const { fieldValues } = useAppSelector((state) => state.item); 
  const dispatch = useAppDispatch();
  const handleInputChange = (event) => {
    const value = event.target.value;    
    dispatch(setDoctorName({ doctorname: value }));
    setInputValue(value);
    const filteredItems = data.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filteredItems);
    // Check if the selected value is in the filtered list
    const selectedItem = filteredItems.find(
      (item) => item.toLowerCase() === value.toLowerCase()
    );
    if (selectedItem) {
      setSelectedItem(selectedItem);
      dispatch(setDoctorField({ doctorname: value }));
    } else {
      setSelectedItem("");
    }
    dispatch(setDoctorField({ doctorname: item }));
  };

  const handleItemClick = (item) => {
    dispatch(setDoctorField({ doctorname: item }));
    setSelectedItem(item);
    setInputValue("");
    setFilteredData([]);
  };
  const handleDelete = () => {
    setListViewData(
      listViewData.filter((provider) => provider.name !== "New Provider")
    );
    setSelectedItem(null); // remove the selected item
    setIsPrescriptionAdded(false);
  };
  const handleAddDoctor = (e) => {
    setListViewData([...listViewData, { name: "New Provider" }]);
    setIsPrescriptionAdded(true);
    setIsContentVisible(false);
  };
  const handleShowContent = () => {
    setIsContentVisible(true);
    setIsPrescriptionAdded(false);
  };
  const onChangeDoctorDistance = (value) => {
    dispatch(setDistance({ distance: value }))
  }

  return (
    <>
      <div
        style={{
          position: "relative",
        }}
      >
        <h2
          style={{
            color: "#495057",

            fontFamily: "Montserrat",
            textAlign: "center",
            marginTop: 5,
          }}
        >
          My Doctors
        </h2>
        <Text>Doctor's City or ZiP Code</Text>
        <Form.Item name="doctorAddress"
          rules={[{ required: true, message: 'Please add Doctor Address' }]}>
        <CustomInput
          name="doctorAddress"
          onBlur={(e) => {
            dispatch(setDoctorAddress({ doctorAddress:e.target.value}))
          }}
          style={{
            borderRadius: "4px",
            fontSize: "1rem",
            color: "#969799",
            width: "100%",
            boxSizing: "border-box",
            maxWidth: "100%",
          }}
          type="text"
          placeholder="Enter your Zipcode"
        />
        </Form.Item>
        <Text
          style={{
            fontFamily: "Montserrat",
          }}
        >
          Distance
        </Text>
        <Form.Item name="distance"
          rules={[{ required: true, message: 'Please add Doctor Distance' }]}>
          <Autocomplete
            defaultValue="25 miles"
            name="distance"
            placeholder="Pick one"
            data={["5 miles", "10 miles", "15 miles", "20 miles", "25 miles"]}
            style={{
              marginTop: 5,
              color: "#969799",
              fontFamily: "Montserrat",
            }}
            onChange={onChangeDoctorDistance}
          />
        </Form.Item>
        <Text style={{ marginTop: 15 }}> Doctor's name</Text>
        <Form.Item name="doctorname"
          rules={[{ required: true, message: 'Please add Doctor Name' }]}>
        <CustomInput
          style={{
            marginTop: 5,
            color: "#495057",
            fontFamily: "Montserrat",
          }}
          name="doctorname"
          type="text"
          id="autocomplete"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
        />
        </Form.Item>
        <div
          style={{
            marginTop: "1em",
            color: "#495057",

            fontFamily: "Montserrat",
          }}
        >
          {selectedItem && (
            <div
              style={{
                color: "#495057",
                fontFamily: "Montserrat",
              }}
            >
              <div>
                {isPrescriptionAdded ? (
                  <div>
                    <div>
                      <Text
                        bold
                        style={{
                          color: " #969799",
                          fontSize: 19,
                        }}
                      >
                        1 Doctor entered
                      </Text>
                      <Divider my="sm" />
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            flex: 1,
                            color: " #969799",
                            fontSize: 19,
                          }}
                        >
                          <Text>Mary Brigandi</Text>
                          <Text
                            style={{
                              flex: 1,
                              color: " #969799",
                              fontSize: 15,
                            }}
                          >
                            Family Medicare
                          </Text>
                          <Text
                            style={{
                              flex: 1,
                              color: " #969799",
                              fontSize: 15,
                            }}
                          >
                            5230 Center Ave
                          </Text>
                        </div>

                      <div className="actions">
                        <Text onClick={handleShowContent}>
                          <FaSearch />
                          Edit
                        </Text>
                        <Text onClick={() => handleDelete()}>
                          <FaTimes />
                          Delete
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  {isContentVisible ? (
                    <div>
                      <div>
                        <h3>Doctor {selectedItem}</h3>
                      </div>
                      <h3>Select office location</h3>
                      <Text>A doctor's Insurance coverage may differ by location. You can change this at anytime</Text>
                      <div className="d-flex justify-between">
                        <Radio.Group
                          name="favoriteFramework"
                          withAsterisk
                        >
                          <Group mt="xs" className="custom-radio">
                            <div>
                              <Radio
                                value="9901"
                                label="9901 Paramount Blvd, Ste 116"
                              />
                              <Radio
                                value="9902"
                                label="9902 Paramount Blvd, Ste 116"
                              />
                              <Radio
                                value="9003"
                                label="9003 Paramount Blvd, Ste 116"
                              />
                            </div>
                          </Group>
                        </Radio.Group>
                        <div className="actions">
                          <Text onClick={() => handleDelete()}>
                            <FaTimes />
                            Delete
                          </Text>
                        </div>
                      </div>
                      <div className="text-center mb-1">
                        <button
                          className="primary-btn"
                          onClick={handleAddDoctor}
                        >
                          {isPrescriptionAdded ? "Added" : "Add Provider"}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div>
                        <div>
                          <h3>Doctor {selectedItem}</h3>
                        </div>
                        <h3>Select office location</h3>
                        <Text>A doctor's Insurance coverage may differ by location. You can change this at anytime</Text>
                        <div className="d-flex justify-between">
                          <Radio.Group
                            name="favoriteFramework"
                            withAsterisk
                          >
                            <Group mt="xs" className="custom-radio">
                              <div>
                                <Radio
                                  value="9901"
                                  label="9901 Paramount Blvd, Ste 116"
                                />
                                <Radio
                                  value="9902"
                                  label="9902 Paramount Blvd, Ste 116"
                                />
                                <Radio
                                  value="9003"
                                  label="9003 Paramount Blvd, Ste 116"
                                />
                              </div>
                            </Group>
                          </Radio.Group>

                          <div className="actions">
                            <Text onClick={() => handleDelete()}>
                              <FaTimes style={{ marginRight: 5 }} />
                              Delete
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="text-center mb-1">
                        <button
                          className="primary-btn"
                          onClick={handleAddDoctor}
                        >
                          {isPrescriptionAdded ? "Added" : "Add Provider"}
                        </button>
                      </div>
                    </>
                  )}
                </div>
              )}
              </div>
              </div>
          )}
        </div>
        {filteredData.length > 0 && (
          <ul className="autocomplete-items">
            {filteredData.map((item) => (
              <li key={item} onClick={() => handleItemClick(item)}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default DoctorField;
