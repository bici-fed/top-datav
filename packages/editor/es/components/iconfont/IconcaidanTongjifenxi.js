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

var IconcaidanTongjifenxi = function IconcaidanTongjifenxi(_ref) {
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
    d: "M874.88 832a21.12 21.12 0 0 1 21.12 21.12v21.76a21.12 21.12 0 0 1-21.12 21.12H149.12a21.12 21.12 0 0 1-21.12-21.12v-21.76a21.12 21.12 0 0 1 21.12-21.12h725.76z m-640-426.688a21.12 21.12 0 0 1 21.12 21.12v320.448a21.12 21.12 0 0 1-21.12 21.12h-21.76a21.12 21.12 0 0 1-21.12-21.12V426.432a21.12 21.12 0 0 1 21.12-21.12h21.76zM426.88 128a21.12 21.12 0 0 1 21.12 21.12v597.76a21.12 21.12 0 0 1-21.12 21.12h-21.76a21.12 21.12 0 0 1-21.12-21.12V149.12A21.12 21.12 0 0 1 405.12 128h21.76z m192 384a21.12 21.12 0 0 1 21.12 21.12v213.76a21.12 21.12 0 0 1-21.12 21.12h-21.76a21.12 21.12 0 0 1-21.12-21.12V533.12A21.12 21.12 0 0 1 597.12 512h21.76z m192-192a21.12 21.12 0 0 1 21.12 21.12v405.76a21.12 21.12 0 0 1-21.12 21.12h-21.76a21.12 21.12 0 0 1-21.12-21.12V341.12a21.12 21.12 0 0 1 21.12-21.12h21.76z",
    fill: getIconColor(color, 0, '#333333')
  }));
};

IconcaidanTongjifenxi.defaultProps = {
  size: 18
};
export default IconcaidanTongjifenxi;