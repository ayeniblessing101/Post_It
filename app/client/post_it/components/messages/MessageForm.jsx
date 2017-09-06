import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { Textarea, Span } from 'react-materialize';
import moment from 'moment';
import { getMessages, postMessage, updateMessageStatus } from '../../actions/messageActions';

// const avatar2 = require("../images/avatar2.png");
// const avatar3 = require("../images/friend-group2.jpg");

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: this.props.messages,
      message: '',
      priority: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleMessageStatus = this.handleMessageStatus.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleMessageStatus(e) {
    e.preventDefault();
    this.props.updateMessageStatus(e.target.id);
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log('here',this.state.message);
    this.props.postMessage(this.props.groupId, {
      message: this.state.message,
      priority: this.state.priority
    });
    this.setState({
      message: '',
      priority: ''
    });
  }

  componentDidMount() {
    this.props.getMessages(this.props.groupId);
    $(document).ready(() => {
      $('select').material_select();
    });
  }

  // componentDidMount() {
  //   // console.log('this.props.groupId', this.props.groupId);
  //   $(document).ready(function() {
  //     $('select').material_select();
  //   });
  // }

  componentWillReceiveProps(nextProps) {
    this.setState({
      messages: nextProps.messages
    });
  }
  render() {
    const { group } = this.props;
    const groupId = parseInt(this.props.groupId, 10);
    let groupName = 'No Group Found';
    group.map((currentGroup) => {
      const { id, group_name } = currentGroup;
      if (id === groupId) {
        groupName = group_name;
      }
    });

    return (
      <div>
        <div className="col s12 m4 l6 message-cards">
          <div className="message-cards-board">
            <h5 className="groupName">{groupName}</h5>
            {
              this.state.messages.map(message => (
                <div key={message.id}>
                  <b className="senderName">
                    {message.User.username}</b>
                  <span className="right">
                    { moment(message.createdAt, moment.ISO_8601).fromNow() }
                  </span>
                  <p key={message.id}>
                    <Link
                      id={message.id}
                      className="messageLink"
                      to="#"
                      onClick={this.handleMessageStatus}>
                      {message.message_body}
                    </Link>
                    <span
                    className="new badge red"
                    data-badge-caption={message.priority_level} />
                  </p>
                  <hr /><br />
                </div>
              ))
            }
          </div>
          <div className="message-cards-form">
            <form onSubmit={this.handleSubmit}>
              <div className="input-field col s8">
                <textarea
                  placeholder="Write your message Here"
                  id="message"
                  type="text"
                  name="message"
                  onChange={this.handleChange}
                  value={this.state.message}
                  className="materialize-textarea"
                />
              </div>
              <div className="col s4 mySelect">
                <select
                  className="browser-default"
                  value={this.state.priority}
                  name="priority"
                  onChange={this.handleChange}>
                  <option value="" disabled>Select Priority</option>
                  <option value="Normal">Normal</option>
                  <option value="Critical">Critical</option>
                  <option value="Urgent">Urgent</option>
                </select>
                <br></br>
                <button className="btn messageBtn" type="submit">
                  <i className="material-icons">send</i>
                </button>
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

export default
connect(mapStateToProps,
  { getMessages, postMessage, updateMessageStatus })(MessageForm);
