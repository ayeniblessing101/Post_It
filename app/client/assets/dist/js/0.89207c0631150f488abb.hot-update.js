webpackHotUpdate(0,{

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactPaginate = __webpack_require__(228);

var _reactPaginate2 = _interopRequireDefault(_reactPaginate);

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

    _this.usersPerPage = 5;
    // const { allGroups } = this.props.groups;
    _this.state = {
      groups: _this.props.groups.allGroups,
      offset: 0,
      pageCount: Math.ceil(_this.props.groups.totalCount / _this.usersPerPage)
    };
    _this.handlePageClick = _this.handlePageClick.bind(_this);
    return _this;
  }

  /**
   * @memberof AllGroups
   *
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
     * Renders the AllGroup Component
     * @memberof AllGroups
     *
     * @returns {object} - AllGroups Component
     */

  }, {
    key: 'render',
    value: function render() {
      var totalCount = this.state.totalCount;

      var groups = this.state.groups;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'col s12 m12 l3 ' },
          _react2.default.createElement(
            'ul',
            {
              className: 'collapsible allMessageCard',
              'data-collapsible': 'accordion'
            },
            groups.length > 0 && groups.map(function (group) {
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
          ),
          totalCount > 4 && _react2.default.createElement(_reactPaginate2.default, {
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
        )
      );
    }
  }]);

  return AllGroups;
}(_react2.default.Component);

AllGroups.propTypes = {
  groups: _propTypes2.default.object.isRequired,
  fetchGroups: _propTypes2.default.func.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    groups: state.groups,
    pageCount: state.groups.pageCount,
    messages: state.messages
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchGroups: _groupActions.fetchGroups })(AllGroups);

/***/ })

})
//# sourceMappingURL=0.89207c0631150f488abb.hot-update.js.map