import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { register } from "../../../actions/actionCreators";

function FormTemplate({ touched, errors }) {
  return (
    <div>
      <h1> Register</h1>
      <Form className="formik-form">
        <div>
          {touched.email && errors.email}
          <Field type="email" name="email" class="input" placeholder="Email" />
        </div>
        <div>
          {touched.username && errors.username}
          <Field
            type="text"
            name="username"
            class="input"
            placeholder="Username"
          />
        </div>
        <div>
          {touched.password && errors.password}
          <Field
            type="password"
            name="password"
            class="input"
            placeholder="Password"
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
  mapPropsToValues({ email, username, password }) {
    return {
      email: email || "",
      username: username || "",
      password: password || ""
    };
  },
  // Validation //
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("An email is required")
      .required("Please, add an email"),
    username: Yup.string().required(
      " Username is required "
    ),
    password: Yup.string()
      .min(
        6,
        "You password must have 6 characters. Try again."
      )
      .required("A password is required")
  }),
  handleSubmit(values, { props }) {
    props.register(values, props.history);
  }
})(FormTemplate);

export default connect(state => state, { register })(FormikRegisterForm);
