"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hexagonAnchors = hexagonAnchors;

var _point = require("../../models/point");

var _direction = require("../../models/direction");

function hexagonAnchors(node) {
  node.anchors.push(new _point.Point(node.rect.x + node.rect.width / 2, node.rect.y, _direction.Direction.Up));
  node.anchors.push(new _point.Point(node.rect.x + node.rect.width, node.rect.y + node.rect.height / 2, _direction.Direction.Right));
  node.anchors.push(new _point.Point(node.rect.x + node.rect.width / 2, node.rect.y + node.rect.height, _direction.Direction.Bottom));
  node.anchors.push(new _point.Point(node.rect.x, node.rect.y + node.rect.height / 2, _direction.Direction.Left));
  var ptLT = new _point.Point(node.rect.x + node.rect.width / 10, node.rect.y + node.rect.height / 4, _direction.Direction.Left);
  ptLT.hidden = true;
  node.anchors.push(ptLT);
  var ptRT = new _point.Point(node.rect.x + node.rect.width / 10, node.rect.y + node.rect.height * 3 / 4, _direction.Direction.Left);
  ptRT.hidden = true;
  node.anchors.push(ptRT);
  var ptLB = new _point.Point(node.rect.x + node.rect.width * 9 / 10, node.rect.y + node.rect.height / 4, _direction.Direction.Right);
  ptLB.hidden = true;
  node.anchors.push(ptLB);
  var ptRB = new _point.Point(node.rect.x + node.rect.width * 9 / 10, node.rect.y + node.rect.height * 3 / 4, _direction.Direction.Right);
  ptRB.hidden = true;
  node.anchors.push(ptRB);
}