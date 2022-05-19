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

var IconcaidanWangluozhuangtai = function IconcaidanWangluozhuangtai(_ref) {
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
      d: 'M512 696.064c47.104 0 89.792 19.072 120.704 49.92L512 866.752l-120.704-120.64A170.112 170.112 0 0 1 512 696.064z m0-170.688c94.272 0 179.584 38.208 241.344 99.968l-45.248 45.312A276.48 276.48 0 0 0 512 589.376a276.224 276.224 0 0 0-196.096 81.28l-45.248-45.312 5.824-5.696A340.16 340.16 0 0 1 512 525.44z m0-170.688c138.048 0 263.36 54.656 355.456 143.552l6.592 6.4-45.312 45.248A446.336 446.336 0 0 0 512 418.688a446.208 446.208 0 0 0-309.888 124.48l-6.912 6.72-45.184-45.248A510.4 510.4 0 0 1 512 354.688z m42.56-169.344c68.992 4.288 137.408 19.008 202.752 44.16l13.056 5.12 5.376 2.24 14.592 6.336 4.352 1.92c58.432 26.624 112.512 61.312 160.704 102.528l10.24 8.96c4.608 4.032 9.088 8.128 13.504 12.288l7.552 7.168 8 7.936-45.248 45.248A616.448 616.448 0 0 0 512 248.064c-166.4 0-322.112 65.92-437.44 181.12L29.312 384l9.984-9.792 8.96-8.512 4.224-3.84a684.032 684.032 0 0 1 169.6-113.408l14.72-6.72 11.584-4.928 8.704-3.52 8.64-3.456a683.52 683.52 0 0 1 224.256-45.44l10.944-0.256L512 184.064c5.888 0 20.096 0.448 42.56 1.28z',
      fill: getIconColor(color, 0, '#333333'),
    }),
  );
};

IconcaidanWangluozhuangtai.defaultProps = {
  size: 18,
};
export default IconcaidanWangluozhuangtai;
