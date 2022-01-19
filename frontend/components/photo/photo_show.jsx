import React from "react";
import { Link } from "react-router-dom";
import Footer from '../footer/footer';

class PhotoShow extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      tagArray: [],
      uploader: "",

      commentArray: [],
      body: "",

      likeArray: [],

      editable: false,
      comment_edit: false
    }

    this.titleEdited = React.createRef();
    this.descriptionEdited = React.createRef();
    this.commentEdited = React.createRef();

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);

    this.toggleCommentEdit = this.toggleCommentEdit.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);

    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    this.handleCommentEdit = this.handleCommentEdit.bind(this);
    this.handleCommentDelete = this.handleCommentDelete.bind(this);

    this.handleLikeSubmit = this.handleLikeSubmit.bind(this);
    this.handleLikeDelete = this.handleLikeDelete.bind(this);
  }

  componentDidMount(){
    this.props.fetchPhoto(this.props.photoId)
    
    //debugger
    this.props.fetchTags()
      .then(res => {this.setState({
        tagArray: Object.values(res.tags)
      })
    })

    this.props.fetchComments()
      .then(res => {this.setState({
        commentArray: Object.values(res.comments)
      })
    })

    // debugger
    this.props.fetchLikes()
      .then(res => {this.setState({
        likeArray: Object.values(res.likes)
      })})

  }

  componentDidUpdate(prevProps){
    if(prevProps.photoId !== this.props.photoId){
      this.props.fetchPhoto(this.props.photoId);
    }

    if (prevProps.tags != this.props.tags) {
      this.setState({tagArray: this.props.tags})
    }

    if (prevProps.comments != this.props.comments) {
      this.setState({commentArray: this.props.comments})
    }

    if(prevProps.likes.length != this.props.likes.length){
      this.setState({likeArray: this.props.likes})
    }
  }

  handleCommentSubmit(e){
    e.preventDefault();
    let comment = { photo_id: this.props.photoId, commenter_id: this.props.currentUserId, body: this.state.body};
    this.props.createComment(comment)
  }

  handleLikeSubmit(e){
    e.preventDefault();
    let like = {photo_id: this.props.photoId, liker_id: this.props.currentUserId};
    this.props.createLike(like)
      .then(() =>
        this.props.fetchLikes()
      )
  }

  handleEdit(e){
    e.preventDefault();
    let editedTitle;
    let editedDescription;

    if(this.state.editable){
      editedTitle = this.titleEdited.current.value;
      editedDescription = this.descriptionEdited.current.value;
    }
    this.setState({editable: !this.state.editable})
    let editedPhoto = { 
      photo: { id: this.props.photoId, title: editedTitle, description: editedDescription},
      id: this.props.photoId
    };
    this.props.updatePhoto(editedPhoto)
      .then(() => this.props.fetchPhoto(this.props.photoId))
  }

  handleCommentEdit(e, cId){
    e.preventDefault();
    let editedComment;
    if(this.state.comment_edit){
      editedComment = this.commentEdited.current.value;
    }
    this.setState({comment_edit: !this.state.comment_edit})
    let finishedComment = {
      comment: {id: cId, body: editedComment, photo_id: this.props.photoId, commenter_id: this.props.currentUserId},
      id: cId
    };
    this.props.updateComment(finishedComment)
      .then(() => this.props.fetchComments())
  }

  handleDelete(e){
    e.preventDefault(e);
    this.props.deletePhoto(this.props.photoId)
      .then(() => 
      this.props.history.push("/explore")
      )
  }

  handleCommentDelete(e, id){
    e.preventDefault();
    this.props.deleteComment(id)
      .then(() =>
        this.props.fetchComments()
      )
  }

  handleLikeDelete(e, id){
    e.preventDefault();
    this.props.deleteLike(id)
      .then(() =>
        this.props.fetchLikes()
      )
  }

  toggleEdit(){
    this.setState({editable: !this.state.editable})
  }

  toggleCommentEdit(){
    this.setState({comment_edit: !this.state.comment_edit})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render(){
    const {editable, tagArray, commentArray, likeArray, comment_edit} = this.state
    const {currentUserId, photoId, photo} = this.props
    const uploader_id = photo ? photo.uploader_id : "";

    // tag holder
    let res = [];
    let res1 = [];
    let res2 = [];

    tagArray.map(tag => {
      if (photoId == tag.photo_id) {
        res.push(tag)
      }
    });

    commentArray.map(comment => {
      if (photoId == comment.photo_id) {
        res1.push(comment)
      }
    });

    likeArray.map(like => {
      if(photoId == like.photo_id) {
        res2.push(like)
      }
    })

    let arrayForLike = [];
    let currentDislike = undefined;
    res2.map( like => {
      arrayForLike.push(like.liker_id);
      if(currentUserId === like.liker_id){
        currentDislike = like.id
      }
    })

    const isUploader = (currentUserId === uploader_id)
    let likeButton;
    let dislikeButton;
    if (!isUploader) {
      likeButton = (
        <div className="like-button-container">
          <button className="like-button" onClick={this.handleLikeSubmit}>Like</button>
        </div> 
      );
  
      dislikeButton = (
        <div className="dislike-container">
          <button className="delete" onClick={ e => (this.handleLikeDelete(e, currentDislike))}>Dislike</button> 
        </div>
      );
    } else {
      likeButton ="";
      dislikeButton ="";
    }

    
    let editButton;
    let submitButton;

    if (isUploader) {
      editButton = (
        <div className="edit-photo-button-container">
          <button className="edit-photo-button" onClick={this.toggleEdit}>Edit</button>
        </div>
      )
      submitButton = (
        <div className="submit-photo-button-container">
          <button className="edit-photo-button" onClick={this.handleEdit}>Submit</button>
        </div>
      )
    } else {
      editButton="",
      submitButton=""
    };

    return (
      <div className="photo-show-container">
        <div className="image-background">
          <div className="back-to-explore"></div>
          <div className="show-img-container">
            <img className="show-img" src={photo ? photo.photoURL : ""}/>
          </div>
        </div>

        <div className="show-info">
          <div className="show-info-container">
            <h1 className="show-info-username">{ photo ? photo.user.username : "" }</h1>
            {editable ? 
            <div className="title-edited-container">
              <input 
                className="title-edited" 
                type='text' 
                ref={this.titleEdited} 
                defaultValue={photo ? photo.title : ""} 
              /> 
            </div>
              : 
              <h1 className="title-not-edit">
                {photo ? photo.title : ""}
              </h1>
            }

            {editable ? 
              <textarea 
                className="description-edited" 
                type='text' 
                ref={this.descriptionEdited} 
                defaultValue={photo ? photo.description : ""} 
              /> 
              : 
              <p className="description-not-edit">
                {photo ? photo.description : ""}
              </p>
            }

            {editable === false ? 
              editButton : submitButton
            }

            {
              isUploader ?
              <div className="delete-container">
                <button className="delete" onClick={this.handleDelete}>Delete Photo</button> 
              </div>
              :
              ""
            }
            <div className="like-section">
              <div className="like-number"> 
                {res2.length} 
                <span> likes</span>
              </div>
              <div> 
                {arrayForLike.includes(currentUserId) ? dislikeButton : likeButton}
              </div>
            </div>
          </div>

          <div className="show-tag">
            <div className="tags-header">Tags</div>
            <div className="tag-list">
              {res.map(tag => (
                <div className="tag-list-tags" key={tag.id}>{tag.name}</div>
              ))}
            </div>
          </div>

          <div className="comment-section">
            <div className="comment-header">Comments</div>
            <div className="comment-submission">
                <textarea
                  className="comment-submission-text"
                  type='text'
                  value={this.state.body}
                  onChange={this.update('body')}
                  placeholder='type here....'
                />
                <button className="comment-submit" onClick={this.handleCommentSubmit}>Submit</button>
            </div>
            <div className="comment-list">
              {res1.map(comment => 
                (
                  <div className="comment-index-item" key={comment.id}>
                    <div className="comment-list-comment-username"> {comment.username}</div>
                    {                 
                      (comment.commenter_id === currentUserId) && (comment_edit === true) ? 
                      <div className="comment-submission">
                        <textarea
                          className="comment-submission-text"
                          type='text'
                          defaultValue={comment ? comment.body : ""}
                          ref={this.commentEdited}
                          placeholder='type here....'
                        />
                        <button className="comment-submit" onClick={ e => (this.handleCommentEdit(e, comment.id))}>Submit</button>
                      </div>
                      :
                      <div className="comment-list-comment-body" > {comment.body}</div>
                    }

                    {
                      (comment.commenter_id === currentUserId) && (comment_edit === false) ? 
                      <div className="edit-comment-button-container">
                        <button className="edit-comment-button" onClick={this.toggleCommentEdit}>Edit</button>
                      </div> 
                      : ""
                    }
                    
                    {
                      comment.commenter_id === currentUserId ? 
                      <div className="delete-container">
                        <button className="delete" onClick={ e => (this.handleCommentDelete(e, comment.id))}>Delete</button> 
                      </div>
                      : ""
                    }
                  </div>

                )
              )}
            </div>
          </div>
        </div>
            <Footer/>
      </div>
    );
  }
}

export default PhotoShow;