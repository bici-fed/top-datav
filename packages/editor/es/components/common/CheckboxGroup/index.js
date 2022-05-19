'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _react = _interopRequireDefault(require('react'));

var _styleModule = _interopRequireDefault(require('./style.module.css'));

var _iconConfig = _interopRequireDefault(require('../../config/iconConfig'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var CheckboxGroup = function CheckboxGroup(props) {
  var value = props.value,
    disabled = props.disabled,
    onChange = props.onChange;

  var handleChange = function handleChange(e, item) {
    item.checked = e.currentTarget.checked;
    onChange && onChange(value);
  };

  return /*#__PURE__*/ _react['default'].createElement(
    'div',
    {
      className: _styleModule['default'].checkboxGroup,
    },
    (value || []).map(function (item, index) {
      return /*#__PURE__*/ _react['default'].createElement(
        'label',
        {
          key: index,
          style: {
            width: 100 / value.length + '%',
          },
          className: item.checked
            ? ''
                .concat(_styleModule['default'].buttonWrapper, ' ')
                .concat(_styleModule['default'].buttonWrapperChecked)
            : ''.concat(_styleModule['default'].buttonWrapper),
        },
        /*#__PURE__*/ _react['default'].createElement(
          'span',
          {
            className: _styleModule['default'].checkboxButton,
          },
          /*#__PURE__*/ _react['default'].createElement('input', {
            type: 'checkbox',
            className: _styleModule['default'].checkboxButtonInput,
            onClick: function onClick(e) {
              return handleChange(e, item);
            },
            value: item.value,
          }),
        ),
        /*#__PURE__*/ _react['default'].createElement(
          'span',
          null,
          /*#__PURE__*/ _react['default'].createElement(_iconConfig['default'], {
            type: item.icon,
          }),
        ),
      );
    }),
  );
};

var _default = CheckboxGroup;
exports['default'] = _default;
