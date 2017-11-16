import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/**
 * A middleware that ensure a user is authenticated to access certain routes
 * @param {object} ComposedComponent - ComposedComponent
 *
 * @return {void} - void
 */
export default (ComposedComponent) => {
  class Authenticate extends React.Component {
    componentWillMount() {
      if (this.props.isAuthenticated) {
        this.context.router.history.push('/groups');
      }
    }

    componentWillUpdate(nextProps) {
      if (nextProps.isAuthenticated) {
        this.context.router.history.push('/groups');
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  Authenticate.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
  };

  Authenticate.contextTypes = {
    router: PropTypes.object.isRequired
  };
  /**
   * maps the store state isAuthenticated to props
   * @param {*} state
   *
   * @returns {void}
   */
  const mapStateToProps = (state) => {
    return {
      isAuthenticated: state.auth.isAuthenticated
    };
  };

  return connect(mapStateToProps)(Authenticate);
};
