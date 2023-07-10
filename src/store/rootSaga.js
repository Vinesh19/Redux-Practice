import { all } from "redux-saga/effects";
import postSaga from "./posts/saga";

export default function* rootSaga() {
  yield all([...postSaga]);
}
