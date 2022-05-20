'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = exports._emitter = void 0;

require('antd/es/empty/style');

var _empty = _interopRequireDefault(require('antd/es/empty'));

require('antd/es/button/style');

var _button = _interopRequireDefault(require('antd/es/button'));

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _assertThisInitialized2 = _interopRequireDefault(
  require('@babel/runtime/helpers/assertThisInitialized'),
);

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _createSuper2 = _interopRequireDefault(require('@babel/runtime/helpers/createSuper'));

var _react = _interopRequireDefault(require('react'));

var _index = require('../../Layout/index');

var _mitt = _interopRequireDefault(require('mitt'));

require('./style.css');

var _classnames = _interopRequireDefault(require('classnames'));

var _withCatchable = _interopRequireDefault(require('../withCatchable'));

var _iconConfig = _interopRequireDefault(require('../../config/iconConfig'));

var _emitter;

exports._emitter = _emitter;

var WebPage = /*#__PURE__*/ (function (_React$Component) {
  (0, _inherits2.default)(WebPage, _React$Component);

  var _super = (0, _createSuper2.default)(WebPage);

  function WebPage(prop) {
    var _this;

    (0, _classCallCheck2.default)(this, WebPage);
    _this = _super.call(this, prop);
    _this.iframeDiv = void 0;
    exports._emitter = _emitter = (0, _mitt.default)();
    _this.iframeDiv = /*#__PURE__*/ _react.default.createRef();
    _this.state = {
      headerClassNames: 'header',
    };
    _this.handleMouseMoveTop = _this.handleMouseMoveTop.bind(
      (0, _assertThisInitialized2.default)(_this),
    );
    return _this;
  }

  (0, _createClass2.default)(WebPage, [
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
              headerClassNames: (0, _classnames.default)({
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
              headerClassNames: (0, _classnames.default)({
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

        _index.canvas.dispatch('customUIclickBtn', {
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
        return /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            className: 'custui-webpage',
            style: {
              height: '100%',
              background: 'white',
            },
          },
          isUrl
            ? /*#__PURE__*/ _react.default.createElement(
                _react.default.Fragment,
                null,
                /*#__PURE__*/ _react.default.createElement(
                  'div',
                  {
                    className: this.state.headerClassNames,
                  },
                  /*#__PURE__*/ _react.default.createElement('span', null),
                  /*#__PURE__*/ _react.default.createElement(
                    _button.default,
                    {
                      type: 'link',
                      onClick: this.openNewWindow.bind(this),
                    },
                    '\u6253\u5F00\u65B0\u9875\u9762',
                  ),
                ),
                /*#__PURE__*/ _react.default.createElement(
                  'div',
                  {
                    className: 'page-content',
                  },
                  /*#__PURE__*/ _react.default.createElement('iframe', {
                    ref: this.iframeDiv,
                    src: this.props.iframe,
                    onError: this.handleError.bind(this),
                    sandbox: 'allow-scripts allow-forms allow-same-origin',
                    scrolling: 'no',
                    frameBorder: '0',
                  }),
                ),
              )
            : /*#__PURE__*/ _react.default.createElement(_empty.default, {
                image: /*#__PURE__*/ _react.default.createElement(_iconConfig.default, {
                  type: 'iconwushuju',
                }),
                imageStyle: {
                  height: 60,
                },
                description: /*#__PURE__*/ _react.default.createElement(
                  'span',
                  null,
                  '\u6682\u672A\u8FDE\u63A5\u5230\u6B63\u786E\u7684\u7F51\u9875',
                  /*#__PURE__*/ _react.default.createElement('br', null),
                  ' \u8BF7\u5148\u5728\u53F3\u4FA7\u64CD\u4F5C\u680F\u8BBE\u7F6E',
                ),
              }),
        );
      },
    },
  ]);
  return WebPage;
})(_react.default.Component);

var _default = (0, _withCatchable.default)(WebPage);

exports.default = _default;
