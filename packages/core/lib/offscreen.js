'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Offscreen = void 0;

var _createForOfIteratorHelper2 = _interopRequireDefault(
  require('@babel/runtime/helpers/createForOfIteratorHelper'),
);

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _get2 = _interopRequireDefault(require('@babel/runtime/helpers/get'));

var _getPrototypeOf2 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _createSuper2 = _interopRequireDefault(require('@babel/runtime/helpers/createSuper'));

var _storeUtils = require('@top-datav/store-utils');

var _canvas = require('./canvas');

var Offscreen = /*#__PURE__*/ (function (_Canvas) {
  (0, _inherits2.default)(Offscreen, _Canvas);

  var _super = (0, _createSuper2.default)(Offscreen);

  function Offscreen(parentElem) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var TID = arguments.length > 2 ? arguments[2] : undefined;
    (0, _classCallCheck2.default)(this, Offscreen);
    _this = _super.call(this, parentElem, options, TID);
    _this.parentElem = void 0;
    _this.options = void 0;
    _this.activeLayer = void 0;
    _this.hoverLayer = void 0;
    _this.animateLayer = void 0;
    _this.parentElem = parentElem;
    _this.options = options;
    _this.activeLayer = _storeUtils.Store.get(_this.generateStoreKey('LT:ActiveLayer'));
    _this.hoverLayer = _storeUtils.Store.get(_this.generateStoreKey('LT:HoverLayer'));
    _this.animateLayer = _storeUtils.Store.get(_this.generateStoreKey('LT:AnimateLayer'));

    _storeUtils.Store.set(_this.generateStoreKey('LT:offscreen'), _this.canvas);

    return _this;
  }

  (0, _createClass2.default)(Offscreen, [
    {
      key: 'render',
      value: function render() {
        (0, _get2.default)((0, _getPrototypeOf2.default)(Offscreen.prototype), 'render', this).call(
          this,
        );
        var ctx = this.canvas.getContext('2d');
        ctx.strokeStyle = this.options.color;

        var _iterator = (0, _createForOfIteratorHelper2.default)(this.data.pens),
          _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var item = _step.value;

            if (!item.getTID()) {
              item.setTID(this.TID);
            }

            item.render(ctx);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        this.activeLayer.render(ctx);
        this.animateLayer.render(ctx);
        this.hoverLayer.render(ctx);
      },
    },
  ]);
  return Offscreen;
})(_canvas.Canvas);

exports.Offscreen = Offscreen;
