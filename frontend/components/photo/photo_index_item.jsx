import React from 'react';
import { Link } from 'react-router-dom';

const PhotoIndexItem = props =>{
  const {photo} = props
  console.log(props)
  return(
    <div className ="photo">
      <Link to={`/api/photos/${photo.id}`}>
          
          <h1>{props.photo.title}</h1>
          <p>{props.photo.description}</p>
          <img className="index-image-preview" src={photo.photoURL}/>
      </Link>
    </div>
  )
}

export default PhotoIndexItem;