import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchGroups } from '../../actions/creategroupActions';

//const avatar2 = require("../images/avatar2.png");
//const avatar3 = require("../images/friend-group2.jpg");

class AllUsers extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      groups: this.props.groups
    }
  }

  componentDidMount() {
    this.props.fetchGroups();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      groups: nextProps.groups
    })
  }
  render(){
    const groups = this.state.groups;
    return (
      <div>
        <div className="col s12 m4 l3 ">
          <ul
            className="collapsible allMessageCard"
            data-collapsible="accordion"
          >
            <li>
              <div className="collapsible-header">
                <Link to='#'>Blessing</Link>
              </div>
            </li>
            <li>
              <div className="collapsible-header">
                <Link to='#'>Dolapo</Link>
              </div>
            </li>

          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  groups: state.groups
})

export default connect(mapStateToProps, { fetchGroups })(AllUsers);
