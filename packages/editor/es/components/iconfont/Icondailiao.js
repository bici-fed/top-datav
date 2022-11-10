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

var Icondailiao = function Icondailiao(_ref) {
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
    fill: getIconColor(color, 0, '#096DD9')
  }), /*#__PURE__*/React.createElement("path", {
    d: "M512 93.090909a418.909091 418.909091 0 1 1 0 837.818182 418.909091 418.909091 0 0 1 0-837.818182z m115.618909 181.341091h-65.908364v60.881455h-114.501818V395.636364h114.501818v48.593454H420.957091c5.585455-8.378182 10.612364-16.756364 15.639273-24.576l-58.088728-25.134545c-31.278545 54.178909-85.457455 108.916364-134.050909 143.546182 9.495273 16.197818 26.251636 53.620364 30.72 68.70109 16.756364-13.405091 33.512727-28.485818 50.827637-45.800727v231.796364h63.674181V487.796364c9.495273-12.288 17.873455-24.017455 26.251637-35.746909v52.503272H637.672727v44.125091H421.515636v60.322909H637.672727v112.826182c0 7.819636-2.792727 9.495273-11.170909 9.495273-8.936727 0.558545-39.656727 0.558545-67.025454-0.558546 8.378182 17.873455 17.873455 44.125091 20.666181 62.557091 41.890909 0 73.169455-1.117091 94.952728-10.612363 22.341818-10.053818 28.485818-26.251636 28.485818-59.764364v-113.943273h65.908364v-60.322909h-65.908364v-44.125091h70.935273V444.229818h-146.897455V395.636364h120.087273V335.313455h-120.087273V274.432z m-120.645818 337.92l-54.178909 28.485818c24.017455 29.602909 51.386182 70.935273 61.44 97.745455l58.088727-31.278546c-11.729455-27.368727-40.215273-66.466909-65.349818-94.952727zM364.544 272.756364C341.643636 309.620364 293.608727 355.421091 249.483636 381.672727c10.612364 14.522182 26.251636 41.332364 32.954182 56.413091 51.944727-33.512727 108.357818-88.250182 145.221818-139.636363L364.544 272.756364z",
    fill: getIconColor(color, 1, '#FFFFFF')
  }));
};

Icondailiao.defaultProps = {
  size: 18
};
export default Icondailiao;