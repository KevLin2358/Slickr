import React from 'react';

const TagIndexItem = props => {
  const {tag} = props
  return(
    <div className="tag">
      <span>{tag.name}</span>
      <span>{tag.photo_id}</span>
    </div>
  )
}

export default TagIndexItem;