'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.pentagramAnchors = pentagramAnchors;

var _point = require('../../models/point');

var _direction = require('../../models/direction');

function pentagramAnchors(node) {
  node.anchors.push(
    new _point.Point(
      (Math.cos((18 / 180) * Math.PI) * node.rect.width) / 2 + node.rect.x + node.rect.width / 2,
      (-Math.sin((18 / 180) * Math.PI) * node.rect.width) / 2 + node.rect.y + node.rect.height / 2,
      _direction.Direction.Right,
    ),
  );
  node.anchors.push(
    new _point.Point(
      (Math.cos(((18 + 72) / 180) * Math.PI) * node.rect.width) / 2 +
        node.rect.x +
        node.rect.width / 2,
      (-Math.sin(((18 + 72) / 180) * Math.PI) * node.rect.width) / 2 +
        node.rect.y +
        node.rect.height / 2,
      _direction.Direction.Up,
    ),
  );
  node.anchors.push(
    new _point.Point(
      (Math.cos(((18 + 72 * 2) / 180) * Math.PI) * node.rect.width) / 2 +
        node.rect.x +
        node.rect.width / 2,
      (-Math.sin(((18 + 72 * 2) / 180) * Math.PI) * node.rect.width) / 2 +
        node.rect.y +
        node.rect.height / 2,
      _direction.Direction.Left,
    ),
  );
  node.anchors.push(
    new _point.Point(
      (Math.cos(((18 + 72 * 3) / 180) * Math.PI) * node.rect.width) / 2 +
        node.rect.x +
        node.rect.width / 2,
      (-Math.sin(((18 + 72 * 3) / 180) * Math.PI) * node.rect.width) / 2 +
        node.rect.y +
        node.rect.height / 2,
      _direction.Direction.Bottom,
    ),
  );
  node.anchors.push(
    new _point.Point(
      (Math.cos(((18 + 72 * 4) / 180) * Math.PI) * node.rect.width) / 2 +
        node.rect.x +
        node.rect.width / 2,
      (-Math.sin(((18 + 72 * 4) / 180) * Math.PI) * node.rect.width) / 2 +
        node.rect.y +
        node.rect.height / 2,
      _direction.Direction.Bottom,
    ),
  );
}
