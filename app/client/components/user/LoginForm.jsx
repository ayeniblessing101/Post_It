import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextFieldGroup from '../common/TextFieldGroup';
import ForgetPasswordModal from './ForgetPasswordModal';
import { login } from '../../actions/authenticationActions';
import { validateLoginInput } from '../../validations/validation';
import FlashMessagesList from '../notification/FlashMessagesList';

/**
 * @class LoginForm
 * @extends {React.Component}
 */
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * @returns {isValid} - checks if the fields are not empty
   * @memberof LoginForm
   */
  isValid() {
    const { errors, isValid } = validateLoginInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  /**
   * @param {any} event
   * @memberof LoginForm
   * @returns {void}
   */
  handleSubmit(event) {
    event.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.login(this.state).then(
        () => this.context.router.history.push('/groups'),
        err => this.setState({
          errors: err.data.errors,
          username: '',
          password: ''
        })
      );
    }
  }

  /**
   * @param {any} event
   * @memberof LoginForm
   * @returns {void}
   */
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  /**
   * @returns {object} - LoginForm component
   * @memberof LoginForm
   */
  render() {
    const { errors, username, password } = this.state;
    return (
      <div>
        <h4>Login to PostIt</h4>
        <FlashMessagesList />
        <form className="col s12" onSubmit={this.handleSubmit}>
          { errors.form &&
          <div className="alert alert-danger">{errors.form}</div> }
          <div className="">
            <TextFieldGroup
              error={errors.username}
              label="Username"
              onChange={this.handleChange}
              value={username}
              field="username"
              type="text"
            />
            <TextFieldGroup
              error={errors.password}
              label="Password"
              onChange={this.handleChange}
              value={password}
              field="password"
              type="password"
            />
            <div className="input-field col s12">
              <button
                  className="btn waves-effect waves-light"
                  type="submit" name="action">Submit
                <i className="material-icons right">send</i>
              </button>
              <br /><br />
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col s6"><ForgetPasswordModal /></div>
          <div className="col s6">
            <p>
              Do not have an account?
              <button
                className="blue-text signUp"
                onClick={() => this.props.toggleForm('signup')}>
                <b>Sign Up</b>
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired
};

LoginForm.contextTypes = {
  router: PropTypes.object.isRequired
};

export default connect(null, { login })(LoginForm);
