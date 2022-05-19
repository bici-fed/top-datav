"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Store = void 0;

var _data = require("./data");

var _observer = require("./observer");

var _uuid = require("./uuid");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Store = /*#__PURE__*/function () {
  function Store() {
    _classCallCheck(this, Store);

    this.data = {};
    this.observers = {};
  }

  _createClass(Store, [{
    key: "get",
    value: function get(key) {
      return Store.get(key, this.data);
    }
  }, {
    key: "set",
    value: function set(key, value) {
      Store.set(key, value, this.data, this.observers);
    }
  }, {
    key: "updated",
    value: function updated(key) {
      Store.updated(key, this.data, this.observers);
    }
  }, {
    key: "subscribe",
    value: function subscribe(key, fn) {
      return Store.subscribe(key, fn, this.data, this.observers);
    }
  }], [{
    key: "get",
    value: function get(key, store) {
      if (!store) {
        store = _data.data;
      }

      if (key === undefined) {
        return store;
      }

      var props = key.split('.');

      var _iterator = _createForOfIteratorHelper(props),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var prop = _step.value;
          store = store[prop];

          if (store === undefined) {
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return store;
    }
  }, {
    key: "set",
    value: function set(key, value, store, obs) {
      if (!store) {
        store = _data.data;
      }

      if (!obs) {
        obs = _data.observers;
      }

      var props = key.split('.');
      var _store = store;

      for (var i = 0; i < props.length - 1; ++i) {
        if (!_store[props[i]]) {
          _store[props[i]] = {};
        }

        _store = _store[props[i]];
      }

      _store[props[props.length - 1]] = value;

      for (var id in obs) {
        if (key.indexOf(obs[id].key) === 0) {
          obs[id].fn(Store.get(obs[id].key, store));
        }
      }
    }
  }, {
    key: "updated",
    value: function updated(key, store, obs) {
      if (!obs) {
        obs = _data.observers;
      }

      for (var id in obs) {
        if (key.indexOf(obs[id].key) === 0) {
          obs[id].fn(Store.get(obs[id].key, store));
        }
      }
    }
  }, {
    key: "subscribe",
    value: function subscribe(key, fn, store, obs) {
      if (!obs) {
        obs = _data.observers;
      }

      var id = (0, _uuid.s8)();
      var observer = new _observer.Observer(id, key, fn);
      obs[id] = observer;
      var value = Store.get(key, store);

      if (value !== undefined) {
        fn(value);
      }

      return observer;
    }
  }]);

  return Store;
}();

exports.Store = Store;