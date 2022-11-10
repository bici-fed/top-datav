function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

import { Point } from '../../models/point';
import { pSBC } from '../../utils/math';
export var Surface = /*#__PURE__*/function () {
  function Surface(pt1, pt2, pt3, pt4) {
    var fillStyle = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
    var strokeStyle = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';

    _classCallCheck(this, Surface);

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

  _createClass(Surface, [{
    key: "render",
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
    }
  }]);

  return Surface;
}();
export var Cube = /*#__PURE__*/function () {
  function Cube(rect, z, zRotate) {
    var fillStyle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '#ddd';
    var strokeStyle = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '#ccc';

    _classCallCheck(this, Cube);

    this.surfaces = [];
    var offset = z * Math.sin(45 * Math.PI / 180);
    var p1 = new Point(rect.x, rect.y + offset);
    var p2 = new Point(rect.ex - offset, rect.y + offset);
    var p3 = new Point(rect.ex - offset, rect.ey);
    var p4 = new Point(rect.x, rect.ey); // front

    this.surfaces.push(new Surface(p1, p2, p3, p4, fillStyle, strokeStyle)); // up

    this.surfaces.push(new Surface(p1, new Point(rect.x + offset, rect.y), new Point(rect.ex, rect.y), p2, pSBC(0.5, fillStyle), strokeStyle)); // right

    this.surfaces.push(new Surface(p2, new Point(rect.ex, rect.y), new Point(rect.ex, rect.ey - offset), p3, pSBC(0.6, fillStyle), strokeStyle));
  }

  _createClass(Cube, [{
    key: "render",
    value: function render(ctx) {
      var _iterator = _createForOfIteratorHelper(this.surfaces),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          item.render(ctx);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }]);

  return Cube;
}();