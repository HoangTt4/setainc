import { combineReducers } from "redux";

import { FETCH_POSTS_SUCCESS, ADD_POST, FETCH_POSTS_FAILURE } from "../actions";

const initialState = {
  items: [],
  loading: false,
  error: null
};

const postsByApi = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.posts
      };

    case ADD_POST:
      console.log(state);
      return {
        ...state,
        loading: false,
        items: [action.post, ...state.items]
      };

    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  postsByApi
});

export default rootReducer;
