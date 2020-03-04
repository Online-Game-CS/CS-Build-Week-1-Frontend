import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { MAP_WIDTH, MAP_HEIGHT } from '../../utils/constants';
import Player from '../player';
import Map from '../map';
import { getRooms } from '../../state/actions/game';

const World = ({ auth: { isLoggedIn }, getRooms, history }) => {
	useEffect(() => {
		getRooms();
	}, []);

	return (
		<div>
			{isLoggedIn ? (
				<WorldDiv>
					<Map />
					<Player />
				</WorldDiv>
			) : (
				history.push('/')
			)}
		</div>
	);
};

export default withRouter(connect(state => state, { getRooms })(World));

const WorldDiv = styled.div`
	position: relative;
	width: ${MAP_WIDTH}px;
	height: ${MAP_HEIGHT}px;
	margin: 20px auto;
`;
