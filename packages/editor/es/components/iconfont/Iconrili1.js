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

var Iconrili1 = function Iconrili1(_ref) {
  var size = _ref.size,
      color = _ref.color,
      _style = _ref.style,
      rest = _objectWithoutProperties(_ref, _excluded);

  var style = _style ? _objectSpread(_objectSpread({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 1170 1024",
    width: size + 'px',
    height: size + 'px',
    style: style
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: "M819.2 56.905143c14.336 0 26.038857 11.702857 26.038857 26.038857l-0.073143 38.912h202.898286c31.451429 0 57.197714 25.819429 57.197714 57.344v771.145143a57.417143 57.417143 0 0 1-57.197714 57.344H122.148571a57.417143 57.417143 0 0 1-57.197714-57.344V179.2c0-31.451429 25.746286-57.270857 57.197714-57.270857l202.825143-0.073143v-38.912c0-14.336 11.702857-26.038857 26.038857-26.038857 14.336 0 26.038857 11.702857 26.038858 26.038857l-0.073143 38.912h416.109714v-38.912c0-14.336 11.702857-26.038857 26.038857-26.038857z m-494.153143 117.028571L122.148571 174.08a5.193143 5.193143 0 0 0-5.193142 5.193143v771.145143c0 2.925714 2.340571 5.266286 5.193142 5.266285H1048.137143c2.852571 0 5.193143-2.340571 5.193143-5.266285V179.2a5.193143 5.193143 0 0 0-5.193143-5.193143h-202.898286v112.128c0 14.336-11.702857 26.038857-25.965714 26.038857a26.112 26.112 0 0 1-26.038857-26.038857V174.08h-416.182857l0.146285 112.128c0 14.336-11.702857 26.038857-26.038857 26.038857a26.112 26.112 0 0 1-26.038857-26.038857V174.08z m494.153143 384a26.112 26.112 0 0 1 0 52.150857H351.085714a26.112 26.112 0 0 1 0-52.150857h468.114286z",
    fill: getIconColor(color, 0, '#096DD9')
  }));
};

Iconrili1.defaultProps = {
  size: 18
};
export default Iconrili1;