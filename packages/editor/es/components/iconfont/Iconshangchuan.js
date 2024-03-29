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

var Iconshangchuan = function Iconshangchuan(_ref) {
  var size = _ref.size,
      color = _ref.color,
      _style = _ref.style,
      rest = _objectWithoutProperties(_ref, _excluded);

  var style = _style ? _objectSpread(_objectSpread({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 1097 1024",
    width: size + 'px',
    height: size + 'px',
    style: style
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: "M1020.854857 827.465143H69.778286a69.924571 69.924571 0 0 0-69.778286 69.778286c0 38.4 31.378286 69.778286 69.778286 69.778285h951.222857a69.924571 69.924571 0 0 0 69.778286-69.778285 70.070857 70.070857 0 0 0-69.924572-69.778286zM299.812571 337.700571a60.489143 60.489143 0 0 0 85.723429-5.339428L485.302857 219.428571v379.172572c0 1.755429 0.146286 3.949714 0.365714 5.851428v1.389715c-0.219429 2.194286-0.365714 4.388571-0.365714 6.509714v50.395429a59.904 59.904 0 0 0 119.661714 0v-50.468572c0-2.194286-0.146286-4.242286-0.365714-6.436571l-0.146286-1.024 0.146286-1.024c0.219429-1.901714 0.365714-3.657143 0.365714-5.339429v-378.88l99.766858 112.859429a60.928 60.928 0 0 0 85.723428 5.266285 60.928 60.928 0 0 0 5.339429-85.723428L590.774857 20.114286a58.441143 58.441143 0 0 0-19.602286-14.628572L568.832 4.461714h-0.731429L566.198857 3.584H566.125714L565.394286 3.437714A21.577143 21.577143 0 0 0 563.712 2.925714h-0.146286L562.322286 2.56 561.956571 2.413714 561.225143 2.194286h-0.146286L559.908571 1.901714 557.860571 1.389714a5.266286 5.266286 0 0 1-1.462857-0.365714L555.300571 0.877714h-0.512L553.691429 0.658286c-0.292571 0-0.731429 0-1.170286-0.146286-0.365714 0-0.731429 0-0.877714-0.146286-0.512 0-1.024-0.219429-1.389715-0.219428-0.512 0-1.316571 0-2.194285-0.146286H542.72l-0.512 0.146286h-1.316571c-0.365714 0-0.877714 0.219429-1.609143 0.219428l-1.316572 0.146286h-0.219428l-1.170286 0.365714H535.405714l-1.243428 0.146286-0.512 0.146286L533.211429 1.462857l-1.170286 0.292572c-0.877714 0.365714-1.536 0.365714-2.048 0.512l-0.731429 0.219428-0.512 0.146286c-0.365714 0.146286-0.877714 0.146286-1.170285 0.365714l-0.512 0.146286c-0.219429 0-0.219429 0-0.365715 0.219428l-0.731428 0.292572-0.950857 0.219428-0.877715 0.292572-1.755428 0.512-2.340572 1.024a58.441143 58.441143 0 0 0-19.748571 14.774857L295.204571 251.977143a59.611429 59.611429 0 0 0-15.579428 43.885714c0.804571 16.310857 8.045714 31.085714 20.187428 41.837714z",
    fill: getIconColor(color, 0, '#096DD9')
  }));
};

Iconshangchuan.defaultProps = {
  size: 18
};
export default Iconshangchuan;