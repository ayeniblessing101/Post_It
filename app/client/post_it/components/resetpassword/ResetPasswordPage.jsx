import React, { Component } from 'react';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ResetPasswordForm from './ResetPasswordForm';
import { checkToken } from '../../actions/forgotPasswordAction';

class ResetPasswordPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ok: false
    };
  }

  componentDidMount() {
    const query = queryString.parse(this.props.location.search);
    const token = query.token;
    const email = query.email;
    this.props.checkToken(token, email)
    .then(() => {
      this.setState({
        ok: true
      });
    }, () => {
      //
    });
  }

  render() {
    return (
      <div>
        { this.state.ok && <ResetPasswordForm />}
      </div>
    );
  }
}

ResetPasswordPage.propTypes = {
  checkToken: PropTypes.func.isRequired
};


export default connect(null, { checkToken })(ResetPasswordPage);
