import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const avatar1 = require("../../images/avatar1.png");

//const avatar2 = require("../images/avatar2.png");
//const avatar3 = require("../images/friend-group2.jpg");

export default function GroupCard({ group }) {
  return (
    <div>
      <div className="col s12 m10 l10 col-md-10 no-float">
        <div className="mycontainer">
          <div className="row ">
            <h4>All Groups</h4><br />
            <div className="col s12 m5 l3 small-cards"><br/>
              <img src={avatar1} />
              <h5><b>{group.group_name}</b></h5>
              6 users in the Group<br/><br/><br/>
              <Link to={'/group/' + group.id} className="btn btn-primary">Enter Group</Link><br/><br/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

GroupCard.propTypes = {
  group: PropTypes.object.isRequired
}
