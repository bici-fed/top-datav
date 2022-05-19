'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.forkHAnchors = forkHAnchors;
exports.forkVAnchors = forkVAnchors;

var _core = require('@top-datav/core');

function forkHAnchors(node) {
  node.anchors.push(
    new _core.Point(node.rect.x, node.rect.y + node.rect.height / 2, _core.Direction.Left),
  );
  node.anchors.push(
    new _core.Point(node.rect.ex, node.rect.y + node.rect.height / 2, _core.Direction.Right),
  );
  var dis = 5;

  for (var i = dis; node.rect.x + i < node.rect.ex; i = i + dis) {
    var pt1 = new _core.Point(node.rect.x + i, node.rect.y, _core.Direction.Up);
    var pt2 = new _core.Point(node.rect.x + i, node.rect.ey, _core.Direction.Bottom);
    pt1.hidden = true;
    pt2.hidden = true;
    node.anchors.push(pt1);
    node.anchors.push(pt2);
  }
}

function forkVAnchors(node) {
  node.anchors.push(
    new _core.Point(node.rect.x + node.rect.width / 2, node.rect.y, _core.Direction.Up),
  );
  node.anchors.push(
    new _core.Point(node.rect.x + node.rect.width / 2, node.rect.ey, _core.Direction.Bottom),
  );
  var dis = 5;

  for (var i = dis; node.rect.y + i < node.rect.ey; i = i + dis) {
    var pt1 = new _core.Point(node.rect.x, node.rect.y + i, _core.Direction.Left);
    var pt2 = new _core.Point(node.rect.ex, node.rect.y + i, _core.Direction.Right);
    pt1.hidden = true;
    pt2.hidden = true;
    node.anchors.push(pt1);
    node.anchors.push(pt2);
  }
}
