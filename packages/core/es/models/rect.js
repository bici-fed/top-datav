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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, 'prototype', { writable: false });
  return Constructor;
}

import { Point } from './point';
import { pointInRect } from '../utils/canvas';
export var Rect = /*#__PURE__*/ (function () {
  function Rect(x, y, width, height) {
    _classCallCheck(this, Rect);

    this.x = void 0;
    this.y = void 0;
    this.width = void 0;
    this.height = void 0;
    this.ex = void 0;
    this.ey = void 0;
    this.center = new Point(0, 0);
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

  _createClass(Rect, [
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

        var _iterator = _createForOfIteratorHelper(pts),
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

        return pointInRect(point, pts);
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
          new Point(this.x, this.y),
          new Point(this.ex, this.y),
          new Point(this.ex, this.ey),
          new Point(this.x, this.ey),
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
