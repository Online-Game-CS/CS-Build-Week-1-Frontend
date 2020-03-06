import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { register } from '../../state/actions/auth';
import { WhiteDiv, MainButton } from '../../styles';

function FormTemplate({ touched, errors }) {
	return (
		<RegisterContainer>
			<h1> Register</h1>
			<Form className="formik-form">
				<div className="field-container">
					<div className="input-title">Username</div>
					<Field type="text" name="username" />
					{touched.username && errors.username}
				</div>
				<div className="field-container">
					<div className="input-title">Password</div>
					{touched.password1 && errors.password1}
					<Field type="password" name="password1" />
				</div>
				<div className="field-container">
					<div className="input-title">Confirm Password</div>
					<Field type="password" name="password2" />
					{touched.password2 && errors.password2}
				</div>

				<MainButton type="submit" className='form-button'>Register</MainButton>
			</Form>
			<div className="login-option">
				<Link to="/login">Log in</Link>
			</div>
		</RegisterContainer>
	);
}
const FormikRegisterForm = withFormik({
	mapPropsToValues({ username, password1, password2 }) {
		return {
			username: username || '',
			password1: password1 || '',
			password2: password2 || ''
		};
	},
	//   Validation //
	//   validationSchema: Yup.object().shape({
	//     username: Yup.string().required(
	//       " Username is required "
	//     ),
	//     password: Yup.string()
	//       .min(
	//         8,
	//         "You password must have min 8 characters. Try again."
	//       )
	//       .required("A password is required")
	//   }),
	handleSubmit(values, { props }) {
		props.register(values, props.history);
	}
})(FormTemplate);

export default connect(state => state, { register })(FormikRegisterForm);

const RegisterContainer = styled(WhiteDiv)`
	height: 600px;
`;
