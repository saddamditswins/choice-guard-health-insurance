import { TextInput } from "@mantine/core";
import { useField } from "formik";

const CustomInput = ({ label, onTextChange, ...props }) => {
  // const [field, meta] = useField(props);

  return (
    <>
      <label>{label}</label>
      <TextInput
        size="lg"
        onChange={onTextChange}

        style={{
          borderColor: "#ced4da",
          borderRadius: "4px",
          fontSize: "1rem",
          // borderColor: "#ced4da",
          width: "100%",
          boxSizing: "border-box",
          fontSize: "16px",
          maxWidth: "100%",
        }}
        // {...field}

        {...props}
        // className={`input-with-placeholder ${meta.touched && meta.error ? "input-error" : ""}`}

      />
    </>
  );
};
export default CustomInput;
