'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.lineAnchors = lineAnchors;

var _point = require('../../models/point');

var _direction = require('../../models/direction');

function lineAnchors(node) {
  var y = node.rect.y + node.rect.height / 2;
  node.anchors.push(new _point.Point(node.rect.x, y, _direction.Direction.Left));
  node.anchors.push(new _point.Point(node.rect.x + node.rect.width, y, _direction.Direction.Right));

  for (var i = node.rect.x + 5; i < node.rect.ex; i += 5) {
    var pt = new _point.Point(i, y, _direction.Direction.Bottom);
    pt.hidden = true;
    node.anchors.push(pt);
  }
}
