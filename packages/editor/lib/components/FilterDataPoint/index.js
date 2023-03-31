'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/es/modal/style');

var _modal = _interopRequireDefault(require('antd/es/modal'));

var _toConsumableArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/toConsumableArray'),
);

var _objectSpread2 = _interopRequireDefault(require('@babel/runtime/helpers/objectSpread2'));

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _createSuper2 = _interopRequireDefault(require('@babel/runtime/helpers/createSuper'));

require('antd/es/tabs/style');

var _tabs = _interopRequireDefault(require('antd/es/tabs'));

var _react = _interopRequireDefault(require('react'));

var _DataPointTable = _interopRequireDefault(require('./DataPointTable'));

var _ComplexTable = _interopRequireDefault(require('./ComplexTable'));

var _ReactTable = _interopRequireDefault(require('./ReactTable'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _biciTransformers = require('bici-transformer');

/**
 * @file 筛选数据点/复杂感知点/复杂反应堆 ，支持多选单选
 */
var TabPane = _tabs.default.TabPane;
var initialState = {
  selectedRowKeys: [],
  selectedRows: [],
};

var FilterDataPoint = /*#__PURE__*/ (function (_React$PureComponent) {
  (0, _inherits2.default)(FilterDataPoint, _React$PureComponent);

  var _super = (0, _createSuper2.default)(FilterDataPoint);

  function FilterDataPoint() {
    var _this;

    (0, _classCallCheck2.default)(this, FilterDataPoint);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = (0, _objectSpread2.default)({}, initialState);

    _this.handleSelectRow = function (rows, selected, rowKey) {
      var _this$props = _this.props,
        maxSelectLength = _this$props.maxSelectLength,
        mode = _this$props.mode;

      var selectedRowKeys = _this.state.selectedRowKeys.slice();

      var selectedRows = _this.state.selectedRows.slice();

      if (mode === 'radio') {
        _this.setState({
          selectedRows: [rows],
          selectedRowKeys: [rows[rowKey]],
        });
      } else {
        if (!Array.isArray(rows)) {
          if (selected) {
            // 如果是单选的话
            selectedRowKeys.push(rows[rowKey]);
            selectedRows.push(rows);
          } else {
            var index = selectedRowKeys.indexOf(rows[rowKey]);
            selectedRowKeys.splice(index, 1);
            selectedRows.splice(index, 1);
          }

          if (maxSelectLength && selectedRowKeys.length > maxSelectLength) {
            _biciTransformers.biciNotification.info({
              message: '\u6700\u591A\u9009\u62E9'.concat(
                maxSelectLength,
                '\u4E2A\u6570\u636E\u70B9\u54E6\uFF01',
              ),
            });

            return;
          }
        } else {
          // 如果是多选的话
          var indexList = rows.map(function (row) {
            return row[rowKey];
          });

          if (selected) {
            var _selectedRowKeys, _selectedRows;

            (_selectedRowKeys = selectedRowKeys).push.apply(
              _selectedRowKeys,
              (0, _toConsumableArray2.default)(indexList),
            );

            (_selectedRows = selectedRows).push.apply(
              _selectedRows,
              (0, _toConsumableArray2.default)(rows),
            );
          } else {
            var idSet = new Set(_this.state.selectedRowKeys);
            indexList.forEach(function (index) {
              return idSet.delete(index);
            });
            selectedRowKeys = Array.from(idSet);
            selectedRows = [];
            selectedRowKeys.forEach(function (id) {
              var row = _this.state.selectedRows.find(function (row) {
                return row[rowKey] === id;
              });

              row && selectedRows.push(row);
            });
          }

          if (maxSelectLength && selectedRows.length > maxSelectLength) {
            _biciTransformers.biciNotification.info({
              message: '\u6700\u591A\u9009\u62E9'.concat(
                maxSelectLength,
                '\u4E2A\u6570\u636E\u70B9\u54E6\uFF01',
              ),
            });

            return;
          }
        }

        _this.setState({
          selectedRows: selectedRows,
          selectedRowKeys: selectedRowKeys,
        });
      }
    };

    _this.handleOk = function () {
      var _this$state = _this.state,
        selectedRowKeys = _this$state.selectedRowKeys,
        selectedRows = _this$state.selectedRows;
      _this.props.onGetSelectRow && _this.props.onGetSelectRow(selectedRowKeys, selectedRows);

      _this.props.onCancel();
    };

    return _this;
  }

  (0, _createClass2.default)(FilterDataPoint, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.setState({
          selectedRowKeys: this.props.selectedRowKeys,
          selectedRows: this.props.selectedRows,
        });
      },
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.visible !== prevProps.visible) {
          if (
            JSON.stringify(this.props.selectedRowKeys) !==
            JSON.stringify(this.state.selectedRowKeys)
          ) {
            this.setState({
              selectedRowKeys: this.props.selectedRowKeys,
              selectedRows: this.props.selectedRows,
            });
          }
        }
      },
    },
    {
      key: 'render',
      value: function render() {
        var _this$state2 = this.state,
          selectedRowKeys = _this$state2.selectedRowKeys,
          selectedRows = _this$state2.selectedRows;
        var _this$props2 = this.props,
          visible = _this$props2.visible,
          _this$props2$disableS = _this$props2.disableSource,
          disableSource = _this$props2$disableS === void 0 ? [] : _this$props2$disableS,
          mode = _this$props2.mode,
          isOnlyNumber = _this$props2.isOnlyNumber,
          disableDataId = _this$props2.disableDataId;
        var childrenProps = {
          onSelectRow: this.handleSelectRow,
          disableDataId: disableDataId,
          selectedRowKeys: selectedRowKeys,
          selectedRows: selectedRows,
          mode: mode,
        };
        return /*#__PURE__*/ _react.default.createElement(
          _modal.default,
          {
            visible: visible,
            width: document.documentElement.clientWidth - 250,
            bodyStyle: {
              padding: 12,
              height: document.documentElement.clientHeight - 200,
              overflowY: 'auto',
              backgroundColor: 'white',
            },
            style: {
              top: 70,
            },
            onOk: this.handleOk,
            okText: '\u786E\u5B9A',
            cancelText: '\u53D6\u6D88',
            getContainer: function getContainer() {
              return document.querySelector('#editLayout');
            },
            onCancel: this.props.onCancel,
          },
          /*#__PURE__*/ _react.default.createElement(
            _tabs.default,
            {
              defaultActiveKey: 'dataPoint',
            },
            !disableSource.includes('dataPoint') &&
              /*#__PURE__*/ _react.default.createElement(
                TabPane,
                {
                  tab: '\u6570\u636E\u70B9',
                  key: 'dataPoint',
                },
                /*#__PURE__*/ _react.default.createElement(
                  _DataPointTable.default,
                  (0, _objectSpread2.default)(
                    (0, _objectSpread2.default)(
                      {
                        isOnlyNumber: isOnlyNumber,
                      },
                      childrenProps,
                    ),
                    {},
                    {
                      node: this.props.node,
                    },
                  ),
                ),
              ),
            !disableSource.includes('complex') &&
              /*#__PURE__*/ _react.default.createElement(
                TabPane,
                {
                  tab: '\u590D\u6742\u611F\u77E5\u70B9',
                  key: 'complex',
                },
                /*#__PURE__*/ _react.default.createElement(
                  _ComplexTable.default,
                  (0, _objectSpread2.default)(
                    (0, _objectSpread2.default)({}, childrenProps),
                    {},
                    {
                      node: this.props.node,
                    },
                  ),
                ),
              ),
            !disableSource.includes('react') &&
              /*#__PURE__*/ _react.default.createElement(
                TabPane,
                {
                  tab: '\u6570\u5B57\u673A\u7406',
                  key: 'react',
                },
                /*#__PURE__*/ _react.default.createElement(
                  _ReactTable.default,
                  (0, _objectSpread2.default)(
                    (0, _objectSpread2.default)({}, childrenProps),
                    {},
                    {
                      node: this.props.node,
                    },
                  ),
                ),
              ),
          ),
        );
      },
    },
  ]);
  return FilterDataPoint;
})(_react.default.PureComponent);

exports.default = FilterDataPoint;
FilterDataPoint.propTypes = {
  mode: _propTypes.default.string,
  onCancel: _propTypes.default.func.isRequired,
  visible: _propTypes.default.bool.isRequired,
  onGetSelectRow: _propTypes.default.func,
  disableSource: _propTypes.default.array,
  disableDataId: _propTypes.default.array,
  maxSelectLength: _propTypes.default.number,
  selectedRows: _propTypes.default.array,
  selectedRowKeys: _propTypes.default.array,
  isOnlyNumber: _propTypes.default.bool,
  node: _propTypes.default.any, // 选择的节点信息
};
FilterDataPoint.defaultProps = {
  mode: 'radio',
  disableDataId: [],
  maxSelectLength: 0,
  selectedRows: [],
  selectedRowKeys: [],
  isOnlyNumber: true,
};
