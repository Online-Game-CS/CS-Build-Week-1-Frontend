/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import walkSprite from './player_walk.png';
import {
	movePlayerUp,
	movePlayerDown,
	movePlayerRight,
	movePlayerLeft
} from '../../state/actions/player';

const Player = ({
	player: { position },
	movePlayerUp,
	movePlayerDown,
	movePlayerRight,
	movePlayerLeft
}) => {
	useEffect(() => {
		window.addEventListener('keydown', e => {
			e.preventDefault();
			switch (e.keyCode) {
				case 38:
				return 	movePlayerUp();
				case 40:
					return movePlayerDown();
				case 39:
					return movePlayerRight();
				case 37:
					return movePlayerLeft();
				default:
					return e.keyCode;
			}
		});
	}, []);

	return <PlayerDiv position={position} />;
};

export default connect(state => state, {
	movePlayerUp,
	movePlayerDown,
	movePlayerRight,
	movePlayerLeft
})(Player);

const PlayerDiv = styled.div`
position: absolute;
top: ${props => props.position[1]}px;
left: ${props => props.position[0]}px;
background-image: url('${walkSprite}');
background-position: 0 0;
width: 40px;
height: 40px;
`;
