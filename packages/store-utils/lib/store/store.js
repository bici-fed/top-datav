'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Store = void 0;

var _createForOfIteratorHelper2 = _interopRequireDefault(
  require('@babel/runtime/helpers/createForOfIteratorHelper'),
);

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _data = require('./data');

var _observer = require('./observer');

var _uuid = require('./uuid');

var Store = /*#__PURE__*/ (function () {
  function Store() {
    (0, _classCallCheck2.default)(this, Store);
    this.data = {};
    this.observers = {};
  }

  (0, _createClass2.default)(
    Store,
    [
      {
        key: 'get',
        value: function get(key) {
          return Store.get(key, this.data);
        },
      },
      {
        key: 'set',
        value: function set(key, value) {
          Store.set(key, value, this.data, this.observers);
        },
      },
      {
        key: 'updated',
        value: function updated(key) {
          Store.updated(key, this.data, this.observers);
        },
      },
      {
        key: 'subscribe',
        value: function subscribe(key, fn) {
          return Store.subscribe(key, fn, this.data, this.observers);
        },
      },
    ],
    [
      {
        key: 'get',
        value: function get(key, store) {
          if (!store) {
            store = _data.data;
          }

          if (key === undefined) {
            return store;
          }

          var props = key.split('.');

          var _iterator = (0, _createForOfIteratorHelper2.default)(props),
            _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
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
        },
      },
      {
        key: 'set',
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
        },
      },
      {
        key: 'updated',
        value: function updated(key, store, obs) {
          if (!obs) {
            obs = _data.observers;
          }

          for (var id in obs) {
            if (key.indexOf(obs[id].key) === 0) {
              obs[id].fn(Store.get(obs[id].key, store));
            }
          }
        },
      },
      {
        key: 'subscribe',
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
        },
      },
    ],
  );
  return Store;
})();

exports.Store = Store;
