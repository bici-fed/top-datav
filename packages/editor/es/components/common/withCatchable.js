function _typeof(obj) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              'function' == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          }),
    _typeof(obj)
  );
}

import 'antd/lib/empty/style';
import _Empty from 'antd/lib/empty';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, 'prototype', { writable: false });
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  Object.defineProperty(subClass, 'prototype', { writable: false });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError('Derived constructors may only return object or undefined');
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

import * as React from 'react';
import CustomIcon from '../config/iconConfig';
export default function withCatchable(WrappedComponent, errorChild) {
  return /*#__PURE__*/ (function (_React$Component) {
    _inherits(Catchable, _React$Component);

    var _super = _createSuper(Catchable);

    function Catchable(props) {
      var _this;

      _classCallCheck(this, Catchable);

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
                  /*#__PURE__*/ React.createElement(_Empty, {
                    image: /*#__PURE__*/ React.createElement(CustomIcon, {
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

    _createClass(Catchable, [
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
              : /*#__PURE__*/ React.createElement(WrappedComponent, _objectSpread({}, this.props)),
          );
        },
      },
    ]);

    return Catchable;
  })(React.Component);
}
