import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
	WhiteDiv,
	inputBackground,
	wallBackground,
	mobile,
} from '../../styles';
import {
	MAP_HEIGHT,
	MAP_WIDTH,
	MAP_HEIGHT_MOB,
	MAP_WIDTH_MOB,
} from '../../utils/constants';
import winnerBee from '../../styles/winnerBee.png';

const Complete = ({ game: { isFinished } }) => {
	return (
		<CompleteContainer isFinished={isFinished}>
			<CompletedDiv>
				<WinnerImg src={winnerBee} alt="winner" />
				<h2>Congratulations!</h2>
			</CompletedDiv>
		</CompleteContainer>
	);
};

export default connect((state) => state)(Complete);

const CompleteContainer = styled.div`
	position: absolute;
	z-index: 500;
	height: ${MAP_HEIGHT}px;
	width: ${MAP_WIDTH}px;
	/* display: flex; */
	display: ${(props) => (props.isFinished ? 'flex' : 'none')};
	justify-content: center;
	align-items: center;
	background-color: ${inputBackground};
	@media ${mobile} {
		height: ${MAP_HEIGHT_MOB}px;
		width: ${MAP_WIDTH_MOB}px;
	}
`;

const CompletedDiv = styled(WhiteDiv)`
	height: 300px;
	width: 500px;
	text-align: center;
	color: white;
	border: 1px solid black;
	background-color: ${wallBackground};

	h2 {
		margin: 0;
	}

	@media ${mobile} {
		width: ${MAP_WIDTH_MOB}px;
		height: ${MAP_HEIGHT_MOB}px;
	}
`;

const WinnerImg = styled.img`
	height: 100px;
	width: 100px;
`;
