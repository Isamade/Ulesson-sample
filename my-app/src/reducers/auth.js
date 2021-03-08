import {
  USER_LOADED,
  NETWORK_ERROR,
} from '../actions/types';

const initialState = {
  loading: true,
  message: null,
  subjects: []
};

const auth = function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        loading: false,
        subjects: payload.subjects,
        message: payload.message
      };
    case NETWORK_ERROR:
      return {
        ...state,
        loading: false,
        subjects: [],
        message: 'Network Failure',
      };
    default:
      return state;
  }
}

export default auth;
