/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import playerImg from './player.png';
import { movePlayer } from '../../state/actions/game';
import { SPRITE_SIZE, SPRITE_SIZE_MOB } from '../../utils/constants';
import { mobile } from '../../styles';

const Player = ({
	game: {
		player: { position },
	},
	movePlayer,
}) => {
	const [mobilePosition, setMobilePosition] = useState([0, 0]);
	useEffect(() => {
		window.addEventListener('keyup', (e) => {
			e.preventDefault();
			switch (e.keyCode) {
				case 38:
					return movePlayer('n');
				case 40:
					return movePlayer('s');
				case 39:
					return movePlayer('e');
				case 37:
					return movePlayer('w');
				default:
					return e.keyCode;
			}
		});
	}, []);

	useEffect(() => {
		const mobilePositionCalc = [
			(position[0] / SPRITE_SIZE) * SPRITE_SIZE_MOB,
			(position[1] / SPRITE_SIZE) * SPRITE_SIZE_MOB,
		];
		setMobilePosition(mobilePositionCalc);
	}, [position]);

	return (
		<PlayerDiv position={position} mobilePosition={mobilePosition}>
			<PlayerImg src={playerImg} alt="" />
		</PlayerDiv>
	);
};

export default connect((state) => state, {
	movePlayer,
})(Player);

const PlayerDiv = styled.div`
	position: absolute;
	top: ${(props) => props.position[1]}px;
	left: ${(props) => props.position[0]}px;
	width: ${SPRITE_SIZE}px;
	height: ${SPRITE_SIZE}px;

	@media ${mobile} {
		top: ${(props) => props.mobilePosition[1]}px;
		left: ${(props) => props.mobilePosition[0]}px;
		width: ${SPRITE_SIZE_MOB}px;
		height: ${SPRITE_SIZE_MOB}px;
	}
`;

const PlayerImg = styled.img`
	width: ${SPRITE_SIZE}px;
	height: ${SPRITE_SIZE}px;

	@media ${mobile} {
		width: ${SPRITE_SIZE_MOB}px;
		height: ${SPRITE_SIZE_MOB}px;
	}
`;
