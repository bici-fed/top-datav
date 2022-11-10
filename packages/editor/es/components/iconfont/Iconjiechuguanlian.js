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

var Iconjiechuguanlian = function Iconjiechuguanlian(_ref) {
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
    d: "M556.982825 747.081341L464.457177 839.533846a222.500412 222.500412 0 0 1-158.354173 65.609096 222.646698 222.646698 0 0 1-158.354172-65.609096 224.25584 224.25584 0 0 1 0-316.708345l92.452505-92.452506-58.14853-58.221672-92.525648 92.525648a306.614638 306.614638 0 0 0 0 433.078548A304.420354 304.420354 0 0 0 306.103004 987.428598a304.274068 304.274068 0 0 0 216.502703-89.673079l92.525648-92.525648-58.14853-58.14853zM430.080059 240.347988l92.525648-92.452505a222.500412 222.500412 0 0 1 158.354172-65.609096c59.830814 0 116.077631 23.259412 158.354173 65.609096a224.25584 224.25584 0 0 1 0 316.708345l-92.452505 92.452506 58.148529 58.221672 92.452506-92.525648a306.614638 306.614638 0 0 0 0-433.078548A304.274068 304.274068 0 0 0 681.033022 0.000731a304.200926 304.200926 0 0 0-216.502702 89.673079L371.931529 182.199458l58.14853 58.14853z m392.557433 623.688698a40.959971 40.959971 0 0 1-29.110836-12.068563l-658.285244-658.285244a41.106256 41.106256 0 1 1 58.221673-58.221673l658.285244 658.285244a41.106256 41.106256 0 0 1-29.110837 70.217093z",
    fill: getIconColor(color, 0, '#E02020')
  }));
};

Iconjiechuguanlian.defaultProps = {
  size: 18
};
export default Iconjiechuguanlian;