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
    $(document).ready(function() {
      $('select').material_select();
    });
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
        <div className="col s12 m4 l6 message-cards">
          <div className="message-cards-board">
            <h5>{groupName}</h5>
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
          <div className="message-cards-form">
            <form onSubmit={this.handleSubmit}>
              <div className="input-field col s8">
                <input
                  placeholder="Write your message Here"
                  id="message"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.message}
                  className="validate"
                />
              </div>
              <div className="col s4 mySelect">
                <select className="browser-default">
                  <option value="" disabled selected>Select Priority</option>
                  <option value="1">Normal</option>
                  <option value="2">Critical</option>
                  <option value="3">Urgent</option>
                </select>
              </div>
            </form>
          </div>
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
