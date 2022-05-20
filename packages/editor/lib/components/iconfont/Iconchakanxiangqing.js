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

var Iconchakanxiangqing = function Iconchakanxiangqing(_ref) {
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
        viewBox: '0 0 1102 1024',
        width: size + 'px',
        height: size + 'px',
        style: style,
      },
      rest,
    ),
    /*#__PURE__*/ _react.default.createElement('path', {
      d: 'M1010.609231 328.231385a441.974154 441.974154 0 1 0-520.822154 669.538461H144.147692a104.999385 104.999385 0 0 1-104.999384-105.078154V131.308308A104.999385 104.999385 0 0 1 144.147692 26.230154h761.462154a104.999385 104.999385 0 0 1 104.999385 105.078154v196.923077z m-70.892308 461.508923l113.585231 113.58523a59.864615 59.864615 0 0 1-84.598154 84.519385L855.118769 874.338462a350.995692 350.995692 0 1 1 84.598154-84.519385zM718.532923 341.070769c54.114462 6.537846 99.091692 41.196308 135.876923 106.574769a26.230154 26.230154 0 0 0 45.764923-25.678769c-44.425846-79.084308-103.187692-124.297846-175.261538-133.041231a26.230154 26.230154 0 0 0-6.301539 52.145231z',
      fill: (0, _helper.getIconColor)(color, 0, '#FFFFFF'),
    }),
  );
};

Iconchakanxiangqing.defaultProps = {
  size: 18,
};
var _default = Iconchakanxiangqing;
exports.default = _default;
