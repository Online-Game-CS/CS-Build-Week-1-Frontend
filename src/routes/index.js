import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from '../layout';

import Home from '../components/home';
import World from '../components/world';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Layout exact path="/" component={Home} />
				<Layout path="/game" component={World} />
			</Switch>
		</BrowserRouter>
	);
};

export default connect(state => state)(AppRouter);
