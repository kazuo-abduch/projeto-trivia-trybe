import { SET_TOKEN } from '../actions';

const INITIAL_STATE = '';

function token(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_TOKEN:
    return action.token;
  default:
    return state;
  }
}

export default token;
