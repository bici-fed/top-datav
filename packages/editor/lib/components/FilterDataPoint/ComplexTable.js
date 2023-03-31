'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = exports.DEVICE_STATUS = void 0;

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _objectSpread2 = _interopRequireDefault(require('@babel/runtime/helpers/objectSpread2'));

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _createSuper2 = _interopRequireDefault(require('@babel/runtime/helpers/createSuper'));

var _react = _interopRequireWildcard(require('react'));

var _biciTransformers = require('bici-transformer');

var _lodash = _interopRequireDefault(require('lodash'));

var _api = require('../data/api');

/**
 * 用户侧：复杂感知点 > 列表
 */
// 传感器状态
var DEVICE_STATUS = [
  {
    value: 1,
    text: '正常',
  },
  {
    value: 2,
    text: '超过上限',
  },
  {
    value: 3,
    text: '低于下限',
  },
  {
    value: -1,
    text: '无数据',
  },
];
exports.DEVICE_STATUS = DEVICE_STATUS;
var initialQueryParams = {
  calculationCode: '',
  dataName: '',
  position: '',
  tagName: '',
  statusList: [],
  sorter: {
    field: '',
    order: '', // ascend, descend
  },
  pagination: {
    current: 1,
    pageSize: 10,
    total: 0,
  },
};

var ComplexDataPoint = /*#__PURE__*/ (function (_PureComponent) {
  (0, _inherits2.default)(ComplexDataPoint, _PureComponent);

  var _super = (0, _createSuper2.default)(ComplexDataPoint);

  function ComplexDataPoint() {
    var _this;

    (0, _classCallCheck2.default)(this, ComplexDataPoint);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = (0, _objectSpread2.default)(
      {
        dataList: [],
        sorterList: [],
        total: 0,
        selectedRowKeys: [],
        selectedRows: [],
        doubleArr: [],
      },
      initialQueryParams,
    );

    _this.getColumns = function () {
      return [
        {
          title: '计算编号',
          dataIndex: 'calculationCode',
          width: 'lg',
          filterType: 'search',
          handleSubmitSearch: function handleSubmitSearch(val) {
            return _this.handleSearch('calculationCode', val);
          },
        },
        {
          title: '数据名称',
          dataIndex: 'dataName',
          width: 'hg',
          filterType: 'search',
          handleSubmitSearch: function handleSubmitSearch(val) {
            return _this.handleSearch('dataName', val);
          },
        },
        {
          title: '计算周期(s)',
          dataIndex: 'calculationCycle',
          width: 'sm',
        },
        {
          title: '位置',
          dataIndex: 'position',
          width: 'lg',
          filterType: 'search',
          handleSubmitSearch: function handleSubmitSearch(val) {
            return _this.handleSearch('position', val);
          },
        },
        {
          title: '范围上下限',
          width: 'lg',
          render: function render(record) {
            var _record$scopeMin = record.scopeMin,
              scopeMin = _record$scopeMin === void 0 ? '' : _record$scopeMin,
              _record$scopeMax = record.scopeMax,
              scopeMax = _record$scopeMax === void 0 ? '' : _record$scopeMax;
            var scope = ''.concat(scopeMin, ' ~ ').concat(scopeMax);

            var scopeText = /*#__PURE__*/ _react.default.createElement(
              'div',
              {
                style: {
                  width: _biciTransformers.ComplexTable.columnWidth.lg - 16,
                },
              },
              scope,
            );

            return _lodash.default.isNumber(scopeMin) || _lodash.default.isNumber(scopeMax)
              ? scopeText
              : '';
          },
        },
        {
          title: '标签',
          dataIndex: 'tagName',
          width: 'lg',
          filterType: 'search',
          handleSubmitSearch: function handleSubmitSearch(val) {
            return _this.handleSearch('tagName', val);
          },
        },
        {
          title: '状态',
          dataIndex: 'statusList',
          width: 100,
          filters: DEVICE_STATUS,
          filterMultiple: true,
          checkDisabled: true,
          fixed: 'right',
          render: function render(text, record) {
            var show;

            if (record.status === 1) {
              show = /*#__PURE__*/ _react.default.createElement(
                'span',
                {
                  className: 'green6',
                },
                '\u6B63\u5E38',
              );
            } else if (record.status === 2) {
              show = /*#__PURE__*/ _react.default.createElement(
                'span',
                {
                  className: 'red6',
                },
                '\u8D85\u8FC7\u4E0A\u9650',
              );
            } else if (record.status === 3) {
              show = /*#__PURE__*/ _react.default.createElement(
                'span',
                {
                  className: 'red6',
                },
                '\u4F4E\u4E8E\u4E0B\u9650',
              );
            } else if (record.status === -1) {
              show = /*#__PURE__*/ _react.default.createElement(
                'span',
                {
                  className: 'black85',
                },
                '\u65E0\u6570\u636E',
              );
            }

            return /*#__PURE__*/ _react.default.createElement(
              'div',
              {
                style: {
                  width: 80,
                },
              },
              show,
            );
          },
        },
      ];
    };

    _this.handleSearch = function (key, value) {
      _this.setState(
        (0, _defineProperty2.default)(
          {
            pagination: initialQueryParams.pagination,
          },
          key,
          value,
        ),
        function () {
          _this.requestList();
        },
      );
    };

    _this.handleTableChange = function (pagination, filters, sorter) {
      var field = sorter.field,
        order = sorter.order;
      var resultOrder = order === 'ascend' ? 'asc' : 'desc';
      var sorterList = order
        ? [
            {
              field: field,
              order: resultOrder,
            },
          ]
        : [];

      _this.setState(
        (0, _objectSpread2.default)(
          (0, _objectSpread2.default)(
            {
              pagination: pagination,
            },
            filters,
          ),
          {},
          {
            sorterList: sorterList,
          },
        ),
        function () {
          return _this.requestList();
        },
      );
    };

    _this.handleFilterTagsChange = function (tagsArr) {
      if (tagsArr === null) {
        _this.setState((0, _objectSpread2.default)({}, initialQueryParams), function () {
          return _this.requestList();
        });
      } else {
        var val = tagsArr.val instanceof Array ? [] : '';

        _this.setState((0, _defineProperty2.default)({}, tagsArr.dataIndex, val), function () {
          return _this.requestList();
        });
      }
    };

    _this.mapRows = function (params) {
      var res = [];

      for (var i = 0; i < params.length; i++) {
        if (Array.isArray(params[i])) {
          res = res.concat(_this.mapRows(params[i]));
        } else {
          res.push(params[i]);
        }
      }

      return res.filter(Boolean); //去掉undefined的情况
    };

    return _this;
  }

  (0, _createClass2.default)(ComplexDataPoint, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.requestList();
      },
    },
    {
      key: 'requestList',
      value: function requestList() {
        var _this2 = this;

        var _this$state = this.state,
          pagination = _this$state.pagination,
          sorterList = _this$state.sorterList,
          calculationCode = _this$state.calculationCode,
          dataName = _this$state.dataName,
          position = _this$state.position,
          tagName = _this$state.tagName,
          statusList = _this$state.statusList;
        var params = {
          pagination: pagination,
          sorterList: sorterList,
          dataTypeList: [1],
        };

        if (calculationCode) {
          params.calculationCode = calculationCode;
        }

        if (dataName) {
          params.dataName = dataName;
        }

        if (position) {
          params.position = position;
        }

        if (tagName) {
          params.tagName = tagName;
        }

        if (statusList && statusList.length) {
          params.statusList = statusList;
        }

        (0, _api.fetchPerceptualPointList)(params).then(function (res) {
          if (res['data'].data) {
            var _res$data$data = res['data'].data,
              list = _res$data$data.list,
              total = _res$data$data.total;

            _this2.setState({
              dataList: list,
              total: total,
            });
          }
        });
      },
    },
    {
      key: 'render',
      value: function render() {
        var _this3 = this;

        var _this$state2 = this.state,
          dataList = _this$state2.dataList,
          total = _this$state2.total,
          pagination = _this$state2.pagination;
        var _this$props = this.props,
          selectedRowKeys = _this$props.selectedRowKeys,
          mode = _this$props.mode,
          disableDataId = _this$props.disableDataId,
          source = _this$props.source,
          selectedRows = _this$props.selectedRows;
        var rowSelection = {
          type: mode,
          selectedRowKeys: selectedRowKeys,
          getCheckboxProps: function getCheckboxProps(record) {
            return {
              disabled: disableDataId.includes(record.id),
            };
          },
          onSelect: function onSelect(record, selected) {
            return _this3.props.onSelectRow(record, selected, 'id');
          },
          onSelectAll: function onSelectAll(selected, record, changeRows) {
            return _this3.props.onSelectRow(changeRows, selected, 'id');
          },
        };
        pagination.total = total;
        return /*#__PURE__*/ _react.default.createElement(_biciTransformers.ComplexTable, {
          rowKey: 'id',
          minWidth: 800,
          dataSource: dataList,
          pagination: pagination,
          columns: this.getColumns(),
          rowSelection: rowSelection,
          onChange: this.handleTableChange,
          onFilterTagsChange: this.handleFilterTagsChange,
        });
      },
    },
  ]);
  return ComplexDataPoint;
})(_react.PureComponent);

exports.default = ComplexDataPoint;
