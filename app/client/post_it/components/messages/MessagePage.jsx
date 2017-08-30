import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MessageBoard from './MessageBoard';
import Header from "../Header";
import Sidebar from "../Sidebar";
import { connect } from 'react-redux';
import { addUserToGroup } from '../../actions/creategroupActions';


class MessagePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statusMessage: this.props.message,
    }
  }

  componentWillMount() {
    const groupId  = this.props.match.params.id;
    this.setState({
      groupId
    });
  }

  componentWillReceiveProps(nextProps) {
    if(this.state.statusMessage !== nextProps.message){
      this.setState({
        statusMessage: nextProps.message
      });
    }
  }

  render(){
    const { addUserToGroup } = this.props;
    return(
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
  message: PropTypes.string
}

MessagePage.defaultProps = {
  message: ''
}

function mapStateToProps(state, props) {
  return {
    groups: state.groups,
    message: state.groupUpdate.message
  }
}


export default connect(mapStateToProps, { addUserToGroup })(MessagePage);
