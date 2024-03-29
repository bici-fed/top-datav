function _typeof(obj) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              'function' == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          }),
    _typeof(obj)
  );
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, 'prototype', { writable: false });
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  Object.defineProperty(subClass, 'prototype', { writable: false });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError('Derived constructors may only return object or undefined');
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

/**
 * 用户侧：数字机理 > 列表
 */
import React, { Component } from 'react';
import { ComplexTable } from 'bici-transformer';
import { fetchSearchReactStackList } from '../data/api';
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
  _inherits(ReactTable, _Component);

  var _super = _createSuper(ReactTable);

  function ReactTable() {
    var _this;

    _classCallCheck(this, ReactTable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = _objectSpread(
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
        _defineProperty(
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
        _objectSpread(
          _objectSpread(
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
              show = /*#__PURE__*/ React.createElement(
                'span',
                {
                  className: 'green6',
                },
                '\u7B26\u5408',
              );
            } else if (record.status === -1) {
              show = /*#__PURE__*/ React.createElement(
                'span',
                {
                  className: 'red6',
                },
                '\u4E0D\u7B26\u5408',
              );
            } else if (record.status === 2) {
              show = /*#__PURE__*/ React.createElement(
                'span',
                {
                  className: 'black45',
                },
                '\u672A\u53CD\u5E94',
              );
            } else if (record.status === 3) {
              show = /*#__PURE__*/ React.createElement('span', null, '\u65E0\u6570\u636E');
            }

            return /*#__PURE__*/ React.createElement(
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

  _createClass(ReactTable, [
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

        fetchSearchReactStackList(params).then(function (res) {
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
        return /*#__PURE__*/ React.createElement(ComplexTable, {
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
})(Component);

export { ReactTable as default };
