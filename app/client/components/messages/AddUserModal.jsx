import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-materialize';
import { connect } from 'react-redux';
import TextFieldGroup from '../common/TextFieldGroup';
import { validateAddUserInput } from '../../validations/validation';
import { addFlashMessage } from '../../actions/flashMessageActions';
import { fetchGroupUsers } from '../../actions/groupActions';
import FlashMessagesList from '../notification/FlashMessagesList';

/**
 * @class AddUserModal
 * @extends {React.Component}
 */
class AddUserModal extends React.Component {
  /**
   * Creates an instance of AddUserModal.
   * @param {any} props
   * @memberof AddUserModal
   */
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      errors: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * Checks if form input(s) is valid
   * @returns {isValid} - checks if form input is valid
   * @memberof AddUserModal
   */
  isValid() {
    const { errors, isValid } = validateAddUserInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  /**
   * Handles submit request
   * @param {any} event
   * @memberof AddUserModal
   *
   * @returns {void}
   */
  handleSubmit(event) {
    event.preventDefault();
    const groupId = this.props.groupId;
    if (this.isValid()) {
      this.setState({ errors: {} });
      this.props.addUserToGroup(groupId, {
        username: this.state.username
      }).then((res) => {
        if (res === true) {
          this.props.addFlashMessage({
            type: 'success',
            text: 'User has been add to Group Successfully'
          });
          this.props.fetchGroupUsers(groupId);
        } else {
          this.props.addFlashMessage({
            type: 'error',
            text: res
          });
        }
      });
    }
    this.setState({
      username: '',
      errors: {}
    });
  }

  /**
   * Handles onChange event
   * @param {any} event
   * @memberof AddUserModal
   *
   * @return {void}
   */
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  /**
   * @memberof AddUserModal
   *
   * @returns {object} - AddUserModal Component
   */
  render() {
    const { errors, username } = this.state;
    return (
      <div>
        <Modal
          header="Add User to Group"
          trigger={<Button className="add_user">Add User</Button>}>
          <FlashMessagesList />
          <form onSubmit={this.handleSubmit} >
            { errors.form &&
              <div className="alert alert-danger">{errors.form}</div> }
            <TextFieldGroup
              error={errors.username}
              label="Username"
              onChange={this.handleChange}
              value={username}
              field="username"
              type="text"
            />
            <Button
              className="btn waves-effect waves-light"
              type="submit"
            >
            Add
            </Button>
          </form>
        </Modal>
      </div>
    );
  }

}

AddUserModal.propTypes = {
  addUserToGroup: PropTypes.func.isRequired,
  fetchGroupUsers: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  groupId: PropTypes.number.isRequired
};

export default connect(null,
  { addFlashMessage, fetchGroupUsers })(AddUserModal);
