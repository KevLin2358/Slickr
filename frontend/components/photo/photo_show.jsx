import React from "react";
import { Link } from "react-router-dom";

class PhotoShow extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      tagArray: [],
      uploader: "",
      canEdit: false
    }

    this.titleEdited = React.createRef();
    this.descriptionEdited = React.createRef();
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.toggleCanEdit = this.toggleCanEdit.bind(this);
  }

  componentDidMount(){
    this.props.fetchPhoto(this.props.photoId)
    this.props.fetchTags()
      .then(tags => {this.setState({
        tagArray: Object.values(tags.tags)
      })
    })
  }

  componentDidUpdate(prevProps){
    if(prevProps.photoId !== this.props.photoId){
      this.props.fetchPhoto(this.props.photoId);
    }
    if (prevProps.tags != this.props.tags) {
      this.setState({tagArray: this.props.tags})
    }
  }

  toggleCanEdit(){
    this.state({canEdit: !this.state.canEdit})
  }

  handleEdit(e){
    e.preventDefault();
    let editedTitle;
    let editedDescription;

    if(this.state.canEdit){
      editedTitle = this.titleEdited.current.value;
      editedDescription = this.descriptionEdited.current.value;
    }
    this.setState({canEdit: !this.state.canEdit})

    let editedPhoto = { 
      photo: { id: this.props.photoId, title: editedTitle, description: editedDescription},
      id: this.props.photoId
    };

    this.props.updatePhoto(editedPhoto)
      .then(() => this.props.fetchPhoto(this.props.photoId))
  }

  handleDelete(e){
    e.preventDefault(e);
    this.props.deletePhoto(this.props.photoId)
      .then(() => this.props.history.push("/explore"))
  }

  render(){
    const uploader_id = this.props.photo ? this.props.photo.uploader_id : "";
        
    let result = [];
    
    this.state.tagArray.map(tag => {
      if (this.props.photoId == tag.photo_id) {
        result.push(tag)
      }
    });
    
    let editButton;
    let submitButton;
    let deleteButton;
    if (this.props.currentUserId === uploader_id) {
      editButton = (
        <button className="edit-photo-button" onClick={this.toggleCanEdit}>Edit</button>
      )

      submitButton = (
        <button className="edit-photo-button" onClick={this.handleEdit}>Submit</button>
      )

      deleteButton = (
        <button className="delete-photo" onClick={this.handleDelete}>Delete Photo</button>
      )
    } else {
      deleteButton = "";
    };

    const photoUrl = this.props.photo ? this.props.photo.photoURL : ""; 
    const uploader = this.props.photo ? this.props.photo.user.username : "";
    const title = this.props.photo ? this.props.photo.title : "";
    const description = this.props.photo ? this.props.photo.description : "";

    let titleEdited = this.state.canEdit ? 
      <input className="title-edited" type='text' ref={this.titleEdited} defaultValue={title} /> : 
      <h1 className="title-not-edit">{title}</h1>;

    let descriptionEdited = this.state.canEdit ? 
      <textarea className="description-edited" type='text' ref={this.descriptionEdited} defaultValue={description} /> : 
      <p className="description-not-edit">{description}</p>;

      return (
      <div>
        <div>
          <Link to="/explore">Back To explore</Link>
        </div>

        <div className="photo-show-container">
          <img className="photo-show-img" src={photoUrl} />
        </div>

        <div className="photo-show-info">
          <div className="photo-show-info-top">
            <div className="photo-show-info-container">
              {this.state.canEdit === false ? editButton : submitButton}

              <h1 className="photo-show-photographer">{uploader}</h1>
              {titleEdited}
              {descriptionEdited}
            </div>
            <div className="tag-show">
              {deleteButton}

              <div className="tag-list">
                {result.map((tag) => {
                  return (
                    <div key={tag.id}>{tag.name}</div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoShow;