import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { register } from "../../state/actions/auth";

function FormTemplate({ touched, errors }) {
  return (
    <div>
      <h1> Register</h1>
      <Form className="formik-form">
        <div>
          {touched.username && errors.username}
          <Field
            type="text"
            name="username"
            placeholder="Username"
          />
        </div>
        <div>
          {touched.password1 && errors.password1}
          <Field
            type="password"
            name="password1"

            placeholder="password"
          />
        </div>
        <div>
          {touched.password2 && errors.password2}
          <Field
            type="password"
            name="password2"
            placeholder="confirm password"
          />
        </div>

        <button type="submit">
          Register
        </button>
          <p>
            <Link to="/login" style={{ textDecoration: "none" }}>
             Log in
            </Link>
          </p>
      </Form>
    </div>
  );
}
const FormikRegisterForm = withFormik({
  mapPropsToValues({ username, password1, password2 }) {
    return {
      username: username || "",
      password1: password1 || "",
      password2: password2 || ""
    };
  },
//   Validation //
//   validationSchema: Yup.object().shape({
//     username: Yup.string().required(
//       " Username is required "
//     ),
//     password: Yup.string()
//       .min(
//         6,
//         "You password must have 6 characters. Try again."
//       )
//       .required("A password is required")
//   }),
  handleSubmit(values, { props }) {
    props.register(values, props.history);
  }
})(FormTemplate);

export default connect(state => state, { register })(FormikRegisterForm);
