import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import bee from '../../styles/bee.png';
import speaker from '../../styles/speaker.png';
import { logout } from '../../state/actions/auth';

const NavBar = ({ auth: { isLoggedIn }, logout, history }) => {
	return (
		<NavContainer>
			<div>
				<Logo src={bee} />
			</div>

			<LeftContainer>
				<LogoutButtonContainer>
					{isLoggedIn && (
						<button type="button" onClick={() => logout(history)}>
							Logout
						</button>
					)}
				</LogoutButtonContainer>
				<Logo src={speaker} />
			</LeftContainer>
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
`;

const LogoutButtonContainer = styled.div`
padding-right: 2rem;
`;

const LeftContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;
