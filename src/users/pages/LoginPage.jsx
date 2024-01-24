import { Button, Container, Typography } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Input from "../../shared/components/FormElements/Input";
import { Link } from "react-router-dom";

import "./Authentication.css";

export default function LoginPage() {
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
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        <Form className="form__container">
          <h2>Login User</h2>

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
