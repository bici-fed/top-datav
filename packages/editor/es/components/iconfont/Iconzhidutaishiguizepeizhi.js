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

var Iconzhidutaishiguizepeizhi = function Iconzhidutaishiguizepeizhi(_ref) {
  var size = _ref.size,
      color = _ref.color,
      _style = _ref.style,
      rest = _objectWithoutProperties(_ref, _excluded);

  var style = _style ? _objectSpread(_objectSpread({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 1152 1024",
    width: size + 'px',
    height: size + 'px',
    style: style
  }, rest), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M212.48896 8C95.36896 8 0.00896 104.256 0.00896 224.32a211.52 211.52 0 0 0 212.48 213.12 211.52 211.52 0 0 0 212.544-213.12c0-120.064-95.36-216.32-212.608-216.32h0.064z m0.064 576.192a211.2 211.2 0 0 0-212.48 212.8 212.864 212.864 0 0 0 212.416 214.784 212.864 212.864 0 0 0 212.544-214.784 211.2 211.2 0 0 0-212.608-212.8h0.128zM548.10496 155.52h559.232A45.376 45.376 0 0 0 1152.00896 109.76a45.376 45.376 0 0 0-44.672-45.888H548.10496a45.376 45.376 0 0 0-44.8 45.888c-0.256 24.96 19.84 45.44 44.8 45.76z m559.232 166.08H548.10496a45.376 45.376 0 0 0-44.8 45.824 45.376 45.376 0 0 0 44.8 45.888h559.232A45.376 45.376 0 0 0 1152.00896 367.36a45.376 45.376 0 0 0-44.672-45.76z m0 286.4H548.10496a45.376 45.376 0 0 0-44.8 45.824c-0.256 24.96 19.84 45.44 44.8 45.824h559.232a45.376 45.376 0 0 0 44.672-45.824 45.376 45.376 0 0 0-44.672-45.824z m0 257.728H548.10496a45.376 45.376 0 0 0-44.8 45.824c-0.256 24.96 19.84 45.44 44.8 45.76h559.232a45.376 45.376 0 0 0 44.672-45.696 45.376 45.376 0 0 0-44.672-45.824z",
    fill: (0, _helper.getIconColor)(color, 0, '#096DD9')
  }));
};

Iconzhidutaishiguizepeizhi.defaultProps = {
  size: 18
};
var _default = Iconzhidutaishiguizepeizhi;
exports["default"] = _default;