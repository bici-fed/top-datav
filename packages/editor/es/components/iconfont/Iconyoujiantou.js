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

var Iconyoujiantou = function Iconyoujiantou(_ref) {
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
    d: "M512 512m512 0a512 512 0 1 0-1024 0 512 512 0 1 0 1024 0Z",
    fill: (0, _helper.getIconColor)(color, 0, '#EBF5FF')
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M555.598769 743.975385a14.769231 14.769231 0 0 1 0-20.873847l199.561846-199.522461a10.24 10.24 0 0 0 0-14.493539l-199.561846-199.56184601a14.769231 14.769231 0 1 1 20.873846-20.87384599l199.561847 199.522462a39.778462 39.778462 0 0 1 0 56.280615l-199.522462 199.522462a14.769231 14.769231 0 0 1-20.873846 0z m5.632-198.104616a29.538462 29.538462 0 1 1 0-59.076923 29.538462 29.538462 0 0 1 0 59.076923z m-295.384615 0a29.538462 29.538462 0 1 1 0-59.076923 29.538462 29.538462 0 0 1 0 59.076923z m196.923077 0a29.538462 29.538462 0 1 1 0-59.076923 29.538462 29.538462 0 0 1 0 59.076923z m-98.461539 0a29.538462 29.538462 0 1 1 0-59.07692301 29.538462 29.538462 0 0 1 0 59.07692301z",
    fill: (0, _helper.getIconColor)(color, 1, '#096DD9')
  }));
};

Iconyoujiantou.defaultProps = {
  size: 18
};
var _default = Iconyoujiantou;
exports["default"] = _default;