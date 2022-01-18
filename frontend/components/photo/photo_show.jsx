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

      editable: false
    }

    this.titleEdited = React.createRef();
    this.descriptionEdited = React.createRef();

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);

    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
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
    //debugger
    if(prevProps.photoId !== this.props.photoId){
      this.props.fetchPhoto(this.props.photoId);
    }
    //debugger
    if (prevProps.tags != this.props.tags) {
      this.setState({tagArray: this.props.tags})
    }
    // debugger
    if (prevProps.comments != this.props.comments) {
      this.setState({commentArray: this.props.comments})
    }
    // debugger
    if(prevProps.likes.length != this.props.likes.length){
      this.setState({likeArray: this.props.likes})
    }
  }

  handleCommentSubmit(e){
    e.preventDefault();
    let comment = { photo_id: this.props.photoId, commenter_id: this.props.currentUserId, body: this.state.body};
    this.props.createComment(comment)
      // .then(() =>
      //   location.reload()
      // )
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
    //debugger
    this.setState({editable: !this.state.editable})
    //debugger
    let editedPhoto = { 
      photo: { id: this.props.photoId, title: editedTitle, description: editedDescription},
      id: this.props.photoId
    };
    //debugger
    this.props.updatePhoto(editedPhoto)
      .then(() => this.props.fetchPhoto(this.props.photoId))
    //debugger
  }

  handleDelete(e){
    e.preventDefault(e);
    //debugger
    this.props.deletePhoto(this.props.photoId)
      .then(() => 
      this.props.history.push("/explore")
      )
    // debugger
  }

  handleCommentDelete(e, id){
    e.preventDefault();
    this.props.deleteComment(id)
      .then(() =>
        // location.reload()
        this.props.fetchComments()
      )
  }

  handleLikeDelete(e, id){
    e.preventDefault();
    this.props.deleteLike(id)
      .then(() =>
        // location.reload()
        this.props.fetchLikes()
      )
  }

  toggleEdit(){
    this.setState({editable: !this.state.editable})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render(){
    const {editable, tagArray, commentArray, likeArray} = this.state
    const {currentUserId, photoId, photo} = this.props

    // const uploader_id = photo.uploader_id
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
    
    let likeButton = (
      <div className="like-button-container">
        <button className="like-button" onClick={this.handleLikeSubmit}>Like</button>
      </div> 
    );

    let dislikeButton = (
      <div className="dislike-container">
        <button className="delete" onClick={ e => (this.handleLikeDelete(e, currentDislike))}>Dislike</button> 
      </div>
    );
    
    let editButton;
    let submitButton;

    const isUploader = (currentUserId === uploader_id)
    
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

    // debugger
    
    return (
      <div className="photo-show-container">
        <div className="image-background">
          <div className="back-to-explore">
            {/* <Link to="/explore">Back to explore</Link> */}
          </div>

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
                    <div className="comment-list-comment-body" > {comment.body}</div> 
                    {
                      comment.commenter_id === currentUserId ? 
                      <div className="delete-container">
                        <button className="delete" onClick={ e => (this.handleCommentDelete(e, comment.id))}>Delete Comment</button> 
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