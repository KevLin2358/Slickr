import React from 'react';

const CommentIndexItem = props => {
  const {comment} = props
  return(
    <div className="comment-index-item">
      <span>{comment.name}</span>
      <span>{comment.photo_id}</span>
    </div>
  )
}

export default CommentIndexItem;