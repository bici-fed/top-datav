"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBboxOfPoints = getBboxOfPoints;
exports.getRect = getRect;

var _node = require("../models/node");

var _line = require("../models/line");

var _curve = require("../middles/lines/curve");

var _rect = require("../models/rect");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function getRect(pens) {
  var points = [];

  var _iterator = _createForOfIteratorHelper(pens),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;

      if (item instanceof _node.Node) {
        var pts = item.rect.toPoints();

        if (item.rotate) {
          var _iterator2 = _createForOfIteratorHelper(pts),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var pt = _step2.value;
              pt.rotate(item.rotate, item.rect.center);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }

        points.push.apply(points, pts);
      } else if (item instanceof _line.Line) {
        // points.push(item.from);
        // points.push(item.to);
        if (item.name === 'curve') {
          for (var i = 0.01; i < 1; i += 0.02) {
            points.push((0, _curve.getBezierPoint)(i, item.from, item.controlPoints[0], item.controlPoints[1], item.to));
          }
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var _getBboxOfPoints = getBboxOfPoints(points),
      x1 = _getBboxOfPoints.x1,
      y1 = _getBboxOfPoints.y1,
      x2 = _getBboxOfPoints.x2,
      y2 = _getBboxOfPoints.y2;

  return new _rect.Rect(x1, y1, x2 - x1, y2 - y1);
}

function getBboxOfPoints(points) {
  var x1 = Infinity;
  var y1 = Infinity;
  var x2 = -Infinity;
  var y2 = -Infinity;

  var _iterator3 = _createForOfIteratorHelper(points),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var item = _step3.value;
      var x = item.x,
          y = item.y;
      x1 = Math.min(x1, x);
      y1 = Math.min(y1, y);
      x2 = Math.max(x2, x);
      y2 = Math.max(y2, y);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  return {
    x1: x1,
    y1: y1,
    x2: x2,
    y2: y2
  };
}