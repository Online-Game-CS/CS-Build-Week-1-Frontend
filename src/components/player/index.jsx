/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import playerImg from './player.png';
import { movePlayer } from '../../state/actions/game';
import {SPRITE_SIZE} from '../../utils/constants'

const Player = ({
	game: {
		player: { position }
	},
	movePlayer
}) => {
	useEffect(() => {
		window.addEventListener('keyup', e => {
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

	return <PlayerDiv position={position}>
		<PlayerImg src={playerImg} alt=""/>
	</PlayerDiv> ;
};

export default connect(state => state, {
	movePlayer
})(Player);

const PlayerDiv = styled.div`
position: absolute;
top: ${props => props.position[1]}px;
left: ${props => props.position[0]}px;
width: ${SPRITE_SIZE}px;
height: ${SPRITE_SIZE}px;
`;

const PlayerImg = styled.img`
width: ${SPRITE_SIZE}px;
height: ${SPRITE_SIZE}px;
`