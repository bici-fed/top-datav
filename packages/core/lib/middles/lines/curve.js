'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.calcCurveControlPoints = calcCurveControlPoints;
exports.curve = curve;
exports.curveControlPoints = curveControlPoints;
exports.generateStoreKey = generateStoreKey;
exports.getBezierPoint = getBezierPoint;
exports.getControlPt = getControlPt;
exports.pointInCurve = pointInCurve;

var _createForOfIteratorHelper2 = _interopRequireDefault(
  require('@babel/runtime/helpers/createForOfIteratorHelper'),
);

var _storeUtils = require('@top-datav/store-utils');

var _point = require('../../models/point');

var _direction = require('../../models/direction');

var _canvas = require('../../utils/canvas');

var distance = 80;

function curve(ctx, l) {
  ctx.beginPath();
  ctx.moveTo(l.from.x, l.from.y);
  ctx.bezierCurveTo(
    l.controlPoints[0].x,
    l.controlPoints[0].y,
    l.controlPoints[1].x,
    l.controlPoints[1].y,
    l.to.x,
    l.to.y,
  );
  ctx.stroke();
}

function curveControlPoints(ctx, l) {
  ctx.save();
  ctx.fillStyle = ctx.strokeStyle + '80';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(l.from.x, l.from.y);
  ctx.lineTo(l.controlPoints[0].x, l.controlPoints[0].y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(l.to.x, l.to.y);
  ctx.lineTo(l.controlPoints[1].x, l.controlPoints[1].y);
  ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.lineWidth = 2;

  var _iterator = (0, _createForOfIteratorHelper2.default)(l.controlPoints),
    _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var item = _step.value;
      ctx.beginPath();
      ctx.arc(item.x, item.y, 4, 0, Math.PI * 2);
      ctx.stroke();
      ctx.fill();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  ctx.restore();
}

function calcCurveControlPoints(l) {
  if (!l.from.direction) {
    l.from.direction = _direction.Direction.Bottom;
  }

  if (!l.to.direction) {
    l.to.direction = (l.from.direction + 2) % 4;

    if (!l.to.direction) {
      l.to.direction = _direction.Direction.Left;
    }
  }

  l.controlPoints = [getControlPt(l.from, l.to), getControlPt(l.to, l.from)];

  _storeUtils.Store.set(generateStoreKey(l, 'pts-') + l.id, null);
}

function pointInCurve(point, l) {
  var points = _storeUtils.Store.get(generateStoreKey(l, 'pts-') + l.id);

  if (!points) {
    points = [l.from];

    for (var i = 0.01; i < 1; i += 0.01) {
      points.push(getBezierPoint(i, l.from, l.controlPoints[0], l.controlPoints[1], l.to));
    }

    points.push(l.to);

    _storeUtils.Store.set(generateStoreKey(l, 'pts-') + l.id, points);
  }

  var cnt = points.length - 1;

  for (var _i = 0; _i < cnt; ++_i) {
    if ((0, _canvas.pointInLine)(point, points[_i], points[_i + 1])) {
      return true;
    }
  }

  return false;
} // Get a point in bezier.
// pos - The position of point in bezier. It is expressed as a percentage(0 - 1).

function getBezierPoint(pos, from, cp1, cp2, to) {
  var x1 = from.x,
    y1 = from.y;
  var x2 = to.x,
    y2 = to.y;
  var cx1 = cp1.x,
    cy1 = cp1.y;
  var cx2 = cp2.x,
    cy2 = cp2.y;
  var x =
    x1 * (1 - pos) * (1 - pos) * (1 - pos) +
    3 * cx1 * pos * (1 - pos) * (1 - pos) +
    3 * cx2 * pos * pos * (1 - pos) +
    x2 * pos * pos * pos;
  var y =
    y1 * (1 - pos) * (1 - pos) * (1 - pos) +
    3 * cy1 * pos * (1 - pos) * (1 - pos) +
    3 * cy2 * pos * pos * (1 - pos) +
    y2 * pos * pos * pos;
  return new _point.Point(x, y);
}

function getControlPt(pt, to) {
  var point = new _point.Point(pt.x, pt.y, pt.direction, pt.anchorIndex, pt.id);
  var dis = window.topologyControlPtDistance || distance;

  if (
    (pt.direction === _direction.Direction.Up || pt.direction === _direction.Direction.Bottom) &&
    Math.abs(pt.x - to.x) < 3
  ) {
    if (to.y > pt.y) {
      dis = Math.round((to.y - pt.y) / 3);
      point.y += dis;
    } else {
      dis = Math.round((pt.y - to.y) / 3);
      point.y -= dis;
    }

    return point;
  }

  if (
    (pt.direction === _direction.Direction.Left || pt.direction === _direction.Direction.Right) &&
    Math.abs(pt.y - to.y) < 3
  ) {
    if (to.x > pt.x) {
      dis = Math.round((to.x - pt.x) / 3);
      point.x += dis;
    } else {
      dis = Math.round((pt.x - to.x) / 3);
      point.x -= dis;
    }

    return point;
  }

  switch (pt.direction) {
    case _direction.Direction.Up:
      point.y -= dis;
      break;

    case _direction.Direction.Right:
      point.x += dis;
      break;

    case _direction.Direction.Bottom:
      point.y += dis;
      break;

    case _direction.Direction.Left:
      point.x -= dis;
      break;
  }

  return point;
}

function generateStoreKey(pen, key) {
  return ''.concat(pen.getTID(), '-').concat(key);
}
