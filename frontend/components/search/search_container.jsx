import {connect} from "react-redux";
import {fetchPhotos} from "../../actions/photo_actions";
import Search from './search';


const mSTP = (state) => {
  return {
    photos: Object.values(state.entities.photos)
  }
}

const mDTP = dispatch => {
  return {
    fetchPhotos: () => dispatch(fetchPhotos())
  };
}

export default connect(mSTP, mDTP)(Search);