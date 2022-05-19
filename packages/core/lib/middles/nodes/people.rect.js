"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.peopleIconRect = peopleIconRect;
exports.peopleTextRect = peopleTextRect;

var _rect = require("../../models/rect");

function peopleIconRect(node) {
  node.iconRect = new _rect.Rect(0, 0, 0, 0);
}

function peopleTextRect(node) {
  node.textRect = new _rect.Rect(0, 0, 0, 0);
  node.fullTextRect = node.textRect;
}