import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import sha1 from 'sha1';
import superagent from 'superagent';
import { addFlashMessage } from '../../actions/flashMessageActions';
import TextFieldGroup from '../common/TextFieldGroup';
import { createGroup } from '../../actions/groupActions';
import { validateInput } from '../../validations/addgroup';
import FlashMessagesList from '../notification/FlashMessagesList';

/**
 * @class AddGroupForm
 * @extends {React.Component}
 */
export class AddGroupForm extends React.Component {
  /**
   * Creates an instance of AddGroupForm.
   * @param {any} props
   * @memberof AddGroupForm
   */
  constructor(props) {
    super(props);
    this.state = {
      groupname: '',
      isLoading: false,
      image: '',
      errors: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

   /**
   * Handles file upload
   * @param {any} files
   *
   * @return {void}
   */
  uploadFile(files) {
    const image = files[0];

    const cloudName = 'blessing';
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

    const timestamp = Date.now() / 1000;
    const uploadPreset = 'emdtrl4u';

    const paramStr = `timestamp=${timestamp}&upload_preset=${uploadPreset}AGDtyzVzJmEF3xmXDcJXnATYk2Q`;
    const signature = sha1(paramStr);

    const params = {
      api_key: '692272296223292',
      timestamp,
      upload_preset: uploadPreset,
      signature
    };

    const uploadRequest = superagent.post(url);
    uploadRequest.attach('file', image);

    Object.keys(params).forEach((key) => {
      uploadRequest.field(key, params[key]);
    });

    uploadRequest.end((error, response) => {
      if (error) {
        this.props.addFlashMessage({
          type: 'error',
          text: error
        });
      }
      const uploaded = response.body.secure_url;

      this.setState({
        image: uploaded
      });
    });
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  /**
   * Handle on Submit event
   * @param {any} event
   * @memberof AddGroupForm
   * @return {void}
   */
  handleSubmit(event) {
    event.preventDefault();
    if (this.isValid() && this.state.image) {
      this.setState({ errors: {}, isLoading: true });
      this.props.createGroup(this.state).then(
        () => {
          this.context.router.history.push('/groups');
        },
        this.setState({
          groupname: '',
          errors: {}
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
   * Render AddGroup Form component
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
                <FlashMessagesList />
                <form onSubmit={this.handleSubmit}>
                  { errors.form &&
                    <div
                      className="alert alert-danger">
                      {errors.form}
                    </div>
                  }
                  <div className="">
                    <TextFieldGroup
                      className="addGroupFormContainer"
                      error={errors.groupname}
                      label="Group Name"
                      onChange={this.handleChange}
                      value={groupname}
                      field="groupname"
                      type="text"
                    />
                    <Dropzone
                      onDrop={this.uploadFile.bind(this)} >
                      <img
                        src={this.state.image}
                        placeholder="Click here to upload Group Avatar"
                        alt="groupAvatar"
                        style={{ width: '150px', height: '150px' }}
                       />
                    </Dropzone>
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
  addFlashMessage: PropTypes.func.isRequired,
};

AddGroupForm.contextTypes = {
  router: PropTypes.object.isRequired
};

export default connect(null, { createGroup, addFlashMessage })(AddGroupForm);
