import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import GroupCard from './GroupCard';
const isEmpty = require('lodash/isEmpty');
// const avatar1 = require("../../images/avatar1.png");
// const avatar2 = require("../../images/avatar2.png");
// const avatar3 = require("../../images/friend-group2.jpg");

const GroupsList = ({ groups }) => {
  const emptyMessage = (
    <div>
      <h3 className="emptyMessage">No Groups</h3>
    </div>

  );

  const groupsList = (
    <div className="col s12 m10 l10 col-md-10 no-float">
      <div className="mycontainer">
        <div className="row ">
          <h4>All Groups</h4>
          <br />
          <div className="mycontainer">
            <div className="row ">
              {
                groups.map((group , i) => { return <GroupCard group={group} key={i} />
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
      isEmpty(groups) ? emptyMessage : groupsList
  );
}

GroupsList.propTypes = {
  groups: PropTypes.array.isRequired,
}

export default GroupsList;
