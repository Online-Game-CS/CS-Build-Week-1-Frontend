import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<NavContainer>
			<h1>Lambda MUD</h1>
			<div>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/game">Game</NavLink>
				<NavLink to="/about">About</NavLink>
			</div>

			<div>
				<button type="button">Login</button>
				<button type="button">Sign Up</button>
			</div>
		</NavContainer>
	);
};

export default NavBar;

const NavContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
`;
