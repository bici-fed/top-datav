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

var Icontongbubaojingguize = function Icontongbubaojingguize(_ref) {
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
    d: "M634.88 729.6H145.92C79.36 729.6 25.6 675.84 25.6 609.28V145.92C25.6 79.36 79.36 25.6 145.92 25.6h488.96c66.56 0 120.32 53.76 120.32 120.32v35.84c0 25.6-20.48 46.08-46.08 46.08-25.6 0-46.08-20.48-46.08-46.08v-35.84c0-15.36-12.8-28.16-28.16-28.16H145.92c-15.36 0-28.16 12.8-28.16 28.16v463.36c0 15.36 12.8 28.16 28.16 28.16h488.96c15.36 0 28.16-12.8 28.16-28.16V524.8c0-25.6 20.48-46.08 46.08-46.08 25.6 0 46.08 20.48 46.08 46.08v84.48c0 66.56-53.76 120.32-120.32 120.32zM414.72 1024c-66.56 0-120.32-53.76-120.32-120.32v-33.28c0-25.6 20.48-46.08 46.08-46.08 25.6 0 46.08 20.48 46.08 46.08v33.28c0 15.36 12.8 28.16 28.16 28.16h488.96c15.36 0 28.16-12.8 28.16-28.16V440.32c0-15.36-12.8-28.16-28.16-28.16H414.72c-15.36 0-28.16 12.8-28.16 28.16V524.8c0 25.6-20.48 46.08-46.08 46.08-25.6 0-46.08-20.48-46.08-46.08V440.32C294.4 373.76 348.16 320 414.72 320h488.96C970.24 320 1024 373.76 1024 440.32v463.36c0 66.56-53.76 120.32-120.32 120.32H414.72z",
    fill: (0, _helper.getIconColor)(color, 0, '#096DD9')
  }));
};

Icontongbubaojingguize.defaultProps = {
  size: 18
};
var _default = Icontongbubaojingguize;
exports["default"] = _default;