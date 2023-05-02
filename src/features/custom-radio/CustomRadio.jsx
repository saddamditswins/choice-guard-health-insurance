import "./CustomRadio.css";
import { useField } from "formik";

const CustomRadio = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <label style={{ display: "flex", alignItems: "center" }}>
      <input
        {...field}
        {...props}
        type="radio"
        checked={field.value === props.value}
        className={meta.touched && meta.error ? "input-error" : ""}
        style={{ border: "1px solid black" }}
    />
      <span style={{ marginLeft: "5px", }}>{label}</span>
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </label>
  );
};

export default CustomRadio;
