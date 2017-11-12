webpackHotUpdate(0,{

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _GroupCard = __webpack_require__(552);

var _GroupCard2 = _interopRequireDefault(_GroupCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isEmpty = __webpack_require__(207);

var GroupsList = function GroupsList(_ref) {
  var groups = _ref.groups;

  var emptyMessage = _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h3',
      { className: 'emptyMessage' },
      'No Groups'
    )
  );
  var groupsList = _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement('div', { className: 'col s12 m1 l1' }),
    _react2.default.createElement(
      'div',
      { id: 'groupsList', className: 'col s12 m11 l11 col-md-10 no-float' },
      _react2.default.createElement(
        'div',
        { className: 'mycontainer' },
        _react2.default.createElement(
          'div',
          { className: 'row ' },
          _react2.default.createElement(
            'h4',
            { className: 'groupsTitle' },
            'All Groups'
          ),
          _react2.default.createElement(
            'div',
            { className: 'mycontainer' },
            _react2.default.createElement(
              'div',
              { className: 'row ' },
              groups.map(function (group, i) {
                return _react2.default.createElement(_GroupCard2.default, { group: group, key: i });
              })
            )
          )
        )
      )
    )
  );

  return isEmpty(groups) ? emptyMessage : groupsList;
};

GroupsList.propTypes = {
  groups: _propTypes2.default.array.isRequired
};

exports.default = GroupsList;

/***/ })

})
//# sourceMappingURL=0.946c19150c57653e92ed.hot-update.js.map