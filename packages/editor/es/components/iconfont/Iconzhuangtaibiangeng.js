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

var Iconzhuangtaibiangeng = function Iconzhuangtaibiangeng(_ref) {
  var size = _ref.size,
      color = _ref.color,
      _style = _ref.style,
      rest = _objectWithoutProperties(_ref, _excluded);

  var style = _style ? _objectSpread(_objectSpread({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 1092 1024",
    width: size + 'px',
    height: size + 'px',
    style: style
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: "M921.6 682.666667a170.666667 170.666667 0 1 1 0 341.333333 170.666667 170.666667 0 0 1 0-341.333333zM275.456 0c45.192533 0 67.7888 22.596267 67.7888 67.7888v203.434667c0 45.192533-22.528 67.7888-67.7888 67.7888h-203.434667c-45.192533 0-67.7888-22.596267-67.7888-67.7888V67.7888C4.232533 22.596267 26.8288 0 72.021333 0h203.434667zM18.978133 609.621333l119.876267-119.944533c23.9616-23.893333 47.9232-23.893333 71.953067 0 23.893333 24.029867 23.893333 47.991467 0 71.953067L90.9312 681.506133c-23.9616 23.893333-47.991467 23.893333-71.953067 0-23.893333-23.9616-23.893333-47.991467 0-71.953066zM258.048 680.96L138.24 561.152c-24.029867-23.893333-24.029867-47.9232 0-71.8848 23.893333-23.9616 47.9232-23.9616 71.8848 0l119.876267 119.876267c23.893333 23.893333 23.893333 47.9232 0 71.8848-23.9616 23.9616-47.991467 23.9616-71.953067 0zM173.738667 474.589867c33.928533 0 50.858667 16.9984 50.858666 50.858666v389.870934c0 33.928533-16.930133 50.858667-50.858666 50.858666s-50.858667-16.930133-50.858667-50.858666v-389.802667c0-33.928533 16.930133-50.926933 50.858667-50.926933z m440.7296 440.7296c0 33.928533-16.930133 50.858667-50.858667 50.858666h-389.802667c-33.9968 0-50.926933-16.930133-50.926933-50.858666 0-33.860267 16.930133-50.858667 50.858667-50.858667h389.870933c33.928533 0 50.858667 16.9984 50.858667 50.858667z m459.639466-440.1152l-119.876266 119.876266c-23.9616 23.893333-47.9232 23.893333-71.8848 0-24.029867-23.9616-24.029867-47.991467 0-71.953066l119.808-119.876267c24.029867-23.893333 47.991467-23.893333 71.953066 0 23.9616 24.029867 23.9616 47.991467 0 71.953067zM834.901333 403.6608l119.876267 119.876267c23.9616 23.9616 23.9616 47.9232 0 71.953066-23.9616 23.893333-47.9232 23.893333-71.8848 0l-119.876267-119.876266c-23.9616-23.9616-23.9616-47.991467 0-71.953067 23.9616-23.893333 47.9232-23.893333 71.8848 0z m84.650667 206.574933c-33.860267 0-50.7904-16.930133-50.7904-50.858666V169.506133c0-33.928533 16.930133-50.858667 50.7904-50.858666 33.928533 0 50.858667 16.930133 50.858667 50.858666v389.870934c0 33.928533-16.930133 50.858667-50.858667 50.858666zM478.890667 170.1888c0-33.928533 16.930133-50.858667 50.7904-50.858667h389.870933c33.928533 0 50.858667 16.930133 50.858667 50.858667s-16.930133 50.858667-50.858667 50.858667H529.749333c-33.928533 0-50.858667-16.930133-50.858666-50.858667z",
    fill: getIconColor(color, 0, '#333333')
  }));
};

Iconzhuangtaibiangeng.defaultProps = {
  size: 18
};
export default Iconzhuangtaibiangeng;