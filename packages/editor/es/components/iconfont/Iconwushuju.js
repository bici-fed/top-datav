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

var Iconwushuju = function Iconwushuju(_ref) {
  var size = _ref.size,
      color = _ref.color,
      _style = _ref.style,
      rest = _objectWithoutProperties(_ref, _excluded);

  var style = _style ? _objectSpread(_objectSpread({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 1144 1024",
    width: size + 'px',
    height: size + 'px',
    style: style
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: "M107.452235 1020.272941l-1.332706-0.030117c-7.710118-0.248471-47.789176-2.823529-74.48847-27.851295-27.376941-25.675294-30.644706-62.592-31.021177-69.737411a36.096 36.096 0 0 1-0.052706-2.017883V719.585882c-0.399059-8.282353-0.933647-36.261647 8.440471-67.335529 8.982588-29.793882 20.080941-49.355294 23.258353-54.633412L133.195294 419.034353c0.504471-0.896 1.039059-1.761882 1.611294-2.605177 3.147294-4.668235 20.065882-28.702118 43.264-43.143529 24.410353-15.194353 53.955765-16.368941 62.433883-16.368941h637.605647c0.820706 0 1.633882 0.022588 2.469647 0.075294 6.339765 0.406588 39.250824 3.184941 64.722823 17.754353 24.32 13.929412 43.896471 38.272 47.570824 43.000471 0.752941 0.971294 1.445647 1.972706 2.100706 3.011764l119.883294 189.95953c0.512 0.835765 1.031529 1.709176 1.498353 2.605176 2.296471 4.412235 14.147765 27.723294 20.148706 50.394353 5.925647 22.430118 7.356235 47.216941 7.574588 51.952941l0.037647 1.618824v201.088c0.128 10.631529-1.829647 47.119059-32.097882 74.24-28.664471 25.652706-67.252706 27.632941-78.396236 27.632941H107.444706v0.022588z m-10.270117-381.914353c-2.206118 3.915294-9.065412 16.896-14.832942 36.013177-6.098824 20.208941-5.368471 39.100235-5.270588 41.185882 0.052706 0.911059 0.082824 1.822118 0.097883 2.725647v201.035294l0.075294 0.549647c0.474353 3.614118 2.680471 12.370824 6.482823 16.323765l0.512 0.542118 0.602353 0.444235c5.323294 3.922824 18.522353 6.174118 23.122824 6.452706l925.711059 0.015059c7.68-0.090353 21.104941-2.650353 27.188705-8.101647 5.443765-4.879059 6.663529-13.251765 6.66353-14.592l-0.075294-2.326589V718.464c-0.414118-7.808-1.927529-23.371294-5.059765-35.162353-3.546353-13.470118-11.482353-29.605647-13.040941-32.692706l-0.429177-0.752941-117.647058-186.443294-0.368942-0.444235c-4.457412-5.368471-15.149176-16.843294-23.687529-21.737412-7.393882-4.231529-22.452706-6.942118-30.208-7.664941l-0.805647-0.037647H240.64c-5.948235 0.052706-17.001412 1.626353-22.106353 4.818823-7.190588 4.48-15.706353 14.72-19.207529 19.501177l-0.301177 0.414117-100.306823 177.453177-1.084236 1.822117 0.015059-0.045176a19.320471 19.320471 0 0 1-0.466823 0.865882z m471.491764-337.626353a38.354824 38.354824 0 0 1-38.317176-38.309647V42.036706A38.354824 38.354824 0 0 1 568.658824 3.727059a38.362353 38.362353 0 0 1 38.324705 38.309647v220.385882a38.354824 38.354824 0 0 1-38.309647 38.309647z m256.858353-1.453176a38.362353 38.362353 0 0 1-38.309647-38.317177 38.4 38.4 0 0 1 8.560941-24.131764l87.574589-108.009412a38.189176 38.189176 0 0 1 29.793882-14.185412c8.854588 0 17.189647 2.959059 24.086588 8.553412a37.993412 37.993412 0 0 1 13.982118 25.780706 38.016 38.016 0 0 1-8.335059 28.107294l-87.567059 108.009412a38.038588 38.038588 0 0 1-29.726117 14.185411h-0.060236v0.00753z m-509.409882-2.928941a38.046118 38.046118 0 0 1-29.929412-14.426353L200.101647 173.921882a38.354824 38.354824 0 0 1 6.076235-53.842823 37.903059 37.903059 0 0 1 23.853177-8.357647c11.745882 0 22.663529 5.263059 29.982117 14.433882L346.112 234.164706a38.347294 38.347294 0 0 1-6.061176 53.835294 38.452706 38.452706 0 0 1-23.868236 8.357647h-0.060235z",
    fill: getIconColor(color, 0, '#E0E7F5')
  }), /*#__PURE__*/React.createElement("path", {
    d: "M570.134588 862.652235c-85.353412 0-159.510588-57.223529-180.329412-139.136l-1.671529-6.603294-340.231529-0.203294a38.392471 38.392471 0 0 1-38.309647-38.339765 38.354824 38.354824 0 0 1 38.309647-38.294588l374.64847 0.240941a38.384941 38.384941 0 0 1 38.287059 38.324706c0 60.220235 48.007529 107.384471 109.296941 107.384471 61.071059 0 108.912941-47.164235 108.912941-107.384471a38.407529 38.407529 0 0 1 38.309647-38.324706l371.177412-0.233411a38.347294 38.347294 0 0 1 38.324706 38.279529 38.384941 38.384941 0 0 1-38.279529 38.354823l-336.790589 0.203295-1.679058 6.603294c-20.781176 81.912471-94.787765 139.128471-179.97553 139.12847z",
    fill: getIconColor(color, 1, '#E0E7F5')
  }));
};

Iconwushuju.defaultProps = {
  size: 18
};
export default Iconwushuju;