import React, { Component } from 'react';
import { Button, Card, Row, Col } from 'react-materialize';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import validateInput from '../../../../server/shared/validations/signup';

class SignupForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirm_password: '',
      errors: {},
      isLoading: false,
      invalid: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkUserExits = this.checkUserExits.bind(this);
  }
  handleChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }

  isValid(){
    const { errors, isValid } = validateInput(this.state);

    if(!isValid){
      this.setState({ errors });
    }

    return isValid;
  }

  checkUserExits(e){
    const field = e.target.name;
    const val = e.target.value;
    if (val !== '') {
      this.props.isUserExists(val).then(res => {
        let errors = this.state.errors;
        let invalid;
        if(res.data.user) {
          errors[field] = 'There is user with such ' + field;
          invalid = true;
        } else {
          errors[field] = '';
          invalid = false;
        }
        this.setState({ errors, invalid })
      });
    }
  }

  handleSubmit(e){
    e.preventDefault();

    if(this.isValid()){
      this.setState({ errors: {}, isLoading: true });
      this.props.userSignupRequest(this.state).then(
        () => {
          this.props.addFlashMessage({
            type: 'success',
            text: 'You signed up successfully. Login!'
          });
          this.context.router.history.push('/login')
        },
        ({ data }) => this.setState({ errors: data, isLoading:false })
      );
    }

  }
  render() {
    const { errors } = this.state;
    return(
      <div>
        <section classID="wrapper" className="login-register">
          <div className="wrapper_cen">
            <div className="row">
              <div className="col s12 m6 l6 welcome">
                <h1>Welcome to the Biggest<br />
                  Social Network in the World
                </h1>
                <p>We are the best and biggest social network with 5 billion active
                  users all around the world. Create account, create group
                  add other users to your group and post messages
                </p>

                <a href="#" className="my_btn btn-md btn-border btn-white">Register Now!</a>
              </div>
              <div className="col s12 m6 l6 reg_form">
                <div className="reg_form_cen">
                  <h4>Register to PostIt</h4>
                  <form className="col s12" onSubmit={this.handleSubmit}>
                    <div className="">
                      <TextFieldGroup
                        error = {errors.username}
                        label = "Username"
                        onChange = {this.handleChange}
                        checkUserExits = {this.checkUserExits}
                        value = {this.state.username}
                        field = "username"
                        type="text"
                      />
                      <TextFieldGroup
                        error = {errors.email}
                        label = "Email"
                        onChange = {this.handleChange}
                        checkUserExits = {this.checkUserExits}
                        value = {this.state.email}
                        field = "email"
                        type="text"
                      />
                      <TextFieldGroup
                        error = {errors.password}
                        label = "Password"
                        onChange = {this.handleChange}
                        value = {this.state.password}
                        field = "password"
                        type="password"
                      />
                      <TextFieldGroup
                        error = {errors.confirm_password}
                        label = "Confirm Password"
                        onChange = {this.handleChange}
                        value = {this.state.confirm_password}
                        field = "confirm_password"
                        type="password"
                      />
                      <div className="input-field col s12">
                        <button disabled={this.state.isLoading || this.state.invalid } className="btn waves-effect waves-light" type="submit" name="action">Submit
                          <i className="material-icons right">send</i>
                        </button>
                        <br /><br />
                      </div>
                    </div>
                  </form>
                  <p>Have an account already? <Link to="/login" className="blue-text text-darken-2"><b>Login</b></Link></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  isUserExists: PropTypes.func.isRequired
}

SignupForm.contextTypes = {
  router: PropTypes.object.isRequired
}



export default SignupForm;
