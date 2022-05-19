'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.lineIconRect = lineIconRect;
exports.lineTextRect = lineTextRect;

var _rect = require('../../models/rect');

function lineIconRect(node) {
  node.iconRect = new _rect.Rect(0, 0, 0, 0);
}

function lineTextRect(node) {
  node.fullTextRect = new _rect.Rect(
    node.rect.x + 10,
    node.rect.y + node.rect.height / 2 - 20,
    node.rect.width - 20,
    20,
  );
  node.textRect = node.fullTextRect;
}
