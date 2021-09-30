import React from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { SignupSchema } from "./SignUpSchema";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
};

const ValidationSchema = () => {
  const [user, setUser] = React.useState(null);

  const postUserInfo = async (values) => {
    try {
      const { data } = await axios.post("http://localhost:3001/user", values);
      return !data.error ? setUser(data) : setUser(data.message);
    } catch (error) {
      return console.log(error);
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          postUserInfo(values).then((res) => setUser(res));
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="firstName" />
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
            <Field name="lastName" />
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
            <Field name="email" type="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
      {user && <p>{JSON.stringify(user)}</p>}
    </div>
  );
};

export default ValidationSchema;
