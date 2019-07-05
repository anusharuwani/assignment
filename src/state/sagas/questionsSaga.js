import { takeLatest, put, take, select } from 'redux-saga/effects';
import {
  REQUEST,
  SUCCESS,
  FAILURE,
  GET_QUESTION_LIST,
  GET_SELECT_OPTIONS,
} from '../types';
import { selectOptions, questions } from '../../data';

function* getQuestionList(action) {

  if (!action.payload.searchApplied) {
    yield put({ type: GET_QUESTION_LIST + SUCCESS, payload: questions });
  } else {
    const searchKeys = Object.keys(action.payload.searchValues);
    const { searchValues } = action.payload;

    const filteredQuestions = questions.filter(item => {

      return (
        item.question.includes(searchValues.searchText) ||
        item.category === searchValues.category ||
        item.state === searchValues.state ||
        item.questionGroup.includes(searchValues.questionGroup) ||
        item.license === searchValues.license ||
        item.status === searchValues.status ||
        item.display === searchValues.display
      )
    })

    yield put({ type: GET_QUESTION_LIST + SUCCESS, payload: filteredQuestions });
  }
}

function* getSelectionOptions(action) {
  yield put({ type: GET_SELECT_OPTIONS + SUCCESS, payload: selectOptions });
}

export default function* watcher() {
  yield takeLatest(GET_QUESTION_LIST + REQUEST, getQuestionList);
  yield takeLatest(GET_SELECT_OPTIONS + REQUEST, getSelectionOptions);
}