import "./Prescription.css";
import React, { useState } from "react";
import { FaChevronDown, FaPencilAlt, FaTimes } from "react-icons/fa";
import { PrescriptionItem } from "../../Redux/PrescriptionSlice";
import {  setFieldsValues } from "../../Redux/itemsSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/store";

import {
  Paper,
  Select,
  NativeSelect,
  Button,
  Image,
  Box,
  Radio,
  TextInput,
  Text,
  Autocomplete,
  Center,
  Modal,
  Divider,
  Textarea,
} from "@mantine/core";

const PrescriptionField = ({ label, placeholder, data }) => {
  const dispatch = useAppDispatch();
  const [isPrescriptionVisible, setIsPrescriptionVisible] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);
  const [isPrescriptionAdded, setIsPrescriptionAdded] = useState(false);
  const [showModalContent, setShowModalContent] = useState(true);
  const { stepOne, stepSix } = useAppSelector((state) => state.item);

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
    dispatch(setFieldsValues({ medicinename: event.target.value }));
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setInputValue("");
    setFilteredData([]);
  };
  const handleDelete = () => {
    setSelectedItem(null); // remove the selected item
  };
  const handleAddPrescription = () => {
    dispatch(PrescriptionItem(selectedItem));
    setIsPrescriptionAdded(true);
    setShowModalContent(false);
  };

  const handleSelect = (value) => {
    debugger
    setSelectedValue(value);
    // dispatch(setStepOneState({ dosage: value.target.value }));
    dispatch(setFieldsValues({ dosage: value.target.value }))
  };

  const handleShowPrescription = () => {
    setIsPrescriptionVisible(true);
  };

  const handleHidePrescription = () => {
    setIsPrescriptionVisible(false);
  };
  return (
    <>
      <div style={{ position: "relative" }}>
        <label style={{ fontSize: "19px" }} htmlFor="autocomplete">
          {label}
        </label>
        <p style={{ fontSize: "12px" }}>
          Make sure your drugs are covered. Start typing the name of the drug in
          the field above and then select it as it appears here.
        </p>
        <TextInput
          type="text"
          id="autocomplete"
          placeholder={placeholder}
          value={inputValue}
          style={{ fontSize: "19px", width: "98%" }}
          onChange={handleInputChange}

        />
        <div style={{ marginTop: "1em" }}>
          {selectedItem && (
            <div>
              {isPrescriptionAdded ? (
                <div>
                  <Text
                    bold
                    style={{
                      color: " #969799",
                      fontSize: 19,
                    }}
                  >
                    1 Prescription entered
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
                      <Text>lisinopril</Text>
                      <Text>Generic</Text>
                    </div>
                    <div
                      style={{
                        flex: 1,
                        color: " #969799",
                        fontSize: 19,
                        flex: 1, // Add this line
                      }}
                    >
                      <Text>lisinopril 10 MG</Text>
                      <Text>1 Per Day</Text>
                    </div>
                    <div
                      style={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Text
                        className="button1"
                        style={{
                          width: "auto",
                          color: "#19499e",
                          fontSize: "19px",
                          border: "none",
                          borderRadius: "5px",
                          marginLeft: "240px",
                          marginTop: "-12px",
                        }}
                        onClick={() => setIsPrescriptionAdded(false)}
                      >
                        <FaPencilAlt style={{ marginRight: "5px" }} />
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
              ) : (
                <div>
                  {/* Content to display before prescription is added */}
                  <h3 bold>Prescription details</h3>
                  <Text
                    style={{
                      lineHeight: "1.5",
                      color: " #969799",
                      fontSize: 12,
                      marginTop: 12,
                    }}
                  >
                    Providing your prescription details allows us to uncover the
                    most accurate Medicare plan pricing
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: "19px",
                      color: " #969799",
                    }}
                  >
                    Dosage
                  </Text>
                  <Select
                    style={{
                      width: "50%",
                      fontSize: "19px",

                    }}
                    // defaultValue={stepSix.dosage}

                    placeholder="Pick one"
                    data={[
                      { value: "Vyvanse", label: "Vyvanse 250G" },
                      { value: "Vyvanse1", label: "Vyvanse 500G" },
                    ]}
                    onChange={handleSelect}
                  />
                  <div
                    style={{
                      marginTop: 12,
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <div>
                      <Text>Quantity</Text>
                      <TextInput
                        onChange={(v) => {
                          dispatch(setStepSixState({ Zipcode: v.target.value }));
                        }}
                        defaultValue={1} style={{ width: "60px" }} />
                    </div>
                    <Text
                      style={{
                        margin: "20px 25px  10px ",
                      }}
                    >
                      per
                    </Text>
                    <div>
                      <Text>Frequency</Text>
                      <NativeSelect
                        placeholder="Pick one"
                        data={[
                          { value: "day", label: "day" },
                          { value: "week", label: "week" },
                          { value: "month", label: "month" },
                        ]}
                        rightSection={
                          <FaChevronDown style={{ pointerEvents: "none" }} />
                        }
                      />
                    </div>
                  </div>
                  <button
                    className="button1"
                    style={{
                      backgroundColor: "#3bac46",
                      color: "#fff",
                      outline: "none"
                    }}
                    onClick={handleAddPrescription}
                  >
                    {isPrescriptionAdded ? "Added" : "ADD  Prescription"}
                  </button>
                </div>
              )}
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

export default PrescriptionField;
{
  /* <div className="App">
{isPrescriptionVisible && (
  <>
  
    <h3>Select Medication</h3>
    <p>Some medication list here...</p>
    <button onClick={handleHidePrescription}>
      Hide Prescription
    </button>
  </>
)}




</div> */
}
