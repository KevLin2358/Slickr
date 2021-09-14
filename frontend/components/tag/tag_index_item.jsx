import React from 'react';

const TagIndexItem = props => {
  const {tag} = props
  return(
    <div className="tag">
      <span>{props.tag.name}</span>
      <span>{props.tag.photo_id}</span>
    </div>
  )
}

export default TagIndexItem;