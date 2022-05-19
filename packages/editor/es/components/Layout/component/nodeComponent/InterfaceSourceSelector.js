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

/**
 * @file 接口来源选择器
 */
var Option = _antd.Select.Option;

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

  return /*#__PURE__*/ _react['default'].createElement(
    _antd.Select,
    {
      showSearch: true,
      placeholder: '\u63A5\u53E3\u6765\u6E90',
      optionFilterProp: 'children',
      onChange: onChange,
      onFocus: onFocus,
      onBlur: onBlur,
      onSearch: onSearch,
    },
    /*#__PURE__*/ _react['default'].createElement(
      Option,
      {
        value: 'jack',
      },
      'Jack',
    ),
    /*#__PURE__*/ _react['default'].createElement(
      Option,
      {
        value: 'lucy',
      },
      'Lucy',
    ),
    /*#__PURE__*/ _react['default'].createElement(
      Option,
      {
        value: 'tom',
      },
      'Tom',
    ),
  );
};

var _default = InterfaceSourceSelector;
exports['default'] = _default;
