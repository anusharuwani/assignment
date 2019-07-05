import { LOGIN, REQUEST, SUCCESS, FAILURE } from '../types';

const initialState = {
  userName: '',
  accessToken: '',
  loading: true,
};

export default (state = initialState, action) => {
  switch(action.type) {
    case LOGIN + REQUEST:
      return {
        ...state,
        loading: true
      };
    case LOGIN + SUCCESS:
      return {
        userName: action.payload.userName,
        accessToken: action.payload.accessToken,
        loading: false
      };
    case LOGIN + FAILURE:
      return initialState;
    default:
      return state;
  }
}