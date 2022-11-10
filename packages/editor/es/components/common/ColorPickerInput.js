import React from 'react';
import { Select } from 'antd';
import ColorPicker from './ColorPicker/ColorPicker';
var Option = Select.Option;

var ColorPickerInput = function ColorPickerInput(_ref) {
  var _ref$value = _ref.value,
      value = _ref$value === void 0 ? {} : _ref$value,
      onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement(ColorPicker, null);
};

export default ColorPickerInput;