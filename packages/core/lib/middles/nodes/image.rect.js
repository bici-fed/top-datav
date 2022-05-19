'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.imageIconRect = imageIconRect;
exports.imageTextRect = imageTextRect;

var _rect = require('../../models/rect');

var _text = require('./text');

var txtMarginTop = 5;
var minSize = 30;

function imageIconRect(node) {
  var x = node.rect.x;
  var y = node.rect.y;
  var width = node.rect.width;

  if (node.imageWidth) {
    width = node.imageWidth;
    x += (node.rect.width - width) / 2;
  }

  var height = node.rect.height - node.textRect.height - txtMarginTop;

  if (height < minSize) {
    height = minSize;
  }

  var imgHeight = getImgHeight(node);

  if (imgHeight !== minSize) {
    height = imgHeight;
    var txtHeight = node.rect.ey - node.textRect.y;

    if (txtHeight < 0) {
      txtHeight = 0;
    }

    y += (node.rect.height - txtHeight - height) / 2;
  }

  node.iconRect = new _rect.Rect(x, y, width, height);
  node.textRect.y = node.iconRect.ey + txtMarginTop;
  node.textRect.ey = node.textRect.y + node.textRect.height;
  node.fullIconRect = node.rect;
}

function imageTextRect(node) {
  var height = 0;
  var lineHeight = node.font.fontSize * node.font.lineHeight;

  if (node.textMaxLine) {
    height = lineHeight * node.textMaxLine;
  } else {
    var lines = (0, _text.getWrapLines)(
      null,
      (0, _text.getWords)(node.text),
      node.rect.width,
      node.font.fontSize,
    );
    height = lineHeight * lines.length;
  }

  var top = node.rect.ey - height;
  var imgHeight = getImgHeight(node);

  if (top - imgHeight - txtMarginTop < node.rect.y) {
    top = node.rect.y + imgHeight + txtMarginTop;
  }

  node.textRect = new _rect.Rect(node.rect.x, top, node.rect.width, height);
  node.fullTextRect = node.rect;
}

function getImgHeight(node) {
  var imgHeight = minSize;

  if (node.image) {
    if (node.imageHeight > 0) {
      imgHeight = node.imageHeight;
    }
  } else if (node.icon) {
    if (node.iconSize > 0) {
      imgHeight = node.iconSize;
    }
  }

  return imgHeight;
}
