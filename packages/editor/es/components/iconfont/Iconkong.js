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

var Iconkong = function Iconkong(_ref) {
  var size = _ref.size,
      color = _ref.color,
      _style = _ref.style,
      rest = _objectWithoutProperties(_ref, _excluded);

  var style = _style ? _objectSpread(_objectSpread({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 1166 1024",
    width: size + 'px',
    height: size + 'px',
    style: style
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: "M119.111111 1019.420444l-1.322667-0.042666c-7.708444-0.241778-47.715556-2.816-74.368-27.804445C16.085333 965.944889 12.828444 929.095111 12.458667 921.955556a36.039111 36.039111 0 0 1-0.056889-2.005334V719.217778a209.294222 209.294222 0 0 1 8.419555-67.228445c8.96-29.738667 20.053333-49.265778 23.224889-54.542222l100.764445-178.275555a36.551111 36.551111 0 0 1 1.607111-2.588445c3.143111-4.664889 20.039111-28.657778 43.192889-43.064889 24.376889-15.175111 53.873778-16.355556 62.336-16.355555H888.462222c0.824889 0 1.635556 0.028444 2.474667 0.071111 6.328889 0.412444 39.182222 3.185778 64.611555 17.735111 24.277333 13.895111 43.818667 38.200889 47.502223 42.922667 0.725333 0.967111 1.422222 1.962667 2.076444 2.986666L1124.835556 610.56c0.497778 0.853333 1.024 1.706667 1.493333 2.602667 2.289778 4.408889 14.122667 27.676444 20.110222 50.318222 5.916444 22.385778 7.338667 47.132444 7.566222 51.854222l0.028445 1.621333v200.746667c0.142222 10.609778-1.820444 47.047111-32.042667 74.097778-28.615111 25.628444-67.128889 27.605333-78.264889 27.605333H119.125333v0.028445z m-10.24-381.269333c-2.204444 3.911111-9.059556 16.867556-14.819555 35.939556a133.248 133.248 0 0 0-5.162667 43.847111v200.675555l0.071111 0.568889c0.483556 3.598222 2.688 12.344889 6.471111 16.284445l0.512 0.554666 0.611556 0.426667c5.304889 3.925333 18.488889 6.172444 23.082666 6.456889H1043.768889c7.665778-0.085333 21.063111-2.631111 27.136-8.078222 5.432889-4.864 6.656-13.226667 6.656-14.563556l-0.071111-2.318222v-199.822222c-0.426667-7.808-1.934222-23.338667-5.063111-35.114667-3.541333-13.44-11.463111-29.553778-13.013334-32.64l-0.426666-0.739556-117.447111-186.126222-0.369778-0.455111c-4.451556-5.361778-15.118222-16.810667-23.651556-21.703111-7.381333-4.224-22.414222-6.926222-30.151111-7.651556l-0.810667-0.028444H252.074667c-5.930667 0.042667-16.967111 1.621333-22.072889 4.807111-7.168 4.48-15.672889 14.691556-19.171556 19.470222l-0.298666 0.412445-100.124445 177.152-1.095111 1.820444 0.014222-0.042666c-0.028444 0.085333-0.469333 0.853333-0.469333 0.853333z m470.684445-337.066667a38.286222 38.286222 0 0 1-38.257778-38.243555V42.823111A38.286222 38.286222 0 0 1 579.555556 4.593778a38.300444 38.300444 0 0 1 38.257777 38.257778v220.017777a38.286222 38.286222 0 0 1-38.243555 38.229334z m256.426666-1.450666a38.300444 38.300444 0 0 1-38.257778-38.257778c0.014222-8.760889 3.029333-17.265778 8.561778-24.078222l87.424-107.832889a38.115556 38.115556 0 0 1 29.738667-14.151111c8.846222 0 17.166222 2.944 24.035555 8.533333 7.921778 6.357333 12.942222 15.644444 13.966223 25.742222 1.095111 10.083556-1.905778 20.195556-8.32 28.060445l-87.424 107.818666a37.973333 37.973333 0 0 1-29.667556 14.165334h-0.056889z m-508.544-2.915556a37.973333 37.973333 0 0 1-29.880889-14.407111l-85.944889-107.804444a38.286222 38.286222 0 0 1 29.866667-62.108445c11.733333 0 22.641778 5.262222 29.937778 14.407111l85.959111 107.818667a38.286222 38.286222 0 0 1-29.880889 62.094222h-0.056889z",
    fill: getIconColor(color, 0, '#E0E7F5')
  }), /*#__PURE__*/React.createElement("path", {
    d: "M581.020444 862.065778c-85.219556 0-159.246222-57.130667-180.024888-138.908445l-1.678223-6.584889-339.655111-0.213333a38.328889 38.328889 0 0 1-38.243555-38.257778 38.286222 38.286222 0 0 1 38.257777-38.243555l374.001778 0.241778a38.314667 38.314667 0 0 1 38.229334 38.257777c0 60.117333 47.928889 107.207111 109.112888 107.207111 60.956444 0 108.714667-47.075556 108.714667-107.207111a38.343111 38.343111 0 0 1 38.257778-38.257777l370.545778-0.227556a38.286222 38.286222 0 0 1 38.257777 38.215111 38.314667 38.314667 0 0 1-38.215111 38.286222l-336.213333 0.199111-1.678222 6.599112c-20.764444 81.777778-94.634667 138.894222-179.669334 138.894222z",
    fill: getIconColor(color, 1, '#E0E7F5')
  }));
};

Iconkong.defaultProps = {
  size: 18
};
export default Iconkong;