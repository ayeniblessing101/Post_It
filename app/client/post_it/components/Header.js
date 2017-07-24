import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import{ logout } from '../actions/authActions';

class Header extends React.Component{
  logout(e) {
    e.preventDefault();
    this.props.logout(this.state);
    this.context.router.history.push('/login')
  }
  render(){
    const { isAuthenticated, user} = this.props.auth;
    // const authUser = {user.data.username}
    return(
      <div>
        <div className="navbar-fixed">
          <ul classID="dropdown1" className="dropdown-content">
            <li><Link to="#!">one</Link></li>
            <li><Link to="#!">two</Link></li>
          </ul>
          <nav>
            <div className="nav-wrapper">
              <Link to="#" className="brand-logo">PostIt</Link>
              <ul classID="nav-mobile" className="right hide-on-med-and-down">
                <li><i className="material-icons">perm_identity</i></li>
                <li><Link to="#" className="dropdown-button" data-activates="dropdown1">Welcome {user.data.username}</Link></li>
                <li><Link to="#" onClick={this.logout.bind(this)}><i className="material-icons">power_settings_new</i></Link></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

Header.contextTypes = {
  router: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { logout })(Header);
