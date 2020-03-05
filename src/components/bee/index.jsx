import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import bee from '../../styles/bee.png';
import { SPRITE_SIZE } from '../../utils/constants';

const Bee = ({
	question,
	game: {
		player: { score }
	}
}) => {
	return (
		<BeeDiv>
			<BeeImg score={score} question={question} src={bee} alt="Bee" />
		</BeeDiv>
	);
};

export default connect(state => state)(Bee);

const BeeDiv = styled.div`
	height: ${SPRITE_SIZE}px;
	width: ${SPRITE_SIZE}px;
`;

const BeeImg = styled.img`
	height: ${SPRITE_SIZE}px;
	width: ${SPRITE_SIZE}px;
	animation: ${props =>
		props.question === props.score + 1 ? 'pulse 1.2s infinite' : 'none'};
	@keyframes pulse {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.2);
		}
		100% {
			transform: scale(1);
		}
	}
`;
