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
      <div className="custom-modal">
        <h2>My Doctors</h2>
        <div className="mb-1">
          <Text className="text-box">Doctor's City or ZiP Code</Text>
          <TextInput
            // defaultValue={stepOne.Zipcode}

            name="Zipcode"
            type="text"
            placeholder="Enter your Zipcode"
          />
        </div>
        <div className="mb-1">
          <Text className="text-box">Distance</Text>

          <Autocomplete
            defaultValue="25 miles"
            placeholder="Pick one"
            data={["5 miles", "10 miles", "15 miles", "20 miles", "25 miles"]}
          />
        </div>
        <div className="mb-1">
          <Text className="text-box"> Doctor's name</Text>

          <TextInput
            type="text"
            id="autocomplete"
            placeholder={placeholder}
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <div>
          {selectedItem && (
            <>
              {isPrescriptionAdded ? (
                <div>
                  <div>
                    <Text  className="names">1 Doctor entered</Text>
                    <Divider my="sm" />
                    <div className="d-flex justify-between">
                      <div className="names">
                        <Text>Mary Brigandi</Text>
                        <Text>Family Medicare</Text>
                        <Text>5230 Center Ave</Text>
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
                              <FaTimes />
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
            </>
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
