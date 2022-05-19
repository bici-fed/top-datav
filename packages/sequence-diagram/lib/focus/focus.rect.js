"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequenceFocusIconRect = sequenceFocusIconRect;
exports.sequenceFocusTextRect = sequenceFocusTextRect;

var _core = require("@top-datav/core");

function sequenceFocusIconRect(node) {
  node.iconRect = new _core.Rect(0, 0, 0, 0);
}

function sequenceFocusTextRect(node) {
  node.textRect = new _core.Rect(0, 0, 0, 0);
  node.fullTextRect = node.textRect;
}