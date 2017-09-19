import React from 'react';
import PropTypes from 'prop-types';
import {Button, Modal } from 'react-materialize';
import { connect } from 'react-redux';
import TextFieldGroup from '../common/TextFieldGroup';
import { validateInput } 
 from '../../../../server/shared/validations/forgotpassword';
import { forgotPassword } from '../../actions/forgotPasswordAction';
import { addFlashMessage } from '../../actions/flashMessages';
import FlashMessagesList from '../flash/FlashMessagesList';

// const avatar2 = require("../images/avatar2.png");
// const avatar3 = require("../images/friend-group2.jpg");
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

  isValid() {
    const { errors, isValid, email, addFlashMessage } 
       = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  /**
   * @param {any} e
   * @memberof ForgetPasswordModal
   * @return {void}
   */
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      email: ''
    });
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.forgotPassword(this.state).then(
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
   * @param {any} e
   * @memberof ForgetPasswordModal
   * @return {void}
   */
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
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
  forgotPassword: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
};

export default
connect(null, { forgotPassword, addFlashMessage })(ForgetPasswordModal);
