import React from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextFieldGroup from '../common/TextFieldGroup';
import { validateResetPasswordInput }
  from '../../validations/validation';
import FlashMessagesList from '../notification/FlashMessagesList';
import { resetPassword } from '../../actions/forgotPasswordActions';
import { addFlashMessage } from '../../actions/flashMessageActions';

/**
 * @class ResetPasswordForm
 * @extends {React.Component}
 */
class ResetPasswordForm extends React.Component {
  /**
   * Creates an instance of ResetPasswordForm.
   * @param {any} props
   * @memberof ResetPasswordForm
   */
  constructor(props) {
    super(props);
    this.state = {
      newPassword: '',
      confirmNewPassword: '',
      errors: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * @memberof ResetPasswordForm
   * @returns {isValid} - checks if the text field are not empty
   */
  isValid() {
    const { errors, isValid } = validateResetPasswordInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  /**
   * @param {any} event
   * @memberof ResetPasswordForm
   * @returns {void}
   */
  handleSubmit(event) {
    event.preventDefault();
    if (this.isValid()) {
      const query = queryString.parse(this.props.location.search);
      const email = query.email;
      this.setState({ errors: {} });
      if (this.state.newPassword === this.state.confirmNewPassword) {
        this.props.resetPassword(this.state.newPassword, email).then(
          () => this.context.router.history.push('/'),
          err => this.setState({
            errors: err.data.errors,
            newPassword: '',
            confirmNewPassword: ''
          })
        );
      } else {
        this.props.addFlashMessage({
          type: 'error',
          text: 'Password does not Match'
        });
      }
    }
  }

  /**
   * @param {any} event
   * @memberof ResetPasswordForm
   * @return {void}
   */

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  /**
   * @memberof ResetPasswordForm
   * @returns {object} - ResetPasswordForm Component
   */
  render() {
    const
    { errors, newPassword, confirmNewPassword, addFlashMessage } = this.state;
    return (
      <div>
        <section classID="wrapper" className="resetPasswordForm">
          <div className="wrapper_cen2">
            <div className="row">
              <div className="col s12 m12 l12 reg_form">
                <div className="reg_form_cen">
                  <h4>Reset Password</h4>
                  <FlashMessagesList />
                  <form className="col s12" onSubmit={this.handleSubmit}>
                    {
                      errors.form &&
                      <div className="alert alert-danger">{errors.form}</div>
                    }
                    <div className="">
                      <TextFieldGroup
                        error={errors.newPassword}
                        label="New Password"
                        field="newPassword"
                        onChange={this.handleChange}
                        value={newPassword}
                        type="password"
                      />
                      <TextFieldGroup
                        error={errors.confirmNewPassword}
                        label="Confirm New Password"
                        field="confirmNewPassword"
                        value={confirmNewPassword}
                        onChange={this.handleChange}
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
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

ResetPasswordForm.propTypes = {
  resetPassword: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
};

ResetPasswordForm.contextTypes = {
  router: PropTypes.object.isRequired
};

export default connect(null,
  { resetPassword, addFlashMessage })(withRouter(ResetPasswordForm));
