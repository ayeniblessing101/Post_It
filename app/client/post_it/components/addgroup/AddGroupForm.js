import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextFieldGroup from '../common/TextFieldGroup';
import { createGroup } from '../../actions/creategroupActions';
import { addFlashMessage } from '../../actions/flashMessages'
import {validateInput} from '../../../../server/shared/validations/addgroup';
import FlashMessagesList from '../flash/FlashMessagesList';

class AddGroupForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      groupname: '',
      errors: {},
      isLoading: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if(!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.createGroup(this.state).then(
        () => {
          //this.props.addFlashMessage({
            //type: 'success',
            //text: 'Group created successfully'
          //});
          this.context.router.history.push('/groups')
        },
        ({ data }) => this.setState({
          groupname: '',
          errors: data,
          isLoading:false
        })
      );
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    const { errors, groupname, isLoading, addFlashMessage }  = this.state;
    return(
      <div>
        <div className="col s12 m10 l10 col-md-10">
          <div className="mycontainer">
            <div className="row">
              <div className="col s12 m4 l2"></div>
              <div className="col s12 m4 l8 large-cards">
                <h4>Add Group</h4>
                <FlashMessagesList />
                <form onSubmit={this.handleSubmit}>
                  { errors.form && <div className="alert alert-danger">{errors.form}</div> }
                  <div className="">
                    <TextFieldGroup
                      error = {errors.groupname}
                      label = "Group Name"
                      onChange = {this.handleChange}
                      value = {groupname}
                      field = "groupname"
                      type="text"
                    />
                    <div className="input-field col s12">
                      <button className="btn waves-effect waves-light" type="submit">Create
                      </button>
                      <br /><br />
                    </div>
                  </div>
                  <br/><br/>
                </form>
              </div>
              <div className="col s12 m4 l2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddGroupForm.propTypes = {
  createGroup: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
}

AddGroupForm.contextTypes = {
  router: PropTypes.object.isRequired
}

export default connect(null, { createGroup, addFlashMessage })(AddGroupForm);
