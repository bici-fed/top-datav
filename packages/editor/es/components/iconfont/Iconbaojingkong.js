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

var Iconbaojingkong = function Iconbaojingkong(_ref) {
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
    d: "M972.032 890.752v65.024c0 8.256-6.72 14.976-15.04 14.976H52.032v-65.024c0-8.32 6.656-14.976 14.976-14.976h904.96zM846.912 140.736v695.04c0 8.256-6.72 14.976-14.976 14.976H177.024v-441.6A274.816 274.816 0 0 1 305.408 183.04c32.448-22.144 70.336-35.584 113.536-40.384a277.76 277.76 0 0 1 35.328-1.92h392.768z m-64 64H453.696a216.768 216.768 0 0 0-27.776 1.6 184.832 184.832 0 0 0-86.4 30.848A210.816 210.816 0 0 0 241.792 397.44l-0.832 13.824v375.488h542.016V204.736z m-605.952 2.24V272c0 8.32-6.72 14.976-15.04 14.976H67.008V222.08c0-8.32 6.72-15.04 14.976-15.04h95.04zM176.64 60.16l67.2 67.2-46.016 45.952a14.976 14.976 0 0 1-21.184 0l-67.2-67.2 45.952-45.952a14.976 14.976 0 0 1 21.248 0zM335.744 19.52c8.32 0 14.976 6.72 14.976 14.976v94.976H285.76a14.976 14.976 0 0 1-15.04-14.976V19.52h65.024z",
    fill: getIconColor(color, 0, '#FA6400')
  }));
};

Iconbaojingkong.defaultProps = {
  size: 18
};
export default Iconbaojingkong;