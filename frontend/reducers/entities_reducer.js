import { combineReducers } from "redux";
import users from "./users_reducer";
import photos from "./photos_reducer";
import tags from "./tags_reducer";

const entitiesReducer = combineReducers({
  users,
  photos,
  tags
})

export default entitiesReducer;