import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, signup, removeSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ errors, session }) => {
  return {
    errors: errors.session,
    formType: 'Sign up',
    navLink: <Link to="/login">log in instead</Link>,
    sessionId: session.id
  };
};

const mDTP = dispatch => {
  return {
    processForm: user => dispatch(signup(user)),
    processDemo: demo => dispatch(login(demo)),
    removeSessionErrors: () => dispatch(removeSessionErrors())
  };
};

export default connect(mSTP, mDTP)(SessionForm);