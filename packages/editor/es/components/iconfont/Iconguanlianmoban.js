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

var Iconguanlianmoban = function Iconguanlianmoban(_ref) {
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
      d: 'M577.53292 774.758364l-95.845889 95.914155a230.740103 230.740103 0 0 1-164.248724 67.993237 230.876635 230.876635 0 0 1-164.248724-67.993237 232.515027 232.515027 0 0 1 0-328.497448L249.172004 446.260916l-60.347411-60.347412L92.842172 481.82766a317.984437 317.984437 0 0 0 0 449.192271A315.663383 315.663383 0 0 0 317.438307 1023.998635c84.855014 0 164.521789-33.04089 224.596135-92.978704l95.914156-95.914156-60.347412-60.347411zM446.188554 249.1761L542.034442 153.398478a230.740103 230.740103 0 0 1 164.180458-68.061504 230.740103 230.740103 0 0 1 164.248724 67.993238 232.583293 232.583293 0 0 1 0 328.497448l-95.845889 95.914155 60.279146 60.279145 95.914155-95.845889a317.984437 317.984437 0 0 0 0-449.192271A315.526851 315.526851 0 0 0 706.2149 0.004096a315.390318 315.390318 0 0 0-224.596135 93.04697L385.841142 188.896955l60.347412 60.347412z m295.866155 65.74045a42.529907 42.529907 0 0 1-12.561 30.105439l-393.009104 393.07737a42.666439 42.666439 0 1 1-60.347411-60.347411l393.07737-393.009104a42.666439 42.666439 0 0 1 72.840145 30.173706z',
      fill: getIconColor(color, 0, '#096DD9'),
    }),
  );
};

Iconguanlianmoban.defaultProps = {
  size: 18,
};
export default Iconguanlianmoban;
