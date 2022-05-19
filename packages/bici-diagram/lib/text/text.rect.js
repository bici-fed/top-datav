'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.simpleTextIconRect = simpleTextIconRect;
exports.simpleTextTextRect = simpleTextTextRect;

var _core = require('@top-datav/core');

function simpleTextIconRect(node) {
  node.iconRect = new _core.Rect(0, 0, 0, 0);
}

function simpleTextTextRect(node) {
  node.textRect = new _core.Rect(node.rect.x, node.rect.y, node.rect.width, 40);
  node.fullTextRect = node.textRect;
}
