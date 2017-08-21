import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddUserModal from './AddUserModal';
import MessageForm from './MessageForm';
import AllGroups from './AllGroups';
import AllUsers from './AllUsers';

class MessageBoard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      groups: this.props.groups,
      message: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.postMessage(this.props.selectedGroupId, this.state.message);
    this.setState({
      message: ''
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      groups: this.props.groups
    })
  }

  render(){
    const groups = this.props.groups;
    const selectedGroupId = this.props.selectedGroupId;
    const statusMessage = this.props.statusMessage;
    const { addUserToGroup } = this.props;
    return(
      <div>
        <div className="col s12 m10 l10 col-md-10">
          <div id="messageBoard" className="mycontainer">
            {/*<AddUserModal
              addUserToGroup={addUserToGroup}
              groupId={selectedGroupId}
              statusMessage={statusMessage}
              />*/}
            <div className="row">
              <AllGroups
                groups={this.props.groups}
              />
              <MessageForm
                groupId={selectedGroupId}
              />
              <AllUsers />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MessageBoard.propTypes = {
  addUserToGroup: PropTypes.func.isRequired
}


export default connect(null)(MessageBoard);
