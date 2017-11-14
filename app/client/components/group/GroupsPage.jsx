import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import GroupsList from './GroupsList';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { fetchGroups } from '../../actions/groupActions';

/**
 * renders groups page compoent
 * @class GroupsPage
 * @extends {React.Component}
 */
class GroupsPage extends React.Component {
  /**
   * Creates an instance of GroupsPage.
   * @param {any} props
   * @memberof GroupsPage
   */
  constructor(props) {
    super(props);
    this.usersPerPage = 6;
    this.state = {
      groups: [],
      offset: 0,
      pageCount: Math.ceil(this.props.groups.totalCount / this.usersPerPage)
    };

    this.handlePageClick = this.handlePageClick.bind(this);
  }
  /**
   * @memberof GroupsPage
   *
   * @return {void}
   */
  componentDidMount() {
    this.props.fetchGroups(0, 6);
  }

  /**
   * @param {any} nextProps
   * @memberof GroupsPage
   *
   * @return {void}
   */
  componentWillReceiveProps(nextProps) {
    this.setState({
      groups: nextProps.groups.allGroups,
      totalCount: nextProps.groups.totalCount,
      pageCount: Math.ceil(nextProps.groups.totalCount / this.usersPerPage)
    });
  }

  /**
   * used to calculate offset
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
   * Renders the GroupPage Component
   * @returns {object} groupsPage Component
   * @memberof GroupsPage
   */
  render() {
    const { totalCount, groups } = this.state;
    return (
      <div id="groupsPage">
        <Header />
        <div className="mycontainer" >
          <div className="row">
            <GroupsList groups={groups} />
          </div>
          <div className="row">
            <div className="dashboard-paginate">
              {
                totalCount > 6 &&
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
                }
            </div>
          </div>
          <div style={{ clear: 'both' }} />
        </div>
        <Footer />
      </div>
    );
  }
}

// as props is introduced to this component its documented with propTypes
GroupsPage.propTypes = {
  fetchGroups: PropTypes.func.isRequired,
  groups: PropTypes.shape({
    totalCount: PropTypes.number.isRequired,
    allGroups: PropTypes.array.isRequired,
  }),
};

const mapStateToProps = state => ({
  groups: state.groups,
  pageCount: state.groups.pageCount,
});


export default connect(mapStateToProps, { fetchGroups })(GroupsPage);
