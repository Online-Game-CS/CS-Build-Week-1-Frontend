import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { login } from '../../state/actions/auth';

function FormTemplate({ touched, errors, auth }) {
  return (
    <div>
      <h1> Login</h1>
      <Form className="formik-form">
        <div>
          {touched.username && errors.username}
          <Field
            type="text"
            name="username"
            placeholder="Username"
          />
        </div>
        <div className="spaced-div">
          {touched.password && errors.password}
          <Field
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        { // If credentials are invalid:
          (auth.error && auth.error.response && auth.error.response.status === 401) &&
            <div className="error-message">
                <p>Invalid credentials. Please try again.</p>
            </div>
        }
        <button type="submit" className="register-button">
          Login
        </button>
      </Form>
        <p>
          <Link to="/register" style={{ textDecoration: "none" }}>
            Register
          </Link>{" "}
        </p>
    </div>
  );
}
const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
//   validationSchema: Yup.object().shape({
//     username: Yup.string().required(
//       "Username is required"
//     ),
//     password: Yup.string()
//       .min(
//         3,
//         "Try again."
//       )
//       .required
//   }),

  handleSubmit(values, {props} ) {
    props.login(values, props.history)
  }
})(FormTemplate);

export default connect(
  state => state, { login }
) (FormikLoginForm)