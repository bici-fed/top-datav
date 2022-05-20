'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.getBboxOfPoints = getBboxOfPoints;
exports.getRect = getRect;

var _createForOfIteratorHelper2 = _interopRequireDefault(
  require('@babel/runtime/helpers/createForOfIteratorHelper'),
);

var _node = require('../models/node');

var _line = require('../models/line');

var _curve = require('../middles/lines/curve');

var _rect = require('../models/rect');

function getRect(pens) {
  var points = [];

  var _iterator = (0, _createForOfIteratorHelper2.default)(pens),
    _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var item = _step.value;

      if (item instanceof _node.Node) {
        var pts = item.rect.toPoints();

        if (item.rotate) {
          var _iterator2 = (0, _createForOfIteratorHelper2.default)(pts),
            _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
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
            points.push(
              (0, _curve.getBezierPoint)(
                i,
                item.from,
                item.controlPoints[0],
                item.controlPoints[1],
                item.to,
              ),
            );
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

  var _iterator3 = (0, _createForOfIteratorHelper2.default)(points),
    _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
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
    y2: y2,
  };
}
