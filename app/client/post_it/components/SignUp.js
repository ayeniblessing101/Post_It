import React, { Component } from 'react';
import { Button, Card, Row, Col } from 'react-materialize';
import { Link } from 'react-router-dom';

class SignUp extends React.Component{
  constructor(props){
    super(props);
    this.state={
      username : '',
      email: '',
      password: ''}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    /*'this' keyword is refering to the context of an event not a Component so we need to bind another context
    to the handleChange(e) function */
    this.setState({ [e.target.name] : e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(this.state);
  }

  render() {
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
                      <div className="input-field col s12">
                        <input classID="username" value={this.state.username} onChange={this.handleChange}
                          type="text" name="username" className="validate" />
                        <label htmlFor="username">Username</label>
                      </div>
                      <div className="input-field col s12">
                        <input classID="email" name="email" value={this.state.email} onChange={this.handleChange}
                          type="email" className="validate" />
                        <label htmlFor="email">Email</label>
                      </div>
                      <div className="input-field col s12">
                        <input classID="password" name="password" value={this.state.password} onChange={this.handleChange}
                          type="password" className="validate" />
                        <label htmlFor="password">Password</label>
                      </div>
                      <div className="input-field col s12">
                        <button className="btn waves-effect waves-light" type="submit" name="action">Submit
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
export default SignUp;
