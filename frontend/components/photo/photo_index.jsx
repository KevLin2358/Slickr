import React from 'react';
import PhotoIndexItem from './photo_index_item'

class PhotoIndex extends React.Component{
  componentDidMount(){
    this.props.fetchPhotos();
  }

  render(){
    const {photos} = this.props
    return(
      <div>
        <div>
          <h1>Explore</h1>
        </div>
        <div className="photo-index">
          {
            photos.map(photo =>(
              <PhotoIndexItem
                photo = {photo}
                key = {photo.id}
              />
            ))
          }
        </div>
      </div>
    )
  }

}


export default PhotoIndex;