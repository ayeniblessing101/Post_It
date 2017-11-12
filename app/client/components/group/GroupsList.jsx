import React from 'react';
import PropTypes from 'prop-types';
import GroupCard from './GroupCard';

const isEmpty = require('lodash/isEmpty');

const GroupsList = ({ groups }) => {
  const emptyMessage = (
    <div>
      <h3 className="emptyMessage">No Groups</h3>
    </div>

  );
  const groupsList = (
    <div>
      <div className="col s12 m1 l1" />
      <div id="groupsList" className="col s12 m11 l11 col-md-10 no-float">
        <div className="mycontainer">
          <div className="row ">
            <h4 className="groupsTitle">All Groups</h4>
            <div className="mycontainer">
              <div className="row ">
                {
                  groups.map((group, i) => {
                    return <GroupCard group={group} key={i} />;
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
      isEmpty(groups) ? emptyMessage : groupsList
  );
};

GroupsList.propTypes = {
  groups: PropTypes.array.isRequired,
};

export default GroupsList;
