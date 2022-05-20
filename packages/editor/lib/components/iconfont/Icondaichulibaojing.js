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

var Icondaichulibaojing = function Icondaichulibaojing(_ref) {
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
      d: 'M445.805714 877.714286a48.786286 48.786286 0 0 1 0 97.499428H134.070857A97.499429 97.499429 0 0 1 36.571429 877.714286V97.499429C36.571429 43.666286 80.237714 0 134.070857 0H768c53.833143 0 97.499429 43.666286 97.499429 97.499429v264.704a48.786286 48.786286 0 1 1-97.499429 0V97.499429H134.070857V877.714286h311.734857zM277.942857 416.694857a48.786286 48.786286 0 1 1 0-97.499428H525.165714a48.786286 48.786286 0 0 1 0 97.499428H277.942857z m0 239.396572a48.786286 48.786286 0 0 1 0-97.572572h133.12a48.786286 48.786286 0 1 1 0 97.572572H277.942857z m366.957714-125.659429L740.205714 679.350857c8.192 12.8 8.192 29.257143 0 42.057143l-97.060571 151.405714c-0.146286 0.950857 0.219429 1.316571 0.731428 1.316572h239.396572c0.877714-0.438857 0.950857-1.024-0.292572-2.779429l-101.961142-148.918857a38.985143 38.985143 0 0 1 0-44.105143l102.912-150.308571a0.877714 0.877714 0 0 0-0.146286-1.243429L643.876571 526.628571a0.877714 0.877714 0 0 0-0.877714 0.877715c0 0.146286 0.585143 1.097143 1.828572 2.925714z m-79.872-2.925714c0-43.593143 35.328-78.921143 78.921143-78.921143h239.396572c17.042286 0 33.645714 5.558857 47.323428 15.798857 34.889143 26.185143 41.910857 75.629714 16.822857 109.129143l-86.966857 126.902857 85.942857 125.513143a78.921143 78.921143 0 0 1-63.122285 126.244571H643.876571a78.921143 78.921143 0 0 1-64.804571-123.830857l81.92-128-81.188571-126.829714a78.921143 78.921143 0 0 1-14.848-46.006857z',
      fill: (0, _helper.getIconColor)(color, 0, '#096DD9'),
    }),
  );
};

Icondaichulibaojing.defaultProps = {
  size: 18,
};
var _default = Icondaichulibaojing;
exports.default = _default;
