'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.layout = layout;

var _createForOfIteratorHelper2 = _interopRequireDefault(
  require('@babel/runtime/helpers/createForOfIteratorHelper'),
);

var _core = require('@top-datav/core');

var _align = require('./align');

function layout(pens, params) {
  var spaceWidth = params.spaceWidth || 30;
  var spaceHeight = params.spaceHeight || 30;
  var rect = (0, _core.getRect)(pens);
  var left = rect.x;
  var top = rect.y;
  var rows = [];
  var row = [];
  var maxHeight = 0;

  var _iterator = (0, _createForOfIteratorHelper2.default)(pens),
    _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var _item = _step.value;

      if (_item.type === _core.PenType.Line) {
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
    var r = (0, _core.getRect)(item);
    r.width = params.maxWidth;
    (0, _align.alignNodes)(item, r, 'middle');

    if (params.maxCount > 0) {
      (0, _align.spaceBetween)(item, params.maxWidth);
    }
  }
}
