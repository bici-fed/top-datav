"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Socket = void 0;

var _models = require("./models");

var _pen = require("./models/pen");

var _canvas = require("./utils/canvas");

var _storeUtils = require("@top-datav/store-utils");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Socket = /*#__PURE__*/function () {
  function Socket(url, data) {
    var _this = this;

    _classCallCheck(this, Socket);

    this.url = void 0;
    this.data = void 0;
    this.socket = void 0;
    this.fns = {};

    this.onmessage = function (e) {
      if (!_this.data.pens.length || !e || !e.data) {
        return;
      }

      var msg;

      try {
        msg = JSON.parse(e.data);
      } catch (error) {
        msg = e.data;
      }

      if (_this.data.events) {
        _this.data.events.forEach(function (event, index) {
          if (event.type === _models.EventType.WebSocket) {
            if (event.name && event.name === msg.event) {
              _this.topologyMqtt(index, event, msg.data, _this.socket);
            } else if (!event.name && msg) {
              _this.topologyMqtt(index, event, msg, _this.socket);
            }
          }
        });
      }

      _this.pensMqtt(_this.data.pens, msg);
    };

    this.url = url;
    this.data = data;
    this.init();
  }

  _createClass(Socket, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      this.socket = new WebSocket(this.url);
      this.socket.onmessage = this.onmessage;

      this.socket.onclose = function () {
        console.log('Canvas websocket closed and reconneting...');

        _this2.init();
      };
    }
  }, {
    key: "pensMqtt",
    value: function pensMqtt(pens, msg) {
      if (!pens) {
        return;
      }

      var _iterator = _createForOfIteratorHelper(pens),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;

          var _iterator2 = _createForOfIteratorHelper(item.events),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var event = _step2.value;

              if (event.type === _models.EventType.WebSocket) {
                if (event.name && event.name === msg.event) {
                  item.doSocketMqtt(event, msg.data, this.socket);
                } else if (!event.name && msg) {
                  item.doSocketMqtt(event, msg, this.socket);
                }
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          if (item.type === _pen.PenType.Node) {
            this.pensMqtt(item.children, msg);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "topologyMqtt",
    value: function topologyMqtt(index, item, msg, client) {
      if (item.action === _models.EventAction.Function) {
        this.doFn(index, item.value, msg || item.params, client);
      } else if (item.action === _models.EventAction.WindowFn) {
        window[item.value](msg || item.params, client);
      } else if (item.action === _models.EventAction.SetProps) {
        var props = [];
        var data = msg;

        if (typeof msg === 'string') {
          try {
            data = JSON.parse(msg);
          } catch (error) {}
        }

        if (Array.isArray(data)) {
          props = data;
        }

        var _iterator3 = _createForOfIteratorHelper(props),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var prop = _step3.value;

            if (prop.id && prop.key) {
              var pen = (0, _canvas.find)(prop.id, this.data.pens);

              if (!pen) {
                continue;
              }

              var keys = prop.key.split('.');

              if (_typeof(prop.value) === 'object') {
                if (keys[1]) {
                  pen[keys[0]][keys[1]] = Object.assign(pen[prop.key], prop.value);
                } else {
                  pen[keys[0]] = Object.assign(pen[prop.key], prop.value);
                }
              } else {
                if (keys[1]) {
                  pen[keys[0]][keys[1]] = prop.value;
                } else {
                  pen[keys[0]] = prop.value;
                }
              }
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        if (item.params || item.params === undefined) {
          _storeUtils.Store.set('LT:render', true);
        }
      }
    }
  }, {
    key: "doFn",
    value: function doFn(index, fn, params, client) {
      var func = this.fns[index];

      if (!func) {
        if (client) {
          func = new Function('pen', 'params', 'client', fn);
        } else {
          func = new Function('pen', 'params', fn);
        }

        this.fns[index] = func;
      }

      func(params, client);
    }
  }, {
    key: "close",
    value: function close() {
      this.socket.onclose = null;
      this.socket.close();
    }
  }]);

  return Socket;
}();

exports.Socket = Socket;