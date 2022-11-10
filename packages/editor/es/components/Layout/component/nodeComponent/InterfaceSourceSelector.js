/**
 * @file 接口来源选择器
 */
import React from 'react';
import { Select } from 'antd';
var Option = Select.Option;

var InterfaceSourceSelector = function InterfaceSourceSelector(props) {
  function onChange(value) {
    console.log("selected ".concat(value));
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

  return /*#__PURE__*/React.createElement(Select, {
    showSearch: true,
    placeholder: "\u63A5\u53E3\u6765\u6E90",
    optionFilterProp: "children",
    onChange: onChange,
    onFocus: onFocus,
    onBlur: onBlur,
    onSearch: onSearch
  }, /*#__PURE__*/React.createElement(Option, {
    value: "jack"
  }, "Jack"), /*#__PURE__*/React.createElement(Option, {
    value: "lucy"
  }, "Lucy"), /*#__PURE__*/React.createElement(Option, {
    value: "tom"
  }, "Tom"));
};

export default InterfaceSourceSelector;