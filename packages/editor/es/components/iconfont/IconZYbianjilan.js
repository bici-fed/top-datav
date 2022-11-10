var _excluded = ["size", "color", "style"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable */
import React from 'react';
import { getIconColor } from './helper';
var DEFAULT_STYLE = {
  display: 'block'
};

var IconZYbianjilan = function IconZYbianjilan(_ref) {
  var size = _ref.size,
      color = _ref.color,
      _style = _ref.style,
      rest = _objectWithoutProperties(_ref, _excluded);

  var style = _style ? _objectSpread(_objectSpread({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    width: size + 'px',
    height: size + 'px',
    style: style
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: "M1021.539159 512.206492V921.607167A102.563487 102.563487 0 0 1 919.402309 1024H102.13685A102.563487 102.563487 0 0 1 0 921.607167V102.635162A102.563487 102.563487 0 0 1 102.13685 0.412984h357.521641c30.71785 0 51.196416 20.478567 51.196416 51.196417s-20.563894 51.196416-51.196416 51.196416H153.162612c-30.547195 0-51.025762 20.478567-51.025762 51.196416V870.410751c0 30.71785 20.478567 51.196416 51.025762 51.196416h715.128608c30.71785 0 51.111089-20.478567 51.111089-51.196416v-358.374914c0-30.71785 20.478567-51.196416 51.025761-51.196416 30.632522 0 51.025762 20.478567 51.025762 51.196416h0.085327z m-10.239283-501.724879c20.478567 25.598208 15.358925 61.4357-10.239284 81.914266L439.265251 655.47113c-15.358925 25.598208-45.991447 35.837491-71.504328 20.478567-25.598208-15.358925-35.752164-46.076775-20.478566-71.674983 5.119642-5.119642 10.239283-15.358925 20.478566-20.478566L924.436623 20.806224c20.478567-25.598208 61.350372-25.598208 86.863253-10.239284z",
    fill: getIconColor(color, 0, '#096DD9')
  }));
};

IconZYbianjilan.defaultProps = {
  size: 18
};
export default IconZYbianjilan;