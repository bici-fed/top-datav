"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DEVICE_STATUS = void 0;

var _react = _interopRequireWildcard(require("react"));

var _biciTransformers = require("bici-transformers");

var _lodash = _interopRequireDefault(require("lodash"));

var _api = require("../data/api");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// 传感器状态
var DEVICE_STATUS = [{
  value: 1,
  text: '正常'
}, {
  value: 2,
  text: '超过上限'
}, {
  value: 3,
  text: '低于下限'
}, {
  value: -1,
  text: '无数据'
}];
exports.DEVICE_STATUS = DEVICE_STATUS;
var initialQueryParams = {
  calculationCode: '',
  dataName: '',
  position: '',
  tagName: '',
  statusList: [],
  sorter: {
    field: '',
    order: '' // ascend, descend

  },
  pagination: {
    current: 1,
    pageSize: 10,
    total: 0
  }
};

var ComplexDataPoint = /*#__PURE__*/function (_PureComponent) {
  _inherits(ComplexDataPoint, _PureComponent);

  var _super = _createSuper(ComplexDataPoint);

  function ComplexDataPoint() {
    var _this;

    _classCallCheck(this, ComplexDataPoint);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = _objectSpread({
      dataList: [],
      sorterList: [],
      total: 0,
      selectedRowKeys: [],
      selectedRows: [],
      doubleArr: []
    }, initialQueryParams);

    _this.getColumns = function () {
      return [{
        title: '计算编号',
        dataIndex: 'calculationCode',
        width: 'lg',
        filterType: 'search',
        handleSubmitSearch: function handleSubmitSearch(val) {
          return _this.handleSearch('calculationCode', val);
        }
      }, {
        title: '数据名称',
        dataIndex: 'dataName',
        width: 'hg',
        filterType: 'search',
        handleSubmitSearch: function handleSubmitSearch(val) {
          return _this.handleSearch('dataName', val);
        }
      }, {
        title: '计算周期(s)',
        dataIndex: 'calculationCycle',
        width: 'sm'
      }, {
        title: '位置',
        dataIndex: 'position',
        width: 'lg',
        filterType: 'search',
        handleSubmitSearch: function handleSubmitSearch(val) {
          return _this.handleSearch('position', val);
        }
      }, {
        title: '范围上下限',
        width: 'lg',
        render: function render(record) {
          var _record$scopeMin = record.scopeMin,
              scopeMin = _record$scopeMin === void 0 ? '' : _record$scopeMin,
              _record$scopeMax = record.scopeMax,
              scopeMax = _record$scopeMax === void 0 ? '' : _record$scopeMax;
          var scope = "".concat(scopeMin, " ~ ").concat(scopeMax);

          var scopeText = /*#__PURE__*/_react["default"].createElement("div", {
            style: {
              width: _biciTransformers.ComplexTable.columnWidth.lg - 16
            }
          }, scope);

          return _lodash["default"].isNumber(scopeMin) || _lodash["default"].isNumber(scopeMax) ? scopeText : '';
        }
      }, {
        title: '标签',
        dataIndex: 'tagName',
        width: 'lg',
        filterType: 'search',
        handleSubmitSearch: function handleSubmitSearch(val) {
          return _this.handleSearch('tagName', val);
        }
      }, {
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
            show = /*#__PURE__*/_react["default"].createElement("span", {
              className: 'green6'
            }, "\u6B63\u5E38");
          } else if (record.status === 2) {
            show = /*#__PURE__*/_react["default"].createElement("span", {
              className: 'red6'
            }, "\u8D85\u8FC7\u4E0A\u9650");
          } else if (record.status === 3) {
            show = /*#__PURE__*/_react["default"].createElement("span", {
              className: 'red6'
            }, "\u4F4E\u4E8E\u4E0B\u9650");
          } else if (record.status === -1) {
            show = /*#__PURE__*/_react["default"].createElement("span", {
              className: 'black85'
            }, "\u65E0\u6570\u636E");
          }

          return /*#__PURE__*/_react["default"].createElement("div", {
            style: {
              width: 80
            }
          }, show);
        }
      }];
    };

    _this.handleSearch = function (key, value) {
      _this.setState(_defineProperty({
        pagination: initialQueryParams.pagination
      }, key, value), function () {
        _this.requestList();
      });
    };

    _this.handleTableChange = function (pagination, filters, sorter) {
      var field = sorter.field,
          order = sorter.order;
      var resultOrder = order === 'ascend' ? 'asc' : 'desc';
      var sorterList = order ? [{
        field: field,
        order: resultOrder
      }] : [];

      _this.setState(_objectSpread(_objectSpread({
        pagination: pagination
      }, filters), {}, {
        sorterList: sorterList
      }), function () {
        return _this.requestList();
      });
    };

    _this.handleFilterTagsChange = function (tagsArr) {
      if (tagsArr === null) {
        _this.setState(_objectSpread({}, initialQueryParams), function () {
          return _this.requestList();
        });
      } else {
        var val = tagsArr.val instanceof Array ? [] : '';

        _this.setState(_defineProperty({}, tagsArr.dataIndex, val), function () {
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

  _createClass(ComplexDataPoint, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.requestList();
    }
  }, {
    key: "requestList",
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
        dataTypeList: [1]
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
        if (res["data"].data) {
          var _res$data$data = res["data"].data,
              list = _res$data$data.list,
              total = _res$data$data.total;

          _this2.setState({
            dataList: list,
            total: total
          });
        }
      });
    }
  }, {
    key: "render",
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
            disabled: disableDataId.includes(record.id)
          };
        },
        onSelect: function onSelect(record, selected) {
          return _this3.props.onSelectRow(record, selected, 'id');
        },
        onSelectAll: function onSelectAll(selected, record, changeRows) {
          return _this3.props.onSelectRow(changeRows, selected, 'id');
        }
      };
      pagination.total = total;
      return /*#__PURE__*/_react["default"].createElement(_biciTransformers.ComplexTable, {
        rowKey: "id",
        minWidth: 800,
        dataSource: dataList,
        pagination: pagination,
        columns: this.getColumns(),
        rowSelection: rowSelection,
        onChange: this.handleTableChange,
        onFilterTagsChange: this.handleFilterTagsChange
      });
    }
  }]);

  return ComplexDataPoint;
}(_react.PureComponent);

exports["default"] = ComplexDataPoint;