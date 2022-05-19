"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calcPolylineControlPoints = calcPolylineControlPoints;
exports.dockPolylineControlPoint = dockPolylineControlPoint;
exports.pointInPolyline = pointInPolyline;
exports.polyline = polyline;
exports.polylineControlPoints = polylineControlPoints;

var _point = require("../../models/point");

var _direction = require("../../models/direction");

var _canvas = require("../../utils/canvas");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var minDistance = 50;

function polyline(ctx, l) {
  ctx.beginPath();
  ctx.moveTo(l.from.x, l.from.y);

  var _iterator = _createForOfIteratorHelper(l.controlPoints),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      ctx.lineTo(item.x, item.y);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  ctx.lineTo(l.to.x, l.to.y);
  ctx.stroke();
}

function polylineControlPoints(ctx, l) {
  ctx.save();
  ctx.fillStyle = '#fff';
  ctx.lineWidth = 2;

  var _iterator2 = _createForOfIteratorHelper(l.controlPoints),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var item = _step2.value;
      ctx.beginPath();
      ctx.arc(item.x, item.y, 4, 0, Math.PI * 2);
      ctx.stroke();
      ctx.fill();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  ctx.restore();
}

function calcPolylineControlPoints(l) {
  l.controlPoints = [];
  var from = getDirectionPoint(l.from, l.to);

  if (l.from.direction) {
    l.controlPoints.push(from);
  }

  var to = getDirectionPoint(l.to, l.from);
  var pts;

  switch (from.direction) {
    case _direction.Direction.Up:
      pts = getNextPointByUp(from, to);
      break;

    case _direction.Direction.Right:
      pts = getNextPointByRight(from, to);
      break;

    case _direction.Direction.Bottom:
      pts = getNextPointByBottom(from, to);
      break;

    case _direction.Direction.Left:
      pts = getNextPointByLeft(from, to);
      break;
  }

  l.controlPoints.push.apply(l.controlPoints, pts);

  if (l.to.direction) {
    l.controlPoints.push(to);
  }
}

function pointInPolyline(point, l) {
  if (!l.controlPoints || !l.controlPoints.length) {
    return (0, _canvas.pointInLine)(point, l.from, l.to);
  }

  if ((0, _canvas.pointInLine)(point, l.from, l.controlPoints[0])) {
    return true;
  }

  if ((0, _canvas.pointInLine)(point, l.to, l.controlPoints[l.controlPoints.length - 1])) {
    return true;
  }

  for (var i = 0; i < l.controlPoints.length - 1; ++i) {
    if ((0, _canvas.pointInLine)(point, l.controlPoints[i], l.controlPoints[i + 1])) {
      return true;
    }
  }

  return false;
}

function dockPolylineControlPoint(point, l) {
  var pts = [l.from];
  pts.push.apply(pts, l.controlPoints);
  pts.push(l.to);

  for (var _i = 0, _pts = pts; _i < _pts.length; _i++) {
    var item = _pts[_i];

    if (Math.abs(point.x - item.x) < 7) {
      point.x = item.x;
    }

    if (Math.abs(point.y - item.y) < 7) {
      point.y = item.y;
    }
  }
}

function getDirectionPoint(pt, to) {
  var point = pt.clone();

  switch (pt.direction) {
    case _direction.Direction.Up:
      if (to.y < pt.y) {
        point.y -= Math.round((pt.y - to.y) / 2);
      } else {
        point.y -= minDistance;
      }

      break;

    case _direction.Direction.Right:
      if (to.x > pt.x) {
        point.x += Math.round((to.x - pt.x) / 2);
      } else {
        point.x += minDistance;
      }

      break;

    case _direction.Direction.Bottom:
      if (to.y > pt.y) {
        point.y += Math.round((to.y - pt.y) / 2);
      } else {
        point.y += minDistance;
      }

      break;

    case _direction.Direction.Left:
      if (to.x < pt.x) {
        point.x -= Math.round((pt.x - to.x) / 2);
      } else {
        point.x -= minDistance;
      }

      break;
  }

  return point;
}

function getNextPointByUp(from, to) {
  if (from.x === to.x || from.y === to.y) {
    return [];
  } // The to point above the from point.


  if (from.y > to.y) {
    if (to.direction === _direction.Direction.Up && from.y - to.y > 3 * minDistance) {
      if (from.x < to.x) {
        if (to.x - from.x < minDistance) {
          return [new _point.Point(from.x - 2 * minDistance, from.y), new _point.Point(from.x - 2 * minDistance, to.y)];
        }

        return [new _point.Point(from.x, to.y)];
      } else {
        if (from.x - to.x < minDistance) {
          return [new _point.Point(from.x + 2 * minDistance, from.y), new _point.Point(from.x + 2 * minDistance, to.y)];
        }

        return [new _point.Point(from.x, to.y)];
      }
    } else {
      // Left top
      if (to.direction === _direction.Direction.Left && from.x > to.x || to.direction === _direction.Direction.Right && from.x < to.x) {
        return [new _point.Point(to.x, from.y)];
      }

      return [new _point.Point(from.x, to.y)];
    } // The to point below the from point.

  } else {
    if (to.direction === _direction.Direction.Bottom) {
      if (from.x < to.x) {
        return getHorizontalPoints(from, to);
      } else {
        var pts = getHorizontalPoints(to, from);
        return [pts[1], pts[0]];
      }
    } else {
      return [new _point.Point(to.x, from.y)];
    }
  }
}

function getNextPointByBottom(from, to) {
  if (from.x === to.x || from.y === to.y) {
    return [];
  } // The to point below the from point.


  if (from.y < to.y) {
    if (to.direction === _direction.Direction.Bottom && to.y - from.y > 3 * minDistance) {
      if (from.x < to.x) {
        if (to.x - from.x < minDistance) {
          return [new _point.Point(from.x - 2 * minDistance, from.y), new _point.Point(from.x - 2 * minDistance, to.y)];
        }

        return [new _point.Point(from.x, to.y)];
      } else {
        if (from.x - to.x < minDistance) {
          return [new _point.Point(from.x + 2 * minDistance, from.y), new _point.Point(from.x + 2 * minDistance, to.y)];
        }

        return [new _point.Point(from.x, to.y)];
      }
    } else {
      if (to.direction === _direction.Direction.Left && from.x > to.x || to.direction === _direction.Direction.Right && from.x < to.x) {
        return [new _point.Point(to.x, from.y)];
      }

      return [new _point.Point(from.x, to.y)];
    } // The to point below the from point.

  } else {
    if (to.direction === _direction.Direction.Up) {
      if (from.x < to.x) {
        return getHorizontalPoints(from, to);
      } else {
        var pts = getHorizontalPoints(to, from);
        return [pts[1], pts[0]];
      }
    } else {
      return [new _point.Point(to.x, from.y)];
    }
  }
}

function getNextPointByLeft(from, to) {
  if (from.x === to.x || from.y === to.y) {
    return [];
  } // The to point is on the left.


  if (from.x > to.x) {
    if (to.direction === _direction.Direction.Left && from.x - to.x > 3 * minDistance) {
      if (from.y < to.y) {
        if (to.y - from.y < minDistance) {
          return [new _point.Point(from.x, from.y + 2 * minDistance), new _point.Point(to.x, from.y + 2 * minDistance)];
        }

        return [new _point.Point(to.x, from.y)];
      } else {
        if (from.y - to.y < minDistance) {
          return [new _point.Point(from.x, from.y - 2 * minDistance), new _point.Point(to.x, from.y - 2 * minDistance)];
        }

        return [new _point.Point(to.x, from.y)];
      }
    } else {
      if (to.direction === _direction.Direction.Left || to.direction === _direction.Direction.Up && from.y < to.y || to.direction === _direction.Direction.Bottom && from.y > to.y) {
        return [new _point.Point(to.x, from.y)];
      }

      return [new _point.Point(from.x, to.y)];
    } // The to point is on the right.

  } else {
    if (to.direction === _direction.Direction.Right) {
      if (from.y < to.y) {
        return getVerticalPoints(from, to);
      } else {
        var pts = getVerticalPoints(to, from);
        return [pts[1], pts[0]];
      }
    } else {
      return [new _point.Point(from.x, to.y)];
    }
  }
}

function getNextPointByRight(from, to) {
  if (from.x === to.x || from.y === to.y) {
    return [];
  } // The to point is on the right.


  if (from.x < to.x) {
    if (to.direction === _direction.Direction.Right && to.x - from.x > 3 * minDistance) {
      if (from.y < to.y) {
        if (to.y - from.y < minDistance) {
          return [new _point.Point(from.x, from.y - 2 * minDistance), new _point.Point(to.x, from.y - 2 * minDistance)];
        }

        return [new _point.Point(to.x, from.y)];
      } else {
        if (from.y - to.y < minDistance) {
          return [new _point.Point(from.x, from.y + 2 * minDistance), new _point.Point(to.x, from.y + 2 * minDistance)];
        }

        return [new _point.Point(to.x, from.y)];
      }
    } else {
      if (to.direction === _direction.Direction.Right || to.direction === _direction.Direction.Up && from.y < to.y || to.direction === _direction.Direction.Bottom && from.y > to.y) {
        return [new _point.Point(to.x, from.y)];
      }

      return [new _point.Point(from.x, to.y)];
    } // The to point is on the left.

  } else {
    if (to.direction === _direction.Direction.Left) {
      if (from.y < to.y) {
        return getVerticalPoints(from, to);
      } else {
        var pts = getVerticalPoints(to, from);
        return [pts[1], pts[0]];
      }
    } else {
      return [new _point.Point(from.x, to.y)];
    }
  }
}

function getHorizontalPoints(left, right) {
  var x = left.x + (right.x - left.x) / 2;
  return [new _point.Point(x, left.y), new _point.Point(x, right.y)];
}

function getVerticalPoints(up, bottom) {
  var y = up.y + (bottom.y - up.y) / 2;
  return [new _point.Point(up.x, y), new _point.Point(bottom.x, y)];
}