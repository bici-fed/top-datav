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

var IconcaidanXitongguanli = function IconcaidanXitongguanli(_ref) {
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
    d: "M858.24 556.8a340.416 340.416 0 0 0 0.384-105.152l60.8-34.112a42.368 42.368 0 0 0 16.256-57.536l-80-142.72a42.24 42.24 0 0 0-56.128-16.96l-67.584 34.688a355.84 355.84 0 0 0-93.632-53.248V109.248a42.24 42.24 0 0 0-42.24-42.24h-170.24a42.24 42.24 0 0 0-42.24 42.24v72.96a355.84 355.84 0 0 0-93.056 53.12l-60.8-35.52a42.24 42.24 0 0 0-57.984 15.488L88.896 360.256a42.24 42.24 0 0 0 15.616 57.6l59.712 34.368a340.032 340.032 0 0 0 0.384 104l-65.152 37.312a42.24 42.24 0 0 0-15.424 58.048l83.712 142.592a42.24 42.24 0 0 0 56.832 15.552l68.16-37.632c27.456 21.44 58.24 38.912 90.88 51.456v75.904c0 23.296 18.944 42.24 42.24 42.24h170.24a42.24 42.24 0 0 0 42.24-42.24v-75.52a356.032 356.032 0 0 0 91.52-51.456l69.824 37.696a42.24 42.24 0 0 0 56.64-16l82.432-142.592a42.24 42.24 0 0 0-15.68-57.856l-64.832-36.992z m-47.488 189.632c-0.064 0.064-0.192 0.256-0.512 0.256l-0.192-0.064-67.968-38.464a31.936 31.936 0 0 0-36.864 3.84 291.2 291.2 0 0 1-107.712 60.672 30.912 30.912 0 0 0-22.144 29.44v77.376a0.512 0.512 0 0 1-0.448 0.448H447.04a0.512 0.512 0 0 1-0.512-0.448v-77.696a30.912 30.912 0 0 0-21.952-29.44 291.2 291.2 0 0 1-107.2-60.608 31.808 31.808 0 0 0-36.928-3.968l-68.544 38.848h-0.192c-0.32 0-0.448-0.128-0.512-0.192l-63.872-108.544a0.512 0.512 0 0 1 0.128-0.64l67.968-38.528a30.656 30.656 0 0 0 14.976-33.472 279.232 279.232 0 0 1-0.512-122.368 30.656 30.656 0 0 0-15.04-33.28l-67.392-38.144a0.512 0.512 0 0 1-0.128-0.64L211.2 262.208s0.192-0.256 0.512-0.256l0.192 0.128 66.56 37.632a32 32 0 0 0 37.12-4.096 291.008 291.008 0 0 1 108.992-62.272 30.912 30.912 0 0 0 21.952-29.44V129.28c0-0.32 0.256-0.512 0.512-0.512h127.872c0.256 0 0.448 0.192 0.448 0.512v74.432c0 13.44 8.96 25.408 22.144 29.44 40.32 12.352 78.208 33.92 109.44 62.272a32 32 0 0 0 37.12 4.032l65.92-37.312 0.256-0.128c0.32 0 0.448 0.192 0.448 0.256l64 108.608V371.2c0 0.192-0.128 0.192-0.256 0.256l-66.432 37.632a30.656 30.656 0 0 0-15.04 33.28 279.232 279.232 0 0 1-0.512 123.328 30.656 30.656 0 0 0 14.976 33.536l67.008 37.952c0.128 0 0.192 0.128 0.256 0.32v0.384l-64 108.544zM511.488 346.624c-87.872 0-159.36 70.08-159.36 156.224 0 86.144 71.488 156.224 159.36 156.224 87.808 0 159.296-70.08 159.296-156.16 0-86.208-71.488-156.288-159.36-156.288z m0 250.752c-53.12 0-96.384-42.368-96.384-94.528 0-52.096 43.2-94.528 96.384-94.528 53.12 0 96.384 42.432 96.384 94.528 0 52.16-43.264 94.528-96.384 94.528z",
    fill: getIconColor(color, 0, '#333333')
  }));
};

IconcaidanXitongguanli.defaultProps = {
  size: 18
};
export default IconcaidanXitongguanli;