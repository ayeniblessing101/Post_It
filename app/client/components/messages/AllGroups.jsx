import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchGroups } from '../../actions/groupActions';


/**
 * @class AllGroups
 * @extends {React.Component}
 */
class AllGroups extends React.Component {
  /**
   * Creates an instance of AllGroups.
   * @param {any} props
   * @memberof AllGroups
   */
  constructor(props) {
    super(props);
    this.state = {
      groups: this.props.groups,
    };
  }

  /**
   * @memberof AllGroups
   *
   * @return {void}
   */
  componentDidMount() {
    this.props.fetchGroups();
  }

  /**
   * @param {any} nextProps
   * @memberof AllGroups
   * @return {void}
   */
  componentWillReceiveProps(nextProps) {
    this.setState({
      groups: nextProps.groups,
      messages: nextProps.messages
    });
  }
  /**
   * Renders the AllGroup Component
   * @memberof AllGroups
   *
   * @returns {object} - AllGroups Component
   */
  render() {
    const groups = this.state.groups;
    return (
      <div>
        <div className="col s12 m12 l3 ">
          <ul
            className="collapsible allMessageCard"
            data-collapsible="accordion"
          >
            {
              groups.map(group =>
                <li key={group.id}>
                  <div className="collapsible-header">
                    <i className="material-icons">filter_drama</i>
                    <Link to={`/group/${group.id}`} className="groupNames">
                      {group.groupName}
                    </Link>
                  </div>
                </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

AllGroups.propTypes = {
  groups: PropTypes.array.isRequired,
  fetchGroups: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  groups: state.groups,
  messages: state.messages
});

export default connect(mapStateToProps, { fetchGroups })(AllGroups);
