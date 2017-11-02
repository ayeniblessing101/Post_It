import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/authenticationActions';

/**
 * @class Header
 * @extends {React.Component}
 */
export class Header extends React.Component {
  /**
   * Creates an instance of Header.
   * @param {any} props
   * @memberof Header
   */
  constructor(props) {
    super(props);
    this.state = {
      searchParam: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    $('.dropdown-button').dropdown();
    $('.button-collapse').sideNav();
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
   * @param {any} event
   * @memberof Header
   * @return {void}
   */
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

/**
 * @param {any} event
 * @memberof Header
 * @return {void}
 */
  logout(event) {
    event.preventDefault();
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
          {
            isAuthenticated ?
              <nav>
                <div className="nav-wrapper">
                  <Link to="/" className="brand-logo">PostIt</Link>
                  <Link
                    to="#"
                    data-activates="mobile-demo"
                    className="button-collapse">
                    <i className="material-icons">menu</i>
                  </Link>
                  <ul className="side-nav" id="mobile-demo">
                    <li>
                      <Link
                        to="#"
                        data-activates="dropdown1">
                        <span className="welcome">Welcome</span>
                        <span
                          className="authUser">
                          { isAuthenticated ? user.username : ''}
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#" className="dropdown-button"
                        data-activates="dropdown1">
                        <i className="material-icons left">group</i>
                        Groups
                        <i className="material-icons right">arrow_drop_down</i>
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
                  <ul
                    classID="nav-mobile"
                    className="right hide-on-med-and-down">
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
                      <div className="authUser">
                        <span className="welcome">Welcome</span>
                        <span
                          className="authUser">
                          { isAuthenticated ? user.username : ''}
                        </span>
                      </div>
                    </li>
                    <li>
                      <ul id="dropdown1" className="dropdown-content">
                        <li>
                          <Link to="/groups">
                            <i
                              className="fa fa-eye"
                              aria-hidden="true" />
                            View all Groups
                          </Link>
                        </li>
                        <li>
                          <Link to="/add-group">
                            <i
                              className="fa fa-plus-circle"
                              aria-hidden="true" />
                            Add Groups
                          </Link>
                        </li>
                      </ul>
                      <Link
                        to="#" className="dropdown-button"
                        data-activates="dropdown1">
                        <i className="material-icons left">group</i>
                        Groups
                        <i className="material-icons right">arrow_drop_down</i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        id="logout"
                      onClick={this.logout.bind(this)}>
                        <i className="material-icons">power_settings_new</i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav> :
              <nav><Link to="/" className="brand-logo">PostIt</Link></nav>
          }
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  auth: PropTypes.object.isRequired,
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
