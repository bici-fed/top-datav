function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = (typeof Symbol !== 'undefined' && o[Symbol.iterator]) || o['@@iterator'];
  if (!it) {
    if (
      Array.isArray(o) ||
      (it = _unsupportedIterableToArray(o)) ||
      (allowArrayLike && o && typeof o.length === 'number')
    ) {
      if (it) o = it;
      var i = 0;
      var F = function F() {};
      return {
        s: F,
        n: function n() {
          if (i >= o.length) return { done: true };
          return { done: false, value: o[i++] };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F,
      };
    }
    throw new TypeError(
      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
    );
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    },
  };
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

import { Store } from '@top-datav/store-utils';
import { Point } from '../../models/point';
import { Direction } from '../../models/direction';
import { pointInLine } from '../../utils/canvas';
var distance = 80;
export function curve(ctx, l) {
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
export function curveControlPoints(ctx, l) {
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

  var _iterator = _createForOfIteratorHelper(l.controlPoints),
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
export function calcCurveControlPoints(l) {
  if (!l.from.direction) {
    l.from.direction = Direction.Bottom;
  }

  if (!l.to.direction) {
    l.to.direction = (l.from.direction + 2) % 4;

    if (!l.to.direction) {
      l.to.direction = Direction.Left;
    }
  }

  l.controlPoints = [getControlPt(l.from, l.to), getControlPt(l.to, l.from)];
  Store.set(generateStoreKey(l, 'pts-') + l.id, null);
}
export function pointInCurve(point, l) {
  var points = Store.get(generateStoreKey(l, 'pts-') + l.id);

  if (!points) {
    points = [l.from];

    for (var i = 0.01; i < 1; i += 0.01) {
      points.push(getBezierPoint(i, l.from, l.controlPoints[0], l.controlPoints[1], l.to));
    }

    points.push(l.to);
    Store.set(generateStoreKey(l, 'pts-') + l.id, points);
  }

  var cnt = points.length - 1;

  for (var _i = 0; _i < cnt; ++_i) {
    if (pointInLine(point, points[_i], points[_i + 1])) {
      return true;
    }
  }

  return false;
} // Get a point in bezier.
// pos - The position of point in bezier. It is expressed as a percentage(0 - 1).

export function getBezierPoint(pos, from, cp1, cp2, to) {
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
  return new Point(x, y);
}
export function getControlPt(pt, to) {
  var point = new Point(pt.x, pt.y, pt.direction, pt.anchorIndex, pt.id);
  var dis = window.topologyControlPtDistance || distance;

  if (
    (pt.direction === Direction.Up || pt.direction === Direction.Bottom) &&
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
    (pt.direction === Direction.Left || pt.direction === Direction.Right) &&
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
    case Direction.Up:
      point.y -= dis;
      break;

    case Direction.Right:
      point.x += dis;
      break;

    case Direction.Bottom:
      point.y += dis;
      break;

    case Direction.Left:
      point.x -= dis;
      break;
  }

  return point;
}
export function generateStoreKey(pen, key) {
  return ''.concat(pen.getTID(), '-').concat(key);
}
