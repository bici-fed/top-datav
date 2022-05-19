"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Table = _interopRequireDefault(require("./Table"));

var _cacl = require("../../utils/cacl");

var _index = require("../../Preview/index");

var _index2 = require("../../Layout/index");

var _lodash = _interopRequireDefault(require("lodash"));

var _defines = require("../../data/defines");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// 数据点显示固定行
var dataPointColumns = [{
  Header: '数据点名称',
  accessor: 'dataName' // accessor is the "key" in the data

}, {
  Header: '位置',
  accessor: 'position'
}, {
  Header: '范围',
  accessor: function accessor(text, row) {
    return "".concat(parseFloat(text.scopeMin) || '', "~").concat(parseFloat(text.scopeMax) || '');
  }
}, {
  Header: '值',
  accessor: 'value'
}, {
  Header: '状态',
  // accessor: 'status',
  accessor: function accessor(text, row) {
    return _defines.DATA_STATUS[text.status];
  }
}];
var defaultTableData = {
  "dimensions": ["--", "--", "--"],
  "source": [["--", "--", "--"], ["--", "--", "--"], ["--", "--", "--"]]
};

var DataTable = function DataTable(props) {
  var node = props.node;
  var property = node.property,
      rect = node.rect;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      dataColumns = _useState2[0],
      setDataColumns = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      tableData = _useState4[0],
      setTableData = _useState4[1];

  var _useState5 = (0, _react.useState)({
    dimensions: [],
    source: []
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      reqData = _useState6[0],
      setReqData = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      refresh = _useState8[0],
      setRefresh = _useState8[1]; // 订阅事件


  if (_index.canvas) {
    _index.canvas._emitter.on("requestDataSuccess" + node.id, function (e) {
      setReqData(e);
      reqData = e;
      setRefresh(!refresh);
    });
  } else if (_index2.canvas) {
    _index2.canvas._emitter.on("requestDataSuccess" + node.id, function (e) {
      setReqData(e);
      reqData = e;
      setRefresh(!refresh);
    });

    _index2.canvas._emitter.on('addDataPoint', function (e) {
      setRefresh(!refresh);
    });
  }

  (0, _react.useEffect)(function () {
    var _ref = _index.canvas !== undefined ? reqData : defaultTableData,
        dimensions = _ref.dimensions,
        source = _ref.source;

    var columnsT = (dimensions || []).map(function (item, index) {
      return {
        Header: item,
        accessor: 'dataIndex' + index
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
  }, [reqData, props.data, property.dataMethod, property.dataPointSelectedRows.length, reqData.dimensions.length, refresh]); // 获取表格数据 

  var data = _react["default"].useMemo(function () {
    if (property.dataMethod == 'point') {
      return property.dataPointSelectedRows;
    } else if (property.dataMethod == 'restfull') {
      return tableData;
    }

    return property.dataPointSelectedRows;
  }, [reqData, property.dataPointSelectedRows, property.dataPointSelectedRows.length, props.data, tableData.length, property.dataMethod, refresh]); // 获取表格列


  var columns = _react["default"].useMemo(function () {
    if (property.dataMethod == 'point') {
      return _lodash["default"].cloneDeep(dataPointColumns);
    } else if (property.dataMethod == 'restfull') {
      return dataColumns;
    }

    return dataPointColumns;
  }, [reqData, node, property.dataPointSelectedRows, property.dataPointSelectedRows.length, props.data, property.dataMethod, refresh]);

  var renderTable = (0, _react.useMemo)(function () {
    if (property.dataMethod == 'point') {
      return /*#__PURE__*/_react["default"].createElement(_Table["default"], _objectSpread(_objectSpread({}, props), {}, {
        columns: columns,
        data: data
      }));
    } else {
      return /*#__PURE__*/_react["default"].createElement(_Table["default"], _objectSpread(_objectSpread({}, props), {}, {
        columns: dataColumns,
        data: tableData
      }));
    }
  }, [reqData, property.dataPointSelectedRows, property.dataPointSelectedRows.length, props.data, tableData.length, property.dataMethod, rect, refresh]);
  return /*#__PURE__*/_react["default"].createElement("div", null, renderTable);
};

var _default = DataTable;
exports["default"] = _default;