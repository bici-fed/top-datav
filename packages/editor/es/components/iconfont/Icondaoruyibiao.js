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

var Icondaoruyibiao = function Icondaoruyibiao(_ref) {
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
    d: "M773.824 657.28c27.84 0 50.56 22.72 50.56 50.56v151.68a152.128 152.128 0 0 1-151.68 151.68h-508.8a152.128 152.128 0 0 1-151.68-151.68V151.68A152.128 152.128 0 0 1 163.968 0h508.8a152.128 152.128 0 0 1 151.68 151.68v151.68c0 27.776-22.72 50.56-50.56 50.56a50.688 50.688 0 0 1-50.56-50.56V151.68a50.688 50.688 0 0 0-50.56-50.56h-508.8a50.688 50.688 0 0 0-50.56 50.56v707.84c0 27.776 22.784 50.56 50.56 50.56h508.8c27.84 0 50.56-22.784 50.56-50.56v-151.68c0-27.84 22.784-50.56 50.56-50.56zM224.896 535.936c1.92 1.92 3.2 3.776 3.84 4.416l202.24 202.24a52.288 52.288 0 0 0 35.968 14.528c13.312 0 25.92-4.48 36.032-14.528a50.752 50.752 0 0 0 0-71.424L387.328 555.52h585.856c27.776 0 50.56-22.784 50.56-50.56a50.688 50.688 0 0 0-50.56-50.56H386.688L502.4 338.752a50.752 50.752 0 0 0 0-71.424 50.752 50.752 0 0 0-71.36 0l-202.24 202.24c-2.56 1.92-4.48 5.056-6.4 7.552l-1.856 3.84c-0.64 1.92-1.92 3.136-2.56 5.056-0.64 1.92-0.64 3.136-1.216 5.056-0.64 1.92-1.28 3.136-1.28 4.416a51.072 51.072 0 0 0 0 19.584c0 1.92 0.64 3.2 1.28 4.416 0.64 1.92 1.28 3.2 1.92 5.056 0.64 1.92 1.92 3.2 2.56 5.056l1.856 3.84v0.64l1.92 1.856z",
    fill: (0, _helper.getIconColor)(color, 0, '#096DD9')
  }));
};

Icondaoruyibiao.defaultProps = {
  size: 18
};
var _default = Icondaoruyibiao;
exports["default"] = _default;