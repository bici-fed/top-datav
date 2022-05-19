"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.biciMeasureIconRect = biciMeasureIconRect;
exports.biciMeasureTextRect = biciMeasureTextRect;

var _core = require("@top-datav/core");

function biciMeasureIconRect(node) {
  node.iconRect = new _core.Rect(0, 0, 0, 0);
}

function biciMeasureTextRect(node) {
  var w = 200;
  var h = 30;
  node.textRect = new _core.Rect(node.rect.x + node.rect.width, node.rect.y + (node.rect.height - h) / 2, w, h);
  node.fullTextRect = node.textRect;
}