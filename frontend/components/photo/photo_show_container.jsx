import { connect } from "react-redux";
import { fetchPhoto, updatePhoto, deletePhoto } from "../../actions/photo_actions";
import { fetchTags } from "../../actions/tag_actions";
import { fetchComments, createComment, deleteComment } from "../../actions/comment_actions";
import { fetchLikes, createLike, deleteLike } from "../../actions/like_actions";

import PhotoShow from "./photo_show"

const mSTP = (state, ownProps) => {
  return {
    currentUserId: state.session.id,
    photo: state.entities.photos[ownProps.match.params.id],
    photoId: ownProps.match.params.id,
    tags: Object.values(state.entities.tags),
    comments: Object.values(state.entities.comments),
    likes: Object.values(state.entities.follows)
  };
}

const mDTP = dispatch => {
  return {
    fetchPhoto: id => dispatch(fetchPhoto(id)),
    updatePhoto: photo => dispatch(updatePhoto(photo)),
    deletePhoto: id => dispatch(deletePhoto(id)),

    fetchTags: () => dispatch(fetchTags()),

    fetchComments: () => dispatch(fetchComments()),
    createComment: (comment) => dispatch(createComment(comment)),
    deleteComment: (comment) => dispatch(deleteComment(comment)),

    fetchLikes: () => dispatch(fetchLikes()),
    createLike: (like) => dispatch(createLike(like)),
    deleteLike: (like) => dispatch(deleteLike(like))
  };
}

export default connect(mSTP, mDTP)(PhotoShow);