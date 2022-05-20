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

var _Table = _interopRequireDefault(require('./Table'));

var _cacl = require('../../utils/cacl');

var _index = require('../../Preview/index');

var _index2 = require('../../Layout/index');

var _lodash = _interopRequireDefault(require('lodash'));

var _defines = require('../../data/defines');

// 数据点显示固定行
var dataPointColumns = [
  {
    Header: '数据点名称',
    accessor: 'dataName', // accessor is the "key" in the data
  },
  {
    Header: '位置',
    accessor: 'position',
  },
  {
    Header: '范围',
    accessor: function accessor(text, row) {
      return ''
        .concat(parseFloat(text.scopeMin) || '', '~')
        .concat(parseFloat(text.scopeMax) || '');
    },
  },
  {
    Header: '值',
    accessor: 'value',
  },
  {
    Header: '状态',
    // accessor: 'status',
    accessor: function accessor(text, row) {
      return _defines.DATA_STATUS[text.status];
    },
  },
];
var defaultTableData = {
  dimensions: ['--', '--', '--'],
  source: [
    ['--', '--', '--'],
    ['--', '--', '--'],
    ['--', '--', '--'],
  ],
};

var DataTable = function DataTable(props) {
  var node = props.node;
  var property = node.property,
    rect = node.rect;

  var _useState = (0, _react.useState)([]),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    dataColumns = _useState2[0],
    setDataColumns = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    tableData = _useState4[0],
    setTableData = _useState4[1];

  var _useState5 = (0, _react.useState)({
      dimensions: [],
      source: [],
    }),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
    reqData = _useState6[0],
    setReqData = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
    _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
    refresh = _useState8[0],
    setRefresh = _useState8[1]; // 订阅事件

  if (_index.canvas) {
    _index.canvas._emitter.on('requestDataSuccess' + node.id, function (e) {
      setReqData(e);
      reqData = e;
      setRefresh(!refresh);
    });
  } else if (_index2.canvas) {
    _index2.canvas._emitter.on('requestDataSuccess' + node.id, function (e) {
      setReqData(e);
      reqData = e;
      setRefresh(!refresh);
    });

    _index2.canvas._emitter.on('addDataPoint', function (e) {
      setRefresh(!refresh);
    });
  }

  (0, _react.useEffect)(
    function () {
      var _ref = _index.canvas !== undefined ? reqData : defaultTableData,
        dimensions = _ref.dimensions,
        source = _ref.source;

      var columnsT = (dimensions || []).map(function (item, index) {
        return {
          Header: item,
          accessor: 'dataIndex' + index,
        };
      });
      var dataT = (source || []).map(function (arr, idx) {
        var obj = {};
        (arr || []).map(function (item, idx) {
          if ((0, _cacl.isNumber)(item)) {
            // 数值型
            var n = node.property.dataDot;
            obj['dataIndex' + idx] = (0, _cacl.getFixed)(item, n);
          } else {
            obj['dataIndex' + idx] = item;
          }
        });
        return obj;
      });
      setDataColumns(columnsT);
      setTableData(dataT);
    },
    [
      reqData,
      props.data,
      property.dataMethod,
      property.dataPointSelectedRows.length,
      reqData.dimensions.length,
      refresh,
    ],
  ); // 获取表格数据

  var data = _react.default.useMemo(
    function () {
      if (property.dataMethod == 'point') {
        return property.dataPointSelectedRows;
      } else if (property.dataMethod == 'restfull') {
        return tableData;
      }

      return property.dataPointSelectedRows;
    },
    [
      reqData,
      property.dataPointSelectedRows,
      property.dataPointSelectedRows.length,
      props.data,
      tableData.length,
      property.dataMethod,
      refresh,
    ],
  ); // 获取表格列

  var columns = _react.default.useMemo(
    function () {
      if (property.dataMethod == 'point') {
        return _lodash.default.cloneDeep(dataPointColumns);
      } else if (property.dataMethod == 'restfull') {
        return dataColumns;
      }

      return dataPointColumns;
    },
    [
      reqData,
      node,
      property.dataPointSelectedRows,
      property.dataPointSelectedRows.length,
      props.data,
      property.dataMethod,
      refresh,
    ],
  );

  var renderTable = (0, _react.useMemo)(
    function () {
      if (property.dataMethod == 'point') {
        return /*#__PURE__*/ _react.default.createElement(
          _Table.default,
          (0, _objectSpread2.default)(
            (0, _objectSpread2.default)({}, props),
            {},
            {
              columns: columns,
              data: data,
            },
          ),
        );
      } else {
        return /*#__PURE__*/ _react.default.createElement(
          _Table.default,
          (0, _objectSpread2.default)(
            (0, _objectSpread2.default)({}, props),
            {},
            {
              columns: dataColumns,
              data: tableData,
            },
          ),
        );
      }
    },
    [
      reqData,
      property.dataPointSelectedRows,
      property.dataPointSelectedRows.length,
      props.data,
      tableData.length,
      property.dataMethod,
      rect,
      refresh,
    ],
  );
  return /*#__PURE__*/ _react.default.createElement('div', null, renderTable);
};

var _default = DataTable;
exports.default = _default;
