import React from 'react';
import { Link } from 'react-router-dom';


class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <div id="sidebar" className="col s12 m2 l2  col-md-2 no-float">
          <ul className="navbar_sidebar">
            <li>
              <Link to="/groups">View all Groups</Link>
              <i className="right fa fa-users" />
            </li>
            <li>
              <Link to="/add-group">Add Group</Link>
              <i className="right fa fa-plus-circle" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
