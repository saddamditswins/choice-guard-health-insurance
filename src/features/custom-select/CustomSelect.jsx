import "./CustomSelect.css";
import { useField } from "formik";

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label>{label}</label>
      <select
        className={
          meta.touched && meta.error
            ? "select-input input-error"
            : "select-input"
        }
        {...field}
        {...props}
      />


    </>
  );
};
export default CustomSelect;
