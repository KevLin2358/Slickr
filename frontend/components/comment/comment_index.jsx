import React from "react";
import CommentIndexItem from "./comment_index_item";

class CommentIndex extends React.Component{

  componentDidMount(){
    this.props.fetchComments();
  }
  
  render(){
    const {comments} = this.props
    return(
      <div>
        <div>
          {
            comments.map(comment =>(
              <CommentIndexItem 
                comment = {comment}
                key = {comment.id}
              />
            ))
          }
        </div>
      </div>
    )
  }
}

export default CommentIndex;