import React from 'react';
import styled from 'styled-components';
import { WhiteDiv, FirstTitle, Menu  } from "../../styles";
import titleImg from '../../styles/title.png';


const Home = () => {
	return (
		<WhiteDiv>
			<FirstTitle>
				<TitleImg  src={titleImg} />
				<br/>
				<Menu>
					<a href="/games">Play</a>
					<a href="/login">Login</a>
					<a href="/credits">Credits</a>
				</Menu>
			</FirstTitle>
		</WhiteDiv>
	);
};

export default Home;


const TitleImg = styled.img`
	height: auto;
	width:  auto;
`;
