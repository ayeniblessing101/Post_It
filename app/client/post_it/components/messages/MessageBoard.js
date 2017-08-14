import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddUserModal from './AddUserModal';
import MessageForm from './MessageForm';
import AllGroups from './AllGroups';
import PropTypes from 'prop-types';

class MessageBoard extends React.Component{



  render(){
    const groups = this.props.group;
    const selectedGroupId = this.props.selectedGroupId;
    const statusMessage = this.props.statusMessage;
    const { addUserToGroup } = this.props
    return(
      <div>
        <div className="col s12 m10 l10 col-md-10">
          <div className="mycontainer">
          <br/>
            <AddUserModal
              addUserToGroup={addUserToGroup}
              groupId={selectedGroupId}
              statusMessage={statusMessage}
              />
            <div className="row">
              <AllGroups groups={this.props.groups}/>
              <MessageForm />
              <div className="col s12 m4 l1"></div>
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


export default MessageBoard;
