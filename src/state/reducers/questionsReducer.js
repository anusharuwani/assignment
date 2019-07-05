import { REQUEST, SUCCESS, FAILURE, GET_QUESTION_LIST, GET_SELECT_OPTIONS, SET_SEARCH_FIELD } from '../types';

const initialState = {
  questionList: [],
  options: null,
  searchValues: {
    searchText: undefined,
    category: undefined,
    state: undefined,
    questionGroup: undefined,
    license: undefined,
    status: undefined,
    display: undefined
  }
};

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_SELECT_OPTIONS + SUCCESS:
      return {
        ...state,
        options: action.payload,
        loading: false
      };
    case GET_QUESTION_LIST + SUCCESS:
      return {
        ...state,
        questionList: action.payload,
        loading: false
      }
    case SET_SEARCH_FIELD:
      return {
        ...state,
        searchValues: action.payload
      }
    default:
      return state;
  }
}