import React from 'react';
import PropTypes from 'prop-types';

//const avatar2 = require("../images/avatar2.png");
//const avatar3 = require("../images/friend-group2.jpg");

class AllGroups extends React.Component{
  render(){
    const groups = this.props.groups;
    return (
      <div>
        <div className="col s12 m4 l3 ">
          <ul
            className="collapsible allMessageCard"
            data-collapsible="accordion"
          >
            {
              groups.map((group) =>
              <li key={group.id}>
                <div className="collapsible-header">
                  <span className="new badge red">4</span>
                  <i className="material-icons">filter_drama</i>
                  {group.group_name}
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default AllGroups;
