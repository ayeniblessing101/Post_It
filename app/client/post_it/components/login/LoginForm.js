import React, { Component } from 'react';
import { Button, Card, Row, Col } from 'react-materialize';
import { Link } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';
import PropTypes from 'prop-types';
import validateInput from '../../../../server/shared/validations/login';
import FlashMessagesList from '../flash/FlashMessagesList';

class LoginForm extends React.Component{
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
      this.setState({ errors: {}, isLoading: true });
      this.props.login(this.state).then(
        (res) => this.context.router.history.push('/groups'),
        (err) => this.setState({
          errors: err.data.errors,
          username: '',
          password: ''
        })
      );
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name ]: e.target.value });
  }

  render() {
    const { errors, username, password } = this.state;
    return(
      <div>
        <section classID="wrapper" className="login-register">
          <div className="wrapper_cen2">
            <div className="row">
              <div className="col s12 m6 welcome stay_up">
                <h1>Welcome to the Biggest<br />
                  Social Network in the World
                </h1>
                <p>We are the best and biggest social network with 5 billion active
                  users all around the world. Create account, create group
                  add other users to your group and post messages
                </p>

                <a href="#" className="my_btn btn-md btn-border btn-white">Register Now!</a>
              </div>
              <div className="col s12 m6 reg_form">
                <div className="reg_form_cen">
                  <h4>Login to PostIt</h4>
                  <FlashMessagesList />
                  <form className="col s12" onSubmit={this.handleSubmit}>
                    { errors.form && <div className="alert alert-danger">{errors.form}</div> }
                    <div className="">
                      <TextFieldGroup
                        error = {errors.username}
                        label = "Username"
                        onChange = {this.handleChange}
                        value = {username}
                        field = "username"
                        type="text"
                      />
                      <TextFieldGroup
                        error = {errors.password}
                        label = "Password"
                        onChange = {this.handleChange}
                        value = {password}
                        field = "password"
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
                  <p>Do not have an account? <Link to="/" className="blue-text text-darken-2"><b>Sign Up</b></Link></p>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

LoginForm.propTypes = {
    login: PropTypes.func.isRequired
}

LoginForm.contextTypes = {
  router: PropTypes.object.isRequired
}

export default connect(null, { login })(LoginForm);
