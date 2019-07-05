import {
  REQUEST,
  GET_QUESTION_LIST,
  GET_SELECT_OPTIONS,
  SET_SEARCH_FIELD
} from '../types';

export const getQuestions = payload => ({
  type: GET_QUESTION_LIST + REQUEST,
  payload
});

export const getSelectOptions = payload => ({
  type: GET_SELECT_OPTIONS + REQUEST,
  payload
});

export const setSearchField = payload => ({
  type: SET_SEARCH_FIELD,
  payload
});