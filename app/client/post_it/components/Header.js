import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component{
  render(){
    return(
      <div>
        <div className="navbar-fixed">
          <ul classID="dropdown1" className="dropdown-content">
            <li><Link to="#!">one</Link></li>
            <li><Link to="#!">two</Link></li>
          </ul>
          <nav>
            <div className="nav-wrapper">
              <Link to="#" className="brand-logo">PostIt</Link>
              <ul classID="nav-mobile" className="right hide-on-med-and-down">
                <li><i className="material-icons">perm_identity</i></li>
                <li><Link to="#" className="dropdown-button" data-activates="dropdown1">Welcome Blessing<i className="material-icons right">arrow_drop_down</i></Link></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header
