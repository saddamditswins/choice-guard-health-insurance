import React, { useState } from "react";
import { FaChevronDown, FaPencilAlt, FaTimes } from "react-icons/fa";
import { PrescriptionItem } from "../../Redux/PrescriptionSlice";
import { setFieldsValues } from "../../Redux/itemsSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/store";

import { Select, NativeSelect, TextInput, Text, Divider } from "@mantine/core";

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
    setSelectedValue(value);
    // dispatch(setStepOneState({ dosage: value.target.value }));
    dispatch(setFieldsValues({ dosage: value.target.value }));
  };

  const handleShowPrescription = () => {
    setIsPrescriptionVisible(true);
  };

  const handleHidePrescription = () => {
    setIsPrescriptionVisible(false);
  };
  return (
    <>
      <div className="custom-modal prescription-modal">
        <h3 htmlFor="autocomplete">{label}</h3>
        <p className="sub-heading">
          Make sure your drugs are covered. Start typing the name of the drug in
          the field above and then select it as it appears here.
        </p>
        <div className="mb-1">
        <TextInput
          type="text"
          id="autocomplete"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
        />
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
        <div>
          {selectedItem && (
            <div>
              {isPrescriptionAdded ? (
                <div>
                  <Text className="names">1 Prescription entered</Text>
                  <Divider my="sm" />
                  <div className="d-flex justify-between">
                    <div className="names">
                      <Text>lisinopril</Text>
                      <Text>Generic</Text>
                      <Text>lisinopril 10 MG</Text>
                      <Text>1 Per Day</Text>
                    </div>
                    <div className="actions">
                      <Text onClick={() => setIsPrescriptionAdded(false)}>
                        <FaPencilAlt />
                        Edit
                      </Text>
                      <Text onClick={() => handleDelete()}>
                        <FaTimes />
                        Delete
                      </Text>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mb-1">
                  {/* Content to display before prescription is added */}
                  <h3>Prescription details</h3>
                  <p className="sub-heading">
                    Providing your prescription details allows us to uncover the
                    most accurate Medicare plan pricing
                  </p>
                  <div className="mb-1">
                    <Text className="text-box">Dosage</Text>
                    <Select
                      style={{
                        width: "50%",
                      }}
                      // defaultValue={stepSix.dosage}

                      placeholder="Pick one"
                      data={[
                        { value: "Vyvanse", label: "Vyvanse 250G" },
                        { value: "Vyvanse1", label: "Vyvanse 500G" },
                      ]}
                      onChange={handleSelect}
                    />
                  </div>
                  <div className="prescription-qty-frq">
                    <div>
                      <Text className="text-box">Quantity</Text>
                      <TextInput
                        onChange={(v) => {
                          dispatch(
                            setStepSixState({ Zipcode: v.target.value })
                          );
                        }}
                        defaultValue={1}
                        style={{ width: "60px" }}
                      />
                    </div>
                    <Text className="text-box end-text">per</Text>
                    <div>
                      <Text className="text-box">Frequency</Text>
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
                    <div className="end-text">
                      <button
                        className="primary-btn"
                        onClick={handleAddPrescription}
                      >
                        {isPrescriptionAdded ? "Added" : "Add  Prescription"}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
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
