'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.fullscreenDiffY =
  exports.defaultTimelineShowData =
  exports.defaultLineColors =
  exports.defaultChartColors =
  exports.colorList =
  exports.VERTEX_WIDTH =
  exports.VERTEX_HEIGHT =
  exports.UploadURIProps =
  exports.UNLINK =
  exports.Stroke =
  exports.SHECHEDULE_RIGHTDRAWER_WIDTH =
  exports.RIGHTDRAWER_WIDTH =
  exports.OperateType =
  exports.NodePanel =
  exports.Node =
  exports.NODE_WIDTH =
  exports.NODE_HEIGHT =
  exports.MenuPos =
  exports.MIN_SCALE =
  exports.MENU_WIDTH =
  exports.MENU_HEIGHT =
  exports.MAX_SCALE =
  exports.LINK_AREA =
  exports.LINKICON_WIDTH =
  exports.LINKICON_HEIGHT =
  exports.LINK =
  exports.ImageProps =
  exports.GROUP_PADDING =
  exports.EChart =
  exports.DataVEditorProps =
  exports.DataPointPropsMap =
  exports.DATA_STATUS =
  exports.ComponentType =
  exports.ComponentMap =
  exports.ComponentKey =
  exports.CONTEXT_HEIGHT_DIFF =
  exports.CONNECTOR =
  exports.COMPONENT_DISTANCE =
  exports.BgImagesProps =
  exports.BaseCompStyle =
  exports.ACTIVE =
    void 0;
exports.getContainer = getContainer;
exports.uploadConfigProps =
  exports.privateKey =
  exports.operatorTypeCode =
  exports.lineRangedefaultColor =
  exports.keyCodeMap =
    void 0;

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _ = _interopRequireWildcard(require('lodash'));

/**
 * @file 管道画布常量定义
 */
// 组件卡片宽度高度
var NODE_WIDTH = 220;
exports.NODE_WIDTH = NODE_WIDTH;
var NODE_HEIGHT = 60; // 右边菜单栏宽度

exports.NODE_HEIGHT = NODE_HEIGHT;
var MENU_WIDTH = 120;
exports.MENU_WIDTH = MENU_WIDTH;
var MENU_HEIGHT = 196; // 右边抽屉宽度-通用

exports.MENU_HEIGHT = MENU_HEIGHT;
var RIGHTDRAWER_WIDTH = 521; // 右边抽屉宽度-调度配置

exports.RIGHTDRAWER_WIDTH = RIGHTDRAWER_WIDTH;
var SHECHEDULE_RIGHTDRAWER_WIDTH = 750; // 支持缩放的最大值跟最小值

exports.SHECHEDULE_RIGHTDRAWER_WIDTH = SHECHEDULE_RIGHTDRAWER_WIDTH;
var MAX_SCALE = 400;
exports.MAX_SCALE = MAX_SCALE;
var MIN_SCALE = 25; // 组件之间的间距

exports.MIN_SCALE = MIN_SCALE;
var COMPONENT_DISTANCE = 30; // 全屏状态的坐标差,顶部导航到画布的距离

exports.COMPONENT_DISTANCE = COMPONENT_DISTANCE;
var fullscreenDiffY = 130; // 顶部导航到画布的固定举例，用于计算Context

exports.fullscreenDiffY = fullscreenDiffY;
var CONTEXT_HEIGHT_DIFF = 155; // 连接符

exports.CONTEXT_HEIGHT_DIFF = CONTEXT_HEIGHT_DIFF;
var CONNECTOR = '_'; // 连线可连线的区域

exports.CONNECTOR = CONNECTOR;
var LINK_AREA = 30; // 连线不同状态的颜色
// 未连接状态

exports.LINK_AREA = LINK_AREA;
var UNLINK = '#52619b'; // 选中状态

exports.UNLINK = UNLINK;
var ACTIVE = '#92ade3'; // 连接状态

exports.ACTIVE = ACTIVE;
var LINK = '#b4bdcf'; // 管道节点code为30，为固定值

exports.LINK = LINK;
var operatorTypeCode = 30; // 组件库类型

exports.operatorTypeCode = operatorTypeCode;
var ComponentType;
exports.ComponentType = ComponentType;

(function (ComponentType) {
  /** 通用 */
  ComponentType['common'] = 'common';
  /** 自定义 */
  //self = 'self'
})(ComponentType || (exports.ComponentType = ComponentType = {})); // 工业图片属性

var ImageProps = /*#__PURE__*/ (0, _createClass2.default)(function ImageProps() {
  (0, _classCallCheck2.default)(this, ImageProps);
  this.name = void 0;
  this.url = void 0;
  this.width = void 0;
  this.height = void 0;
  this.type = void 0;
  this.rotate = void 0;
  this.key = void 0;
});
exports.ImageProps = ImageProps;
var ComponentMap = (0, _defineProperty2.default)({}, ComponentType.common, '通用');
exports.ComponentMap = ComponentMap;
var Stroke = /*#__PURE__*/ (0, _createClass2.default)(function Stroke() {
  (0, _classCallCheck2.default)(this, Stroke);
  this.color = void 0;
  this.width = void 0;
  this.dashArray = void 0;
  this.startMarker = void 0;
  this.endMarker = void 0;
  this.x1 = void 0;
  this.y1 = void 0;
  this.x2 = void 0;
  this.y2 = void 0;
  this.transformOrigin = void 0;
}); // 定义echarts表

exports.Stroke = Stroke;
var EChart = /*#__PURE__*/ (0, _createClass2.default)(function EChart() {
  (0, _classCallCheck2.default)(this, EChart);
  this.type = void 0;
  this.component = void 0;
  this.options = void 0;
  this.format = void 0;
  this.stroke = void 0;
});
exports.EChart = EChart;
var Node = /*#__PURE__*/ (0, _createClass2.default)(function Node() {
  (0, _classCallCheck2.default)(this, Node);
  this.type = void 0;
  this.key = void 0;
  this.name = void 0;
  this.icon = void 0;
  this.x = void 0;
  this.y = void 0;
  this.width = void 0;
  this.height = void 0;
  this.id = void 0;
  this.groupId = void 0;
  this.ref = void 0;
  this.distribute = void 0;
  this.webConfig = void 0;
  this.disabled = void 0;
  this.chart = void 0;
  this.style = void 0;
  this.zIndex = void 0;
  this.rotate = void 0;
  this.url = void 0;
});
exports.Node = Node;
var NodePanel = /*#__PURE__*/ (0, _createClass2.default)(function NodePanel() {
  (0, _classCallCheck2.default)(this, NodePanel);
  this.type = void 0;
  this.key = void 0;
  this.name = void 0;
  this.icon = void 0;
  this.disabled = void 0;
}); // group padding

exports.NodePanel = NodePanel;
var GROUP_PADDING = 20; // 连线中的icon，宽高

exports.GROUP_PADDING = GROUP_PADDING;
var LINKICON_WIDTH = 18;
exports.LINKICON_WIDTH = LINKICON_WIDTH;
var LINKICON_HEIGHT = 18;
exports.LINKICON_HEIGHT = LINKICON_HEIGHT;
var ComponentKey;
exports.ComponentKey = ComponentKey;

(function (ComponentKey) {
  ComponentKey['rect'] = 'rect';
  ComponentKey['rectRadius'] = 'rectRadius';
  ComponentKey['circle'] = 'circle';
  ComponentKey['diamond'] = 'diamond';
  ComponentKey['polygon'] = 'polygon';
  ComponentKey['ellipse'] = 'ellipse';
  ComponentKey['star'] = 'star';
  ComponentKey['text'] = 'text';
  ComponentKey['line'] = 'line';
  ComponentKey['table'] = 'table';
  ComponentKey['time'] = 'time';
})(ComponentKey || (exports.ComponentKey = ComponentKey = {})); // 基本组件的基本样式属性

var BaseCompStyle = /*#__PURE__*/ (0, _createClass2.default)(function BaseCompStyle() {
  (0, _classCallCheck2.default)(this, BaseCompStyle);
  this.left = void 0;
  this.top = void 0;
  this.width = void 0;
  this.height = void 0;
  this.fontFamily = void 0;
  this.fontSize = void 0;
  this.textAlign = void 0;
  this.verticalAlign = void 0;
  this.fontWeight = void 0;
  this.textDecoration = void 0;
  this.backgroundColor = void 0;
  this.fontStyle = void 0;
  this.opacity = void 0;
  this.borderSize = void 0;
  this.borderStyle = void 0;
  this.borderWidth = void 0;
  this.borderColor = void 0;
  this.color = void 0;
});
exports.BaseCompStyle = BaseCompStyle;
var keyCodeMap = {
  delete: 8,
  copy: 67,
  paste: 86,
};
exports.keyCodeMap = keyCodeMap;
var colorList = [
  'rgba(156, 25, 25, 1)',
  'rgba(65, 117, 5, 1)',
  'rgba(144, 19, 254, 1)',
  'rgba(139, 87, 42, 1)',
  'rgba(208, 2, 27, 1)',
  'rgba(126, 211, 33, 1)',
  'rgba(45, 65, 181, 1)',
  'rgba(179, 156, 156, 1)',
  'rgba(137, 116, 116, 1)',
  'rgba(97, 147, 39, 1)',
];
exports.colorList = colorList;
var defaultLineColors = [
  '#E63C5F',
  '#6236FF',
  '#157EFB',
  '#1EC622',
  '#F7B500',
  '#673D3D',
  '#44D7B6',
  '#71A3CB',
  '#766863',
  '#FA6400',
];
exports.defaultLineColors = defaultLineColors;
var defaultChartColors = [
  '#157EFB',
  '#F7B500',
  '#1EC622',
  '#E63C5F',
  '#44D7B6',
  '#6236FF',
  '#673D3D',
  '#71A3CB',
  '#766863',
  '#FA6400',
];
exports.defaultChartColors = defaultChartColors;
var DATA_STATUS = {
  '-1': '无数据',
  1: '正常',
  2: '超过正常',
  3: '低于下限',
};
exports.DATA_STATUS = DATA_STATUS;
var lineRangedefaultColor = defaultChartColors.map(function (color) {
  return {
    lineGraphRangeColor: color,
    lineGraphRangeCheck: true,
  };
}); // 实时曲线显示多少个时刻点

exports.lineRangedefaultColor = lineRangedefaultColor;
var defaultTimelineShowData = 80;
/** 处理弹窗全屏挂载 */

exports.defaultTimelineShowData = defaultTimelineShowData;

function getContainer() {
  var pipelineDoms = document.getElementsByClassName('pipeline-canvas');
  return _.find(pipelineDoms, function (dom) {
    return dom.offsetParent;
  });
}
/**
 * @file 类型定义文件
 */

var MenuPos = /*#__PURE__*/ (0, _createClass2.default)(function MenuPos() {
  (0, _classCallCheck2.default)(this, MenuPos);
  this.id = void 0;
  this.x = void 0;
  this.y = void 0;
}); // 节点宽高

exports.MenuPos = MenuPos;
var VERTEX_WIDTH = 180;
exports.VERTEX_WIDTH = VERTEX_WIDTH;
var VERTEX_HEIGHT = 32;
exports.VERTEX_HEIGHT = VERTEX_HEIGHT;
// 操作类型
var OperateType;
exports.OperateType = OperateType;

(function (OperateType) {
  OperateType['copy'] = 'copy';
  OperateType['delete'] = 'delete';
})(OperateType || (exports.OperateType = OperateType = {}));

var BgImagesProps = /*#__PURE__*/ (0, _createClass2.default)(function BgImagesProps() {
  (0, _classCallCheck2.default)(this, BgImagesProps);
  this.key = void 0;
  this.img = void 0;
});
exports.BgImagesProps = BgImagesProps;
var DataVEditorProps = /*#__PURE__*/ (0, _createClass2.default)(function DataVEditorProps() {
  (0, _classCallCheck2.default)(this, DataVEditorProps);
  this.apiURL = void 0;
  this.token = void 0;
  this.onEditorSaveCb = void 0;
  this.selfIndustrialLibrary = void 0;
  this.preInstallBgImages = void 0;
  this.editorData = void 0;
  this.boardData = void 0;
  this.onPreview = void 0;
  this.onPoweroff = void 0;
  this.autoSaveInterval = void 0;
  this.onExtraSetting = void 0;
  this.industrialLibrary = void 0;
  this.uploadConfig = void 0;
  this.websocketConf = void 0;
  this.history = void 0;
  this.key = void 0;
  this.ref = void 0;
  this.onAddDataPoint = void 0;
  this.onAddVedioSource = void 0;
  this.dataPointPropsMap = void 0;
});
exports.DataVEditorProps = DataVEditorProps;
var DataPointPropsMap = /*#__PURE__*/ (0, _createClass2.default)(function DataPointPropsMap() {
  (0, _classCallCheck2.default)(this, DataPointPropsMap);
  this.id = void 0;
  this.type = void 0;
  this.dataName = void 0;
  this.intervalTime = void 0;
  this.scopeMin = void 0;
  this.scopeMax = void 0;
});
exports.DataPointPropsMap = DataPointPropsMap;
var uploadConfigProps = /*#__PURE__*/ (0, _createClass2.default)(function uploadConfigProps() {
  (0, _classCallCheck2.default)(this, uploadConfigProps);
  this.baseURL = void 0;
  this.self = void 0;
  this.preInstall = void 0;
  this.industry = void 0;
  this.combineCom = void 0;
});
exports.uploadConfigProps = uploadConfigProps;
var UploadURIProps = /*#__PURE__*/ (0, _createClass2.default)(function UploadURIProps() {
  (0, _classCallCheck2.default)(this, UploadURIProps);
  this.baseURL = void 0;
  this.url = void 0;
  this.token = void 0;
  this.data = void 0;
}); // 基于 jsencrypt 的 RSA 验证私匙

exports.UploadURIProps = UploadURIProps;
var privateKey =
  'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCvJGaiiS3oLK9QXgm1jpzKe3g4jKRu0zXWqjaazh9NW13vdMcu3ctKT2+GqV9I7FMBgP69p9LX1hOXoSmagYB5Qku1Vrjx03mjnhcYaCleJzv7vksb8Rsx/Dd8pRCVoYvjsgawYB+oxnvlHKvk7d/XuHCOY02Tod21KpsBQ6Z9AwIDAQAB';
exports.privateKey = privateKey;
