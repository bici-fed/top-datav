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

var Iconxiazai1 = function Iconxiazai1(_ref) {
  var size = _ref.size,
      color = _ref.color,
      _style = _ref.style,
      rest = _objectWithoutProperties(_ref, _excluded);

  var style = _style ? _objectSpread(_objectSpread({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    width: size + 'px',
    height: size + 'px',
    style: style
  }, rest), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M505.7024 660.992c3.1744 4.096 9.4208 4.096 12.5952 0l112.0256-141.6704a7.9872 7.9872 0 0 0-6.2976-12.9024H549.888V167.936a8.0384 8.0384 0 0 0-7.9872-7.9872H481.8944a8.0384 8.0384 0 0 0-7.9872 7.9872V506.368H399.9744c-6.656 0-10.3936 7.68-6.2976 12.9024l112.0256 141.824z m372.2752-34.9696h-59.9552a8.0384 8.0384 0 0 0-8.0384 7.9872v154.0096H214.016v-154.0096a8.0384 8.0384 0 0 0-8.0384-7.9872H146.0224a8.0384 8.0384 0 0 0-8.0384 7.9872v197.9904c0 17.7152 14.336 32 32 32h684.032c17.664 0 32-14.336 32-32v-197.9904a8.0384 8.0384 0 0 0-8.0384-7.9872z",
    fill: (0, _helper.getIconColor)(color, 0, '#333333')
  }));
};

Iconxiazai1.defaultProps = {
  size: 18
};
var _default = Iconxiazai1;
exports["default"] = _default;