import * as types from '../types';

const initialState = {
    name: localStorage.getItem('name') || '',
    score: localStorage.getItem('score') || '',
    // complete : localStorage.getItem("complete") || ''
};

const completeChallengeReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.MOVE_PLAYER_UP:
			return {
				...state,
                score: action.payload.score,
                name:  action.payload.name,
                // complete: action.payload.complete
			};
		default:
			return state;
	}
};

export default completeChallengeReducer;
