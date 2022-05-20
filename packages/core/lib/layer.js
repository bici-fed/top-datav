'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Layer = void 0;

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var Layer = /*#__PURE__*/ (function () {
  function Layer(TID) {
    (0, _classCallCheck2.default)(this, Layer);
    this.TID = void 0;
    this.TID = TID;
  }

  (0, _createClass2.default)(Layer, [
    {
      key: 'generateStoreKey',
      value: function generateStoreKey(key) {
        return ''.concat(this.TID, '-').concat(key);
      },
    },
  ]);
  return Layer;
})();

exports.Layer = Layer;
