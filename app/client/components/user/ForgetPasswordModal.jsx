import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-materialize';
import { connect } from 'react-redux';
import TextFieldGroup from '../common/TextFieldGroup';
import { validateInput }
 from '../../validations/forgotpassword';
import { resetPasswordEmail } from '../../actions/forgotPasswordActions';
import { addFlashMessage } from '../../actions/flashMessageActions';
import FlashMessagesList from '../notification/FlashMessagesList';

/**
 * @class ForgetPasswordModal
 * @extends {React.Component}
 */
class ForgetPasswordModal extends React.Component {
  /**
   * Creates an instance of ForgetPasswordModal.
   * @param {any} props
   * @memberof ForgetPasswordModal
   */
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      errors: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * @returns {isValid} - Check the form input is valid
   * @memberof ForgetPasswordModal
   */
  isValid() {
    const { errors, isValid }
       = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  /**
   * @param {any} event
   * @memberof ForgetPasswordModal
   * @return {void}
   */
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      email: ''
    });
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.resetPasswordEmail(this.state).then(
        () => {
          this.props.addFlashMessage({
            type: 'success',
            text: 'Please check your email and follow the instruction'
          });
        },
      () => {
        this.props.addFlashMessage({
          type: 'error',
          text: 'Incorrect email'
        });
      });
    }
  }

  /**
   * @param {any} event
   * @memberof ForgetPasswordModal
   * @return {void}
   */
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  /**
   * @returns {object} - Forget Password modal component
   * @memberof ForgetPasswordModal
   */
  render() {
    const { errors, email } = this.state;
    return (
      <div>
        <Modal
          header='Recover Password'
          trigger={<p className="forgotPassword">Forgot Password?</p>}>
          <FlashMessagesList />
          <form onSubmit={this.handleSubmit} >
            { errors.form &&
            <div className="alert alert-danger">{errors.form}</div> }
            <TextFieldGroup
              error={errors.email}
              label="Email"
              field="email"
              onChange={this.handleChange}
              type="text"
              value={email}
            />
            <Button
              className="btn waves-effect waves-light"
              type="submit"
            >
            Reset
            </Button>
          </form>
        </Modal>
      </div>
    );
  }

}

ForgetPasswordModal.propTypes = {
  resetPasswordEmail: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
};

export default
connect(null, { resetPasswordEmail, addFlashMessage })(ForgetPasswordModal);
