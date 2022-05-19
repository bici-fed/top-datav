"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.circleAnchors = circleAnchors;

var _point = require("../../models/point");

var _direction = require("../../models/direction");

function circleAnchors(node) {
  node.anchors.push(new _point.Point(node.rect.x, node.rect.y + node.rect.height / 2, _direction.Direction.Left));
  node.anchors.push(new _point.Point(node.rect.x + node.rect.width / 2, node.rect.y, _direction.Direction.Up));
  node.anchors.push(new _point.Point(node.rect.x + node.rect.width, node.rect.y + node.rect.height / 2, _direction.Direction.Right));
  node.anchors.push(new _point.Point(node.rect.x + node.rect.width / 2, node.rect.y + node.rect.height, _direction.Direction.Bottom));

  for (var i = 5; i < 360; i += 5) {
    if (i % 90 === 0) {
      continue;
    }

    var direction = Math.round(i / 90);
    var pt = new _point.Point(node.rect.center.x + Math.sin(i / 180 * Math.PI) * node.rect.width / 2, node.rect.center.y + Math.cos(i / 180 * Math.PI) * node.rect.height / 2, direction);
    pt.hidden = true;
    node.anchors.push(pt);
  }
}