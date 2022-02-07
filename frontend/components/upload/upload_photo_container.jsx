import { connect } from "react-redux";
import { createPhoto } from "../../actions/photo_actions";
import { createTag } from "../../actions/tag_actions";
import { createPhototag } from "../../actions/phototag_actions";
import { removePhotoErrors } from "../../actions/photo_actions";
import UploadPhoto from "./upload_photo"


const mSTP = ({ errors, session}) => {
  return {
    currentUserId: session.id,
    errors: errors.photo
  };
}

const mDTP = dispatch => {
  // debugger
  return {
    createPhoto: photo => dispatch(createPhoto(photo)),
    createTag: tag => dispatch(createTag(tag)),
    createPhototag: photoTag => dispatch(createPhototag(photoTag)),
    removePhotoErrors: () => dispatch(removePhotoErrors())
  };
}

export default connect(mSTP, mDTP)(UploadPhoto);