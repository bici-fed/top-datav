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

var Iconyangqi = function Iconyangqi(_ref) {
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
      d: 'M757.76 571.178667c31.317333 0.341333 56.746667 10.325333 76.245333 29.994666 19.84 19.498667 29.909333 44.245333 30.250667 74.24 0 24.021333-7.338667 45.354667-22.016 64l-117.248 146.986667h139.264V938.666667h-207.786667v-49.237334l142.293334-178.005333c5.504-7.168 9.216-13.824 11.221333-20.010667 1.365333-5.845333 2.005333-11.349333 2.005333-16.512 0-13.653333-4.266667-25.6-12.757333-35.754666-8.832-10.154667-21.333333-15.36-37.461333-15.744-14.336 0-26.282667 4.608-35.754667 13.781333-9.813333 9.130667-15.701333 22.058667-17.493333 38.741333h-52.053334c1.365333-30.336 11.52-55.424 30.549334-75.264a97.450667 97.450667 0 0 1 70.741333-29.482666zM384 85.333333a256 256 0 0 1 256 256v341.333334a256 256 0 1 1-512 0V341.333333a256 256 0 0 1 256-256z m0 64a192 192 0 0 0-191.786667 182.954667L192 341.333333v341.333334a192 192 0 0 0 383.786667 9.045333L576 682.666667V341.333333A192 192 0 0 0 384 149.333333z',
      fill: getIconColor(color, 0, '#333333'),
    }),
  );
};

Iconyangqi.defaultProps = {
  size: 18,
};
export default Iconyangqi;
