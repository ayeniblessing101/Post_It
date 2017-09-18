import React from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import { getUsers } from '../../actions/usersAction';

/**
 * @class UserList
 * @extends {Component}
 */
class UserList extends React.Component {
  /**
   * Creates an instance of UserList.
   * @param {object} props
   * @memberof UserList
   */
  constructor(props) {
    super(props);
    this.usersPerPage = 5;
    const { users } = this.props;
    this.state = {
      users: users.users,
      offset: 0,
      pageCount: Math.ceil(users.count / this.usersPerPage)
    };
    this.handlePageClick = this.handlePageClick.bind(this);
    this.searchParams = queryString.parse(this.props.location.search).q;
  }

  /**
   * call the getUsers method after component have mounted
   * @memberof UserList
   * @return {void}
   */
  componentDidMount() {
    this.props.getUsers(this.searchParams);
  }

  /**
   * update component with new props
   * @param {object} nextProps
   * @memberof UserList
   * @return {void}
   */
  componentWillReceiveProps(nextProps) {
    this.setState({
      users: nextProps.users.users,
      pageCount: Math.ceil(nextProps.users.totalCount / this.usersPerPage)
    });
  }

  /**
   * used to calculate offset
   * @param {number} page
   * @memberof UserList
   * @return {page} - page
   */
  handlePageClick(page) {
    const selected = page.selected;
    const offset = Math.ceil(selected * this.usersPerPage);

    this.setState({ offset }, () => {
      this.props.getUsers(this.searchParams, offset);
    });
  }

  /**
   * Renders the UserList component
   * @memberof UserList
   * @return {object} - UserList component
   */
  render() {
    return (
      <div>
        <div className="col s12 m10 l10 col-md-10">
          <div className="mycontainer">
            <div className="row">
              <div className="col s12 m4 l2" />
              <div className="col s12 m4 l8 large-cards">
                <h4>Users</h4>    
                <table className="striped responsive-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.props.users.users.map(user => (
                        <tr key={user.id}>
                          <td>{user.username}</td>
                          <td>{user.email}</td>
                        </tr>
                      ))
                    }         
                  </tbody>
                </table>
                <ReactPaginate
                  previousLabel={'previous'}
                  nextLabel={'next'}
                  breakLabel={<a href="">...</a>}
                  breakClassName={'break-me'}
                  pageCount={this.state.pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={this.handlePageClick}
                  containerClassName={'pagination'}
                  subContainerClassName={'pages pagination'}
                  activeClassName={'active'}
                />
              </div>
              <div className="col s12 m4 l2" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UserList.propTypes = {
  getUsers: PropTypes.func.isRequired,
  pageCount: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  users: PropTypes.shape([]).isRequired,
  location: React.PropTypes.shape({}).isRequired
};

const mapStateToProps = state => ({
  users: state.users,
  pageCount: state.pageCount
});

export default connect(mapStateToProps, { getUsers })(withRouter(UserList))
