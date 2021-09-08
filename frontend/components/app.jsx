import React from "react";
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import FeedContainer from "./feed/feed_container";
import HomePageContainer from "./homepage/homepage_container";
import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import Footer from "./footer/footer";

const App = () => (
  <div>
    <Route path="/" component={GreetingContainer} />

      <Route path="/login" component={LoginFormContainer} />
      <Route path="/signup" component={SignupFormContainer} />  
      <Route exact path="/" component={HomePageContainer} />

    <Switch>
      <Route exact path="/feed" component={FeedContainer} />
    </Switch>

    <Footer />

  </div>
);

export default App;