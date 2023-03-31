'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _objectSpread2 = _interopRequireDefault(require('@babel/runtime/helpers/objectSpread2'));

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _createSuper2 = _interopRequireDefault(require('@babel/runtime/helpers/createSuper'));

var _react = _interopRequireWildcard(require('react'));

var _biciTransformers = require('bici-transformer');

var _userSide = require('../common/userSide');

var _lodash = _interopRequireDefault(require('lodash'));

var _api = require('../data/api');

/**
 * 用户侧：数据点管理 > 列表
 */
var initialQueryParams = {
  dataName: '',
  dataCode: '',
  // dataTypeList: [1],
  position: '',
  associationObject: '',
  channelList: [],
  attentionList: [],
  statusList: [],
  tagName: '',
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

var DataPointTable = /*#__PURE__*/ (function (_Component) {
  (0, _inherits2.default)(DataPointTable, _Component);

  var _super = (0, _createSuper2.default)(DataPointTable);

  function DataPointTable() {
    var _this;

    (0, _classCallCheck2.default)(this, DataPointTable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.associationObject = '';
    _this.state = (0, _objectSpread2.default)(
      {
        dataList: [],
        total: 0,
        sorterList: [],
        selectedRowKeys: [],
        selectedRows: [],
        doubleArr: [],
      },
      initialQueryParams,
    );

    _this.handleSearch = function (key, value) {
      // 用户列表模糊查询
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
      ); // this.associationObject=value;
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
      Object.keys(filters).forEach(function (key) {
        return filters[key] == null && delete filters[key];
      });

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

    _this.columns = function () {
      return [
        {
          title: '数据编号',
          dataIndex: 'dataCode',
          width: 'nm',
          filterType: 'search',
          handleSubmitSearch: function handleSubmitSearch(val) {
            return _this.handleSearch('dataCode', val);
          },
        },
        {
          title: '数据名称',
          dataIndex: 'dataName',
          width: 'nm',
          filterType: 'search',
          handleSubmitSearch: function handleSubmitSearch(val) {
            return _this.handleSearch('dataName', val);
          },
        },
        {
          title: '采集间隔(s)',
          dataIndex: 'intervalTime',
          width: 'nm',
        },
        {
          title: '单位',
          dataIndex: 'unit',
          width: 'sm',
          checkDefault: false,
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
          width: 'nm',
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
                  width: _biciTransformers.ComplexTable.columnWidth.nm - 16,
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
          title: '数据来源',
          dataIndex: 'channelList',
          width: 'nm',
          filters: _userSide.DATA_ORIGIN,
          filterMultiple: true,
          render: function render(text, record) {
            var channel =
              _userSide.DATA_ORIGIN.filter(function (v) {
                return v.value === record.channel;
              })[0] || {};
            var channelText = channel.text;
            return /*#__PURE__*/ _react.default.createElement(
              'div',
              {
                style: {
                  width: _biciTransformers.ComplexTable.columnWidth.nm - 16,
                },
              },
              channelText,
            );
          },
        },
        {
          title: '来源编号或名称',
          dataIndex: 'associationObject',
          width: 'nm',
          filterType: 'search',
          handleSubmitSearch: function handleSubmitSearch(val) {
            return _this.handleSearch('associationObject', val);
          },
        },
        {
          title: '标签',
          dataIndex: 'tagName',
          filterType: 'search',
          handleSubmitSearch: function handleSubmitSearch(val) {
            return _this.handleSearch('tagName', val);
          },
        },
        {
          title: '状态',
          dataIndex: 'statusList',
          width: 120,
          filters: _userSide.DATAPOINT_STATUS,
          filterMultiple: true,
          checkDisabled: true,
          fixed: 'right',
          render: function render(text, record) {
            var status = record.status;

            var _ref =
                _userSide.DATAPOINT_STATUS.filter(function (v) {
                  return v.value === status;
                })[0] || {},
              statusText = _ref.text;

            var className = status === 1 ? 'green6' : 'black85';
            return /*#__PURE__*/ _react.default.createElement(
              'div',
              {
                style: {
                  width: 100,
                },
                className: className,
              },
              statusText,
            );
          },
        },
      ];
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

  (0, _createClass2.default)(DataPointTable, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.requestList();
      }, // 查询列表
    },
    {
      key: 'requestList',
      value: function requestList() {
        var _this2 = this;

        var _this$state = this.state,
          pagination = _this$state.pagination,
          sorterList = _this$state.sorterList,
          dataName = _this$state.dataName,
          dataCode = _this$state.dataCode,
          position = _this$state.position,
          associationObject = _this$state.associationObject,
          channelList = _this$state.channelList,
          attentionList = _this$state.attentionList,
          tagName = _this$state.tagName,
          statusList = _this$state.statusList;
        var params = {
          dataType: 1,
          pagination: pagination,
          sorterList: sorterList,
        }; // if (this.props.isOnlyNumber) {
        //   params.dataTypeList = [1]
        // }
        // 根据node返回的type决定查询的数据类型

        if (this.props.node.name == 'echarts' || this.props.node.name == 'biciMeasure') {
          params.dataTypeList = [1];
        } else {
          var nodeType = this.props.node.name;

          switch (nodeType) {
            case 'biciPilot':
              // 指示灯
              params.dataTypeList = [1, 2];
              break;

            case 'biciCard':
              params.dataTypeList = [1];
              break;

            default:
          }
        }

        if (dataName) {
          params.dataName = dataName;
        }

        if (dataCode) {
          params.dataCode = dataCode;
        }

        if (position) {
          params.position = position;
        }

        if (associationObject) {
          params.associationObject = associationObject;
        } // params.associationObject=this.associationObject;

        if (channelList && channelList.length) {
          params.channelList = channelList;
        }

        if (attentionList && attentionList.length) {
          params.attentionList = attentionList;
        }

        if (tagName) {
          params.tagName = tagName;
        }

        if (statusList && statusList.length) {
          params.statusList = statusList;
        } // 毒刺,不要csv的数据点

        params.isOtherPointList = [0];
        (0, _api.fetchSearchDataPointManageList)(params).then(function (res) {
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
          disableDataId = _this$props.disableDataId,
          selectedRowKeys = _this$props.selectedRowKeys,
          mode = _this$props.mode,
          source = _this$props.source,
          selectedRows = _this$props.selectedRows; // 组建pagination

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
          scroll: {
            x: 800,
          },
          dataSource: dataList,
          pagination: pagination,
          columns: this.columns(),
          rowSelection: rowSelection,
          onChange: this.handleTableChange,
          onFilterTagsChange: this.handleFilterTagsChange,
        });
      },
    },
  ]);
  return DataPointTable;
})(_react.Component);

exports.default = DataPointTable;
