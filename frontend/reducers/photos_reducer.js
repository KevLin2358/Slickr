import {
  RECEIVE_ALL_PHOTOS,
  RECEIVE_PHOTO,
  REMOVE_PHOTO,
  EDIT_PHOTO,
} from '../actions/photo_actions';

const photoReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState;
  
  switch(action.type){
    case RECEIVE_ALL_PHOTOS:
      return action.photos;
    case RECEIVE_PHOTO:
      newState = Object.assign({}, state);
      newState[action.photo.id] = action.photo;
      return newState;
    case EDIT_PHOTO:
      newState = Object.assign({}, state);
      return newState;
    case REMOVE_PHOTO:
      newState = Object.assign({}, state);
      delete newState[action.photoId];
      return newState;
    default:
      return state;
  }
}

export default photoReducer;