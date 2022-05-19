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

var Iconliebiao = function Iconliebiao(_ref) {
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
    d: "M917.333333 298.666667v21.333333a21.333333 21.333333 0 0 1-21.333333 21.333333H320a21.333333 21.333333 0 0 1-21.333333-21.333333V298.666667a21.333333 21.333333 0 0 1 21.333333-21.333334H896a21.333333 21.333333 0 0 1 21.333333 21.333334zM181.333333 362.666667a53.333333 53.333333 0 1 0 0-106.666667 53.333333 53.333333 0 0 0 0 106.666667z m0 213.333333a53.333333 53.333333 0 1 0 0-106.666667 53.333333 53.333333 0 0 0 0 106.666667z m0 106.666667a53.333333 53.333333 0 1 1 0 106.666666 53.333333 53.333333 0 0 1 0-106.666666z m714.666667 21.333333a21.333333 21.333333 0 0 1 21.333333 21.333333v21.333334a21.333333 21.333333 0 0 1-21.333333 21.333333H320a21.333333 21.333333 0 0 1-21.333333-21.333333V725.333333a21.333333 21.333333 0 0 1 21.333333-21.333333H896z m0-213.333333a21.333333 21.333333 0 0 1 21.333333 21.333333v21.333333a21.333333 21.333333 0 0 1-21.333333 21.333334H320a21.333333 21.333333 0 0 1-21.333333-21.333334V512a21.333333 21.333333 0 0 1 21.333333-21.333333H896z",
    fill: (0, _helper.getIconColor)(color, 0, '#096DD9')
  }));
};

Iconliebiao.defaultProps = {
  size: 18
};
var _default = Iconliebiao;
exports["default"] = _default;