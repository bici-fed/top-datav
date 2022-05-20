'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/es/button/style');

var _button = _interopRequireDefault(require('antd/es/button'));

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

var _react = _interopRequireWildcard(require('react'));

var _reactcss = _interopRequireDefault(require('reactcss'));

var _reactColor = require('react-color');

var _ColorPickerModule = _interopRequireDefault(require('./ColorPicker.module.css'));

var ColorPicker = function ColorPicker(props) {
  var value = props.value,
    disabled = props.disabled,
    onChange = props.onChange;

  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];

  var _useState3 = (0, _react.useState)(value ? value : 'rgba(222, 222, 222 ,1)'),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
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

  var styles = (0, _reactcss.default)({
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
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    null,
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        style: styles.swatch,
        onClick: handleClick,
      },
      /*#__PURE__*/ _react.default.createElement('div', {
        style: styles.color,
      }),
    ),
    visible
      ? /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            style: styles.popover,
            className: _ColorPickerModule.default.colorPickerContainer,
          },
          /*#__PURE__*/ _react.default.createElement('div', {
            style: styles.cover,
            onClick: handleClose,
          }),
          /*#__PURE__*/ _react.default.createElement(_reactColor.SketchPicker, {
            className: _ColorPickerModule.default.myColorPicker,
            color: color,
            onChange: handleChange,
          }),
          /*#__PURE__*/ _react.default.createElement(
            _button.default,
            {
              onClick: handleClose,
              style: {
                marginRight: 20,
                display: 'none',
              },
            },
            '\u53D6\u6D88',
          ),
          /*#__PURE__*/ _react.default.createElement(
            _button.default,
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
exports.default = _default;
