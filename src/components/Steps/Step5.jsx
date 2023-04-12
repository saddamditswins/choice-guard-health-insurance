import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import { setStepFiveState } from "../../Redux/itemsSlice";
import { MultiSelect, Text, TextInput } from "@mantine/core";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const StepFive = ({ validate, chronic }) => {
    const { field, stepFour } = useAppSelector((state) => state.item);
    const dispatch = useAppDispatch();
  
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
            <Text
              // style={{
              //   fontFamily: "Montserrat, sans-serif",
              //   marginBottom: "8px",
              //   fontWeight: "600",
              //   background: "transparent",
              //   fontSize: "16px",
              // }}
            >
              Which of the following chronic health conditions do you have?
            </Text>
            <MultiSelect
              style={{ marginBottom: "20px" }}
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
              <p style={{ color: "red", fontStyle: "italic" }}>
                {StepFive.errors?.Plan}
              </p>
            )}
          </>
        )}
        {chronic === "yes" && (
          <div>
            <Text
              style={{
                fontFamily: "Montserrat, sans-serif",
                marginBottom: "8px",
                fontWeight: "600",
                background: "transparent",
                fontSize: "16px",
              }}
            >
              <span>
                New Field(s): <span style={{ color: "red" }}>*</span>{" "}
              </span>
            </Text>
            <div>
              {/* MultiSelect component */}
              {/* TextInput component */}
            </div>
          </div>
        )}
  
        <Text
          style={{
            fontFamily: "Montserrat, sans-serif",
            marginBottom: "8px",
            fontWeight: "600",
            background: "transparent",
            fontSize: "16px",
          }}
        >
          <span>
            Please type the name of your plan(s):{" "}
            <span style={{ color: "red" }}>*</span>{" "}
          </span>
        </Text>
        <div>
          <MultiSelect
            style={{
              marginTop: "10px",
              marginBottom: "10px"
            }}
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
          />
          <TransitionGroup>
            {selectedItems.map((item) => {
              if (item.value === "None") {
                return null;
              }
              return (
                <CSSTransition classNames="popover" timeout={300}>
                  <div key={item}>
                    <Text
                      style={{
                        marginTop: "10px",
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: "600",
                        fontSize: "16px",
                      }}
                    >
                      Please select an option for {item}:
                    </Text>
                    <TextInput
                      size="md"
                      style={{
                        marginLeft: "-2px",
                        borderRadius: "4px",
                        width: "100%",
                        fontSize: "16px",
                        color: "#333",
                      }}
                      name={`Option for ${item}`}
                      type="text"
                      validate={validate}
                      placeholder={`Enter option for ${item}`}
                      onChange={(v) => {
                        dispatch(setStepFiveState({ Zipcode: v.target.value }));
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
  