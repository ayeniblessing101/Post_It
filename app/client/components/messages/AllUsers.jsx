import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AddUserModal from './AddUserModal';
import { fetchGroupUsers } from '../../actions/groupActions';

class AllUsers extends Component {
  /**
   * @memberof AllUsers
   * @return {void}
   */
  componentWillMount() {
    this.props.fetchGroupUsers(this.props.groupId);
  }
  render() {
    const groupUsers = this.props.groupUsers;
    const selectedGroupId = this.props.groupId;
    const { addUserToGroup } = this.props;
    return (
      <div>
        <div className="col s12 m12 l3 ">
          <h5 className="groupName">Users</h5>
          {<AddUserModal
              addUserToGroup={addUserToGroup}
              groupId={selectedGroupId}
          />}
          <ul
            className="collapsible allMessageCard"
            data-collapsible="accordion">
            {
              groupUsers.map(groupUser =>
                <li key={groupUser.id}>
                  <div className="collapsible-header">
                    <Link
                    to="#"
                    className="userNames">{groupUser.username}</Link>
                  </div>
                </li>
              )}
          </ul>
        </div>
      </div>
    );
  }
}

AllUsers.propTypes = {
  fetchGroupUsers: PropTypes.func.isRequired,
  groupUsers: PropTypes.array.isRequired,
  addUserToGroup: PropTypes.func.isRequired,
  groupId: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  groupUsers: state.groupUsers
});


export default connect(mapStateToProps, { fetchGroupUsers })(AllUsers);
