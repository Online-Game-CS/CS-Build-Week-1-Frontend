/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { WhiteDiv, Menu } from '../../styles';
import titleImg from '../../styles/title.png';
import { logout } from '../../state/actions/auth';

const Home = ({ auth: { isLoggedIn } }) => {
	return (
		<HomeContainer>
			<TitleImg src={titleImg} />
			<br />
			<Menu>
				<Link to="/game">Play</Link>
				{isLoggedIn ? (
					<div className="logout" onClick={() => logout()}>
						Logout
					</div>
				) : (
					<Link to="/login">Login</Link>
				)}
				<Link to="/credits">Credits</Link>
			</Menu>
		</HomeContainer>
	);
};

export default connect(state => state, { logout })(Home);

const TitleImg = styled.img`
	height: auto;
	width: auto;
`;

const HomeContainer = styled(WhiteDiv)`
	width: 600px;
	height: 550px;
`;
