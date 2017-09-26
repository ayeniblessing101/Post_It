import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const avatar1 = require('../../images/avatar1.png');

// const avatar2 = require("../../images/avatar2.png");
// const avatar3 = require("../../images/friend-group2.jpg");

/**
 * Renders GroupCard component
 * @export
 * @param {any} { group }
 * @returns {object} - GroupCard component
 */
export default function GroupCard({ group }) {
  return (
    <div>
      <Link to={`/group/${group.id}`}>
        <div className="col s12 m5 l3 small-cards"><br />
          <img
          src="https://gallery.mailchimp.com/2c8fc6e5a4687e64ef666ab9f/images/649c1942-2e46-4068-a744-f0a9778e2bae.png"
          alt="avatar"
          />
          <h5><b>{group.group_name}</b></h5>
          <Link to={`/group/${group.id}`} className="btn btn-primary">
            Enter Group
          </Link>
          <br /><br />
        </div>
      </Link>
    </div>
  );
}

GroupCard.propTypes = {
  group: PropTypes.object.isRequired
};
