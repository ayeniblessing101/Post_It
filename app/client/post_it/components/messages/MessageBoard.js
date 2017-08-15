import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddUserModal from './AddUserModal';
import MessageForm from './MessageForm';
import AllGroups from './AllGroups';
import PropTypes from 'prop-types';

class MessageBoard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      groups: this.props.groups
    }
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
              <AllGroups
                groups={this.props.groups}
              />
              <MessageForm
                groupId={selectedGroupId}
              />
            <div className="fixed-action-btn horizontal click-to-toggle">
                 <a className="btn-floating btn-large red">
                   <i className="large material-icons">mode_edit</i>
                 </a>
                 <ul>
                   <li>
                     <form id="message_form">
                       <div className="col s12">
                         <input classID="message" type="text"
                           placeholder="click here to type ypur message" className="validate" />
                       </div>
                     </form>
                   </li>
                 </ul>
              </div>
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
