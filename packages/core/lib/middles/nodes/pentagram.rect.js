'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.pentagramIconRect = pentagramIconRect;
exports.pentagramTextRect = pentagramTextRect;

var _rect = require('../../models/rect');

function pentagramIconRect(node) {
  node.iconRect = new _rect.Rect(0, 0, 0, 0);
}

function pentagramTextRect(node) {
  var w = (node.rect.width * 2) / 5;
  var h = (node.rect.height * 2) / 5;
  node.fullTextRect = new _rect.Rect(
    node.rect.x + (node.rect.width - w) / 2,
    node.rect.y + (node.rect.height - h) / 2,
    w,
    h,
  );
  node.textRect = node.fullTextRect;
}
