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

var Iconrunhuaqingkuangtongji1 = function Iconrunhuaqingkuangtongji1(_ref) {
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
      d: 'M861.524958 117.205706s0-33.653694-16.954808-46.577736a102.112728 102.112728 0 0 0-23.224887-15.163356V15.41288a28.663222 28.663222 0 0 0-29.430987-14.779474H700.550256a25.20828 25.20828 0 0 0-16.762866 27.575555v14.779474a235.000031 235.000031 0 0 0-76.072703 33.845635c-49.264913 30.070791-360.657549 222.523852-360.657548 222.523852a164.429643 164.429643 0 0 0-84.262195 131.159832v486.443027s-14.715493 106.847278 141.84456 106.847278H760.243975s101.600885 8.061531 101.217003-93.155471c-0.319902-101.217002 0-813.446882 0-813.446882zM512 871.08683a108.382808 108.382808 0 0 1-109.662416-105.759611C402.337584 706.849127 512 576.39308 512 576.39308s109.662416 130.456048 109.662416 188.934139A108.382808 108.382808 0 0 1 512 871.08683z m137.429912-532.63688c-1.663491 15.931121-20.665671 58.861974-53.039756 62.508856l-248.88378 1.663491a25.976045 25.976045 0 0 1-23.67275-18.298396v-12.796081c15.035395-11.516473 30.902536-21.945279 47.473461-31.222439l232.056933-147.282894a41.651244 41.651244 0 0 1 45.68201 29.430987l0.383882 115.996476z',
      fill: (0, _helper.getIconColor)(color, 0, '#FFFFFF'),
    }),
  );
};

Iconrunhuaqingkuangtongji1.defaultProps = {
  size: 18,
};
var _default = Iconrunhuaqingkuangtongji1;
exports.default = _default;
