import 'antd/lib/button/style';
import _Button from 'antd/lib/button';
import 'antd/lib/input-number/style';
import _InputNumber from 'antd/lib/input-number';
import 'antd/lib/col/style';
import _Col from 'antd/lib/col';
import 'antd/lib/row/style';
import _Row from 'antd/lib/row';
import 'antd/lib/form/style';
import _Form from 'antd/lib/form';

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

import React from 'react';
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

  return /*#__PURE__*/ React.createElement(
    _Form,
    _objectSpread(
      _objectSpread({}, formLayout),
      {},
      {
        style: {
          margin: '10px 10px',
        },
      },
    ),
    /*#__PURE__*/ React.createElement(
      _Row,
      null,
      /*#__PURE__*/ React.createElement(
        _Col,
        {
          span: 24,
        },
        /*#__PURE__*/ React.createElement(
          _Form.Item,
          {
            label: '\u6700\u5927\u5BBD\u5EA6',
          },
          /*#__PURE__*/ React.createElement(_InputNumber, {
            style: {
              width: '100%',
            },
            min: 0,
            placeholder: '\u8BF7\u8F93\u5165\u6700\u5927\u5BBD\u5EA6',
          }),
        ),
      ),
      /*#__PURE__*/ React.createElement(
        _Col,
        {
          span: 24,
        },
        /*#__PURE__*/ React.createElement(
          _Form.Item,
          {
            label: '\u8282\u70B9\u5BBD\u5EA6',
          },
          /*#__PURE__*/ React.createElement(_InputNumber, {
            style: {
              width: '100%',
            },
            min: 0,
            placeholder: '\u8BF7\u8F93\u5165\u8282\u70B9\u5BBD\u5EA6',
          }),
        ),
      ),
      /*#__PURE__*/ React.createElement(
        _Col,
        {
          span: 24,
        },
        /*#__PURE__*/ React.createElement(
          _Form.Item,
          {
            label: '\u8282\u70B9\u9AD8\u5EA6',
          },
          /*#__PURE__*/ React.createElement(_InputNumber, {
            style: {
              width: '100%',
            },
            min: 0,
            placeholder: '\u8BF7\u8F93\u5165\u8282\u70B9\u9AD8\u5EA6',
          }),
        ),
      ),
      /*#__PURE__*/ React.createElement(
        _Col,
        {
          span: 24,
        },
        /*#__PURE__*/ React.createElement(
          _Form.Item,
          {
            label: '\u6C34\u5E73\u4E2A\u6570',
          },
          /*#__PURE__*/ React.createElement(_InputNumber, {
            style: {
              width: '100%',
            },
            min: 0,
            placeholder: '\u8BF7\u8F93\u5165\u6C34\u5E73\u4E2A\u6570',
          }),
        ),
      ),
      /*#__PURE__*/ React.createElement(
        _Col,
        {
          span: 24,
        },
        /*#__PURE__*/ React.createElement(
          _Form.Item,
          {
            label: '\u6C34\u5E73\u95F4\u8DDD',
          },
          /*#__PURE__*/ React.createElement(_InputNumber, {
            style: {
              width: '100%',
            },
            min: 0,
            placeholder: '\u8BF7\u8F93\u5165\u6C34\u5E73\u95F4\u8DDD',
          }),
        ),
      ),
      /*#__PURE__*/ React.createElement(
        _Col,
        {
          span: 24,
        },
        /*#__PURE__*/ React.createElement(
          _Form.Item,
          {
            label: '\u5782\u76F4\u95F4\u8DDD',
          },
          /*#__PURE__*/ React.createElement(_InputNumber, {
            style: {
              width: '100%',
            },
            min: 0,
            placeholder: '\u8BF7\u8F93\u5165\u5782\u76F4\u95F4\u8DDD',
          }),
        ),
      ),
      /*#__PURE__*/ React.createElement(
        _Col,
        {
          span: 24,
        },
        /*#__PURE__*/ React.createElement(
          _Button,
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

export default Layout;
