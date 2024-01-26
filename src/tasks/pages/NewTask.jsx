import { Alert, Button, Container } from "@mui/material";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import SpinnerComponent from "../../shared/components/Spinner";
import Input from "../../shared/components/FormElements/Input";
import useAuthentication from "../../hooks/useAuthentication";

import "./NewTask.css";
import { useState } from "react";

export default function NewTask() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { userId, token } = useAuthentication();
  const navigate = useNavigate();
  return (
    <Container className="new-task__container" sx={{ mx: "auto" }}>
      <Formik
        initialValues={{ title: "", description: "" }}
        validationSchema={Yup.object({
          title: Yup.string().required("Title is required"),
          description: Yup.string(),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          console.log(values);
          try {
            setIsLoading(true);
            const result = await axios.post(
              process.env.REACT_APP_API + "/tasks/",
              {
                title: values.title,
                description: values.description,
                user_id: userId,
              },
              { headers: { Authorization: `Bearer ${token}` } }
            );
            console.log(result);

            setIsLoading(false);
            navigate("/home");
          } catch (err) {
            setError(
              err.response.data.message ||
                err.response.data ||
                "Something went wrong."
            );
            console.log(err);
          }
          setSubmitting(false);
        }}
      >
        <Form className="new-task__form">
          <h2>Create a new task</h2>

          <Input name={"title"} label={"Enter the task's title"} />
          <Input
            name={"description"}
            textarea
            label={"Enter the task's description"}
          />
          <Button
            type="submit"
            className="new-task__btn"
            variant="contained"
            sx={{
              width: 180,
              bgcolor: "#56da6c",
              color: "white",
              mt: 2,
              fontWeight: 800,
            }}
          >
            <span>Create Task</span> {isLoading && <SpinnerComponent />}
          </Button>

          {error && (
            <Alert sx={{ mt: 2 }} severity="error">
              {error}
            </Alert>
          )}
        </Form>
      </Formik>
    </Container>
  );
}
