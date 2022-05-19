import 'antd/lib/select/style';
import _Select from 'antd/lib/select';
import React from 'react';
import ColorPicker from './ColorPicker/ColorPicker';
var Option = _Select.Option;

var ColorPickerInput = function ColorPickerInput(_ref) {
  var _ref$value = _ref.value,
    value = _ref$value === void 0 ? {} : _ref$value,
    onChange = _ref.onChange;
  return /*#__PURE__*/ React.createElement(ColorPicker, null);
};

export default ColorPickerInput;
