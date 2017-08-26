import React, { Component } from 'react';
import { Button, Card, Row, Col } from 'react-materialize';
import { Link, withRouter } from 'react-router-dom';
import queryString from 'query-string';
import TextFieldGroup from '../common/TextFieldGroup';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';
import PropTypes from 'prop-types';
import { validateInput } from '../../../../server/shared/validations/reset_password';
import FlashMessagesList from '../flash/FlashMessagesList';
import { resetPassword } from '../../actions/forgotPasswordAction';
import { addFlashMessage } from '../../actions/flashMessages';

class ResetPasswordForm extends React.Component{

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

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      const query  = queryString.parse(this.props.location.search);
      const email = query.email;
      this.setState({ errors: {} });
      if(this.state.newPassword === this.state.confirmNewPassword) {
        this.props.resetPassword(this.state.newPassword, email).then(
          (res) => this.context.router.history.push('/login'),
          (err) => this.setState({
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


  handleChange(e) {
    this.setState({ [e.target.name ]: e.target.value });
  }

  render() {
    const { errors, newPassword, confirmNewPassword, addFlashMessage } = this.state;
    return(
      <div>
        <section classID="wrapper" className="resetPasswordForm">
          <div className="wrapper_cen2">
            <div className="row">
              <div className="col s12 m12 l12 reg_form">
                <div className="reg_form_cen">
                  <h4>Reset Password</h4>
                  <FlashMessagesList />
                  <form className="col s12" onSubmit={this.handleSubmit}>
                    { errors.form && <div className="alert alert-danger">{errors.form}</div> }
                    <div className="">
                      <TextFieldGroup
                        error = {errors.newPassword}
                        label = "New Password"
                        field = "newPassword"
                        onChange = {this.handleChange}
                        value = {newPassword}
                        type="password"
                      />
                      <TextFieldGroup
                        error = {errors.confirmNewPassword}
                        label = "Confirm New Password"
                        field = "confirmNewPassword"
                        value = {confirmNewPassword}
                        onChange = {this.handleChange}
                        type="password"
                      />
                      <div className="input-field col s12">
                        <button className="btn waves-effect waves-light" type="submit" name="action">Submit
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
    )
  }
}

ResetPasswordForm.propTypes = {
  resetPassword: PropTypes.func.isRequired
}

ResetPasswordForm.contextTypes = {
  router: PropTypes.object.isRequired
}

export default connect(null, { resetPassword, addFlashMessage })(withRouter(ResetPasswordForm));
