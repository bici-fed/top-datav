'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Socket = void 0;

var _typeof2 = _interopRequireDefault(require('@babel/runtime/helpers/typeof'));

var _createForOfIteratorHelper2 = _interopRequireDefault(
  require('@babel/runtime/helpers/createForOfIteratorHelper'),
);

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _models = require('./models');

var _pen = require('./models/pen');

var _canvas = require('./utils/canvas');

var _storeUtils = require('@top-datav/store-utils');

var Socket = /*#__PURE__*/ (function () {
  function Socket(url, data) {
    var _this = this;

    (0, _classCallCheck2.default)(this, Socket);
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

  (0, _createClass2.default)(Socket, [
    {
      key: 'init',
      value: function init() {
        var _this2 = this;

        this.socket = new WebSocket(this.url);
        this.socket.onmessage = this.onmessage;

        this.socket.onclose = function () {
          console.log('Canvas websocket closed and reconneting...');

          _this2.init();
        };
      },
    },
    {
      key: 'pensMqtt',
      value: function pensMqtt(pens, msg) {
        if (!pens) {
          return;
        }

        var _iterator = (0, _createForOfIteratorHelper2.default)(pens),
          _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var item = _step.value;

            var _iterator2 = (0, _createForOfIteratorHelper2.default)(item.events),
              _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
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
      },
    },
    {
      key: 'topologyMqtt',
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

          var _iterator3 = (0, _createForOfIteratorHelper2.default)(props),
            _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
              var prop = _step3.value;

              if (prop.id && prop.key) {
                var pen = (0, _canvas.find)(prop.id, this.data.pens);

                if (!pen) {
                  continue;
                }

                var keys = prop.key.split('.');

                if ((0, _typeof2.default)(prop.value) === 'object') {
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
      },
    },
    {
      key: 'doFn',
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
      },
    },
    {
      key: 'close',
      value: function close() {
        this.socket.onclose = null;
        this.socket.close();
      },
    },
  ]);
  return Socket;
})();

exports.Socket = Socket;
