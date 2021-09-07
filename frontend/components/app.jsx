import React from "react";
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';

const App = () => (
  <div>
    <header>
      <Link to="/">
        <h1>Slickr</h1>
      </Link>
    </header>

    <Route path="/" component={GreetingContainer} />
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;