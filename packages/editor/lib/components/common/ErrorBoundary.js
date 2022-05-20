'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/es/empty/style');

var _empty = _interopRequireDefault(require('antd/es/empty'));

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _createSuper2 = _interopRequireDefault(require('@babel/runtime/helpers/createSuper'));

var _react = _interopRequireDefault(require('react'));

var ErrorBoundary = /*#__PURE__*/ (function (_React$Component) {
  (0, _inherits2.default)(ErrorBoundary, _React$Component);

  var _super = (0, _createSuper2.default)(ErrorBoundary);

  function ErrorBoundary(props) {
    var _this;

    (0, _classCallCheck2.default)(this, ErrorBoundary);
    _this = _super.call(this, props);
    _this.state = {
      hasError: false,
    };
    return _this;
  }

  (0, _createClass2.default)(
    ErrorBoundary,
    [
      {
        key: 'componentDidCatch',
        value: function componentDidCatch(error, errorInfo) {
          // 你同样可以将错误日志上报给服务器
          console.log(error, errorInfo);
        },
      },
      {
        key: 'render',
        value: function render() {
          if (this.state.hasError) {
            // 你可以自定义降级后的 UI 并渲染
            return /*#__PURE__*/ _react.default.createElement(
              'div',
              {
                className: 'custui-webpage',
                style: {
                  height: '100%',
                },
              },
              /*#__PURE__*/ _react.default.createElement(_empty.default, {
                image: 'https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg',
                imageStyle: {
                  height: 60,
                },
                description: /*#__PURE__*/ _react.default.createElement(
                  'span',
                  {
                    style: {
                      color: 'red',
                    },
                  },
                  '\u52A0\u8F7D\u7F51\u9875\u51FA\u9519\u4E86',
                ),
              }),
            );
          }

          return this.props.children;
        },
      },
    ],
    [
      {
        key: 'getDerivedStateFromError',
        value: function getDerivedStateFromError(error) {
          // 更新 state 使下一次渲染能够显示降级后的 UI
          return {
            hasError: true,
          };
        },
      },
    ],
  );
  return ErrorBoundary;
})(_react.default.Component);

exports.default = ErrorBoundary;
