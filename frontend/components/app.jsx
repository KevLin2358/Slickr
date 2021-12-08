import React from "react";
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';
// import { AuthRoute, ProtectedRoute } from "../util/route_util";
// import FeedContainer from "./feed/feed_container";
import HomePageContainer from "./homepage/homepage_container";
import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import PhotoIndexContainer from './photo/photo_index_container';
import PhotoShowContainer from './photo/photo_show_container'
import UploadPhotoContainer from './upload/upload_photo_container';
import SearchIndexContainer from './search/search_index_container';


const App = () => (
  <div>
      <Route path="/" component={GreetingContainer} />
      <Route exact path="/" component={HomePageContainer} />
      <Route path="/login" component={LoginFormContainer} />
      <Route path="/signup" component={SignupFormContainer} />  


      <Switch>
        <Route exact path="/search" component={SearchIndexContainer}/>
        <Route exact path="/explore" component={PhotoIndexContainer} />
        <Route exact path="/photos/:id" component={PhotoShowContainer}/>
        <Route exact path="/upload" component={UploadPhotoContainer} />
      </Switch>
  </div>
);

export default App;