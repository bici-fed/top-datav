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

var Icongerenxinxi = function Icongerenxinxi(_ref) {
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
    d: "M858.496 763.605333a374.016 374.016 0 0 0-80.597333-119.466666 375.637333 375.637333 0 0 0-119.466667-80.64c-0.426667-0.213333-0.853333-0.298667-1.237333-0.512A247.936 247.936 0 0 0 512 114.005333a247.936 247.936 0 0 0-145.194667 449.109334l-1.194666 0.469333a372.394667 372.394667 0 0 0-119.509334 80.64 375.637333 375.637333 0 0 0-80.64 119.466667 371.754667 371.754667 0 0 0-29.44 138.112 8.021333 8.021333 0 0 0 7.978667 8.192h59.989333a7.978667 7.978667 0 0 0 8.021334-7.808 298.112 298.112 0 0 1 87.808-204.288A298.026667 298.026667 0 0 1 512 610.005333c80.213333 0 155.52 31.189333 212.181333 87.893334a298.112 298.112 0 0 1 87.808 204.288 7.936 7.936 0 0 0 8.021334 7.808h59.989333c4.48 0 8.106667-3.712 8.021333-8.192a372.693333 372.693333 0 0 0-29.525333-138.24zM512 534.016a170.88 170.88 0 0 1-121.6-50.432 170.88 170.88 0 0 1-50.389333-121.6c0-45.866667 17.92-89.088 50.389333-121.6A170.88 170.88 0 0 1 512 190.037333c45.909333 0 89.088 17.877333 121.6 50.346667a170.88 170.88 0 0 1 50.389333 121.6c0 45.909333-17.92 89.130667-50.389333 121.6A170.88 170.88 0 0 1 512 534.016z",
    fill: getIconColor(color, 0, '#333333')
  }));
};

Icongerenxinxi.defaultProps = {
  size: 18
};
export default Icongerenxinxi;