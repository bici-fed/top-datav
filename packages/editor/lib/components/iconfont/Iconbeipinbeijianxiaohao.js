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

var Iconbeipinbeijianxiaohao = function Iconbeipinbeijianxiaohao(_ref) {
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
    d: "M524.653714 450.998857c-14.116571 5.558857-10.386286 6.509714-27.648-0.365714L35.108571 258.779429a19.309714 19.309714 0 0 1-0.731428-27.574858L484.644571 39.497143c10.166857-4.827429 20.626286-7.460571 39.277715 0.219428l458.898285 187.977143a19.675429 19.675429 0 0 1 0.877715 27.648L524.653714 450.998857z m13.970286 522.459429c0 11.702857 9.508571 21.211429 21.211429 21.211428l439.808-229.302857c17.188571-10.752 21.211429-29.696 21.211428-57.270857V321.243429a21.065143 21.065143 0 0 0-21.211428-21.138286L559.762286 484.717714c-21.211429 8.192-21.211429 19.017143-21.211429 30.72l0.073143 458.020572z m-73.874286-488.740572L24.868571 300.105143a21.065143 21.065143 0 0 0-21.211428 21.211428v444.635429c0 4.681143-2.852571 11.556571 21.211428 21.138286L464.676571 994.742857c11.702857 0 21.211429-9.508571 21.211429-21.211428V515.510857c0-11.702857 0-22.528-21.211429-30.72zM321.097143 594.139429c-56.32-24.502857-112.64-49.078857-168.813714-73.874286-9.289143-4.022857-13.897143-5.778286-13.897143-13.092572v-48.859428c-0.292571-6.436571 3.657143-14.921143 10.971428-11.995429l173.421715 76.068572c16.091429 7.68 11.190857 8.557714 11.922285 37.741714v24.210286c0.073143 4.827429-4.461714 13.750857-13.604571 9.801143z",
    fill: (0, _helper.getIconColor)(color, 0, '#096DD9')
  }));
};

Iconbeipinbeijianxiaohao.defaultProps = {
  size: 18
};
var _default = Iconbeipinbeijianxiaohao;
exports["default"] = _default;