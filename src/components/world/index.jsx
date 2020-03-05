import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { MAP_WIDTH, MAP_HEIGHT } from '../../utils/constants';
import Player from '../player';
import Map from '../map';
import { getRooms, initializePlayer } from '../../state/actions/game';
import Dialogue from "../dialogue";

const World = ({
	auth: { isLoggedIn },
	getRooms,
	initializePlayer,
	history
}) => {
	useEffect(() => {
		getRooms();
		initializePlayer();
	}, []);

	return (
		<div>
				<MainDiv>
					<Dialogue/>
					<WorldDiv>
						<Map />
						<Player />
					</WorldDiv>
				</MainDiv>
		</div>
	);
};

export default withRouter(
	connect(state => state, { getRooms, initializePlayer })(World)
);

const WorldDiv = styled.div`
	position: relative;
	width: ${MAP_WIDTH}px;
	height: ${MAP_HEIGHT}px; 
`;

const MainDiv = styled.div`
	display: flex;
	justify-content:space-between;
	height: ${MAP_HEIGHT}px;
	width: 1200px;
`
