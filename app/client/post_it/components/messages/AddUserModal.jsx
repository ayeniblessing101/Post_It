import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-materialize';
import { connect } from 'react-redux';
import TextFieldGroup from '../common/TextFieldGroup';
import { validateInput } from '../../../../server/shared/validations/adduser';
import { addFlashMessage } from '../../actions/flashMessages';
import FlashMessagesList from '../flash/FlashMessagesList';

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
   * @returns {isValid}
   * @memberof AddUserModal
   */
  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  /**
   * @param {any} e 
   * @memberof AddUserModal
   * @returns {void}
   */
  handleSubmit(e) {
    e.preventDefault();
    const groupId = this.props.groupId;
    if (this.isValid()) {
      this.setState({ errors: {} });
      this.props.addUserToGroup(groupId, {
        username: this.state.username
      }).then((res) => {
        if (res) {
          this.props.addFlashMessage({
            type: 'success',
            text: 'User has been add to Group Successfully'
          });
        } else {
          this.props.addFlashMessage({
            type: 'error',
            text: 'User has already been added to Group'
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
   * @param {any} e
   * @memberof AddUserModal
   * @return {void}
   */
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  /**
   * @memberof AddUserModal
   * @returns {object} - AddUserModal Component
   */
  render() {
    const { errors, username } = this.state;
    return (
      <div>
        <Modal
          header='Add User to Group'
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
  addFlashMessage: PropTypes.func.isRequired,
};

export default connect(null, { addFlashMessage })(AddUserModal);
