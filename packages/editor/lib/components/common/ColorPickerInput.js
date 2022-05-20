'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/es/select/style');

var _select = _interopRequireDefault(require('antd/es/select'));

var _react = _interopRequireDefault(require('react'));

var _ColorPicker = _interopRequireDefault(require('./ColorPicker/ColorPicker'));

var Option = _select.default.Option;

var ColorPickerInput = function ColorPickerInput(_ref) {
  var _ref$value = _ref.value,
    value = _ref$value === void 0 ? {} : _ref$value,
    onChange = _ref.onChange;
  return /*#__PURE__*/ _react.default.createElement(_ColorPicker.default, null);
};

var _default = ColorPickerInput;
exports.default = _default;
