'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.swimlaneHIconRect = swimlaneHIconRect;
exports.swimlaneHTextRect = swimlaneHTextRect;

var _core = require('@top-datav/core');

function swimlaneHIconRect(node) {
  node.iconRect = new _core.Rect(0, 0, 0, 0);
}

function swimlaneHTextRect(node) {
  node.textRect = new _core.Rect(node.rect.x + 10, node.rect.y, 20, node.rect.height);
  node.fullTextRect = node.textRect;
}
