import React from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import getUsersAction from '../../actions/getUsersAction';

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
    const { pagination } = this.props;
    this.state = {
      users: pagination.users,
      offset: 0,
      pageCount: Math.ceil(pagination.count / this.usersPerPage),
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
    this.props.getUsersAction(this.searchParams);
  }

  /**
   * update component with new props
   * @param {object} nextProps
   * @memberof UserList
   * @return {void}
   */
  componentWillReceiveProps(nextProps) {
    this.setState({
      users: nextProps.pagination.users,
      totalCount: nextProps.pagination.totalCount,
      pageCount: Math.ceil(nextProps.pagination.totalCount / this.usersPerPage),
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
      this.props.getUsersAction(this.searchParams, offset);
    });
  }

  /**
   * Renders the UserList component
   * @memberof UserList
   * @return {object} - UserList component
   */
  render() {
    const { users, totalCount } = this.state;
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
                    {users.length > 0 ? (
                      users.map((user, index) => (
                        <tr key={index}>
                          <td>{user.username}</td>
                          <td>{user.email}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td className="center" col="2" colSpan="2">
                          No user found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
                {totalCount > 5 && (
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
                )}
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
  location: PropTypes.object.isRequired,
  getUsersAction: PropTypes.func.isRequired,
  pagination: PropTypes.shape({
    users: PropTypes.array.isRequired,
    totalCount: PropTypes.number,
  }),
};

const mapStateToProps = state => ({
  pagination: state.pagination,
  pageCount: state.pagination.pageCount,
});

export default connect(mapStateToProps, { getUsersAction })(
  withRouter(UserList),
);
