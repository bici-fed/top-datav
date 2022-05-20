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

var _biciTransformers = require('bici-transformers');

var _api = require('../data/api');

/**
 * 用户侧：数字机理 > 列表
 */
var initialQueryParams = {
  code: '',
  position: '',
  name: '',
  period: '',
  source: '',
  statusList: [],
  pagination: {
    current: 1,
    pageSize: 10,
    total: 0,
  },
  sorter: {
    field: '',
    order: '', // ascend, descend
  },
};

var ReactTable = /*#__PURE__*/ (function (_Component) {
  (0, _inherits2.default)(ReactTable, _Component);

  var _super = (0, _createSuper2.default)(ReactTable);

  function ReactTable() {
    var _this;

    (0, _classCallCheck2.default)(this, ReactTable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = (0, _objectSpread2.default)(
      {
        dataList: [],
        total: 0,
        sorterList: [],
        selectedRowKeys: [],
        selectedRows: [],
      },
      initialQueryParams,
    );

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

    _this.columns = function () {
      return [
        {
          title: '数字机理编号',
          dataIndex: 'code',
          width: 'lg',
          filterType: 'search',
          handleSubmitSearch: function handleSubmitSearch(val) {
            return _this.handleSearch('code', val);
          },
        },
        {
          title: '数字机理名称',
          dataIndex: 'name',
          width: 'nm',
          filterType: 'search',
          handleSubmitSearch: function handleSubmitSearch(val) {
            return _this.handleSearch('name', val);
          },
        },
        {
          title: '数字机理周期(s)',
          dataIndex: 'period',
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
          title: '数字机理源',
          dataIndex: 'source',
          width: 'lg',
          filterType: 'search',
          handleSubmitSearch: function handleSubmitSearch(val) {
            return _this.handleSearch('source', val);
          },
        },
        {
          title: '状态',
          dataIndex: 'statusList',
          width: 120,
          filters: [
            {
              value: 1,
              text: '符合',
            },
            {
              value: -1,
              text: '不符合',
            },
            {
              value: 2,
              text: '未反应',
            },
            {
              value: 3,
              text: '无数据',
            },
          ],
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
                '\u7B26\u5408',
              );
            } else if (record.status === -1) {
              show = /*#__PURE__*/ _react.default.createElement(
                'span',
                {
                  className: 'red6',
                },
                '\u4E0D\u7B26\u5408',
              );
            } else if (record.status === 2) {
              show = /*#__PURE__*/ _react.default.createElement(
                'span',
                {
                  className: 'black45',
                },
                '\u672A\u53CD\u5E94',
              );
            } else if (record.status === 3) {
              show = /*#__PURE__*/ _react.default.createElement('span', null, '\u65E0\u6570\u636E');
            }

            return /*#__PURE__*/ _react.default.createElement(
              'div',
              {
                style: {
                  width: 100,
                },
              },
              show,
            );
          },
        },
      ];
    };

    return _this;
  }

  (0, _createClass2.default)(ReactTable, [
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
          code = _this$state.code,
          name = _this$state.name,
          position = _this$state.position,
          period = _this$state.period,
          source = _this$state.source,
          statusList = _this$state.statusList;
        var params = {
          pagination: pagination,
          sorterList: sorterList,
          dataTypeList: [1],
        };

        if (code) {
          params.code = code;
        }

        if (name) {
          params.name = name;
        }

        if (position) {
          params.position = position;
        }

        if (period) {
          params.period = period;
        }

        if (source) {
          params.source = source;
        }

        if (statusList && statusList.length) {
          params.statusList = statusList;
        }

        (0, _api.fetchSearchReactStackList)(params).then(function (res) {
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
          disableDataId = _this$props.disableDataId;
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
          columns: this.columns(),
          rowSelection: rowSelection,
          onChange: this.handleTableChange,
          onFilterTagsChange: this.handleFilterTagsChange,
        });
      },
    },
  ]);
  return ReactTable;
})(_react.Component);

exports.default = ReactTable;
