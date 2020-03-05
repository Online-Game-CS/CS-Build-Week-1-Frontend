import * as types from '../types';

const initialState = {
	rooms: [],
	player: {
		position: [0, 0],
		currentRoom: '',
		score: 0
	},
	isFetching: false,
	isFired: false,
	isFinished: false
};

const gameReducer = (state = initialState, action) => {
	switch (action.type) {
		// Starting Requests
		case types.GET_ROOMS_START:
		case types.INIT_PLAYER_START:
		case types.MOVE_PLAYER_START:
		case types.COMPLETE_CHALLENGE_START:
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
				player: { ...state.player, ...action.payload }
			};

		case types.MOVE_PLAYER_SUCCESS:
			return {
				...state,
				isFetching: false,
				player: {
					...state.player,
					...action.payload
				}
			};

		case types.COMPLETE_CHALLENGE_SUCCESS:
			return {
				...state,
				isFetching: false,
				player: {
					...state.player,
					score: action.payload.score
				}
			};

		case types.FAIL_CHALLENGE:
			return {
				...state,
				isFired: true
			};

		case types.COMPLETE_GAME:
			return {
				...state,
				isFinished: true
			};

		// Request Failures
		case types.GET_ROOMS_FAILURE:
		case types.INIT_PLAYER_FAILURE:
		case types.COMPLETE_CHALLENGE_FAILURE:
			return {
				...state,
				isFetching: false
			};

		default:
			return state;
	}
};

export default gameReducer;
