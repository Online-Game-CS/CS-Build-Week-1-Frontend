import * as types from '../types';

const initialState = {
	rooms: [],
	map: [],
	player: {
		details: {},
		position: [0, 0]
	},
	isFetching: false,
	isFired: false,
	showDialog: false,
	currentRoom: ''
};

const gameReducer = (state = initialState, action) => {
	switch (action.type) {
		// Starting Requests
		case types.GET_ROOMS_START:
		case types.INIT_PLAYER_START:
		case types.MOVE_PLAYER_START:
			return {
				...state,
				isFetching: true
			};

		// Request Successes
		case types.GET_ROOMS_SUCCESS:
			return {
				...state,
				rooms: action.payload,
				isFetching: false
			};

		case types.INIT_PLAYER_SUCCESS:
			return {
				...state,
				isFetching: false,
				player: { ...state.player, details: action.payload }
			};

		case types.MOVE_PLAYER_UP:
		case types.MOVE_PLAYER_DOWN:
		case types.MOVE_PLAYER_RIGHT:
		case types.MOVE_PLAYER_LEFT:
			return {
				...state,
				isFetching: false,
				player: {
					position: action.payload.newPosition,
					details: {
						...state.player.details,
						title: action.payload.details.title,
						description: action.payload.details.description,
						players: action.payload.players,
						error: action.payload.err_msg
					}
				}
			};


		// Request Failures
		case types.GET_ROOMS_FAILURE:
		case types.INIT_PLAYER_FAILURE:
			return {
				...state,
				isFetching: false
			};

		default:
			return state;
	}
};

export default gameReducer;
