"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.swimlaneVIconRect = swimlaneVIconRect;
exports.swimlaneVTextRect = swimlaneVTextRect;

var _core = require("@top-datav/core");

function swimlaneVIconRect(node) {
  node.iconRect = new _core.Rect(0, 0, 0, 0);
}

function swimlaneVTextRect(node) {
  node.textRect = new _core.Rect(node.rect.x, node.rect.y, node.rect.width, 40);
  node.fullTextRect = node.textRect;
}