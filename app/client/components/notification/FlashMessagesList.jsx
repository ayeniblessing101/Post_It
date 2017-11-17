import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FlashMessage from './FlashMessage';

import { deleteFlashMessage } from '../../actions/flashMessageActions';

/**
 * @class FlashMessagesList
 * @extends {React.Component}
 */
export class FlashMessagesList extends React.Component {
  render() {
    let messages = '';
    const messagesFromState = this.props.messages;
    if (messagesFromState && messagesFromState.length > 0) {
      messages = messagesFromState.map(message => (
        <FlashMessage
          key={message.id}
          message={message}
          deleteFlashMessage={this.props.deleteFlashMessage}
        />
      ));
    }
    return <div>{messages}</div>;
  }
}

FlashMessagesList.propTypes = {
  messages: PropTypes.array.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired,
};

/**
 * takes a state in the store (messages) and passes it to the component as props
 *
 * @param {object} state
 * @returns
 */
function mapStateToProps(state) {
  return {
    messages: state.flashMessages,
  };
}

export default connect(mapStateToProps, { deleteFlashMessage })(
  FlashMessagesList,
);
