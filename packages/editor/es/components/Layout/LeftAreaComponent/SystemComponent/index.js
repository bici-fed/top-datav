"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _indexModule = _interopRequireDefault(require("../../index.module.less"));

var _iconConfig = _interopRequireDefault(require("../../../config/iconConfig"));

var _config = require("../../../config/config");

var _ = _interopRequireWildcard(require("lodash"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Panel = _antd.Collapse.Panel;

var Layout = function Layout(_ref) {
  var Tools = _ref.Tools,
      onDrag = _ref.onDrag,
      toolConfig = _ref.toolConfig;
  return /*#__PURE__*/_react["default"].createElement(_antd.Collapse, {
    defaultActiveKey: ['0'],
    expandIconPosition: "right",
    ghost: false,
    bordered: false
  }, Tools.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(Panel, {
      header: item.group,
      key: index
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: _indexModule["default"].button
    }, /*#__PURE__*/_react["default"].createElement(_antd.Row, {
      align: "middle"
    }, Object.keys(item.children).map(function (itm, idx) {
      var conf = toolConfig || _config.defaultToolsConfig;

      var hasCom = _.lastIndexOf(conf, itm);

      if (hasCom == -1) {
        return null;
      }

      var it = item.children[itm];
      return /*#__PURE__*/_react["default"].createElement(_antd.Col, {
        span: 8,
        key: idx,
        style: {
          marginBottom: 20,
          textAlign: 'center'
        }
      }, /*#__PURE__*/_react["default"].createElement("a", {
        title: it.name,
        draggable: true,
        href: "#",
        onClick: function onClick(e) {
          return e.preventDefault();
        },
        onDragStart: function onDragStart(ev) {
          return onDrag(ev, it);
        }
      }, /*#__PURE__*/_react["default"].createElement(_iconConfig["default"], {
        type: it.icon,
        style: {
          fontSize: 30,
          width: 53,
          height: 53,
          lineHeight: '53px'
        }
      }), /*#__PURE__*/_react["default"].createElement("span", {
        style: {
          overflow: 'hidden',
          display: 'block',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis'
        }
      }, it.name)));
    }))));
  }));
};

var _default = Layout;
exports["default"] = _default;