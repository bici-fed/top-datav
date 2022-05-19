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

var Iconbianji3 = function Iconbianji3(_ref) {
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
      d: 'M257.6896 752.0256a40.448 40.448 0 0 0 5.9904-0.512l168.2432-29.4912a9.7792 9.7792 0 0 0 5.2736-2.816l423.936-423.936a9.984 9.984 0 0 0 0-14.08l-166.2464-166.2976a9.8816 9.8816 0 0 0-7.0656-2.9184 9.8816 9.8816 0 0 0-7.168 2.9184l-423.8336 423.936a10.1376 10.1376 0 0 0-2.816 5.2736l-29.4912 168.192a33.8944 33.8944 0 0 0 33.1776 39.68zM325.12 577.536L687.8208 215.04l73.2672 73.3184-362.7008 362.5984-88.8832 15.7184 15.616-89.0368z m554.9056 258.4064H144.0256a31.9488 31.9488 0 0 0-32.0512 32v35.9936c0 4.4032 3.584 8.0384 8.0384 8.0384h783.9744c4.4032 0 8.0384-3.584 8.0384-8.0384v-35.9936a31.9488 31.9488 0 0 0-32-32z',
      fill: (0, _helper.getIconColor)(color, 0, '#333333'),
    }),
  );
};

Iconbianji3.defaultProps = {
  size: 18,
};
var _default = Iconbianji3;
exports['default'] = _default;
