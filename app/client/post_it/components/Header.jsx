import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/authActions';

/**
 * @class Header
 * @extends {React.Component}
 */
class Header extends React.Component {
  /**
   * Creates an instance of Header.
   * @param {any} props
   * @memberof Header
   */
  constructor(props) {
    super(props);
    this.state = {
      searchParam: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * redirects to search result page
   * @memberof Header
   * @return {void}
   */
  handleSubmit() {
    this.context.router.history
    .push(`/user/search?q=${this.state.searchParam}`);
  }

  /**
   * @param {any} e
   * @memberof Header
   * @return {void}
   */
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

/**
 * @param {any} e
 * @memberof Header
 * @return {void}
 */
  logout(e) {
    e.preventDefault();
    this.props.logout(this.state);
  }

  /**
   * Renders the header component
   * @returns {object} - header component
   * @memberof Header
   */
  render() {
    const { isAuthenticated, user } = this.props.auth;
    return (
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
                <li>
                  <form id="searchForm" onSubmit={this.handleSubmit}>
                    <input
                      type="text"
                      name="searchParam"
                      placeholder="Search for Friends"
                      id="searchBar"
                      value={this.state.searchParam}
                      onChange={this.handleChange}
                    />
                  </form>
                </li>
                <li>
                  <Link
                    to="#" className="dropdown-button"
                    data-activates="dropdown1">
                    Welcome
                    <span className="authUser">{user.data.username}</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                  onClick={this.logout.bind(this)}>
                    <i className="material-icons">power_settings_new</i>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  auth: PropTypes.shape({}).isRequired,
  logout: PropTypes.func.isRequired
};

Header.contextTypes = {
  router: PropTypes.object.isRequired
};


const mapStateToProps = state => (
  {
    auth: state.auth
  }
);

export default connect(mapStateToProps, { logout })(Header);
