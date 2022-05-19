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

var Iconjihuajianxiu = function Iconjihuajianxiu(_ref) {
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
      d: 'M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z',
      fill: getIconColor(color, 0, '#F7B500'),
    }),
    /*#__PURE__*/ React.createElement('path', {
      d: 'M512 93.090909a418.909091 418.909091 0 1 1 0 837.818182 418.909091 418.909091 0 0 1 0-837.818182z m60.881455 172.404364c-34.071273 62.557091-89.925818 122.321455-147.456 163.653818V372.177455h-44.683637v-100.538182H320.977455v100.538182H255.069091v61.44h60.881454c-12.846545 62.557091-37.981091 136.285091-67.025454 177.058909 9.495273 17.873455 24.017455 48.034909 30.161454 67.584 15.080727-25.134545 29.602909-60.322909 41.89091-99.421091v214.481454H380.741818v-260.282182c10.612364 21.783273 20.107636 43.008 25.693091 56.971637l37.981091-44.125091c-8.378182-15.080727-49.152-75.403636-63.674182-93.835636v-18.432h38.539637l-20.666182 13.40509c12.288 12.846545 31.278545 41.332364 38.539636 54.737455 18.432-13.405091 37.422545-28.485818 55.296-44.683636v40.773818h197.725091v-45.242182c19.549091 15.080727 39.098182 28.485818 58.088727 40.215273 6.144-18.432 20.107636-47.476364 30.72-64.232728-55.854545-26.810182-120.645818-76.520727-160.302545-122.321454 3.909818-6.144 7.819636-12.288 11.170909-18.990546l-56.971636-21.783272z m119.528727 261.399272c-16.756364 56.413091-47.476364 134.609455-74.845091 185.995637H426.542545v58.088727h330.65891v-58.088727h-84.89891c26.251636-49.152 54.737455-115.618909 77.637819-173.149091l-57.530182-12.846546z m-189.346909 10.612364l-50.827637 13.405091c12.846545 41.890909 25.693091 97.186909 29.602909 134.050909l54.737455-15.639273c-5.585455-35.746909-19.549091-89.925818-33.512727-131.816727z m106.123636-10.053818l-50.827636 6.702545c8.936727 42.449455 18.432 96.628364 20.666182 132.375273l54.178909-8.378182a1092.887273 1092.887273 0 0 0-24.017455-130.699636z m-24.017454-171.473455c26.251636 29.044364 58.647273 59.205818 91.601454 86.016h-168.122182a751.057455 751.057455 0 0 0 76.520728-86.016z',
      fill: getIconColor(color, 1, '#FFFFFF'),
    }),
  );
};

Iconjihuajianxiu.defaultProps = {
  size: 18,
};
export default Iconjihuajianxiu;
