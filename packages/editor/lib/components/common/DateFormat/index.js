'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require('@babel/runtime/helpers/objectSpread2'));

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

var _react = _interopRequireWildcard(require('react'));

require('./styles.css');

var _Preview = require('../../Preview');

var DateFormat = function DateFormat(props) {
  var style = props.style,
    node = props.node,
    dataPointReq = props.dataPointReq;

  var _useState = (0, _react.useState)('0分'),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    minuts = _useState2[0],
    setMinuts = _useState2[1];

  (0, _react.useEffect)(
    function () {
      try {
        _Preview.canvas._emitter.on('socketDataSuccess', function (data) {
          fomatField(data);
        });
      } catch (e) {}
    },
    [node, dataPointReq],
  );
  var sty = (0, _objectSpread2.default)(
    (0, _objectSpread2.default)((0, _objectSpread2.default)({}, style), node.font),
    {},
    {
      width: node.rect.width < 10 ? 'auto' : node.rect.width,
      height: node.rect.height < 10 ? 'auto' : node.rect.height,
      padding: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  );

  var fomatField = function fomatField(data) {
    var sockData = JSON.parse(data.data);

    if (!node.property.dataPointParam.qtDataList[0]) {
      setMinuts('0分');
      return;
    }

    var pointId = node.property.dataPointParam.qtDataList[0].id;
    var isUpdate = pointId == sockData.id;
    var mins = sockData.value;

    if (isUpdate) {
      if (typeof mins !== 'number') return mins;
      var days = [':', ':', ':', ':', ':'];
      var dataArr = getDates(mins);
      var d = '';

      if (dataArr[0] > 0) {
        if (dataArr[0] < 10) {
          d += '0' + dataArr[0] + days[0];
        } else {
          d += dataArr[0] + days[0];
        }
      }

      if (dataArr[1] > 0) {
        if (dataArr[1] < 10) {
          d += '0' + dataArr[1] + days[1];
        } else {
          d += dataArr[1] + days[1];
        }
      }

      if (dataArr[2] > 0) {
        if (dataArr[2] < 10) {
          d += '0' + dataArr[2] + days[2];
        } else {
          d += dataArr[2] + days[2];
        }
      }

      if (dataArr[3] >= 0) {
        if (dataArr[3] < 10) {
          d += '0' + dataArr[3] + days[3];
        } else {
          d += dataArr[3] + days[3];
        }
      }

      if (dataArr[4] >= 0) {
        if (dataArr[4] < 10) {
          d += '0' + dataArr[4] + days[4];
        } else {
          d += dataArr[4] + days[4];
        }
      }

      if ((d || ' ').endsWith(':')) {
        d = d.substring(0, d.length - 1);
      }

      setMinuts(d);
    }
  };

  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      style: sty,
    },
    minuts,
  );
};

function getDates(mins) {
  var runTime = mins * 60;
  var year = Math.floor(runTime / 86400 / 365);
  runTime = runTime % (86400 * 365);
  var month = Math.floor(runTime / 86400 / 30);
  runTime = runTime % (86400 * 30);
  var day = Math.floor(runTime / 86400);
  runTime = runTime % 86400;
  var hour = Math.floor(runTime / 3600);
  runTime = runTime % 3600;
  var minute = Math.floor(runTime / 60);
  runTime = runTime % 60;
  var second = runTime;
  return [year, month, day, hour, minute, second];
}

var _default = DateFormat;
exports.default = _default;
