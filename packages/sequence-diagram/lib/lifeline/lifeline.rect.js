"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lifelineIconRect = lifelineIconRect;
exports.lifelineTextRect = lifelineTextRect;

var _core = require("@top-datav/core");

function lifelineIconRect(node) {
  node.iconRect = new _core.Rect(0, 0, 0, 0);
}

function lifelineTextRect(node) {
  node.textRect = new _core.Rect(node.rect.x, node.rect.y, node.rect.width, 50);
  node.fullTextRect = node.textRect;
}