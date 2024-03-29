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

var IconcaidanGongyizhiliang = function IconcaidanGongyizhiliang(_ref) {
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
    d: "M512 42.688l384 170.624V512c0 165.376-104.064 291.2-204.416 370.752l-11.328 8.768a734.08 734.08 0 0 1-16.896 12.48l-11.136 7.808-10.88 7.424-10.88 7.04-10.496 6.528-10.24 6.208-10.048 5.76-9.664 5.376-4.736 2.56-9.088 4.672-8.704 4.288-8.32 3.904-7.68 3.456-7.296 3.072-6.72 2.56a222.592 222.592 0 0 1-3.2 1.216l-5.76 1.92-5.12 1.536a46.912 46.912 0 0 1-11.392 1.984 46.976 46.976 0 0 1-11.328-1.92l-5.184-1.6-5.76-1.92-6.464-2.432-7.04-2.816-7.488-3.2-8-3.712-8.512-4.096a521.6 521.6 0 0 1-4.416-2.24l-9.088-4.736a592.256 592.256 0 0 1-4.736-2.56l-9.6-5.312-10.048-5.76a677.696 677.696 0 0 1-5.12-3.072l-10.432-6.4-10.688-6.784-10.88-7.168-5.44-3.776-11.136-7.808c-1.92-1.28-3.712-2.688-5.632-4.032l-11.264-8.448-5.632-4.352-11.392-8.96-5.696-4.672-11.328-9.6c-90.88-78.336-178.048-194.176-181.568-342.592L128 512V213.312L512 42.688zM512 112.64L192 254.912V512c0 109.056 54.272 208.256 147.072 292.48l7.232 6.528a654.272 654.272 0 0 0 129.792 88.96l11.008 5.376c7.04 3.392 13.568 6.208 19.392 8.448L512 915.84l5.504-2.048c11.584-4.48 26.112-11.328 41.984-19.904 39.232-21.312 80.64-49.856 118.208-82.944 94.72-83.456 151.424-182.016 154.24-290.56L832 512V254.912L512 112.704zM512 256a192 192 0 0 1 192 192v64c0 41.472-13.12 79.872-35.52 111.232l51.392 51.328-45.312 45.312-51.328-51.392A192 192 0 0 1 320 512V448a192 192 0 0 1 192-192z m0 64a128 128 0 0 0-127.936 123.2L384 448v64a128 128 0 0 0 193.024 110.272l-53.312-53.248 45.312-45.312 53.248 53.312a127.36 127.36 0 0 0 17.664-60.224L640 512V448a128 128 0 0 0-128-128z",
    fill: getIconColor(color, 0, '#333333')
  }));
};

IconcaidanGongyizhiliang.defaultProps = {
  size: 18
};
export default IconcaidanGongyizhiliang;