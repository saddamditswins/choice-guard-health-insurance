import "../prescription/Prescription.css";
import CustomInput from "../custom-input/CustomInput";
import React, { useState } from "react";
import { FaChevronDown, FaSearch, FaTimes } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../Redux/store";

import {
  Paper,
  Select,
  Title,
  Button,
  Image,
  Box,
  Radio,
  TextInput,
  Group,
  Text,
  Autocomplete,
  Center,
  Modal,
  Divider,
  Textarea,
} from "@mantine/core";

const DoctorField = ({ label, placeholder, data, onAddProvider }) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");
  const [showModalContent, setShowModalContent] = useState(true);
  const [isPrescriptionAdded, setIsPrescriptionAdded] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [listViewData, setListViewData] = useState([]);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const { stepOne, stepSix } = useAppSelector((state) => state.item);
  const dispatch = useAppDispatch();
  const handleInputChange = (event) => {
    const value = event.target.value;
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
    } else {
      setSelectedItem("");
    }
  };

  const handleItemClick = (item) => {
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
  const handleAddDoctor = () => {
    setListViewData([...listViewData, { name: "New Provider" }]);
    setIsPrescriptionAdded(true);
    setIsContentVisible(false);
    onAddProvider();
  };
  const handleShowContent = () => {
    setIsContentVisible(true);
    setIsPrescriptionAdded(false);
  };
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
        <TextInput
          style={{
            borderRadius: "4px",
            fontSize: "1rem",
            color: "#969799",
            width: "100%",
            boxSizing: "border-box",
            maxWidth: "100%",
          }}
          defaultValue={stepOne.Zipcode}

          name="Zipcode"
          type="text"
          placeholder="Enter your Zipcode"
        />
        <Text
          style={{
            fontFamily: "Montserrat",
          }}
        >
          Distance
        </Text>

        <Autocomplete

          defaultValue="25 miles"
          placeholder="Pick one"
          data={["5 miles", "10 miles", "15 miles", "20 miles", "25 miles"]}
          style={{
            marginTop: 5,
            color: "#969799",
            fontFamily: "Montserrat",
          }}
        />
        <Text style={{ marginTop: 15 }}> Doctor's name</Text>

        <TextInput
          style={{
            marginTop: 5,
            color: "#495057",

            fontFamily: "Montserrat",
          }}
          type="text"
          id="autocomplete"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
        />
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

                        <div
                          style={{
                            flex: 1,
                            display: "flex",
                            justifyContent: "flex-end",
                          }}
                        >
                          <Text
                            style={{
                              width: "auto",
                              color: "#19499e",
                              fontSize: "19px",
                              border: "none",
                              borderRadius: "5px",
                              marginLeft: 10,
                            }}
                            onClick={handleShowContent}
                          >
                            <FaSearch style={{ marginRight: "5px" }} />
                            Edit
                          </Text>
                          <Text
                            style={{
                              width: "auto",
                              color: "#19499e",
                              fontSize: "19px",
                              border: "none",
                              borderRadius: "5px",
                              marginLeft: 10,
                            }}
                            onClick={() => handleDelete()}
                          >
                            <FaTimes style={{ marginRight: 5 }} />
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
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <h3>
                            <strong>Doctor {selectedItem}</strong>
                          </h3>
                        </div>
                        <h3>Select office location</h3>
                        <Radio.Group
                          name="favoriteFramework"
                          label="A doctor's Insurance coverage may differ by location. You can change this at anytime"
                          withAsterisk
                        >
                          <Group mt="xs">
                            <div>
                              <Radio
                                style={{ marginBottom: 10 }}
                                value="9901"
                                label="9901 Paramount Blvd, Ste 116"
                              />
                              <Radio
                                style={{ marginBottom: 10 }}
                                value="9902"
                                label="9902 Paramount Blvd, Ste 116"
                              />
                              <Radio
                                style={{ marginBottom: 10 }}
                                value="9003"
                                label="9003 Paramount Blvd, Ste 116"
                              />
                            </div>

                            <div
                              style={{
                                display: "flex",
                                marginTop: "-50px",
                                marginLeft: "380px",
                              }}
                            >
                              <Text
                                style={{
                                  width: "auto",
                                  color: "#19499e",
                                  fontSize: "19px",
                                  border: "none",
                                  padding: "10px 20px",
                                  borderRadius: "5px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                                onClick={() => handleDelete()}
                              >
                                <FaTimes style={{ marginRight: 5 }} />
                                Delete
                              </Text>
                            </div>
                          </Group>
                        </Radio.Group>
                        <button
                          style={{
                            backgroundColor: "#3bac46",
                            borderRadius: "3px",
                            color: "#fff",
                            marginLeft: "40%",
                            outline: "none",
                          }}
                          onClick={handleAddDoctor}
                        >
                          {isPrescriptionAdded ? "Added" : "Add Provider"}
                        </button>
                      </div>
                    ) : (
                      <>
                        <div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <h3>
                              <strong>Doctor {selectedItem}</strong>
                            </h3>
                          </div>
                          <h3>Select office location</h3>
                          <Radio.Group
                            name="favoriteFramework"
                            label="A doctor's Insurance coverage may differ by location. You can change this at anytime"
                            withAsterisk
                          >
                            <Group mt="xs">
                              <div>
                                <Radio
                                  style={{ marginBottom: 10 }}
                                  value="9901"
                                  label="9901 Paramount Blvd, Ste 116"
                                />
                                <Radio
                                  style={{ marginBottom: 10 }}
                                  value="9902"
                                  label="9902 Paramount Blvd, Ste 116"
                                />
                                <Radio
                                  style={{ marginBottom: 10 }}
                                  value="9003"
                                  label="9003 Paramount Blvd, Ste 116"
                                />
                              </div>

                              <div
                                style={{
                                  display: "flex",
                                  marginTop: "-50px",
                                  marginLeft: "380px",
                                }}
                              >
                                <Text
                                  style={{
                                    width: "auto",
                                    color: "#19499e",
                                    fontSize: "19px",
                                    border: "none",
                                    padding: "10px 20px",
                                    borderRadius: "5px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                  onClick={() => handleDelete()}
                                >
                                  <FaTimes style={{ marginRight: 5 }} />
                                  Delete
                                </Text>
                              </div>
                            </Group>
                          </Radio.Group>
                        </div>
                        <button
                          style={{
                            backgroundColor: "#3bac46",
                            borderRadius: "3px",
                            color: "#fff",
                            outline: "none"
                            ,
                            marginLeft: "40%",
                          }}
                          onClick={handleAddDoctor}
                        >
                          {isPrescriptionAdded ? "Added" : "Add Provider"}
                        </button>
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