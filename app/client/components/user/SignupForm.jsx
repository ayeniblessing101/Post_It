import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextFieldGroup from '../common/TextFieldGroup';
import validateInput from '../../validations/signup';
import {
  userSignupRequest
} from '../../actions/authenticationActions';
import { addFlashMessage } from '../../actions/flashMessageActions';

/**
 * @class SignupForm
 * @extends {React.Component}
 */
class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      phoneNo: '',
      password: '',
      confirm_password: '',
      errors: {},
      isLoading: false,
      invalid: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * Handle onChange event
   * @param {any} event
   * @memberof SignupForm
   * @return {void}
   */
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  /**
   * Checks if the form input(s) is valid
   * @memberof SignupForm
   * @return {isValid} - checks if the fields are not empty
   */
  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  /**
   * Handles submit event
   * @param {any} event
   * @memberof SignupForm
   * @return {void}
   */
  handleSubmit(event) {
    event.preventDefault();

    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.userSignupRequest(this.state).then(
        () => {
          this.props.addFlashMessage({
            type: 'success',
            text: 'You signed up successfully. Login!'
          });
          this.context.router.history.push('/groups');
        },
        ({ data }) => this.setState({
          errors: data,
          isLoading: false,
          password: '',
          confirm_password: '',
        })
      );
    }
  }
  /**
   * renders the signup form component
   * @returns {object} - signup component
   * @memberof SignupForm
   */
  render() {
    const { errors } = this.state;
    return (
      <div>
        <h4>Register to PostIt</h4>
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="">
            <TextFieldGroup
              error={errors.username}
              label="Username"
              onChange={this.handleChange}
              checkUserExits={this.checkUserExits}
              value={this.state.username}
              field="username"
              type="text"
            />
            <TextFieldGroup
              error={errors.email}
              label="Email"
              onChange={this.handleChange}
              checkUserExits={this.checkUserExits}
              value={this.state.email}
              field="email"
              type="text"
            />
            <TextFieldGroup
              error={errors.phone}
              label="Phone Number"
              onChange={this.handleChange}
              value={this.state.phoneNo}
              field="phoneNo"
              type="number"
            />
            <TextFieldGroup
              error={errors.password}
              label="Password"
              onChange={this.handleChange}
              value={this.state.password}
              field="password"
              type="password"
            />
            <TextFieldGroup
              error={errors.confirm_password}
              label="Confirm Password"
              onChange={this.handleChange}
              value={this.state.confirm_password}
              field="confirm_password"
              type="password"
            />
            <div className="input-field col s12">
              <button
                disabled={this.state.isLoading || this.state.invalid}
                className="btn waves-effect waves-light" type="submit"
                name="action">Submit
                <i className="material-icons right">send</i>
              </button>
              <br /><br />
            </div>
          </div>
        </form>
        <p>Have an account already?
          <button
            className="blue-text signUp"
            onClick={() => this.props.toggleForm('login')}
          >
            <b>Login</b></button>
        </p>
      </div>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired
};

SignupForm.contextTypes = {
  router: PropTypes.object.isRequired
};

export default connect(null,
  { userSignupRequest, addFlashMessage })(SignupForm);
