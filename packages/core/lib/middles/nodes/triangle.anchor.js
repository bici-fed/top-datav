"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.triangleAnchors = triangleAnchors;

var _point = require("../../models/point");

var _direction = require("../../models/direction");

function triangleAnchors(node) {
  node.anchors.push(new _point.Point(node.rect.x + node.rect.width / 2, node.rect.y, _direction.Direction.Up));
  node.anchors.push(new _point.Point(node.rect.x + node.rect.width * 3 / 4, node.rect.y + node.rect.height / 2, _direction.Direction.Right));
  node.anchors.push(new _point.Point(node.rect.x + node.rect.width / 2, node.rect.y + node.rect.height, _direction.Direction.Bottom));
  node.anchors.push(new _point.Point(node.rect.x + node.rect.width / 4, node.rect.y + node.rect.height / 2, _direction.Direction.Left));
}