import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from '../layout';

import Home from '../components/home';
import World from '../components/world';
import FormikLoginForm from '../components/loginForm/LoginForm';
import FormikRegisterForm from '../components/registerForm/RegisterForm';
import Credits from '../components/credit';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Layout exact path="/" component={Home} />
				<Layout path='/login' component={FormikLoginForm}/>
				<Layout path='/register' component={FormikRegisterForm}/>
				<Layout path="/game" component={World} />
				<Layout path="/credits" component={Credits} />
			</Switch>
		</BrowserRouter>
	);
};

export default connect(state => state)(AppRouter);
