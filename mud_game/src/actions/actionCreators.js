import * as types from "./actionTypes";
import { Axios } from "../utils/axios";

export const register = (credentials, history) => dispatch => {
  dispatch({ type: types.REQUEST_START });
  Axios()
    .post(`${process.env.REACT_APP_API_BASE_URL}api/registration/`, credentials)
    .then(res => {
      localStorage.setItem("username", res.data.username);
      localStorage.setItem("token", res.data.token);
      dispatch({ type: types.REGISTER_SUCCESS, payload: res.data });
      history.push("/");
    })
    .catch(error => {
      dispatch({ type: types.REGISTER_FAILURE, payload: error.message });
      alert("Username already exists");
    });
};

export const login = (credentials, history) => dispatch => {
  dispatch({ type: types.REQUEST_START });
  Axios()
    .post(`${process.env.REACT_APP_API_BASE_URL}api/login/`, credentials)
    .then(res => {
      localStorage.setItem("username", res.data.username);
      localStorage.setItem("token", res.data.token);
      dispatch({ type: types.LOGIN_SUCCESS, payload: res.data });
      history.push("/");
    })
    .catch(error => {
      dispatch({ type: types.LOGIN_FAILURE, payload: error });
    });
};

export const logout = () => {
  localStorage.clear();
  return { type: types.LOGOUT };
};