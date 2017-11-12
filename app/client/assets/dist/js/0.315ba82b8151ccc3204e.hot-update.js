webpackHotUpdate(0,{

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(60);

var _reactRedux = __webpack_require__(27);

var _groupActions = __webpack_require__(93);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class AllGroups
 * @extends {React.Component}
 */
var AllGroups = function (_React$Component) {
  _inherits(AllGroups, _React$Component);

  /**
   * Creates an instance of AllGroups.
   * @param {any} props
   * @memberof AllGroups
   */
  function AllGroups(props) {
    _classCallCheck(this, AllGroups);

    var _this = _possibleConstructorReturn(this, (AllGroups.__proto__ || Object.getPrototypeOf(AllGroups)).call(this, props));

    _this.state = {
      groups: _this.props.groups
    };
    return _this;
  }

  /**
   * @memberof AllGroups
   * @return {void}
   */


  _createClass(AllGroups, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchGroups();
    }

    /**
     * @param {any} nextProps
     * @memberof AllGroups
     * @return {void}
     */

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        groups: nextProps.groups,
        messages: nextProps.messages
      });
    }
    /**
     * Renders the AllGroup Component
     * @memberof AllGroups
     * @returns {object} - AllGroups Component
     */

  }, {
    key: 'render',
    value: function render() {
      var groups = this.state.groups;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'col s12 m12 l3 ' },
          'Group',
          _react2.default.createElement(
            'ul',
            {
              className: 'collapsible allMessageCard',
              'data-collapsible': 'accordion'
            },
            groups.map(function (group) {
              return _react2.default.createElement(
                'li',
                { key: group.id },
                _react2.default.createElement(
                  'div',
                  { className: 'collapsible-header' },
                  _react2.default.createElement(
                    'i',
                    { className: 'material-icons' },
                    'filter_drama'
                  ),
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/group/' + group.id, className: 'groupNames' },
                    group.groupName
                  )
                )
              );
            })
          )
        )
      );
    }
  }]);

  return AllGroups;
}(_react2.default.Component);

AllGroups.propTypes = {
  groups: _propTypes2.default.array.isRequired,
  fetchGroups: _propTypes2.default.func.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    groups: state.groups,
    messages: state.messages
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchGroups: _groupActions.fetchGroups })(AllGroups);

/***/ })

})
//# sourceMappingURL=0.315ba82b8151ccc3204e.hot-update.js.map