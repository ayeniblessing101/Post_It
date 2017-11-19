import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MessageBoard from './MessageBoard';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { addUserToGroup } from '../../actions/groupActions';

/**
 * Creates Message Page
 * @class MessagePage
 * @extends {React.Component}
 */
class MessagePage extends React.Component {
  /**
   * Set the groupId to state when component mounts
   *
   * @memberof MessagePage
   * @return {void}
   */
  componentWillMount() {
    const groupId = this.props.match.params.id;
    this.setState({
      groupId,
    });
  }

  /**
   * Renders the MessagePage component and its subcomponent
   *
   * @returns {void}
   * @memberof MessagePage
   */
  render() {
    return (
      <div>
        <Header />
        <div className="mycontainer">
          <div className="row">
            <MessageBoard
              groups={this.props.groups}
              addUserToGroup={this.props.addUserToGroup}
              selectedGroupId={Number(this.state.groupId)}
              selectedGroupName={this.state.selectedGroupName}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

MessagePage.propTypes = {
  addUserToGroup: PropTypes.func.isRequired,
  groups: PropTypes.object.isRequired,
};

MessagePage.defaultProps = {
  message: '',
};

const mapStateToProps = state => ({
  groups: state.groups,
});

export default connect(mapStateToProps, { addUserToGroup })(MessagePage);
