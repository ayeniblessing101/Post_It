import React from 'react';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ResetPasswordForm from './ResetPasswordForm';
import { checkToken } from '../../actions/forgotPasswordActions';

/**
 * @class ResetPasswordPage
 * @extends {React.Component}
 */
class ResetPasswordPage extends React.Component {
  /**
   * Creates an instance of ResetPasswordPage.
   * @param {any} props
   * @memberof ResetPasswordPage
   */
  constructor(props) {
    super(props);
    this.state = {
      ok: false
    };
  }

  /**
   * @memberof ResetPasswordPage
   * @return {void}
   */
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
