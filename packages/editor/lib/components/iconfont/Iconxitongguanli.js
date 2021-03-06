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

var Iconxitongguanli = function Iconxitongguanli(_ref) {
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
      d: 'M570.88 128l0.064 65.28c45.44 8.32 87.488 26.176 124.16 51.328l34.56-34.56a16.832 16.832 0 0 1 23.744 0l71.488 71.488-46.272 46.336c25.472 36.736 43.52 78.976 51.968 124.608h48.576c9.28 0 16.832 7.616 16.832 16.896v101.12l-65.024 0.064a322.944 322.944 0 0 1-51.84 125.696l33.664 33.664c5.44 5.44 6.4 13.76 2.752 20.224l-2.752 3.584-71.36 71.424-45.44-45.44a322.176 322.176 0 0 1-125.056 51.904v47.552a16.832 16.832 0 0 1-12.992 16.384l-3.84 0.448H453.056v-64.384a322.176 322.176 0 0 1-125.312-52.096l-33.6 33.6-3.584 2.752a16.896 16.896 0 0 1-16.64 0l-3.584-2.752-71.424-71.552 45.632-45.696A322.944 322.944 0 0 1 193.28 571.52h-48.384a16.832 16.832 0 0 1-16.384-13.056L128 554.624v-101.12h65.216c8.384-45.952 26.432-88.448 51.968-125.376l-33.92-34.048a16.832 16.832 0 0 1 0-23.808l71.296-71.424 46.016 46.016a322.176 322.176 0 0 1 124.48-51.584v-48.448c0-9.28 7.552-16.832 16.832-16.832h101.056z m-58.368 177.152A206.72 206.72 0 0 0 305.984 512a206.72 206.72 0 0 0 206.528 206.848A206.72 206.72 0 0 0 719.104 512a206.72 206.72 0 0 0-206.592-206.848z',
      fill: (0, _helper.getIconColor)(color, 0, '#A6A6A6'),
    }),
  );
};

Iconxitongguanli.defaultProps = {
  size: 18,
};
var _default = Iconxitongguanli;
exports.default = _default;
