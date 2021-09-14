import { connect } from "react-redux";
import { fetchTags } from "../../actions/tag_actions";
import TagIndex from "./tag_index";

const mSTP = state => {
  return {
    photos: Object.values(state.entities.photos),
    tags: Object.values(state.entities.tags),
    users: state.entities.users
  };
}

const mDTP = dispatch => {
  // debugger
  return {
    fetchTags: () => dispatch(fetchTags())
  };
}

export default connect(mSTP, mDTP)(TagIndex);