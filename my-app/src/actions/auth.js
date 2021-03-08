import axios from 'axios';
import {
  USER_LOADED,
  NETWORK_ERROR
} from './types';

// Load User
export const loadUser = () => async (dispatch) => {
  try {
    const res = await axios.get('https://jackiechanbruteforce.ulesson.com/3p/api/content/grade');
    console.log('res', res.data.data);
    dispatch({
      type: USER_LOADED,
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: NETWORK_ERROR
    });
  }
};