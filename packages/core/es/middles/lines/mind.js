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
import { getBezierPoint, generateStoreKey } from './curve';
var distance = 8;
export function mind(ctx, l) {
  ctx.beginPath();
  ctx.moveTo(l.from.x, l.from.y);
  ctx.lineTo(l.controlPoints[0].x, l.controlPoints[0].y);
  ctx.bezierCurveTo(
    l.controlPoints[1].x,
    l.controlPoints[1].y,
    l.controlPoints[2].x,
    l.controlPoints[2].y,
    l.to.x,
    l.to.y,
  );
  ctx.stroke();
}
export function mindControlPoints(ctx, l) {
  ctx.save();
  ctx.fillStyle = ctx.strokeStyle + '80';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(l.controlPoints[0].x, l.controlPoints[0].y);
  ctx.lineTo(l.controlPoints[1].x, l.controlPoints[1].y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(l.to.x, l.to.y);
  ctx.lineTo(l.controlPoints[2].x, l.controlPoints[2].y);
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
export function calcMindControlPoints(l) {
  if (!l.from.direction) {
    l.from.direction = Direction.Bottom;
  }

  if (!l.to.direction) {
    l.to.direction = (l.from.direction + 2) % 4;

    if (!l.to.direction) {
      l.to.direction = Direction.Left;
    }
  }

  var from = new Point(l.from.x, l.from.y, l.from.direction);

  switch (l.from.direction) {
    case Direction.Up:
      from.y -= distance;
      break;

    case Direction.Right:
      from.x += distance;
      break;

    case Direction.Bottom:
      from.y += distance;
      break;

    case Direction.Left:
      from.x -= distance;
      break;
  }

  var w = l.to.x - from.x;
  var h = l.to.y - from.y;

  if (l.from.direction === Direction.Left || l.from.direction === Direction.Right) {
    l.controlPoints = [from, new Point(from.x, from.y + h / 3), new Point(from.x, l.to.y)];
  } else {
    l.controlPoints = [from, new Point(from.x + w / 3, from.y), new Point(l.to.x, from.y)];
  }

  Store.set(generateStoreKey(l, 'pts-') + l.id, null);
}
export function pointInMind(point, l) {
  var points = Store.get(generateStoreKey(l, 'pts-') + l.id);

  if (!points) {
    points = [l.from];

    for (var i = 0.01; i < 1; i += 0.01) {
      points.push(
        getBezierPoint(i, l.controlPoints[0], l.controlPoints[1], l.controlPoints[2], l.to),
      );
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
}
