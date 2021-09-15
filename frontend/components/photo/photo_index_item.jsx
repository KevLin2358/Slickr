import React from 'react';
import { Link } from 'react-router-dom';

const PhotoIndexItem = props =>{
  const {photo} = props
  return(
    <div className="photo">      
      <Link to={`/photos/${props.photo.id}`}>
        <img className="index-image-preview" src={photo.photoURL}/>
        <span>{props.photo.title}</span>
      </Link>
    </div>
  )
}

export default PhotoIndexItem;