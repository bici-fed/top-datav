'use strict';

function _typeof(obj) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              'function' == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          }),
    _typeof(obj)
  );
}

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _react = _interopRequireWildcard(require('react'));

var _reactcss = _interopRequireDefault(require('reactcss'));

var _antd = require('antd');

var _reactColor = require('react-color');

var _ColorPickerModule = _interopRequireDefault(require('./ColorPicker.module.css'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (_typeof(obj) !== 'object' && typeof obj !== 'function')) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj['default'] = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i =
    arr == null
      ? null
      : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) || arr['@@iterator'];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var ColorPicker = function ColorPicker(props) {
  var value = props.value,
    disabled = props.disabled,
    onChange = props.onChange;

  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];

  var _useState3 = (0, _react.useState)(value ? value : 'rgba(222, 222, 222 ,1)'),
    _useState4 = _slicedToArray(_useState3, 2),
    color = _useState4[0],
    setColor = _useState4[1];

  var triggerChange = function triggerChange(color) {
    if (onChange) {
      onChange(color);
    }
  };

  (0, _react.useEffect)(
    function () {
      setColor(value ? value : 'rgba(222, 222, 222 ,1)');
    },
    [value],
  );

  var handleClick = function handleClick() {
    setVisible(!visible);
  };

  var handleClose = function handleClose() {
    setColor(value ? value : 'rgba(222, 222, 222 ,1)');
    setVisible(false);
    handleSetColor();
  };

  var handleChange = function handleChange(color) {
    setColor(
      'rgba('
        .concat(color.rgb.r, ', ')
        .concat(color.rgb.g, ', ')
        .concat(color.rgb.b, ', ')
        .concat(color.rgb.a, ')'),
    );
  };

  var handleSetColor = function handleSetColor() {
    triggerChange(color);
    setVisible(false);
  };

  var styles = (0, _reactcss['default'])({
    default: {
      color: {
        width: '36px',
        height: '14px',
        borderRadius: '2px',
        background: color,
      },
      swatch: {
        padding: '5px',
        background: '#fff',
        borderRadius: '1px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer',
        marginTop: '5px',
      },
      popover: {
        position: 'fixed',
        zIndex: '2',
        right: 300,
        top: 150,
        textAlign: 'center',
      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
    },
  });
  return /*#__PURE__*/ _react['default'].createElement(
    'div',
    null,
    /*#__PURE__*/ _react['default'].createElement(
      'div',
      {
        style: styles.swatch,
        onClick: handleClick,
      },
      /*#__PURE__*/ _react['default'].createElement('div', {
        style: styles.color,
      }),
    ),
    visible
      ? /*#__PURE__*/ _react['default'].createElement(
          'div',
          {
            style: styles.popover,
            className: _ColorPickerModule['default'].colorPickerContainer,
          },
          /*#__PURE__*/ _react['default'].createElement('div', {
            style: styles.cover,
            onClick: handleClose,
          }),
          /*#__PURE__*/ _react['default'].createElement(_reactColor.SketchPicker, {
            className: _ColorPickerModule['default'].myColorPicker,
            color: color,
            onChange: handleChange,
          }),
          /*#__PURE__*/ _react['default'].createElement(
            _antd.Button,
            {
              onClick: handleClose,
              style: {
                marginRight: 20,
                display: 'none',
              },
            },
            '\u53D6\u6D88',
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _antd.Button,
            {
              type: 'primary',
              onClick: handleSetColor,
              disabled: disabled,
              style: {
                display: 'none',
              },
            },
            '\u786E\u5B9A',
          ),
        )
      : null,
  );
};

var _default = ColorPicker;
exports['default'] = _default;
