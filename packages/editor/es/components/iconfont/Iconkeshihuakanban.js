var _excluded = ['size', 'color', 'style'];

function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

/* eslint-disable */
import React from 'react';
import { getIconColor } from './helper';
var DEFAULT_STYLE = {
  display: 'block',
};

var Iconkeshihuakanban = function Iconkeshihuakanban(_ref) {
  var size = _ref.size,
    color = _ref.color,
    _style = _ref.style,
    rest = _objectWithoutProperties(_ref, _excluded);

  var style = _style ? _objectSpread(_objectSpread({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
  return /*#__PURE__*/ React.createElement(
    'svg',
    _extends(
      {
        viewBox: '0 0 1024 1024',
        width: size + 'px',
        height: size + 'px',
        style: style,
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement('path', {
      d: 'M961.088 936.128L787.2 762.432a436.416 436.416 0 0 0 73.216-117.44c23.04-54.464 34.752-112.384 34.752-172.032 0-59.52-11.712-117.568-34.752-172.032a438.784 438.784 0 0 0-94.72-140.352A440.64 440.64 0 0 0 453.376 31.168 441.92 441.92 0 0 0 60.864 269.568a38.208 38.208 0 1 0 67.84 35.2 364.672 364.672 0 0 1 324.544-197.184 365.824 365.824 0 0 1 365.44 365.376 365.632 365.632 0 0 1-365.312 365.312 364.48 364.48 0 0 1-324.672-197.568 38.208 38.208 0 1 0-67.84 35.2 443.968 443.968 0 0 0 159.744 172.608 440.96 440.96 0 0 0 232.768 66.24 438.848 438.848 0 0 0 279.04-99.2l174.592 174.592a38.336 38.336 0 0 0 54.208 0 38.4 38.4 0 0 0-0.128-54.016zM314.368 384.192l168.512 281.728a33.92 33.92 0 0 0 29.12 16.512c0.896 0 2.048 0 2.944-0.128a34.368 34.368 0 0 0 28.8-21.568l61.76-159.872h34.624a33.92 33.92 0 1 0 0-67.968H582.4a33.92 33.92 0 0 0-31.744 21.76l-45.12 116.736-161.088-269.44a33.92 33.92 0 0 0-57.92-0.64L185.536 460.8H86.848a33.92 33.92 0 1 0 0 67.968h117.376a33.92 33.92 0 0 0 28.672-15.872l81.472-128.64z',
      fill: getIconColor(color, 0, '#096DD9'),
    }),
  );
};

Iconkeshihuakanban.defaultProps = {
  size: 18,
};
export default Iconkeshihuakanban;
