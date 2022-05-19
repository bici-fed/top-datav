'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.cloudAnchors = cloudAnchors;

var _point = require('../../models/point');

var _direction = require('../../models/direction');

function cloudAnchors(node) {
  node.anchors.push(
    new _point.Point(
      node.rect.x,
      node.rect.y + (node.rect.height * 3) / 5,
      _direction.Direction.Left,
    ),
  );
  node.anchors.push(
    new _point.Point(
      node.rect.x + node.rect.width / 2,
      node.rect.y + node.rect.height / 9,
      _direction.Direction.Up,
    ),
  );
  node.anchors.push(
    new _point.Point(
      node.rect.x + node.rect.width,
      node.rect.y + (node.rect.height * 3) / 5,
      _direction.Direction.Right,
    ),
  );
  node.anchors.push(
    new _point.Point(
      node.rect.x + node.rect.width / 2,
      node.rect.y + (node.rect.height * 4) / 5,
      _direction.Direction.Bottom,
    ),
  );
}
