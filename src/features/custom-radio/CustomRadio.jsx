import { Radio } from "@mantine/core";
import { useField } from "formik";

const CustomRadio = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <label className="custom-radio">
      <Radio
        {...field}
        {...props}
        checked={field.value === props.value}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      <span>{label}</span>
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </label>
  );
};

export default CustomRadio;
