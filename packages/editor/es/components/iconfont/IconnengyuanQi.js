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

var IconnengyuanQi = function IconnengyuanQi(_ref) {
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
      d: 'M386.112 17.792a9.024 9.024 0 0 1 13.504-8.224l46.464 27.36c63.68 37.568 114.624 91.456 151.296 160.512 44.352 83.136 64.576 159.52 60.416 227.264a6.624 6.624 0 0 0 2.24 5.408c1.696 1.568 3.616 1.792 4.864 1.664a7.04 7.04 0 0 0 4.608-2.24c23.744-26.432 40.48-53.312 49.6-79.648l14.624-41.952a9.088 9.088 0 0 1 14.624-3.712l32.736 30.016a390.912 390.912 0 0 1 126.912 288.128 389.44 389.44 0 0 1-116.096 277.76 392.192 392.192 0 0 1-125.888 84.032c-20.352 8.48-41.184 15.232-62.464 20.224l0.48-7.232c3.936-79.648-42.56-171.2-139.456-274.688 14.88 97.216-7.264 217.28-82.016 266.784l2.144 4.928a395.264 395.264 0 0 1-237.568-218.912 387.232 387.232 0 0 1-31.136-153.024c0-60.064 14.08-120 40.736-173.568a396.672 396.672 0 0 1 112.832-136.704 332.608 332.608 0 0 0 53.44-51.84 320.8 320.8 0 0 0 52.864-91.712c10.112-27.104 14.4-59.744 12.704-96.64z',
      fill: getIconColor(color, 0, '#F74B35'),
    }),
  );
};

IconnengyuanQi.defaultProps = {
  size: 18,
};
export default IconnengyuanQi;
