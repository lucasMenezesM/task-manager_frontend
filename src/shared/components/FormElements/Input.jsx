import { Field, ErrorMessage } from "formik";
import "./Input.css";

export default function Input({ name, label }) {
  return (
    <>
      <label>{label}</label>
      <Field name={name}></Field>
      <ErrorMessage
        style={{ color: "red" }}
        className="error-message"
        name={name}
      />
    </>
  );
}
