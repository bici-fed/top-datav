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

var IconcaidanShebeiku = function IconcaidanShebeiku(_ref) {
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
      d: 'M768 341.312l-0.064 128h85.376c23.616 0 42.688 19.136 42.688 42.688v298.688a42.688 42.688 0 0 1-42.688 42.624H170.688A42.688 42.688 0 0 1 128 810.688V512c0-23.552 19.072-42.688 42.688-42.688h533.248l0.064-128h64z m64 192H192v256h640v-256zM320 618.688V704H256V618.688h64z m128 0V704H384V618.688h64z m128 0V704H512V618.688h64z m160-400.192c41.216 0 78.592 16.768 105.6 43.776l-45.248 45.184a85.312 85.312 0 0 0-120.704 0.064l-45.248-45.248a148.864 148.864 0 0 1 105.6-43.776z m0-128l8.064 0.128 7.04 0.32 2.944 0.192 6.4 0.448 6.272 0.64c19.2 2.112 38.272 6.272 56.768 12.416l9.216 3.2 7.04 2.752 6.208 2.56 2.88 1.28c23.36 10.432 45.056 24 64.448 40.192l7.232 6.144 3.52 3.2 3.712 3.52 4.352 4.288-45.248 45.248a212.608 212.608 0 0 0-150.848-62.528c-58.88 0-112.256 23.936-150.848 62.528l-45.248-45.248 6.4-6.208 5.76-5.248 2.24-1.984c18.944-16.448 40.064-30.336 62.976-41.152l8.64-3.968 8.064-3.328 6.4-2.432a277.76 277.76 0 0 1 56.704-14.208l9.664-1.216 7.488-0.64 6.656-0.448 6.272-0.256 8.832-0.192z',
      fill: getIconColor(color, 0, '#333333'),
    }),
  );
};

IconcaidanShebeiku.defaultProps = {
  size: 18,
};
export default IconcaidanShebeiku;
