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

var Iconchakanshujudianquxian = function Iconchakanshujudianquxian(_ref) {
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
    d: "M914.752 0C972.8 0 1024 51.2 1024 109.248v805.504C1024 972.8 972.8 1024 914.752 1024H109.248C51.2 1024 0 972.8 0 914.752V109.248C0 51.2 51.2 0 109.248 0zM631.488 238.912c-17.088 0-30.72 10.24-37.568 27.328l-102.4 307.2-61.44-143.36a29.76 29.76 0 0 0-27.328-20.48c-13.632-3.392-23.872 0-34.112 10.24l-54.592 54.592h-92.16A37.888 37.888 0 0 0 184.32 512c0 20.48 17.088 37.568 37.568 37.568h109.184c10.24 0 20.48-3.456 27.328-10.24L385.728 512l78.464 184.32c6.848 13.632 20.48 23.872 37.568 23.872a33.28 33.28 0 0 0 34.112-27.264l95.616-286.72 34.112 116.032c3.392 17.088 20.48 27.328 37.568 27.328h98.944c20.48 0 37.568-17.088 37.568-37.568a37.888 37.888 0 0 0-37.568-37.568h-71.68l-57.984-208.192c-6.848-17.088-20.48-27.328-40.96-27.328z",
    fill: (0, _helper.getIconColor)(color, 0, '#096DD9')
  }));
};

Iconchakanshujudianquxian.defaultProps = {
  size: 18
};
var _default = Iconchakanshujudianquxian;
exports["default"] = _default;