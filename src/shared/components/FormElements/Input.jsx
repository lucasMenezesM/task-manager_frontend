import { Field, ErrorMessage } from "formik";
import "./Input.css";

export default function Input({ name, label, type = null, textarea = null }) {
  return (
    <>
      <label>{label}</label>
      {textarea ? (
        <Field name={name} type={type} as="textarea"></Field>
      ) : (
        <Field name={name} type={type}></Field>
      )}

      <ErrorMessage
        style={{ color: "red" }}
        className="error-message"
        name={name}
      />
    </>
  );
}
