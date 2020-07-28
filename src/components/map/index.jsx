import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
	MAP_WIDTH,
	MAP_HEIGHT,
	MAP_HEIGHT_MOB,
	MAP_WIDTH_MOB,
} from '../../utils/constants';
import { mobile } from '../../styles';
import Room from '../room';

const Map = ({ game: { rooms } }) => {
	return (
		<MapDiv>
			{rooms.map((room) => {
				return <Room key={room.id} {...room} />;
			})}
		</MapDiv>
	);
};

export default connect((state) => state)(Map);

const MapDiv = styled.div`
	width: ${MAP_WIDTH}px;
	height: ${MAP_HEIGHT}px;
	display: flex;
	flex-wrap: wrap;
	align-content: flex-start;

	@media ${mobile} {
		width: ${MAP_WIDTH_MOB}px;
		height: ${MAP_HEIGHT_MOB}px;
	}
`;
