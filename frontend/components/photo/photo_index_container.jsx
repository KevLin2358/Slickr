import { connect } from "react-redux";
import { fetchPhotos } from "../../actions/photo_actions";
import PhotoIndex from "./photo_index";

const mSTP = state => {
  return {
    photos: Object.values(state.entities.photos),
    users: state.entities.uesrs
  };
}

const mDTP = dispatch => {
  // debugger
  return {
    fetchPhotos: () => dispatch(fetchPhotos())
  };
}

export default connect(mSTP, mDTP)(PhotoIndex);