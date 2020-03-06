/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import bee from '../../styles/bee.png';
import { logout } from '../../state/actions/auth';

const NavBar = ({ history }) => {
	return (
		<NavContainer>
			<div onClick={() => history.push('/')}>
				<Logo src={bee} />
			</div>
			<div/>
		</NavContainer>
	);
};

export default withRouter(connect(state => state, { logout })(NavBar));

const NavContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: 50px;
	padding: 2rem 2rem 1rem 2rem;
`;

const Logo = styled.img`
	height: 53px;
	width: 53px;
	&:hover {
		cursor: pointer;
	}
`;