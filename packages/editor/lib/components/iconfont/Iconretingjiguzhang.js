'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _react = _interopRequireDefault(require('react'));

var _helper = require('./helper');

var _excluded = ['size', 'color', 'style'];

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

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

var DEFAULT_STYLE = {
  display: 'block',
};

var Iconretingjiguzhang = function Iconretingjiguzhang(_ref) {
  var size = _ref.size,
    color = _ref.color,
    _style = _ref.style,
    rest = _objectWithoutProperties(_ref, _excluded);

  var style = _style ? _objectSpread(_objectSpread({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
  return /*#__PURE__*/ _react['default'].createElement(
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
    /*#__PURE__*/ _react['default'].createElement('path', {
      d: 'M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z',
      fill: (0, _helper.getIconColor)(color, 0, '#E02020'),
    }),
    /*#__PURE__*/ _react['default'].createElement('path', {
      d: 'M512 93.090909a418.909091 418.909091 0 1 1 0 837.818182 418.909091 418.909091 0 0 1 0-837.818182z m92.718545 174.08l-61.44 16.756364c5.026909 8.936727 10.053818 19.549091 14.522182 30.161454H417.605818l7.819637-21.224727-60.32291-18.990545C338.850909 352.628364 293.608727 431.941818 246.132364 482.769455c11.170909 15.639273 28.485818 52.503273 34.071272 68.70109 10.053818-11.729455 20.666182-24.576 30.72-38.539636v279.831273h60.322909v-377.018182c16.756364-31.837091 31.837091-65.908364 45.242182-98.862545v51.944727h349.090909V314.088727h-137.402181a408.389818 408.389818 0 0 0-23.45891-46.917818z m165.888 263.633455H403.642182v101.096727h56.971636V582.749091h250.228364v29.044364H461.172364v51.944727h95.511272v61.998545c0 6.702545-2.792727 8.378182-11.170909 8.378182h-11.636363c-13.963636-0.093091-36.305455-0.325818-55.389091-1.117091 7.819636 17.314909 16.197818 40.215273 19.549091 58.088727 41.332364 0 73.169455 0 96.069818-8.378181 23.458909-8.936727 29.602909-24.576 29.602909-54.737455v-64.232727h87.691636v-31.837091h59.205818v-101.096727z m-43.008-140.753455H450.56v118.411636h277.038545V390.050909z m-63.674181 44.125091v30.161455h-153.6v-30.161455h153.6z',
      fill: (0, _helper.getIconColor)(color, 1, '#FFFFFF'),
    }),
  );
};

Iconretingjiguzhang.defaultProps = {
  size: 18,
};
var _default = Iconretingjiguzhang;
exports['default'] = _default;
