import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Player from '../player';
import Map from '../map';
import { MAP_WIDTH, MAP_HEIGHT } from '../../utils/constants';
import { initializePlayer } from '../../state/actions/game';
import Dialogue from '../dialogue';

const World = ({ initializePlayer }) => {
	useEffect(() => {
		initializePlayer();
	}, []);

	return (
		<div>
			<MainDiv>
				<Dialogue />
				<WorldDiv>
					<Map />
					<Player />
				</WorldDiv>
			</MainDiv>
		</div>
	);
};

export default withRouter(connect(state => state, { initializePlayer })(World));

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
	width: 1200px;
`;
