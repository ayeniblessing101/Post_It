import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextFieldGroup from '../common/TextFieldGroup';
import { createGroup } from '../../actions/groupActions';
import { validateInput } from '../../validations/addgroup';

/**
 * @class AddGroupForm
 * @extends {React.Component}
 */
class AddGroupForm extends React.Component {
  /**
   * Creates an instance of AddGroupForm.
   * @param {any} props
   * @memberof AddGroupForm
   */
  constructor(props) {
    super(props);
    this.state = {
      groupname: '',
      errors: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  /**
   * @param {any} event
   * @memberof AddGroupForm
   * @return {void}
   */
  handleSubmit(event) {
    event.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.createGroup(this.state).then(
        () => {
          this.context.router.history.push('/groups');
        },
        ({ data }) => this.setState({
          groupname: '',
          errors: data
        })
      );
    }
  }

  /**
   * @param {any} event
   * @memberof AddGroupForm
   * @return {void}
   */
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  /**
   * Reander AddGroup Form component
   * @returns {object} Add group form component
   * @memberof AddGroupForm
   */
  render() {
    const { errors, groupname } = this.state;
    return (
      <div>
        <div className="col s12 m10 l10 col-md-10">
          <div className="mycontainer">
            <div className="row">
              <div className="col s12 m4 l2" />
              <div className="col s12 m4 l8 large-cards">
                <h4>Add Group</h4>
                <form onSubmit={this.handleSubmit}>
                  { errors.form &&
                    <div
                      className="alert alert-danger">
                      {errors.form}
                    </div>
                  }
                  <div className="">
                    <TextFieldGroup
                      error={errors.groupname}
                      label="Group Name"
                      onChange={this.handleChange}
                      value={groupname}
                      field="groupname"
                      type="text"
                    />
                    <div className="input-field col s12">
                      <button
                        className="btn waves-effect waves-light"
                        type="submit">
                        Create
                      </button>
                      <br /><br />
                    </div>
                  </div>
                  <br /><br />
                </form>
              </div>
              <div className="col s12 m4 l2" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddGroupForm.propTypes = {
  createGroup: PropTypes.func.isRequired,
};

AddGroupForm.contextTypes = {
  router: PropTypes.object.isRequired
};

export default connect(null, { createGroup })(AddGroupForm);
