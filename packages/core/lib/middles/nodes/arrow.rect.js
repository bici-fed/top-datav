'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.leftArrowIconRect = leftArrowIconRect;
exports.leftArrowTextRect = leftArrowTextRect;
exports.rightArrowIconRect = rightArrowIconRect;
exports.rightArrowTextRect = rightArrowTextRect;
exports.twowayArrowIconRect = twowayArrowIconRect;
exports.twowayArrowTextRect = twowayArrowTextRect;

var _rect = require('../../models/rect');

function leftArrowIconRect(node) {
  node.iconRect = new _rect.Rect(0, 0, 0, 0);
}

function leftArrowTextRect(node) {
  node.textRect = new _rect.Rect(
    node.rect.x + node.rect.height / 2,
    node.rect.y + node.rect.height / 3,
    node.rect.width - node.rect.height / 2,
    node.rect.height / 3,
  );
  node.fullTextRect = node.textRect;
}

function rightArrowIconRect(node) {
  node.iconRect = new _rect.Rect(0, 0, 0, 0);
}

function rightArrowTextRect(node) {
  node.textRect = new _rect.Rect(
    node.rect.x,
    node.rect.y + node.rect.height / 3,
    node.rect.width - node.rect.height / 2,
    node.rect.height / 3,
  );
  node.fullTextRect = node.textRect;
}

function twowayArrowIconRect(node) {
  node.iconRect = new _rect.Rect(0, 0, 0, 0);
}

function twowayArrowTextRect(node) {
  node.textRect = new _rect.Rect(
    node.rect.x + node.rect.height / 2,
    node.rect.y + node.rect.height / 3,
    node.rect.width - node.rect.height,
    node.rect.height / 3,
  );
  node.fullTextRect = node.textRect;
}
