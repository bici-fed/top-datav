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

var IconcaidanGongyibianzhi = function IconcaidanGongyibianzhi(_ref) {
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
    d: "M650.624 763.392c7.552 20.416 18.944 38.976 33.216 54.784L512 917.376l-171.84-99.2c14.272-15.808 25.6-34.368 33.216-54.784L512 843.392l138.624-80zM214.336 597.312a106.688 106.688 0 1 1 0 213.376 106.688 106.688 0 0 1 0-213.376z m597.312 0a106.688 106.688 0 1 1 0 213.376 106.688 106.688 0 0 1 0-213.376z m-597.312 64a42.688 42.688 0 1 0 0 85.376 42.688 42.688 0 0 0 0-85.376z m597.312 0a42.688 42.688 0 1 0 0 85.376 42.688 42.688 0 0 0 0-85.376z m-462.464-417.92c6.592 20.8 16.96 39.808 30.4 56.32L243.456 378.24v157.696a171.712 171.712 0 0 0-64 0.704V341.312l169.728-97.92z m325.632 0l169.728 97.92v195.392a171.52 171.52 0 0 0-64-0.704V378.24l-136.192-78.528a170.24 170.24 0 0 0 30.464-56.32z m-161.792-158.08a106.688 106.688 0 1 1 0 213.376 106.688 106.688 0 0 1 0-213.376z m0 64a42.688 42.688 0 1 0 0 85.376 42.688 42.688 0 0 0 0-85.376z",
    fill: getIconColor(color, 0, '#333333')
  }));
};

IconcaidanGongyibianzhi.defaultProps = {
  size: 18
};
export default IconcaidanGongyibianzhi;