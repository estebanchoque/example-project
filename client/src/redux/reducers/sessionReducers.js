import * as types from "../types/sessionTypes";

const initialState = {
  token: null,
  isAuth: !!window.localStorage.getItem("session"),
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNIN_REQUEST:
      return {
        ...state,
      };

    case types.SIGNIN_SUCCESS:
      return {
        ...state,
      };

    case types.SIGNIN_FAILED:
      return {
        ...state,
      };

    case types.SIGNOUT_REQUEST:
      return {
        ...state,
      };

    case types.SIGNIN_SUCCESS:
      return {
        ...state,
      };

    case types.SIGNOUT_FAILED:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default sessionReducer;
