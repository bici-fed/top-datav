'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.RenderLayer = void 0;

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _createSuper2 = _interopRequireDefault(require('@babel/runtime/helpers/createSuper'));

var _storeUtils = require('@top-datav/store-utils');

var _canvas = require('./canvas');

var _math = require('./utils/math');

var RenderLayer = /*#__PURE__*/ (function (_Canvas) {
  (0, _inherits2.default)(RenderLayer, _Canvas);

  var _super = (0, _createSuper2.default)(RenderLayer);

  function RenderLayer(parentElem) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var TID = arguments.length > 2 ? arguments[2] : undefined;
    (0, _classCallCheck2.default)(this, RenderLayer);
    _this = _super.call(this, parentElem, options, TID);
    _this.parentElem = void 0;
    _this.options = void 0;
    _this.offscreen = void 0;
    _this.data = null;
    _this.bkImg = void 0;
    _this.bkImgRect = void 0;

    _this.render = function () {
      if (_this.data && _this.data.bkImage && !_this.bkImgRect) {
        _this.loadBkImg(_this.render);

        return;
      }

      if (!_this.width || !_this.height || !_this.offscreen) {
        return;
      }

      var ctx = _this.canvas.getContext('2d');

      ctx.clearRect(0, 0, _this.canvas.width, _this.canvas.height);

      if (_this.data.bkColor || _this.options.bkColor) {
        ctx.fillStyle = _this.data.bkColor || _this.options.bkColor;
        ctx.fillRect(0, 0, _this.width, _this.height);
      }

      if (_this.bkImg && _this.bkImgRect) {
        ctx.drawImage(_this.bkImg, 0, 0, _this.width, _this.height);
      }

      if (_this.data.grid || _this.options.grid) {
        _this.grid();
      }

      if (_this.data.rule || _this.options.rule) {
        _this.rule();
      }

      ctx.drawImage(_this.offscreen, 0, 0, _this.width, _this.height);
    };

    _this.parentElem = parentElem;
    _this.options = options;
    _this.offscreen = _storeUtils.Store.get(_this.generateStoreKey('LT:offscreen'));

    _this.parentElem.appendChild(_this.canvas);

    _this.data = _storeUtils.Store.get(_this.generateStoreKey('topology-data'));
    return _this;
  }

  (0, _createClass2.default)(RenderLayer, [
    {
      key: 'loadBkImg',
      value: function loadBkImg(cb) {
        var _this2 = this;

        if (!this.data.bkImage) {
          return;
        }

        this.bkImg = new Image(); // this.bkImg.crossOrigin = 'anonymous';

        this.bkImg.src = this.data.bkImage;

        this.bkImg.onload = function () {
          _this2.bkImgRect = _this2.coverRect(
            _this2.canvas.width,
            _this2.canvas.height,
            _this2.bkImg.width,
            _this2.bkImg.height,
          );

          if (cb) {
            cb();
          }
        };
      },
    },
    {
      key: 'clearBkImg',
      value: function clearBkImg() {
        this.bkImgRect = null;
      },
    },
    {
      key: 'rule',
      value: function rule() {
        var ctx = this.canvas.getContext('2d');
        ctx.save();
        ctx.lineWidth = 1;
        ctx.strokeStyle = (0, _math.rgba)(
          0.7,
          this.data.ruleColor || this.options.ruleColor || '#888',
        );
        ctx.beginPath();

        for (var i = 10; i < this.width; i += 10) {
          ctx.moveTo(i, 0);
          ctx.lineTo(i, 5);
        }

        for (var _i = 10; _i < this.height; _i += 10) {
          ctx.moveTo(0, _i);
          ctx.lineTo(5, _i);
        }

        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = this.data.ruleColor || this.options.ruleColor || '#888';
        ctx.fillStyle = ctx.strokeStyle;

        for (var _i2 = 100; _i2 < this.width; _i2 += 100) {
          ctx.moveTo(_i2, 0);
          ctx.lineTo(_i2, 10);
          ctx.fillText(_i2.toString(), _i2 + 4, 16);
        }

        for (var _i3 = 100; _i3 < this.height; _i3 += 100) {
          ctx.moveTo(0, _i3);
          ctx.lineTo(10, _i3);
        }

        ctx.stroke();

        for (var _i4 = 100; _i4 < this.height; _i4 += 100) {
          ctx.save();
          ctx.beginPath();
          ctx.translate(16, _i4 - 4);
          ctx.rotate((270 * Math.PI) / 180);
          ctx.fillText(_i4.toString(), 0, 0);
          ctx.restore();
        }

        ctx.restore();
      },
    },
    {
      key: 'grid',
      value: function grid() {
        var ctx = this.canvas.getContext('2d');
        ctx.save();
        ctx.lineWidth = 1;
        ctx.strokeStyle = this.data.gridColor || this.options.gridColor || '#f3f3f3';
        ctx.beginPath();
        var size = this.data.gridSize || this.options.gridSize;

        for (var i = size; i < this.width; i += size) {
          ctx.moveTo(i, 0);
          ctx.lineTo(i, this.height);
        }

        for (var _i5 = size; _i5 < this.height; _i5 += size) {
          ctx.moveTo(0, _i5);
          ctx.lineTo(this.width, _i5);
        }

        ctx.stroke();
        ctx.restore();
      },
    },
    {
      key: 'coverRect',
      value: function coverRect(canvasWidth, canvasHeight, imgWidth, imgHeight) {
        var x = 0;
        var y = 0;
        var width = imgWidth;
        var height = imgHeight;

        if (imgWidth > imgHeight || (imgWidth === imgHeight && canvasWidth < canvasHeight)) {
          width = (canvasWidth * height) / canvasHeight;
          x = (imgWidth - width) / 2;
        } else if (imgWidth < imgHeight || (imgWidth === imgHeight && canvasWidth > canvasHeight)) {
          height = (canvasHeight * width) / canvasWidth;
          y = (imgHeight - height) / 2;
        }

        return {
          x: x,
          y: y,
          width: width,
          height: height,
        };
      },
    },
  ]);
  return RenderLayer;
})(_canvas.Canvas);

exports.RenderLayer = RenderLayer;
