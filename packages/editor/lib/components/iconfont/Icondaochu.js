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

var Icondaochu = function Icondaochu(_ref) {
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
    d: "M517.824 657.28c27.84 0 50.56 22.72 50.56 50.56v151.68a152.128 152.128 0 0 1-151.68 151.68h-252.8a152.128 152.128 0 0 1-151.68-151.68V151.68A152.128 152.128 0 0 1 163.968 0h252.8a152.128 152.128 0 0 1 151.68 151.68v151.68c0 27.776-22.72 50.56-50.56 50.56a50.688 50.688 0 0 1-50.56-50.56V151.68a50.688 50.688 0 0 0-50.56-50.56h-252.8a50.688 50.688 0 0 0-50.56 50.56v707.84c0 27.776 22.784 50.56 50.56 50.56h252.8c27.84 0 50.56-22.784 50.56-50.56v-151.68c0-27.84 22.784-50.56 50.56-50.56z m495.488-121.344c-1.92 1.92-3.2 3.776-3.84 4.416l-202.24 202.24a52.288 52.288 0 0 1-35.968 14.528 49.6 49.6 0 0 1-36.032-14.528 50.752 50.752 0 0 1 0-71.424l115.648-115.648H265.024a50.688 50.688 0 0 1-50.56-50.56c0-27.84 22.784-50.56 50.56-50.56h586.496l-115.648-115.648a50.752 50.752 0 0 1 0-71.424 50.752 50.752 0 0 1 71.424 0l202.24 202.24c2.56 1.92 4.416 5.056 6.272 7.552l1.92 3.84c0.64 1.92 1.92 3.136 2.56 5.056 0.64 1.92 0.64 3.136 1.28 5.056s1.28 3.136 1.28 4.416c1.216 6.272 1.216 13.248 0 19.584 0 1.92-0.64 3.2-1.28 4.416-0.64 1.92-1.28 3.2-1.92 5.056-0.64 1.92-1.92 3.2-2.56 5.056l-1.92 3.84v0.64l-1.856 1.856z",
    fill: (0, _helper.getIconColor)(color, 0, '#096DD9')
  }));
};

Icondaochu.defaultProps = {
  size: 18
};
var _default = Icondaochu;
exports["default"] = _default;