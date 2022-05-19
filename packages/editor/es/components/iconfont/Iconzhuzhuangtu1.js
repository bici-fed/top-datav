"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _helper = require("./helper");

var _excluded = ["size", "color", "style"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DEFAULT_STYLE = {
  display: 'block'
};

var Iconzhuzhuangtu1 = function Iconzhuzhuangtu1(_ref) {
  var size = _ref.size,
      color = _ref.color,
      _style = _ref.style,
      rest = _objectWithoutProperties(_ref, _excluded);

  var style = _style ? _objectSpread(_objectSpread({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 1145 1024",
    width: size + 'px',
    height: size + 'px',
    style: style
  }, rest), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M72.282353 0l0.216847 831.247059H903.529412v72.282353H48.429176c-26.599906 0-48.188235-21.564235-48.188235-48.188236L0 0h72.282353z m108.423529 332.619294a24.094118 24.094118 0 0 1 24.094118 24.094118V746.917647a24.094118 24.094118 0 0 1-24.094118 24.094118h-24.094117a24.094118 24.094118 0 0 1-24.094118-24.094118V356.713412a24.094118 24.094118 0 0 1 24.094118-24.094118h24.094117z m216.847059-168.658823a24.094118 24.094118 0 0 1 24.094118 24.094117V746.917647a24.094118 24.094118 0 0 1-24.094118 24.094118h-24.094117a24.094118 24.094118 0 0 1-24.094118-24.094118V188.054588a24.094118 24.094118 0 0 1 24.094118-24.094117h24.094117z m216.847059 168.658823a24.094118 24.094118 0 0 1 24.094118 24.094118V746.917647a24.094118 24.094118 0 0 1-24.094118 24.094118h-24.094118a24.094118 24.094118 0 0 1-24.094117-24.094118V356.713412a24.094118 24.094118 0 0 1 24.094117-24.094118h24.094118z m216.847059-96.37647a24.094118 24.094118 0 0 1 24.094117 24.094117V746.917647a24.094118 24.094118 0 0 1-24.094117 24.094118h-24.094118a24.094118 24.094118 0 0 1-24.094117-24.094118V260.336941a24.094118 24.094118 0 0 1 24.094117-24.094117h24.094118z",
    fill: (0, _helper.getIconColor)(color, 0, '#333333')
  }));
};

Iconzhuzhuangtu1.defaultProps = {
  size: 18
};
var _default = Iconzhuzhuangtu1;
exports["default"] = _default;