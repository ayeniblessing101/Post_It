webpackHotUpdate(0,{

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(console) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(26);

var _reactPaginate = __webpack_require__(1059);

var _reactPaginate2 = _interopRequireDefault(_reactPaginate);

var _GroupsList = __webpack_require__(556);

var _GroupsList2 = _interopRequireDefault(_GroupsList);

var _Header = __webpack_require__(95);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(111);

var _Footer2 = _interopRequireDefault(_Footer);

var _groupActions = __webpack_require__(94);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * renders groups page compoent
 * @class GroupsPage
 * @extends {React.Component}
 */
var GroupsPage = function (_React$Component) {
  _inherits(GroupsPage, _React$Component);

  /**
   * Creates an instance of GroupsPage.
   * @memberof GroupsPage
   */
  function GroupsPage(props) {
    _classCallCheck(this, GroupsPage);

    var _this = _possibleConstructorReturn(this, (GroupsPage.__proto__ || Object.getPrototypeOf(GroupsPage)).call(this, props));

    _this.state = {
      groups: [],
      offset: 0,
      pageCount: Math.ceil(_this.props.groups.totalCount / _this.usersPerPage)
    };
    return _this;
  }
  /**
   * @memberof GroupsPage
   *
   * @return {void}
   */


  _createClass(GroupsPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchGroups(0, 6);
    }

    /**
     * @param {any} nextProps
     * @memberof GroupsPage
     *
     * @return {void}
     */

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        groups: nextProps.groups.allGroups,
        totalCount: nextProps.groups.totalCount,
        pageCount: Math.ceil(nextProps.groups.totalCount / this.usersPerPage)
      });
    }

    /**
     * used to calculate offset
     * @param {number} page
     * @memberof AllGroups
     * @return {page} - page
     */

  }, {
    key: 'handlePageClick',
    value: function handlePageClick(page) {
      var _this2 = this;

      var selected = page.selected;
      var offset = Math.ceil(selected * this.usersPerPage);

      this.setState({ offset: offset }, function () {
        _this2.props.fetchGroups(offset);
      });
    }

    /**
     * Renders the GroupPage Component
     * @returns {object} groupsPage Component
     * @memberof GroupsPage
     */

  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          totalCount = _state.totalCount,
          groups = _state.groups;

      console.log('************', totalCount);
      return _react2.default.createElement(
        'div',
        { id: 'groupsPage' },
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'mycontainer' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(_GroupsList2.default, { groups: groups })
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            totalCount > 6 && _react2.default.createElement(_reactPaginate2.default, {
              previousLabel: 'previous',
              nextLabel: 'next',
              breakLabel: _react2.default.createElement(
                'a',
                { href: '' },
                '...'
              ),
              breakClassName: 'break-me',
              pageCount: this.state.pageCount,
              marginPagesDisplayed: 2,
              pageRangeDisplayed: 5,
              onPageChange: this.handlePageClick,
              containerClassName: 'pagination',
              subContainerClassName: 'pages pagination',
              activeClassName: 'active'
            })
          ),
          _react2.default.createElement('div', { style: { clear: "both" } })
        ),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return GroupsPage;
}(_react2.default.Component);

// as props is introduced to this component its documented with propTypes


GroupsPage.propTypes = {
  fetchGroups: _propTypes2.default.func.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    groups: state.groups,
    pageCount: state.groups.pageCount
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchGroups: _groupActions.fetchGroups })(GroupsPage);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ })

})
//# sourceMappingURL=0.399d02af3797da56d001.hot-update.js.map