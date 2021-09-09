import React from 'react';
import { Link, Redirect } from 'react-router-dom';


class SessionForm extends React.Component {
  
  componentWillUnmount() {
    this.props.removeSessionErrors();
  }

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      first_name: '',
      last_name: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    console.log(this.props)
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  demoLogin(e){
    e.preventDefault();
    const demo = {email: "abcdefg", password: "abcdefg"}
    this.props.processDemo(demo);
  }

  signupForm(){
    const loggedIn = this.props.sessionId ? <Redirect to="/feed" /> : null

    return (
      <div className="form-container">
        {loggedIn}
        <form onSubmit={this.handleSubmit} className="form-box">
          <img className ="logo" src="<%= image_url('logo_only.png') %>" />
          <p className="form-header">Sign up for Slickr</p>
          <div className = "session-form-errors">
            {this.renderErrors()}
          </div>
          <input type="text"
            value={this.state.first_name}
            onChange={this.update('first_name')}
            className="signup-input"
            placeholder="First Name"
          />

          <input type="text"
            value={this.state.last_name}
            onChange={this.update('last_name')}
            className="signup-input"
            placeholder="Last Name"
          />

          <input type="text"
            value={this.state.email}
            onChange={this.update('email')}
            className="signup-input"
            placeholder="Email"
          />

          <input type="text"
            value={this.state.username}
            onChange={this.update('username')}
            className="signup-input"
            placeholder="Username"

          />

          <input type="password"
            value={this.state.password}
            onChange={this.update('password')}
            className="signup-input"
            placeholder="Password"
          />

          <div className="button-input">
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
          <div>
            <p className="session-redirect">
              Already a Slickr member? <Link to="/login">Log in here.</Link>
            </p>
          </div>
        </form>
      </div>
    );
  }

  loginForm(){
    const loggedIn = this.props.sessionId ? <Redirect to="/feed" /> : null
    return (
      <div className="form-container">
        {loggedIn}
        <div className ="login">
          <form onSubmit={this.handleSubmit} className="form-box">
          
          <img className ="logo" src="<%= image_url('logo_only.png') %>"/>
          <p className="form-header">Log in to Slickr</p>

          <div className = "session-form-errors">
              {this.renderErrors()}
          </div>
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              className="login-input"
              placeholder="Email Address"
            />
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
              placeholder="Password"
            />
          <div className="button-input">
            <input className="session-submit" type="submit" value={this.props.formType} />
            <input className="session-demo" type="submit" value="Demo Login" onClick={this.demoLogin}/>
          </div>
          <div>
            <p className="session-redirect">
              Not a Slickr member? <Link to="/signup">Sign up here.</Link>
            </p>
          </div>
        </form>
        </div>
      </div>
    );
  }

  render() {
    
    if(this.props.formType == 'Login'){
      return this.loginForm();
    }
    else{
      return this.signupForm();
    }
  }
}

export default SessionForm;
