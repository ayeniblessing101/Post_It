import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GroupsList from './GroupsList';
import Header from "../Header";
import Sidebar from "../Sidebar";

class GroupsPage extends React.Component{
  render(){
    const { groups } = this.props;
    return(
      <div>
        <Header />
        <div className="mycontainer" >
          <div className="row">
            <Sidebar />
            <GroupsList  groups={groups} />
          </div>
        </div>
      </div>
    );
  }
}

GroupsPage.propTypes = {
  groups: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    groups: state.groups
  }
}

export default connect(mapStateToProps)(GroupsPage);
