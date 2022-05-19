'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.simpleCardIconRect = simpleCardIconRect;
exports.simpleCardTextRect = simpleCardTextRect;

var _core = require('@top-datav/core');

function simpleCardIconRect(node) {
  node.iconRect = new _core.Rect(0, 0, 0, 0);
}

function simpleCardTextRect(node) {
  node.textRect = new _core.Rect(node.rect.x, node.rect.y, node.rect.width, 40);
  node.fullTextRect = node.textRect;
}
