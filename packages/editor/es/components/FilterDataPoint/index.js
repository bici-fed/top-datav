function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

/**
 * @file 筛选数据点/复杂感知点/复杂反应堆 ，支持多选单选
 */
import React from 'react';
import { Tabs, Modal } from 'antd';
import DataPointTable from './DataPointTable';
import ComplexTable from './ComplexTable';
import ReactTable from './ReactTable';
import PropsTypes from 'prop-types';
import { biciNotification } from 'bici-transformers';
var TabPane = Tabs.TabPane;
var initialState = {
  selectedRowKeys: [],
  selectedRows: []
};

var FilterDataPoint = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(FilterDataPoint, _React$PureComponent);

  var _super = _createSuper(FilterDataPoint);

  function FilterDataPoint() {
    var _this;

    _classCallCheck(this, FilterDataPoint);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = _objectSpread({}, initialState);

    _this.handleSelectRow = function (rows, selected, rowKey) {
      var _this$props = _this.props,
          maxSelectLength = _this$props.maxSelectLength,
          mode = _this$props.mode;

      var selectedRowKeys = _this.state.selectedRowKeys.slice();

      var selectedRows = _this.state.selectedRows.slice();

      if (mode === 'radio') {
        _this.setState({
          selectedRows: [rows],
          selectedRowKeys: [rows[rowKey]]
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
            biciNotification.info({
              message: "\u6700\u591A\u9009\u62E9".concat(maxSelectLength, "\u4E2A\u6570\u636E\u70B9\u54E6\uFF01")
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

            (_selectedRowKeys = selectedRowKeys).push.apply(_selectedRowKeys, _toConsumableArray(indexList));

            (_selectedRows = selectedRows).push.apply(_selectedRows, _toConsumableArray(rows));
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
            biciNotification.info({
              message: "\u6700\u591A\u9009\u62E9".concat(maxSelectLength, "\u4E2A\u6570\u636E\u70B9\u54E6\uFF01")
            });
            return;
          }
        }

        _this.setState({
          selectedRows: selectedRows,
          selectedRowKeys: selectedRowKeys
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

  _createClass(FilterDataPoint, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        selectedRowKeys: this.props.selectedRowKeys,
        selectedRows: this.props.selectedRows
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.visible !== prevProps.visible) {
        if (JSON.stringify(this.props.selectedRowKeys) !== JSON.stringify(this.state.selectedRowKeys)) {
          this.setState({
            selectedRowKeys: this.props.selectedRowKeys,
            selectedRows: this.props.selectedRows
          });
        }
      }
    }
  }, {
    key: "render",
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
        mode: mode
      };
      return /*#__PURE__*/React.createElement(Modal, {
        visible: visible,
        width: document.documentElement.clientWidth - 250,
        bodyStyle: {
          padding: 12,
          height: document.documentElement.clientHeight - 200,
          overflowY: 'auto',
          backgroundColor: 'white'
        },
        style: {
          top: 70
        },
        onOk: this.handleOk,
        okText: "\u786E\u5B9A",
        cancelText: "\u53D6\u6D88",
        getContainer: function getContainer() {
          return document.querySelector('#editLayout');
        },
        onCancel: this.props.onCancel
      }, /*#__PURE__*/React.createElement(Tabs, {
        defaultActiveKey: 'dataPoint'
      }, !disableSource.includes('dataPoint') && /*#__PURE__*/React.createElement(TabPane, {
        tab: "\u6570\u636E\u70B9",
        key: 'dataPoint'
      }, /*#__PURE__*/React.createElement(DataPointTable, _objectSpread(_objectSpread({
        isOnlyNumber: isOnlyNumber
      }, childrenProps), {}, {
        node: this.props.node
      }))), !disableSource.includes('complex') && /*#__PURE__*/React.createElement(TabPane, {
        tab: "\u590D\u6742\u611F\u77E5\u70B9",
        key: 'complex'
      }, /*#__PURE__*/React.createElement(ComplexTable, _objectSpread(_objectSpread({}, childrenProps), {}, {
        node: this.props.node
      }))), !disableSource.includes('react') && /*#__PURE__*/React.createElement(TabPane, {
        tab: "\u6570\u5B57\u673A\u7406",
        key: 'react'
      }, /*#__PURE__*/React.createElement(ReactTable, _objectSpread(_objectSpread({}, childrenProps), {}, {
        node: this.props.node
      })))));
    }
  }]);

  return FilterDataPoint;
}(React.PureComponent);

FilterDataPoint.propTypes = {
  mode: PropsTypes.string,
  onCancel: PropsTypes.func.isRequired,
  visible: PropsTypes.bool.isRequired,
  onGetSelectRow: PropsTypes.func,
  disableSource: PropsTypes.array,
  disableDataId: PropsTypes.array,
  maxSelectLength: PropsTypes.number,
  selectedRows: PropsTypes.array,
  selectedRowKeys: PropsTypes.array,
  isOnlyNumber: PropsTypes.bool,
  node: PropsTypes.any // 选择的节点信息

};
FilterDataPoint.defaultProps = {
  mode: 'radio',
  disableDataId: [],
  maxSelectLength: 0,
  selectedRows: [],
  selectedRowKeys: [],
  isOnlyNumber: true
};
export { FilterDataPoint as default };