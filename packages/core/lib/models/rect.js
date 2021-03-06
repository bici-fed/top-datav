'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Rect = void 0;

var _createForOfIteratorHelper2 = _interopRequireDefault(
  require('@babel/runtime/helpers/createForOfIteratorHelper'),
);

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _point = require('./point');

var _canvas = require('../utils/canvas');

var Rect = /*#__PURE__*/ (function () {
  function Rect(x, y, width, height) {
    (0, _classCallCheck2.default)(this, Rect);
    this.x = void 0;
    this.y = void 0;
    this.width = void 0;
    this.height = void 0;
    this.ex = void 0;
    this.ey = void 0;
    this.center = new _point.Point(0, 0);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    if (width < 0) {
      width = 0;
    }

    if (height < 0) {
      height = 0;
    }

    this.init();
  }

  (0, _createClass2.default)(Rect, [
    {
      key: 'init',
      value: function init() {
        this.ex = this.x + this.width;
        this.ey = this.y + this.height;
        this.calcCenter();
      },
    },
    {
      key: 'floor',
      value: function floor() {
        this.x |= 0;
        this.y |= 0;
        this.width |= 0;
        this.height |= 0;
        this.init();
      },
    },
    {
      key: 'round',
      value: function round() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        this.init();
      },
    },
    {
      key: 'clone',
      value: function clone() {
        return new Rect(this.x, this.y, this.width, this.height);
      },
    },
    {
      key: 'hit',
      value: function hit(pt) {
        var padding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return (
          pt.x > this.x - padding &&
          pt.x < this.ex + padding &&
          pt.y > this.y - padding &&
          pt.y < this.ey + padding
        );
      },
    },
    {
      key: 'hitByRect',
      value: function hitByRect(rect) {
        return (
          (rect.x > this.x && rect.x < this.ex && rect.y > this.y && rect.y < this.ey) ||
          (rect.ex > this.x && rect.ex < this.ex && rect.y > this.y && rect.y < this.ey) ||
          (rect.ex > this.x && rect.ex < this.ex && rect.ey > this.y && rect.ey < this.ey) ||
          (rect.x > this.x && rect.x < this.ex && rect.ey > this.y && rect.ey < this.ey)
        );
      },
    },
    {
      key: 'hitRotate',
      value: function hitRotate(point, rotate, center) {
        var pts = this.toPoints();

        var _iterator = (0, _createForOfIteratorHelper2.default)(pts),
          _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var pt = _step.value;
            pt.rotate(rotate, center);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return (0, _canvas.pointInRect)(point, pts);
      },
    },
    {
      key: 'calcCenter',
      value: function calcCenter() {
        this.center.x = this.x + this.width / 2;
        this.center.y = this.y + this.height / 2;
      },
    },
    {
      key: 'toPoints',
      value: function toPoints() {
        return [
          new _point.Point(this.x, this.y),
          new _point.Point(this.ex, this.y),
          new _point.Point(this.ex, this.ey),
          new _point.Point(this.x, this.ey),
        ];
      },
    },
    {
      key: 'translate',
      value: function translate(x, y) {
        this.x += x;
        this.y += y;
        this.ex += x;
        this.ey += y;
        this.calcCenter();
      },
    },
    {
      key: 'scale',
      value: function scale(_scale, center, scaleY) {
        if (!center) {
          center = this.center;
        }

        if (scaleY === undefined) {
          scaleY = _scale;
        }

        this.x = center.x - (center.x - this.x) * _scale;
        this.y = center.y - (center.y - this.y) * scaleY;
        this.width *= _scale;
        this.height *= scaleY;
        this.init();
      },
    },
  ]);
  return Rect;
})();

exports.Rect = Rect;
