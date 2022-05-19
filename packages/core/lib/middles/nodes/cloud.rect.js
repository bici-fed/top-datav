'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.cloudIconRect = cloudIconRect;
exports.cloudTextRect = cloudTextRect;

var _rect = require('../../models/rect');

function cloudIconRect(node) {
  node.iconRect = new _rect.Rect(0, 0, 0, 0);
}

function cloudTextRect(node) {
  node.textRect = new _rect.Rect(
    node.rect.x + node.rect.width / 4,
    node.rect.y + node.rect.height / 4,
    node.rect.width / 2,
    (node.rect.height * 6) / 11,
  );
  node.fullTextRect = node.textRect;
}
