import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MessageForm from './MessageForm';
import AllGroups from './AllGroups';
import AllUsers from './AllUsers';

/**
 * @class MessageBoard
 * @extends {React.Component}
 */
class MessageBoard extends React.Component {
  /**
   * Creates an instance of MessageBoard.
   * @param {any} props
   * @memberof MessageBoard
   */
  constructor(props) {
    super(props);
    this.state = {
      groups: this.props.groups,
    };
  }

  /**
   * @param {any} nextProps
   * @memberof MessageBoard
   * @return {void}
   */
  componentWillReceiveProps(nextProps) {
    this.setState({
      groups: nextProps.groups
    });
  }

  render() {
    const groups = this.props.groups;
    const selectedGroupId = this.props.selectedGroupId;
    const { addUserToGroup } = this.props;
    return (
      <div>
        <div className="col s12 m12 l12 col-md-10">
          <div id="messageBoard" className="mycontainer">
            <div className="row">
              <AllGroups
                groups={this.props.groups}
              />
              <MessageForm
                groupId={selectedGroupId}
              />
              <AllUsers
                addUserToGroup={addUserToGroup}
                groupId={selectedGroupId} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MessageBoard.propTypes = {
  addUserToGroup: PropTypes.func.isRequired,
  groups: PropTypes.array.isRequired,
  selectedGroupId: PropTypes.number.isRequired
};


export default connect(null)(MessageBoard);
