'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.TopologyData = void 0;

var _typeof2 = _interopRequireDefault(require('@babel/runtime/helpers/typeof'));

var _createForOfIteratorHelper2 = _interopRequireDefault(
  require('@babel/runtime/helpers/createForOfIteratorHelper'),
);

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _node = require('./node');

var _line = require('./line');

var _status = require('./status');

var _utils = require('../utils');

var TopologyData = /*#__PURE__*/ (0, _createClass2.default)(function TopologyData(json) {
  (0, _classCallCheck2.default)(this, TopologyData);
  this.pens = [];
  this.lineName = 'curve';
  this.fromArrow = '';
  this.toArrow = 'triangleSolid';
  this.lineWidth = void 0;
  this.scale = 1;
  this.locked = _status.Lock.None;
  this.bkImage = void 0;
  this.bkColor = void 0;
  this.grid = void 0;
  this.gridColor = void 0;
  this.gridSize = void 0;
  this.width = void 0;
  this.height = void 0;
  this.rule = void 0;
  this.ruleColor = void 0;
  this.websocket = void 0;
  this.mqttUrl = void 0;
  this.mqttOptions = {
    clientId: (0, _utils.s8)(),
  };
  this.mqttTopics = void 0;
  this.events = void 0;
  this.manualCps = void 0;
  this.tooltip = void 0;
  this.data = void 0;
  this.property = void 0;

  if (json) {
    this.pens = [];

    var _iterator = (0, _createForOfIteratorHelper2.default)(json.pens),
      _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var item = _step.value;

        if (item.from) {
          this.pens.push(new _line.Line(item));
        } else {
          this.pens.push(new _node.Node(item));
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    this.lineName = json.lineName || 'curve';
    this.fromArrow = json.fromArrow || '';
    this.toArrow = json.toArrow || 'triangleSolid';
    this.scale = json.scale || 1;
    this.locked = json.locked || _status.Lock.None;
    this.bkImage = json.bkImage;
    this.bkColor = json.bkColor;
    this.grid = json.grid;
    this.manualCps = json.manualCps;
    this.width = json.width;
    this.height = json.height;
    this.property = json.property;
    this.websocket = json.websocket;
    this.mqttUrl = json.mqttUrl;

    if (json.mqttOptions) {
      var opts = '';

      if ((0, _typeof2.default)(json.mqttOptions) === 'object') {
        opts = JSON.stringify(json.mqttOptions);
      } else {
        opts = json.mqttOptions + '';
      }

      this.mqttOptions = JSON.parse(opts);
    } else {
      this.mqttOptions = {
        clientId: (0, _utils.s8)(),
      };
    }

    this.mqttTopics = json.mqttTopics;

    if ((0, _typeof2.default)(json.data) === 'object') {
      this.data = JSON.parse(JSON.stringify(json.data));
    } else {
      this.data = json.data || '';
    }

    if (json.events) {
      this.events = json.events;
    }
  }

  if (!this.mqttOptions) {
    this.mqttOptions = {
      clientId: (0, _utils.s8)(),
    };
  }
});
exports.TopologyData = TopologyData;
