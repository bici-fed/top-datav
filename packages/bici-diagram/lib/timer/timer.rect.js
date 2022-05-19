"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.biciTimerIconRect = biciTimerIconRect;
exports.biciTimerTextRect = biciTimerTextRect;

var _core = require("@top-datav/core");

function biciTimerIconRect(node) {
  node.iconRect = new _core.Rect(0, 0, 0, 0);
}

function biciTimerTextRect(node) {
  var w = node.rect.width * 5 / 7;
  var h = node.rect.height * 5 / 7;
  node.textRect = new _core.Rect(node.rect.x + (node.rect.width - w) / 2, node.rect.y + (node.rect.height - h) / 2, w, h);
  node.fullTextRect = node.textRect;
}