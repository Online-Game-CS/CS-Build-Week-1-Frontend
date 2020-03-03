import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from '../components/nav';

const Layout = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={props => {
				return (
					<div>
						<NavBar />
						<div>
							<Component {...props} />
						</div>
					</div>
				);
			}}
		/>
	);
};

export default connect()(Layout);
