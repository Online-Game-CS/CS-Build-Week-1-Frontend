import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { movePlayer } from '../../state/actions/game';
import { mobile, tablet, backgroundLight, textDark } from '../../styles';
import { DownArrow } from './ArrowDown';
import { UpArrow } from './ArrowUp';
import { LeftArrow } from './ArrowLeft';
import { RightArrow } from './ArrowRight';

const Movement = ({ movePlayer }) => {
	return (
		<MovementContainer>
			<DirectionButton onClick={() => movePlayer('w')}>
				<LeftArrow />
			</DirectionButton>
			<DirectionButton onClick={() => movePlayer('n')}>
				<UpArrow />
			</DirectionButton>
			<DirectionButton onClick={() => movePlayer('e')}>
				<RightArrow />
			</DirectionButton>
			<DirectionButton onClick={() => movePlayer('s')}>
				<DownArrow />
			</DirectionButton>
		</MovementContainer>
	);
};

export default connect((state) => state, {
	movePlayer,
})(Movement);

const MovementContainer = styled.div`
	background-color: ${backgroundLight};
	display: none;
	padding: 1rem;
	border: 2px solid ${textDark};
	margin: 2rem;
	max-width: 90vw;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	@media ${tablet} {
		display: flex;
	}
	@media ${mobile} {
		margin: 1rem;
    margin-top: 0.5rem;
    padding: 0.5rem;
	}
`;

const DirectionButton = styled.button`
	height: 4rem;
	width: 4rem;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 1.5rem;
	cursor: pointer;
	outline: none;

	@media ${mobile} {
		height: 3rem;
		width: 3rem;
		margin: 0.2rem;
	}
`;
