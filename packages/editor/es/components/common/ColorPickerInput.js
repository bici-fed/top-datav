"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _ColorPicker = _interopRequireDefault(require("./ColorPicker/ColorPicker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Option = _antd.Select.Option;

var ColorPickerInput = function ColorPickerInput(_ref) {
  var _ref$value = _ref.value,
      value = _ref$value === void 0 ? {} : _ref$value,
      onChange = _ref.onChange;
  return /*#__PURE__*/_react["default"].createElement(_ColorPicker["default"], null);
};

var _default = ColorPickerInput;
exports["default"] = _default;