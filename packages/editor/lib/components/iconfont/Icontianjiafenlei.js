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

var Icontianjiafenlei = function Icontianjiafenlei(_ref) {
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
      d: 'M449.3312 543.880533l189.508267 189.986134h132.5056l0.068266-114.688a40.482133 40.482133 0 0 1 19.524267-35.293867l5.461333-2.730667a40.413867 40.413867 0 0 1 44.6464 9.352534l157.696 157.218133a40.96 40.96 0 0 1 0 57.821867l-157.696 157.149866a40.96 40.96 0 0 1-69.632-28.672l-0.068266-97.757866H617.813333a51.2 51.2 0 0 1-36.386133-14.813867l-204.8-204.8a51.4048 51.4048 0 1 1 72.704-72.772267zM105.813333 477.866667c-31.266133 0-48.264533-14.336-50.858666-43.008L54.613333 426.666667c0-34.133333 17.066667-51.2 51.2-51.2h285.627734l190.0544-189.986134A51.2 51.2 0 0 1 617.813333 170.666667h153.531734L771.413333 55.978667a40.482133 40.482133 0 0 1 19.524267-35.293867l5.461333-2.730667A40.482133 40.482133 0 0 1 841.045333 27.306667l157.696 157.149866a40.96 40.96 0 0 1 0 57.890134l-157.696 157.218133a40.96 40.96 0 0 1-69.632-28.672L771.345067 273.066667H638.839467L459.434667 452.949333c-6.280533 14.609067-19.114667 22.801067-38.2976 24.576L413.013333 477.866667h-307.2z',
      fill: (0, _helper.getIconColor)(color, 0, '#096DD9'),
    }),
  );
};

Icontianjiafenlei.defaultProps = {
  size: 18,
};
var _default = Icontianjiafenlei;
exports.default = _default;
