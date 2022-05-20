'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Observer = void 0;

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _data = require('./data');

var Observer = /*#__PURE__*/ (function () {
  function Observer(id, key, fn) {
    (0, _classCallCheck2.default)(this, Observer);
    this.id = void 0;
    this.key = '';
    this.fn = void 0;
    this.id = id;
    this.key = key;
    this.fn = fn;
  }

  (0, _createClass2.default)(Observer, [
    {
      key: 'unsubscribe',
      value: function unsubscribe() {
        delete _data.observers[this.id];
      },
    },
  ]);
  return Observer;
})();

exports.Observer = Observer;
