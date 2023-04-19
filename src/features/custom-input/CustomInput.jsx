import { TextInput } from "@mantine/core";
import { useField } from "formik";

const CustomInput = ({ label, onTextChange, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label>{label}</label>
      <TextInput
        size="lg"
        onChange={onTextChange}
        {...field}
        {...props}
        className={`input-with-placeholder ${
          meta.touched && meta.error ? "input-error" : ""
        }`}
      />
    </>
  );
};
export default CustomInput;
