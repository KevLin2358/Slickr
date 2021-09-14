import React from 'react';
import { Link } from 'react-router-dom';

const PhotoIndexItem = props =>{
  const {photo} = props
  console.log(props)
  return(
    <div className="photo">      
      <Link to={`/api/photos/${photo.id}`}>
        <img className="index-image-preview" src={photo.photoURL}/>
        <span>{props.photo.title}</span>
      </Link>
    </div>
  )
}

export default PhotoIndexItem;