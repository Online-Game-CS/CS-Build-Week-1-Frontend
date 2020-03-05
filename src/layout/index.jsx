import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from '../components/nav';
import { backgroundPrimary } from '../styles';
import store from '../state/store';

const Layout = ({ component: Component, ...rest }) => {
	const checkAuth = () => {
		const token = localStorage.getItem('token');

		if (token) {
			store.dispatch({ type: 'LOGIN_SUCCESS', payload: {token} });
		}
	};

	useEffect(() => {
		checkAuth();
	}, []);

	return (
		<Route
			{...rest}
			render={props => {
				return (
					<LayoutContainer>
						<NavBar />
						<ComponentContainer>
							<Component {...props} />
						</ComponentContainer>
					</LayoutContainer>
				);
			}}
		/>
	);
};

export default connect()(Layout);

const LayoutContainer = styled.div`
	height: 100vh;
	width: 100%;
	background-color: ${backgroundPrimary};
`;

const ComponentContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	height: 80%;
`;
