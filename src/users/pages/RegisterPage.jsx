import { useState } from "react";

import { Button, Container, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import useAuthentication from "../../hooks/useAuthentication";
import "./Authentication.css";

export default function RegisterPage() {
  const { login } = useAuthentication();
  const [error, setError] = useState(null);

  const navigate = useNavigate("/");

  return (
    <Container sx={{ mx: 10, display: "flex" }} className="form__page">
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={Yup.object({
          name: Yup.string().required("This filed is required"),
          email: Yup.string()
            .email("Type a valid email")
            .required("This field is required"),
          password: Yup.string()
            .min(6, "Must have at least 6 characters")
            .required("This field is required"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          console.log(values);

          try {
            const result = await axios.post(
              process.env.REACT_APP_API + "/users/signup",
              {
                name: values.name,
                email: values.email,
                password: values.password,
              }
            );
            console.log(result);
            login("u1", result.data.token, result.data.user);
            navigate("/home");
          } catch (err) {
            setError(err.response.data.message || "Something went wrong");
            console.log(err);
          }
          setSubmitting(false);
        }}
      >
        <Form className="form__container">
          <h2>Register a new user</h2>
          <Input name={"name"} label={"Enter your name"} />
          <Input name={"email"} label={"Enter your email"} />
          <Input name={"password"} label={"Enter your password"} />
          <Button
            className="form-btn"
            sx={{ width: 150, bgcolor: "white", color: "#b197fc", mt: 2 }}
            variant="contained"
            type="submit"
          >
            Submit Data
          </Button>

          {error && (
            <Alert sx={{ mt: 2, fontSize: 19 }} severity="error">
              {error}
            </Alert>
          )}

          <Typography sx={{ mt: 1 }}>
            Have an account? Login here{" "}
            {
              <Link style={{ color: "white", fontWeight: 800 }} to={"/login"}>
                Login Page
              </Link>
            }
          </Typography>
        </Form>
      </Formik>
    </Container>
  );
}
