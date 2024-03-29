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

var IconshezhiPeizhi = function IconshezhiPeizhi(_ref) {
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
    d: "M924.8256 625.664l-65.536-55.9616a359.6288 359.6288 0 0 0 0-115.6096l65.536-56.0128a32.0512 32.0512 0 0 0 9.2672-35.1744l-0.8704-2.56a443.7504 443.7504 0 0 0-79.7184-137.9328l-1.792-2.0992a32.1024 32.1024 0 0 0-35.1232-9.5232l-81.3056 28.928a352.3584 352.3584 0 0 0-99.6864-57.6l-15.7184-84.992a32.0512 32.0512 0 0 0-25.7536-25.7024l-2.7136-0.512a451.7888 451.7888 0 0 0-159.0272 0l-2.6624 0.512a32.0512 32.0512 0 0 0-25.8048 25.6512L388.096 182.4768a351.8464 351.8464 0 0 0-99.0208 57.4464l-81.92-29.1328a32 32 0 0 0-35.072 9.5232l-1.792 2.048A446.0032 446.0032 0 0 0 90.624 360.3456l-0.9216 2.56a32.1024 32.1024 0 0 0 9.3184 35.2256l66.304 56.6272a351.8464 351.8464 0 0 0 0 114.176l-66.304 56.6272a32.0512 32.0512 0 0 0-9.3184 35.1744l0.9216 2.6112a444.8768 444.8768 0 0 0 79.6672 137.8816l1.792 2.0992c8.6016 10.1376 22.528 13.9264 35.1232 9.5232l81.92-29.0816a349.4912 349.4912 0 0 0 98.9696 57.344l15.8208 85.4528a32.0512 32.0512 0 0 0 25.8048 25.7024l2.6624 0.512a449.3824 449.3824 0 0 0 159.0272 0l2.7136-0.512a32.0512 32.0512 0 0 0 25.7536-25.7024l15.7184-84.992a350.0032 350.0032 0 0 0 99.6864-57.6l81.3056 28.8768a32 32 0 0 0 35.1232-9.5232l1.792-2.048a446.0032 446.0032 0 0 0 79.7184-137.9328l0.8704-2.56a31.8976 31.8976 0 0 0-9.2672-35.0208zM788.2752 465.92a282.9824 282.9824 0 0 1 0 92.16l-6.5536 40.1408 74.7008 63.8976c-11.3152 26.112-25.6 50.688-42.5984 73.5744l-92.8256-32.8704-31.3856 25.7536a279.4496 279.4496 0 0 1-79.36 45.824l-38.0416 14.336-17.92 96.9728a377.4976 377.4976 0 0 1-84.992 0l-17.92-97.2288-37.7856-14.4896a279.7568 279.7568 0 0 1-78.6944-45.6704l-31.3856-25.9072-93.3888 33.1776a377.856 377.856 0 0 1-42.6496-73.5744l75.52-64.512-6.5024-39.9872A287.8976 287.8976 0 0 1 232.8064 512c0-15.3088 1.1776-30.6176 3.6864-45.5168l6.5024-39.936-75.52-64.512c11.3152-26.112 25.6-50.688 42.6496-73.6256l93.3888 33.1776 31.3856-25.9072c23.7056-19.456 50.176-34.8672 78.6944-45.6704l37.888-14.336 17.92-97.1776a377.4976 377.4976 0 0 1 84.992 0l17.92 97.024 38.0928 14.2848c28.672 10.752 55.3984 26.2144 79.3088 45.7728l31.3856 25.8048 92.7744-32.8704c17.0496 22.8864 31.232 47.616 42.6496 73.5744l-74.752 63.8976 6.5024 39.936zM512 325.9904a176.0256 176.0256 0 1 0 0 352 176.0256 176.0256 0 0 0 0-352z m79.2064 255.232a111.616 111.616 0 0 1-79.2064 32.768 111.616 111.616 0 0 1-79.2064-32.768 111.616 111.616 0 0 1-32.768-79.2064c0-29.9008 11.6736-58.0096 32.768-79.2064 21.1968-21.1968 49.3056-32.768 79.2064-32.768s58.0096 11.5712 79.2064 32.768c21.0944 21.1968 32.768 49.3056 32.768 79.2064a111.616 111.616 0 0 1-32.768 79.2064z",
    fill: getIconColor(color, 0, '#333333')
  }));
};

IconshezhiPeizhi.defaultProps = {
  size: 18
};
export default IconshezhiPeizhi;