'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.defaultIconRect = defaultIconRect;
exports.defaultTextRect = defaultTextRect;

var _rect = require('../models/rect');

function defaultIconRect(node) {
  if (node.image && node.imageWidth) {
    node.iconRect = new _rect.Rect(
      node.rect.x + node.paddingLeftNum,
      node.rect.y + node.paddingTopNum,
      node.imageWidth,
      node.imageHeight,
    );
  } else if (node.icon && node.iconSize) {
    node.iconRect = new _rect.Rect(
      node.rect.x + node.paddingLeftNum,
      node.rect.y + node.paddingTopNum,
      node.iconSize,
      node.iconSize,
    );
  } else {
    node.iconRect = new _rect.Rect(
      node.rect.x + node.paddingLeftNum,
      node.rect.y + node.paddingTopNum,
      node.rect.width - node.paddingLeftNum - node.paddingRightNum,
      (node.rect.height * 3) / 4 - node.paddingTopNum - node.paddingBottomNum,
    );
  }

  node.fullIconRect = new _rect.Rect(
    node.rect.x + node.paddingLeftNum,
    node.rect.y + node.paddingTopNum,
    node.rect.width - node.paddingLeftNum - node.paddingRightNum,
    node.rect.height - node.paddingTopNum - node.paddingBottomNum,
  );
}

function defaultTextRect(node) {
  var height = node.rect.height - node.paddingTopNum - node.paddingBottomNum;
  node.textRect = new _rect.Rect(
    node.rect.x + node.paddingLeftNum,
    node.rect.y + node.paddingTopNum + (height * 3) / 4,
    node.rect.width - node.paddingLeftNum - node.paddingRightNum,
    height / 4,
  );
  node.fullTextRect = new _rect.Rect(
    node.rect.x + node.paddingLeftNum,
    node.rect.y + node.paddingTopNum,
    node.rect.width - node.paddingLeftNum - node.paddingRightNum,
    height,
  );
}
