import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import { getMessages } from '../../actions/messageActions';

//const avatar2 = require("../images/avatar2.png");
//const avatar3 = require("../images/friend-group2.jpg");

class MessageForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      messages: this.props.messages
    };
  }
  componentDidMount() {
    this.props.getMessages(this.props.groupId);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      messages: nextProps.messages
    });
  }
  render(){
    // console.log(this.props.group);
    const { group } = this.props;
    const groupId = parseInt(this.props.groupId, 10);
    let groupName = 'No Group Found';
    group.map((currentGroup) => {
      let { id, group_name } = currentGroup;
      if(id === groupId){
        groupName = group_name;
      }
    })
    return (
      <div>
        <div className="col s12 m4 l8 groupHeader">
          <h5>{groupName}</h5>
        </div>
        <div className="col s12 m4 l8 message-cards">
          {
            this.state.messages.map(message => (
              <div key={message.id}>
                <b className="senderName">
                  {message.User.username}</b>
                <span className="right">
                  { moment(message.createdAt, moment.ISO_8601).fromNow() }
                </span>
                <p>{message.message_body}</p>
                <hr/><br/>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messages,
  group: state.groups
});

export default connect(mapStateToProps, { getMessages })(MessageForm);
