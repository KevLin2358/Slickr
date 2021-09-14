import { connect } from "react-redux";
import { createPhoto } from "../../actions/photo_actions";
import { createTag } from "../../actions/tag_actions";
import { createPhototag } from "../../actions/phototag_actions";
import UploadPhoto from "./upload_photo"


const mSTP = state => {
  return {
    currentUserId: state.session.id
  };
}

const mDTP = dispatch => {
  // debugger
  return {
    createPhoto: photo => dispatch(createPhoto(photo)),
    createTag: tag => dispatch(createTag(tag)),
    createPhototag: photoTag => dispatch(createPhototag(photoTag))
  };
}

export default connect(mSTP, mDTP)(UploadPhoto);