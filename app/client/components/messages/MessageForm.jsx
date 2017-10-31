import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { getMessages, postMessage }
from '../../actions/messageAction';

/**
 * @class MessageForm
 * @extends {React.Component}
 */
class MessageForm extends React.Component {
  /**
   * Creates an instance of MessageForm.
   * @param {any} props
   * @memberof MessageForm
   */
  constructor(props) {
    super(props);
    this.state = {
      messages: this.props.messages,
      group: this.props.group,
      groupId: this.props.groupId,
      message: 'Enter a message',
      priority: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * @param {any} e
   * @memberof MessageForm
   * @returns {void}
   */
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  /**
   * @param {any} event
   * @memberof MessageForm
   * @return {void}
   */
  handleSubmit(event) {
    event.preventDefault();
    const message = {
      message_body: this.state.message,
      priority_level: this.state.priority
    };
    this.props.postMessage(this.state.groupId, message)
    .then(() => {
      this.setState({
        message: '',
        priority: ''
      });
    });
  }

  componentDidMount() {
    this.props.getMessages(this.props.groupId);
    $(document).ready(() => {
      $('select').material_select();
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      messages: nextProps.messages,
      group: nextProps.group,
      grouId: nextProps.groudId
    });
  }
  render() {
    let allMessages;
    const { group } = this.state;
    const { messages } = this.state;
    const groupId = parseInt(this.props.groupId, 10);
    let groupTitle = 'No Group Found';

    group.map((currentGroup) => {
      const { id, groupName } = currentGroup;
      groupTitle = groupName;
    });

    if (messages.length > 0) {
      allMessages = messages.map(message => (
        <div key={message.id}>
          <b className="senderName">
            {message.User.username}
          </b>
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
            className={`new badge ${(message.priority_level).toLowerCase()}`}
            data-badge-caption={message.priority_level} />
          </p>
          <hr /><br />
        </div>));
    } else {
      allMessages = (
        <h6>No messages to show</h6>
      );
    }

    return (
      <div>
        <div className="col s12 m12 l6 message-cards">
          <div className="message-cards-board">
            <h5 className="groupName">{groupTitle}</h5>
            { allMessages }
          </div>
          <div className="message-cards-form">
            <form onSubmit={this.handleSubmit} method="post">
              <div className="input-field col s8">
                <textarea
                  placeholder="Write your message Here"
                  id="message"
                  type="text"
                  required
                  name="message"
                  onChange={this.handleChange}
                  value={this.state.message}
                  className="materialize-textarea"
                />
              </div>
              <div className="col s4 mySelect">
                <select
                  className="browser-default"
                  required
                  value={this.state.priority}
                  name="priority"
                  onChange={this.handleChange}>
                  <option value="" disabled>Select Priority</option>
                  <option value="Normal">Normal</option>
                  <option value="Critical">Critical</option>
                  <option value="Urgent">Urgent</option>
                </select>
                <br />
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

MessageForm.propTypes = {
  postMessage: PropTypes.func.isRequired,
  getMessages: PropTypes.func.isRequired,
  groupId: PropTypes.number.isRequired,
  messages: PropTypes.array.isRequired
};


const mapStateToProps = state => ({
  messages: state.messages,
  group: state.groups
});

export default
connect(mapStateToProps,
  { getMessages, postMessage })(MessageForm);
