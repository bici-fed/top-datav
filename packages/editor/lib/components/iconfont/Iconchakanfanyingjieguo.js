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

var Iconchakanfanyingjieguo = function Iconchakanfanyingjieguo(_ref) {
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
    d: "M122.759228 0H933.646758v990.147765a33.129412 33.129412 0 0 1-32.406589 33.852235H90.35264V33.852235A33.129412 33.129412 0 0 1 122.759228 0z m118.964706 315.934118c35.84 0 64.873412-30.298353 64.873412-67.704471 0-37.345882-29.033412-67.704471-64.873412-67.704471S176.850522 210.823529 176.850522 248.229647c0 37.406118 29.033412 67.704471 64.873412 67.704471z m124.325647-135.408942a16.564706 16.564706 0 0 0-16.263529 16.926118v118.482824h481.159529c8.975059 0 16.263529-7.589647 16.26353-16.865883V180.464941H365.989346zM193.053816 406.226824a16.564706 16.564706 0 0 0-16.263529 16.865882v118.543059h654.155294c8.975059 0 16.263529-7.589647 16.26353-16.926118V406.226824H192.993581z m0 225.641411a16.564706 16.564706 0 0 0-16.263529 16.926118v118.482823h654.155294c8.975059 0 16.263529-7.589647 16.26353-16.865882V631.868235H192.993581z",
    fill: (0, _helper.getIconColor)(color, 0, '#096DD9')
  }));
};

Iconchakanfanyingjieguo.defaultProps = {
  size: 18
};
var _default = Iconchakanfanyingjieguo;
exports["default"] = _default;