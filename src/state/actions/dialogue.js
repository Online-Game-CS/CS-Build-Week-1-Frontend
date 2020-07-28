import * as types from '../types';
import { Axios } from '../../utils/axios';

const dialogue = (credentials) => dispatch => {
	dispatch({ type: types.REQUEST_START });
	Axios()
		.post(`${process.env.REACT_APP_API_BASE_URL}api/radv/getrooms/`, credentials)
		.then(res => {
			localStorage.setItem('token', res.data.key);
			dispatch({ type: types.DISPLAY_QUESTION, payload: res.data });
		})
		.catch(error => {
			dispatch({ type: types.DISPLAY_FAILURE, payload: error.message });
		});
};

export default dialogue;