'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/es/button/style');

var _button = _interopRequireDefault(require('antd/es/button'));

require('antd/es/input-number/style');

var _inputNumber = _interopRequireDefault(require('antd/es/input-number'));

require('antd/es/col/style');

var _col = _interopRequireDefault(require('antd/es/col'));

require('antd/es/row/style');

var _row = _interopRequireDefault(require('antd/es/row'));

var _objectSpread2 = _interopRequireDefault(require('@babel/runtime/helpers/objectSpread2'));

require('antd/es/form/style');

var _form = _interopRequireDefault(require('antd/es/form'));

var _react = _interopRequireDefault(require('react'));

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

  return /*#__PURE__*/ _react.default.createElement(
    _form.default,
    (0, _objectSpread2.default)(
      (0, _objectSpread2.default)({}, formLayout),
      {},
      {
        style: {
          margin: '10px 10px',
        },
      },
    ),
    /*#__PURE__*/ _react.default.createElement(
      _row.default,
      null,
      /*#__PURE__*/ _react.default.createElement(
        _col.default,
        {
          span: 24,
        },
        /*#__PURE__*/ _react.default.createElement(
          _form.default.Item,
          {
            label: '\u6700\u5927\u5BBD\u5EA6',
          },
          /*#__PURE__*/ _react.default.createElement(_inputNumber.default, {
            style: {
              width: '100%',
            },
            min: 0,
            placeholder: '\u8BF7\u8F93\u5165\u6700\u5927\u5BBD\u5EA6',
          }),
        ),
      ),
      /*#__PURE__*/ _react.default.createElement(
        _col.default,
        {
          span: 24,
        },
        /*#__PURE__*/ _react.default.createElement(
          _form.default.Item,
          {
            label: '\u8282\u70B9\u5BBD\u5EA6',
          },
          /*#__PURE__*/ _react.default.createElement(_inputNumber.default, {
            style: {
              width: '100%',
            },
            min: 0,
            placeholder: '\u8BF7\u8F93\u5165\u8282\u70B9\u5BBD\u5EA6',
          }),
        ),
      ),
      /*#__PURE__*/ _react.default.createElement(
        _col.default,
        {
          span: 24,
        },
        /*#__PURE__*/ _react.default.createElement(
          _form.default.Item,
          {
            label: '\u8282\u70B9\u9AD8\u5EA6',
          },
          /*#__PURE__*/ _react.default.createElement(_inputNumber.default, {
            style: {
              width: '100%',
            },
            min: 0,
            placeholder: '\u8BF7\u8F93\u5165\u8282\u70B9\u9AD8\u5EA6',
          }),
        ),
      ),
      /*#__PURE__*/ _react.default.createElement(
        _col.default,
        {
          span: 24,
        },
        /*#__PURE__*/ _react.default.createElement(
          _form.default.Item,
          {
            label: '\u6C34\u5E73\u4E2A\u6570',
          },
          /*#__PURE__*/ _react.default.createElement(_inputNumber.default, {
            style: {
              width: '100%',
            },
            min: 0,
            placeholder: '\u8BF7\u8F93\u5165\u6C34\u5E73\u4E2A\u6570',
          }),
        ),
      ),
      /*#__PURE__*/ _react.default.createElement(
        _col.default,
        {
          span: 24,
        },
        /*#__PURE__*/ _react.default.createElement(
          _form.default.Item,
          {
            label: '\u6C34\u5E73\u95F4\u8DDD',
          },
          /*#__PURE__*/ _react.default.createElement(_inputNumber.default, {
            style: {
              width: '100%',
            },
            min: 0,
            placeholder: '\u8BF7\u8F93\u5165\u6C34\u5E73\u95F4\u8DDD',
          }),
        ),
      ),
      /*#__PURE__*/ _react.default.createElement(
        _col.default,
        {
          span: 24,
        },
        /*#__PURE__*/ _react.default.createElement(
          _form.default.Item,
          {
            label: '\u5782\u76F4\u95F4\u8DDD',
          },
          /*#__PURE__*/ _react.default.createElement(_inputNumber.default, {
            style: {
              width: '100%',
            },
            min: 0,
            placeholder: '\u8BF7\u8F93\u5165\u5782\u76F4\u95F4\u8DDD',
          }),
        ),
      ),
      /*#__PURE__*/ _react.default.createElement(
        _col.default,
        {
          span: 24,
        },
        /*#__PURE__*/ _react.default.createElement(
          _button.default,
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
exports.default = _default;
