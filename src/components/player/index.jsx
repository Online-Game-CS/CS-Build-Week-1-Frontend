/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import walkSprite from './player_walk.png';
import {
	movePlayer,
} from '../../state/actions/game';

const Player = ({
	game: {
		player: { position }
	},
	movePlayer,
}) => {
	useEffect(() => {
		window.addEventListener('keydown', e => {
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

	return <PlayerDiv position={position} />;
};

export default connect(state => state, {
	movePlayer,
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
