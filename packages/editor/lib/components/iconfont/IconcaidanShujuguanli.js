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

var IconcaidanShujuguanli = function IconcaidanShujuguanli(_ref) {
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
      d: 'M894.656 699.2a111.04 111.04 0 0 0-129.28 12.8l-52.928-30.72v-151.68a43.968 43.968 0 0 0-22.016-38.08L554.432 413.184V346.112a112 112 0 1 0-72 0v67.072L346.432 491.52a43.968 43.968 0 0 0-22.016 38.08v151.616l-52.992 30.72a111.04 111.04 0 0 0-129.216-12.8 112.192 112.192 0 0 0-40.96 152.896 111.168 111.168 0 0 0 152.192 40.96 112 112 0 0 0 53.568-118.784l48.704-28.288 140.608 80.96a44.288 44.288 0 0 0 44.032 0l140.48-80.896 48.704 28.288a112.192 112.192 0 0 0 53.568 118.848 111.104 111.104 0 0 0 152.256-40.96 112.128 112.128 0 0 0-40.704-152.96zM221.632 837.568a47.616 47.616 0 0 1-65.216-17.536 48 48 0 0 1 17.536-65.536 47.616 47.616 0 0 1 65.152 17.6 48 48 0 0 1-17.472 65.536zM470.336 240a48 48 0 1 1 96 0 48 48 0 0 1-96 0z m169.984 446.208L518.4 756.48l-121.984-70.272V545.792L518.336 475.52l121.984 70.272v140.416z m239.936 133.888a47.68 47.68 0 0 1-65.28 17.6 48.064 48.064 0 0 1-17.472-65.472 47.68 47.68 0 0 1 65.28-17.6 48 48 0 0 1 17.472 65.472z',
      fill: (0, _helper.getIconColor)(color, 0, '#333333'),
    }),
  );
};

IconcaidanShujuguanli.defaultProps = {
  size: 18,
};
var _default = IconcaidanShujuguanli;
exports['default'] = _default;
