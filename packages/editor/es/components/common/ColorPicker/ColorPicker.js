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

import React, { useState, useEffect } from 'react';
import reactCSS from 'reactcss';
import { Button } from 'antd';
import { SketchPicker } from 'react-color';
import styleScss from './ColorPicker.module.css';

var ColorPicker = function ColorPicker(props) {
  var value = props.value,
    disabled = props.disabled,
    onChange = props.onChange;

  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];

  var _useState3 = useState(value ? value : 'rgba(222, 222, 222 ,1)'),
    _useState4 = _slicedToArray(_useState3, 2),
    color = _useState4[0],
    setColor = _useState4[1];

  var triggerChange = function triggerChange(color) {
    if (onChange) {
      onChange(color);
    }
  };

  useEffect(
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

  var styles = reactCSS({
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
  return /*#__PURE__*/ React.createElement(
    'div',
    null,
    /*#__PURE__*/ React.createElement(
      'div',
      {
        style: styles.swatch,
        onClick: handleClick,
      },
      /*#__PURE__*/ React.createElement('div', {
        style: styles.color,
      }),
    ),
    visible
      ? /*#__PURE__*/ React.createElement(
          'div',
          {
            style: styles.popover,
            className: styleScss.colorPickerContainer,
          },
          /*#__PURE__*/ React.createElement('div', {
            style: styles.cover,
            onClick: handleClose,
          }),
          /*#__PURE__*/ React.createElement(SketchPicker, {
            className: styleScss.myColorPicker,
            color: color,
            onChange: handleChange,
          }),
          /*#__PURE__*/ React.createElement(
            Button,
            {
              onClick: handleClose,
              style: {
                marginRight: 20,
                display: 'none',
              },
            },
            '\u53D6\u6D88',
          ),
          /*#__PURE__*/ React.createElement(
            Button,
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

export default ColorPicker;
