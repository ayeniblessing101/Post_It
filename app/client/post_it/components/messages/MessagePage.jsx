import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MessageBoard from './MessageBoard';
import Header from '../Header';
import Sidebar from '../Sidebar';
import { addUserToGroup } from '../../actions/creategroupActions';

/**
 * @class MessagePage
 * @extends {React.Component}
 */
class MessagePage extends React.Component {
  /**
   * Creates an instance of MessagePage.
   * @param {any} props
   * @memberof MessagePage
   */
  constructor(props) {
    super(props);
    this.state = {
      statusMessage: this.props.message,
    };
  }

  /**
   * @memberof MessagePage
   * @return {void}
   */
  componentWillMount() {
    const groupId = this.props.match.params.id;
    this.setState({
      groupId
    });
  }
  /**
   * @param {any} nextProps
   * @memberof MessagePage
   * @return {void}
   */
  componentWillReceiveProps(nextProps) {
    if (this.state.statusMessage !== nextProps.message) {
      this.setState({
        statusMessage: nextProps.message
      });
    }
  }

  /**
   * @returns {object} - Message Component
   * @memberof MessagePage
   */
  render() {
    const { addUserToGroup } = this.props;
    return (
      <div>
        <Header />
        <div className="mycontainer" >
          <div className="row">
            <Sidebar />
            <MessageBoard
              groups={this.props.groups}
              addUserToGroup={addUserToGroup}
              selectedGroupId={this.state.groupId}
              selectedGroupName={this.state.selectedGroupName}
              statusMessage={this.state.statusMessage}
            />
          </div>
        </div>
      </div>
    );
  }
}

MessagePage.propTypes = {
  addUserToGroup: PropTypes.func.isRequired,
  message: PropTypes.string,
};

MessagePage.defaultProps = {
  message: ''
};

const mapStateToProps = state => (
  {
    groups: state.groups,
    message: state.groupUpdate.message
  }
);


export default connect(mapStateToProps, { addUserToGroup })(MessagePage);
