import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchGroups } from '../../actions/creategroupActions';

//  const avatar2 = require("../images/avatar2.png");
// const avatar3 = require("../images/friend-group2.jpg");

class AllGroups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: this.props.groups,
      // messages: this.props.messages
    };
  }

  componentDidMount() {
    this.props.fetchGroups();
    // this.props.getMessages(this.state.groupId);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      groups: nextProps.groups,
      messages: nextProps.messages
    });
  }
  render() {
    const groups = this.state.groups;

    { /* const allNewMessages = (this.state.messages).length; */ }
    return (
      <div>
        <div className="col s12 m4 l3 ">
          <ul
            className="collapsible allMessageCard"
            data-collapsible="accordion"
          >
            {
              groups.map(group =>
                <li key={group.id}>
                  <div className="collapsible-header">
                    <i className="material-icons">filter_drama</i>
                    <Link to={`/group/${group.id}`} className="groupNames">
                      {group.group_name}
                    </Link>
                  </div>
                </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

AllGroups.PropTypes = {
  groups: PropTypes.shape([]).isRequired,
  fetchGroups: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  groups: state.groups,
  messages: state.messages
});

export default connect(mapStateToProps, { fetchGroups })(AllGroups);
