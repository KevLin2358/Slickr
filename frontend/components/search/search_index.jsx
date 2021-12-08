import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchIndexItem from './search_index_item';

class SearchIndex extends React.Component {

  componentDidMount() {
    this.props.fetchPhotos();
  }

  render(){
    // debugger
    const {photos} = this.props;
    const query = this.props.location.search.slice(1);

    if(!photos) return null;

    const filteredPhotos = photos.filter(photo => {
      return photo.title.toLowerCase().includes(query.toLowerCase());
    })

    const filteredPhotoItem = filteredPhotos.map(photo =>{
      return (
        <SearchIndexItem
          key={photo.id}
          photo = {photo}
        />
      )
    })

    if (query !== "" && filteredPhotoItem.length > 0) {
      return (
        <div >
            <div className='search-index'>
                {filteredPhotoItem}
            </div>
        </div>
      )
    } else {
      return (
        <div >
          <div className='search-index-empty'>
            <div className='no-search-top'>
                {`No results ${query}`}
            </div>
            <div className='no-search-bottom'>
                Try again?
            </div>
          </div>
        </div>
      )
    }
  }
}

export default withRouter(SearchIndex);