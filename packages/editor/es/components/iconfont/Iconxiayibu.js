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

var Iconxiayibu = function Iconxiayibu(_ref) {
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
    d: "M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z",
    fill: getIconColor(color, 0, '#EBF5FF')
  }), /*#__PURE__*/React.createElement("path", {
    d: "M468.401231 280.024615a14.769231 14.769231 0 0 1 0 20.873847l-199.561846 199.522461a10.24 10.24 0 0 0 0 14.493539l199.561846 199.561846a14.769231 14.769231 0 1 1-20.873846 20.873846l-199.561847-199.522462a39.778462 39.778462 0 0 1 0-56.280615l199.522462-199.522462a14.769231 14.769231 0 0 1 20.873846 0z m-5.632 198.104616a29.538462 29.538462 0 1 1 0 59.076923 29.538462 29.538462 0 0 1 0-59.076923z m295.384615 0a29.538462 29.538462 0 1 1 0 59.076923 29.538462 29.538462 0 0 1 0-59.076923z m-196.923077 0a29.538462 29.538462 0 1 1 0 59.076923 29.538462 29.538462 0 0 1 0-59.076923z m98.461539 0a29.538462 29.538462 0 1 1 0 59.076923 29.538462 29.538462 0 0 1 0-59.076923z",
    fill: getIconColor(color, 1, '#096DD9')
  }));
};

Iconxiayibu.defaultProps = {
  size: 18
};
export default Iconxiayibu;