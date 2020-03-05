import * as types from '../types';
import { axiosWithAuth } from '../../utils/axios';

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
