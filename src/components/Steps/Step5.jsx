import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import { setFieldsValues } from "../../Redux/itemsSlice";
import { MultiSelect, Text, TextInput } from "@mantine/core";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const StepFive = ({ validate, chronic }) => {
  const { stepFive, field } = useAppSelector((state) => state.item);
  const dispatch = useAppDispatch();
  // const { stepFour } = useAppSelector((state) => state.item);

  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelection = (selected) => {
    if (selected.includes("None")) {
      setSelectedItems([]);
    } else {
      const newSelection = selected.filter(
        (item) => !selectedItems.includes(item)
      );
      const removedItems = selectedItems.filter(
        (item) => !selected.includes(item)
      );
      setSelectedItems([...selectedItems, ...newSelection]);
      removedItems.forEach((item) =>
        setSelectedItems((prevState) =>
          prevState.filter((prevItem) => prevItem !== item)
        )
      );
    }
  };

  return (
    <div className="div-height">
      {field && (
        <>
          <Text className="text-box">
            Which of the following chronic health conditions do you have?
          </Text>
          <MultiSelect
            className="mb-1"
            data={[
              {
                value: "Medicare Advantage Part C",
                label: "Medicare Advantage Part C",
              },
              { value: "Medicare Supplement", label: "Medicare Supplement" },
              {
                value: "Employer/Union Coverage",
                label: "Employer/Union Coverage",
              },
              {
                value: "Stand Alone Prescription Drug Plan",
                label: "Stand Alone Prescription Drug Plan",
              },
              { value: "Other", label: "Other" },
            ]}
          />{" "}
          {StepFive.errors?.Plan && (
            <p className="error-validation">
              {StepFive.errors?.Plan}
            </p>
          )}
        </>
      )}
      {chronic === "yes" && (
        <div>
          <Text className="text-box"
          >
            <span>
              New Field(s): <span  className="color-red">*</span>{" "}
            </span>
          </Text>
          <div>
            {/* MultiSelect component */}
            {/* TextInput component */}
          </div>
        </div>
      )}

      <Text className="text-box">
        <span>
          Please type the name of your plan(s):{" "}
          <span className="color-red">*</span>{" "}
        </span>
      </Text>
      <div>
        <MultiSelect
          data={[
            { value: "None", label: "None" },
            {
              value: "Medicare Advantage Part C",
              label: "Medicare Advantage Part C",
            },
            { value: "Medicare Supplement", label: "Medicare Supplement" },
            {
              value: "Employer/Union Coverage",
              label: "Employer/Union Coverage",
            },
            {
              value: "Stand Alone Prescription Drug Plan",
              label: "Stand Alone Prescription Drug Plan",
            },
            { value: "Other", label: "Other" },
          ]}
          placeholder="Select from the following list"
          limit={3}
          value={selectedItems}
          onChange={(selected) => handleSelection(selected)}
          className=" mb-1"
        />
        <TransitionGroup>
          {selectedItems.map((item) => {
            if (item.value === "None") {
              return null;
            }
            return (
              <CSSTransition classNames="popover" timeout={300}>
                <div key={item} className="mb-1">
                  <Text className="text-box">
                    Please select an option for {item}:
                  </Text>
                  <TextInput
                    name={`Option for ${item}`}
                    type="text"
                    validate={validate}
                    placeholder={`Enter option for ${item}`}
                    onBlur={(v) => {
                      dispatch(setFieldsValues({ Zipcode: v.target.value }));
                    }}
                  />
                </div>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </div>
    </div>
  );
};

export default StepFive;
