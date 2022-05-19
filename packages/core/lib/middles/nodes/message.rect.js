'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.messageIconRect = messageIconRect;
exports.messageTextRect = messageTextRect;

var _rect = require('../../models/rect');

function messageIconRect(node) {
  node.iconRect = new _rect.Rect(0, 0, 0, 0);
  node.fullIconRect = node.iconRect;
}

function messageTextRect(node) {
  node.textRect = new _rect.Rect(
    node.rect.x + node.paddingLeftNum,
    node.rect.y + node.paddingTopNum,
    node.rect.width - node.paddingLeftNum - node.paddingRightNum,
    (node.rect.height * 3) / 4 - node.paddingTopNum - node.paddingBottomNum,
  );
  node.fullTextRect = node.textRect;
}
