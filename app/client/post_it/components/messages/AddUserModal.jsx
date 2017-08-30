import React from 'react';
import PropTypes from 'prop-types';
import {Button, Modal, Icon, Row, Input} from 'react-materialize';
import { connect } from 'react-redux';
import TextFieldGroup from '../common/TextFieldGroup';
import { validateInput } from '../../../../server/shared/validations/adduser';
import { addFlashMessage } from '../../actions/flashMessages';
import FlashMessagesList from '../flash/FlashMessagesList';

//const avatar2 = require("../images/avatar2.png");
//const avatar3 = require("../images/friend-group2.jpg");

class AddUserModal extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      errors: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  isValid() {
    const { errors, isValid, addFlashMessage } = validateInput(this.state);

    if(!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  handleSubmit(e) {
    e.preventDefault();
    const groupId = this.props.groupId;
    if(this.isValid()) {
      this.setState({ errors: {} });
      this.props.addUserToGroup(groupId, {
        username: this.state.username
      }).then(() => {
        // console.log(this.props.statusMessage);
        this.props.addFlashMessage({
        type: 'success',
        text: 'User has been add to Group Successfully'
        });
      },
        ({ data }) => this.setState({
          errors: data,
          username: ''
        })
      );
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render(){
    const { errors, username}  = this.state;
    return (
      <div>
        <Modal
          header='Add User to Group'
          trigger={<Button className="add_user">Add User</Button>}>
          <FlashMessagesList />
          <form onSubmit={this.handleSubmit} >
           { errors.form && <div className="alert alert-danger">{errors.form}</div> }
            <TextFieldGroup
              error = {errors.username}
              label = "Username"
              onChange = {this.handleChange}
              value = {username}
              field = "username"
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
}

export default connect(null, { addFlashMessage })(AddUserModal);
