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

var Iconzhexiantu1 = function Iconzhexiantu1(_ref) {
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
    d: "M72.282353 0l0.216847 831.247059H903.529412v72.282353H48.429176c-26.599906 0-48.188235-21.564235-48.188235-48.188236L0 0h72.282353z m775.348706 512.915576l15.420235 18.480189a24.094118 24.094118 0 0 1-3.011765 33.948611l-193.307105 161.67153a24.094118 24.094118 0 0 1-24.335059 3.927341l-259.734589-103.098729-128.566211 107.291106a24.094118 24.094118 0 0 1-33.924518-3.059953l-15.420235-18.480189a24.094118 24.094118 0 0 1 3.035859-33.948611l150.564141-125.674918a24.094118 24.094118 0 0 1 24.335059-3.903247l259.6864 103.074635 171.309176-143.239529a24.094118 24.094118 0 0 1 33.924518 3.011764z m-1.831153-472.051952l19.082541 14.697411a24.094118 24.094118 0 0 1 4.433318 33.755859L654.083012 369.362824a24.094118 24.094118 0 0 1-22.81713 9.13167l-256.144564-39.996235-169.622589 251.132988a24.094118 24.094118 0 0 1-31.033223 7.926965l-2.409412-1.445647-19.974023-13.492706a24.094118 24.094118 0 0 1-6.481318-33.442635l186.753506-276.504095a24.094118 24.094118 0 0 1 23.708612-10.312282L614.159059 302.622118l197.812706-257.373365a24.094118 24.094118 0 0 1 33.804047-4.409224z",
    fill: (0, _helper.getIconColor)(color, 0, '#333333')
  }));
};

Iconzhexiantu1.defaultProps = {
  size: 18
};
var _default = Iconzhexiantu1;
exports["default"] = _default;