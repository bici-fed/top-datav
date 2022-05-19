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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

/**
 * @file 管道画布常量定义
 */
import * as _ from 'lodash'; // 组件卡片宽度高度

export var NODE_WIDTH = 220;
export var NODE_HEIGHT = 60; // 右边菜单栏宽度

export var MENU_WIDTH = 120;
export var MENU_HEIGHT = 196; // 右边抽屉宽度-通用

export var RIGHTDRAWER_WIDTH = 521; // 右边抽屉宽度-调度配置

export var SHECHEDULE_RIGHTDRAWER_WIDTH = 750; // 支持缩放的最大值跟最小值

export var MAX_SCALE = 400;
export var MIN_SCALE = 25; // 组件之间的间距

export var COMPONENT_DISTANCE = 30; // 全屏状态的坐标差,顶部导航到画布的距离

export var fullscreenDiffY = 130; // 顶部导航到画布的固定举例，用于计算Context

export var CONTEXT_HEIGHT_DIFF = 155; // 连接符

export var CONNECTOR = '_'; // 连线可连线的区域

export var LINK_AREA = 30; // 连线不同状态的颜色
// 未连接状态

export var UNLINK = '#52619b'; // 选中状态

export var ACTIVE = '#92ade3'; // 连接状态

export var LINK = '#b4bdcf'; // 管道节点code为30，为固定值

export var operatorTypeCode = 30; // 组件库类型

export var ComponentType;

(function (ComponentType) {
  /** 通用 */
  ComponentType['common'] = 'common';
  /** 自定义 */
  //self = 'self'
})(ComponentType || (ComponentType = {})); // 工业图片属性

export var ImageProps = /*#__PURE__*/ _createClass(function ImageProps() {
  _classCallCheck(this, ImageProps);

  this.name = void 0;
  this.url = void 0;
  this.width = void 0;
  this.height = void 0;
  this.type = void 0;
  this.rotate = void 0;
  this.key = void 0;
});
export var ComponentMap = _defineProperty({}, ComponentType.common, '通用');
export var Stroke = /*#__PURE__*/ _createClass(function Stroke() {
  _classCallCheck(this, Stroke);

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

export var EChart = /*#__PURE__*/ _createClass(function EChart() {
  _classCallCheck(this, EChart);

  this.type = void 0;
  this.component = void 0;
  this.options = void 0;
  this.format = void 0;
  this.stroke = void 0;
});
export var Node = /*#__PURE__*/ _createClass(function Node() {
  _classCallCheck(this, Node);

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
export var NodePanel = /*#__PURE__*/ _createClass(function NodePanel() {
  _classCallCheck(this, NodePanel);

  this.type = void 0;
  this.key = void 0;
  this.name = void 0;
  this.icon = void 0;
  this.disabled = void 0;
}); // group padding

export var GROUP_PADDING = 20; // 连线中的icon，宽高

export var LINKICON_WIDTH = 18;
export var LINKICON_HEIGHT = 18;
export var ComponentKey;

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
})(ComponentKey || (ComponentKey = {})); // 基本组件的基本样式属性

export var BaseCompStyle = /*#__PURE__*/ _createClass(function BaseCompStyle() {
  _classCallCheck(this, BaseCompStyle);

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
export var keyCodeMap = {
  delete: 8,
  copy: 67,
  paste: 86,
};
export var colorList = [
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
export var defaultLineColors = [
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
export var defaultChartColors = [
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
export var DATA_STATUS = {
  '-1': '无数据',
  1: '正常',
  2: '超过正常',
  3: '低于下限',
};
export var lineRangedefaultColor = defaultChartColors.map(function (color) {
  return {
    lineGraphRangeColor: color,
    lineGraphRangeCheck: true,
  };
}); // 实时曲线显示多少个时刻点

export var defaultTimelineShowData = 80;
/** 处理弹窗全屏挂载 */

export function getContainer() {
  var pipelineDoms = document.getElementsByClassName('pipeline-canvas');
  return _.find(pipelineDoms, function (dom) {
    return dom.offsetParent;
  });
}
/**
 * @file 类型定义文件
 */

var MenuPos = /*#__PURE__*/ _createClass(function MenuPos() {
  _classCallCheck(this, MenuPos);

  this.id = void 0;
  this.x = void 0;
  this.y = void 0;
}); // 节点宽高

export var VERTEX_WIDTH = 180;
export var VERTEX_HEIGHT = 32;
export { MenuPos }; // 操作类型

export var OperateType;

(function (OperateType) {
  OperateType['copy'] = 'copy';
  OperateType['delete'] = 'delete';
})(OperateType || (OperateType = {}));

export var BgImagesProps = /*#__PURE__*/ _createClass(function BgImagesProps() {
  _classCallCheck(this, BgImagesProps);

  this.key = void 0;
  this.img = void 0;
});
export var DataVEditorProps = /*#__PURE__*/ _createClass(function DataVEditorProps() {
  _classCallCheck(this, DataVEditorProps);

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
export var DataPointPropsMap = /*#__PURE__*/ _createClass(function DataPointPropsMap() {
  _classCallCheck(this, DataPointPropsMap);

  this.id = void 0;
  this.type = void 0;
  this.dataName = void 0;
  this.intervalTime = void 0;
  this.scopeMin = void 0;
  this.scopeMax = void 0;
});
export var uploadConfigProps = /*#__PURE__*/ _createClass(function uploadConfigProps() {
  _classCallCheck(this, uploadConfigProps);

  this.baseURL = void 0;
  this.self = void 0;
  this.preInstall = void 0;
  this.industry = void 0;
  this.combineCom = void 0;
});
export var UploadURIProps = /*#__PURE__*/ _createClass(function UploadURIProps() {
  _classCallCheck(this, UploadURIProps);

  this.baseURL = void 0;
  this.url = void 0;
  this.token = void 0;
  this.data = void 0;
}); // 基于 jsencrypt 的 RSA 验证私匙

export var privateKey =
  'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCvJGaiiS3oLK9QXgm1jpzKe3g4jKRu0zXWqjaazh9NW13vdMcu3ctKT2+GqV9I7FMBgP69p9LX1hOXoSmagYB5Qku1Vrjx03mjnhcYaCleJzv7vksb8Rsx/Dd8pRCVoYvjsgawYB+oxnvlHKvk7d/XuHCOY02Tod21KpsBQ6Z9AwIDAQAB';
