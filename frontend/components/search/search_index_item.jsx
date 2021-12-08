import React from 'react';
import { Link } from 'react-router-dom';

class SearchIndexItem extends React.Component {
  render(){
    const {photo} = this.props;

    return(
      <div className="search-photo-container">
        <Link to={`/photos/${photo.id}`}>
          <img className="search-index-image-preview" src={photo.photoURL}/>
        </Link>
      </div>   
    )
  }
}

export default SearchIndexItem;