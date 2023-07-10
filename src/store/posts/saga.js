import { put, takeLatest, call, takeEvery } from 'redux-saga/effects';
import { getPostsApi, createPostApi } from '../../api/index';
import { GET_POST_ACTION, getPostFailureAction, getPostSuccessAction, CREATE_POST_ACTION, createPostSuccessAction, createPostFailureAction } from './action';

export function* getPostSaga() {
  try {
    // api call from saga
    const response = yield call(getPostsApi);
    console.log('getPostSaga response', response);

    yield put(getPostSuccessAction(response));
  } catch (error) {
    // fire an action from saga
    yield put(getPostFailureAction({ error: error.message }));
  }
}

export function* createPostSaga(action) {
  console.log("createdSaga", action);
  try {
    const response = yield call(createPostApi, action.payload);
    console.log('Created Data', response);

    yield put(createPostSuccessAction(response));
  }catch(error) {
    yield put(createPostFailureAction({ error: error.message }));
  }
}

export default [takeLatest(GET_POST_ACTION, getPostSaga), takeEvery(CREATE_POST_ACTION, createPostSaga)];