import 'antd/lib/select/style';
import _Select from 'antd/lib/select';

/**
 * @file 接口来源选择器
 */
import React from 'react';
var Option = _Select.Option;

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

  return /*#__PURE__*/ React.createElement(
    _Select,
    {
      showSearch: true,
      placeholder: '\u63A5\u53E3\u6765\u6E90',
      optionFilterProp: 'children',
      onChange: onChange,
      onFocus: onFocus,
      onBlur: onBlur,
      onSearch: onSearch,
    },
    /*#__PURE__*/ React.createElement(
      Option,
      {
        value: 'jack',
      },
      'Jack',
    ),
    /*#__PURE__*/ React.createElement(
      Option,
      {
        value: 'lucy',
      },
      'Lucy',
    ),
    /*#__PURE__*/ React.createElement(
      Option,
      {
        value: 'tom',
      },
      'Tom',
    ),
  );
};

export default InterfaceSourceSelector;
