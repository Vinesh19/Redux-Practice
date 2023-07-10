import { GET_POST_SUCCESS, GET_POST_FAILURE, CREATE_POST_SUCCESS, CREATE_POST_FAILURE } from './action';

export const INITIAL_STATE = {
  limit: 0,
  posts: [],
  skip: 0,
  total: 0,
  error: "",
};

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  console.log("reducer", { type, payload });
  switch (type) {
    case GET_POST_SUCCESS:
      return { ...state, ...payload, error: "" };
    case GET_POST_FAILURE:
      return { ...state, error: payload.error };

    case CREATE_POST_SUCCESS:
      return { ...state, posts: [...state.posts, payload], error: "" };
    case CREATE_POST_FAILURE:
      return { ...state, error: payload.error };

    default:
      return state;
  }
};

export default reducer;
