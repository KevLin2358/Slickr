import React from "react";
import {
  Route,
  Link
} from 'react-router-dom';
import Greeting_container from "./greeting/greeting_container";
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';

const App = () => (
  <div>
    <Link to="/">
      <h1>Slickr</h1>
    </Link>
    <Greeting_container />

    <Route path="/login" component={LogInFormContainer} />
    <Route path="/signup" component={SignUpFormContainer} />
  </div>
);

export default App;