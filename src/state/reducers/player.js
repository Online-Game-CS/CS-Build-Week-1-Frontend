import * as types from '../types';

const initialState = {
	position: [0, 0]
};

const playerReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.MOVE_PLAYER_UP:
			return {
				...state,
				position: action.payload
			};
		case types.MOVE_PLAYER_DOWN:
			return {
				...state,
				position: action.payload
			};
		case types.MOVE_PLAYER_RIGHT:
			return {
				...state,
				position: action.payload
			};
		case types.MOVE_PLAYER_LEFT:
			return {
				...state,
				position: action.payload
			};
		default:
			return state;
	}
};

export default playerReducer;
