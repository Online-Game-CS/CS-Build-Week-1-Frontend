import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Player from '../player';
import Map from '../map';
import { MAP_WIDTH, MAP_HEIGHT } from '../../utils/constants';
import { initializePlayer, completeGame } from '../../state/actions/game';
import Dialogue from '../dialogue';
import Fired from '../fired';
import Complete from '../complete';

const World = ({
	game: {
		player: { score }
	},
	initializePlayer,
	completeGame,
	history
}) => {
	useEffect(() => {
		const checkAuth = () => {
			const token = localStorage.getItem('token');
			if (!token) {
				history.push('/')
			}
		};
		checkAuth();
		initializePlayer();
	}, []);

	useEffect(() => {
		if (score === 10) {
			completeGame();
		}
	}, [score]);

	return (
		<div>
			<MainDiv>
				<Dialogue />
				<WorldDiv>
					<Complete />
					<Fired />
					<Map />
					<Player />
				</WorldDiv>
			</MainDiv>
		</div>
	);
};

export default withRouter(
	connect(state => state, { initializePlayer, completeGame })(World)
);

const WorldDiv = styled.div`
	position: relative;
	flex-wrap: wrap;
	margin: 15px;
	width: ${MAP_WIDTH}px;
	height: ${MAP_HEIGHT}px;
	box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.35);
`;

const MainDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 1200px;
	height: ${MAP_HEIGHT}px;
`;
