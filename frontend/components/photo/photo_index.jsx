import React from 'react';
import PhotoIndexItem from './photo_index_item'
import Footer from '../footer/footer';

class PhotoIndex extends React.Component{
  componentDidMount(){
    this.props.fetchPhotos();
  }

  render(){
    const {photos} = this.props
    return(
      <div className="photo-index">
        <div className="photo-index-header-explore">
          <h1>Explore</h1>
        </div>
        <div className="photo-index-item">
          {
            photos.map(photo =>(
              <PhotoIndexItem
                photo = {photo}
                key = {photo.id}
              />
            ))
          }
        </div>
        <Footer/>
      </div>
    )
  }

}

export default PhotoIndex;