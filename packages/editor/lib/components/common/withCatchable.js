'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = withCatchable;

var _objectSpread2 = _interopRequireDefault(require('@babel/runtime/helpers/objectSpread2'));

require('antd/es/empty/style');

var _empty = _interopRequireDefault(require('antd/es/empty'));

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _createSuper2 = _interopRequireDefault(require('@babel/runtime/helpers/createSuper'));

var React = _interopRequireWildcard(require('react'));

var _iconConfig = _interopRequireDefault(require('../config/iconConfig'));

function withCatchable(WrappedComponent, errorChild) {
  return /*#__PURE__*/ (function (_React$Component) {
    (0, _inherits2.default)(Catchable, _React$Component);

    var _super = (0, _createSuper2.default)(Catchable);

    function Catchable(props) {
      var _this;

      (0, _classCallCheck2.default)(this, Catchable);
      _this = _super.call(this, props);

      _this.renderErrorChild = function () {
        try {
          var _this$state = _this.state,
            error = _this$state.error,
            errorInfo = _this$state.errorInfo;
          var timer = setTimeout(function () {
            _this.setState({
              crashed: false,
            });
          }, 20000);

          _this.setState({
            timer: timer,
          });

          return typeof errorChild === 'function'
            ? errorChild(error, errorInfo)
            : errorChild ||
                /*#__PURE__*/ React.createElement(
                  'div',
                  {
                    style: {
                      height: '100%',
                      background: '#4A4A4A',
                    },
                  },
                  /*#__PURE__*/ React.createElement(_empty.default, {
                    image: /*#__PURE__*/ React.createElement(_iconConfig.default, {
                      type: 'iconwushuju',
                    }),
                    imageStyle: {
                      height: 60,
                    },
                    description: /*#__PURE__*/ React.createElement(
                      'span',
                      null,
                      /*#__PURE__*/ React.createElement(
                        'span',
                        {
                          style: {
                            color: 'red',
                          },
                          title: error.message,
                        },
                        '\u5D4C\u5165\u7F51\u9875\u5305\u542B\u4E0D\u5408\u6CD5\u7684\u8BF7\u6C42\uFF0C\u3002',
                        /*#__PURE__*/ React.createElement('br', null),
                        '\u8BF7\u4FEE\u6539\u7F51\u9875\u5730\u5740\u5E76\u5237\u65B0\u9875\u9762',
                      ),
                    ),
                  }),
                );
        } catch (e) {
          return /*#__PURE__*/ React.createElement(
            'span',
            {
              style: {
                color: 'red',
              },
              title: e.message,
            },
            'Error Child Component Crashed',
          );
        }
      };

      _this.state = {
        error: null,
        errorInfo: null,
        crashed: false,
        timer: 1,
      };
      return _this;
    }

    (0, _createClass2.default)(Catchable, [
      {
        key: 'componentDidCatch',
        value: function componentDidCatch(error, errorInfo) {
          this.setState({
            error: error,
            errorInfo: errorInfo,
            crashed: true,
          });

          if (console && console.group) {
            console.group(
              '%c\u7EC4\u4EF6'.concat(
                WrappedComponent.name || '',
                '\u5D29\u6E83\u4E86|Compnent Crashed',
              ),
              'font-size:20px;color:#ff0047',
            );
            console.error(error);
            console.error(errorInfo.componentStack);
            console.groupEnd();
          }
        },
      },
      {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          clearTimeout(this.state.timer);
        },
      },
      {
        key: 'render',
        value: function render() {
          return /*#__PURE__*/ React.createElement(
            React.Fragment,
            null,
            this.state.crashed
              ? this.renderErrorChild()
              : /*#__PURE__*/ React.createElement(
                  WrappedComponent,
                  (0, _objectSpread2.default)({}, this.props),
                ),
          );
        },
      },
    ]);
    return Catchable;
  })(React.Component);
}
