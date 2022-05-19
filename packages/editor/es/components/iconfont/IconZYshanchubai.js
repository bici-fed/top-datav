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

var IconZYshanchubai = function IconZYshanchubai(_ref) {
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
      d: 'M805.083429 1001.691429H219.428571c-49.225143 0-93.110857-42.934857-97.060571-96.109715V172.690286H902.582857l0.512 731.428571v1.462857c-4.388571 53.174857-48.274286 96.109714-98.011428 96.109715z m-610.011429-100.498286c1.901714 15.140571 14.628571 27.355429 24.356571 27.355428h586.093715c9.801143 0 22.454857-12.214857 24.429714-27.355428l-1.024-655.36H195.072v655.36zM60.928 172.690286h902.144c19.968 0 36.571429 16.603429 36.571429 36.571428 0 20.041143-16.603429 36.571429-36.571429 36.571429H60.928a36.864 36.864 0 0 1-36.571429-36.571429c0-19.968 16.603429-36.571429 36.571429-36.571428z m292.571429-146.285715h317.001142c19.968 0 36.571429 16.603429 36.571429 36.571429 0 20.041143-16.603429 36.571429-36.571429 36.571429H353.499429a36.864 36.864 0 0 1-36.571429-36.571429c0-19.968 16.603429-36.571429 36.571429-36.571429z m109.714285 475.428572v170.715428c0 19.968-16.530286 36.571429-36.571428 36.571429a36.864 36.864 0 0 1-36.571429-36.571429V501.76c0-19.968 16.603429-36.571429 36.571429-36.571429 20.041143 0 36.571429 16.603429 36.571428 36.571429z m170.715429 0v170.715428c0 19.968-16.603429 36.571429-36.571429 36.571429a36.864 36.864 0 0 1-36.571428-36.571429V501.76c0-19.968 16.530286-36.571429 36.571428-36.571429 19.968 0 36.571429 16.603429 36.571429 36.571429z',
      fill: getIconColor(color, 0, '#FFFFFF'),
    }),
  );
};

IconZYshanchubai.defaultProps = {
  size: 18,
};
export default IconZYshanchubai;
