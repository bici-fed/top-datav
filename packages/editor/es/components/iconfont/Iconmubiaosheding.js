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

var Iconmubiaosheding = function Iconmubiaosheding(_ref) {
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
    d: "M81.088 692.672c26.24 0 42.816 17.92 45.184 41.28l0.32 5.952v141.632H268.8c28.416 0 45.504 21.12 45.504 47.232 0 24.192-14.528 43.968-39.104 46.848l-6.4 0.384H81.088c-26.304 0-42.88-17.92-45.248-41.344l-0.256-5.888v-188.864c0-26.176 17.024-47.232 45.44-47.232z m847.616 0c26.24 0 47.68 17.92 50.816 41.28l0.384 5.952v188.864c0 24.192-19.328 43.968-44.8 46.848l-6.4 0.384h-187.712c-22.784 0-45.504-21.12-45.504-47.232a48.384 48.384 0 0 1 40.256-46.848l5.248-0.384H883.2v-141.632c0-26.176 22.784-47.232 45.504-47.232zM507.712 220.48c153.6 0 284.48 126.912 284.48 283.328 0 156.416-130.88 283.328-284.48 283.328A282.496 282.496 0 0 1 223.36 503.808a282.496 282.496 0 0 1 284.416-283.328zM268.8 31.68c28.416 0 45.504 20.992 45.504 47.168s-17.088 47.232-45.504 47.232H126.592v141.632c0 26.176-17.088 47.232-45.504 47.232-28.48 0-45.504-21.056-45.504-47.232V78.848c0-26.176 17.024-47.232 45.44-47.232H268.8z m659.904 0c28.48 0 51.2 20.992 51.2 47.168v188.864c0 26.176-22.72 47.232-51.2 47.232-22.72 0-45.504-21.056-45.504-47.232V126.08h-142.208c-22.784 0-45.504-21.12-45.504-47.232 0-26.176 22.72-47.232 45.44-47.232h187.776z",
    fill: getIconColor(color, 0, '#096DD9')
  }));
};

Iconmubiaosheding.defaultProps = {
  size: 18
};
export default Iconmubiaosheding;