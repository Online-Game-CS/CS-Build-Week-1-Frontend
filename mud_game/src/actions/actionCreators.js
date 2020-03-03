import * as types from "./actionTypes";
import { Axios, axiosWithAuth } from "../utils/axios";

export const register = (credentials, history) => dispatch => {
  dispatch({ type: types.REQUEST_START });
  Axios()
    .post("api/auth/register", credentials)
    .then(res => {
      localStorage.setItem("username", res.data.username);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userID", res.data.id);
      dispatch({ type: types.REGISTER_SUCCESS, payload: res.data });
      history.push("/recipes");
    })
    .catch(error => {
      dispatch({ type: types.REGISTER_FAILURE, payload: error.message });
      alert("Username already exists");
    });
};

export const login = (credentials, history) => dispatch => {
  dispatch({ type: types.REQUEST_START });
  Axios()
    .post("api/auth/login", credentials)
    .then(res => {
      localStorage.setItem("username", res.data.username);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userID", res.data.id);
      dispatch({ type: types.LOGIN_SUCCESS, payload: res.data });
      history.push("/recipes");
    })
    .catch(error => {
      dispatch({ type: types.LOGIN_FAILURE, payload: error });
    });
};

export const logout = () => {
  localStorage.clear();
  return { type: types.LOGOUT };
};