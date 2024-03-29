import { useContext, useState } from "react";
import { Button, Container, Typography } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Input from "../../shared/components/FormElements/Input";
import { Link } from "react-router-dom";
import Alert from "@mui/material/Alert";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import SpinnerComponent from "../../shared/components/Spinner";
import useAuthentication from "../../hooks/useAuthentication";
import "./Authentication.css";
import { AuthContext } from "../../shared/context/auth-context";

export default function LoginPage() {
  const { login } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // const { login } = useAuthentication();
  const navigate = useNavigate();

  return (
    <Container sx={{ mx: 10, display: "flex" }} className="form__page">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
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
            setIsLoading(true);
            const result = await axios.post(
              process.env.REACT_APP_API + "/users/login",
              {
                email: values.email,
                password: values.password,
              }
            );

            console.log(result);
            login(result.data.user.id, result.data.token, result.data.user);
            setIsLoading(false);
            navigate("/home");
          } catch (err) {
            setError(err.response.data.message || "Something went wrong");
            console.log(err);
            setIsLoading(false);
          }
          setSubmitting(false);
        }}
      >
        <Form className="form__container">
          {/* <CircularProgress color="success" variant="soft" /> */}
          <h2>Login User</h2>

          <Input name={"email"} label={"Enter your email"} />
          <Input
            name={"password"}
            type={"password"}
            label={"Enter your password"}
          />
          <Button
            className="form-btn"
            sx={{ width: 150, bgcolor: "white", color: "#b197fc", mt: 2 }}
            variant="contained"
            type="submit"
          >
            <span>LOGIN</span> {isLoading && <SpinnerComponent />}
          </Button>

          {error && (
            <Alert sx={{ mt: 2, fontSize: 19 }} severity="error">
              {error}
            </Alert>
          )}

          <Typography sx={{ mt: 1 }}>
            Are you new here? Sign up here{" "}
            {
              <Link style={{ color: "white", fontWeight: 800 }} to={"/signup"}>
                Sign up Page
              </Link>
            }
          </Typography>
        </Form>
      </Formik>
    </Container>
  );
}
