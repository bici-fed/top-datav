"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultAnchors = defaultAnchors;

var _point = require("../models/point");

var _direction = require("../models/direction");

function defaultAnchors(node) {
  node.anchors.push(new _point.Point(node.rect.x, node.rect.y + node.rect.height / 2, _direction.Direction.Left));
  node.anchors.push(new _point.Point(node.rect.x + node.rect.width / 2, node.rect.y, _direction.Direction.Up));
  node.anchors.push(new _point.Point(node.rect.x + node.rect.width, node.rect.y + node.rect.height / 2, _direction.Direction.Right));
  node.anchors.push(new _point.Point(node.rect.x + node.rect.width / 2, node.rect.y + node.rect.height, _direction.Direction.Bottom));
}