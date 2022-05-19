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

var IconcaidanJichushuju = function IconcaidanJichushuju(_ref) {
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
    d: "M461.632 432.128l24.448 24.448a21.12 21.12 0 0 1 0 29.888l-59.968 59.904-0.576 0.448 66.368 66.56 60.544-60.544a21.12 21.12 0 0 1 29.824 0l24.448 24.448a21.12 21.12 0 0 1 0 29.824l-59.968 59.968-0.576 0.448 36.608 36.608a42.24 42.24 0 0 1 0 59.712l-90.88 90.88a213.376 213.376 0 0 1-275.84 22.016 8.512 8.512 0 0 1-1.536 1.92l-59.968 59.968a21.12 21.12 0 0 1-29.824 0l-24.448-24.448a21.12 21.12 0 0 1 0-29.888l59.904-59.968 3.136-2.496a213.376 213.376 0 0 1 26.88-268.8l90.88-90.88a42.24 42.24 0 0 1 59.712 0l30.464 30.528 0.256-0.32 60.224-60.16a21.12 21.12 0 0 1 29.888 0zM310.912 522.88L235.52 598.208a149.312 149.312 0 0 0-3.584 207.488l3.584 3.712c57.088 57.088 148.928 58.24 207.488 3.584l3.648-3.584 75.456-75.392-211.2-211.2z m573.44-422.528a21.12 21.12 0 0 1 29.824 0l24.448 24.448a21.12 21.12 0 0 1 0 29.824l-59.968 59.968a8.384 8.384 0 0 1-1.92 1.536 213.376 213.376 0 0 1-22.08 275.84l-90.816 90.88a42.24 42.24 0 0 1-59.712 0l-241.92-241.984a42.24 42.24 0 0 1 0-59.776L552.96 190.272a213.376 213.376 0 0 1 268.864-26.944l2.56-3.136z m-78.656 131.648a149.312 149.312 0 0 0-207.488 3.584L522.88 310.912l211.2 211.2 75.392-75.456 3.584-3.648a149.312 149.312 0 0 0-3.584-207.488z",
    fill: (0, _helper.getIconColor)(color, 0, '#333333')
  }));
};

IconcaidanJichushuju.defaultProps = {
  size: 18
};
var _default = IconcaidanJichushuju;
exports["default"] = _default;