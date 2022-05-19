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

var Iconshuaxin = function Iconshuaxin(_ref) {
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
      d: 'M102.6048 480.802133a386.184533 386.184533 0 0 1 113.186133-264.874666 385.024 385.024 0 0 1 273.749334-113.390934 384.068267 384.068267 0 0 1 273.408 113.4592c11.127467 11.127467 21.572267 22.9376 31.266133 35.293867l-67.720533 52.906667a9.0112 9.0112 0 0 0 3.413333 15.837866l197.632 48.401067a9.0112 9.0112 0 0 0 11.127467-8.669867l0.887466-203.502933a8.942933 8.942933 0 0 0-14.472533-7.099733l-63.488 49.5616A472.405333 472.405333 0 0 0 17.066667 480.324267a9.0112 9.0112 0 0 0 9.0112 9.216h67.515733c4.9152 0 8.874667-3.8912 9.0112-8.738134z m850.466133 8.738134h-67.515733a9.0112 9.0112 0 0 0-9.0112 8.8064 384.955733 384.955733 0 0 1-113.186133 264.874666 385.2288 385.2288 0 0 1-273.681067 113.322667 385.024 385.024 0 0 1-304.878933-148.6848l67.720533-52.906667a9.0112 9.0112 0 0 0-3.413333-15.837866L51.541333 610.7136a9.0112 9.0112 0 0 0-11.127466 8.669867L39.594667 823.022933c0 7.509333 8.669867 11.810133 14.472533 7.099734l63.488-49.629867a472.405333 472.405333 0 0 0 844.526933-281.668267 9.0112 9.0112 0 0 0-9.0112-9.284266z',
      fill: getIconColor(color, 0, '#096DD9'),
    }),
  );
};

Iconshuaxin.defaultProps = {
  size: 18,
};
export default Iconshuaxin;
