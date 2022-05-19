'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _react = _interopRequireDefault(require('react'));

var _antd = require('antd');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

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

var formLayout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 15,
  },
};

var Layout = function Layout() {
  var startLayout = function startLayout() {};

  return /*#__PURE__*/ _react['default'].createElement(
    _antd.Form,
    _objectSpread(
      _objectSpread({}, formLayout),
      {},
      {
        style: {
          margin: '10px 10px',
        },
      },
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _antd.Row,
      null,
      /*#__PURE__*/ _react['default'].createElement(
        _antd.Col,
        {
          span: 24,
        },
        /*#__PURE__*/ _react['default'].createElement(
          _antd.Form.Item,
          {
            label: '\u6700\u5927\u5BBD\u5EA6',
          },
          /*#__PURE__*/ _react['default'].createElement(_antd.InputNumber, {
            style: {
              width: '100%',
            },
            min: 0,
            placeholder: '\u8BF7\u8F93\u5165\u6700\u5927\u5BBD\u5EA6',
          }),
        ),
      ),
      /*#__PURE__*/ _react['default'].createElement(
        _antd.Col,
        {
          span: 24,
        },
        /*#__PURE__*/ _react['default'].createElement(
          _antd.Form.Item,
          {
            label: '\u8282\u70B9\u5BBD\u5EA6',
          },
          /*#__PURE__*/ _react['default'].createElement(_antd.InputNumber, {
            style: {
              width: '100%',
            },
            min: 0,
            placeholder: '\u8BF7\u8F93\u5165\u8282\u70B9\u5BBD\u5EA6',
          }),
        ),
      ),
      /*#__PURE__*/ _react['default'].createElement(
        _antd.Col,
        {
          span: 24,
        },
        /*#__PURE__*/ _react['default'].createElement(
          _antd.Form.Item,
          {
            label: '\u8282\u70B9\u9AD8\u5EA6',
          },
          /*#__PURE__*/ _react['default'].createElement(_antd.InputNumber, {
            style: {
              width: '100%',
            },
            min: 0,
            placeholder: '\u8BF7\u8F93\u5165\u8282\u70B9\u9AD8\u5EA6',
          }),
        ),
      ),
      /*#__PURE__*/ _react['default'].createElement(
        _antd.Col,
        {
          span: 24,
        },
        /*#__PURE__*/ _react['default'].createElement(
          _antd.Form.Item,
          {
            label: '\u6C34\u5E73\u4E2A\u6570',
          },
          /*#__PURE__*/ _react['default'].createElement(_antd.InputNumber, {
            style: {
              width: '100%',
            },
            min: 0,
            placeholder: '\u8BF7\u8F93\u5165\u6C34\u5E73\u4E2A\u6570',
          }),
        ),
      ),
      /*#__PURE__*/ _react['default'].createElement(
        _antd.Col,
        {
          span: 24,
        },
        /*#__PURE__*/ _react['default'].createElement(
          _antd.Form.Item,
          {
            label: '\u6C34\u5E73\u95F4\u8DDD',
          },
          /*#__PURE__*/ _react['default'].createElement(_antd.InputNumber, {
            style: {
              width: '100%',
            },
            min: 0,
            placeholder: '\u8BF7\u8F93\u5165\u6C34\u5E73\u95F4\u8DDD',
          }),
        ),
      ),
      /*#__PURE__*/ _react['default'].createElement(
        _antd.Col,
        {
          span: 24,
        },
        /*#__PURE__*/ _react['default'].createElement(
          _antd.Form.Item,
          {
            label: '\u5782\u76F4\u95F4\u8DDD',
          },
          /*#__PURE__*/ _react['default'].createElement(_antd.InputNumber, {
            style: {
              width: '100%',
            },
            min: 0,
            placeholder: '\u8BF7\u8F93\u5165\u5782\u76F4\u95F4\u8DDD',
          }),
        ),
      ),
      /*#__PURE__*/ _react['default'].createElement(
        _antd.Col,
        {
          span: 24,
        },
        /*#__PURE__*/ _react['default'].createElement(
          _antd.Button,
          {
            type: 'primary',
            style: {
              marginLeft: 22,
              width: 245,
            },
            onClick: function onClick() {
              return startLayout();
            },
          },
          '\u5F00\u59CB\u6392\u7248',
        ),
      ),
    ),
  );
};

var _default = Layout;
exports['default'] = _default;
