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

var Icontongbu = function Icontongbu(_ref) {
  var size = _ref.size,
      color = _ref.color,
      _style = _ref.style,
      rest = _objectWithoutProperties(_ref, _excluded);

  var style = _style ? _objectSpread(_objectSpread({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 1088 1024",
    width: size + 'px',
    height: size + 'px',
    style: style
  }, rest), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M836.032 8c94.784 0 173.44 73.6 179.584 168.192l0.384 11.776v216.064a36.032 36.032 0 0 1-71.424 6.4l-0.576-6.4V188.032c0-55.68-42.24-102.208-97.6-107.52l-10.368-0.512H187.968c-55.616 0-102.144 42.24-107.52 97.664l-0.448 10.368v647.936c0 55.68 42.24 102.208 97.664 107.52l10.368 0.512h144a35.968 35.968 0 0 1 6.4 71.424l-6.4 0.576h-144A180.032 180.032 0 0 1 8.32 847.808l-0.384-11.776V187.968c0-94.784 73.6-173.44 168.192-179.584l11.776-0.384h648.064z m-264.96 999.68a36.032 36.032 0 0 0 4.608-4.672l103.168-123.776a35.968 35.968 0 0 0-27.712-59.008H584V568.192a36.032 36.032 0 0 0-72 0v252.032H444.928a35.968 35.968 0 0 0-27.776 59.008l103.168 123.84c12.8 15.296 35.456 17.28 50.688 4.544z m359.936 0a36.032 36.032 0 0 0 4.608-4.672l103.232-123.776a35.968 35.968 0 0 0-27.712-59.008H944V568.192a35.968 35.968 0 1 0-72 0v252.032h-67.136a35.968 35.968 0 0 0-27.712 59.008l103.168 123.84c12.8 15.296 35.456 17.28 50.688 4.544z",
    fill: (0, _helper.getIconColor)(color, 0, '#096DD9')
  }));
};

Icontongbu.defaultProps = {
  size: 18
};
var _default = Icontongbu;
exports["default"] = _default;