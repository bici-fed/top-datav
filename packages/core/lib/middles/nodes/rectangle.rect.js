'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.rectangleIconRect = rectangleIconRect;
exports.rectangleTextRect = rectangleTextRect;

var _rect = require('../../models/rect');

function rectangleIconRect(node) {
  node.iconRect = new _rect.Rect(
    node.rect.x + node.paddingLeftNum,
    node.rect.y + node.paddingTopNum,
    node.rect.height - node.paddingTopNum - node.paddingBottomNum,
    node.rect.height - node.paddingTopNum - node.paddingBottomNum,
  );
  node.fullIconRect = new _rect.Rect(
    node.rect.x + node.paddingLeftNum,
    node.rect.y + node.paddingTopNum,
    node.rect.width - node.paddingLeftNum - node.paddingRightNum,
    node.rect.height - node.paddingTopNum - node.paddingBottomNum,
  );
}

function rectangleTextRect(node) {
  var height = node.rect.height - node.paddingTopNum - node.paddingBottomNum;
  node.textRect = new _rect.Rect(
    node.rect.x + node.paddingLeftNum + height,
    node.rect.y + node.paddingTopNum,
    node.rect.width - node.paddingLeftNum - node.paddingRightNum - height,
    height,
  );
  node.fullTextRect = new _rect.Rect(
    node.rect.x + node.paddingLeftNum,
    node.rect.y + node.paddingTopNum,
    node.rect.width - node.paddingLeftNum - node.paddingRightNum,
    height,
  );
}
