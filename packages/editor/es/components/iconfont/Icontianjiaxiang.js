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

var Icontianjiaxiang = function Icontianjiaxiang(_ref) {
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
    d: "M960 512a448 448 0 1 1-896.0512-0.0512A448 448 0 0 1 960 512z m-256 24.0128V487.936a8.0384 8.0384 0 0 0-7.9872-7.9872h-152.0128V327.9872a8.0384 8.0384 0 0 0-5.4784-7.5776l-2.56-0.4096h-47.9744a8.0384 8.0384 0 0 0-7.9872 7.9872v152.0128H327.9872a8.0384 8.0384 0 0 0-7.5776 5.4784l-0.4096 2.56v47.9744c0 4.4032 3.584 7.9872 7.9872 7.9872h152.0128v152.0128c0 3.5328 2.304 6.5024 5.4784 7.5776l2.56 0.4096h47.9744c4.4032 0 7.9872-3.584 7.9872-7.9872v-152.0128h152.0128a8.0384 8.0384 0 0 0 7.5776-5.4784l0.4096-2.56z",
    fill: getIconColor(color, 0, '#333333')
  }));
};

Icontianjiaxiang.defaultProps = {
  size: 18
};
export default Icontianjiaxiang;