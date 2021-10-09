import * as types from "../types/postTypes";

const initialState = {
  all: [],
  detail: {},
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL:
      return {
        ...state,
        all: action.payload,
      };

    case types.GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };

    default:
      return state;
  }
};

export default postReducer;
