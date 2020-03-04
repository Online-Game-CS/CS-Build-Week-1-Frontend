import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { WhiteDiv, Menu } from '../../styles';
import titleImg from '../../styles/title.png';

const Home = () => {
	return (
		<HomeContainer>
			<TitleImg src={titleImg} />
			<br />
			<Menu>
				<Link to="/game">Play</Link>
				<Link to="/login">Login</Link>
				<Link to="/credits">Credits</Link>
			</Menu>
		</HomeContainer>
	);
};

export default Home;

const TitleImg = styled.img`
	height: auto;
	width: auto;
`;

const HomeContainer = styled(WhiteDiv)`
	width: 600px;
	height: 550px;
`;
