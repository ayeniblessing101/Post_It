import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addFlashMessage } from '../actions/flashMessageActions';

/**
 * A middleware that ensure a user is authenticated to access certain routes
 * @param {object} ComposedComponent - ComposedComponent
 * @return {void} - void
 */
export default (ComposedComponent) => {
  class Authenticate extends React.Component {
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        this.props.addFlashMessage({
          type: 'error',
          text: 'You need to login to access this page'
        });
        this.context.router.history.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        this.context.router.history.push('/');
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
    addFlashMessage: PropTypes.func.isRequired
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

  return connect(mapStateToProps, { addFlashMessage })(Authenticate);
};
