import React from 'react';
import {withRouter, Redirect} from 'react-router-dom';

class Search extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      query: "",
      search: false
    }
  }

  componentDidMount(){
    this.props.fetchPhotos();
  }

  componentDidUpdate(){
    if (this.state.search) this.setState({search: false})
  }

  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({search: true})
  }

  handleKeypress(e){
    if(e.key === "Enter") this.handleSubmit(e);
  }

  render(){
    return(
      <div className='search-bar'>
        <label className='search-label'></label>
        <input
          className='search-input'
          type="search"
          placeholder="Photos"
          onChange={this.update("query")}
          onKeyPress={(e) => this.handleKeypress(e)}
        />
        
        <button className="search-button" onClick={e => this.handleSubmit(e)}/>

        {this.state.search ? 
          <Redirect to={{
            pathname: '/search',
            state: { stateName: this.state.query },
            search: "?" + this.state.query,
            fetchPhotos: this.props.fetchPhotos,
        }} /> : null}

      </div>
    )
  }
  
}

export default withRouter(Search);