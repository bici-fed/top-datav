'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.arrowAnchors = arrowAnchors;

var _point = require('../../models/point');

var _direction = require('../../models/direction');

function arrowAnchors(node) {
  node.anchors.push(
    new _point.Point(node.rect.x, node.rect.y + node.rect.height / 2, _direction.Direction.Left),
  );
  node.anchors.push(
    new _point.Point(
      node.rect.x + node.rect.width,
      node.rect.y + node.rect.height / 2,
      _direction.Direction.Right,
    ),
  );
}
