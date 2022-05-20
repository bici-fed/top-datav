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

var IconcaidanShengchanrenwu = function IconcaidanShengchanrenwu(_ref) {
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
      d: 'M853.76 128a42.24 42.24 0 0 1 42.24 42.24v683.52a42.24 42.24 0 0 1-42.24 42.24H170.24a42.24 42.24 0 0 1-42.24-42.24V170.24A42.24 42.24 0 0 1 170.24 128zM832 192H192v640h640V192zM443.328 570.368a21.12 21.12 0 0 1 0.832 0.832l11.776 12.928a21.12 21.12 0 0 1-0.576 28.992l-115.84 118.08a21.12 21.12 0 0 1-30.272-0.128l-60.736-62.976a21.12 21.12 0 0 1-0.32-28.992l11.84-12.8a21.12 21.12 0 0 1 29.824-1.152l0.896 0.832 33.92 35.136L413.44 570.624a21.12 21.12 0 0 1 29.824-0.256z m303.552 48.32a21.12 21.12 0 0 1 21.12 21.12v21.76a21.12 21.12 0 0 1-21.12 21.12H533.12a21.12 21.12 0 0 1-21.12-21.12v-21.76a21.12 21.12 0 0 1 21.12-21.12h213.76z m-320-320a21.12 21.12 0 0 1 21.12 21.12v149.76a21.12 21.12 0 0 1-21.12 21.12H277.12a21.12 21.12 0 0 1-21.12-21.12v-149.76a21.12 21.12 0 0 1 21.12-21.12h149.76z m-32.192 53.312H309.312v85.312h85.376V352z m352.192-10.688a21.12 21.12 0 0 1 21.12 21.12v21.76a21.12 21.12 0 0 1-21.12 21.12H533.12a21.12 21.12 0 0 1-21.12-21.12v-21.76a21.12 21.12 0 0 1 21.12-21.12h213.76z',
      fill: (0, _helper.getIconColor)(color, 0, '#333333'),
    }),
  );
};

IconcaidanShengchanrenwu.defaultProps = {
  size: 18,
};
var _default = IconcaidanShengchanrenwu;
exports.default = _default;
