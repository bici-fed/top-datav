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

var Icontianjiafenlei = function Icontianjiafenlei(_ref) {
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
      d: 'M449.3312 543.880533l189.508267 189.986134h132.5056l0.068266-114.688a40.482133 40.482133 0 0 1 19.524267-35.293867l5.461333-2.730667a40.413867 40.413867 0 0 1 44.6464 9.352534l157.696 157.218133a40.96 40.96 0 0 1 0 57.821867l-157.696 157.149866a40.96 40.96 0 0 1-69.632-28.672l-0.068266-97.757866H617.813333a51.2 51.2 0 0 1-36.386133-14.813867l-204.8-204.8a51.4048 51.4048 0 1 1 72.704-72.772267zM105.813333 477.866667c-31.266133 0-48.264533-14.336-50.858666-43.008L54.613333 426.666667c0-34.133333 17.066667-51.2 51.2-51.2h285.627734l190.0544-189.986134A51.2 51.2 0 0 1 617.813333 170.666667h153.531734L771.413333 55.978667a40.482133 40.482133 0 0 1 19.524267-35.293867l5.461333-2.730667A40.482133 40.482133 0 0 1 841.045333 27.306667l157.696 157.149866a40.96 40.96 0 0 1 0 57.890134l-157.696 157.218133a40.96 40.96 0 0 1-69.632-28.672L771.345067 273.066667H638.839467L459.434667 452.949333c-6.280533 14.609067-19.114667 22.801067-38.2976 24.576L413.013333 477.866667h-307.2z',
      fill: getIconColor(color, 0, '#096DD9'),
    }),
  );
};

Icontianjiafenlei.defaultProps = {
  size: 18,
};
export default Icontianjiafenlei;
