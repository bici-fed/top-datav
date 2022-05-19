'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.diamondIconRect = diamondIconRect;
exports.diamondTextRect = diamondTextRect;

var _rect = require('../../models/rect');

function diamondIconRect(node) {
  var w = node.rect.width / 3;
  var h = node.rect.height / 3;

  if (w > h) {
    w = h;
  } else {
    h = w;
  }

  var top = node.rect.width / 5;

  if (top < 10) {
    top = 10;
  }

  node.iconRect = new _rect.Rect(node.rect.x + (node.rect.width - w) / 2, node.rect.y + top, w, h);
}

function diamondTextRect(node) {
  var bottom = node.rect.height / 10;

  if (bottom < 5) {
    bottom = 0;
  }

  node.textRect = new _rect.Rect(
    node.rect.x + node.rect.width / 3,
    node.rect.y + (node.rect.height * 2) / 3 - bottom,
    node.rect.width / 3,
    node.rect.height / 3 - 5,
  );
  var w = node.rect.width / 2;
  var h = (node.rect.height * 1) / 2;
  node.fullTextRect = new _rect.Rect(
    node.rect.x + (node.rect.width - w) / 2,
    node.rect.y + node.rect.height / 4,
    w,
    h,
  );
}
