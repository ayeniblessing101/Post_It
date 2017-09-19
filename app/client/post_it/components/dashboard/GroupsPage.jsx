import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GroupsList from './GroupsList';
import Header from '../Header';
import Sidebar from '../Sidebar';
import { fetchGroups } from '../../actions/creategroupActions';

class GroupsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      groups: []
    };
  }
  componentDidMount() {
    this.props.fetchGroups();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      groups: nextProps.groups
    });
  }

  render() {
    const { groups } = this.state;

    return (
      <div id="groupsPage">
        <Header />
        <div className="mycontainer" >
          <div className="row">
            <Sidebar />
            <GroupsList groups={groups} />
          </div>
        </div>
      </div>
    );
  }
}

// as props is introduced to this component its documented with propTypes
GroupsPage.propTypes = {
  groups: PropTypes.array.isRequired,
  fetchGroups: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  groups: state.groups
});


export default connect(mapStateToProps, { fetchGroups })(GroupsPage);
