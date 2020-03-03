import * as types from "../actions/actionTypes";

const initialOnboardingState = {
  user_id: localStorage.getItem("userID") || "",
  username: localStorage.getItem("username") || "",
  token: localStorage.getItem("token") || "",
  message: "",
  error: {},
  isFetching: false,
  isLoggedIn: false
};

export const onBoardingReducer = (state = initialOnboardingState, action) => {
    switch (action.type) {
      case types.REQUEST_START:
        return {
          ...state,
          isFetching: true,
          error: ""
        };
      case types.REGISTER_SUCCESS:
        return {
          ...state,
          user_id: action.payload.id,
          username: action.payload.username,
          token: action.payload.token,
          message: action.payload.message,
          isFetching: false,
          isLoggedIn: true
        };
      case types.REGISTER_FAILURE:
        return {
          ...state,
          error: action.payload,
          isFetching: false
        };
      case types.LOGIN_SUCCESS:
        return {
          user_id: action.payload.id,
          username: action.payload.username,
          token: action.payload.token,
          message: action.payload.message,
          isFetching: false,
          isLoggedIn: true
        };
      case types.LOGIN_FAILURE:
        return {
          ...state,
          error: action.payload,
          isFetching: false,
          isLoggedIn: false
        };
      default:
        return state;
    }
  };
