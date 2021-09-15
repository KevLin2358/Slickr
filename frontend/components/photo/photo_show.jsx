import React from "react";
import { Link } from "react-router-dom";

class PhotoShow extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      tagArray: [],
      uploader: "",
      editable: false
    }

    this.titleEdited = React.createRef();
    this.descriptionEdited = React.createRef();

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  componentDidMount(){
    this.props.fetchPhoto(this.props.photoId)
    //debugger
    this.props.fetchTags()
      .then(res => {this.setState({
        tagArray: Object.values(res.tags)
      })
    })
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
    //debugger
  }

  toggleEdit(){
    this.setState({editable: !this.state.editable})
  }
  
  render(){
    const {editable} = this.state
    const {currentUserId, photoId, photo} = this.props

    // const uploader_id = photo.uploader_id
    const uploader_id = photo ? photo.uploader_id : "";
        
    // tag holder
    let res = [];
    
    this.state.tagArray.map(tag => {
      if (photoId == tag.photo_id) {
        res.push(tag)
      }
    });
    
    let editButton;
    let submitButton;
    const isUploader = (currentUserId === uploader_id)
    if (isUploader) {
      editButton = (
        <button className="edit-photo-button" onClick={this.toggleEdit}>Edit</button>
      )
      submitButton = (
        <button className="edit-photo-button" onClick={this.handleEdit}>Submit</button>
      )
    } else {
      editButton="",
      submitButton=""
    };

      return (
      <div>
        <div className="back-to-explore">
          <Link to="/explore">Back to explore</Link>
        </div>

        <div className="show-img-container">
          <img className="show-img" src={photo ? photo.photoURL : ""}/>
        </div>

        <div className="show-info">
          <div className="show-info-container">
            {editable === false ? 
              editButton : submitButton
            }
            
            <h1>{ photo ? photo.user.username : "" }</h1>

            {editable ? 
              <input 
                className="title-edited" 
                type='text' ref={this.titleEdited} 
                defaultValue={photo ? photo.title : ""} 
              /> 
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
          </div>
          
          {
            isUploader ?
            <button className="delete-photo" onClick={this.handleDelete}>Delete Photo</button> 
            :
            ""
          }

          <div className="show-tag">
            <div className="tag-list">
              {res.map(tag => (
                <div key={tag.id}>{tag.name}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoShow;