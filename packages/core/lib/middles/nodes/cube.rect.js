'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.cubeIconRect = cubeIconRect;
exports.cubeTextRect = cubeTextRect;

var _rect = require('../../models/rect');

function cubeIconRect(node) {
  node.fullIconRect = node.fullTextRect;
  node.iconRect = new _rect.Rect(
    node.fullIconRect.x,
    node.fullIconRect.y,
    node.fullIconRect.width,
    (node.fullIconRect.height * 2) / 3,
  );
}

function cubeTextRect(node) {
  var offset = node.z * Math.sin((45 * Math.PI) / 180);
  node.fullTextRect = new _rect.Rect(
    node.rect.x,
    node.rect.y + offset,
    node.rect.width - offset,
    node.rect.height - offset,
  );
  node.textRect = new _rect.Rect(
    node.fullTextRect.x + 10,
    node.fullTextRect.y + (node.fullTextRect.height * 2) / 3,
    node.fullTextRect.width - 20,
    node.fullTextRect.height / 3 - 5,
  );
}
