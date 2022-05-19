'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.pentagonAnchors = pentagonAnchors;

var _point = require('../../models/point');

var _direction = require('../../models/direction');

function pentagonAnchors(node) {
  node.anchors.push(
    new _point.Point(node.rect.x + node.rect.width / 2, node.rect.y, _direction.Direction.Up),
  );
  node.anchors.push(
    new _point.Point(
      node.rect.x + node.rect.width,
      node.rect.y + (node.rect.height * 2) / 5,
      _direction.Direction.Right,
    ),
  );
  node.anchors.push(
    new _point.Point(
      node.rect.x + (node.rect.width * 4) / 5,
      node.rect.y + node.rect.height,
      _direction.Direction.Bottom,
    ),
  );
  node.anchors.push(
    new _point.Point(
      node.rect.x + node.rect.width / 5,
      node.rect.y + node.rect.height,
      _direction.Direction.Bottom,
    ),
  );
  node.anchors.push(
    new _point.Point(
      node.rect.x,
      node.rect.y + (node.rect.height * 2) / 5,
      _direction.Direction.Left,
    ),
  );
}
