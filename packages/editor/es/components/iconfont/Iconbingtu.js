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

var Iconbingtu = function Iconbingtu(_ref) {
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
    d: "M864 517.9904H506.0096V160a8.0384 8.0384 0 0 0-7.9872-7.9872h-26.0096a398.4384 398.4384 0 0 0-282.8288 117.0944 398.1824 398.1824 0 0 0-85.7088 127.0784 397.6192 397.6192 0 0 0-31.488 155.8016 398.4384 398.4384 0 0 0 117.0944 282.8288 398.1824 398.1824 0 0 0 127.1296 85.7088 397.6192 397.6192 0 0 0 155.8016 31.488 398.4384 398.4384 0 0 0 282.7776-117.0944 398.1824 398.1824 0 0 0 85.7088-127.1296 397.6192 397.6192 0 0 0 31.488-155.8016v-26.0096a8.0384 8.0384 0 0 0-7.9872-7.9872z m-158.3104 269.824a331.6224 331.6224 0 0 1-235.264 96.2048 329.8816 329.8816 0 0 1-233.216-97.2288 329.8816 329.8816 0 0 1-97.2288-234.8032c0-88.6784 34.5088-172.0832 97.2288-234.8032A329.1136 329.1136 0 0 1 438.016 221.696v364.288h364.288a329.3184 329.3184 0 0 1-96.6144 201.8304z m246.272-325.4272l-2.56-28.16a397.824 397.824 0 0 0-115.2-244.6336 399.36 399.36 0 0 0-245.248-114.9952l-28.2624-2.56a7.936 7.936 0 0 0-8.704 7.8848v384.1024c0 4.352 3.584 7.9872 7.9872 7.9872l384-1.024a7.9872 7.9872 0 0 0 8.0384-8.6016z m-332.1856-58.1632V147.6096a332.288 332.288 0 0 1 166.4 89.8048 330.1376 330.1376 0 0 1 90.0096 166.0928l-256.4096 0.7168z",
    fill: (0, _helper.getIconColor)(color, 0, '#333333')
  }));
};

Iconbingtu.defaultProps = {
  size: 18
};
var _default = Iconbingtu;
exports["default"] = _default;