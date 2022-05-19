"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequenceFocusAnchors = sequenceFocusAnchors;

var _core = require("@top-datav/core");

function sequenceFocusAnchors(node) {
  node.anchors.push(new _core.Point(node.rect.x + node.rect.width / 2, node.rect.y, _core.Direction.Up));
  node.anchors.push(new _core.Point(node.rect.x + node.rect.width / 2, node.rect.ey, _core.Direction.Bottom));
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