import React from 'react';
import { Link } from 'react-router-dom';

const PhotoIndexItem = props =>{
  const {photo} = props
  return(
    <div className="photo-container">
      <Link to={`/photos/${photo.id}`}>
        <img className="index-image-preview" src={photo.photoURL}/>
      </Link>
    </div>      

  )
}

export default PhotoIndexItem;