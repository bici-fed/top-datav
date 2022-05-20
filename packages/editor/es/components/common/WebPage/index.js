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

import React from 'react';
import { Button, Empty } from 'antd';
import { canvas } from '../../Layout/index';
import { default as mitt } from 'mitt';
import './style.css';
import classNames from 'classnames';
import withCatchable from '../withCatchable';
import CustomIcon from '../../config/iconConfig';
export var _emitter;

var WebPage = /*#__PURE__*/ (function (_React$Component) {
  _inherits(WebPage, _React$Component);

  var _super = _createSuper(WebPage);

  function WebPage(prop) {
    var _this;

    _classCallCheck(this, WebPage);

    _this = _super.call(this, prop);
    _this.iframeDiv = void 0;
    _emitter = mitt();
    _this.iframeDiv = /*#__PURE__*/ React.createRef();
    _this.state = {
      headerClassNames: 'header',
    };
    _this.handleMouseMoveTop = _this.handleMouseMoveTop.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(WebPage, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var iframeEle = this.iframeDiv.current;

        if (this.iframeDiv.current && this.iframeDiv.current.contentWindow.document.body) {
          this.iframeDiv.current.contentWindow.document.body.addEventListener(
            'mousemove',
            this.handleMouseMoveTop,
          );
        }
      },
    },
    {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nectProps, nextState) {
        var isupdate = this.checkURL(nectProps.iframe);

        if (
          isupdate &&
          this.iframeDiv.current &&
          this.iframeDiv.current.contentWindow.document.body
        ) {
          this.iframeDiv.current.contentWindow.document.body.addEventListener(
            'mousemove',
            this.handleMouseMoveTop,
          );
        }

        return true;
      },
    },
    {
      key: 'handleMouseMoveTop',
      value: function handleMouseMoveTop(e) {
        var that = this;

        if (e.pageY < 42) {
          that.setState(
            {
              headerClassNames: classNames({
                header: true,
                headerAnimation: true,
              }),
            },
            function () {
              that.forceUpdate();
            },
          );
        } else {
          that.setState(
            {
              headerClassNames: classNames({
                header: true,
                headerAnimation: false,
              }),
            },
            function () {
              that.forceUpdate();
            },
          );
        }
      },
    },
    {
      key: 'checkURL',
      value: function checkURL(value) {
        var str = value; //判断URL地址的正则表达式为:http(s)?://([\w-]+\.)+[\w-]+(/[\w- ./?%&=]*)?
        //下面的代码中应用了转义字符"\"输出一个字符"/"
        //在JavaScript中，正则表达式只能使用"/"开头和结束，不能使用双引号

        var Expression = new RegExp(
          '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
          'i',
        );
        var objExp = new RegExp(Expression);

        if (objExp.test(str) == true) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      key: 'onClickButton',
      value: function onClickButton(e) {
        console.log(e);
        canvas.dispatch('customUIclickBtn', {
          name: 'majy',
        });
      },
    },
    {
      key: 'handleError',
      value: function handleError(err) {
        console.log('err===', err);
      },
    },
    {
      key: 'openNewWindow',
      value: function openNewWindow(e) {
        window.open(this.props.iframe);
      },
    },
    {
      key: 'render',
      value: function render() {
        var isUrl = this.checkURL(this.props.iframe);
        return /*#__PURE__*/ React.createElement(
          'div',
          {
            className: 'custui-webpage',
            style: {
              height: '100%',
              background: 'white',
            },
          },
          isUrl
            ? /*#__PURE__*/ React.createElement(
                React.Fragment,
                null,
                /*#__PURE__*/ React.createElement(
                  'div',
                  {
                    className: this.state.headerClassNames,
                  },
                  /*#__PURE__*/ React.createElement('span', null),
                  /*#__PURE__*/ React.createElement(
                    Button,
                    {
                      type: 'link',
                      onClick: this.openNewWindow.bind(this),
                    },
                    '\u6253\u5F00\u65B0\u9875\u9762',
                  ),
                ),
                /*#__PURE__*/ React.createElement(
                  'div',
                  {
                    className: 'page-content',
                  },
                  /*#__PURE__*/ React.createElement('iframe', {
                    ref: this.iframeDiv,
                    src: this.props.iframe,
                    onError: this.handleError.bind(this),
                    sandbox: 'allow-scripts allow-forms allow-same-origin',
                    scrolling: 'no',
                    frameBorder: '0',
                  }),
                ),
              )
            : /*#__PURE__*/ React.createElement(Empty, {
                image: /*#__PURE__*/ React.createElement(CustomIcon, {
                  type: 'iconwushuju',
                }),
                imageStyle: {
                  height: 60,
                },
                description: /*#__PURE__*/ React.createElement(
                  'span',
                  null,
                  '\u6682\u672A\u8FDE\u63A5\u5230\u6B63\u786E\u7684\u7F51\u9875',
                  /*#__PURE__*/ React.createElement('br', null),
                  ' \u8BF7\u5148\u5728\u53F3\u4FA7\u64CD\u4F5C\u680F\u8BBE\u7F6E',
                ),
              }),
        );
      },
    },
  ]);

  return WebPage;
})(React.Component);

export default withCatchable(WebPage);
