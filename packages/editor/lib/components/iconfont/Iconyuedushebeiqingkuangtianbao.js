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

var Iconyuedushebeiqingkuangtianbao = function Iconyuedushebeiqingkuangtianbao(_ref) {
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
      d: 'M176.020211 132.796632v57.613473c0 43.169684 35.193263 76.8 78.362947 76.8h24.037053c43.169684 0 78.362947-33.630316 78.362947-76.8V132.796632h321.643789v57.613473c0 43.169684 35.193263 76.8 78.362948 76.8h24.037052c43.169684 0 78.362947-33.630316 78.362948-76.8V132.796632h68.823579c38.373053 0 68.769684 28.779789 67.206737 67.206736v732.806737a69.362526 69.362526 0 0 1-70.440422 67.206737H104.016842a67.961263 67.961263 0 0 1-68.769684-67.206737V199.949474c0-38.426947 30.396632-67.206737 68.823579-67.206737h72.003368z m748.759578 222.423579H104.016842v577.589894h822.433684c-1.131789 0-1.455158-304.020211-1.562947-470.93221V355.166316z m-235.196631 100.783157v326.386527c0 25.6-6.359579 44.786526-16.006737 59.230316-9.593263 12.773053-23.983158 20.803368-44.732632 20.803368-20.857263 0-52.816842 1.616842-99.22021 1.616842a457.242947 457.242947 0 0 0-16.006737-67.260632c30.396632 1.616842 54.433684 1.616842 76.8 1.616843 25.6 0 35.193263-9.593263 35.193263-30.396632v-32.013474h-201.566316c-6.467368 30.396632-12.826947 56.050526-22.42021 76.8-8.030316 17.623579-22.420211 35.193263-43.223579 54.433685-20.803368-17.623579-38.426947-33.630316-59.176421-48.020211 25.6-25.6 43.169684-52.816842 51.2-76.8 4.796632-25.6 9.593263-64.026947 9.593263-116.789895V455.949474h329.566316z m-68.769684 167.989895H422.426947c1.616842 8.030316 1.616842 27.216842 0 51.2h198.332632v-51.2z m0-108.813474H422.426947v51.2h198.332632v-51.2zM779.210105 23.983158c19.186526 0 33.576421 12.826947 35.193263 32.013474v134.413473c0 16.006737-14.389895 30.396632-35.193263 30.396632h-24.037052c-20.749474 0-35.193263-14.389895-35.193264-30.396632V57.613474c0-19.186526 14.443789-33.630316 35.193264-33.630316z m-502.406737 0c19.186526 0 33.576421 12.826947 35.193264 32.013474v134.413473c0 16.006737-14.389895 30.396632-35.193264 30.396632H252.766316c-20.803368 0-35.247158-14.389895-35.247158-30.396632V57.613474c0-19.186526 14.443789-33.630316 35.247158-33.630316z',
      fill: (0, _helper.getIconColor)(color, 0, '#096DD9'),
    }),
  );
};

Iconyuedushebeiqingkuangtianbao.defaultProps = {
  size: 18,
};
var _default = Iconyuedushebeiqingkuangtianbao;
exports.default = _default;
