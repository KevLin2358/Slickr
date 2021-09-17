import React from 'react';

class UploadPhoto extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      name: '',
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

    let tag = { photo_id: null, name: this.state.name };
    // debugger
    formData.append('photo[title]', this.state.title);
    formData.append('photo[description]', this.state.description);
    formData.append('photo[file]', this.state.photoFile);
    formData.append('photo[uploader_id]', this.state.uploaderId);

    this.props.createPhoto(formData)
    .then(
      res => {
        // console.log(res)
        tag.photo_id = res.photo.id
        // debugger
        this.props.createTag(tag)
          .then(res => {
            // debugger
            let phototag = {
              photo_id: res.tag.photo_id,
              tag_id: res.tag.id
            }
            this.props.createPhototag(phototag)
          })
        this.props.history.push(`/photos/${res.photo.id}`)
      },
    )
  }

  render(){
    // console.log(this.state)
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
            
              <div className="photo-information">
                <div className="editing-header">Editing Photo:</div>
                <div className="upload-input-box">
                  <div className="title-and-description">
                    <div className="title-input-container">
                      <input 
                        className="title-input"
                        value={this.state.title}
                        onChange={this.update('title')}
                        placeholder="Add a title"
                      />
                    </div>

          
                    <input 
                      className="description-input"
                      value={this.state.description}
                      onChange={this.update('description')}
                      placeholder="Add a description"
                    />
                  </div>

                  <div className="tag-div">
                    <input 
                      className="tag-input"
                      value={this.state.name}
                      onChange={this.update('name')}
                      placeholder="Add a tag"
                    />
                  </div>

                  <div className="upload-submit-container">
                    <button 
                      className="upload-submit"
                      onClick={this.handleSubmit}
                      >
                      Upload photo!
                    </button>
                  </div>
                </div> 
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