'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.messageAnchors = messageAnchors;

var _point = require('../../models/point');

var _direction = require('../../models/direction');

function messageAnchors(node) {
  node.anchors.push(
    new _point.Point(
      node.rect.x,
      node.rect.y + (node.rect.height * 3) / 8,
      _direction.Direction.Left,
    ),
  );
  node.anchors.push(
    new _point.Point(node.rect.x + node.rect.width / 2, node.rect.y, _direction.Direction.Up),
  );
  node.anchors.push(
    new _point.Point(
      node.rect.x + node.rect.width,
      node.rect.y + (node.rect.height * 3) / 8,
      _direction.Direction.Right,
    ),
  );
  node.anchors.push(
    new _point.Point(node.rect.x + node.rect.width / 4, node.rect.ey, _direction.Direction.Bottom),
  );
}
