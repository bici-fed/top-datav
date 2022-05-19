'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.forkIconRect = forkIconRect;
exports.forkTextRect = forkTextRect;

var _core = require('@top-datav/core');

function forkIconRect(node) {
  node.iconRect = new _core.Rect(0, 0, 0, 0);
}

function forkTextRect(node) {
  node.textRect = new _core.Rect(node.rect.x, node.rect.y, node.rect.width, node.rect.height);
  node.fullTextRect = node.textRect;
}
