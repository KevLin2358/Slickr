import { connect } from "react-redux";
import { fetchPhoto, updatePhoto, deletePhoto } from "../../actions/photo_actions";
import { fetchTags } from "../../actions/tag_actions";
import PhotoShow from "./photo_show"

const mSTP = (state, ownProps) => {
  return {
    currentUserId: state.session.id,
    photo: state.entities.photos[ownProps.match.params.id],
    photoId: ownProps.match.params.id,
    tags: Object.values(state.entities.tags)
  };
}

const mDTP = dispatch => {
  return {
    fetchPhoto: id => dispatch(fetchPhoto(id)),
    updatePhoto: photo => dispatch(updatePhoto(photo)),
    deletePhoto: id => dispatch(deletePhoto(id)),
    fetchTags: () => dispatch(fetchTags())
  };
}

export default connect(mSTP, mDTP)(PhotoShow);