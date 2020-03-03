import React from 'react';
import styled from 'styled-components'
import { MAP_WIDTH, MAP_HEIGHT } from '../../utils/constants';
import Player from '../player';
import Map from '../map';

const World = () => {
	return (
		<WorldDiv>
			<Map />
			<Player />
		</WorldDiv>
	);
};

export default World;

const WorldDiv = styled.div`
position: relative;
width: ${MAP_WIDTH}px;
height: ${MAP_HEIGHT}px;
margin: 20px auto;
`
