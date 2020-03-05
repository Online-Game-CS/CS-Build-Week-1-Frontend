import * as types from '../types';
import { axiosWithAuth } from '../../utils/axios';
import store from '../store';
import { SPRITE_SIZE } from '../../utils/constants';

export const getRooms = () => dispatch => {
	dispatch({ type: types.GET_ROOMS_START });
	axiosWithAuth()
		.get(`${process.env.REACT_APP_API_BASE_URL}api/adv/getrooms/`)
		.then(res => {
			dispatch({
				type: types.GET_ROOMS_SUCCESS,
				payload: res.data.rooms
			});
		})
		.catch(err => {
			dispatch({
				type: types.GET_ROOMS_FAILURE,
				payload: err.message
			});
		});
};

export const initializePlayer = () => dispatch => {
	dispatch({ type: types.INIT_PLAYER_START });
	axiosWithAuth()
		.get(`${process.env.REACT_APP_API_BASE_URL}api/adv/init/`)
		.then(res => {
			dispatch({
				type: types.INIT_PLAYER_SUCCESS,
				payload: res.data
			});
		})
		.catch(err => {
			dispatch({
				type: types.INIT_PLAYER_FAILURE,
				payload: err.message
			});
		});
};

export const movePlayerUp = () => async dispatch => {
	dispatch({ type: types.MOVE_PLAYER_START });

	try {
		const currentPosition = await store.getState().game.player.position;

		const response = await axiosWithAuth().post(
			`${process.env.REACT_APP_API_BASE_URL}api/adv/move/`,
			{ direction: 'n' }
		);

		dispatch({
			type: types.MOVE_PLAYER_UP,
			payload: {
				newPosition: [currentPosition[0], currentPosition[1] - SPRITE_SIZE],
				details: response.data
			}
		});
	} catch (err) {
		dispatch({
			type: types.MOVE_PLAYER_FAILURE,
			payload: err.message
		});
	}
};
export const movePlayerDown = () => async dispatch => {
	dispatch({ type: types.MOVE_PLAYER_START });

	try {
		const currentPosition = await store.getState().game.player.position;
		const response = await axiosWithAuth().post(
			`${process.env.REACT_APP_API_BASE_URL}api/adv/move/`,
			{ direction: 's' }
		);

		dispatch({
			type: types.MOVE_PLAYER_DOWN,
			payload: {
				newPosition: [currentPosition[0], currentPosition[1] + SPRITE_SIZE],
				details: response.data
			}
		});
	} catch (err) {
		dispatch({
			type: types.MOVE_PLAYER_FAILURE,
			payload: err.message
		});
	}
};
export const movePlayerRight = () => async dispatch => {
	dispatch({ type: types.MOVE_PLAYER_START });

	try {
		const currentPosition = await store.getState().game.player.position;
		const response = await axiosWithAuth().post(
			`${process.env.REACT_APP_API_BASE_URL}api/adv/move/`,
			{ direction: 'e' }
		);

		dispatch({
			type: types.MOVE_PLAYER_RIGHT,
			payload: {
				newPosition: [currentPosition[0] + SPRITE_SIZE, currentPosition[1]],
				details: response.data
			}
		});
	} catch (err) {
		dispatch({
			type: types.MOVE_PLAYER_FAILURE,
			payload: err.message
		});
	}
};
export const movePlayerLeft = () => async dispatch => {
	dispatch({ type: types.MOVE_PLAYER_START });

	try {
		const currentPosition = await store.getState().game.player.position;
		const response = await axiosWithAuth().post(
			`${process.env.REACT_APP_API_BASE_URL}api/adv/move/`,
			{ direction: 'w' }
		);

		dispatch({
			type: types.MOVE_PLAYER_LEFT,
			payload: {
				newPosition: [currentPosition[0] - SPRITE_SIZE, currentPosition[1]],
				details: response.data
			}
		});
	} catch (err) {
		dispatch({
			type: types.MOVE_PLAYER_FAILURE,
			payload: err.message
		});
	}
};

