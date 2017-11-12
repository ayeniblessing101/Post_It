import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * Renders GroupCard component
 * @export
 * @param {any} group
 * @returns {object} - GroupCard component
 */
export default function GroupCard({ group }) {
  return (
    <div>
      <Link to={`/group/${group.id}`}>
        <div className="col s12 m5 l3 small-cards"><br />
          <img
            src={group.image}
            alt="avatar"
            />
          <h5><b>{group.groupName}</b></h5>
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
