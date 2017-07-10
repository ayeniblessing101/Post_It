import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Sidebar extends React.Component{
  render(){
    return(
      <div>
        <div className="col s12 m2 l2  col-md-2 no-float">
          <ul className="navbar_sidebar">
            <li><Link to="/dashboard">View all Groups</Link><i className="right fa fa-users"></i></li>
            <li><Link to="/add-group">Add Group</Link><i className="right fa fa-plus-circle"></i></li>
            <li><Link to="/add-user">Add Users</Link><i className="right fa fa-plus"></i></li>
            <li><Link to="#">All Messages</Link><i className="right fa fa-eye"></i></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar
