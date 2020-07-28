import * as types from '../types';

const initialState = {
	id: localStorage.getItem('id') || '',
	question: localStorage.getItem('question') || '',
	token: localStorage.getItem('token') || '',
    bee: false,
	message: '',
	error: {},
	isFetching: false,
	isLoggedIn: false
};

const dialogueReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.DISPLAY_QUESTION:
			return {
				...state,
				isFetching: true,
				error: ''
			};
		case types.DISPLAY_CHOICE:
			return {
				...state,
				id: action.payload.id,
				question: action.payload.question,
				token: action.payload.token,
				bee: false,
				isLoggedIn: true
			};
		default:
			return state;
	}
};


export default dialogueReducer;