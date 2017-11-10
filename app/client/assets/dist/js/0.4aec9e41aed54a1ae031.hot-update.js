webpackHotUpdate(0,{

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextFieldGroup = function TextFieldGroup(_ref) {
  var field = _ref.field,
      value = _ref.value,
      label = _ref.label,
      error = _ref.error,
      type = _ref.type,
      onChange = _ref.onChange,
      checkUserExits = _ref.checkUserExits,
      className = _ref.className;

  return _react2.default.createElement(
    'div',
    { className: className },
    _react2.default.createElement(
      'div',
      { className: 'input-field col s12' },
      _react2.default.createElement(
        'label',
        { htmlFor: 'username' },
        label
      ),
      _react2.default.createElement('input', {
        classID: 'username',
        type: type,
        name: field,
        value: value,
        onChange: onChange,
        onBlur: checkUserExits,
        className: 'validate'
      }),
      error && _react2.default.createElement(
        'span',
        { className: 'errorMsg' },
        error
      )
    )
  );
};

TextFieldGroup.propTypes = {
  field: _propTypes2.default.string.isRequired,
  value: _propTypes2.default.string.isRequired,
  label: _propTypes2.default.string.isRequired,
  error: _propTypes2.default.string,
  type: _propTypes2.default.string.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  checkUserExits: _propTypes2.default.func
};

TextFieldGroup.defaultProps = {
  type: 'text'
};

exports.default = TextFieldGroup;

/***/ })

})
//# sourceMappingURL=0.4aec9e41aed54a1ae031.hot-update.js.map