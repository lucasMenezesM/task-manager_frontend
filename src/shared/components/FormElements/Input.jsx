import { Field, ErrorMessage } from "formik";
import "./Input.css";

export default function Input({ name, label, type = null }) {
  return (
    <>
      <label>{label}</label>
      <Field name={name} type={type}></Field>
      <ErrorMessage
        style={{ color: "red" }}
        className="error-message"
        name={name}
      />
    </>
  );
}
