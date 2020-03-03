/* eslint-disable import/prefer-default-export */
import store from '../store';
import * as types from '../types';
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from '../../utils/constants';

export const movePlayerUp = () => async dispatch => {
	const currentPosition = await store.getState().player.position;

	if (currentPosition[1] !== 0) {
		dispatch({
			type: types.MOVE_PLAYER_UP,
			payload: [currentPosition[0], currentPosition[1] - SPRITE_SIZE]
		});
	}
};
export const movePlayerDown = () => async dispatch => {
	const currentPosition = await store.getState().player.position;

	if (currentPosition[1] !== MAP_HEIGHT - SPRITE_SIZE) {
		dispatch({
			type: types.MOVE_PLAYER_DOWN,
			payload: [currentPosition[0], currentPosition[1] + SPRITE_SIZE]
		});
	}
};

export const movePlayerRight = () => async dispatch => {
	const currentPosition = await store.getState().player.position;

	if (currentPosition[0] !== MAP_WIDTH - SPRITE_SIZE) {
		dispatch({
			type: types.MOVE_PLAYER_RIGHT,
			payload: [currentPosition[0] + SPRITE_SIZE, currentPosition[1]]
		});
	}
};
export const movePlayerLeft = () => async dispatch => {
	const currentPosition = await store.getState().player.position;

	if (currentPosition[0] !== 0) {
		dispatch({
			type: types.MOVE_PLAYER_LEFT,
			payload: [currentPosition[0] - SPRITE_SIZE, currentPosition[1]]
		});
	}
};
