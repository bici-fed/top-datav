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

var Iconchakan = function Iconchakan(_ref) {
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
    d: "M854.5792 288.6144l-215.1936-215.1936a31.9488 31.9488 0 0 0-22.5792-9.4208H192a31.9488 31.9488 0 0 0-32 32v832c0 17.7152 14.336 32 32 32h640c17.7152 0 32-14.336 32-32V311.296a32.1536 32.1536 0 0 0-9.4208-22.6816z m-64.3584 37.376h-188.2112V137.7792l188.2112 188.2112z m1.792 562.0224H231.936V135.9872h302.0288v216.0128c0 23.1936 18.7904 41.984 41.984 41.984h216.0128v494.0288z m-263.936-416h-32.1536a11.8784 11.8784 0 0 0-11.6224 9.0624l-49.664 198.912-46.1312-198.656a12.0832 12.0832 0 0 0-11.7248-9.3184h-35.3792a12.032 12.032 0 0 0-11.6224 15.104l74.24 275.968a12.0832 12.0832 0 0 0 11.5712 8.9088h32c5.4272 0 10.24-3.584 11.6224-8.9088L512 566.1184l52.7872 196.9664a12.0832 12.0832 0 0 0 11.6224 8.9088h31.744c5.4272 0 10.24-3.584 11.6224-8.9088l74.4448-275.968a12.032 12.032 0 0 0-11.6224-15.104h-35.584a12.0832 12.0832 0 0 0-11.7248 9.2672l-45.7728 199.168-49.8176-199.3728a11.8784 11.8784 0 0 0-11.6224-9.0624z",
    fill: (0, _helper.getIconColor)(color, 0, '#333333')
  }));
};

Iconchakan.defaultProps = {
  size: 18
};
var _default = Iconchakan;
exports["default"] = _default;