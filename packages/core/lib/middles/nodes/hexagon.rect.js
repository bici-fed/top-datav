'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.hexagonIconRect = hexagonIconRect;
exports.hexagonTextRect = hexagonTextRect;

var _rect = require('../../models/rect');

function hexagonIconRect(node) {
  var w = (node.rect.width * 3) / 5;
  var h = (node.rect.height * 3) / 4;
  node.iconRect = new _rect.Rect(
    node.rect.x + node.rect.width / 5 + node.paddingLeftNum,
    node.rect.y + node.paddingTopNum,
    w - node.paddingLeftNum - node.paddingRightNum,
    h - node.paddingTopNum - node.paddingBottomNum,
  );
  node.fullIconRect = new _rect.Rect(
    node.rect.x + node.rect.width / 5 + node.paddingLeftNum,
    node.rect.y + node.paddingTopNum,
    w - node.paddingLeftNum - node.paddingRightNum,
    node.rect.height - node.paddingTopNum - node.paddingBottomNum,
  );
}

function hexagonTextRect(node) {
  var w = (node.rect.width * 3) / 5;
  var h = node.rect.height / 4;
  node.textRect = new _rect.Rect(
    node.rect.x + node.rect.width / 5 + node.paddingLeftNum,
    node.rect.y + node.rect.height - h + node.paddingTopNum,
    w - node.paddingLeftNum - node.paddingRightNum,
    h,
  );
  node.fullTextRect = new _rect.Rect(
    node.rect.x + node.rect.width / 5 + node.paddingLeftNum,
    node.rect.y + node.paddingTopNum,
    w - node.paddingLeftNum - node.paddingRightNum,
    node.rect.height - node.paddingTopNum - node.paddingBottomNum,
  );
}
