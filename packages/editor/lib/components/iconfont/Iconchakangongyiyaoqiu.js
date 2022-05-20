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

var Iconchakangongyiyaoqiu = function Iconchakangongyiyaoqiu(_ref) {
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
      d: 'M688.0256 312.0128v-48.0256A8.0384 8.0384 0 0 0 679.936 256h-384a8.0384 8.0384 0 0 0-7.9872 7.9872v48.0256c0 4.4032 3.584 7.9872 7.9872 7.9872h384c4.4032 0 7.9872-3.584 7.9872-7.9872zM295.936 399.9744a8.0384 8.0384 0 0 0-7.9872 8.0384v47.9744c0 4.4032 3.584 7.9872 7.9872 7.9872h184.0128c4.4032 0 7.9872-3.584 7.9872-7.9872V408.064a8.0384 8.0384 0 0 0-7.9872-8.0384H295.9872z m144.0256 452.0448H208.0256V147.968H768v343.9616c0 4.4032 3.584 8.0384 7.9872 8.0384h56.0128c4.4032 0 7.9872-3.584 7.9872-8.0384v-384a31.9488 31.9488 0 0 0-32-32h-640a31.9488 31.9488 0 0 0-32 32v784.0256c0 17.7152 14.336 32 32 32h272.0256c4.4032 0 7.9872-3.584 7.9872-7.9872v-56.0128a8.0384 8.0384 0 0 0-7.9872-7.9872z m445.696 51.456l-93.2864-93.2864a176.0256 176.0256 0 1 0-43.6224 40.8064l94.72 94.72c1.536 1.5872 3.584 2.304 5.5808 2.304 1.9968 0 4.096-0.8192 5.632-2.304l30.976-31.0272a7.8848 7.8848 0 0 0 0-11.2128z m-233.728-87.5008a111.9232 111.9232 0 0 1-111.9744-111.9744 111.9232 111.9232 0 1 1 224 0 111.9232 111.9232 0 0 1-112.0256 112.0256z',
      fill: (0, _helper.getIconColor)(color, 0, '#333333'),
    }),
  );
};

Iconchakangongyiyaoqiu.defaultProps = {
  size: 18,
};
var _default = Iconchakangongyiyaoqiu;
exports.default = _default;
