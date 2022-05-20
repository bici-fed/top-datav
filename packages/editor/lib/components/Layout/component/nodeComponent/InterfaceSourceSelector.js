'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/es/select/style');

var _select = _interopRequireDefault(require('antd/es/select'));

var _react = _interopRequireDefault(require('react'));

/**
 * @file 接口来源选择器
 */
var Option = _select.default.Option;

var InterfaceSourceSelector = function InterfaceSourceSelector(props) {
  function onChange(value) {
    console.log('selected '.concat(value));
  }

  function onBlur() {
    console.log('blur');
  }

  function onFocus() {
    console.log('focus');
  }

  function onSearch(val) {
    console.log('search:', val);
  }

  return /*#__PURE__*/ _react.default.createElement(
    _select.default,
    {
      showSearch: true,
      placeholder: '\u63A5\u53E3\u6765\u6E90',
      optionFilterProp: 'children',
      onChange: onChange,
      onFocus: onFocus,
      onBlur: onBlur,
      onSearch: onSearch,
    },
    /*#__PURE__*/ _react.default.createElement(
      Option,
      {
        value: 'jack',
      },
      'Jack',
    ),
    /*#__PURE__*/ _react.default.createElement(
      Option,
      {
        value: 'lucy',
      },
      'Lucy',
    ),
    /*#__PURE__*/ _react.default.createElement(
      Option,
      {
        value: 'tom',
      },
      'Tom',
    ),
  );
};

var _default = InterfaceSourceSelector;
exports.default = _default;
