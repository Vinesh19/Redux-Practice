export const GET_POST_ACTION = "GET_POST_ACTION";
export const GET_POST_SUCCESS = `${GET_POST_ACTION}_SUCCESS`;
export const GET_POST_FAILURE = `${GET_POST_ACTION}_FAILURE`;

export const CREATE_POST_ACTION = "CREATE_POST_ACTION";
export const CREATE_POST_SUCCESS = `${CREATE_POST_ACTION}_SUCCESS`;
export const CREATE_POST_FAILURE = `${CREATE_POST_ACTION}_FAILURE`;

// Action Creators
export const getPostAction = () => ({
  type: GET_POST_ACTION,
});

export const getPostSuccessAction = (payload) => ({
  type: GET_POST_SUCCESS,
  payload,
});

export const getPostFailureAction = (payload) => ({
  type: GET_POST_FAILURE,
  payload,
});

export const createPostAction = (payload) => ({
  type: CREATE_POST_ACTION,
  payload,
});

export const createPostSuccessAction = (payload) => ({
  type: CREATE_POST_SUCCESS,
  payload,
});

export const createPostFailureAction = (payload) => ({
  type: CREATE_POST_FAILURE,
  payload,
});
