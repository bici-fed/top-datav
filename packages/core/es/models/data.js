function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import { Node } from './node';
import { Line } from './line';
import { Lock } from './status';
import { s8 } from '../utils';
export var TopologyData = /*#__PURE__*/_createClass(function TopologyData(json) {
  _classCallCheck(this, TopologyData);

  this.pens = [];
  this.lineName = 'curve';
  this.fromArrow = '';
  this.toArrow = 'triangleSolid';
  this.lineWidth = void 0;
  this.scale = 1;
  this.locked = Lock.None;
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
    clientId: s8()
  };
  this.mqttTopics = void 0;
  this.events = void 0;
  this.manualCps = void 0;
  this.tooltip = void 0;
  this.data = void 0;
  this.property = void 0;

  if (json) {
    this.pens = [];

    var _iterator = _createForOfIteratorHelper(json.pens),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;

        if (item.from) {
          this.pens.push(new Line(item));
        } else {
          this.pens.push(new Node(item));
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
    this.locked = json.locked || Lock.None;
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

      if (_typeof(json.mqttOptions) === 'object') {
        opts = JSON.stringify(json.mqttOptions);
      } else {
        opts = json.mqttOptions + '';
      }

      this.mqttOptions = JSON.parse(opts);
    } else {
      this.mqttOptions = {
        clientId: s8()
      };
    }

    this.mqttTopics = json.mqttTopics;

    if (_typeof(json.data) === 'object') {
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
      clientId: s8()
    };
  }
});