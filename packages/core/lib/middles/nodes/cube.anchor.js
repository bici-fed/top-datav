'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.cubeAnchors = cubeAnchors;

var _point = require('../../models/point');

var _direction = require('../../models/direction');

function cubeAnchors(node) {
  var offset = node.z * Math.sin((45 * Math.PI) / 180);
  node.anchors.push(
    new _point.Point(
      node.rect.x,
      node.rect.ey - (node.rect.height - offset) / 2,
      _direction.Direction.Left,
    ),
  );
  node.anchors.push(
    new _point.Point(
      node.rect.x + node.rect.width / 2,
      node.rect.y + offset / 2,
      _direction.Direction.Up,
    ),
  );
  node.anchors.push(
    new _point.Point(
      node.rect.ex - offset / 2,
      node.rect.y + node.rect.height / 2,
      _direction.Direction.Right,
    ),
  );
  node.anchors.push(
    new _point.Point(
      node.rect.x + (node.rect.width - offset) / 2,
      node.rect.y + node.rect.height,
      _direction.Direction.Bottom,
    ),
  );
}
