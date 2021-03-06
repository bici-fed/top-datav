'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.alignNodes = alignNodes;
exports.spaceBetween = spaceBetween;
exports.spaceBetweenColumn = spaceBetweenColumn;

var _createForOfIteratorHelper2 = _interopRequireDefault(
  require('@babel/runtime/helpers/createForOfIteratorHelper'),
);

var _core = require('@top-datav/core');

function alignNodes(pens, rect, align) {
  var _iterator = (0, _createForOfIteratorHelper2.default)(pens),
    _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var item = _step.value;

      if (!(item instanceof _core.Node)) {
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

function spaceBetween(pens, width) {
  pens = pens.sort(function (a, b) {
    return a.rect.x - b.rect.x;
  });
  var space = 0;
  var cnt = 0;

  var _iterator2 = (0, _createForOfIteratorHelper2.default)(pens),
    _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var item = _step2.value;

      if (!(item instanceof _core.Node)) {
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

  var _iterator3 = (0, _createForOfIteratorHelper2.default)(pens),
    _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
      var _item = _step3.value;

      if (!(_item instanceof _core.Node)) {
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

function spaceBetweenColumn(pens, height) {
  pens = pens.sort(function (a, b) {
    return a.rect.y - b.rect.y;
  });
  var space = 0;
  var cnt = 0;

  var _iterator4 = (0, _createForOfIteratorHelper2.default)(pens),
    _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
      var item = _step4.value;

      if (!(item instanceof _core.Node)) {
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

  var _iterator5 = (0, _createForOfIteratorHelper2.default)(pens),
    _step5;

  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
      var _item2 = _step5.value;

      if (!(_item2 instanceof _core.Node)) {
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
