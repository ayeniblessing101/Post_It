webpackHotUpdate(0,{

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactPaginate = __webpack_require__(1059);

var _reactPaginate2 = _interopRequireDefault(_reactPaginate);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(26);

var _reactRouterDom = __webpack_require__(66);

var _queryString = __webpack_require__(210);

var _queryString2 = _interopRequireDefault(_queryString);

var _getUsersAction = __webpack_require__(549);

var _getUsersAction2 = _interopRequireDefault(_getUsersAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class UserList
 * @extends {Component}
 */
var UserList = function (_React$Component) {
  _inherits(UserList, _React$Component);

  /**
   * Creates an instance of UserList.
   * @param {object} props
   * @memberof UserList
   */
  function UserList(props) {
    _classCallCheck(this, UserList);

    var _this = _possibleConstructorReturn(this, (UserList.__proto__ || Object.getPrototypeOf(UserList)).call(this, props));

    _this.usersPerPage = 5;
    var pagination = _this.props.pagination;

    _this.state = {
      users: pagination.users,
      offset: 0,
      pageCount: Math.ceil(pagination.count / _this.usersPerPage)
    };
    _this.handlePageClick = _this.handlePageClick.bind(_this);
    _this.searchParams = _queryString2.default.parse(_this.props.location.search).q;
    return _this;
  }

  /**
   * call the getUsers method after component have mounted
   * @memberof UserList
   * @return {void}
   */


  _createClass(UserList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.getUsersAction(this.searchParams);
    }

    /**
     * update component with new props
     * @param {object} nextProps
     * @memberof UserList
     * @return {void}
     */

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        users: nextProps.pagination.users,
        pageCount: Math.ceil(nextProps.pagination.totalCount / this.usersPerPage)
      });
    }

    /**
     * used to calculate offset
     * @param {number} page
     * @memberof UserList
     * @return {page} - page
     */

  }, {
    key: 'handlePageClick',
    value: function handlePageClick(page) {
      var _this2 = this;

      var selected = page.selected;
      var offset = Math.ceil(selected * this.usersPerPage);

      this.setState({ offset: offset }, function () {
        _this2.props.getUsersAction(_this2.searchParams, offset);
      });
    }

    /**
     * Renders the UserList component
     * @memberof UserList
     * @return {object} - UserList component
     */

  }, {
    key: 'render',
    value: function render() {
      var users = this.state.users;

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
                  'Users'
                ),
                _react2.default.createElement(
                  'table',
                  { className: 'striped responsive-table' },
                  _react2.default.createElement(
                    'thead',
                    null,
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'th',
                        null,
                        'Name'
                      ),
                      _react2.default.createElement(
                        'th',
                        null,
                        'Email'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'tbody',
                    null,
                    users.length > 0 ? users.map(function (user, index) {
                      return _react2.default.createElement(
                        'tr',
                        { key: index },
                        _react2.default.createElement(
                          'td',
                          null,
                          user.username
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          user.email
                        )
                      );
                    }) : _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        {
                          className: 'center',
                          col: '2', colSpan: '2' },
                        'No user found'
                      )
                    )
                  )
                ),
                users.length > 4 && _react2.default.createElement(_reactPaginate2.default, {
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
              _react2.default.createElement('div', { className: 'col s12 m4 l2' })
            )
          )
        )
      );
    }
  }]);

  return UserList;
}(_react2.default.Component);

UserList.propTypes = {
  location: _propTypes2.default.object.isRequired,
  getUsersAction: _propTypes2.default.func.isRequired

};

var mapStateToProps = function mapStateToProps(state) {
  return {
    pagination: state.pagination,
    pageCount: state.pagination.pageCount
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { getUsersAction: _getUsersAction2.default })((0, _reactRouterDom.withRouter)(UserList));

/***/ })

})
//# sourceMappingURL=0.fd1109066bda2b1cc7d6.hot-update.js.map