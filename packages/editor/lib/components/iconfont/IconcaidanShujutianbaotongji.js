'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));

var _objectSpread2 = _interopRequireDefault(require('@babel/runtime/helpers/objectSpread2'));

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties'),
);

var _react = _interopRequireDefault(require('react'));

var _helper = require('./helper');

var _excluded = ['size', 'color', 'style'];
var DEFAULT_STYLE = {
  display: 'block',
};

var IconcaidanShujutianbaotongji = function IconcaidanShujutianbaotongji(_ref) {
  var size = _ref.size,
    color = _ref.color,
    _style = _ref.style,
    rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var style = _style
    ? (0, _objectSpread2.default)((0, _objectSpread2.default)({}, DEFAULT_STYLE), _style)
    : DEFAULT_STYLE;
  return /*#__PURE__*/ _react.default.createElement(
    'svg',
    (0, _extends2.default)(
      {
        viewBox: '0 0 1024 1024',
        width: size + 'px',
        height: size + 'px',
        style: style,
      },
      rest,
    ),
    /*#__PURE__*/ _react.default.createElement('path', {
      d: 'M896.448 170.688a42.24 42.24 0 0 1 42.24 42.24v598.144a42.24 42.24 0 0 1-42.24 42.24H127.552a42.24 42.24 0 0 1-42.24-42.24V212.928a42.24 42.24 0 0 1 42.24-42.24h768.896z m-21.76 64H149.312v554.624h725.376V234.688zM522.88 384a21.12 21.12 0 0 1 21.12 21.12v256.448a21.12 21.12 0 0 1-21.12 21.12h-21.76a21.12 21.12 0 0 1-21.12-21.12V405.12A21.12 21.12 0 0 1 501.12 384h21.76z m181.312 64a21.12 21.12 0 0 1 21.12 21.12v192.448a21.12 21.12 0 0 1-21.12 21.12h-21.76a21.12 21.12 0 0 1-21.12-21.12V469.12a21.12 21.12 0 0 1 21.12-21.12h21.76zM341.568 320a21.12 21.12 0 0 1 21.12 21.12v320.448a21.12 21.12 0 0 1-21.12 21.12h-21.76a21.12 21.12 0 0 1-21.12-21.12V341.12a21.12 21.12 0 0 1 21.12-21.12h21.76z',
      fill: (0, _helper.getIconColor)(color, 0, '#333333'),
    }),
  );
};

IconcaidanShujutianbaotongji.defaultProps = {
  size: 18,
};
var _default = IconcaidanShujutianbaotongji;
exports.default = _default;
