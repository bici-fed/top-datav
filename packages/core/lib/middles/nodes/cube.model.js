'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Surface = exports.Cube = void 0;

var _createForOfIteratorHelper2 = _interopRequireDefault(
  require('@babel/runtime/helpers/createForOfIteratorHelper'),
);

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _point = require('../../models/point');

var _math = require('../../utils/math');

var Surface = /*#__PURE__*/ (function () {
  function Surface(pt1, pt2, pt3, pt4) {
    var fillStyle = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
    var strokeStyle = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
    (0, _classCallCheck2.default)(this, Surface);
    this.points = [];
    this.fillStyle = '';
    this.strokeStyle = '';
    this.points.push(pt1);
    this.points.push(pt2);
    this.points.push(pt3);
    this.points.push(pt4);
    this.fillStyle = fillStyle;
    this.strokeStyle = strokeStyle || fillStyle;
  }

  (0, _createClass2.default)(Surface, [
    {
      key: 'render',
      value: function render(ctx) {
        ctx.save();
        ctx.fillStyle = this.fillStyle;
        ctx.strokeStyle = this.strokeStyle;
        ctx.beginPath();

        for (var i = 0; i < this.points.length; ++i) {
          if (i) {
            ctx.lineTo(this.points[i].x, this.points[i].y);
          } else {
            ctx.moveTo(this.points[i].x, this.points[i].y);
          }
        }

        ctx.closePath();
        this.fillStyle && ctx.fill();
        ctx.stroke();
        ctx.restore();
      },
    },
  ]);
  return Surface;
})();

exports.Surface = Surface;

var Cube = /*#__PURE__*/ (function () {
  function Cube(rect, z, zRotate) {
    var fillStyle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '#ddd';
    var strokeStyle = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '#ccc';
    (0, _classCallCheck2.default)(this, Cube);
    this.surfaces = [];
    var offset = z * Math.sin((45 * Math.PI) / 180);
    var p1 = new _point.Point(rect.x, rect.y + offset);
    var p2 = new _point.Point(rect.ex - offset, rect.y + offset);
    var p3 = new _point.Point(rect.ex - offset, rect.ey);
    var p4 = new _point.Point(rect.x, rect.ey); // front

    this.surfaces.push(new Surface(p1, p2, p3, p4, fillStyle, strokeStyle)); // up

    this.surfaces.push(
      new Surface(
        p1,
        new _point.Point(rect.x + offset, rect.y),
        new _point.Point(rect.ex, rect.y),
        p2,
        (0, _math.pSBC)(0.5, fillStyle),
        strokeStyle,
      ),
    ); // right

    this.surfaces.push(
      new Surface(
        p2,
        new _point.Point(rect.ex, rect.y),
        new _point.Point(rect.ex, rect.ey - offset),
        p3,
        (0, _math.pSBC)(0.6, fillStyle),
        strokeStyle,
      ),
    );
  }

  (0, _createClass2.default)(Cube, [
    {
      key: 'render',
      value: function render(ctx) {
        var _iterator = (0, _createForOfIteratorHelper2.default)(this.surfaces),
          _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var item = _step.value;
            item.render(ctx);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      },
    },
  ]);
  return Cube;
})();

exports.Cube = Cube;
