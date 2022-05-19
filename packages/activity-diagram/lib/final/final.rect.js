'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.activityFinalIconRect = activityFinalIconRect;
exports.activityFinalTextRect = activityFinalTextRect;

var _core = require('@top-datav/core');

function activityFinalIconRect(node) {
  node.iconRect = new _core.Rect(0, 0, 0, 0);
}

function activityFinalTextRect(node) {
  var w = (node.rect.width * 5) / 7;
  var h = (node.rect.height * 5) / 7;
  node.textRect = new _core.Rect(
    node.rect.x + (node.rect.width - w) / 2,
    node.rect.y + (node.rect.height - h) / 2,
    w,
    h,
  );
  node.fullTextRect = node.textRect;
}
