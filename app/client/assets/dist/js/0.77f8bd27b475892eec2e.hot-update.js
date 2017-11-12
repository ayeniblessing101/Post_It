webpackHotUpdate(0,{

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(console) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddGroupForm = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(27);

var _reactDropzone = __webpack_require__(1200);

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _sha = __webpack_require__(1205);

var _sha2 = _interopRequireDefault(_sha);

var _superagent = __webpack_require__(1209);

var _superagent2 = _interopRequireDefault(_superagent);

var _TextFieldGroup = __webpack_require__(95);

var _TextFieldGroup2 = _interopRequireDefault(_TextFieldGroup);

var _groupActions = __webpack_require__(93);

var _addgroup = __webpack_require__(1193);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import axios from 'axios';


/**
 * @class AddGroupForm
 * @extends {React.Component}
 */
var AddGroupForm = exports.AddGroupForm = function (_React$Component) {
  _inherits(AddGroupForm, _React$Component);

  /**
   * Creates an instance of AddGroupForm.
   * @param {any} props
   * @memberof AddGroupForm
   */
  function AddGroupForm(props) {
    _classCallCheck(this, AddGroupForm);

    var _this = _possibleConstructorReturn(this, (AddGroupForm.__proto__ || Object.getPrototypeOf(AddGroupForm)).call(this, props));

    _this.state = {
      groupname: '',
      isLoading: false,
      images: [],
      errors: {}
    };
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  /**
   * Handles file upload
   */


  _createClass(AddGroupForm, [{
    key: 'uploadFile',
    value: function uploadFile(files) {
      var _this2 = this;

      var image = files[0];

      var cloudName = 'blessing';
      var url = 'https://api.cloudinary.com/v1_1/' + cloudName + '/image/upload';

      var timestamp = Date.now() / 1000;
      var uploadPreset = 'emdtrl4u';

      var paramStr = 'timestamp=' + timestamp + '&upload_preset=' + uploadPreset + 'AGDtyzVzJmEF3xmXDcJXnATYk2Q';
      var signature = (0, _sha2.default)(paramStr);

      var params = {
        api_key: '692272296223292',
        timestamp: timestamp,
        upload_preset: uploadPreset,
        signature: signature
      };

      var uploadRequest = _superagent2.default.post(url);
      uploadRequest.attach('file', image);

      Object.keys(params).forEach(function (key) {
        uploadRequest.field(key, params[key]);
      });

      uploadRequest.end(function (error, response) {
        if (error) {
          alert(error);
        }
        console.log('UPLOAD COMPLETE: ' + JSON.stringify(response.body));
        var uploaded = response.body;

        var updatedImages = Object.assign([], _this2.state.images);
        updatedImages.push(uploaded);
        _this2.setState({
          images: updatedImages
        });
      });
    }
  }, {
    key: 'isValid',
    value: function isValid() {
      var _validateInput = (0, _addgroup.validateInput)(this.state),
          errors = _validateInput.errors,
          isValid = _validateInput.isValid;

      if (!isValid) {
        this.setState({ errors: errors });
      }

      return isValid;
    }

    /**
     * Handle on Submit event
     * @param {any} event
     * @memberof AddGroupForm
     * @return {void}
     */

  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      var _this3 = this;

      event.preventDefault();
      console.log(this.state.images);
      if (this.isValid() && this.state.images.length !== 0) {
        this.setState({ errors: {}, isLoading: true });
        this.props.createGroup(this.state).then(function () {
          _this3.context.router.history.push('/groups');
        }, this.setState({
          groupname: '',
          errors: {}
        }));
      }
    }

    /**
     * @param {any} event
     * @memberof AddGroupForm
     * @return {void}
     */

  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState(_defineProperty({}, event.target.name, event.target.value));
    }

    /**
     * Render AddGroup Form component
     * @returns {object} Add group form component
     * @memberof AddGroupForm
     */

  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          errors = _state.errors,
          groupname = _state.groupname;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'col s12 m10 l10 col-md-10' },
          _react2.default.createElement(
            'div',
            { className: 'mycontainer' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement('div', { className: 'col s12 m4 l2' }),
              _react2.default.createElement(
                'div',
                { className: 'col s12 m4 l8 large-cards' },
                _react2.default.createElement(
                  'h4',
                  null,
                  'Add Group'
                ),
                _react2.default.createElement(
                  'form',
                  { onSubmit: this.handleSubmit },
                  errors.form && _react2.default.createElement(
                    'div',
                    {
                      className: 'alert alert-danger' },
                    errors.form
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: '' },
                    _react2.default.createElement(_TextFieldGroup2.default, {
                      className: 'addGroupFormContainer',
                      error: errors.groupname,
                      label: 'Group Name',
                      onChange: this.handleChange,
                      value: groupname,
                      field: 'groupname',
                      type: 'text'
                    }),
                    _react2.default.createElement(_reactDropzone2.default, { onDrop: this.uploadFile.bind(this) }),
                    _react2.default.createElement(
                      'div',
                      { className: 'input-field col s12' },
                      _react2.default.createElement(
                        'button',
                        {
                          className: 'btn waves-effect waves-light',
                          type: 'submit' },
                        'Create'
                      ),
                      _react2.default.createElement('br', null),
                      _react2.default.createElement('br', null)
                    )
                  ),
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null)
                )
              ),
              _react2.default.createElement('div', { className: 'col s12 m4 l2' })
            )
          )
        )
      );
    }
  }]);

  return AddGroupForm;
}(_react2.default.Component);

AddGroupForm.propTypes = {
  createGroup: _propTypes2.default.func.isRequired
};

AddGroupForm.contextTypes = {
  router: _propTypes2.default.object.isRequired
};

exports.default = (0, _reactRedux.connect)(null, { createGroup: _groupActions.createGroup })(AddGroupForm);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ })

})
//# sourceMappingURL=0.77f8bd27b475892eec2e.hot-update.js.map