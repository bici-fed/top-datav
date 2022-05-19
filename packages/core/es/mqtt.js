function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = (typeof Symbol !== 'undefined' && o[Symbol.iterator]) || o['@@iterator'];
  if (!it) {
    if (
      Array.isArray(o) ||
      (it = _unsupportedIterableToArray(o)) ||
      (allowArrayLike && o && typeof o.length === 'number')
    ) {
      if (it) o = it;
      var i = 0;
      var F = function F() {};
      return {
        s: F,
        n: function n() {
          if (i >= o.length) return { done: true };
          return { done: false, value: o[i++] };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F,
      };
    }
    throw new TypeError(
      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
    );
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    },
  };
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
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

import * as mqtt from 'mqtt/dist/mqtt.min.js';
import { EventType } from './models';
export var MQTT = /*#__PURE__*/ (function () {
  function MQTT(url, options, topics, data) {
    var _this = this;

    _classCallCheck(this, MQTT);

    this.url = void 0;
    this.options = void 0;
    this.topics = void 0;
    this.data = void 0;
    this.client = void 0;

    this.onmessage = function (topic, message) {
      if (!_this.data.pens.length || !topic) {
        return;
      }

      var _iterator = _createForOfIteratorHelper(_this.data.pens),
        _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var item = _step.value;

          var _iterator2 = _createForOfIteratorHelper(item.events),
            _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var event = _step2.value;

              if (event.type === EventType.Mqtt) {
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

  _createClass(MQTT, [
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
