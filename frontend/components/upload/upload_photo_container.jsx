import { connect } from "react-redux";
import { createPhoto } from "../../actions/photo_actions";
import UploadPhoto from "./upload_photo"

const mSTP = state => {
  return {
    currentUserId: state.session.id
  };
}

const mDTP = dispatch => {
  // debugger
  return {
    createPhoto: photo => dispatch(createPhoto(photo))
  };
}

export default connect(mSTP, mDTP)(UploadPhoto);