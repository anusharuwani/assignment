import { all } from 'redux-saga/effects';
import questionsSaga from './questionsSaga';

export default function* rootSaga() {
  yield all([
    questionsSaga(),
  ]);
}
