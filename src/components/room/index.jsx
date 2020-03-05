import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { SPRITE_SIZE } from '../../utils/constants';
import Bee from '../bee';
import {
	titlePrimary,
	titleSecondary,
	inputBackground,
	wallBackground
} from '../../styles';

// j = x, i = y

const Room = room => {
	return (
		<RoomDiv i={room.i} j={room.j} wall={room.wall}>
			{room.bee ? <Bee question={room.question} /> : null}
		</RoomDiv>
	);
};

export default connect(state => state)(Room);

const RoomDiv = styled.div`
	height: ${SPRITE_SIZE}px;
	width: ${SPRITE_SIZE}px;
	background-color: ${props => {
		return props.wall
			? wallBackground
			: props.i % 2 === 0
			? props.j % 2 === 0
				? titleSecondary
				: titlePrimary
			: props.j % 2 === 1
			? titleSecondary
			: titlePrimary;
	}};
	border: 1px solid ${inputBackground};
	box-sizing: border-box;
`;
