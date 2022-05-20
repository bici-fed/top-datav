'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.MQTT = void 0;

var _createForOfIteratorHelper2 = _interopRequireDefault(
  require('@babel/runtime/helpers/createForOfIteratorHelper'),
);

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var mqtt = _interopRequireWildcard(require('mqtt/dist/mqtt.min.js'));

var _models = require('./models');

var MQTT = /*#__PURE__*/ (function () {
  function MQTT(url, options, topics, data) {
    var _this = this;

    (0, _classCallCheck2.default)(this, MQTT);
    this.url = void 0;
    this.options = void 0;
    this.topics = void 0;
    this.data = void 0;
    this.client = void 0;

    this.onmessage = function (topic, message) {
      if (!_this.data.pens.length || !topic) {
        return;
      }

      var _iterator = (0, _createForOfIteratorHelper2.default)(_this.data.pens),
        _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var item = _step.value;

          var _iterator2 = (0, _createForOfIteratorHelper2.default)(item.events),
            _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var event = _step2.value;

              if (event.type === _models.EventType.Mqtt) {
                if (event.name && topic.indexOf(event.name) > -1) {
                  item.doSocketMqtt(event, message.toString(), _this.client);
                }
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    };

    this.url = url;
    this.options = options;
    this.topics = topics;
    this.data = data;
    this.init();
  }

  (0, _createClass2.default)(MQTT, [
    {
      key: 'init',
      value: function init() {
        this.client = mqtt.connect(this.url, this.options);
        this.client.on('message', this.onmessage);

        if (this.topics) {
          this.client.subscribe(this.topics.split(','));
        }
      },
    },
    {
      key: 'publish',
      value: function publish(topic, message) {
        this.client.publish(topic, message);
      },
    },
    {
      key: 'close',
      value: function close() {
        this.client.end();
      },
    },
  ]);
  return MQTT;
})();

exports.MQTT = MQTT;
