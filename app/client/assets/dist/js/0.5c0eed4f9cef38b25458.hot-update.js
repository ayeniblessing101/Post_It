webpackHotUpdate(0,{

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = GroupCard;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(66);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var avatar1 = __webpack_require__(1139);

/**
 * Renders GroupCard component
 * @export
 * @param {any} group
 * @returns {object} - GroupCard component
 */
function GroupCard(_ref) {
  var group = _ref.group;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: '/group/' + group.id },
      _react2.default.createElement(
        'div',
        { className: 'col s12 m5 l3 small-cards' },
        _react2.default.createElement('br', null),
        _react2.default.createElement('img', {
          src: group.image,
          alt: 'avatar'
        }),
        _react2.default.createElement(
          'h5',
          null,
          _react2.default.createElement(
            'b',
            null,
            group.groupName
          )
        ),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/group/' + group.id, className: 'btn btn-primary' },
          'Enter Group'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null)
      )
    )
  );
}

GroupCard.propTypes = {
  group: _propTypes2.default.object.isRequired
};

/***/ })

})
//# sourceMappingURL=0.5c0eed4f9cef38b25458.hot-update.js.map