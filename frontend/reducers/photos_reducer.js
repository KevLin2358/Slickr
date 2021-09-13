import {
  RECEIVE_ALL_PHOTOS,
  RECEIVE_PHOTO
} from '../actions/photo_actions';

const photoReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_ALL_PHOTOS:
      return Object.assign({}, state, action.photos);
    case RECEIVE_PHOTO:
      let newState = Object.assign({}, state);
      newState[action.photo.id] = action.photo;
      return newState;
    default:
      return state;
  }
}

export default photoReducer;