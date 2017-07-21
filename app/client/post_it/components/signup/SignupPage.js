import React, { Component } from 'react';
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/signupActions';
import { addFlashMessage } from '../../actions/flashMessages'
import PropTypes from 'prop-types';

class SignupPage extends React.Component{
  render(){
    const { userSignupRequest, addFlashMessage } = this.props
    return(
      <div>
        <SignupForm
          userSignupRequest={userSignupRequest}
          addFlashMessage={addFlashMessage}
        />
      </div>
    );
  }
}
// it takes old state as an arguement

SignupPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
}

export default connect(null, { userSignupRequest, addFlashMessage })(SignupPage);
