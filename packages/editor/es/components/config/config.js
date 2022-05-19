'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.defaultToolsConfig = exports.Tools = void 0;

var _rectangle = _interopRequireDefault(require('./setting/rectangle'));

var _circle = _interopRequireDefault(require('./setting/circle'));

var _text = _interopRequireDefault(require('./setting/text'));

var _biciTimer = _interopRequireDefault(require('./setting/biciTimer'));

var _biciVarer = _interopRequireDefault(require('./setting/biciVarer'));

var _biciCard = _interopRequireDefault(require('./setting/biciCard'));

var _biciPilot = _interopRequireDefault(require('./setting/biciPilot'));

var _line = _interopRequireDefault(require('./setting/line'));

var _dataTable = _interopRequireDefault(require('./setting/dataTable'));

var _webPage = _interopRequireDefault(require('./setting/webPage'));

var _liveVideo = _interopRequireDefault(require('./setting/liveVideo'));

var _groupBar = _interopRequireDefault(require('./setting/groupBar'));

var _verticalBar = _interopRequireDefault(require('./setting/verticalBar'));

var _stackBar = _interopRequireDefault(require('./setting/stackBar'));

var _horizontalBar = _interopRequireDefault(require('./setting/horizontalBar'));

var _circleAndPie = _interopRequireDefault(require('./setting/circleAndPie'));

var _gauge = _interopRequireDefault(require('./setting/gauge'));

var _biciMeasure = _interopRequireDefault(require('./setting/biciMeasure'));

var _timeLine = _interopRequireDefault(require('./setting/timeLine'));

var _video = _interopRequireDefault(require('./setting/video'));

var _dateFormat = _interopRequireDefault(require('./setting/dateFormat'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// biciText=数据统计
// biciCard2=数据卡片2 华夏演示专用
var defaultToolsConfig = [
  'rectangle',
  'circle',
  'text',
  'biciTimer',
  'biciVarer',
  'biciPilot',
  'biciText',
  'biciCard',
  'biciCard2',
  'line',
  'webPage',
  'dataTable',
  'liveVideo',
  'video',
  'groupBar',
  'verticalBar',
  'stackBar',
  'horizontalBar',
  'circleAndPie',
  'gauge',
  'biciMeasure',
  'timeLine',
  'gbImage',
  'productionStatus',
  'pointEnergyCarousel',
  'dateFormat',
];
exports.defaultToolsConfig = defaultToolsConfig;
var Tools = [
  {
    group: '通用组件',
    children: {
      rectangle: _rectangle['default'],
      circle: _circle['default'],
      text: _text['default'],
      biciTimer: _biciTimer['default'],
      dateFormat: _dateFormat['default'],
      biciVarer: _biciVarer['default'],
      biciCard: _biciCard['default'],
      biciPilot: _biciPilot['default'],
      line: _line['default'],
      dataTable: _dataTable['default'],
      webPage: _webPage['default'],
      liveVideo: _liveVideo['default'],
      video: _video['default'],
    },
  },
  {
    group: '图表控件',
    children: {
      groupBar: _groupBar['default'],
      verticalBar: _verticalBar['default'],
      stackBar: _stackBar['default'],
      horizontalBar: _horizontalBar['default'],
      circleAndPie: _circleAndPie['default'],
      gauge: _gauge['default'],
      biciMeasure: _biciMeasure['default'],
      timeLine: _timeLine['default'],
    },
  },
];
exports.Tools = Tools;
