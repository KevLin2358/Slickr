import React from "react";
import CommentIndexItem from "./comment_index_item";

class CommentIndex extends React.Component{

  componentDidMount(){
    this.props.fetchComments();
  }
  
  render(){
    const {comments} = this.props
    return(
        <div className="comment-list">
          {
            comments.map(comment =>(
              <CommentIndexItem 
                comment = {comment}
                key = {comment.id}
              />
            ))
          }
        </div>
    )
  }
}

export default CommentIndex;