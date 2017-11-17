import React from 'react';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

/**
 * @class SignupForm
 *
 * @extends {React.Component}
 */
export class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'login'
    };
    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm(form) {
    this.setState({
      display: form
    });
  }
  /**
   * renders the signup form component
   *
   * @returns {object} - signup component
   * @memberof SignupForm
   */
  render() {
    return (
      <div>
        <section classID="wrapper" className="login-register">
          <div className="wrapper_cen">
            <div className="row">
              <div className="col s12 m12 l6 welcome">
                <h1>Welcome to the Biggest<br />
                  Social Network in the World
                </h1>
                <p>
                  We are the best and biggest Messaging
                  Platform with 5 billion active
                  users all around the world. Create account, create group
                  add other users to your group and post messages
                </p>
              </div>
              <div className="col s12 m12 l6 reg_form">
                <div className="reg_form_cen">
                  { this.state.display === 'login' ? (
                    <LoginForm
                    toggleForm={this.toggleForm}
                  />
                  ) : (
                    <SignupForm
                    toggleForm={this.toggleForm}
                  />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default LandingPage;
