function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import { Node } from '@top-datav/core';
export function alignNodes(pens, rect, align) {
  var _iterator = _createForOfIteratorHelper(pens),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;

      if (!(item instanceof Node)) {
        continue;
      }

      switch (align) {
        case 'left':
          item.rect.x = rect.x;
          break;

        case 'right':
          item.rect.x = rect.ex - item.rect.width;
          break;

        case 'top':
          item.rect.y = rect.y;
          break;

        case 'bottom':
          item.rect.y = rect.ey - item.rect.height;
          break;

        case 'center':
          item.rect.x = rect.center.x - item.rect.width / 2;
          break;

        case 'middle':
          item.rect.y = rect.center.y - item.rect.height / 2;
          break;
      }

      item.rect.floor();
      item.rect.calcCenter();
      item.init();
      item.calcChildrenRect();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
export function spaceBetween(pens, width) {
  pens = pens.sort(function (a, b) {
    return a.rect.x - b.rect.x;
  });
  var space = 0;
  var cnt = 0;

  var _iterator2 = _createForOfIteratorHelper(pens),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var item = _step2.value;

      if (!(item instanceof Node)) {
        continue;
      }

      space += item.rect.width;
      ++cnt;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  space = (width - space) / (cnt - 1);
  var left = 0;

  var _iterator3 = _createForOfIteratorHelper(pens),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _item = _step3.value;

      if (!(_item instanceof Node)) {
        continue;
      }

      if (!left) {
        left = _item.rect.x;
      }

      _item.rect.x = left;
      left += _item.rect.width + space;

      _item.rect.floor();

      _item.rect.calcCenter();

      _item.init();

      _item.calcChildrenRect();
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
}
export function spaceBetweenColumn(pens, height) {
  pens = pens.sort(function (a, b) {
    return a.rect.y - b.rect.y;
  });
  var space = 0;
  var cnt = 0;

  var _iterator4 = _createForOfIteratorHelper(pens),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var item = _step4.value;

      if (!(item instanceof Node)) {
        continue;
      }

      space += item.rect.height;
      ++cnt;
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  space = (height - space) / (cnt - 1);
  var top = 0;

  var _iterator5 = _createForOfIteratorHelper(pens),
      _step5;

  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var _item2 = _step5.value;

      if (!(_item2 instanceof Node)) {
        continue;
      }

      if (!top) {
        top = _item2.rect.y;
      }

      _item2.rect.y = top;
      top += _item2.rect.height + space;

      _item2.rect.floor();

      _item2.rect.calcCenter();

      _item2.init();

      _item2.calcChildrenRect();
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
}