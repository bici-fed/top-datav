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

var Iconfenzhijiedian = function Iconfenzhijiedian(_ref) {
  var size = _ref.size,
    color = _ref.color,
    _style = _ref.style,
    rest = _objectWithoutProperties(_ref, _excluded);

  var style = _style ? _objectSpread(_objectSpread({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
  return /*#__PURE__*/ React.createElement(
    'svg',
    _extends(
      {
        viewBox: '0 0 1100 1024',
        width: size + 'px',
        height: size + 'px',
        style: style,
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement('path', {
      d: 'M451.095782 541.468972l193.876881 194.348409h135.643087V618.485325a41.415937 41.415937 0 0 1 19.254088-35.679005l6.365638-3.300701c15.717623-6.444225 33.871478-2.671996 45.659695 9.666339l161.341401 160.791284a41.887466 41.887466 0 0 1 0 59.255439l-161.341401 160.791284a41.887466 41.887466 0 0 1-71.279421-29.313367v-100.121259h-157.176231a52.418273 52.418273 0 0 1-37.172178-15.167507L376.672837 615.891917a52.654037 52.654037 0 0 1 74.422945-74.422945zM99.571142 473.883192c-31.749599 0-49.117572-14.460213-51.946744-43.302051L47.152869 421.464919c0-34.893123 17.446562-52.339685 52.418273-52.339685h292.269201L586.267341 174.619649A52.418273 52.418273 0 0 1 623.439519 159.530731h157.176231V42.120086a41.415937 41.415937 0 0 1 19.254088-35.679004l6.365638-3.300701c15.717623-6.522814 33.871478-2.671996 45.659695 9.58775l161.341401 160.869872a41.887466 41.887466 0 0 1 0 59.176851L851.895171 393.723315a41.887466 41.887466 0 0 1-71.279421-29.313367V264.288689H644.972663L461.469414 448.420643c-6.365637 14.774566-19.254088 23.104906-38.508177 24.991021L413.923604 473.883192h-314.352462z',
      fill: getIconColor(color, 0, '#515151'),
    }),
  );
};

Iconfenzhijiedian.defaultProps = {
  size: 18,
};
export default Iconfenzhijiedian;
