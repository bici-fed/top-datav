'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.interfaceClassIconRect = interfaceClassIconRect;
exports.interfaceClassTextRect = interfaceClassTextRect;
exports.simpleClassIconRect = simpleClassIconRect;
exports.simpleClassTextRect = simpleClassTextRect;

var _core = require('@top-datav/core');

function simpleClassIconRect(node) {
  node.iconRect = new _core.Rect(0, 0, 0, 0);
}

function simpleClassTextRect(node) {
  node.textRect = new _core.Rect(node.rect.x, node.rect.y, node.rect.width, 40);
  node.fullTextRect = node.textRect;
}

function interfaceClassIconRect(node) {
  node.iconRect = new _core.Rect(0, 0, 0, 0);
}

function interfaceClassTextRect(node) {
  node.textRect = new _core.Rect(node.rect.x, node.rect.y, node.rect.width, 40);
  node.fullTextRect = node.textRect;
}
