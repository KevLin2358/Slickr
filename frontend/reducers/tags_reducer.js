import {
  RECEIVE_ALL_TAGS,
  RECEIVE_TAG
} from '../actions/tag_actions';

const tagReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_TAGS:
      return Object.assign({}, state, action.tags);
    case RECEIVE_TAG:
      let newState = Object.assign({}, state);
      newState[action.tag.id] = action.tag;
      return newState;
    default:
      return state;
  }
}

export default tagReducer;