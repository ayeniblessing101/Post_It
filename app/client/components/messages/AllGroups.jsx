import React from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchGroups } from '../../actions/groupActions';

/**
 * @class AllGroups
 * @extends {React.Component}
 */
export class AllGroups extends React.Component {
  /**
   * Creates an instance of AllGroups.
   * @param {any} props
   * @memberof AllGroups
   */
  constructor(props) {
    super(props);
    this.usersPerPage = 5;
    this.state = {
      groups: this.props.groups.allGroups,
      offset: 0,
      pageCount: Math.ceil(this.props.groups.totalCount / this.usersPerPage),
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  /**
   * Calls the fetch Group action when component mounts
   * @memberof AllGroups
   *
   * @return {void}
   */
  componentDidMount() {
    this.props.fetchGroups();
  }

  /**
   * Updates the state on store change
   * @memberof AllGroups
   * @param {any} nextProps
   *
   * @return {void}
   */
  componentWillReceiveProps(nextProps) {
    this.setState({
      groups: nextProps.groups.allGroups,
      totalCount: nextProps.groups.totalCount,
      pageCount: Math.ceil(nextProps.groups.totalCount / this.usersPerPage),
    });
  }
  /**
   * The method to call when a page is clicked.
   * Exposes the current page object as an argument.
   * @param {number} page
   * @memberof AllGroups
   * @return {page} - page
   */
  handlePageClick(page) {
    const selected = page.selected;
    const offset = Math.ceil(selected * this.usersPerPage);

    this.setState({ offset }, () => {
      this.props.fetchGroups(offset);
    });
  }
  /**
   * Renders the AllGroup Component
   * @memberof AllGroups
   *
   * @returns {void}
   */
  render() {
    const { totalCount } = this.state;
    const groups = this.state.groups;
    return (
      <div className="allGroups">
        <div className="col s12 m12 l3 ">
          <h5 className="groupName">Groups</h5>
          <ul
            className="collapsible allMessageCard"
            data-collapsible="accordion"
          >
            {groups.length > 0 &&
              groups.map(group => (
                <li key={group.id}>
                  <div className="collapsible-header">
                    <i className="material-icons">filter_drama</i>
                    <Link to={`/group/${group.id}`} className="groupNames">
                      {group.groupName}
                    </Link>
                  </div>
                </li>
              ))}
          </ul>
          {totalCount > 4 && (
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
      </div>
    );
  }
}

AllGroups.propTypes = {
  groups: PropTypes.object.isRequired,
  fetchGroups: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  groups: state.groups,
  pageCount: state.groups.pageCount,
  messages: state.messages,
});

export default connect(mapStateToProps, { fetchGroups })(AllGroups);
