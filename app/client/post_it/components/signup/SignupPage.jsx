import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignupForm from './SignupForm';
import { userSignupRequest, isUserExists } from '../../actions/signupActions';
import { addFlashMessage } from '../../actions/flashMessages';

/**
 * @class SignupPage
 * @extends {React.Component}
 */
class SignupPage extends React.Component {
  /**
   * @returns {object} - signup component
   * @memberof SignupPage
   */
  render() {
    const { userSignupRequest, addFlashMessage, isUserExists } = this.props;
    return (
      <div>
        <SignupForm
          isUserExists={isUserExists}
          userSignupRequest={userSignupRequest}
          addFlashMessage={addFlashMessage}
        />
      </div>
    );
  }
}

SignupPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  isUserExists: PropTypes.func.isRequired
};

export default connect(null,
  { userSignupRequest, addFlashMessage, isUserExists })(SignupPage);
