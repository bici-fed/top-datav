'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Canvas = void 0;

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _createSuper2 = _interopRequireDefault(require('@babel/runtime/helpers/createSuper'));

var _storeUtils = require('@top-datav/store-utils');

var _layer = require('./layer');

var Canvas = /*#__PURE__*/ (function (_Layer) {
  (0, _inherits2.default)(Canvas, _Layer);

  var _super = (0, _createSuper2.default)(Canvas);

  function Canvas(parentElem) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var TID = arguments.length > 2 ? arguments[2] : undefined;
    (0, _classCallCheck2.default)(this, Canvas);
    _this = _super.call(this, TID);
    _this.parentElem = void 0;
    _this.options = void 0;
    _this.data = void 0;
    _this.canvas = document.createElement('canvas');
    _this.width = 0;
    _this.height = 0;
    _this.parentElem = parentElem;
    _this.options = options;
    _this.data = _storeUtils.Store.get(_this.generateStoreKey('topology-data'));
    _this.canvas.style.position = 'absolute';
    _this.canvas.style.left = '0';
    _this.canvas.style.top = '0';
    _this.canvas.style.outline = 'none';

    if (!Canvas.dpiRatio) {
      if (!options.extDpiRatio && options.extDpiRatio !== 0) {
        if (window.devicePixelRatio > 1) {
          options.extDpiRatio = 0.25;
        } else {
          options.extDpiRatio = 0;
        }
      }

      Canvas.dpiRatio = window.devicePixelRatio + options.extDpiRatio;

      if (Canvas.dpiRatio < 1) {
        Canvas.dpiRatio = 1;
      }
    }

    return _this;
  }

  (0, _createClass2.default)(Canvas, [
    {
      key: 'resize',
      value: function resize(size) {
        if (size) {
          this.width = size.width | 0;
          this.height = size.height | 0;
        } else {
          if (this.options.width && this.options.width !== 'auto') {
            this.width = +this.options.width;
          } else {
            this.width = this.parentElem.clientWidth;
          }

          if (this.options.height && this.options.height !== 'auto') {
            this.height = +this.options.height;
          } else {
            this.height = this.parentElem.clientHeight;
          }
        }

        this.canvas.style.width = this.width + 'px';
        this.canvas.style.height = this.height + 'px';
        this.canvas.width = (this.width * Canvas.dpiRatio) | 0;
        this.canvas.height = (this.height * Canvas.dpiRatio) | 0;
        this.canvas.getContext('2d').scale(Canvas.dpiRatio, Canvas.dpiRatio);

        _storeUtils.Store.set(this.generateStoreKey('LT:size'), {
          width: this.canvas.width,
          height: this.canvas.height,
        });
      },
    },
    {
      key: 'render',
      value: function render() {
        var ctx = this.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      },
    },
    {
      key: 'getDpiRatio',
      value: function getDpiRatio() {
        return Canvas.dpiRatio;
      },
    },
  ]);
  return Canvas;
})(_layer.Layer);

exports.Canvas = Canvas;
Canvas.dpiRatio = 0;
