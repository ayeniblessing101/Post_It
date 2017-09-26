import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchGroupUsers } from '../../actions/creategroupActions';

// const avatar2 = require("../images/avatar2.png");
// const avatar3 = require("../images/friend-group2.jpg");

class AllUsers extends React.Component {
  /**
   * @memberof AllUsers
   * @return {void}
   */
  componentWillMount() {
    this.props.fetchGroupUsers(this.props.groupId);
  }
  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     groups: nextProps.groups
  //   })
  // }
  render() {
    const groupUsers = this.props.groupUsers;
    return (
      <div>
        <div className="col s12 m4 l3 ">
          <ul
            className="collapsible allMessageCard"
            data-collapsible="accordion"
          >
            {
              groupUsers.map(groupUser =>
                <li key={groupUser.id}>
                  <div className="collapsible-header">
                    <Link
                    to='#'
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

AllUsers.prototype = {
  fetchGroupUsers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  groupUsers: state.groupUsers
});


export default connect(mapStateToProps, { fetchGroupUsers })(AllUsers);
