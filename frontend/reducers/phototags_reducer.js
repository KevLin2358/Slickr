import {RECEIVE_ALL_PHOTOTAGS} from '../actions/phototag_actions'
 
export default (state ={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_PHOTOTAGS:
      return action.phototags;
    default:
      return state;
  }
}