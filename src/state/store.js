/* eslint-disable no-underscore-dangle */
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import playerReducer from './reducers/player';
import authReducer from './reducers/auth';
import dialogueReducer from './reducers/dialogue';
import completeChallengeReducer from './reducers/completeChallenge';

const rootReducer = combineReducers({
	auth: authReducer,
	player: playerReducer,
	dialogue: dialogueReducer,
	completeChallenge : completeChallengeReducer
});

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;
