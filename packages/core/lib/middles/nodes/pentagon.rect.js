'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.pentagonIconRect = pentagonIconRect;
exports.pentagonTextRect = pentagonTextRect;

var _rect = require('../../models/rect');

function pentagonIconRect(node) {
  var w = node.rect.width / 2;
  var h = node.rect.height / 2;

  if (w > h) {
    w = h;
  } else {
    h = w;
  }

  var top = node.rect.height / 7;

  if (top < 10) {
    top = 10;
  }

  node.iconRect = new _rect.Rect(node.rect.x + (node.rect.width - w) / 2, node.rect.y + top, w, h);
}

function pentagonTextRect(node) {
  node.textRect = new _rect.Rect(
    node.rect.x + node.rect.width / 5,
    node.rect.y + (node.rect.height * 5) / 7,
    (node.rect.width * 3) / 5,
    node.rect.height / 4,
  );
  var w = (node.rect.width * 3) / 5;
  var h = (node.rect.height * 3) / 5;
  node.fullTextRect = new _rect.Rect(
    node.rect.x + (node.rect.width - w) / 2,
    node.rect.y + node.rect.height / 4,
    w,
    h,
  );
}
