import React from 'react';
import styled from 'styled-components';
import { MAP_WIDTH, MAP_HEIGHT } from '../../utils/constants';

const Map = () => {
	return <MapDiv />;
};

export default Map;

const MapDiv = styled.div`
	width: ${MAP_WIDTH}px;
	height: ${MAP_HEIGHT}px;
	background-color: grey;
	border: 1px solid black;
	margin: 10px auto;
`;
