import {
  RECEIVE_ALL_FOLLOWS,
  RECEIVE_FOLLOW,
  REMOVE_FOLLOW
} from '../actions/follow_actions';

const followReducer = (state ={}, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type){
    case RECEIVE_ALL_FOLLOWS:
      return action.follows;
    case RECEIVE_FOLLOW:
      newState = Object.assign({}, state);
      newState[action.follow.id] = action.follow;
      return newState;
    case REMOVE_FOLLOW:
      newState = Object.assign({}, state);
      delete newState[action.followId];
      return newState;
    default:
      return state;
  }
}

export default followReducer;