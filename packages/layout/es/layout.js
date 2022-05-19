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

import { PenType, getRect } from '@top-datav/core';
import { alignNodes, spaceBetween } from './align';
export function layout(pens, params) {
  var spaceWidth = params.spaceWidth || 30;
  var spaceHeight = params.spaceHeight || 30;
  var rect = getRect(pens);
  var left = rect.x;
  var top = rect.y;
  var rows = [];
  var row = [];
  var maxHeight = 0;

  var _iterator = _createForOfIteratorHelper(pens),
    _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var _item = _step.value;

      if (_item.type === PenType.Line) {
        continue;
      }

      if (params.nodeWidth > 0) {
        _item.rect.width = params.nodeWidth;
      }

      if (params.nodeHeight > 0) {
        _item.rect.height = params.nodeHeight;
      }

      if (_item.rect.height > maxHeight) {
        maxHeight = _item.rect.height;
      }

      _item.rect.x = left;
      _item.rect.y = top;

      _item.rect.init();

      row.push(_item);
      left += _item.rect.width + spaceWidth;

      if (left > params.maxWidth || (params.maxCount > 0 && row.length >= params.maxCount)) {
        rows.push(row);
        row = [];
        left = rect.x;
        top += maxHeight + spaceHeight;
        maxHeight = 0;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  rows.push(row);

  for (var _i = 0, _rows = rows; _i < _rows.length; _i++) {
    var item = _rows[_i];
    var r = getRect(item);
    r.width = params.maxWidth;
    alignNodes(item, r, 'middle');

    if (params.maxCount > 0) {
      spaceBetween(item, params.maxWidth);
    }
  }
}