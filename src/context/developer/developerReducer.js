import { SEARCH_USERS, CLEAR_USERS, GET_USER } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        developers: action.payload,
      };
    default:
      return state;
  }
};
