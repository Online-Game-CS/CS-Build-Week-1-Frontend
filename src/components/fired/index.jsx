import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
	WhiteDiv,
	inputBackground,
	titlePrimary,
	wallBackground
} from '../../styles';
import { MAP_HEIGHT, MAP_WIDTH } from '../../utils/constants';

const Fired = ({ game: { isFired } }) => {
	return (
		<FiredContainer isFired={isFired}>
			<FiredDiv>
				<h2>You&apos;ve Been Fired!</h2>
			</FiredDiv>
		</FiredContainer>
	);
};

export default connect(state => state)(Fired);

const FiredContainer = styled.div`
	position: absolute;
	z-index: 500;
	height: ${MAP_HEIGHT}px;
	width: ${MAP_WIDTH}px;
	display: ${props => (props.isFired ? 'flex' : 'none')};
	justify-content: center;
	align-items: center;
	background-color: ${inputBackground};
`;

const FiredDiv = styled(WhiteDiv)`
	height: 300px;
	width: 500px;
	text-align: center;
	color: ${titlePrimary};
	border: 1px solid black;
	background-color: ${wallBackground};
`;
