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

var Iconchakangongyiyaoqiu = function Iconchakangongyiyaoqiu(_ref) {
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
      d: 'M688.0256 312.0128v-48.0256A8.0384 8.0384 0 0 0 679.936 256h-384a8.0384 8.0384 0 0 0-7.9872 7.9872v48.0256c0 4.4032 3.584 7.9872 7.9872 7.9872h384c4.4032 0 7.9872-3.584 7.9872-7.9872zM295.936 399.9744a8.0384 8.0384 0 0 0-7.9872 8.0384v47.9744c0 4.4032 3.584 7.9872 7.9872 7.9872h184.0128c4.4032 0 7.9872-3.584 7.9872-7.9872V408.064a8.0384 8.0384 0 0 0-7.9872-8.0384H295.9872z m144.0256 452.0448H208.0256V147.968H768v343.9616c0 4.4032 3.584 8.0384 7.9872 8.0384h56.0128c4.4032 0 7.9872-3.584 7.9872-8.0384v-384a31.9488 31.9488 0 0 0-32-32h-640a31.9488 31.9488 0 0 0-32 32v784.0256c0 17.7152 14.336 32 32 32h272.0256c4.4032 0 7.9872-3.584 7.9872-7.9872v-56.0128a8.0384 8.0384 0 0 0-7.9872-7.9872z m445.696 51.456l-93.2864-93.2864a176.0256 176.0256 0 1 0-43.6224 40.8064l94.72 94.72c1.536 1.5872 3.584 2.304 5.5808 2.304 1.9968 0 4.096-0.8192 5.632-2.304l30.976-31.0272a7.8848 7.8848 0 0 0 0-11.2128z m-233.728-87.5008a111.9232 111.9232 0 0 1-111.9744-111.9744 111.9232 111.9232 0 1 1 224 0 111.9232 111.9232 0 0 1-112.0256 112.0256z',
      fill: (0, _helper.getIconColor)(color, 0, '#333333'),
    }),
  );
};

Iconchakangongyiyaoqiu.defaultProps = {
  size: 18,
};
var _default = Iconchakangongyiyaoqiu;
exports['default'] = _default;
