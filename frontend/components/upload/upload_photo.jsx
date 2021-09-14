import React from 'react';

class UploadPhoto extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      tag_name: '',
      description: '',
      photoFile: null,
      photoURL: null,
      uploaderId: this.props.currentUserId
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleFile(e){
    const file = e.currentTarget.files[0]
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        photoFile: file,
        photoURL: fileReader.result
      })
    }
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    let tag = { photo_id: null, name: this.state.tag_name };

    formData.append('photo[title]', this.state.title);
    formData.append('photo[description]', this.state.description);
    formData.append('photo[file]', this.state.photoFile);
    formData.append('photo[uploader_id]', this.state.uploaderId);

    this.props.createPhoto(formData)
    .then(
      res => {
        this.props.history.push(`/photos/${res.photo.id}`)
      }
    )
  }

  render(){
    console.log(this.state)
    return(
      <div>
      {!this.state.photoFile ? 
        (
          <div className="upload-screen">
            <div className="upload-box">
              <div className="upload-text">Upload a photo</div>
              <label className="photo-upload-button">Choose photo to upload
                <input 
                  className="photo-upload"
                  type="file" 
                  onChange={this.handleFile}
                />
              </label>
            </div>
          </div>
        ) : (
          <div className="upload-form-screen">
            <div className="upload-form">
            
              <div className="title-description">
                <div className="editing-header">Editing Photo:</div>
                <div className="upload-input-box">
                  <input 
                    className="title-input"
                    value={this.state.title}
                    onChange={this.update('title')}
                    placeholder="Add a title"
                  />
         
                  <input 
                    className="description-input"
                    value={this.state.description}
                    onChange={this.update('description')}
                    placeholder="Add a description"
                  />
                </div> 
                <button 
                  className="upload-submit"
                  onClick={this.handleSubmit}
                  >
                  Upload photo!
                </button>
              </div>

              <img className="upload-image-preview" src={this.state.photoURL}/>
            </div>
          </div>
        )
      }
      </div>       
    )
  }
}

export default UploadPhoto