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

var Iconshezhi = function Iconshezhi(_ref) {
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
      d: 'M924.8 625.706667l-65.493333-56.021334a359.594667 359.594667 0 0 0 0-115.584l65.493333-56.021333a32 32 0 0 0 9.301333-35.2l-0.896-2.56a443.733333 443.733333 0 0 0-79.701333-137.898667l-1.792-2.133333a32.128 32.128 0 0 0-35.114667-9.472l-81.28 28.885333a352.384 352.384 0 0 0-99.712-57.6l-15.701333-84.992a32.042667 32.042667 0 0 0-25.813333-25.728l-2.688-0.469333a451.754667 451.754667 0 0 0-159.018667 0l-2.688 0.469333a32.042667 32.042667 0 0 0-25.813333 25.728l-15.786667 85.376a351.872 351.872 0 0 0-98.986667 57.429334l-81.92-29.098667a32 32 0 0 0-35.072 9.472l-1.834666 2.133333a446.037333 446.037333 0 0 0-79.701334 137.898667l-0.853333 2.56a32.128 32.128 0 0 0 9.258667 35.2l66.304 56.618667c-3.072 18.773333-4.608 37.973333-4.608 57.088 0 19.2 1.536 38.4 4.608 57.130666L98.986667 625.493333a32 32 0 0 0-9.301334 35.2l0.896 2.602667a444.885333 444.885333 0 0 0 79.701334 137.898667l1.834666 2.133333a32.128 32.128 0 0 0 35.072 9.472l81.92-29.098667a349.44 349.44 0 0 0 98.986667 57.386667l15.786667 85.418667a32.042667 32.042667 0 0 0 25.813333 25.685333l2.688 0.512a449.408 449.408 0 0 0 159.018667 0l2.688-0.512a32.042667 32.042667 0 0 0 25.813333-25.685333l15.701333-84.992a349.994667 349.994667 0 0 0 99.712-57.6l81.28 28.885333a32 32 0 0 0 35.114667-9.514667l1.792-2.090666a446.037333 446.037333 0 0 0 79.701333-137.898667l0.896-2.56a31.914667 31.914667 0 0 0-9.301333-35.029333z m-136.533333-159.786667a283.008 283.008 0 0 1 0 92.16l-6.570667 40.106667 74.666667 63.914666a370.005333 370.005333 0 0 1-42.581334 73.6l-92.8-32.896-31.36 25.813334a279.466667 279.466667 0 0 1-79.36 45.781333l-38.058666 14.293333-17.92 97.024a377.514667 377.514667 0 0 1-84.992 0l-17.92-97.237333-37.76-14.506667a279.765333 279.765333 0 0 1-78.72-45.653333l-31.402667-25.941333-93.397333 33.237333a377.856 377.856 0 0 1-42.581334-73.6l75.52-64.512-6.528-40.021333A287.914667 287.914667 0 0 1 232.789333 512c0-15.317333 1.194667-30.592 3.712-45.482667l6.485334-40.021333-75.52-64.512c11.349333-26.069333 25.6-50.688 42.666666-73.6l93.354667 33.194667 31.402667-25.898667a279.765333 279.765333 0 0 1 78.72-45.653333l37.888-14.336 17.92-97.194667a377.514667 377.514667 0 0 1 84.992 0l17.92 97.024 38.058666 14.293333a280.832 280.832 0 0 1 79.317334 45.781334l31.402666 25.813333 92.8-32.896c16.981333 22.869333 31.189333 47.573333 42.581334 73.6l-74.666667 63.872 6.485333 39.936zM512 325.973333a176 176 0 1 0 0 352 176 176 0 0 0 0-352z m79.189333 255.232A111.616 111.616 0 0 1 512 613.973333c-29.866667 0-58.026667-11.733333-79.189333-32.853333a111.616 111.616 0 0 1-32.810667-79.146667c0-29.909333 11.690667-58.026667 32.810667-79.232A111.189333 111.189333 0 0 1 512 390.016c29.866667 0 58.026667 11.562667 79.189333 32.768 21.12 21.205333 32.810667 49.322667 32.810667 79.232 0 29.866667-11.690667 57.984-32.810667 79.189333z',
      fill: (0, _helper.getIconColor)(color, 0, '#222222'),
      opacity: '.965',
    }),
  );
};

Iconshezhi.defaultProps = {
  size: 18,
};
var _default = Iconshezhi;
exports['default'] = _default;
