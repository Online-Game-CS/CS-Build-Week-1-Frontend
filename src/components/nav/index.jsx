import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { NavLink, withRouter } from 'react-router-dom';


import { logout } from '../../state/actions/auth';

const NavBar = ({ auth: { isLoggedIn }, logout, history }) => {
	return (
		<NavContainer>
			<h1>Beyoncé&apos;s Assistant</h1>
			<div>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/about">About</NavLink>
				{isLoggedIn && <NavLink to="/game">Game</NavLink>}
			</div>
			{isLoggedIn ? (
				<button type="button" onClick={() => logout(history)}>
					Logout
				</button>
			) : (
				<div>
					<NavLink to="/login">Login</NavLink>
					<NavLink to="/register">Sign Up</NavLink>
				</div>
			)}
		</NavContainer>
	);
};

export default withRouter(connect(state => state, { logout })(NavBar));

const NavContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;

	a {
		padding: 1rem;
	}
`;
