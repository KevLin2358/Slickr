import { connect } from "react-redux";
import {fetchComments} from "../../actions/comment_actions";
import CommentIndex from "./comment_index"

const mSTP = (state) => {
  return {
    comments: Object.values(state.entities.comments)
  };
}

const mDTP = dispatch => {
  return {
    fetchComments: photoId => dispatch(fetchComments(photoId))
  };
}

export default connect(mSTP, mDTP)(CommentIndex);
