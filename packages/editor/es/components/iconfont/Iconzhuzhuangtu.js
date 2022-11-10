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

var Iconzhuzhuangtu = function Iconzhuzhuangtu(_ref) {
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
    d: "M888.0128 792.0128H199.9872V167.936a8.0384 8.0384 0 0 0-7.9872-7.9872H135.9872a8.0384 8.0384 0 0 0-7.9872 7.9872V856.064c0 4.4032 3.584 7.9872 7.9872 7.9872h752.0256c4.4032 0 7.9872-3.584 7.9872-7.9872v-56.0128a8.0384 8.0384 0 0 0-7.9872-7.9872zM288 711.9872h56.0128c4.4032 0 7.9872-3.584 7.9872-7.9872v-144.0256a8.0384 8.0384 0 0 0-7.9872-7.9872H288a8.0384 8.0384 0 0 0-7.9872 7.9872v144.0256c0 4.4032 3.584 7.9872 7.9872 7.9872z m152.0128 0h56.0128c4.352 0 7.9872-3.584 7.9872-7.9872V384a8.0384 8.0384 0 0 0-7.9872-7.9872H440.0128a8.0384 8.0384 0 0 0-7.9872 7.9872v320c0 4.4032 3.584 7.9872 7.9872 7.9872z m152.0128 0h55.9616c4.4032 0 7.9872-3.584 7.9872-7.9872V461.9776a8.0384 8.0384 0 0 0-7.9872-7.9872h-56.0128a8.0384 8.0384 0 0 0-7.9872 7.9872v242.0224c0 4.4032 3.584 7.9872 7.9872 7.9872z m151.9616 0h56.0128c4.4032 0 7.9872-3.584 7.9872-7.9872V303.9744a8.0384 8.0384 0 0 0-7.9872-7.9872h-56.0128a8.0384 8.0384 0 0 0-7.9872 8.0384v399.9744c0 4.4032 3.584 7.9872 7.9872 7.9872z",
    fill: getIconColor(color, 0, '#333333')
  }));
};

Iconzhuzhuangtu.defaultProps = {
  size: 18
};
export default Iconzhuzhuangtu;