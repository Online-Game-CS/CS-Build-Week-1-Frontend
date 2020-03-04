import * as types from '../types';

const initialState = {
	rooms: [],
	map: [],
	isFetching: false,
	isFired: false,
  showDialog: false,
  currentRoom: '',
};

const gameReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.GET_ROOMS_SUCCESS:
			return {
				...state,
				rooms: action.payload
			};
		default:
			return state;
	}
};

export default gameReducer;
